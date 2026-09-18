/**
 * Genera los archivos de marca de `public/marca/` a partir de los originales.
 *
 *   node scripts/marca.mjs              (todas)
 *   node scripts/marca.mjs klinodaClaro (solo una)
 *
 * Se ejecuta a mano, no en cada compilación: los originales cambian una vez al
 * año como mucho y los resultados se versionan. Existe para que dentro de seis
 * meses se sepa CÓMO se hicieron y se puedan rehacer igual.
 *
 * Requiere `sharp`, que ya está como dependencia de desarrollo.
 */
import { readdirSync, statSync } from 'node:fs';
import path from 'node:path';

import sharp from 'sharp';

const MARCA = 'public/marca';

/* ------------------------------------------------------------------ */
/*  CJM Nexus                                                          */
/* ------------------------------------------------------------------ */

/**
 * El isotipo sale de `public/logo.png`, que es el único original con
 * transparencia real. Solo hay que reducirlo: 1024 px y 817 KB para dibujar
 * un icono de 32 px es tirar ancho de banda de cada visita.
 */
async function isotipo() {
  const src = sharp('public/logo.png');
  await src.clone().resize(256, 256).png({ compressionLevel: 9, palette: true }).toFile(`${MARCA}/cjm-isotipo.png`);
  await src.clone().resize(512, 512).webp({ quality: 90 }).toFile(`${MARCA}/cjm-isotipo.webp`);
  await src.clone().resize(180, 180).png({ compressionLevel: 9 }).toFile(`${MARCA}/apple-icon.png`);
  await src.clone().resize(32, 32).png({ compressionLevel: 9 }).toFile(`${MARCA}/favicon-32.png`);
}

/**
 * Versión CLARA del isotipo, para fondos oscuros.
 *
 * El original lleva el dibujo en marino sobre un disco interior casi blanco.
 * Sobre crema eso funciona; sobre la fotografía del hero o sobre marino el
 * disco se recorta contra el fondo y la marca se lee como una pegatina
 * pegada encima, no como parte de la banda.
 *
 * La solución es la misma idea que en `klinodaClaro`, pero al revés: aquí
 * el blanco NO se conserva, se elimina. Se vuelve transparente todo lo casi
 * blanco —el disco y, de paso, los meridianos del globo, que a 27 px solo
 * aportan ruido— y toda la tinta restante pasa a blanco puro. Queda un
 * dibujo de una sola tinta que se apoya en el fondo en lugar de taparlo.
 *
 * Se genera desde `logo.png` y no desde el PNG ya reducido: recortar a 1024
 * y reducir después deja el borde mucho más limpio que al revés.
 */
async function isotipoClaro() {
  const { data, info } = await sharp('public/logo.png')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width: W, height: H, channels: C } = info;

  for (let p = 0; p < W * H; p += 1) {
    const i = p * C;
    if (data[i + 3] < 8) continue;

    const min = Math.min(data[i], data[i + 1], data[i + 2]);
    if (min > 228) {
      data[i + 3] = 0; // el disco interior y los meridianos se van
      continue;
    }
    if (min > 198) {
      // borde suave: lo que roza el blanco se desvanece en lugar de cortarse
      data[i + 3] = Math.round(data[i + 3] * ((228 - min) / 30));
    }
    data[i] = 255;
    data[i + 1] = 255;
    data[i + 2] = 255;
  }

  const raw = { raw: { width: W, height: H, channels: C } };
  const src = sharp(data, raw);
  await src.clone().resize(256, 256).png({ compressionLevel: 9 }).toFile(`${MARCA}/cjm-isotipo-claro.png`);
  await src.clone().resize(512, 512).webp({ quality: 90 }).toFile(`${MARCA}/cjm-isotipo-claro.webp`);
}

/* ------------------------------------------------------------------ */
/*  KLINODA                                                            */
/* ------------------------------------------------------------------ */

/**
 * KLINODA desde su original (`klinoda-origen.png`, 2087 × 753, del repositorio
 * de KLINODA: negro y verde sobre blanco roto, bordes limpios).
 *
 * CÓMO: cada píxel se descompone en cuánto tiene de negro, de verde y de
 * fondo (mínimos cuadrados sobre las tres componentes). La transparencia es
 * negro + verde, así que el borde conserva su suavizado sin halo. Después el
 * negro se pinta de `tinta` y el verde de `acento`. Lo blanco de dentro de la
 * «K» (la hoja, los anillos, la línea) se vuelve transparente, como el fondo.
 *
 * SIN LA FRASE. «Cada persona. Una historia completa.» no se lee a los
 * tamaños en que se usa: se borra de la imagen (todo lo que queda a la derecha
 * del símbolo y por debajo de la palabra). Donde hace falta, la web la
 * escribe como texto (`home.es.js` → `klinoda.lema`).
 */
