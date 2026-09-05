'use client';

/**
 * El momento visual grande de la portada: el tablero gerencial creciendo
 * hasta ocupar la pantalla.
 *
 * VA SOBRE EL ENTREGABLE FINANCIERO Y NO SOBRE KLINODA. Es el gesto más caro
 * en atención de todo el sitio y solo se usa una vez aquí, así que tiene que
 * gastarse en lo que la mayoría de visitantes viene a comprar.
 *
 * EL TABLERO TIENE SUJETO. Un tablero sin nombre no se entiende: la primera
 * pregunta de cualquiera es «¿tablero de qué?». Por eso la cabecera dice de
 * qué empresa y de qué mes, y el titular lo enmarca como lo que se recibe.
 */
import ManagementBoard from '../components/mockups/ManagementBoard';
import ExpandingFrame from '../components/ui/ExpandingFrame';
import { Badge } from '../components/ui/Pill';

export default function DeliverableFrame({ content }) {
  const { badge, title, text, board } = content;

  return (
    <ExpandingFrame
      backdrop={
        <div className="h-full w-full bg-navy-deep bg-[radial-gradient(55%_55%_at_20%_25%,#C9784A,transparent_65%),radial-gradient(55%_55%_at_85%_75%,#3B4E7A,transparent_65%),radial-gradient(45%_45%_at_60%_10%,#E8B48A,transparent_60%)]" />
      }
      caption={
        <>
          <Badge>{badge}</Badge>
          <h2 className="mt-4 text-display-md">{title}</h2>
          <p className="mt-4 max-w-[32rem] opacity-85">{text}</p>
        </>
      }
    >
      <div className="w-full max-w-[34rem]">
        <ManagementBoard data={board} />
      </div>
    </ExpandingFrame>
  );
}
