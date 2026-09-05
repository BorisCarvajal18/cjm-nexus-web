import StackedCards from '../components/ui/StackedCards';
import { SectionHeading } from '../components/ui/Text';

/**
 * Las cuatro reglas de trabajo, en tarjetas que se apilan.
 *
 * Es la sección que gana al comprador escéptico, y funciona por una sola
 * razón: cada regla lleva un ejemplo comprobable en lugar de un adjetivo.
 * «Somos rigurosos» no dice nada; «trece actas de decisión en KLINODA» sí.
 *
 * El apilado es apropiado aquí porque las cuatro reglas SON una secuencia:
 * se decide, se prueba, se protege y solo entonces se pasa a datos reales.
 */
export default function Method({ content }) {
  return (
    <section id="metodo" className="container py-[12vh]">
      <SectionHeading eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
      <StackedCards className="mt-10" items={content.items} />
    </section>
  );
}