async function klinodaDesdeOriginal({ tinta, acento, ancho, nombre }) {
  const FONDO = [249, 248, 245];
  const NEGRO = [12, 12, 12];
  const VERDE = [4, 238, 142];
  const FRASE = { x: 560, y: 470 };

  const { data, info } = await sharp(`${MARCA}/klinoda-origen.png`)
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: W, height: H } = info;
  const out = Buffer.alloc(W * H * 4);

  const d1 = NEGRO.map((c, i) => c - FONDO[i]);
  const d2 = VERDE.map((c, i) => c - FONDO[i]);
  const a11 = d1.reduce((s, v) => s + v * v, 0);
  const a12 = d1.reduce((s, v, i) => s + v * d2[i], 0);
  const a22 = d2.reduce((s, v) => s + v * v, 0);
  const det = a11 * a22 - a12 * a12;
  const lim = (v) => Math.min(1, Math.max(0, v));

  for (let p = 0; p < W * H; p += 1) {
    if (p % W >= FRASE.x && ((p / W) | 0) >= FRASE.y) continue;
    const q = [0, 1, 2].map((c) => data[p * 3 + c] - FONDO[c]);
    const b1 = q.reduce((s, v, i) => s + v * d1[i], 0);
    const b2 = q.reduce((s, v, i) => s + v * d2[i], 0);
    const k = lim((a22 * b1 - a12 * b2) / det);
    const g = lim((a11 * b2 - a12 * b1) / det);
    const alfa = Math.min(1, k + g);
    if (alfa < 0.02) continue;
    const t = g / (k + g);
    const o = p * 4;
    for (let c = 0; c < 3; c += 1) out[o + c] = Math.round(tinta[c] * (1 - t) + acento[c] * t);
    out[o + 3] = Math.round(alfa * 255);
  }

  const { data: recortado } = await sharp(out, { raw: { width: W, height: H, channels: 4 } })
    .trim({ threshold: 1 })
    .png()
    .toBuffer({ resolveWithObject: true });
  const src = sharp(recortado).resize({ width: ancho });
  await src.clone().png({ compressionLevel: 9 }).toFile(`${MARCA}/${nombre}.png`);
  await src.clone().webp({ quality: 92, alphaQuality: 100 }).toFile(`${MARCA}/${nombre}.webp`);
}

/**
 * Versión para FONDOS CLAROS: la barra del tablero y la vista de aptitud.
 *
 * Con la marca de KLINODA, la de su plataforma: morado y turquesa, tomados
 * exactos de `static/marca/klinoda-logo-app.png` de su repositorio. Se usa a
 * unos 30–36 px de alto; sale a 800 px de ancho, de sobra para densidad 3.
 */
async function klinodaOscuro() {
  await klinodaDesdeOriginal({
    tinta: [62, 54, 118], // #3E3676
    acento: [50, 133, 145], // #328591
    ancho: 800,
    nombre: 'klinoda',
  });
}

/**
 * Versión CLARA, para la placa marino de la escena y las bandas oscuras: un
 * negativo de una tinta, en blanco, con los nodos en el turquesa de la
 * escena. Se muestra a 460 px como mucho; sale a 1400, para densidad 3.
 */
async function klinodaClaro() {
  await klinodaDesdeOriginal({
    tinta: [255, 255, 255],
    acento: [52, 136, 148],
    ancho: 1400,
    nombre: 'klinoda-claro',
  });
}

/* ------------------------------------------------------------------ */

/* `node scripts/marca.mjs` las rehace todas; con un nombre, solo esa
   (`node scripts/marca.mjs klinodaClaro`). */
const TAREAS = { isotipo, isotipoClaro, klinodaOscuro, klinodaClaro };
const solo = process.argv[2];
for (const [nombre, tarea] of Object.entries(TAREAS)) {
  if (!solo || solo === nombre) await tarea();
}

for (const archivo of readdirSync(MARCA).sort()) {
  if (archivo.endsWith('.md')) continue;
  const ruta = path.join(MARCA, archivo);
  const meta = await sharp(ruta).metadata();
  const kb = (statSync(ruta).size / 1024).toFixed(1);
  console.log(`${archivo.padEnd(26)} ${`${meta.width}x${meta.height}`.padEnd(12)} ${kb} KB`);
}
