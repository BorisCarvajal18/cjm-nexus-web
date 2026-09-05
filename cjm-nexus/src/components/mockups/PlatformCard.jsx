/**
 * Esquema de arquitectura para el panel de soluciones digitales.
 *
 * No es un tablero: sería el tercer tablero seguido y los tres paneles
 * acabarían pareciendo el mismo. Lo que vende esta línea no es una pantalla
 * bonita, sino que las reglas vivan en el centro del sistema, así que el
 * dibujo enseña justo eso: de dónde vienen los datos, qué los ordena y qué
 * sale por el otro lado.
 */
export default function PlatformCard({ data }) {
  return (
    <div className="w-full overflow-hidden rounded-xl3 border border-hairline bg-surface shadow-deep">
      <div className="border-b border-hairline px-4 py-3">
        <b className="font-display text-[.88rem] font-extrabold">{data.title}</b>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-5">
        <ul className="grid gap-[.35rem]">
          {data.sources.map((source) => (
            <li
              key={source}
              className="rounded-lg border border-hairline bg-surface-muted px-2 py-[.4rem] text-center text-[.7rem] font-semibold text-ink-soft"
            >
              {source}
            </li>
          ))}
        </ul>

        {/* El núcleo, con los tres trazos que entran y los tres que salen. */}
        <div className="relative grid place-items-center">
          <svg viewBox="0 0 96 108" className="h-[108px] w-[96px]" aria-hidden="true">
            <path
              d="M0 18 H26 M0 54 H26 M0 90 H26 M70 18 H96 M70 54 H96 M70 90 H96"
              fill="none"
              stroke="#E8B48A"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <rect x="26" y="30" width="44" height="48" rx="10" fill="#141F3A" />
            <circle cx="48" cy="54" r="7" fill="none" stroke="#E8B48A" strokeWidth="1.5" />
            <circle cx="48" cy="54" r="2.5" fill="#E8B48A" />
            <circle cx="26" cy="18" r="2.5" fill="#C9784A" />
            <circle cx="26" cy="90" r="2.5" fill="#C9784A" />
            <circle cx="70" cy="54" r="2.5" fill="#45B3A8" />
          </svg>
          <span className="absolute -bottom-1 text-[.58rem] font-bold uppercase tracking-[.1em] text-ink-muted">
            {data.core}
          </span>
        </div>

        <ul className="grid gap-[.35rem]">
          {data.outputs.map((output, i) => (
            <li
              key={output}
              className={`rounded-lg px-2 py-[.4rem] text-center text-[.7rem] font-bold ${
                i === 1 ? 'bg-g-copper text-white' : 'border border-hairline bg-surface-muted text-ink-soft'
              }`}
            >
              {output}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-start gap-2 border-t border-hairline bg-surface-muted px-4 py-3">
        <span aria-hidden="true" className="mt-[.3rem] h-2 w-2 flex-none rounded-full bg-g-teal" />
        <span className="text-[.76rem] font-semibold text-ink-soft">{data.foot}</span>
      </div>
    </div>
  );
}
