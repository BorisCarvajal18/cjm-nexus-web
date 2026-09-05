import Button from '../../components/ui/Button';
import HighlightTitle from '../../components/ui/HighlightTitle';
import Reveal from '../../components/ui/Reveal';
import { Eyebrow } from '../../components/ui/Text';
import { CALENDLY_URL } from '../../lib/site';

/**
 * Cabecera de las páginas interiores.
 *
 * DELIBERADAMENTE MÁS TRANQUILA QUE LA PORTADA. La portada tiene una esfera
 * que crece hasta tapar la pantalla porque es lo primero que ve alguien que
 * no nos conoce y hay que retenerlo. A una página interior se llega ya
 * interesado y buscando una respuesta concreta: repetir el espectáculo aquí
 * retrasaría esa respuesta tres segundos, cada vez, en las cinco páginas.
 *
 * Lo que sí conserva es el sistema: la ceja, el titular con dos palabras en
 * gradiente y el resplandor de color detrás. Se reconoce como el mismo sitio
 * sin volver a cobrar el peaje de la animación.
 *
 * El texto NO entra con opacidad cero. Se anima con `gsap.from()`, de modo
 * que el HTML que sirve el servidor ya trae el titular visible: si el
 * JavaScript falla o tarda, la página se lee igual.
 */
export default function PageHero({ content, align = 'left' }) {
  const centrado = align === 'center';

  return (
    <section id="top" className="relative overflow-hidden pb-[8vh] pt-[26vh]">
      {/* Resplandor de marca. Va muy difuminado y detrás del texto: da color
          al bloque sin robarle contraste al titular. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-[18vw] -top-[16vw] h-[42vw] w-[42vw] rounded-full bg-copper-light opacity-40 blur-[80px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-[14vw] top-[6vw] h-[34vw] w-[34vw] rounded-full bg-stone-light opacity-70 blur-[80px]"
      />

      <div className="container relative">
        <Reveal className={`max-w-[46rem] ${centrado ? 'mx-auto text-center' : ''}`}>
          <Eyebrow>{content.eyebrow}</Eyebrow>

          <h1 className="mt-4 text-display-lg">
            <HighlightTitle title={content.title} highlight={content.highlight} />
          </h1>

          <p className="mt-5 max-w-[38rem] text-[1.08rem] text-ink-soft">{content.lead}</p>

          <div
            className={`mt-8 flex flex-wrap items-center gap-3 ${centrado ? 'justify-center' : ''}`}
          >
            <Button href={CALENDLY_URL} variant="copper" size="lg">
              {content.primary}
            </Button>
            {content.secondary ? (
              <Button href={content.secondaryHref ?? '#contenido'} variant="outline" size="lg">
                {content.secondary}
              </Button>
            ) : null}
          </div>

          {content.note ? (
            <p className="mt-4 text-[.82rem] font-semibold text-ink-muted">{content.note}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
