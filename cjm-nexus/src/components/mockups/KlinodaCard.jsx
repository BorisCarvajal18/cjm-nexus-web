/**
 * La vista de aptitud del portal de empresa de KLINODA, como hoja de papel
 * blanco (The Paper-Sheet Rule).
 *
 * La empresa ve el cargo, el tipo de evaluación y si la persona es apta, con
 * las etiquetas reales del producto («APTO», «APTO EN OBSERVACIÓN»,
 * «PERIÓDICO»…). Nada más: la regla de privacidad se entiende mirando.
 *
 * Los cargos son genéricos y no hay nombres, ni reales ni inventados. Los
 * colores de KLINODA solo viven aquí dentro.
 */
export default function KlinodaCard({ data }) {
  return (
    <div className="pieza libre k-vista">
      <header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/marca/klinoda.png" width="630" height="176" alt="KLINODA" />
        <span className="rotulo-pieza">{data.subject}</span>
      </header>
      <div className="th">
        {data.columns.map((col) => (
          <span key={col}>{col}</span>
        ))}
      </div>
      {data.rows.map(([cargo, tipo, tono, estado]) => (
        <div key={cargo} className="tr">
          <span>{cargo}</span>
          <span>{tipo}</span>
          <span className={`k-apto${tono === 'warn' ? ' obs' : ''}`}>{estado}</span>
        </div>
      ))}
      <footer>{data.foot}</footer>
    </div>
  );
}
