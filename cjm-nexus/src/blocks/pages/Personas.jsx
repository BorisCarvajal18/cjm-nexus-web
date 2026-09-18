import Flecha from '../../components/registro/Flecha';

/**
 * Las tres personas de «Nosotros», en fichas iguales separadas por filetes
 * verticales, como las credenciales de la portada: un registro, no una
 * rejilla de tarjetas.
 *
 * CADA FICHA: cargo en versalitas, nombre, lo que lidera y, abajo, dónde está
 * y su LinkedIn. Solo Richard lleva cifras, porque son su trayectoria (regla 2
 * de PRODUCT.md), y van a su nombre dentro de su ficha.
 *
 * LO QUE NO HAY NO SE PINTA. Sin retrato, la ficha empieza por el cargo: ni
 * recuadro gris, ni círculo con iniciales. Sin lugar ni LinkedIn, no hay pie.
 * Cuando llegue un dato basta con rellenarlo en `nosotros.es.js`: el retrato
 * aparece encima, con el mismo tamaño en las tres fichas.
 *
 * El pie de cada ficha va abajo del todo, así que los lugares quedan en la
 * misma línea aunque la ficha de Richard sea más alta.
 */
export default function Personas({ content }) {
  return (
    <section id="personas" className="registro seccion">
      <div className="marco">
        <div className="cabeza-seccion">
          <p className="ref-pag">{content.etiqueta}</p>
          <h2>{content.titulo}</h2>
        </div>
        <ul className="fichas">
          {content.items.map((p) => (
            <li key={p.id} className="ficha">
              {p.retrato ? (
                <img className="retrato" src={p.retrato.src} alt={p.retrato.alt} width="800" height="1000" loading="lazy" />
              ) : null}
              <p className="ref-pag">{p.cargo}</p>
              <h3>{p.nombre}</h3>
              <p className="lidera">{p.lidera}</p>
              {p.trayectoria ? <p className="trayectoria">{p.trayectoria}</p> : null}
              {p.cifras.length ? (
                <ul className="cifras-ficha">
                  {p.cifras.map((c) => (
                    <li key={c.valor}>
                      <b className="num">
                        {c.valor.replace(/\+$/, '')}
                        {c.valor.endsWith('+') ? <span className="mas">+</span> : null}
                      </b>
                      <span>{c.que}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {p.base || p.linkedinHref ? (
                <div className="pie-ficha">
                  {p.base ? <p className="base">{p.base}</p> : null}
                  {p.linkedinHref ? (
                    <a className="enlace adelante" href={p.linkedinHref} target="_blank" rel="noopener noreferrer">
                      <span>{content.linkedin}</span>
                      <Flecha />
                    </a>
                  ) : null}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
