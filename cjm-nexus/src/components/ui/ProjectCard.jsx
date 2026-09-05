'use client';

/**
 * <ProjectCard /> — una pieza de trabajo.
 *
 * La miniatura se inclina siguiendo al cursor y se desplaza en parallax al
 * hacer scroll. Es el único hover con inclinación del sitio: hace que la
 * cuadrícula de proyectos se sienta manipulable, que es justo lo que se
 * quiere de un portafolio.
 *
 * `status` va siempre visible cuando el proyecto no está terminado. Publicar
 * un piloto sin decir que lo es se descubre a la primera pregunta.
 */
import useGsap from '../../hooks/useGsap';
import { parallax } from '../../lib/animations';
import { gsap, prefersReducedMotion } from '../../lib/gsap';
import Pill from './Pill';

const SURFACES = { navy: 'bg-g-navy', copper: 'bg-g-copper', stone: 'bg-g-stone', teal: 'bg-g-teal' };

export default function ProjectCard({
  title,
  meta,
  description,
  status,
  statusTone = 'warn',
  tone = 'navy',
  href,
  preview,
  className = '',
}) {
  const scope = useGsap((self, root) => {
    if (!root) return;
    const thumb = root.querySelector('[data-thumb]');
    if (!thumb) return;

    parallax(thumb, { amount: 12, trigger: root });

    if (prefersReducedMotion()) return undefined;
    const surface = root.querySelector('[data-surface]');
    const onMove = (event) => {
      const rect = surface.getBoundingClientRect();
      gsap.to(thumb, {
        rotateY: ((event.clientX - rect.left) / rect.width - 0.5) * 16,
        rotateX: -((event.clientY - rect.top) / rect.height - 0.5) * 16,
        duration: 0.5,
        overwrite: 'auto',
      });
    };
    const onLeave = () =>
      gsap.to(thumb, { rotateX: 0, rotateY: 0, duration: 0.8, ease: 'elastic.out(1,.5)' });

    surface.addEventListener('mousemove', onMove);
    surface.addEventListener('mouseleave', onLeave);
    return () => {
      surface.removeEventListener('mousemove', onMove);
      surface.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const Wrapper = href ? 'a' : 'div';

  return (
    <article ref={scope} className={className}>
      <Wrapper {...(href ? { href } : {})} className="group block">
        <div
          data-surface
          className={`relative grid aspect-[4/3] place-items-center overflow-hidden rounded-xl2 shadow-lift ${SURFACES[tone] ?? SURFACES.navy}`}
        >
          <div data-thumb className="w-[72%] [transform-style:preserve-3d] will-change-transform">
            {preview}
          </div>
        </div>

        <div className="mt-4 flex items-baseline justify-between gap-3">
          <b className="font-display text-[.95rem] font-extrabold uppercase tracking-[.1em] group-hover:text-copper-deep">
            {title}
          </b>
          <span className="text-[.72rem] font-bold uppercase tracking-[.1em] text-ink-muted">
            {meta}
          </span>
        </div>
        {description ? <p className="mt-1 text-[.92rem] text-ink-soft">{description}</p> : null}
        {status ? (
          <Pill tone={statusTone} className="mt-3">
            {status}
          </Pill>
        ) : null}
      </Wrapper>
    </article>
  );
}
