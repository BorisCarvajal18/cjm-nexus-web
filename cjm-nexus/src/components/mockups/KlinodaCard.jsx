/**
 * La vista de aptitud del portal de empresa de KLINODA: la misma ventana que
 * su tablero de la portada (`.k-tablero` en estilos/klinoda.css), con su
 * marca y sus colores, que solo viven aquí dentro.
 *
 * La empresa ve el cargo, el tipo de evaluación y si la persona es apta, con
 * las etiquetas reales del producto («APTO», «APTO EN OBSERVACIÓN»,
 * «PERIÓDICO»…). Nada más: la regla de privacidad se entiende mirando.
 *
 * Los cargos son genéricos y no hay nombres, ni reales ni inventados.
 */
import Icono from '../registro/Icono';

export default function KlinodaCard({ data }) {
  return (
    <div className="k-tablero k-vista">
      <header className="k-barra">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="k-logo" src="/marca/klinoda.png" width="800" height="215" alt="KLINODA" />
        <span className="k-seccion">{data.title}</span>
        <span className="k-chip">{data.subject}</span>
      </header>
      <div className="k-cuerpo">
        <div className="k-carta k-tabla">
          <div className="k-th">
            {data.columns.map((col) => (
              <span key={col}>{col}</span>
            ))}
          </div>
          {data.rows.map(([cargo, tipo, tono, estado]) => (
            <div key={cargo} className="k-tr">
              <span className="k-cargo">
                <span className="k-icono" aria-hidden="true">
                  <Icono nombre="maletin" />
                </span>
                {cargo}
              </span>
              <span className="k-tipo">{tipo}</span>
              <span>
                <span className={`k-apto${tono === 'warn' ? ' obs' : ''}`}>{estado}</span>
              </span>
            </div>
          ))}
        </div>
        <p className="k-nota">
          <span className="k-icono" aria-hidden="true">
            <Icono nombre="candado" />
          </span>
          {data.foot}
        </p>
      </div>
    </div>
  );
}
