import Reveal from '../../components/ui/Reveal';
import { Eyebrow } from '../../components/ui/Text';

/**
 * Las frases que dice el cliente antes de contratar.
 *
 * VAN EN PRIMERA PERSONA Y ENTRECOMILLADAS, y ese detalle es todo el bloque.
 * «Analizamos la rentabilidad por línea de negocio» es una descripción de lo
 * que hacemos nosotros. «Sé cuánto vendo, pero no cuánto gano en cada línea»
 * es la frase que el gerente ya ha pensado, y al leerla se reconoce.
 *
 * Nadie compra un servicio por su definición; lo compra porque alguien
 * describió su problema mejor de lo que él sabía describirlo.
 *
 * Va sobre banda de piedra, no oscura: es un bloque de texto largo y a este
 * tamaño el blanco sobre marino cansa antes.
 */
export default function Symptoms({ content }) {
  return (
    <section className="bg-stone-light py-[10vh]">
      <div className="container">
        <Reveal className="max-w-[40rem]">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-display-md">{content.title}</h2>
        </Reveal>

        <Reveal stagger={0.06} y={22} className="mt-9 grid gap-x-8 gap-y-5 md:grid-cols-2">
          {content.items.map((frase) => (
            <p
              key={frase}
              className="border-l-2 border-copper pl-4 font-display text-[1.02rem] font-bold leading-snug text-ink"
            >
              «{frase}»
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
