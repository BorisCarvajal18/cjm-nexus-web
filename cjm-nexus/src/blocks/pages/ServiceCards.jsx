'use client';

import Flecha from '../../components/registro/Flecha';
import PortalDocumentos from '../../components/registro/PortalDocumentos';
import TableroGerencial from '../../components/registro/TableroGerencial';
import { dosHojas } from '../../lib/animations';
import { alAsomar, MUEVE, useRegistro } from '../../lib/registro';

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
 *
 * EL MOMENTO DE LA PÁGINA (`dosHojas` en lib/animations.js): las dos hojas
 * llegan a la vez, con el mismo gesto, cuando su borde superior asoma al 80 %
 * de la pantalla. En escritorio están a la misma altura y comparten
 * disparador; en una columna (bajo 1100 px) cada una tiene el suyo.
 */
const PIEZAS = [TableroGerencial, PortalDocumentos];

export default function ServiceCards({ content, muestras, lang }) {
  const datos = [muestras.tablero, muestras.portal];
  const raiz = useRegistro((mm, s) => {
    const articulos = Array.from(s.querySelectorAll('.dos-lineas article'));
    mm.add(`${MUEVE} and (min-width: 1101px)`, () => {
      alAsomar(articulos[0].querySelector('.pieza'), 'top 80%', dosHojas(articulos));
    });
    mm.add(`${MUEVE} and (max-width: 1100px)`, () => {
      articulos.forEach((a) => alAsomar(a.querySelector('.pieza'), 'top 80%', dosHojas([a])));
    });
  });
  return (
    <section ref={raiz} id="contenido" className="registro seccion">
      <div className="marco dos-lineas">
        {content.cards.map((card, i) => {
          const Pieza = PIEZAS[i];
          return (
            <article key={card.href}>
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
