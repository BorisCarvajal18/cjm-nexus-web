'use client';

/**
 * <Ticker /> — cinta de hechos en movimiento continuo.
 *
 * Lleva los datos que sostienen a la firma, no eslóganes. Cada elemento debe
 * poder responder «¿dónde está eso?».
 *
 * La lista se duplica en el DOM y la animación desplaza la pista un 50 %:
 * así el bucle es perfecto sin calcular anchos. La copia va marcada como
 * `aria-hidden` para que un lector de pantalla no lea todo dos veces.
 */
import useGsap from '../../hooks/useGsap';
import { marquee } from '../../lib/animations';

export default function Ticker({ items = [], duration = 28, className = '' }) {
  const scope = useGsap(
    (self, root) => {
      if (root) marquee(root.querySelector('[data-track]'), { duration });
    },
    [duration, items.length],
  );

  const row = (hidden) =>
    items.map((item, i) => (
      <span
        key={`${hidden ? 'b' : 'a'}-${i}`}
        className="inline-flex items-center gap-[.9rem] whitespace-nowrap font-display text-[.85rem] font-bold text-navy"
      >
        {item}
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-g-copper" />
      </span>
    ));

  return (
    <div
      ref={scope}
      className={`overflow-hidden border-y border-hairline bg-g-stone py-[.9rem] ${className}`}
    >
      <div data-track className="flex w-max gap-12">
        {row(false)}
        <span aria-hidden="true" className="contents">
          {row(true)}
        </span>
      </div>
    </div>
  );
}
