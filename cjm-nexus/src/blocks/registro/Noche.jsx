'use client';

/**
 * <Noche /> — el tramo T (DESIGN.md, «La noche sin bajar de AA»).
 *
 * 0,75 pantalla ligada al scroll: desde que el borde de KLINODA (`.puerta`)
 * asoma por abajo hasta que llega al 25 % de la pantalla.
 *
 *   0–10 %   los grises secundarios se funden con la tinta principal
 *   10–50 %  el fondo se oscurece del papel al 50 % del marino
 *   50 %     paso corto del 50 al 59 % en 0,3 s: el texto pasa a blanco, la
 *            cabecera se vuelve oscura (`marcarOscuro`) y cambia el logotipo
 *   59–100 % termina de oscurecerse; los grises vuelven a su tono de noche
 *   90–100 % entra la hondura: la capa gana su degradado de marino vivo a
 *            marino hondo (`.noche::after`, estilos/klinoda.css)
 *
 * Por qué el paso: medido, entre el 50 y el 59 % ningún color de texto llega
 * a 4,5:1 (la tinta aguanta hasta el 50 %; el blanco pasa desde el 59 %). El
 * fondo nunca se queda quieto en ese tramo.
 *
 * Las variables del tema (`--tx-*`, `--filete*`) se reescriben en <html> en
 * cada fotograma. Las interfaces de muestra no las usan: son papel blanco en
 * los dos temas.
 *
 * CON «REDUCIR MOVIMIENTO» no hay noche: KLINODA y el cierre son bandas marino
 * por sí mismas y avisan a la cabecera como cualquier zona oscura.
 *
 * Va la última dentro de <main>: al montarse ordena los ScrollTrigger de la
 * página por su posición y los recalcula, como la maqueta.
 */
import { useEffect, useRef } from 'react';

import { gsap, registerGsap, ScrollTrigger } from '../../lib/gsap';
import { MUEVE, QUIETO } from '../../lib/registro';
import { marcarOscuro, vigilaZonaOscura } from '../../lib/surface';

const TINTA = [20, 31, 58];
const TX2 = [78, 88, 112];
const TX3 = [90, 99, 117];
const CRUCE = 0.545;
/* Desde qué oscuridad entra la hondura. Por debajo, la capa es marino plano,
   que es contra lo que están hechas las cuentas de contraste del tramo. */
const HONDURA_DESDE = 0.9;
const VARIABLES = ['--tx-1', '--tx-2', '--tx-3', '--tx-inverso', '--filete', '--filete-fuerte'];

const lim = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
const mezcla = (c1, c2, t) => `rgb(${c1.map((c, i) => Math.round(c + (c2[i] - c) * t)).join(',')})`;

function objetivo(p) {
  if (p <= 0.1) return { a: 0, g: p / 0.1 };
  if (p <= 0.5) return { a: (0.5 * (p - 0.1)) / 0.4, g: 1 };
  return { a: 0.59 + (0.41 * (p - 0.5)) / 0.5, g: 1 };
}

export default function Noche() {
  const capa = useRef(null);

  useEffect(() => {
    registerGsap();
    const raiz = document.documentElement;
    const noche = capa.current;
    const puerta = document.querySelector('.puerta');
    const mm = gsap.matchMedia();

    mm.add(MUEVE, () => {
      /* Una portada sin la escena de KLINODA no tiene noche: el cierre, oscuro
         por sí mismo, avisa a la cabecera como cualquier zona oscura. */
      if (!puerta) {
        const cierre = document.querySelector('.cierre');
        return cierre ? vigilaZonaOscura(cierre, { alFinal: true }) : undefined;
      }
      const estado = { a: 0, g: 0, oscuro: false };
      raiz.classList.add('tema-vivo');

      function pinta() {
        const { a, g: gr } = estado;
        const oscuro = a >= CRUCE;
        const s = raiz.style;
        noche.style.opacity = a.toFixed(4);
        noche.style.setProperty('--hondura', lim((a - HONDURA_DESDE) / (1 - HONDURA_DESDE)).toFixed(3));
        if (!oscuro) {
          s.setProperty('--tx-1', '#141F3A');
          s.setProperty('--tx-2', mezcla(TX2, TINTA, gr));
          s.setProperty('--tx-3', mezcla(TX3, TINTA, gr));
          s.setProperty('--tx-inverso', '#FFFFFF');
          s.setProperty('--filete', '#DDD8D0');
          s.setProperty('--filete-fuerte', '#141F3A');
        } else {
          /* El blanco al 82 % pasa desde el 67 % de oscuridad y el del 66 %
             desde el 76 %: hasta ahí los grises siguen en blanco pleno. */
          s.setProperty('--tx-1', '#FFFFFF');
          s.setProperty('--tx-2', `rgba(255,255,255,${(1 - 0.18 * lim((a - 0.67) / 0.33)).toFixed(3)})`);
          s.setProperty('--tx-3', `rgba(255,255,255,${(1 - 0.34 * lim((a - 0.76) / 0.24)).toFixed(3)})`);
          s.setProperty('--tx-inverso', '#141F3A');
          s.setProperty('--filete', 'rgba(255,255,255,.16)');
          s.setProperty('--filete-fuerte', 'rgba(255,255,255,.55)');
        }
        if (oscuro !== estado.oscuro) {
          estado.oscuro = oscuro;
          if (oscuro) raiz.setAttribute('data-tema', 'oscuro');
          else raiz.removeAttribute('data-tema');
          marcarOscuro(oscuro);
        }
      }
      /* Un tween de 0,3 s hacia el objetivo, que sustituye al anterior. */
      const hacia = (o) => gsap.to(estado, { a: o.a, g: o.g, duration: 0.3, ease: 'power2.out', overwrite: true, onUpdate: pinta });

      ScrollTrigger.create({
        trigger: puerta,
        start: 'top bottom',
        end: 'top 25%',
        onUpdate: (self) => hacia(objetivo(self.progress)),
        onRefresh: (self) => {
          const o = objetivo(self.progress);
          gsap.killTweensOf(estado);
          estado.a = o.a;
          estado.g = o.g;
          pinta();
        },
      });

      return () => {
        gsap.killTweensOf(estado);
        VARIABLES.forEach((v) => raiz.style.removeProperty(v));
        noche.style.opacity = '';
        noche.style.removeProperty('--hondura');
        raiz.classList.remove('tema-vivo');
        raiz.removeAttribute('data-tema');
        if (estado.oscuro) marcarOscuro(false);
      };
    });

    mm.add(QUIETO, () => {
      const fuera = [];
      if (puerta) fuera.push(vigilaZonaOscura(puerta));
      const cierre = document.querySelector('.cierre');
      if (cierre) fuera.push(vigilaZonaOscura(cierre, { alFinal: true }));
      return () => fuera.forEach((f) => f());
    });

    ScrollTrigger.sort();
    ScrollTrigger.refresh();
    return () => mm.revert();
  }, []);

  return <div ref={capa} className="noche" aria-hidden="true" />;
}
