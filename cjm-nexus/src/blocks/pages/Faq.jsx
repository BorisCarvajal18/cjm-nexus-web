import Accordion from '../../components/ui/Accordion';
import Reveal from '../../components/ui/Reveal';
import { Eyebrow } from '../../components/ui/Text';

/**
 * Las preguntas frecuentes de cada servicio.
 *
 * VAN AL FINAL Y ANTES DEL CIERRE, en ese orden exacto: son las objeciones
 * que quedan en pie cuando alguien ya se ha convencido a medias, y la única
 * razón de existir de esta sección es quitarlas de en medio justo antes de
 * pedir la reunión.
 *
 * Se apoya en <Accordion />, que usa <details> nativos: las respuestas están
 * en el HTML aunque estén cerradas, así que Ctrl+F las encuentra y el
 * buscador las indexa. Una lista de preguntas que solo existe cuando alguien
 * hace clic no le sirve a nadie.
 */
export default function Faq({ content }) {
  return (
    <section id="preguntas" className="container py-[12vh]">
      <div className="grid gap-x-12 gap-y-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="lg:sticky lg:top-[100px] lg:self-start">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-[14ch] text-display-md">{content.title}</h2>
        </Reveal>

        <Reveal y={26}>
          <Accordion items={content.items} className="border-t border-hairline" />
        </Reveal>
      </div>
    </section>
  );
}
