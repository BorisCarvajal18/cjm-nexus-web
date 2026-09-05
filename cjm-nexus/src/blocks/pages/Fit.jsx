import Reveal from '../../components/ui/Reveal';
import { Eyebrow } from '../../components/ui/Text';

/**
 * Para quién funciona y para quién no.
 *
 * DECIR PARA QUIÉN NO ES VENDE MÁS QUE DECIR PARA QUIÉN SÍ. Una página que
 * solo afirma que sirve para todo el mundo no la cree nadie; una que descarta
 * casos concretos —y encima manda al lector con su contador si es lo que
 * necesita— se lee como escrita por alguien que sabe lo que hace y no
 * necesita cerrar todos los tratos.
 *
 * Además filtra: las reuniones que se ahorran gracias a esta sección son
 * exactamente las que no iban a terminar en nada.
 *
 * EL COLOR NO ES LO QUE DISTINGUE LAS DOS COLUMNAS: cada una lleva su título
 * escrito. Quien no separa el verde del cobre lee lo mismo.
 */
export default function Fit({ content }) {
  return (
    <section className="container py-[12vh]">
      <Reveal className="max-w-[40rem]">
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <h2 className="mt-4 text-display-md">{content.title}</h2>
      </Reveal>

      <Reveal stagger={0.1} y={26} className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl3 border border-hairline bg-surface p-7 shadow-soft">
          <h3 className="flex items-center gap-2 font-display text-[1.1rem] font-extrabold">
            <span aria-hidden="true" className="h-[10px] w-[10px] rounded-full bg-g-teal" />
            {content.yes.title}
          </h3>
          <ul className="mt-5 grid gap-3">
            {content.yes.items.map((item) => (
              <li key={item} className="flex gap-3 text-[.96rem] text-ink-soft">
                <span aria-hidden="true" className="mt-[.45rem] h-[6px] w-[6px] flex-none rounded-full bg-teal" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl3 border border-hairline bg-surface-muted p-7">
          <h3 className="flex items-center gap-2 font-display text-[1.1rem] font-extrabold">
            <span aria-hidden="true" className="h-[10px] w-[10px] rounded-full bg-stone" />
            {content.no.title}
          </h3>
          <ul className="mt-5 grid gap-3">
            {content.no.items.map((item) => (
              <li key={item} className="flex gap-3 text-[.96rem] text-ink-soft">
                <span aria-hidden="true" className="mt-[.45rem] h-[6px] w-[6px] flex-none rounded-full bg-stone" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
