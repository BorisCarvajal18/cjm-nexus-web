'use client';

import ManagementBoard from '../../components/mockups/ManagementBoard';
import { tableroSeDibuja } from '../../lib/animations';
import { alAsomar, MUEVE, useRegistro } from '../../lib/registro';

/**
 * El tablero gerencial y, a su lado, lo que hay dentro.
 *
 * A la izquierda la hoja, a tamaño real (unos 700 px; estirada a todo el
 * marco se leía como una maqueta) y fija mientras se baja (`position:
 * sticky`, como el título de <Steps />); a la derecha, los seis entregables
 * en una columna: el texto explica lo que el ojo ya tiene delante. Bajo
 * 1000 px, la hoja y después la lista. Sobre papel hondo, con su hoja blanca y su sombra de
 * hoja: se lee como papel puesto encima (DESIGN.md, Elevation).
 *
 * Los números de dentro ilustran cómo se ve el entregable. No son de ningún
 * cliente y no se presentan como resultados: por eso llevan debajo
 * «Interfaz de muestra · datos ilustrativos».
 *
 * EL MOMENTO DE LA PÁGINA (`tableroSeDibuja` en lib/animations.js): el
 * tablero se dibuja una vez, cuando su borde superior asoma al 75 % de la
 * pantalla; en el teléfono, donde es más alto que la pantalla, al 85 %.
 */
export default function BoardShowcase({ content, muestra, entregables }) {
  const raiz = useRegistro((mm, s) => {
    const pieza = s.querySelector('.pieza');
    mm.add(`${MUEVE} and (min-width: 760px)`, () => alAsomar(pieza, 'top 75%', tableroSeDibuja(pieza)));
    mm.add(`${MUEVE} and (max-width: 759px)`, () => alAsomar(pieza, 'top 85%', tableroSeDibuja(pieza)));
  });
  return (
    <section ref={raiz} id="entregable" className="registro seccion banda-honda">
      <div className="marco">
        <div className="cabeza-seccion">
          <p className="ref-pag">{content.badge}</p>
          <h2>{content.title}</h2>
          <p className="intro">{content.text}</p>
        </div>
        <div className="entregable-dos">
          <div className="caja-pieza entregable">
            <ManagementBoard data={content.board} />
            {muestra ? <p className="muestra">{muestra}</p> : null}
          </div>
          {entregables ? (
            <div className="entregable-lista">
              <p className="ref-pag">{entregables.eyebrow}</p>
              <h3 className="titulo-lista">{entregables.title}</h3>
              <ul className="puntos-pag" style={{ '--n': 1 }}>
                {entregables.items.map((item) => (
                  <li key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
