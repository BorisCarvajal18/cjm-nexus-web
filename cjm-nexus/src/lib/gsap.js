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

  /* AJUSTES DE RENDIMIENTO DEL DESPLAZAMIENTO.
   *
   * `limitCallbacks` hace que onUpdate y compañía se llamen una vez por
   * fotograma en lugar de una vez por evento de scroll. Un ratón de rueda
   * libre o un panel táctil disparan muchos más eventos que fotogramas puede
   * pintar el navegador, y sin esto cada uno ejecutaba nuestro código.
   *
   * `ignoreMobileResize` evita recalcular todas las medidas cuando la barra
   * del navegador móvil se esconde al bajar. Ese recálculo es carísimo y
   * ocurre justo mientras el dedo está desplazando.
   *
   * `lagSmoothing` le dice a GSAP que, si un fotograma tarda más de 500 ms,
   * no intente recuperar el tiempo perdido de golpe: hacerlo produce un salto
   * brusco justo después de cualquier tirón.
   */
  ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true });
  gsap.ticker.lagSmoothing(500, 33);

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
