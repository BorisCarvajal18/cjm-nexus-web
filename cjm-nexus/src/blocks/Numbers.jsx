/**
 * Cifras que se pueden sostener si alguien pregunta, en trazo fino y con
 * numeración tabular, como las credenciales de la portada.
 *
 * Cada una lleva su condición escrita al lado («con datos ficticios», «hasta
 * hoy»): es la diferencia entre un dato creíble y uno que se cae en la
 * primera conversación. Están quietas: una cifra se lee mejor parada.
 */
export default function Numbers({ content }) {
  return (
    <section className="registro seccion">
      <div className="marco">
        <p className="ref-pag">{content.eyebrow}</p>
        <h2 className="titulo-pag">{content.title}</h2>
        <ul className="cifras-pag" style={{ '--n': content.items.length }}>
          {content.items.map((item) => (
            <li key={item.label}>
              <b className="num">{item.display}</b>
              <p className="que">{item.label}</p>
              {item.note ? <p className="quien">{item.note}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
