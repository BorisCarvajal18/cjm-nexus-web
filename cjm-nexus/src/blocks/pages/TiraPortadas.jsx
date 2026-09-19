import Flecha from '../../components/registro/Flecha';

/**
 * Las tres portadas de ejemplo, en una tira, dentro de la oferta de la página
 * web: el título dice «no parece una plantilla» y aquí se ve. Las mismas
 * vistas previas y el mismo marco que en /portafolio (`.previas img`); cada
 * una abre su portada entera, y debajo van la etiqueta «Concepto · marca
 * ficticia» y el enlace al portafolio.
 *
 * En el teléfono, una sola: la primera, como se ve en un teléfono.
 * Los textos son los de `portafolio.<idioma>.js`; el del enlace, el de la
 * oferta (`digital.web.portafolio`).
 */
export default function TiraPortadas({ portafolio, enlace, href }) {
  return (
    <div className="tira-portadas">
      <ul>
        {portafolio.portadas.map((p, i) => (
          <li key={p.id}>
            <a href={`/portafolio/${p.id}/index.html`} target="_blank" rel="noopener">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="previa-escritorio"
                src={`/portafolio/previa/${p.id}-escritorio.jpg`}
                width="1536"
                height="730"
                alt=""
                loading="lazy"
              />
              {i === 0 ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="previa-movil"
                  src={`/portafolio/previa/${p.id}-movil.jpg`}
                  width="780"
                  height="1688"
                  alt=""
                  loading="lazy"
                />
              ) : null}
              <span className="ref-pag">
                {p.sector} · {p.barrio}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="pie-portada">
        <p className="etiqueta-concepto">{portafolio.etiqueta}</p>
        <a className="enlace adelante" href={href}>
          <span>{enlace}</span>
          <Flecha />
        </a>
      </div>
    </div>
  );
}
