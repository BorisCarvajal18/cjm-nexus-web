'use client';

/**
 * El momento visual grande de la portada: el tablero gerencial creciendo
 * hasta ocupar la pantalla.
 *
 * VA SOBRE EL ENTREGABLE FINANCIERO Y NO SOBRE KLINODA. Es el gesto más caro
 * en atención de todo el sitio y se usa una sola vez aquí, así que tiene que
 * gastarse en lo que la mayoría de visitantes viene a comprar. KLINODA tiene
 * su propio marco expansivo, pero en su página.
 *
 * LAS CIFRAS SON DE EJEMPLO Y SE DICE. El sitio anterior ponía un punto verde
 * parpadeando con la palabra «En vivo» sobre datos inventados; eso es lo que
 * hace que un visitante atento deje de creerse el resto. Aquí la nota dice
 * «cifras de ejemplo» y no hay ningún indicador de tiempo real.
 */
import ExpandingFrame from '../components/ui/ExpandingFrame';
import Pill, { Badge } from '../components/ui/Pill';

export default function DeliverableFrame({ content }) {
  const { badge, title, text, board } = content;

  return (
    <ExpandingFrame
      backdrop={
        <div className="h-full w-full bg-navy-deep bg-[radial-gradient(55%_55%_at_20%_25%,#C9784A,transparent_65%),radial-gradient(55%_55%_at_85%_75%,#3B4E7A,transparent_65%),radial-gradient(45%_45%_at_60%_10%,#E8B48A,transparent_60%)]" />
      }
      caption={
        <>
          <Badge>{badge}</Badge>
          <h2 className="mt-3 text-display-md">{title}</h2>
          <p className="mt-3 max-w-[34rem] opacity-85">{text}</p>
        </>
      }
    >
      <div className="w-full max-w-[46rem] rounded-xl3 bg-surface p-5 shadow-deep sm:p-6">
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
          <b className="font-display text-[.95rem] font-extrabold">{board.title}</b>
          <span className="text-[.64rem] font-extrabold uppercase tracking-[.12em] text-ink-muted">
            {board.note}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {board.kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-xl2 border border-hairline bg-surface-muted p-3">
              <span className="block text-[.64rem] font-semibold uppercase tracking-[.08em] text-ink-muted">
                {kpi.label}
              </span>
              <b
                className={`mt-1 block font-display text-[1.3rem] font-extrabold tabular-nums ${
                  kpi.tone === 'warn' ? 'text-copper-deep' : 'text-ink'
                }`}
              >
                {kpi.value}
              </b>
            </div>
          ))}
        </div>

        <div className="mt-3 overflow-hidden rounded-xl2 border border-hairline">
          <div className="grid grid-cols-[1.4fr_.8fr_1fr] gap-3 bg-surface-muted px-4 py-2 text-[.62rem] font-extrabold uppercase tracking-[.1em] text-ink-muted">
            {board.columns.map((col) => (
              <span key={col}>{col}</span>
            ))}
          </div>
          {board.rows.map(([linea, margen, tono, estado]) => (
            <div
              key={linea}
              className="grid grid-cols-[1.4fr_.8fr_1fr] items-center gap-3 border-t border-hairline px-4 py-[.6rem] text-[.86rem]"
            >
              <span>{linea}</span>
              <span className="font-semibold tabular-nums">{margen}</span>
              <Pill tone={tono}>{estado}</Pill>
            </div>
          ))}
        </div>

        <p className="mt-3 text-[.78rem] text-ink-soft">{board.foot}</p>
      </div>
    </ExpandingFrame>
  );
}
