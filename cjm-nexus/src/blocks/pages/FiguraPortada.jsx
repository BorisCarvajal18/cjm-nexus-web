import Flecha from '../../components/registro/Flecha';

/**
 * La pieza de la cabecera de soluciones digitales: una portada de ejemplo del
 * portafolio (la primera), con su etiqueta «Concepto · marca ficticia» y el
 * enlace al portafolio. La imagen abre la portada entera. Textos de
 * `portafolio.<idioma>.js` y de `digital.web.portafolio`.
 */
export default function FiguraPortada({ portafolio, enlace, lang }) {
  const p = portafolio.portadas[0];
  return (
    <figure style={{ margin: 0 }}>
      <a href={`/portafolio/${p.id}/index.html`} target="_blank" rel="noopener" tabIndex={-1} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="previa" src={`/portafolio/previa/${p.id}-escritorio.jpg`} width="1536" height="730" alt="" />
      </a>
      <figcaption className="pie-portada">
        <span className="etiqueta-concepto">{portafolio.etiqueta}</span>
        <a className="enlace adelante" href={`/${lang}${enlace.href}`}>
          <span>{enlace.enlace}</span>
          <Flecha />
        </a>
      </figcaption>
    </figure>
  );
}
