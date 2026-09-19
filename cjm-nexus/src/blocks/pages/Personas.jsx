import Flecha from '../../components/registro/Flecha';

/**
 * Las tres personas de «Nosotros», cada una en una fila de registro separada
 * por un filete, como las reglas del método: a la izquierda quién es (cargo,
 * nombre, dónde está y su LinkedIn), en el centro lo que lidera y a la
 * derecha sus cifras. Solo Richard lleva cifras, porque son su trayectoria
 * (regla 2 de PRODUCT.md).
 *
 * POR QUÉ FILAS Y NO TRES COLUMNAS: sin retratos, tres fichas iguales se leían
 * como una plantilla de equipo a la que le faltan las fotos, y las de Boris y
 * Mirella dejaban media columna vacía. En una fila, una celda sin cifras se
 * lee como «sin anotación», no como un hueco.
 *
 * LO QUE NO HAY NO SE PINTA. Sin retrato, la fila empieza por el cargo: ni
 * recuadro gris, ni círculo con iniciales. Sin lugar ni LinkedIn, no hay pie.
 * Cuando llegue un dato basta con rellenarlo en `nosotros.es.js`: el retrato
 * aparece sobre el cargo, con el mismo tamaño en las tres filas.
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
              <div className="quien">
                {p.retrato ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="retrato" src={p.retrato.src} alt={p.retrato.alt} width="800" height="1000" loading="lazy" />
                ) : null}
                <p className="ref-pag">{p.cargo}</p>
                <h3>{p.nombre}</h3>
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
              </div>
              <div className="que">
                <p className="lidera">{p.lidera}</p>
                {p.trayectoria ? <p className="trayectoria">{p.trayectoria}</p> : null}
              </div>
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
