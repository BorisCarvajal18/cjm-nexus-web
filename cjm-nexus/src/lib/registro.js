'use client';

/**
 * Las piezas de movimiento del registro (DESIGN.md, Movimiento).
 *
 * Pasadas de la maqueta aprobada (`C-fusion.html`) con sus mismos nombres,
 * para que comparar las dos sea leer, no traducir. Las constantes (curvas,
 * pantallas, umbral) están en `lib/animations.js`, bloque «EL REGISTRO».
 *
 * EL RELOJ DE LAS ENTRADAS. Cada sección tiene una sola entrada, con reloj,
 * una vez, al asomar (`alAsomar`):
 * - si la página se carga ya pasada la sección, aparece en su estado final;
 * - si asoma mientras entra la portada, espera a que termine;
 * - tras cada recálculo de ScrollTrigger, las que no han arrancado vuelven a
 *   pintar su estado de partida (con escenas fijadas se perdía; ronda 5).
 *
 * El texto de cada sección está en el HTML con su valor final. El guion solo
 * mueve, atenúa y cuenta lo que ya existe.
 */
import { useEffect, useLayoutEffect, useRef } from 'react';

import { gsap, registerGsap, ScrollTrigger } from './gsap';

export const MUEVE = '(prefers-reduced-motion: no-preference)';
export const QUIETO = '(prefers-reduced-motion: reduce)';

/** 1234 → «1.234». */
export function puntos(n) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/** Una cifra que cuenta desde cero hasta su `data-hasta`. Se pone a cero
    aquí, solo cuando de verdad va a animarse. */
export function cuenta(el, duracion) {
  const o = { v: 0 };
  const hasta = +el.dataset.hasta;
  el.textContent = '0';
  return gsap.to(o, {
    v: hasta,
    duration: duracion,
    ease: 'power3.out',
    onUpdate: () => {
      el.textContent = puntos(Math.round(o.v));
    },
  });
}

/** Reserva el ancho del valor final, para que el texto de al lado no baile. */
export function fijaAncho(el) {
  el.textContent = puntos(+el.dataset.hasta);
  el.style.minWidth = `${el.getBoundingClientRect().width}px`;
  el.textContent = '0';
}

export function restauraCuenta(el) {
  el.style.minWidth = '';
  el.textContent = puntos(+el.dataset.hasta);
}

/** Escalonado a mano: un fromTo por elemento, cada uno en su posición. */
export function escalona(tl, elementos, desde, hasta, pos, cada) {
  gsap.utils.toArray(elementos).forEach((el, i) => tl.fromTo(el, desde, hasta, pos + i * cada));
  return tl;
}

/** Un trazo que se dibuja. El hueco mide 2 unidades más que el trazo: así la
    punta redondeada no deja un punto suelto al principio. */
export function trazo(tl, el, duracion, ease, pos) {
  const l = el.getTotalLength();
  el.style.strokeDasharray = `${l} ${l + 2}`;
  tl.fromTo(el, { strokeDashoffset: l + 2 }, { strokeDashoffset: 0, duration: duracion, ease }, pos);
}

/* Estados de partida de las entradas que aún no han arrancado. */
const pendientes = new Set();
let vigilando = false;
function vigila() {
  if (vigilando) return;
  vigilando = true;
  ScrollTrigger.addEventListener('refresh', () => {
    pendientes.forEach((tl) => {
      if (tl.__arrancada || !tl.parent) pendientes.delete(tl);
      else tl.progress(1, true).progress(0, true);
    });
  });
}

/** Anota una entrada para repintar su estado de partida tras cada recálculo. */
export function anotaPendiente(tl) {
  vigila();
  pendientes.add(tl);
}

/** Lo que dura la entrada de la portada: lo que asoma antes, espera. */
const ENTRADA_PORTADA = 1.6;

/**
 * Una entrada con reloj, una sola vez, al asomar. `tl` va en pausa; si trae
 * `tl.data.cuentas`, sus cifras reservan su ancho antes de contar.
 */
export function alAsomar(el, inicio, tl) {
  let hecho = false;
  let st = null;
  function lanza() {
    if (hecho) return;
    hecho = true;
    tl.__arrancada = true;
    pendientes.delete(tl);
    st?.kill();
    if (el.getBoundingClientRect().bottom < 0) {
      tl.progress(1);
      return;
    }
    tl.data?.cuentas?.forEach(fijaAncho);
    const enPortada = document.documentElement.classList.contains('js-mov');
    const espera = enPortada ? Math.max(0, ENTRADA_PORTADA - performance.now() / 1000) : 0;
    if (espera > 0) gsap.delayedCall(espera, () => tl.play());
    else tl.play();
  }
  anotaPendiente(tl);
  st = ScrollTrigger.create({ trigger: el, start: inicio, onEnter: lanza, onLeave: lanza });
  return st;
}

const useIsoLayout = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * useRegistro — el movimiento de una sección con `gsap.matchMedia()`.
 *
 * `monta(mm, raiz)` recibe el matchMedia (con la raíz como ámbito de los
 * selectores) y añade sus condiciones. Todo se deshace al desmontar: tweens,
 * ScrollTrigger y estilos en línea.
 */
export function useRegistro(monta) {
  const raiz = useRef(null);
  useIsoLayout(() => {
    registerGsap();
    const mm = gsap.matchMedia(raiz);
    monta(mm, raiz.current);
    return () => mm.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return raiz;
}
