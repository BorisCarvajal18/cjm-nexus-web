/**
 * Genera los archivos de marca de `public/marca/` a partir de los originales.
 *
 *   node scripts/marca.mjs
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

/* ------------------------------------------------------------------ */
/*  KLINODA                                                            */
/* ------------------------------------------------------------------ */

/** Píxel casi blanco. */
const esClaro = (d, i) => Math.min(d[i], d[i + 1], d[i + 2]) > 232;

/**
 * Versión para FONDOS CLAROS.
 *
 * Vuelve transparente todo el blanco, incluido el documento que va dentro de
 * la «K». Sobre crema o blanco eso no se nota —el hueco muestra el fondo de la
 * página— y el recorte queda limpio.
 */
async function klinodaOscuro() {
  const { data, info } = await sharp(`${MARCA}/klinoda-origen.jpg`)
    .trim({ threshold: 12 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += info.channels) {
    const min = Math.min(data[i], data[i + 1], data[i + 2]);
    if (min > 236) data[i + 3] = 0;
    else if (min > 205) data[i + 3] = Math.round(((236 - min) / 31) * 255); // borde suave
  }

  const raw = { raw: { width: info.width, height: info.height, channels: info.channels } };
  await sharp(data, raw).png({ compressionLevel: 9 }).toFile(`${MARCA}/klinoda.png`);
  await sharp(data, raw).webp({ quality: 92 }).toFile(`${MARCA}/klinoda.webp`);
}

/**
 * Versión INVERTIDA, para las bandas marino y cobre.
 *
 * Aquí no vale el mismo recorte: al volver transparente todo el blanco
 * desaparece el documento de dentro de la «K» y sobre marino se ve el fondo a
 * través del dibujo. Así que se recorta SOLO el fondo exterior, con un relleno
 * por inundación desde los bordes, y después el morado de marca se pasa a
 * blanco. Los nodos turquesa se quedan como están: son el acento de KLINODA.
 */
async function klinodaClaro() {
  const { data, info } = await sharp(`${MARCA}/klinoda-origen.jpg`)
    .trim({ threshold: 12 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width: W, height: H, channels: C } = info;
  const fondo = new Uint8Array(W * H);
  const pila = [];
  for (let x = 0; x < W; x += 1) pila.push([x, 0], [x, H - 1]);
  for (let y = 0; y < H; y += 1) pila.push([0, y], [W - 1, y]);

  while (pila.length) {
    const [x, y] = pila.pop();
    if (x < 0 || y < 0 || x >= W || y >= H) continue;
    const p = y * W + x;
    if (fondo[p] || !esClaro(data, p * C)) continue;
    fondo[p] = 1;
    pila.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
  }

  for (let p = 0; p < W * H; p += 1) {
    const i = p * C;
    if (fondo[p]) {
      data[i + 3] = 0;
      continue;
    }
    const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
    const esTurquesa = g > r + 25 && g > 110;
    if (esTurquesa) continue;
    const esMorado = b > r && b > 90 && r < 150;
    if (esMorado) {
      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
    }
  }

  const raw = { raw: { width: W, height: H, channels: C } };
  await sharp(data, raw).png({ compressionLevel: 9 }).toFile(`${MARCA}/klinoda-claro.png`);
  await sharp(data, raw).webp({ quality: 92 }).toFile(`${MARCA}/klinoda-claro.webp`);
}

/* ------------------------------------------------------------------ */

await isotipo();
await klinodaOscuro();
await klinodaClaro();

for (const archivo of readdirSync(MARCA).sort()) {
  if (archivo.endsWith('.md')) continue;
  const ruta = path.join(MARCA, archivo);
  const meta = await sharp(ruta).metadata();
  const kb = (statSync(ruta).size / 1024).toFixed(1);
  console.log(`${archivo.padEnd(26)} ${`${meta.width}x${meta.height}`.padEnd(12)} ${kb} KB`);
}
