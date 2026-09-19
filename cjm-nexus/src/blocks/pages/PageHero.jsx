import Flecha from '../../components/registro/Flecha';
import Resaltado from '../../components/registro/Resaltado';
import { CALENDLY_URL } from '../../lib/site';

/**
 * Cabecera de las páginas interiores, en el sistema del registro.
 *
 * MÁS TRANQUILA QUE LA PORTADA, a propósito: a una página interior se llega
 * ya interesado y buscando una respuesta concreta. Tranquila no es vacía:
 * las páginas de servicio enseñan a la derecha su pieza (`figura`): el
 * tablero gerencial en dirección financiera, una portada de ejemplo en
 * soluciones digitales. Quien entra directo desde un buscador ve el
 * entregable en la primera pantalla. La pieza va quieta; bajo 1100 px pasa
 * debajo de los botones. Sin pieza, la cabecera es más baja para que asome
 * lo que viene después. Papel, la referencia en
 * versalitas, el titular en 500 con sus palabras de énfasis en 800, la
 * entrada, «Agendar» (el único relleno cobre) y el botón de contorno.
 *
 * Está quieta y el texto está en el HTML: se lee igual sin JavaScript.
 */
export default function PageHero({ content, figura }) {
  return (
    <section id="top" className={`registro pag-cabeza ${figura ? 'con-figura' : 'sin-figura'}`}>
      <div className="marco">
        <div className="texto-cabeza">
          <p className="ref-pag">{content.eyebrow}</p>
          <h1>
            <Resaltado title={content.title} highlight={content.highlight} />
          </h1>
          <p className="entrada">{content.lead}</p>
          <div className="acciones">
            <a className="boton" href={CALENDLY_URL}>
              <span>{content.primary}</span>
              <Flecha />
            </a>
            {content.secondary ? (
              <a className="boton-contorno" href={content.secondaryHref ?? '#contenido'}>
                <span>{content.secondary}</span>
                <Flecha abajo />
              </a>
            ) : null}
          </div>
          {content.note ? <p className="nota">{content.note}</p> : null}
        </div>
        {figura ? <div className="figura-cabeza">{figura}</div> : null}
      </div>
    </section>
  );
}
