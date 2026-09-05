import Reveal from '../../components/ui/Reveal';
import { SectionHeading } from '../../components/ui/Text';

/**
 * Rejilla de bloques cortos: entregables, tipos de proyecto, garantías.
 *
 * ES UN SOLO COMPONENTE PARA LOS TRES CASOS a propósito. Son la misma figura
 * —un conjunto de cosas comparables entre sí, cada una con nombre y una
 * explicación de dos líneas—, y tenerla escrita tres veces solo garantiza
 * que dentro de un mes las tres se vean distintas sin que nadie lo decidiera.
 *
 * `numbered` pone un número delante. Se usa cuando el orden significa algo, y
 * solo entonces: numerar una lista sin orden hace pensar que hay una
 * jerarquía donde no la hay.
 */
export default function FeatureGrid({ content, columns = 3, numbered = false, id }) {
  const rejilla =
    columns === 2 ? 'sm:grid-cols-2' : columns === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <section id={id} className="container py-[12vh]">
      <SectionHeading eyebrow={content.eyebrow} title={content.title} intro={content.intro} />

      <Reveal stagger={0.07} y={26} className={`mt-10 grid gap-x-8 gap-y-9 ${rejilla}`}>
        {content.items.map((item, i) => (
          <div key={item.title} className="border-t-2 border-hairline pt-4">
            {numbered ? (
              <span className="mb-2 block font-display text-[.78rem] font-extrabold text-copper-deep">
                {String(i + 1).padStart(2, '0')}
              </span>
            ) : (
              /* Sin número, la marca de color mantiene el ritmo visual de la
                 rejilla: sin ella las columnas se leen como texto suelto. */
              <span aria-hidden="true" className="mb-3 block h-[3px] w-9 rounded-full bg-g-copper" />
            )}
            <h3 className="font-display text-[1.08rem] font-extrabold">{item.title}</h3>
            <p className="mt-2 max-w-[42ch] text-[.94rem] text-ink-soft">{item.text}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
