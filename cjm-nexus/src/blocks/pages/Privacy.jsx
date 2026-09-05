import KlinodaCard from '../../components/mockups/KlinodaCard';
import DarkSurface from '../../components/ui/DarkSurface';
import Reveal from '../../components/ui/Reveal';
import { Eyebrow } from '../../components/ui/Text';

/**
 * La regla de privacidad de KLINODA, enseñada en lugar de explicada.
 *
 * ES LA ÚNICA PANTALLA DEL PRODUCTO QUE APARECE EN TODO EL SITIO, y puede
 * aparecer justo porque no contiene un solo dato clínico: cargo, tipo de
 * evaluación y aptitud. Sin nombres, ni reales ni inventados —una lista de
 * personas ficticias se parecería demasiado a un expediente de verdad—, y con
 * cargos genéricos.
 *
 * Dicho de otro modo: la regla que la sección explica es la misma que hace
 * posible la ilustración. Si hubiera que tapar algo de esta tarjeta para
 * poder publicarla, el producto estaría mal hecho.
 *
 * Va sobre marino porque la tarjeta es blanca: sobre el crema de la página se
 * fundiría con el fondo y dejaría de leerse como una pantalla.
 */
export default function Privacy({ content }) {
  return (
    <DarkSurface as="section" id="privacidad" className="bg-navy-deep py-[12vh] text-white">
      <div className="container grid items-center gap-x-12 gap-y-10 lg:grid-cols-[1fr_.95fr]">
        <Reveal>
          <Eyebrow tone="light">{content.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-[18ch] text-display-md">{content.title}</h2>
          <p className="mt-4 max-w-[40rem] text-white/80">{content.text}</p>

          <ul className="mt-8 grid gap-5 border-t border-white/15 pt-6 sm:grid-cols-2">
            {content.points.map((punto) => (
              <li key={punto.title}>
                <b className="block font-display text-[1rem] font-extrabold">{punto.title}</b>
                <span className="mt-1 block text-[.92rem] text-white/70">{punto.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal y={30} className="lg:pl-4">
          <KlinodaCard data={content.mockup} />
        </Reveal>
      </div>
    </DarkSurface>
  );
}
