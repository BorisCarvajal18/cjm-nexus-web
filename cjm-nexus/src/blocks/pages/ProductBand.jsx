import Button from '../../components/ui/Button';
import DarkSurface from '../../components/ui/DarkSurface';
import Reveal from '../../components/ui/Reveal';
import { Eyebrow } from '../../components/ui/Text';

/**
 * KLINODA como prueba, no como servicio.
 *
 * APARECE UNA SOLA VEZ POR PÁGINA Y SIEMPRE ETIQUETADA «PRODUCTO PROPIO».
 * Es la regla que decidió el dueño y tiene un motivo comercial: un sitio que
 * dedica varios bloques a una plataforma de medicina ocupacional hace pensar
 * que la firma se dedica a la medicina ocupacional. Nombrado una vez, en su
 * sitio, dice otra cosa —esta empresa tiene un producto propio— que es
 * exactamente el posicionamiento que se busca.
 *
 * Las cifras que lleva son de construcción (pruebas, actas, tiempo de
 * emisión medido con datos ficticios), nunca clínicas ni de pacientes. No hay
 * capturas del producto con datos, ni siquiera inventados.
 */
export default function ProductBand({ content, href = '#contacto' }) {
  return (
    <DarkSurface as="section" className="container py-[6vh]">
      <div className="relative overflow-hidden rounded-xl4 bg-navy-deep px-6 py-[9vh] text-white sm:px-10">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-[10vw] -top-[14vw] h-[38vw] w-[38vw] rounded-full bg-teal opacity-60 blur-[70px]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[18vw] -left-[8vw] h-[32vw] w-[32vw] rounded-full bg-copper opacity-50 blur-[70px]"
        />

        <Reveal className="relative max-w-[46rem]">
          <Eyebrow tone="light">{content.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-display-md">{content.title}</h2>
          <p className="mt-4 max-w-[42rem] text-white/80">{content.text}</p>

          {content.facts ? (
            <ul className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-6">
              {content.facts.map((fact) => (
                <li key={fact.label}>
                  <b className="block font-display text-[1.7rem] font-extrabold tabular-nums">
                    {fact.value}
                  </b>
                  <span className="text-[.82rem] text-white/65">{fact.label}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-8">
            <Button href={href} variant="white" size="lg">
              {content.cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </DarkSurface>
  );
}
