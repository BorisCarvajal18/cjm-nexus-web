/**
 * <TableroGerencial /> — la interfaz de muestra de la dirección financiera
 * (DESIGN.md, Interfaces de muestra). Papel blanco en los dos temas.
 *
 * Cuatro indicadores con su chispa, ventas contra meta, rentabilidad por
 * línea y un aviso. Los datos son ilustrativos (`home.es.js` → `hacemos`).
 * El gráfico es el tercero de los tres degradados permitidos: el trazo sale de
 * cobre apagado y llega encendido donde cruza la meta.
 */
const PUNTOS = '38,96 73.2,89 108.4,92 143.6,78 178.8,72 214,62 249.2,55 284.4,43 319.6,34';
const AREA = 'M38 96 L73.2 89 L108.4 92 L143.6 78 L178.8 72 L214 62 L249.2 55 L284.4 43 L319.6 34 L319.6 104.5 L38 104.5 Z';
const X_EJE = [38, 108, 178, 249, 320];

export default function TableroGerencial({ datos }) {
  return (
    <div className="pieza">
      <header>
        <h4>{datos.titulo}</h4>
        <span className="chip-per">
          {datos.periodo}
          <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M2 3.8 5 6.8 8 3.8" />
          </svg>
        </span>
      </header>
      <div className="cuerpo">
        <div className="kpis">
          {datos.kpis.map((k) => (
            <div key={k.nombre} className={`kpi${k.aviso ? ' aviso' : ''}`}>
              <div className="fila">
                <small>{k.nombre}</small>
                <i className="num">{k.cambio}</i>
              </div>
              <b className="num">{k.valor}</b>
              <svg className="chispa" viewBox="0 0 56 15" preserveAspectRatio="none" aria-hidden="true">
                <polyline fill="none" stroke="#B9B1A7" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round" points={k.chispa} />
              </svg>
            </div>
          ))}
        </div>
        <div className="grafico">
          <div className="cab">
            <span>{datos.grafico}</span>
            <span className="leyenda">
              <span>
                <em />
                {datos.real}
              </span>
              <span>
                <em className="meta" />
                {datos.meta}
              </span>
            </span>
          </div>
          <svg viewBox="0 0 320 128" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="trazo-tablero" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0" stopColor="#A85A2E" />
                <stop offset=".62" stopColor="#C9784A" />
                <stop offset="1" stopColor="#DD9268" />
              </linearGradient>
            </defs>
            <g stroke="#EFEBE4" strokeWidth="1">
              {[8.5, 40.5, 72.5, 104.5].map((y) => (
                <line key={y} x1="38" y1={y} x2="320" y2={y} />
              ))}
            </g>
            <g fontFamily="Inter, sans-serif" fontSize="8" fontWeight="600" fill="#5A6375">
              {datos.ejeY.map((t, i) => (
                <text key={t} x="0" y={11.5 + i * 32}>
                  {t}
                </text>
              ))}
            </g>
            <path className="area" d={AREA} fill="#C9784A" fillOpacity=".06" />
            <line className="meta" x1="38" y1="63" x2="320" y2="50" stroke="#B9B1A7" strokeWidth="1.4" strokeDasharray="4 4" />
            <polyline className="traza" fill="none" stroke="url(#trazo-tablero)" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" points={PUNTOS} />
            <circle className="punta" cx="319.6" cy="34" r="3.8" fill="#DD9268" />
            <g fontFamily="Inter, sans-serif" fontSize="7.5" fontWeight="600" fill="#5A6375">
              {datos.ejeX.map((t, i) => (
                <text key={t} x={X_EJE[i]} y="122" textAnchor={i === datos.ejeX.length - 1 ? 'end' : undefined}>
                  {t}
                </text>
              ))}
            </g>
          </svg>
        </div>
        <div className="tabla">
          <div className="th">
            <span>{datos.tabla[0]}</span>
            <span className="der">{datos.tabla[1]}</span>
            <span className="der">{datos.tabla[2]}</span>
          </div>
          {datos.lineas.map((l) => (
            <div key={l.nombre} className="tr">
              <span>{l.nombre}</span>
              <span className="der num">{l.ingresos}</span>
              <span className="barra">
                <span className="pista">
                  <i className="relleno" style={{ '--v': l.barra }} />
                </span>
                <span className="num">{l.margen}</span>
              </span>
            </div>
          ))}
        </div>
        <p className="alerta">{datos.alerta}</p>
      </div>
    </div>
  );
}
