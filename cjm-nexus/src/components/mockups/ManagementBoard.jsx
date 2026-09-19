/**
 * El tablero gerencial completo de la página de dirección financiera: la
 * misma ventana que el tablero de la portada
 * (`components/registro/TableroGerencial.jsx`), a lo ancho y sin alto fijo.
 *
 * Su estructura es la del brochure que la firma ya enseña a clientes: ventas
 * contra la meta, margen por línea, días de caja y alertas del mes. Tiene
 * sujeto —de qué empresa y de qué mes— para que se lea como una muestra de
 * un entregable y no como un adorno con números.
 *
 * Doce meses en barras: los que pasan la meta van en marino, el mes del
 * tablero en cobre. Es HTML, no SVG: doce columnas con su alto en porcentaje.
 */
import Icono from '../registro/Icono';
import { BarraVentana, Indicador, Riel } from '../registro/Ventana';

const RIEL = ['tablero', 'flujo', 'rentabilidad', 'costos', 'documento'];

export default function ManagementBoard({ data }) {
  const techo = Math.max(...data.series, data.target) * 1.06;
  const alto = (v) => `${((v / techo) * 100).toFixed(1)}%`;
  const ultimo = data.series.length - 1;
  // La meta se mide desde el suelo de las barras, que queda por encima de la
  // letra de los meses (`--pie-barras` en estilos/cuadros.css).
  const alturaMeta = `calc(var(--pie-barras) + (100% - var(--pie-barras)) * ${(data.target / techo).toFixed(4)})`;

  return (
    <div className="pieza libre">
      <BarraVentana titulo={data.title}>
        <span className="pz-rotulo">{data.subject}</span>
      </BarraVentana>

      <div className="pz-marco">
        <Riel iconos={RIEL} />
        <div className="pz-cuerpo">
          <div className="pz-kpis">
            {data.kpis.map((kpi) => (
              <Indicador
                key={kpi.label}
                nombre={kpi.label}
                valor={kpi.value}
                cambio={kpi.delta}
                aviso={kpi.tone === 'warn'}
                chispa={kpi.spark}
              />
            ))}
          </div>

          <div className="pz-dos">
            <div className="pz-carta pz-grafico">
              <div className="pz-carta-cab">
                <span>{data.seriesLabel}</span>
                <span className="pz-leyenda">
                  <span>
                    <em className="meta" />
                    {data.targetLabel}
                  </span>
                </span>
              </div>
              <div className="pz-barras" aria-hidden="true">
                <span className="meta" style={{ bottom: alturaMeta }} />
                {data.series.map((v, i) => (
                  <span
                    key={i}
                    className={`columna${i === ultimo ? ' es-actual' : v >= data.target ? ' es-sobre' : ''}`}
                  >
                    <span className="hueco">
                      <i style={{ height: alto(v) }} />
                    </span>
                    <small>{data.months[i]}</small>
                  </span>
                ))}
              </div>
            </div>

            <div className="pz-carta pz-margenes">
              <div className="pz-carta-cab">
                <span>{data.linesLabel}</span>
              </div>
              <ul>
                {data.lines.map(([nombre, pct, tono]) => (
                  <li key={nombre} className={tono === 'warn' ? 'es-aviso' : undefined}>
                    <span>{nombre}</span>
                    <span className="num">{pct}{data.porcentaje ?? ' %'}</span>
                    <span className="pista" aria-hidden="true">
                      <i style={{ width: `${Math.min(100, pct * 2)}%` }} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pz-avisos">
            <span className="pz-th">{data.alertsLabel}</span>
            <ul>
              {data.alerts.map(([texto, tono]) => (
                <li key={texto} className={`pz-alerta${tono === 'ok' ? ' es-ok' : ''}`}>
                  <Icono nombre={tono === 'ok' ? 'sube' : 'alerta'} size={14} />
                  <span>{texto}</span>
                  <Icono nombre="chevron-derecha" size={12} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
