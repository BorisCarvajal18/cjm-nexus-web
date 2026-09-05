/**
 * El tablero gerencial completo: la pieza que crece hasta ocupar la pantalla.
 *
 * Su estructura es la del brochure que la firma ya enseña a clientes —ventas
 * contra la meta, margen por línea, días de caja y alertas del mes—, de modo
 * que lo que se ve en la web es lo mismo que se recibe.
 *
 * TIENE SUJETO, y no es un detalle: un tablero sin nombre no se entiende. La
 * cabecera dice de qué empresa y de qué mes, para que se lea como una muestra
 * de un entregable y no como un adorno con números.
 *
 * Las barras y la línea son SVG calculado, sin librería de gráficos. Traer
 * una entera para dibujar doce puntos es lo que hinchaba el sitio anterior.
 */
const TONO_TEXTO = { ok: 'text-[#1F6E4E]', warn: 'text-copper-deep', neutral: 'text-ink-muted' };
const TONO_BARRA = { ok: 'bg-g-navy', warn: 'bg-g-copper', neutral: 'bg-stone' };

export default function ManagementBoard({ data }) {
  const max = Math.max(...data.series, data.target);
  /* MARGEN DE MEDIA BARRA A CADA LADO. Sin el, la primera barra empezaba en
     x = -6 y la ultima terminaba en 306, las dos cortadas por el borde del
     dibujo. En escritorio pasaba desapercibido; en un telefono, con el
     tablero a la mitad de ancho, se veia una barra partida en cada punta. */
  const MARGEN = 7;
  const paso = (300 - MARGEN * 2) / (data.series.length - 1);
  const x = (i) => MARGEN + i * paso;
  const y = (v) => 76 - (v / max) * 66;
  const linea = data.series
    .map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`)
    .join(' ');

  return (
    <div className="w-full overflow-hidden rounded-xl3 border border-hairline bg-surface shadow-deep">
      <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-hairline px-5 py-3">
        <b className="font-display text-[.95rem] font-extrabold">{data.title}</b>
        <span className="text-[.68rem] font-bold uppercase tracking-[.1em] text-ink-muted">
          {data.subject}
        </span>
      </header>

      <div className="grid grid-cols-2 divide-x divide-hairline border-b border-hairline sm:grid-cols-4">
        {data.kpis.map((kpi, i) => (
          <div key={kpi.label} className={`px-4 py-3 ${i > 1 ? 'border-t border-hairline sm:border-t-0' : ''}`}>
            <span className="block text-[.6rem] font-bold uppercase tracking-[.08em] text-ink-muted">
              {kpi.label}
            </span>
            <b className="mt-[.15rem] block font-display text-[1.25rem] font-extrabold tabular-nums">
              {kpi.value}
            </b>
            <span className={`text-[.7rem] font-bold tabular-nums ${TONO_TEXTO[kpi.tone] ?? TONO_TEXTO.neutral}`}>
              {kpi.delta}
            </span>
          </div>
        ))}
      </div>

      <div className="grid gap-5 px-5 py-4 md:grid-cols-[1.25fr_1fr]">
        {/* Ventas contra la meta */}
        <div>
          <div className="flex items-baseline justify-between">
            <span className="text-[.62rem] font-bold uppercase tracking-[.08em] text-ink-muted">
              {data.seriesLabel}
            </span>
            <span className="text-[.62rem] font-bold text-ink-muted">meta</span>
          </div>
          <svg viewBox="0 0 300 84" className="mt-2 h-[84px] w-full" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="brd-line" x1="0" x2="1">
                <stop offset="0%" stopColor="#1E2D4F" />
                <stop offset="100%" stopColor="#C9784A" />
              </linearGradient>
            </defs>
            {/* Las barras son el real; la línea de puntos, la meta. */}
            {data.series.map((v, i) => (
              <rect
                key={i}
                x={x(i) - 6}
                y={y(v)}
                width="12"
                height={76 - y(v)}
                rx="3"
                fill="#E9E5DF"
              />
            ))}
            <path d={linea} fill="none" stroke="url(#brd-line)" strokeWidth="2.5" strokeLinecap="round" />
            <line
              x1="0"
              x2="300"
              y1={y(data.target)}
              y2={y(data.target)}
              stroke="#8B92A3"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        {/* Margen por línea */}
        <div>
          <span className="block text-[.62rem] font-bold uppercase tracking-[.08em] text-ink-muted">
            {data.linesLabel}
          </span>
          <ul className="mt-2 grid gap-[.45rem]">
            {data.lines.map(([nombre, pct, tono]) => (
              <li key={nombre} className="grid grid-cols-[1fr_2.2rem] items-center gap-2">
                <span className="text-[.78rem] font-semibold">{nombre}</span>
                <span className="text-right text-[.78rem] font-bold tabular-nums">{pct} %</span>
                <span
                  aria-hidden="true"
                  className="col-span-2 h-[5px] overflow-hidden rounded-full bg-stone-light"
                >
                  <span
                    className={`block h-full rounded-full ${TONO_BARRA[tono] ?? TONO_BARRA.neutral}`}
                    style={{ width: `${pct * 2}%` }}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline bg-surface-muted px-5 py-3">
        <span className="block text-[.6rem] font-bold uppercase tracking-[.08em] text-ink-muted">
          {data.alertsLabel}
        </span>
        <ul className="mt-[.4rem] grid gap-[.3rem]">
          {data.alerts.map((alerta) => (
            <li key={alerta} className="flex items-start gap-2 text-[.8rem] font-semibold text-ink-soft">
              <span aria-hidden="true" className="mt-[.35rem] h-2 w-2 flex-none rounded-full bg-g-copper" />
              {alerta}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
