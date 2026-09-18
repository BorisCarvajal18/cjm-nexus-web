'use client';

/**
 * Vocabulario de movimiento de CJM Nexus.
 *
 * Doce presets que cubren todo el sitio. La regla es que ninguna página
 * inventa su propia animación: si hace falta un movimiento nuevo, se añade
 * aquí y queda disponible para las catorce. Es lo que hace que el sitio se
 * sienta de una pieza y no de catorce.
 *
 * ── DOS DECISIONES QUE CONVIENE NO DESHACER ─────────────────────────────
 *
 * 1. SE ANIMA CON `gsap.from()`, NUNCA DESDE UN `opacity: 0` EN EL CSS.
 *    El estado que trae el HTML del servidor es el estado FINAL: todo
 *    visible. GSAP mueve el contenido *desde* un punto de partida hacia
 *    donde ya estaba. Así, si el JavaScript no llega a ejecutarse —red
 *    lenta, error, un buscador, un lector de pantalla—, la página se lee
 *    entera igual. El sitio anterior hacía lo contrario: servía 67
 *    elementos con `opacity: 0` que solo aparecían si el navegador
 *    ejecutaba React.
 *
 * 2. CON «REDUCIR MOVIMIENTO» ACTIVADO NO SE ANIMA NADA.
 *    Cada preset comprueba la preferencia y se va sin tocar el DOM. Como
 *    el estado en reposo ya es el correcto (punto 1), no hay que deshacer
 *    nada: basta con no hacerlo.
 */
import { gsap, prefersReducedMotion } from './gsap';
import { alAsomar, cuenta, trazo } from './registro';

/* ================================================================== */
/*  EL REGISTRO — constantes de movimiento de DESIGN.md                */
/* ================================================================== */
/*
 * Toda sección nueva mide su movimiento con esto y con nada más. Los
 * presets de más abajo son del sistema anterior («Pulso Cobre») y se retiran
 * a medida que se reconstruyen las páginas que los usan.
 */

/**
 * Las tres curvas.
 * · llegar → todas las entradas y los estados al apuntar. Es la `--curva`
 *            del CSS, cubic-bezier(.16,1,.3,1).
 * · cruzar → los desplazamientos decididos de las escenas.
 * · salir  → toda salida, que dura `SALIDA` veces su entrada.
 */
export const CURVA = { llegar: 'expo.out', cruzar: 'power3.inOut', salir: 'power2.in' };

/** Una salida dura el 60 % de su entrada. */
export const SALIDA = 0.6;

/** Duraciones, en segundos: el mínimo y el máximo de cada familia. */
export const DURACION = {
  apuntar: [0.18, 0.44], // estados al apuntar
  entrada: [0.6, 1.8], // la entrada con reloj de una sección
  tablero: [1.4, 1.6], // el dibujo de un tablero
};

/**
 * El reloj ligado al scroll. Se mide en pantallas de desplazamiento: un
 * gesto (algo se mueve) cuesta 0,30 y una pausa de lectura, 0,40.
 */
export const PANTALLAS = { gesto: 0.3, pausa: 0.4 };

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

/** La consulta completa, lista para `gsap.matchMedia().add()`. */
export const CONSULTA_ESCENAS = `${UMBRAL_ESCENAS} and (prefers-reduced-motion: no-preference)`;

/**
 * La letra de una escena baja con la variable `--k` en pasos de 0,04 hasta
 * que el texto cabe en el alto del escenario, sin pasar de 0,7. El tablero
 * de KLINODA, además, crece hasta 1,25 cuando sobra alto.
 */
export const ESCALA_ALTO = { paso: 0.04, minimo: 0.7, maximoKlinoda: 1.25 };

/** ¿Se fijan las escenas en esta pantalla? Solo en cliente. */
export function fijaEscenas() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia(CONSULTA_ESCENAS).matches;
}

