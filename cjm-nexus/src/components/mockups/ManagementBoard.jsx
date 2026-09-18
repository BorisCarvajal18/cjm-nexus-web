/**
 * El tablero gerencial completo de la página de dirección financiera, como
 * hoja de papel blanco (The Paper-Sheet Rule), con el mismo material que el
 * tablero de la portada (`components/registro/TableroGerencial.jsx`).
 *
 * Su estructura es la del brochure que la firma ya enseña a clientes: ventas
 * contra la meta, margen por línea, días de caja y alertas del mes. Tiene
 * sujeto —de qué empresa y de qué mes— para que se lea como una muestra de
 * un entregable y no como un adorno con números.
 *
 * Las barras y la línea son SVG calculado, sin librería de gráficos. El trazo
 * es el tercero de los tres degradados permitidos: de cobre apagado a
 * encendido.
 */
export default function ManagementBoard({ data }) {
  const max = Math.max(...data.series, data.target);
  const MARGEN = 7;
  const paso = (300 - MARGEN * 2) / (data.series.length - 1);
  const x = (i) => MARGEN + i * paso;
  const y = (v) => 76 - (v / max) * 66;
  const linea = data.series.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');

  return (
    <div className="pieza libre">
      <header>
        <h4>{data.title}</h4>
        <span className="rotulo-pieza">{data.subject}</span>
      </header>
      <div className="cuerpo">
        <div className="kpis">
          {data.kpis.map((kpi) => (
            <div key={kpi.label} className={`kpi${kpi.tone === 'warn' ? ' aviso' : ''}`}>
              <div className="fila">
                <small>{kpi.label}</small>
                <i className="num">{kpi.delta}</i>
              </div>
              <b className="num">{kpi.value}</b>
            </div>
          ))}
        </div>

        <div className="dos-graficos">
          <div className="grafico">
            <div className="cab">
              <span>{data.seriesLabel}</span>
              <span className="leyenda">
                <span>
                  <em className="meta" />
                  meta
                </span>
              </span>
            </div>
            <svg viewBox="0 0 300 84" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="trazo-completo" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0" stopColor="#A85A2E" />
                  <stop offset=".62" stopColor="#C9784A" />
                  <stop offset="1" stopColor="#DD9268" />
                </linearGradient>
              </defs>
              {data.series.map((v, i) => (
                <rect key={i} x={x(i) - 6} y={y(v)} width="12" height={76 - y(v)} rx="1" fill="#EFEBE4" />
              ))}
              <line x1="0" x2="300" y1={y(data.target)} y2={y(data.target)} stroke="#B9B1A7" strokeWidth="1.2" strokeDasharray="4 4" />
              <path d={linea} fill="none" stroke="url(#trazo-completo)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="grafico">
            <div className="cab">
              <span>{data.linesLabel}</span>
            </div>
            <ul className="lineas-margen">
              {data.lines.map(([nombre, pct, tono]) => (
                <li key={nombre} className={tono === 'warn' ? 'aviso' : undefined}>
                  <span>{nombre}</span>
                  <span className="num">{pct} %</span>
                  <span className="pista" aria-hidden="true">
                    <i style={{ width: `${Math.min(100, pct * 2)}%` }} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="avisos-pieza">
          <span className="rotulo-pieza">{data.alertsLabel}</span>
          <ul>
            {data.alerts.map((alerta) => (
              <li key={alerta}>{alerta}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
