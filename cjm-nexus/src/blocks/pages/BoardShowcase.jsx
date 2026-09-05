import ManagementBoard from '../../components/mockups/ManagementBoard';
import DarkSurface from '../../components/ui/DarkSurface';
import Reveal from '../../components/ui/Reveal';
import { Eyebrow } from '../../components/ui/Text';

/**
 * El tablero gerencial, a tamaño real.
 *
 * ESTE BLOQUE ESTUVO EN LA PORTADA Y SE TRAJO AQUÍ. Allí crecía hasta ocupar
 * la pantalla, y esa era su única forma de competir con lo que tenía encima y
 * debajo; costaba caro —era la tercera sección que fijaba el desplazamiento
 * seguida— y aun así se leía a la carrera. En la página del servicio no
 * compite con nada, así que puede estar simplemente grande y quieto.
 *
 * FONDO OSCURO PORQUE EL TABLERO ES CLARO: sobre crema, una tarjeta blanca
 * grande se funde con la página y deja de parecer un objeto. Sobre marino se
 * separa sola, sin necesidad de sombras exageradas.
 *
 * Los números de dentro ilustran cómo se ve el entregable, igual que la
 * captura de pantalla de cualquier producto. No son de ningún cliente y no se
 * presentan como resultados.
 */
export default function BoardShowcase({ content }) {
  return (
    <DarkSurface as="section" id="entregable" className="bg-navy-deep py-[12vh] text-white">
      <div className="container">
        <Reveal className="max-w-[42rem]">
          <Eyebrow tone="light">{content.badge}</Eyebrow>
          <h2 className="mt-4 text-display-md">{content.title}</h2>
          <p className="mt-4 text-white/80">{content.text}</p>
        </Reveal>

        <Reveal y={30} className="mt-10">
          <ManagementBoard data={content.board} />
        </Reveal>
      </div>
    </DarkSurface>
  );
}
