/**
 * Tablero financiero en miniatura, para el panel de dirección financiera.
 *
 * Sustituye a la caja blanca con una cifra suelta que había antes y que se
 * leía como algo sin terminar. Aquí se ve lo que de verdad recibe un cliente:
 * tres indicadores con su variación, la curva de ventas contra la meta y la
 * alerta del mes.
 *
 * LA CURVA ES SVG PURO. Un gráfico de verdad traería una librería entera al
 * navegador para dibujar nueve puntos; esto son dos rutas calculadas a mano.
 */

/** Convierte una serie de números en la ruta de la línea y la del relleno. */
function trazar(serie, ancho, alto) {
  const max = Math.max(...serie);
  const min = Math.min(...serie);
  const rango = max - min || 1;
  const paso = ancho / (serie.length - 1);
  const puntos = serie.map((v, i) => [i * paso, alto - ((v - min) / rango) * (alto - 8) - 4]);
  const linea = puntos
    .map(([x, y], i) => (i === 0 ? `M${x.toFixed(1)} ${y.toFixed(1)}` : `L${x.toFixed(1)} ${y.toFixed(1)}`))
    .join(' ');
  return { linea, relleno: `${linea} L${ancho} ${alto} L0 ${alto} Z` };
}

const TONO = { ok: 'text-[#1F6E4E]', warn: 'text-copper-deep', neutral: 'text-ink-muted' };

export default function FinanceCard({ data }) {
  const { linea, relleno } = trazar(data.series, 300, 74);

  return (
    <div className="w-full overflow-hidden rounded-xl3 border border-hairline bg-surface shadow-deep">
      <div className="flex items-baseline justify-between gap-3 border-b border-hairline px-4 py-3">
        <b className="font-display text-[.88rem] font-extrabold">{data.title}</b>
        <span className="text-[.66rem] font-bold uppercase tracking-[.1em] text-ink-muted">
          {data.subject}
        </span>
      </div>

      <div className="grid grid-cols-3 divide-x divide-hairline border-b border-hairline">
        {data.kpis.map((kpi) => (
          <div key={kpi.label} className="px-3 py-3">
            <span className="block text-[.6rem] font-bold uppercase tracking-[.08em] text-ink-muted">
              {kpi.label}
            </span>
            <b className="mt-[.15rem] block font-display text-[1.05rem] font-extrabold tabular-nums">
              {kpi.value}
            </b>
            <span className={`text-[.66rem] font-bold tabular-nums ${TONO[kpi.tone] ?? TONO.neutral}`}>
              {kpi.delta}
            </span>
          </div>
        ))}
      </div>

      <div className="px-4 pb-3 pt-3">
        <span className="block text-[.6rem] font-bold uppercase tracking-[.08em] text-ink-muted">
          {data.seriesLabel}
        </span>
        <svg viewBox="0 0 300 74" className="mt-2 h-[74px] w-full" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="mk-fin-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C9784A" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#C9784A" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="mk-fin-line" x1="0" x2="1">
              <stop offset="0%" stopColor="#1E2D4F" />
              <stop offset="100%" stopColor="#C9784A" />
            </linearGradient>
          </defs>
          <path d={relleno} fill="url(#mk-fin-fill)" />
          <path d={linea} fill="none" stroke="url(#mk-fin-line)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="flex items-start gap-2 border-t border-hairline bg-surface-muted px-4 py-3">
        <span aria-hidden="true" className="mt-[.3rem] h-2 w-2 flex-none rounded-full bg-g-copper" />
        <span className="text-[.76rem] font-semibold text-ink-soft">{data.alert}</span>
      </div>
    </div>
  );
}