/* ================================================================== */
/*  EL REGISTRO — los tableros y las escenas fijadas                   */
/* ================================================================== */
/*
 * Pasado de la maqueta aprobada (`C-fusion.html`, ronda 5) con sus mismos
 * guiones y medidas. Las piezas pequeñas (`trazo`, `cuenta`, `alAsomar`…)
 * están en `lib/registro.js`.
 */

/**
 * El ajuste al soltar (`AJUSTE_AL_SOLTAR`): dentro de una pausa no mueve
 * nada; fuera de ella lleva a la pausa siguiente en la dirección en que se
 * iba. `pausas` en pantallas, `total` en pantallas.
 */
export function ajustePausas(pausas, total, direccionActual) {
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
export function snapDeEscena(pausas, total, direccionActual) {
  if (!AJUSTE_AL_SOLTAR) return undefined;
  return {
    snapTo: ajustePausas(pausas, total, direccionActual),
    duration: { min: 0.3, max: 0.8 },
    delay: 0.2,
    ease: 'power1.inOut',
    inertia: false,
  };
}

/** El dibujo del tablero gerencial: 1,6 s. */
export function armaFinanzas(p) {
  const tl = gsap.timeline({ paused: true });
  gsap.utils.toArray(p.querySelectorAll('.chispa polyline')).forEach((pl, i) => trazo(tl, pl, 0.5, 'power2.inOut', i * 0.06));
  tl.fromTo(p.querySelector('.meta'), { scaleX: 0, transformOrigin: '0% 50%' }, { scaleX: 1, duration: 0.4, ease: 'power2.out' }, 0.1);
  trazo(tl, p.querySelector('.traza'), 1.25, CURVA.llegar, 0.2);
  tl.fromTo(p.querySelector('.area'), { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power1.out' }, 0.8);
  tl.fromTo(p.querySelector('.punta'), { scale: 0, transformOrigin: '50% 50%' }, { scale: 1, duration: 0.35, ease: 'power3.out' }, 1.1);
  gsap.utils.toArray(p.querySelectorAll('.barra .relleno')).forEach((r, i) => {
    const v = parseFloat(r.style.getPropertyValue('--v')) || 1;
    tl.fromTo(r, { scaleX: 0 }, { scaleX: v, duration: 0.6, ease: CURVA.llegar }, 0.6 + i * 0.08);
  });
  tl.fromTo(
    p.querySelector('.alerta'),
    { '--raya': 0, color: 'rgba(168,90,46,0)' },
    { '--raya': 1, color: 'rgba(168,90,46,1)', duration: 0.4, ease: 'power2.out' },
    1.2,
  );
  return tl;
}

/** El dibujo del portal de documentos: 1,6 s, igual que el de finanzas. */
export function armaSoftware(p) {
  const tl = gsap.timeline({ paused: true });
  const estados = p.querySelectorAll('.docs .estado');
  gsap.utils.toArray(p.querySelectorAll('.docs li')).forEach((li, i) => {
    tl.fromTo(li, { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: 0.35, ease: CURVA.llegar }, i * 0.12);
    tl.fromTo(estados[i], { opacity: 0 }, { opacity: 1, duration: 0.2, ease: 'power1.out' }, i * 0.12 + 0.15);
  });
  tl.fromTo(p.querySelector('.hilo'), { '--hilo': 0 }, { '--hilo': 1, duration: 0.9, ease: 'power1.inOut' }, 0.3);
  gsap.utils.toArray(p.querySelectorAll('.suceso')).forEach((s, i) => {
    tl.fromTo(s, { opacity: 0, x: -6 }, { opacity: 1, x: 0, duration: 0.25, ease: 'power2.out' }, 0.35 + i * 0.2);
  });
  tl.fromTo(p.querySelector('.reglas .pista'), { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: CURVA.llegar }, 1.0);
  const doce = p.querySelector('.reglas .cuenta');
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
 * limpieza. Solo se llama bajo `CONSULTA_ESCENAS`.
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
    const cs = getComputedStyle(marco);
    const sangria = Math.max(0, marco.getBoundingClientRect().left + parseFloat(cs.paddingLeft) - area.getBoundingClientRect().left);
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
    let k = 1;
    seccion.style.setProperty('--k', k);
    const altoTextos = () => Math.max(textos[0].offsetHeight, textos[1].offsetHeight);
    while (altoTextos() > H - 8 && k > ESCALA_ALTO.minimo) {
      k = Math.round((k - ESCALA_ALTO.paso) * 100) / 100;
      seccion.style.setProperty('--k', k);
    }
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

  let direccion = 1;
  const tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: escenario,
      start: 'top top',
      end: `+=${Math.round(TOTAL * 100)}%`,
      pin: true,
      scrub: SCRUB,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      refreshPriority: 1,
      onRefreshInit: mide,
      onUpdate: (self) => {
        if (self.direction) direccion = self.direction;
      },
      snap: snapDeEscena(PAUSAS, TOTAL, () => direccion),
    },
  });
  const g = (clave, mas = 0) => () => G[clave] + mas;

  tl.to({}, { duration: TOTAL }, 0);

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
  const vaA = (pos) => {
    const t = tl.scrollTrigger;
    window.scrollTo(0, Math.round(t.start + ((t.end - t.start) * pos) / TOTAL) + 1);
  };
  const alFoco = (e) => {
    if (textos[0].contains(e.target)) vaA(1.5);
    else if (textos[1].contains(e.target)) vaA(2.9);
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

/* ================================================================== */
/*  PULSO COBRE — presets del sistema anterior                         */
/* ================================================================== */

/** Curva del sistema anterior. Lo nuevo usa `CURVA.llegar`. */
export const EASE = 'power3.out';

/* ------------------------------------------------------------------ */
/*  Revelado                                                           */
/* ------------------------------------------------------------------ */

/**
 * Entrada estándar al hacer scroll. Es el 80 % del movimiento del sitio.
 * `once: true` porque una sección que reaparece cada vez que subes y bajas
 * llama la atención sobre sí misma en lugar de sobre lo que dice.
 */
export function reveal(targets, { y = 40, stagger = 0, delay = 0, start = 'top 88%', trigger } = {}) {
  if (prefersReducedMotion()) return null;

  /* EL DISPARADOR ES UN SOLO ELEMENTO, SIEMPRE.
     Pasarle a ScrollTrigger la misma lista que se anima parece lo natural y
     está mal: con varios elementos no sabe cuál medir, la animación arranca y
     se queda a mitad, y como partimos de opacidad cero el resultado son
     tarjetas invisibles para siempre. Ocurrió de verdad en el catálogo. Por
     eso quien llama pasa `trigger` —normalmente el contenedor— y si no,
     usamos el primer elemento y nunca la colección entera. */
  const list = gsap.utils.toArray(targets);
  const anchor = trigger || list[0] || targets;

  return gsap.from(list, {
    y,
    opacity: 0,
    duration: 0.9,
    ease: EASE,
    stagger,
    delay,
    scrollTrigger: { trigger: anchor, start, once: true },
  });
}

/* ------------------------------------------------------------------ */
/*  Texto                                                              */
/* ------------------------------------------------------------------ */

/**
 * Parte un texto en palabras envueltas en <span>. Devuelve los nodos.
 *
 * Se hace en cliente y sobre el texto ya renderizado, de modo que el HTML
 * del servidor sigue siendo una frase normal: un buscador lee «Finanzas
 * claras y software a la altura», no doce fragmentos sueltos.
 */
export function splitWords(el, className = 'word') {
  if (!el || el.dataset.split === 'done') {
    return el ? el.querySelectorAll(`.${className}`) : [];
  }
  const words = el.textContent.trim().split(/\s+/);
  el.innerHTML = words
    .map((w) => `<span class="${className}" style="display:inline-block">${w}</span>`)
    .join(' ');
  el.dataset.split = 'done';
  return el.querySelectorAll(`.${className}`);
}

/** Titular que entra palabra a palabra al cargar. Solo para el hero. */
export function wordsIn(words, { delay = 0.1, stagger = 0.05 } = {}) {
  if (prefersReducedMotion() || !words.length) return null;
  return gsap.from(words, {
    yPercent: 110,
    opacity: 0,
    duration: 1,
    ease: 'power4.out',
    stagger,
    delay,
  });
}

/**
 * Manifiesto: las palabras se encienden conforme se baja.
 *
 * Aquí sí se parte de opacidad baja, pero atenuada (no invisible) y ligada
 * al scroll, de modo que sin JavaScript el texto se lee perfectamente: solo
 * pierde el efecto.
 */
export function wordsLightUp(words, trigger, { from = 0.24 } = {}) {
  if (prefersReducedMotion() || !words.length) return null;
  gsap.set(words, { opacity: from });
  return gsap.to(words, {
    opacity: 1,
    ease: 'none',
    stagger: 0.04,
    scrollTrigger: { trigger, start: 'top 70%', end: 'bottom 45%', scrub: true },
  });
}

/* ------------------------------------------------------------------ */
/*  Circuitos                                                          */
/* ------------------------------------------------------------------ */

/**
 * Prepara trazos para «dibujarse»: mide cada uno y lo esconde con
 * stroke-dasharray. Hay que llamarlo antes de `drawPaths`.
 */
export function prepareDraw(paths) {
  if (prefersReducedMotion()) return;
  gsap.utils.toArray(paths).forEach((p) => {
    if (typeof p.getTotalLength !== 'function') return;
    const length = p.getTotalLength();
    gsap.set(p, { strokeDasharray: length, strokeDashoffset: length });
  });
}

/** Dibuja los trazos ya preparados. */
export function drawPaths(paths, { trigger, stagger = 0.2, duration = 1.8, delay = 0, scrub = false } = {}) {
  if (prefersReducedMotion()) return null;
  return gsap.to(paths, {
    strokeDashoffset: 0,
    duration,
    ease: 'power2.inOut',
    stagger,
    delay,
    ...(trigger
      ? { scrollTrigger: { trigger, start: 'top 80%', once: !scrub, scrub: scrub || false } }
      : {}),
  });
}

/** Punto de luz que recorre un trazo, en bucle. Es el latido del sitio. */
export function pulseAlongPath(pulse, path, { duration = 6, delay = 0 } = {}) {
  if (prefersReducedMotion() || !pulse || !path) return null;
  return gsap.to(pulse, {
    motionPath: { path, align: path, alignOrigin: [0.5, 0.5] },
    duration,
    delay,
    ease: 'none',
    repeat: -1,
  });
}

/** Los nodos respiran, con desfase aleatorio para que no parezcan un metrónomo. */
export function haloBreathe(halos) {
  if (prefersReducedMotion() || !halos) return null;
  return gsap.to(halos, {
    opacity: 0.7,
    scale: 1.7,
    transformOrigin: 'center',
    duration: 1.4,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
    stagger: { each: 0.25, from: 'random' },
  });
}

/* ------------------------------------------------------------------ */
/*  Cifras y profundidad                                               */
/* ------------------------------------------------------------------ */

/**
 * Contador. El valor final YA está escrito en el HTML; esto solo lo recorre
 * desde cero al entrar en pantalla.
 */
export function countUp(el, { to, suffix = '', locale = 'es-EC', duration = 1.6 } = {}) {
  if (prefersReducedMotion() || !el) return null;
  const counter = { value: 0 };
  return gsap.to(counter, {
    value: to,
    duration,
    ease: EASE,
    scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    onUpdate: () => {
      el.textContent = Math.round(counter.value).toLocaleString(locale) + suffix;
    },
  });
}

/** Parallax vertical. `amount` en porcentaje del propio elemento. */
export function parallax(el, { amount = 30, trigger } = {}) {
  if (prefersReducedMotion() || !el) return null;
  return gsap.fromTo(
    el,
    { yPercent: -amount },
    {
      yPercent: amount,
      ease: 'none',
      scrollTrigger: {
        trigger: trigger || el.closest('section') || el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    },
  );
}

/* ------------------------------------------------------------------ */
/*  Mecánicas de sección                                               */
/* ------------------------------------------------------------------ */

/**
 * Raíl horizontal: la sección se fija y sus paneles se recorren de lado.
 *
 * Devuelve la animación, que hace falta pasar como `containerAnimation` a
 * cualquier ScrollTrigger de los elementos de dentro; sin eso, GSAP mide su
 * posición sobre el eje vertical y las animaciones internas se disparan a
 * destiempo.
 */
export function horizontalRail(rail, section, { onProgress, extra = 0.4 } = {}) {
  if (prefersReducedMotion() || !rail || !section) return null;
  return gsap.to(rail, {
    x: () => -(rail.scrollWidth - window.innerWidth),
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: () => `+=${rail.scrollWidth - window.innerWidth + window.innerHeight * extra}`,
      pin: true,
      scrub: 0.8,
      invalidateOnRefresh: true,
      onUpdate: onProgress ? (self) => onProgress(self.progress) : undefined,
    },
  });
}

/**
 * Marco que crece hasta ocupar la pantalla mientras se baja.
 *
 * Es el momento más caro del sitio en atención, así que solo se usa dos
 * veces: en el Inicio y en la página de KLINODA.
 */
export function expandFrame(frame, section, { backdrop, caption, end = '+=140%', onProgress } = {}) {
  if (prefersReducedMotion() || !frame || !section) return null;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end,
      pin: true,
      scrub: 0.6,
      // Los callbacks van AQUÍ, en la configuración: ScrollTrigger los lee al
      // crearse y asignarlos después no tiene ningún efecto.
      onUpdate: onProgress ? (self) => onProgress(self.progress) : undefined,
      onLeave: onProgress ? () => onProgress(1) : undefined,
      onLeaveBack: onProgress ? () => onProgress(0) : undefined,
    },
  });

  tl.fromTo(
    frame,
    { width: '58vw', height: '58vh', borderRadius: 32 },
    { width: '100vw', height: '100vh', borderRadius: 0, ease: 'power2.inOut', duration: 1 },
    0,
  );

  // El fondo se mueve más despacio que el marco: es lo que da la profundidad.
  if (backdrop) {
    tl.fromTo(
      backdrop,
      { scale: 1.15, yPercent: -6 },
      { scale: 1, yPercent: 6, ease: 'none', duration: 1 },
      0,
    );
  }

  if (caption) {
    tl.fromTo(caption, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.35 }, 0.6);
  }

  return tl;
}

