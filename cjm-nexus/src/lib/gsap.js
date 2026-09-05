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
