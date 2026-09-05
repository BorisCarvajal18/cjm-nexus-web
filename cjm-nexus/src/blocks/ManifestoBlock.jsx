import Manifesto from '../components/ui/Manifesto';
import { Eyebrow } from '../components/ui/Text';

/**
 * El manifiesto: la única sección donde el texto es la ilustración.
 *
 * Nombra el problema del cliente con sus palabras antes de hablar de
 * nosotros. Por eso va antes de los servicios y no después: quien no se
 * reconoce en el problema no necesita la solución.
 */
export default function ManifestoBlock({ content }) {
  return (
    <section className="container py-[12vh]">
      <Eyebrow>{content.eyebrow}</Eyebrow>
      <Manifesto className="mt-5" highlight={content.highlight}>
        {content.text}
      </Manifesto>
    </section>
  );
}