/**
 * Tarjetas apiladas: cada una se queda pegada arriba y la siguiente la cubre
 * mientras la de debajo se encoge y se apaga un poco.
 */
export function stackCards(cards) {
  if (prefersReducedMotion() || !cards || cards.length < 2) return null;
  const list = gsap.utils.toArray(cards);
  list.forEach((card, i) => {
    if (i === list.length - 1) return;
    const trigger = { trigger: list[i + 1], start: 'top 80%', end: 'top 20%', scrub: true };

    // Encoge un poco…
    gsap.to(card, { scale: 0.96, ease: 'none', scrollTrigger: trigger });

    /* …y se oscurece con un velo, NUNCA con opacidad. Bajar la opacidad de
       la tarjeta la vuelve translúcida y deja leer a través de ella el texto
       de la que viene detrás: cuatro reglas superpuestas e ilegibles. Un velo
       opaco encima consigue el mismo efecto de profundidad sin transparentar
       nada. */
    const velo = card.querySelector('[data-velo]');
    if (velo) gsap.to(velo, { opacity: 0.45, ease: 'none', scrollTrigger: trigger });
  });
  return list;
}

/** Cinta de hechos que se desplaza sin fin. El contenido va duplicado. */
export function marquee(track, { duration = 28 } = {}) {
  if (prefersReducedMotion() || !track) return null;
  return gsap.to(track, { xPercent: -50, ease: 'none', duration, repeat: -1 });
}
