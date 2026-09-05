'use client';

/**
 * <StatCounter /> — una cifra que se cuenta sola al entrar en pantalla.
 *
 * EL VALOR FINAL SE RENDERIZA EN EL SERVIDOR. La animación solo lo recorre
 * desde cero; si no hay JavaScript, la cifra ya está escrita y correcta.
 *
 * `value` es opcional: sin él la cifra no cuenta, solo se muestra. Es lo que
 * se usa para valores que no son enteros («5,1 s»), donde contar no aporta
 * nada y solo distrae.
 */
import useGsap from '../../hooks/useGsap';
import { countUp } from '../../lib/animations';

export default function StatCounter({
  display,
  value,
  suffix = '',
  label,
  note,
  gradient = 'bg-g-brand',
  className = '',
}) {
  const scope = useGsap(
    (self, root) => {
      if (!root || value == null) return;
      countUp(root.querySelector('[data-number]'), { to: value, suffix });
    },
    [value, suffix],
  );

  return (
    <div ref={scope} className={`rounded-xl3 border border-hairline bg-surface p-6 ${className}`}>
      <b
        data-number
        className={`block font-display text-[clamp(2rem,3.4vw,3rem)] font-extrabold leading-none tracking-tighter tabular-nums text-grad ${gradient}`}
      >
        {display}
      </b>
      <span className="mt-2 block text-[.92rem] font-semibold text-ink-soft">{label}</span>
      {note ? <small className="mt-1 block text-[.74rem] text-ink-muted">{note}</small> : null}
    </div>
  );
}
