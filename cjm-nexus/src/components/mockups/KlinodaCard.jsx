import Pill from '../ui/Pill';

/**
 * Portal de empresa de KLINODA, para el tercer panel.
 *
 * De todas las pantallas del producto, esta es la que mejor lo explica sin
 * una palabra: la empresa ve el cargo, el tipo de evaluación y si la persona
 * es apta. Nada más. La regla de privacidad se entiende mirando, que es más
 * convincente que leerla.
 *
 * Los cargos son genéricos y no hay nombres: ni reales ni inventados. Una
 * lista de personas, aunque fueran ficticias, se parecería demasiado a un
 * expediente de verdad.
 */
export default function KlinodaCard({ data }) {
  return (
    <div className="w-full overflow-hidden rounded-xl3 border border-hairline bg-surface shadow-deep">
      <div className="flex items-center justify-between gap-3 border-b border-hairline px-4 py-3">
        <b className="inline-flex items-center gap-2 font-display text-[.88rem] font-extrabold tracking-[.04em] text-[#3D3A8F]">
          <span aria-hidden="true" className="grid h-4 w-4 place-items-center rounded bg-[#3D3A8F]">
            <span className="h-[5px] w-[5px] rounded-full bg-[#2AA79B]" />
          </span>
          KLINODA
        </b>
        <span className="text-[.62rem] font-bold uppercase tracking-[.1em] text-ink-muted">
          {data.subject}
        </span>
      </div>

      <div className="grid grid-cols-[1.35fr_1fr_1.1fr] gap-2 bg-surface-muted px-4 py-2 text-[.6rem] font-bold uppercase tracking-[.08em] text-ink-muted">
        {data.columns.map((col) => (
          <span key={col}>{col}</span>
        ))}
      </div>

      {data.rows.map(([cargo, tipo, tono, estado]) => (
        <div
          key={cargo}
          className="grid grid-cols-[1.35fr_1fr_1.1fr] items-center gap-2 border-t border-hairline px-4 py-[.55rem] text-[.78rem]"
        >
          <span className="font-semibold">{cargo}</span>
          <span className="text-ink-soft">{tipo}</span>
          <Pill tone={tono}>{estado}</Pill>
        </div>
      ))}

      <div className="flex items-start gap-2 border-t border-hairline bg-surface-muted px-4 py-3">
        <span
          aria-hidden="true"
          className="mt-[.15rem] grid h-4 w-4 flex-none place-items-center rounded border border-[#2AA79B] bg-[#2AA79B]/15"
        >
          <span className="h-[6px] w-[5px] rounded-[1px] border border-[#2AA79B]" />
        </span>
        <span className="text-[.76rem] font-semibold text-ink-soft">{data.foot}</span>
      </div>
    </div>
  );
}
