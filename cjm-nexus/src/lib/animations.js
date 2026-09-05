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

/** Curva propia del sitio: sale rápido y frena largo. */
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
    gsap.to(card, {
      scale: 0.94,
      opacity: 0.7,
      ease: 'none',
      scrollTrigger: { trigger: list[i + 1], start: 'top 80%', end: 'top 20%', scrub: true },
    });
  });
  return list;
}

/** Cinta de hechos que se desplaza sin fin. El contenido va duplicado. */
export function marquee(track, { duration = 28 } = {}) {
  if (prefersReducedMotion() || !track) return null;
  return gsap.to(track, { xPercent: -50, ease: 'none', duration, repeat: -1 });
}
