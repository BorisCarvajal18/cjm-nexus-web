'use client';

/**
 * Punto único de entrada a GSAP.
 *
 * POR QUÉ EXISTE ESTE ARCHIVO: los plugins de GSAP se registran una sola vez
 * por página. Si cada componente llamara a `registerPlugin` por su cuenta, la
 * llamada se repetiría en cada montaje y el orden dependería de qué componente
 * se renderiza antes. Aquí se registran una vez y de forma perezosa, solo en
 * el navegador (en el servidor no hay `window` y ScrollTrigger falla).
 *
 * Todo componente que anime importa `gsap` DESDE AQUÍ, nunca desde 'gsap'
 * directamente.
 */
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

/** Registra los plugins la primera vez que se llama, en cliente. */
export function registerGsap() {
  if (registered || typeof window === 'undefined') return gsap;
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  registered = true;

  /* DOS RECÁLCULOS QUE EVITAN QUE EL MOVIMIENTO SE DISPARE A DESTIEMPO.
   *
   * ScrollTrigger mide dónde empieza y acaba cada sección UNA VEZ, al crearla.
   * Si el alto de la página cambia después, esas medidas quedan viejas y las
   * animaciones saltan antes o después de donde deben, o no saltan.
   *
   * 1. Al terminar de cargar las fuentes. Plus Jakarta e Inter entran con
   *    `display: swap`: primero se dibuja con la letra de reserva y luego se
   *    sustituye, y el texto cambia de alto al hacerlo. En una conexión lenta
   *    eso ocurre mucho después de crear los ScrollTrigger.
   *
   * 2. Al volver a la pestaña. El motor de animación de GSAP va con
   *    requestAnimationFrame, que el navegador detiene cuando la pestaña no
   *    está a la vista. Si alguien abre el enlace en segundo plano y vuelve
   *    más tarde, esto reanuda las medidas y despierta lo que quedó a medias.
   */
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh()).catch(() => {});
  }
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) ScrollTrigger.refresh();
  });

  return gsap;
}

/**
 * ¿El sistema pide reducir el movimiento?
 *
 * Se consulta en cada preset. Cuando devuelve `true` NO se anima nada y el
 * contenido se queda tal como vino del servidor — que, por diseño, es su
 * estado final visible (ver la nota de `animations.js`).
 */
export function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export { gsap, MotionPathPlugin, ScrollTrigger };
