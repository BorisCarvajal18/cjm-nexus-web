/**
 * Rejilla de puntos cortos: entregables, tipos de proyecto, garantías.
 *
 * UN SOLO COMPONENTE PARA LOS TRES CASOS: son la misma figura —cosas
 * comparables, cada una con nombre y dos líneas—. Filetes en lugar de
 * tarjetas (DESIGN.md: nada de rejillas de tarjetas iguales de icono, título
 * y texto).
 *
 * `numbered` pone una referencia pequeña delante, solo cuando el orden
 * significa algo. Nunca un número grande como adorno.
 */
export default function FeatureGrid({ content, columns = 3, numbered = false, id }) {
  return (
    <section id={id} className="registro seccion">
      <div className="marco">
        <div className="cabeza-seccion">
          <p className="ref-pag">{content.eyebrow}</p>
          <h2>{content.title}</h2>
          {content.intro ? <p className="intro">{content.intro}</p> : null}
        </div>
        <ul className="puntos-pag" style={{ '--n': columns }}>
          {content.items.map((item, i) => (
            <li key={item.title}>
              {numbered ? <span className="ref-pag num">{String(i + 1).padStart(2, '0')}</span> : null}
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
