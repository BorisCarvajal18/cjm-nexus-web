'use client';

/**
 * Vocabulario de movimiento de CJM Nexus (DESIGN.md, Movimiento).
 *
 * Aquí viven las constantes del registro y los presets de las dos escenas
 * fijadas de la portada. Las piezas pequeñas (`cuenta`, `escalona`, `alAsomar`,
 * `useRegistro`…) están en `lib/registro.js`. Ninguna sección inventa su
 * propio movimiento: si hace falta uno nuevo, se escribe aquí.
 *
 * DOS DECISIONES QUE CONVIENE NO DESHACER
 *
 * 1. El texto está en el HTML con su estado final. El guion solo mueve,
 *    atenúa y cuenta lo que ya existe: si el JavaScript no llega a
 *    ejecutarse, la página se lee entera igual.
 * 2. Con «reducir movimiento» no se anima nada (cada sección monta su
 *    movimiento con `gsap.matchMedia()` bajo la condición de movimiento).
 */
import { gsap } from './gsap';
import { alAsomar, anotaPendiente, cuenta, escalona, fijaAncho } from './registro';

/* ================================================================== */
/*  EL REGISTRO — constantes de movimiento de DESIGN.md                */
/* ================================================================== */
/*
 * Toda sección mide su movimiento con esto y con nada más.
 */

/**
 * Las tres curvas.
 * · llegar → todas las entradas y los estados al apuntar. Es la `--curva`
 *            del CSS, cubic-bezier(.16,1,.3,1).
 * · cruzar → los desplazamientos decididos de las escenas.
 * · salir  → toda salida, que dura el 60 % de su entrada.
 */
export const CURVA = { llegar: 'expo.out', cruzar: 'power3.inOut', salir: 'power2.in' };

/* Las duraciones de cada familia, lo que cuesta un gesto (0,30 pantalla) y una
   pausa de lectura (0,40), y que una salida dura el 60 % de su entrada están
   en DESIGN.md («Movimiento»). Aquí solo van los valores que el código lee. */

/** Suavizado del scrub de las escenas, en segundos. */
export const SCRUB = 0.5;

/** Lo que dura cada tramo ligado al scroll, en pantallas. */
export const ESCENA = { tableros: 3.1, klinoda: 2.1, noche: 0.75 };

/**
 * true  → si la rueda se suelta a mitad de un gesto, la escena lo termina
 *         hasta la pausa siguiente en la dirección en que se iba.
 * false → la escena se queda donde se suelte.
 */
export const AJUSTE_AL_SOLTAR = true;

/**
 * Desde este tamaño, y sin «reducir movimiento», las escenas se fijan. Por
 * debajo se leen en filas sin fijar. No se baja: entre 640 y 900 px de alto
 * se ajustan piezas y letra con `ESCALA_ALTO`.
 */
export const UMBRAL_ESCENAS = '(min-width: 1024px) and (min-height: 640px)';

/**
 * La letra de una escena baja con la variable `--k` en pasos de 0,04 hasta
 * que el texto cabe en el alto del escenario, sin pasar de 0,7. El tablero
 * de KLINODA, además, crece hasta 1,25 cuando sobra alto.
 */
export const ESCALA_ALTO = { paso: 0.04, minimo: 0.7, maximoKlinoda: 1.25 };

/* ================================================================== */
/*  EL REGISTRO — los tableros y las escenas fijadas                   */
/* ================================================================== */
/*
 * Pasado de la maqueta aprobada (`C-fusion.html`, ronda 5) con sus mismos
 * guiones y medidas. Las piezas pequeñas (`cuenta`, `escalona`, `alAsomar`…)
 * están en `lib/registro.js`.
 */

/**
 * El ajuste al soltar (`AJUSTE_AL_SOLTAR`): dentro de una pausa no mueve
 * nada; fuera de ella lleva a la pausa siguiente en la dirección en que se
 * iba. `pausas` en pantallas, `total` en pantallas.
 */
function ajustePausas(pausas, total, direccionActual) {
  return (valor, self) => {
    const d = self?.direction || direccionActual();
    const p = valor * total;
    for (const [a, b] of pausas) if (p >= a - 0.004 && p <= b + 0.004) return valor;
    if (d > 0) {
      for (const [a] of pausas) if (a > p) return a / total;
      return 1;
    }
    for (let i = pausas.length - 1; i >= 0; i -= 1) if (pausas[i][1] < p) return pausas[i][1] / total;
    return 0;
  };
}

