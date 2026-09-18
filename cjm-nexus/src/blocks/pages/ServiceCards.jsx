import Flecha from '../../components/registro/Flecha';
import PortalDocumentos from '../../components/registro/PortalDocumentos';
import TableroGerencial from '../../components/registro/TableroGerencial';

/**
 * Los dos servicios, lado a lado y al 50/50 (regla 1 de PRODUCT.md): mismo
 * ancho, misma letra, misma pieza. El orden lo marcan «Servicio 01» y
 * «Servicio 02», y nada más.
 *
 * NO ES UN CARRUSEL: quien llega aquí quiere comparar, y comparar exige ver
 * los dos a la vez.
 *
 * LAS INTERFACES DE MUESTRA SON LAS DE LA PORTADA (`muestras`, los datos de
 * `home.es.js` → `hacemos`): quien llega desde allí reconoce el servicio
 * antes de leer el titular. Debajo, siempre, «Interfaz de muestra · datos
 * ilustrativos».
 */
const PIEZAS = [TableroGerencial, PortalDocumentos];

export default function ServiceCards({ content, muestras, lang }) {
  const datos = [muestras.tablero, muestras.portal];
  return (
    <section id="contenido" className="registro seccion">
      <div className="marco dos-lineas">
        {content.cards.map((card, i) => {
          const Pieza = PIEZAS[i];
          return (
            <article key={card.index}>
              <p className="ref-pag">{card.eyebrow}</p>
              <h2>{card.title}</h2>
              <p className="lead">{card.text}</p>
              <ul className="lista-pag fuerte">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="boton-contorno" href={`/${lang}${card.href}`}>
                <span>{card.cta}</span>
                <Flecha />
              </a>
              <div className="caja-pieza">
                <Pieza datos={datos[i]} />
                <p className="muestra">{muestras.muestra}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
