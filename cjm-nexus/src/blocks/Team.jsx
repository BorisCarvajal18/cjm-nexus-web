import PersonCard from '../components/ui/PersonCard';
import Reveal from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/Text';

/**
 * Las tres personas de la firma.
 *
 * Poner cara y trayectoria es la palanca de confianza más barata que existe,
 * y su ausencia era uno de los motivos por los que el sitio anterior parecía
 * una empresa inventada. Mientras no lleguen las fotografías se muestran las
 * iniciales sobre un gradiente: es honesto y no obliga a rellenar con
 * retratos de banco de imágenes, que se notan y restan.
 */
export default function Team({ content }) {
  return (
    <section id="equipo" className="container py-[12vh]">
      <SectionHeading eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
      <Reveal stagger={0.08} className="mt-10 grid gap-4 md:grid-cols-3">
        {content.people.map((person, i) => (
          <PersonCard
            key={person.name}
            index={i}
            name={person.name}
            role={person.role}
            bio={person.bio}
            linkedin={person.linkedin}
          />
        ))}
      </Reveal>
    </section>
  );
}
