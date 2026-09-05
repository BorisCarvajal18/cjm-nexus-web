import Reveal from '../../components/ui/Reveal';
import { Eyebrow } from '../../components/ui/Text';

/**
 * <StepCard /> — un paso del proceso.
 *
 * Vive suelto y se exporta porque lo usan dos montajes distintos: la sección
 * completa de aquí abajo, en la página de dirección financiera, y las dos
 * ofertas de la página de soluciones digitales. Los caminos son diferentes
 * —una web en días, un sistema en meses— pero tienen que verse hechos del
 * mismo material.
 *
 * CADA PASO DICE QUÉ RECIBE O QUÉ PONE EL CLIENTE. Sin esa línea, los pasos
 * se convierten en una lista de actividades nuestras, que al comprador no le
 * importan. Con ella, cada paso tiene una contrapartida concreta.
 */
export function StepCard({ paso }) {
  return (
    <article className="relative h-full overflow-hidden rounded-xl3 border border-hairline bg-surface p-6 shadow-soft">
      {/* La barra de gradiente tipifica el paso sin necesidad de un rótulo
          de color. */}
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-g-brand" />

      <div className="flex flex-wrap items-center gap-3">
        <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-g-navy font-display text-[.8rem] font-extrabold text-white">
          {paso.step}
        </span>
        <span className="rounded-full bg-stone-light px-3 py-[.25rem] text-[.7rem] font-extrabold uppercase tracking-[.1em] text-copper-deep">
          {paso.when}
        </span>
      </div>

      <h3 className="mt-4 font-display text-[1.25rem] font-extrabold">{paso.title}</h3>
      <p className="mt-2 max-w-[46ch] text-[.96rem] text-ink-soft">{paso.text}</p>

      {paso.gives ? (
        <p className="mt-4 border-t border-hairline pt-3 text-[.88rem] font-semibold text-ink">
          {paso.gives}
        </p>
      ) : null}
    </article>
  );
}

/**
 * El proceso completo, con su propio titular.
 *
 * ES LA SECCIÓN QUE MÁS VENDE DE TODA LA PÁGINA, y no por el diseño: porque
 * responde a la única pregunta que se hace de verdad quien está pensando en
 * contratar, que es «¿y qué pasa exactamente si os contrato?». Un servicio
 * que no puede describir su primer mes se lee como una promesa.
 *
 * El titular se queda fijo en escritorio mientras los pasos pasan al lado:
 * es la única manera de que a mitad de la lista se siga sabiendo qué se está
 * leyendo. Es `position: sticky` del navegador, no una animación: no cuesta
 * nada al desplazarse.
 */
export default function Steps({ content }) {
  return (
    <section id="proceso" className="container py-[12vh]">
      <div className="grid gap-x-12 gap-y-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="lg:sticky lg:top-[100px] lg:self-start">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-[16ch] text-display-md">{content.title}</h2>
          {content.intro ? (
            <p className="mt-4 max-w-[30rem] text-ink-soft">{content.intro}</p>
          ) : null}
        </Reveal>

        <Reveal stagger={0.09} y={28} className="grid gap-4">
          {content.steps.map((paso) => (
            <StepCard key={paso.step} paso={paso} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
