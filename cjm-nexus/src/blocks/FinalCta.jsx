/**
 * El cierre: la reunión, con la promesa concreta de qué pasa en ella.
 *
 * «Veinte minutos para entender tu empresa y proponerte un camino» dice qué
 * se obtiene; «agenda una reunión» no dice nada. Debajo van los tres canales
 * directos, porque hay gente que no quiere un calendario sino escribir a un
 * número de WhatsApp.
 *
 * Es una banda oscura, así que avisa a la cabecera —con <DarkSurface />—
 * para que su texto pase a blanco mientras se pasa por delante. Ese
 * envoltorio es la única parte que viaja al navegador: el resto de la
 * sección se renderiza en el servidor.
 */
import Button from '../components/ui/Button';
import DarkSurface from '../components/ui/DarkSurface';
import { Eyebrow } from '../components/ui/Text';
import { CALENDLY_URL, CONTACTS } from '../lib/site';

export default function FinalCta({ content }) {
  return (
    <DarkSurface as="section" id="contacto" className="container pb-[12vh] pt-[4vh]">
      <div className="relative overflow-hidden rounded-xl4 bg-navy-deep px-6 py-[10vh] text-center text-white">
        {/* Malla de gradientes. Van muy difuminados y por debajo del contenido:
            dan color al bloque sin competir con el titular. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-[14vw] -top-[22vw] h-[46vw] w-[46vw] rounded-full bg-navy-light opacity-90 blur-[60px]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-[12vw] -top-[10vw] h-[42vw] w-[42vw] rounded-full bg-copper opacity-75 blur-[60px]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[24vw] left-[30vw] h-[36vw] w-[36vw] rounded-full bg-copper-light opacity-55 blur-[60px]"
        />

        <div className="relative">
          <Eyebrow tone="light">{content.eyebrow}</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-[18ch] text-display-md">{content.title}</h2>
          <p className="mx-auto mt-4 max-w-[34rem] text-white/85">{content.text}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={CALENDLY_URL} variant="copper" size="lg">
              {content.primary}
            </Button>
            <Button href="mailto:experiencia@cjmnexus.com" variant="white" size="lg">
              {content.secondary}
            </Button>
          </div>

          {/* Los tres canales, con altura de dedo. Eran enlaces de dieciseis pixeles
              de alto: en un telefono, tres objetivos asi de finos y pegados
              garantizan que se pulse el equivocado. */}
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 text-[.85rem] font-semibold text-white/80">
            {CONTACTS.map((contact) => (
              <li key={contact.key}>
                <a
                  href={contact.href}
                  className="inline-block py-[.55rem] transition-colors hover:text-copper-light"
                >
                  {contact.label} · {contact.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DarkSurface>
  );
}
