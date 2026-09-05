'use client';

/**
 * <Accordion /> — preguntas frecuentes.
 *
 * Se construye sobre <details>/<summary> nativos, no sobre estado de React.
 * Motivo: así funciona sin JavaScript, el teclado y los lectores de pantalla
 * lo entienden de fábrica, y el buscador del navegador (Ctrl+F) encuentra
 * texto dentro de respuestas cerradas.
 *
 * `single` cierra las demás al abrir una. Es opcional porque en una página de
 * preguntas suele convenir poder comparar dos respuestas a la vez.
 */
import { useRef } from 'react';

export default function Accordion({ items = [], single = false, className = '' }) {
  const root = useRef(null);

  const handleToggle = (event) => {
    if (!single || !event.target.open || !root.current) return;
    root.current.querySelectorAll('details[open]').forEach((el) => {
      if (el !== event.target) el.open = false;
    });
  };

  return (
    <div ref={root} className={className}>
      {items.map((item, i) => (
        <details
          key={item.q ?? i}
          onToggle={handleToggle}
          className="group border-b border-hairline py-4"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[1.05rem] font-bold marker:content-none">
            {item.q}
            <span
              aria-hidden="true"
              className="grid h-7 w-7 flex-none place-items-center rounded-full bg-stone-light text-copper-deep transition-transform duration-200 ease-out group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-[62ch] text-ink-soft">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
