import Reveal from '../components/ui/Reveal';
import { Eyebrow, GradientText } from '../components/ui/Text';

/**
 * El equipo, en banda corta.
 *
 * SIN FOTOGRAFÍAS Y SIN FICHAS, y las dos ausencias van juntas a propósito.
 * Tres tarjetas con iniciales dentro de un círculo se leen como un hueco
 * esperando a que lleguen las fotos: se nota que falta algo. Una frase que
 * nombra a los tres, dice qué hace cada uno y enlaza a su página se lee como
 * una decisión.
 *
 * Los retratos van en «Nosotros», donde hay sitio para contar a cada uno en
 * serio. Aquí basta con saber que la firma son tres personas con nombre.
 */
export default function Team({ content }) {
  return (
    <section id="equipo" className="container py-[12vh]">
      <Reveal className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-end">
        <div>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-[14ch] text-display-md">
            Tres personas, dos países, <GradientText>una firma.</GradientText>
          </h2>
        </div>

        <div>
          <p className="text-[1.05rem] text-ink-soft">{content.lead}</p>

          <ul className="mt-6 grid gap-x-8 gap-y-3 border-t border-hairline pt-5 sm:grid-cols-3">
            {content.people.map((person) => (
              <li key={person.name}>
                <b className="block font-display text-[.98rem] font-extrabold">{person.name}</b>
                <span className="text-[.78rem] font-bold uppercase tracking-[.08em] text-copper-deep">
                  {person.role}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={content.cta.href}
            className="mt-6 inline-block font-display text-[.95rem] font-extrabold text-navy-light hover:underline"
          >
            {content.cta.label} →
          </a>
        </div>
      </Reveal>
    </section>
  );
}
