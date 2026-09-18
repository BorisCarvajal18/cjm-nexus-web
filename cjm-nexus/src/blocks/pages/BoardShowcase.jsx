import ManagementBoard from '../../components/mockups/ManagementBoard';

/**
 * El tablero gerencial, a tamaño real y quieto.
 *
 * En la página del servicio no compite con nada, así que puede estar
 * simplemente grande. Sobre papel hondo, con su hoja blanca y su sombra de
 * hoja: se lee como papel puesto encima (DESIGN.md, Elevation).
 *
 * Los números de dentro ilustran cómo se ve el entregable. No son de ningún
 * cliente y no se presentan como resultados: por eso llevan debajo
 * «Interfaz de muestra · datos ilustrativos».
 */
export default function BoardShowcase({ content, muestra }) {
  return (
    <section id="entregable" className="registro seccion banda-honda">
      <div className="marco">
        <div className="cabeza-seccion">
          <p className="ref-pag">{content.badge}</p>
          <h2>{content.title}</h2>
          <p className="intro">{content.text}</p>
        </div>
        <div className="caja-pieza entregable">
          <ManagementBoard data={content.board} />
          {muestra ? <p className="muestra">{muestra}</p> : null}
        </div>
      </div>
    </section>
  );
}