/** Las opciones del `snap` de una escena, o nada si el ajuste está apagado. */
function snapDeEscena(pausas, total, direccionActual) {
  if (!AJUSTE_AL_SOLTAR) return undefined;
  return {
    snapTo: ajustePausas(pausas, total, direccionActual),
    duration: { min: 0.3, max: 0.8 },
    delay: 0.2,
    ease: 'power1.inOut',
    inertia: false,
  };
}

/** Cuánto sobresale el escenario del marco por la izquierda: el texto de las
    escenas se alinea con la rejilla de la página, no con el escenario. */
function sangriaDe(marco, area) {
  const relleno = parseFloat(getComputedStyle(marco).paddingLeft);
  return Math.max(0, marco.getBoundingClientRect().left + relleno - area.getBoundingClientRect().left);
}

/** Baja una variable de escala (`--k`, `--kb`, `--kt`) en pasos de
    `ESCALA_ALTO.paso` hasta que `cabe()` o toca el mínimo. Devuelve el valor. */
function encoge(el, variable, cabe, { desde = 1, minimo = ESCALA_ALTO.minimo } = {}) {
  let k = desde;
  el.style.setProperty(variable, k);
  while (!cabe() && k > minimo) {
    k = Math.round((k - ESCALA_ALTO.paso) * 100) / 100;
    el.style.setProperty(variable, k);
  }
  return k;
}

/**
 * La línea de tiempo de una escena fijada: el escenario se fija `total`
 * pantallas, el scroll la recorre con `SCRUB` y, al soltar, se ajusta a la
 * pausa siguiente. `mide` rehace la geometría antes de cada recálculo.
 */
function lineaFijada(escenario, { total, pausas, mide, alRecalcular, alAvanzar }) {
  let direccion = 1;
  const tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: escenario,
      start: 'top top',
      end: `+=${Math.round(total * 100)}%`,
      pin: true,
      scrub: SCRUB,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      refreshPriority: 1,
      onRefreshInit: mide,
      onRefresh: alRecalcular,
      onUpdate: (self) => {
        if (self.direction) direccion = self.direction;
        alAvanzar?.(self);
      },
      snap: snapDeEscena(pausas, total, () => direccion),
    },
  });
  tl.to({}, { duration: total }, 0);
  return tl;
}

/** Lleva el scroll al punto `pos` (en pantallas) de una escena de `total`. */
function irAlPunto(tl, pos, total) {
  const t = tl.scrollTrigger;
  window.scrollTo(0, Math.round(t.start + ((t.end - t.start) * pos) / total) + 1);
}

/* Una máscara que descubre de izquierda a derecha. Los márgenes negativos
   dejan fuera del recorte el grosor del trazo y su punta redonda. */
const TAPADO = 'inset(-12% 103% -12% -3%)';
const A_LA_VISTA = 'inset(-12% -3% -12% -3%)';

/**
 * El dibujo del tablero gerencial: 1,6 s.
 *
 * Los indicadores aterrizan y su chispa se descubre; la meta se tiende; el
 * trazo de lo real cruza la meta y se enciende su punta; detrás sale la
 * proyección y el globo del mes; las filas llenan sus barras y llega el aviso.
 */
