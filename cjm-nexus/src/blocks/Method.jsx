/**
 * Las reglas de trabajo, cada una con un ejemplo de cada línea.
 *
 * Es la sección que gana al comprador escéptico, y funciona por una sola
 * razón: cada regla lleva un ejemplo en lugar de un adjetivo. «Somos
 * rigurosos» no dice nada; «trece actas de decisión» sí.
 *
 * EL 50/50 (regla 1 de PRODUCT.md): cada regla trae dos ejemplos, uno de
 * dirección financiera y otro de soluciones digitales, en dos columnas del
 * mismo ancho, con la misma letra y el mismo filete de cobre. Cada uno lleva
 * su referencia (`etiquetas`); ninguno va encima del otro. Bajo 760 px se
 * apilan en el orden de siempre: Servicio 01 y Servicio 02.
 *
 * En filas con filetes: la regla a la izquierda, sus dos ejemplos a la
 * derecha. Quieta; el texto está entero en el HTML.
 */
const LINEAS = ['finanzas', 'software'];

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
              <div className="enunciado">
                <h3>{regla.title}</h3>
                <p>{regla.text}</p>
              </div>
              <ul className="ejemplos">
                {LINEAS.map((linea) => (
                  <li key={linea} className="ejemplo">
                    <p className="ref-pag">{content.etiquetas[linea]}</p>
                    <p>{regla.ejemplos[linea]}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
