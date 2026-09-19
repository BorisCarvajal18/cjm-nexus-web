/**
 * Las frases que dice el cliente antes de contratar.
 *
 * VAN EN PRIMERA PERSONA Y ENTRECOMILLADAS, y ese detalle es todo el bloque:
 * «Sé cuánto vendo, pero no cuánto gano en cada línea» es la frase que el
 * gerente ya ha pensado, y al leerla se reconoce. Sobre papel hondo, con un
 * filete entre frase y frase.
 */
export default function Symptoms({ content, comillas = ['«', '»'] }) {
  return (
    <section className="registro seccion banda-honda">
      <div className="marco">
        <div className="cabeza-seccion">
          <p className="ref-pag">{content.eyebrow}</p>
          <h2>{content.title}</h2>
        </div>
        <div className="frases">
          {content.items.map((frase) => (
            <p key={frase}>
              {comillas[0]}
              {frase}
              {comillas[1]}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
