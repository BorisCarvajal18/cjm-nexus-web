/**
 * Las preguntas frecuentes de cada servicio, antes del cierre: son las
 * objeciones que quedan en pie cuando alguien ya se ha convencido a medias.
 *
 * <details> nativos: las respuestas están en el HTML aunque estén cerradas,
 * así que Ctrl+F las encuentra y el buscador las indexa, y funcionan sin
 * JavaScript y con teclado.
 */
export default function Faq({ content }) {
  return (
    <section id="preguntas" className="registro seccion">
      <div className="marco dos-col">
        <div className="fijo">
          <p className="ref-pag">{content.eyebrow}</p>
          <h2>{content.title}</h2>
        </div>
        <div className="preguntas">
          {content.items.map((item) => (
            <details key={item.q}>
              <summary>
                {item.q}
                <span className="mas" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
