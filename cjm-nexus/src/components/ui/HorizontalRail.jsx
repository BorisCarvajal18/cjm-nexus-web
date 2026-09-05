'use client';

/**
 * <HorizontalRail /> — la sección se fija y sus paneles se recorren de lado.
 *
 * Se usa donde el contenido es una serie corta de piezas equivalentes que
 * conviene comparar: las dos líneas de servicio más el proyecto. Con más de
 * cuatro paneles el recorrido se hace largo y el visitante pierde la
 * referencia de dónde está, de ahí la barra de progreso al pie.
 *
 * EN MÓVIL NO SE FIJA NADA. Secuestrar el desplazamiento vertical en una
 * pantalla táctil es la forma más rápida de que alguien cierre la pestaña;
 * por debajo de 900 px los paneles se apilan y se leen en vertical, que es lo
 * que el pulgar espera.
 *
 * Cualquier elemento con `data-parallax` dentro de un panel se desplaza a
 * distinta velocidad durante el recorrido.
 */
import { useEffect, useState } from 'react';

import useGsap from '../../hooks/useGsap';
import { horizontalRail } from '../../lib/animations';
import { gsap, ScrollTrigger } from '../../lib/gsap';
import { marcarOscuro } from '../../lib/surface';

/** Tonos con los que la cabecera necesita ponerse blanca. */
const OSCUROS = new Set(['navy', 'copper', 'teal']);

export default function HorizontalRail({ children, label, panelTones = [], className = '' }) {
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    // 1024 px: el mismo punto que el prefijo `lg:` de Tailwind. Si los dos no
    // coinciden queda una franja de anchos donde GSAP fija una sección que
    // todavía está maquetada en vertical.
    const query = window.matchMedia('(min-width: 1024px)');
    const sync = () => setIsWide(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  const scope = useGsap(
    (self, root) => {
      if (!root || !isWide) return undefined;
      const rail = root.querySelector('[data-rail]');
      const bar = root.querySelector('[data-bar]');

      /* EL TONO DE LA CABECERA SE DEDUCE DEL AVANCE, no de medir posiciones:
         los paneles se mueven en horizontal dentro de una sección fijada, así
         que ninguno «pasa por debajo» de la cabecera en el eje vertical y un
         ScrollTrigger normal no sabría cuál se está viendo. Con el progreso
         sí: dice qué panel toca y de ahí sale si es claro u oscuro. */
      let oscuro = false;
      const aplicar = (siguiente) => {
        if (siguiente === oscuro) return;
        marcarOscuro(siguiente);
        oscuro = siguiente;
      };
      const segunPanel = (progress) => {
        if (!panelTones.length) return;
        const i = Math.min(panelTones.length - 1, Math.floor(progress * panelTones.length));
        aplicar(OSCUROS.has(panelTones[i]));
      };

      const railTl = horizontalRail(rail, root, {
        onProgress: (progress) => {
          if (bar) gsap.set(bar, { scaleX: progress });
          segunPanel(progress);
        },
      });
      if (!railTl) return undefined;

      /* Al salir de la sección hay que devolver el tono, o la cabecera se
         queda blanca sobre el fondo crema de la sección siguiente. */
      const salida = ScrollTrigger.create({
        trigger: root,
        start: 'top top',
        end: () => `+=${rail.scrollWidth - window.innerWidth + window.innerHeight * 0.4}`,
        onLeave: () => aplicar(false),
        onLeaveBack: () => aplicar(false),
      });

      root.querySelectorAll('[data-panel]').forEach((panel) => {
        const layer = panel.querySelector('[data-parallax]');
        if (layer) {
          gsap.fromTo(
            layer,
            { xPercent: -8 },
            {
              xPercent: 8,
              ease: 'none',
              scrollTrigger: {
                trigger: panel,
                containerAnimation: railTl,
                start: 'left right',
                end: 'right left',
                scrub: true,
              },
            },
          );
        }

        /* SOLO DESPLAZAMIENTO, SIN OPACIDAD. Un `from({opacity: 0})` deja el
           contenido invisible desde el primer momento y solo lo revela cuando
           su ScrollTrigger dispara. Si algo impide que dispare —un fallo de
           medición, un cambio de tamaño a destiempo— el panel se queda en
           blanco. Moviendo únicamente la posición, el texto SIEMPRE se lee. */
        gsap.from(panel.querySelectorAll('[data-stagger] > *'), {
          y: 30,
          stagger: 0.06,
          duration: 0.6,
          scrollTrigger: {
            trigger: panel,
            containerAnimation: railTl,
            start: 'left 60%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      return () => {
        // Si se desmonta con un panel oscuro en pantalla hay que devolver su
        // punto, o la cabecera se quedaría blanca en la página siguiente.
        aplicar(false);
        salida.kill();
      };
    },
    [isWide, panelTones],
  );

  return (
    <section
      ref={scope}
      aria-label={label}
      className={`relative bg-g-navy text-white lg:h-screen lg:overflow-hidden ${className}`}
    >
      <div data-rail className="lg:absolute lg:left-0 lg:top-0 lg:flex lg:h-full lg:will-change-transform">
        {children}
      </div>

      {/* Progreso del recorrido. Solo tiene sentido cuando el raíl se fija. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-[7vw] bottom-[4vh] hidden h-[2px] bg-white/20 lg:block"
      >
        <span data-bar className="block h-full origin-left scale-x-0 bg-g-copper" />
      </div>
    </section>
  );
}

/** Un panel del raíl. Ocupa la pantalla entera en escritorio. */
export function RailPanel({ tone = 'navy', index, children, className = '' }) {
  const TONES = {
    navy: 'bg-g-navy text-white',
    copper: 'bg-g-copper text-white',
    stone: 'bg-g-stone text-ink',
    teal: 'bg-g-teal text-white',
  };

  return (
    <article
      data-panel
      className={`relative grid content-center gap-8 px-[7vw] py-20 lg:h-screen lg:w-screen lg:flex-none lg:grid-cols-[1.05fr_1fr] lg:gap-[4vw] lg:pb-[9vh] lg:pt-[14vh] ${TONES[tone] ?? TONES.navy} ${className}`}
    >
      {children}
      {index ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[4vh] right-[4vw] hidden font-display text-[9rem] font-extrabold leading-none tracking-tighter opacity-10 lg:block"
        >
          {index}
        </span>
      ) : null}
    </article>
  );
}
