'use client';

/**
 * <StackedCards /> — tarjetas que se quedan pegadas y se van cubriendo.
 *
 * Sirve para contenido que ES una secuencia y donde cada paso merece la
 * pantalla entera un momento: las cuatro reglas del método, las fases de un
 * proyecto. Para una rejilla de cosas comparables no vale; ahí va <Card />.
 *
 * El apilado se consigue con `position: sticky` y un desplazamiento creciente
 * por tarjeta, de modo que asome el borde superior de las anteriores. GSAP
 * solo añade el encogido; sin JavaScript el apilado sigue funcionando, que es
 * la razón de resolverlo con CSS y no con animación.
 *
 * NO SE APILA EN EL TELÉFONO, y no es por gusto: se midió. Con la cuarta
 * tarjeta pegada a 39vh del borde superior, en una pantalla de 667 px —un
 * iPhone SE o un 8, que siguen siendo muchísimos— la tarjeta sobresalía 77 px
 * por abajo y su ejemplo quedaba cortado. Justo el ejemplo, que es lo único
 * que distingue esta sección de una lista de adjetivos.
 *
 * Apilar exige altura, y en vertical no la hay. Por debajo de 768 px las
 * cuatro se leen una detrás de otra, enteras, y GSAP no se activa: sin
 * apilado no hay nada que oscurecer.
 */
import { useEffect, useState } from 'react';

import useGsap from '../../hooks/useGsap';
import { stackCards } from '../../lib/animations';

const SURFACES = ['bg-g-navy', 'bg-g-copper', 'bg-g-teal', 'bg-g-brand'];

export default function StackedCards({ items = [], className = '' }) {
  const [apila, setApila] = useState(false);

  useEffect(() => {
    // 768 px: el mismo punto que el prefijo `md:` de la tarjeta. Si los dos no
    // coinciden queda una franja de anchos donde GSAP oscurece tarjetas que
    // no se están apilando.
    const query = window.matchMedia('(min-width: 768px)');
    const sync = () => setApila(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  const scope = useGsap(
    (self, root) => {
      if (root && apila) stackCards(root.querySelectorAll('[data-card]'));
    },
    [items.length, apila],
  );

  return (
    <div ref={scope} className={`grid gap-4 md:gap-4 ${className}`}>
      {items.map((item, i) => (
        <article
          key={item.title ?? i}
          data-card
          /* SEPARACIÓN AMPLIA ENTRE TARJETAS. Con tres grados de diferencia
             asomaba justo la franja donde vive el título de la anterior, y
             los cuatro títulos acababan pisándose. Con nueve solo asoma
             color, que es lo que debe verse: el borde de lo ya leído. */
          style={{ top: `${12 + i * 9}vh`, zIndex: i + 1 }}
          className={`static grid md:sticky md:min-h-[46vh] content-start gap-8 overflow-hidden rounded-xl4 p-9 text-white shadow-[0_40px_100px_-40px_rgba(20,31,58,.5)] md:grid-cols-2 ${SURFACES[i % SURFACES.length]}`}
        >
          {/* La tarjeta que queda debajo se OSCURECE, no se vuelve
              translúcida: con opacidad se transparentaba y se leía el texto
              de dos tarjetas a la vez. */}
          <span data-velo aria-hidden="true" className="pointer-events-none absolute inset-0 bg-navy-deep opacity-0" />
          <div className="relative">
            <span
              aria-hidden="true"
              className="font-display text-[3.4rem] font-extrabold leading-none tracking-tighter opacity-45"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mb-3 mt-2 text-display-sm">{item.title}</h3>
            <p className="max-w-[30rem] opacity-90">{item.text}</p>
          </div>

          {item.evidence ? (
            <div className="relative rounded-xl3 bg-white/[.16] p-5 text-[.9rem]">
              <b className="mb-2 block text-[.64rem] font-extrabold uppercase tracking-[.14em] opacity-80">
                {item.evidenceLabel ?? 'Ejemplo real'}
              </b>
              {item.evidence}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}
