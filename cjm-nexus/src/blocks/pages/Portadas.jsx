import Flecha from '../../components/registro/Flecha';

/**
 * Las tres portadas de ejemplo del portafolio, una debajo de otra.
 *
 * CADA UNA: su referencia (sector y barrio), el nombre, qué la hace distinta,
 * la etiqueta «Concepto · marca ficticia» y el enlace para abrirla entera.
 * Debajo, grande, cómo se ve: la primera pantalla de escritorio y la del
 * teléfono, a la misma altura. En el teléfono solo va la del teléfono, que es
 * la que va a ver quien la abra desde ahí.
 *
 * Las vistas previas son capturas (public/portafolio/previa/), no la web
 * viva incrustada: la página pesa poco y no carga tres juegos de fuentes ni
 * tres movimientos. La portada de verdad se abre en una pestaña nueva, a
 * pantalla completa, desde `public/portafolio/<id>/index.html`.
 */
export default function Portadas({ content }) {
  return (
    <section id="portadas" className="registro seccion">
      <div className="marco">
        {content.idioma ? <p className="nota-portadas">{content.idioma}</p> : null}
        {content.portadas.map((p) => {
          const href = `/portafolio/${p.id}/index.html`;
          return (
            <article key={p.id} className="portada-ej">
              <div className="cabeza-portada">
                <div>
                  <p className="ref-pag">
                    {p.sector} · {p.barrio}
                  </p>
                  <h2>{p.nombre}</h2>
                </div>
                <div>
                  <p className="texto">{p.texto}</p>
                  <div className="pie-portada">
                    <p className="etiqueta-concepto">{content.etiqueta}</p>
                    <a className="enlace adelante" href={href} target="_blank" rel="noopener">
                      <span>{content.abrir}</span>
                      <Flecha />
                    </a>
                  </div>
                </div>
              </div>
              {/* La imagen también abre la portada; para el teclado y el
                  lector de pantalla basta el enlace de arriba. */}
              <a className="previas" href={href} target="_blank" rel="noopener" tabIndex={-1} aria-hidden="true">
                <img
                  className="previa-escritorio"
                  src={`/portafolio/previa/${p.id}-escritorio.jpg`}
                  width="1536"
                  height="730"
                  alt=""
                  loading="lazy"
                />
                <img
                  className="previa-movil"
                  src={`/portafolio/previa/${p.id}-movil.jpg`}
                  width="780"
                  height="1688"
                  alt=""
                  loading="lazy"
                />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
