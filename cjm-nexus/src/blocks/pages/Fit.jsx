/**
 * Para quién funciona y para quién no.
 *
 * DECIR PARA QUIÉN NO ES VENDE MÁS QUE DECIR PARA QUIÉN SÍ, y además filtra
 * las reuniones que no iban a terminar en nada.
 *
 * El color no distingue las dos columnas: cada una lleva su título escrito.
 * La primera abre con el filete de cobre de 2 px (el estado activo de
 * DESIGN.md); la segunda, con el filete del texto.
 */
export default function Fit({ content }) {
  return (
    <section className="registro seccion">
      <div className="marco">
        <p className="ref-pag">{content.eyebrow}</p>
        <h2 className="titulo-pag">{content.title}</h2>
        <div className="encaje">
          {[content.yes, content.no].map((lado) => (
            <div key={lado.title}>
              <h3>{lado.title}</h3>
              <ul className="lista-pag">
                {lado.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