export function armaFinanzas(p) {
  const tl = gsap.timeline({ paused: true });
  escalona(tl, p.querySelectorAll('.pz-kpi b'), { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.45, ease: CURVA.llegar }, 0, 0.06);
  escalona(tl, p.querySelectorAll('.pz-chispa'), { clipPath: TAPADO }, { clipPath: A_LA_VISTA, duration: 0.55, ease: 'power2.inOut' }, 0.05, 0.06);
  escalona(tl, p.querySelectorAll('.pz-delta'), { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power1.out' }, 0.35, 0.06);
  tl.fromTo(p.querySelector('.pz-capa .meta'), { scaleX: 0, transformOrigin: '0% 50%' }, { scaleX: 1, duration: 0.4, ease: 'power2.out' }, 0.1);
  tl.fromTo(p.querySelector('.pz-capa-real'), { clipPath: TAPADO }, { clipPath: A_LA_VISTA, duration: 0.95, ease: 'power2.inOut' }, 0.2);
  tl.fromTo(p.querySelector('.pz-capa .hoy'), { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power1.out' }, 0.95);
  tl.fromTo(p.querySelector('.pz-punta'), { scale: 0 }, { scale: 1, duration: 0.35, ease: 'power3.out' }, 1.05);
  tl.fromTo(p.querySelector('.pz-capa-proy'), { clipPath: TAPADO }, { clipPath: A_LA_VISTA, duration: 0.45, ease: 'power2.out' }, 1.1);
  tl.fromTo(p.querySelector('.pz-globo-caja'), { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.4, ease: CURVA.llegar }, 1.2);
  escalona(tl, p.querySelectorAll('.pz-reparto i'), { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: CURVA.llegar }, 0.55, 0.07);
  escalona(tl, p.querySelectorAll('.pz-tr'), { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.4, ease: CURVA.llegar }, 0.6, 0.08);
  gsap.utils.toArray(p.querySelectorAll('.pz-barra-margen .relleno')).forEach((r, i) => {
    const v = parseFloat(r.style.getPropertyValue('--v')) || 1;
    tl.fromTo(r, { scaleX: 0 }, { scaleX: v, duration: 0.6, ease: CURVA.llegar }, 0.7 + i * 0.08);
  });
  tl.fromTo(p.querySelector('.pz-alerta'), { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.4, ease: CURVA.llegar }, 1.2);
  return tl;
}

/**
 * El dibujo del portal de documentos: 1,6 s, igual que el de finanzas.
 *
 * Las filas aterrizan con su estado; los 128 se reparten por estado; la traza
 * baja paso a paso hasta el sello, y las doce reglas se cumplen una a una.
 */
export function armaSoftware(p) {
  const tl = gsap.timeline({ paused: true });
  const estados = p.querySelectorAll('.pz-docs .pz-estado');
  gsap.utils.toArray(p.querySelectorAll('.pz-docs > ul > li')).forEach((li, i) => {
    tl.fromTo(li, { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: 0.35, ease: CURVA.llegar }, i * 0.12);
    tl.fromTo(estados[i], { opacity: 0 }, { opacity: 1, duration: 0.2, ease: 'power1.out' }, i * 0.12 + 0.15);
  });
  escalona(tl, p.querySelectorAll('.pz-reparto-estados .barra i'), { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: CURVA.llegar }, 0.6, 0.08);
  tl.fromTo(p.querySelector('.pz-reparto-estados ul'), { opacity: 0 }, { opacity: 1, duration: 0.35, ease: 'power1.out' }, 0.8);
  tl.fromTo(p.querySelector('.pz-elegido'), { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: 0.35, ease: CURVA.llegar }, 0.15);
  tl.fromTo(p.querySelector('.pz-hilo'), { '--hilo': 0 }, { '--hilo': 1, duration: 0.9, ease: 'power1.inOut' }, 0.3);
  gsap.utils.toArray(p.querySelectorAll('.pz-suceso')).forEach((s, i) => {
    tl.fromTo(s, { opacity: 0, x: -6 }, { opacity: 1, x: 0, duration: 0.25, ease: 'power2.out' }, 0.35 + i * 0.2);
  });
  escalona(tl, p.querySelectorAll('.pz-reglas .es-cumplida'), { '--lleno': 0 }, { '--lleno': 1, duration: 0.18, ease: 'power1.out' }, 1.0, 0.04);
  const doce = p.querySelector('.pz-reglas .cuenta');
  tl.add(cuenta(doce, 0.6), 1.0);
  tl.data = { cuentas: [doce] };
  return tl;
}

/** Las «líneas» de un texto de servicio: la referencia, cada línea del
    título, la entrada, cada punto y el botón. */
export function lineasDe(t) {
  return [t.querySelector('.ref')]
    .concat(gsap.utils.toArray(t.querySelectorAll('h3 .linea')))
    .concat([t.querySelector('.lead')])
    .concat(gsap.utils.toArray(t.querySelectorAll('.lista li')))
    .concat([t.querySelector('.boton-contorno')]);
}

/**
 * La escena de los tableros (DESIGN.md, signature). Guion en pantallas de
 * desplazamiento (`ESCENA.tableros`, 3,1 en total):
 *
 *   A  · las dos              0,00–0,45  nada se mueve
 *   R1 · software deja sitio  0,45–0,70  se hunde en su mitad
 *   F1 · finanzas cruza       0,70–1,00  a la mitad derecha
 *   F2 · su texto             1,00–1,30  entra a la izquierda, por líneas
 *   F3 · se lee               1,30–1,70  nada se mueve
 *   R2 · relevo               1,70–2,10  sale el texto; finanzas se hunde;
 *                                        después sube software en su mitad
 *   S1 · software cruza       2,10–2,40  a la mitad izquierda (espejo)
 *   S2 · su texto             2,40–2,70  entra a la derecha, por líneas
 *   S3 · se lee               2,70–3,10  nada se mueve
 *
 * Las dos líneas miden exactamente 1,00 pantalla, con la misma distancia, la
 * misma curva y la misma letra; solo cambia la dirección. Devuelve la
 * limpieza. Solo se llama con `UMBRAL_ESCENAS` y con movimiento.
 */
export function escenaTableros(seccion, { armaF, armaS, tlRegla, limpia }) {
  const escenario = seccion.querySelector('.escenario');
  const marco = escenario.querySelector('.marco');
  const area = seccion.querySelector('.dos-servicios');
  const cajas = gsap.utils.toArray(seccion.querySelectorAll('.caja-pieza'));
  const textos = gsap.utils.toArray(seccion.querySelectorAll('.texto-servicio'));
  const tramos = gsap.utils.toArray(seccion.querySelectorAll('.regla i'));
  const lineasF = lineasDe(textos[0]);
  const lineasS = lineasDe(textos[1]);

  seccion.classList.add('coreografia');

  const TOTAL = ESCENA.tableros;
  const PAUSAS = [
    [0, 0.45],
    [1.3, 1.7],
    [2.7, 3.1],
  ]; // A, F3, S3
  const HUECO = 40;
  const BAJA = 48;
  const ANCHO_MIN = 560;
  let G = {};

  /* Geometría medida sobre el escenario real, no supuesta. Se rehace en cada
     recálculo de ScrollTrigger (cambio de tamaño, fuentes).
     1 · los tableros: a tamaño real si caben; si no, a la escala que cabe en
         el ancho de media escena y en el alto del escenario;
     2 · la letra: --k empieza en 1 y baja en pasos hasta que los dos textos
         caben en el alto del escenario. */
  function mide() {
    const W = area.clientWidth;
    const H = area.clientHeight;
    const sangria = sangriaDe(marco, area);
    const col = (W - HUECO) / 2;
    const ancho = Math.max(ANCHO_MIN, col);
    cajas.forEach((c) => {
      c.style.width = `${ancho}px`;
    });
    const alto = cajas[0].offsetHeight;
    const s = Math.min(1, col / ancho, H / alto);
    const bw = ancho * s;
    const bh = alto * s;
    const xL = W / 2 - HUECO / 2 - bw;
    const xR = W / 2 + HUECO / 2;
    const y = (H - bh) / 2;
    const aire = Math.max(40, Math.min(64, W * 0.05));
    const xTS = xL + bw + aire;
    textos[0].style.width = `${xR - aire - sangria}px`;
    textos[1].style.width = `${W - sangria - xTS}px`;
    const k = encoge(seccion, '--k', () => Math.max(textos[0].offsetHeight, textos[1].offsetHeight) <= H - 8);
    G = {
      s,
      k,
      xL,
      xR,
      y,
      xTF: sangria,
      yTF: Math.max(0, y + (bh - textos[0].offsetHeight) / 2),
      xTS,
      yTS: Math.max(0, y + (bh - textos[1].offsetHeight) / 2),
    };
  }
  mide();

  const tl = lineaFijada(escenario, { total: TOTAL, pausas: PAUSAS, mide });
  const g = (clave, mas = 0) => () => G[clave] + mas;

  /* A · las dos, lado a lado y del mismo tamaño */
  tl.set(cajas[0], { x: g('xL'), y: g('y'), scale: g('s'), opacity: 1 }, 0);
  tl.set(cajas[1], { x: g('xR'), y: g('y'), scale: g('s'), opacity: 1 }, 0);
  tl.set(textos[0], { x: g('xTF'), y: g('yTF'), pointerEvents: 'none' }, 0);
  tl.set(textos[1], { x: g('xTS'), y: g('yTS'), pointerEvents: 'none' }, 0);
  tl.set(lineasF, { x: -32, y: 0, opacity: 0 }, 0);
  tl.set(lineasS, { x: 32, y: 0, opacity: 0 }, 0);
  tl.set(tramos, { scaleX: 0 }, 0);

  /* R1 · software deja sitio: se hunde en su mitad */
  tl.to(cajas[1], { y: g('y', BAJA), opacity: 0, duration: 0.25, ease: CURVA.salir }, 0.45);

  /* F · finanzas cruza a la derecha y su texto entra a la izquierda, en su estela */
  tl.to(tramos[0], { scaleX: 1, duration: 1 }, 0.7);
  tl.to(cajas[0], { x: g('xR'), duration: 0.3, ease: CURVA.cruzar }, 0.7);
  tl.to(lineasF, { x: 0, opacity: 1, duration: 0.14, ease: 'power2.out', stagger: 0.16 / (lineasF.length - 1) }, 1.0);
  tl.set(textos[0], { pointerEvents: 'auto' }, 1.3);

  /* R2 · relevo. En serie: sale el texto, finanzas se hunde y solo entonces
     sube software en su mitad. Nunca hay dos piezas en el mismo sitio. */
  tl.set(textos[0], { pointerEvents: 'none' }, 1.7);
  tl.to(lineasF, { y: -24, opacity: 0, duration: 0.08, ease: CURVA.salir, stagger: 0.07 / (lineasF.length - 1) }, 1.7);
  tl.to(cajas[0], { y: g('y', BAJA), opacity: 0, duration: 0.125, ease: CURVA.salir }, 1.85);
  tl.to(cajas[1], { y: g('y'), opacity: 1, duration: 0.125, ease: 'power2.out' }, 1.975);

  /* S · en espejo: software cruza a la izquierda y su texto entra a la derecha */
  tl.to(tramos[1], { scaleX: 1, duration: 1 }, 2.1);
  tl.to(cajas[1], { x: g('xL'), duration: 0.3, ease: CURVA.cruzar }, 2.1);
  tl.to(lineasS, { x: 0, opacity: 1, duration: 0.14, ease: 'power2.out', stagger: 0.16 / (lineasS.length - 1) }, 2.4);
  tl.set(textos[1], { pointerEvents: 'auto' }, 2.7);

  /* Al acercarse: la regla se traza y los dos tableros se dibujan a la vez. */
  const ambos = gsap.timeline({ paused: true }).add(armaF.paused(false), 0).add(armaS.paused(false), 0);
  ambos.data = armaS.data;
  alAsomar(seccion, 'top 80%', tlRegla);
  alAsomar(seccion, 'top 45%', ambos);

  /* Quien llega con el tabulador a un botón de la escena lo encuentra a la vista. */
  const alFoco = (e) => {
    if (textos[0].contains(e.target)) irAlPunto(tl, 1.5, TOTAL);
    else if (textos[1].contains(e.target)) irAlPunto(tl, 2.9, TOTAL);
  };
  seccion.addEventListener('focusin', alFoco);

  return () => {
    seccion.classList.remove('coreografia');
    seccion.removeEventListener('focusin', alFoco);
    seccion.style.removeProperty('--k');
    cajas.forEach((c) => {
      c.style.width = '';
    });
    textos.forEach((t) => {
      t.style.width = '';
    });
    limpia();
  };
}

/** El dibujo del tablero de KLINODA, 1,4 s: se traza la línea de plazos, las
    cifras cuentan, cada vencimiento cae en su tramo y las filas aterrizan. */
export function armaKlinoda(t) {
  const tl = gsap.timeline({ paused: true });
  const cuentas = gsap.utils.toArray(t.querySelectorAll('.cuenta'));
  tl.fromTo(t.querySelector('.k-linea'), { '--raya': 0 }, { '--raya': 1, duration: 0.5, ease: 'power2.out' }, 0);
  cuentas.forEach((el) => tl.add(cuenta(el, 0.9), 0));
  escalona(tl, t.querySelectorAll('.k-marcas span'), { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power1.out' }, 0.25, 0.06);
  escalona(tl, t.querySelectorAll('.k-puntos i'), { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'power3.out' }, 0.2, 0.05);
  escalona(tl, t.querySelectorAll('.k-tramo > span'), { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power1.out' }, 0.5, 0.1);
  escalona(tl, t.querySelectorAll('.k-fila'), { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.4, ease: CURVA.llegar }, 0.7, 0.12);
  tl.data = { cuentas };
  return tl;
}

/**
 * La escena de KLINODA (DESIGN.md, signature), después de la noche. Guion en
 * pantallas (`ESCENA.klinoda`, 2,1 fijadas):
 *
 *   A  · el producto   0,00–0,40  nada: el tablero ocupa el escenario bajo una
 *                                 placa marino, con logotipo y etiqueta
 *   K1 · se levanta    0,40–0,70  la placa se aclara; logotipo y etiqueta
 *                                 viajan a la barra del tablero
 *   K2 · se lee        0,70–1,10  al llegar, el tablero se dibuja (1,4 s)
 *   K3 · se retira     1,10–1,40  se reduce a media escena y cruza a la derecha
 *   K4 · su texto      1,40–1,70  las frases, la pregunta y el botón, por líneas
 *   K5 · se lee        1,70–2,10  nada
 *
 * Las mismas unidades y curvas que la escena de los tableros. Devuelve la
 * limpieza. Solo se llama con `UMBRAL_ESCENAS` y con movimiento.
 */
export function escenaKlinoda(puerta, { arma, limpia }) {
  const escenario = puerta.querySelector('.k-escenario');
  const marco = escenario.querySelector('.marco');
  const area = puerta.querySelector('.k-area');
  const caja = puerta.querySelector('.k-caja');
  const tablero = puerta.querySelector('.k-tablero');
  const texto = puerta.querySelector('.k-texto');
  const lineas = gsap.utils.toArray(texto.children);
  const placa = caja.querySelector('.k-placa');
  const logoGrande = caja.querySelector('.k-marca img');
  const etiqueta = caja.querySelector('.k-etiqueta');
  // El lema no viaja a la barra: se desvanece mientras la placa se levanta.
  const lema = caja.querySelector('.k-lema');
  const logoBarra = tablero.querySelector('.k-logo');
  const chip = tablero.querySelector('.k-chip');

  puerta.classList.add('k-coreo');

  const TOTAL = ESCENA.klinoda;
  const PAUSAS = [
    [0, 0.4],
    [0.7, 1.1],
    [1.7, 2.1],
  ]; // A, K2, K5
  const HUECO = 40;
  const PLACA = 0.94;
  const KB_MINIMO = 0.6; // la letra del tablero no baja de aquí
  const SE_DIBUJA = 0.7; // K2: desde esta pantalla el tablero está dibujado
  let G = {};

  /* Posición de un elemento dentro de la caja, sin transformaciones. */
  function dentro(el) {
    let x = 0;
    let y = 0;
    for (let n = el; n && n !== caja; n = n.offsetParent) {
      x += n.offsetLeft;
      y += n.offsetTop;
    }
    return { x, y, w: el.offsetWidth, h: el.offsetHeight };
  }

  /* Geometría medida sobre el escenario real. Se rehace en cada recálculo.
     1 · el tablero ocupa el escenario entero; su letra (--kb) crece hasta un
         25 % si sobra alto y baja en pasos si falta;
     2 · al retirarse mide media escena, como los tableros de servicios;
     3 · la letra del texto (--kt) baja hasta que cabe;
     4 · el viaje del logotipo y la etiqueta, de centro a centro. */
  function mide() {
    const W = area.clientWidth;
    const H = area.clientHeight;
    const sangria = sangriaDe(marco, area);
    caja.style.width = `${W}px`;
    caja.style.height = `${H}px`;
    // Se mide a su alto natural con la letra en 1 y se parte de la escala que
    // llenaría el escenario (con un 3 % de holgura); si aun así no cabe, baja.
    puerta.style.setProperty('--kb', 1);
    tablero.style.height = 'auto';
    const llena = Math.floor((H / tablero.offsetHeight) * 0.97 * 100) / 100;
    const kb = encoge(puerta, '--kb', () => tablero.offsetHeight <= H, {
      desde: Math.max(KB_MINIMO, Math.min(ESCALA_ALTO.maximoKlinoda, llena)),
      minimo: KB_MINIMO,
    });
    tablero.style.height = '';
    const s = Math.min(1, (W - HUECO) / 2 / W);
    const xR = W / 2 + HUECO / 2;
    const yK = (H - H * s) / 2;
    const aire = Math.max(40, Math.min(64, W * 0.05));
    texto.style.width = `${xR - aire - sangria}px`;
    const kt = encoge(puerta, '--kt', () => texto.offsetHeight <= H - 8);
    const a = dentro(logoGrande);
    const b = dentro(logoBarra);
    const c = dentro(etiqueta);
    const d = dentro(chip);
    const ls = b.w / a.w;
    const es = d.h / c.h;
    G = {
      s,
      xR,
      yK,
      kb,
      kt,
      xT: sangria,
      yT: Math.max(0, (H - texto.offsetHeight) / 2),
      lx: b.x + b.w / 2 - (a.x + (a.w * ls) / 2),
      ly: b.y + b.h / 2 - (a.y + (a.h * ls) / 2),
      ls,
      ex: d.x + d.w / 2 - (c.x + (c.w * es) / 2),
      ey: d.y + d.h / 2 - (c.y + (c.h * es) / 2),
      es,
    };
  }
  mide();

  /* El tablero se dibuja al llegar a K2, una sola vez. Si se recarga más
     abajo, queda dibujado sin animar. */
  let armado = false;
  anotaPendiente(arma);
  function armar(alInstante) {
    if (armado) return;
    armado = true;
    arma.__arrancada = true;
    if (alInstante) {
      arma.progress(1);
      return;
    }
    arma.data.cuentas.forEach(fijaAncho);
    arma.play();
  }

  const tl = lineaFijada(escenario, {
    total: TOTAL,
    pausas: PAUSAS,
    mide,
    alRecalcular: (self) => {
      if (self.progress * TOTAL >= SE_DIBUJA) armar(true);
    },
    alAvanzar: (self) => {
      if (self.progress * TOTAL >= SE_DIBUJA) armar(false);
    },
  });
  const g = (clave) => () => G[clave];

  /* A · el producto: el tablero entero, tapado; logotipo y etiqueta en el centro */
  tl.set(caja, { x: 0, y: 0, scale: 1 }, 0);
  tl.set(placa, { opacity: PLACA }, 0);
  tl.set([logoGrande, etiqueta], { x: 0, y: 0, scale: 1, opacity: 1, transformOrigin: '0% 0%' }, 0);
  tl.set([logoBarra, chip], { opacity: 0 }, 0);
  tl.set(texto, { x: g('xT'), y: g('yT'), pointerEvents: 'none' }, 0);
  tl.set(lineas, { x: -32, opacity: 0 }, 0);

  /* K1 · se levanta la placa y el nombre viaja a la barra del tablero */
  tl.to(placa, { opacity: 0, duration: 0.3, ease: 'power2.inOut' }, 0.4);
  tl.to(logoGrande, { x: g('lx'), y: g('ly'), scale: g('ls'), duration: 0.3, ease: CURVA.cruzar }, 0.4);
  tl.to(etiqueta, { x: g('ex'), y: g('ey'), scale: g('es'), duration: 0.3, ease: CURVA.cruzar }, 0.4);
  if (lema) {
    tl.set(lema, { opacity: 1 }, 0);
    tl.to(lema, { opacity: 0, duration: 0.15, ease: CURVA.salir }, 0.4);
  }
  tl.to([logoGrande, etiqueta], { opacity: 0, duration: 0.08 }, 0.62);
  tl.to([logoBarra, chip], { opacity: 1, duration: 0.08 }, 0.62);

  /* K2 · se lee: el tablero se dibuja al llegar (ver armar) */

  /* K3 · se retira: se reduce a media escena y cruza a la derecha */
  tl.to(caja, { x: g('xR'), y: g('yK'), scale: g('s'), duration: 0.3, ease: CURVA.cruzar }, 1.1);

  /* K4 · su texto, por líneas, en la estela del tablero */
  tl.to(lineas, { x: 0, opacity: 1, duration: 0.14, ease: 'power2.out', stagger: 0.16 / (lineas.length - 1) }, 1.4);
  tl.set(texto, { pointerEvents: 'auto' }, 1.7);

  /* Quien llega con el tabulador al botón lo encuentra a la vista. */
  const alFoco = (e) => {
    if (texto.contains(e.target)) irAlPunto(tl, 1.9, TOTAL);
  };
  puerta.addEventListener('focusin', alFoco);

  return () => {
    puerta.classList.remove('k-coreo');
    puerta.removeEventListener('focusin', alFoco);
    ['--kb', '--kt'].forEach((p) => puerta.style.removeProperty(p));
    caja.style.width = '';
    caja.style.height = '';
    texto.style.width = '';
    limpia();
  };
}

/* ══ LAS PÁGINAS INTERIORES — un momento por página ═══════════════════════
   Guion aprobado por Boris el 2026-09-19 (CONSTRUCCION.md, «Movimiento de
   las páginas interiores»). Uno por página, sacado de lo que cuenta; ninguno
   repite otro. Solo mueven lo que ya está en el HTML con su valor final: con
   «reducir movimiento» o sin JavaScript no se llama a nada de esto y cada
   pieza se ve entera desde el primer píxel. */

/**
 * /servicios — «Las dos hojas, a la vez». El 50/50: las dos interfaces de
 * muestra llegan con el mismo gesto y durante el mismo tiempo, y el filete
 * bajo su «Servicio 0x» se traza. 0,8 s. Dentro de las hojas no se dibuja
 * nada: ese es el gesto de la página de dirección financiera.
 *
 * Recibe los artículos que arrancan juntos: los dos en escritorio, uno en
 * cada disparador cuando van en una columna.
 */
export function dosHojas(articulos) {
  const tl = gsap.timeline({ paused: true });
  const hojas = articulos.map((a) => a.querySelector('.pieza'));
  const refs = articulos.map((a) => a.querySelector('.ref-pag'));
  tl.fromTo(hojas, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: CURVA.llegar }, 0);
  tl.fromTo(refs, { '--raya': 0 }, { '--raya': 1, duration: 0.55, ease: 'power2.out' }, 0.2);
  return tl;
}

/**
 * /servicios/direccion-financiera — «El tablero se dibuja». Lo que recibes
 * cada mes, armado con tus datos: las doce barras crecen desde la base, la
 * meta se tiende, las cuatro barras de margen se llenan y llegan las alertas.
 * 1,6 s. Las cuatro cifras de la cabecera no se mueven: contar cifras es el
 * gesto de las credenciales de la portada.
 */
export function tableroSeDibuja(p) {
  const tl = gsap.timeline({ paused: true });
  escalona(
    tl,
    p.querySelectorAll('.pz-barras .columna i'),
    { scaleY: 0, transformOrigin: '50% 100%' },
    { scaleY: 1, duration: 0.35, ease: CURVA.llegar },
    0,
    0.05,
  );
  tl.fromTo(p.querySelector('.pz-barras .meta'), { scaleX: 0, transformOrigin: '0% 50%' }, { scaleX: 1, duration: 0.4, ease: 'power2.out' }, 0.1);
  escalona(
    tl,
    p.querySelectorAll('.pz-margenes .pista i'),
    { scaleX: 0, transformOrigin: '0% 50%' },
    { scaleX: 1, duration: 0.46, ease: CURVA.llegar },
    0.6,
    0.08,
  );
  escalona(tl, p.querySelectorAll('.pz-alerta'), { opacity: 0 }, { opacity: 1, duration: 0.32, ease: 'power2.out' }, 1.2, 0.08);
  return tl;
}

/* Enciende o apaga el punto de un paso: 0,3 s al llegar, 0,18 s al irse. */
function punto(li, encendido) {
  if (li.__encendido === encendido) return;
  li.__encendido = encendido;
  gsap.to(li, {
    '--punto': encendido ? 1 : 0,
    duration: encendido ? 0.3 : 0.18,
    ease: encendido ? CURVA.llegar : CURVA.salir,
    overwrite: true,
  });
}

/**
 * /servicios/soluciones-digitales — «La semana, en una línea». Ligado al
 * scroll y reversible: un filete de cobre recorre el borde superior de los
 * tres pasos de la página web y, al llegar al principio de cada uno, se
 * enciende el punto de su «cuándo». El texto no cambia en ningún momento.
 *
 * `enFila`: las tres columnas en una fila, con una sola línea continua (del
 * 85 al 40 % de la pantalla). Si no, cada paso traza su propio filete al
 * cruzar la pantalla (del 85 al 70 %) y su punto sale al completarlo.
 * Devuelve la limpieza.
 */
export function semanaEnLinea(ol, { enFila }) {
  const pasos = gsap.utils.toArray(ol.children);
  gsap.set(pasos, { '--punto': 0 });

  if (enFila) {
    // Dónde empieza cada columna, como fracción de la línea (la lista es su
    // `offsetParent`): el punto se enciende cuando el filete llega a ella.
    const umbral = (li) => li.offsetLeft / ol.offsetWidth;
    gsap.fromTo(
      ol,
      { '--semana': 0 },
      {
        '--semana': 1,
        ease: 'none',
        onUpdate() {
          const p = this.progress();
          pasos.forEach((li) => punto(li, p > umbral(li) + 0.001));
        },
        scrollTrigger: { trigger: ol, start: 'top 85%', end: 'top 40%', scrub: SCRUB },
      },
    );
  } else {
    pasos.forEach((li) => {
      gsap.fromTo(
        li,
        { '--tramo': 0 },
        {
          '--tramo': 1,
          ease: 'none',
          onUpdate() {
            punto(li, this.progress() >= 0.999);
          },
          scrollTrigger: { trigger: li, start: 'top 85%', end: 'top 70%', scrub: SCRUB },
        },
      );
    });
  }

  // Los tweens y los ScrollTrigger los deshace el matchMedia de la sección.
  // Los puntos se encienden desde el scroll, fuera de su contexto: se limpian
  // aquí.
  return () => {
    gsap.killTweensOf(pasos);
    pasos.forEach((li) => {
      li.__encendido = undefined;
      li.style.removeProperty('--punto');
    });
  };
}
