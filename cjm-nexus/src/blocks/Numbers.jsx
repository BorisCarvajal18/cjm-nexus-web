'use client';

/**
 * Cuatro cifras que se pueden sostener si alguien pregunta.
 *
 * Las dos primeras van con el nombre de Richard en la nota, no atribuidas a
 * la firma: los quince años y los cien clientes son su trayectoria personal,
 * y decirlo así es la diferencia entre un dato creíble y uno que se cae en la
 * primera conversación. Las dos últimas son medidas, con su condición escrita
 * («con datos ficticios»).
 *
 * Las formas de gradiente del fondo se mueven en parallax. Es el único
 * adorno de la sección y va a distinta velocidad que el contenido, que es lo
 * que da profundidad sin robar atención a los números.
 */
import useGsap from '../hooks/useGsap';
import Reveal from '../components/ui/Reveal';
import StatCounter from '../components/ui/StatCounter';
import { SectionHeading } from '../components/ui/Text';
import { parallax } from '../lib/animations';

export default function Numbers({ content }) {
  const scope = useGsap((self, root) => {
    if (!root) return;
    root.querySelectorAll('[data-forma]').forEach((forma) => {
      parallax(forma, { amount: Number(forma.dataset.forma), trigger: root });
    });
  }, []);

  return (
    <section ref={scope} className="relative overflow-hidden bg-g-stone py-[12vh]">
      <span
        aria-hidden="true"
        data-forma="-30"
        className="pointer-events-none absolute -left-14 top-[10%] h-52 w-52 rounded-[40%] bg-g-copper"
      />
      <span
        aria-hidden="true"
        data-forma="40"
        className="pointer-events-none absolute right-[6%] top-[8%] h-36 w-36 rounded-full bg-g-navy"
      />
      <span
        aria-hidden="true"
        data-forma="-20"
        className="pointer-events-none absolute bottom-[6%] right-[22%] h-28 w-28 rounded-[40%] bg-g-teal"
      />

      <div className="container relative">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />
        <Reveal stagger={0.08} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item) => (
            <StatCounter
              key={item.label}
              display={item.display}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              note={item.note}
              gradient={item.gradient}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
