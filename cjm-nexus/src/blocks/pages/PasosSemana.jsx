'use client';

/**
 * Los tres pasos de la página web con el momento de la página, «La semana,
 * en una línea» (`semanaEnLinea` en lib/animations.js): un filete de cobre
 * recorre el borde de arriba de los pasos, ligado al scroll y reversible, y
 * enciende el punto de cada «cuándo» al llegar a él.
 *
 * Quieto (con «reducir movimiento» o sin JavaScript), el filete de cobre
 * está entero y los tres puntos, encendidos: es el estado final.
 *
 * En una fila (por encima de 1000 px) la línea es una sola; por debajo, con los
 * pasos en dos columnas o apilados, cada paso traza la suya.
 */
import { semanaEnLinea } from '../../lib/animations';
import { MUEVE, useRegistro } from '../../lib/registro';
import { StepItem } from './Steps';

export default function PasosSemana({ steps }) {
  const raiz = useRegistro((mm, ol) => {
    mm.add(`${MUEVE} and (min-width: 1001px)`, () => semanaEnLinea(ol, { enFila: true }));
    mm.add(`${MUEVE} and (max-width: 1000px)`, () => semanaEnLinea(ol, { enFila: false }));
  });
  return (
    <ol ref={raiz} className="pasos en-columnas semana" style={{ '--n': steps.length }}>
      {steps.map((paso) => (
        <StepItem key={paso.step} paso={paso} />
      ))}
    </ol>
  );
}
