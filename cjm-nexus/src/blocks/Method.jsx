/**
 * Las cuatro reglas de trabajo, cada una con su ejemplo comprobable.
 *
 * Es la sección que gana al comprador escéptico, y funciona por una sola
 * razón: cada regla lleva un ejemplo en lugar de un adjetivo. «Somos
 * rigurosos» no dice nada; «trece actas de decisión» sí. En filas con
 * filetes; el ejemplo, tras un filete de cobre.
 */
export default function Method({ content }) {
  return (
    <section id="metodo" className="registro seccion">
      <div className="marco">
        <div className="cabeza-seccion">
          <p className="ref-pag">{content.eyebrow}</p>
          <h2>{content.title}</h2>
          {content.intro ? <p className="intro">{content.intro}</p> : null}
        </div>
        <ol className="reglas-pag">
          {content.items.map((regla) => (
            <li key={regla.title}>
              <h3>{regla.title}</h3>
              <div>
                <p>{regla.text}</p>
                {regla.evidence ? <p className="ejemplo">{regla.evidence}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
