import ProjectCard from '../components/ui/ProjectCard';
import Reveal from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/Text';

/**
 * Tres piezas de trabajo, con enlace a la página de proyectos.
 *
 * Es poco, y por eso el subtítulo dice «contado con su estado real, sin
 * promesas»: una firma joven con tres piezas honestas convence más que una
 * cuadrícula de logotipos que nadie puede comprobar. La sección está lista
 * para crecer cuando haya más.
 */
function Thumb({ title, dark }) {
  const barra = dark ? 'bg-white/20' : 'bg-stone-light';
  return (
    <div className={`grid gap-[6px] rounded-lg p-3 shadow-lift ${dark ? 'bg-navy-deep' : 'bg-white'}`}>
      <span
        className={`font-display text-[.7rem] font-extrabold uppercase tracking-[.1em] ${dark ? 'text-white' : 'text-navy'}`}
      >
        {title}
      </span>
      <span className="block h-2 w-[30%] rounded bg-g-copper" />
      <span className={`block h-2 w-full rounded ${barra}`} />
      <span className={`block h-2 w-[70%] rounded ${barra}`} />
      <span className={`block h-2 w-[50%] rounded ${barra}`} />
    </div>
  );
}

export default function ProjectsStrip({ content }) {
  return (
    <section id="proyectos" className="container py-[12vh]">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
        <a
          href={content.cta.href}
          className="text-[.88rem] font-extrabold text-copper-deep hover:underline"
        >
          {content.cta.label} →
        </a>
      </div>

      <Reveal stagger={0.08} className="mt-10 grid gap-6 md:grid-cols-3">
        {content.items.map((item) => (
          <ProjectCard
            key={item.title}
            title={item.title}
            meta={item.meta}
            description={item.description}
            status={item.status}
            statusTone={item.statusTone}
            tone={item.tone}
            preview={<Thumb title={item.thumb.title} dark={item.thumb.dark} />}
          />
        ))}
      </Reveal>
    </section>
  );
}
