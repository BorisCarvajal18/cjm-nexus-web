'use client';

import ManagementBoard from '../../components/mockups/ManagementBoard';
import { tableroSeDibuja } from '../../lib/animations';
import { alAsomar, MUEVE, useRegistro } from '../../lib/registro';

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
 *
 * EL MOMENTO DE LA PÁGINA (`tableroSeDibuja` en lib/animations.js): el
 * tablero se dibuja una vez, cuando su borde superior asoma al 75 % de la
 * pantalla; en el teléfono, donde es más alto que la pantalla, al 85 %.
 */
export default function BoardShowcase({ content, muestra }) {
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
        <div className="caja-pieza entregable">
          <ManagementBoard data={content.board} />
          {muestra ? <p className="muestra">{muestra}</p> : null}
        </div>
      </div>
    </section>
  );
}
