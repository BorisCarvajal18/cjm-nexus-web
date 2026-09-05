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
 */
import useGsap from '../../hooks/useGsap';
import { stackCards } from '../../lib/animations';

const SURFACES = ['bg-g-navy', 'bg-g-copper', 'bg-g-teal', 'bg-g-brand'];

export default function StackedCards({ items = [], className = '' }) {
  const scope = useGsap(
    (self, root) => {
      if (root) stackCards(root.querySelectorAll('[data-card]'));
    },
    [items.length],
  );

  return (
    <div ref={scope} className={`grid gap-4 ${className}`}>
      {items.map((item, i) => (
        <article
          key={item.title ?? i}
          data-card
          style={{ top: `${14 + i * 3}vh` }}
          className={`sticky grid min-h-[48vh] content-start gap-8 rounded-xl4 p-9 text-white shadow-[0_40px_100px_-40px_rgba(20,31,58,.5)] md:grid-cols-2 ${SURFACES[i % SURFACES.length]}`}
        >
          <div>
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
            <div className="rounded-xl3 bg-white/[.16] p-5 text-[.9rem] backdrop-blur-sm">
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
