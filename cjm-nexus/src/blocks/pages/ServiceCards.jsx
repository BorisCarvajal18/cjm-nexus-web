import FinanceCard from '../../components/mockups/FinanceCard';
import PlatformCard from '../../components/mockups/PlatformCard';
import Button from '../../components/ui/Button';
import Reveal from '../../components/ui/Reveal';
import { Eyebrow } from '../../components/ui/Text';

/**
 * Los dos servicios, en dos bloques grandes.
 *
 * NO ES EL CARRUSEL HORIZONTAL DE LA PORTADA, y es una decisión, no un
 * olvido. Allí el recorrido lateral sirve para que tres paneles pasen por
 * delante de alguien que todavía no sabe qué vendemos. Aquí ya lo sabe: ha
 * hecho clic en «Servicios» para comparar los dos y decidir a cuál entra.
 * Comparar exige verlos a la vez, y un carrusel obliga a recordar el panel
 * anterior en lugar de mirarlo.
 *
 * SE REUTILIZAN LAS INTERFACES DE MUESTRA de la portada. Que sean las mismas
 * es bueno: quien llega desde la portada reconoce el servicio de un vistazo,
 * antes de leer el titular.
 */
const FONDOS = {
  navy: 'bg-navy-deep bg-[radial-gradient(60%_60%_at_30%_30%,#C9784A,transparent_65%),radial-gradient(60%_60%_at_80%_70%,#3B4E7A,transparent_65%)]',
  copper:
    'bg-copper-deep bg-[radial-gradient(60%_60%_at_70%_25%,#E8B48A,transparent_65%),radial-gradient(60%_60%_at_25%_75%,#1E2D4F,transparent_65%)]',
};

const MOCKUPS = [FinanceCard, PlatformCard];

export default function ServiceCards({ content, mockups, lang }) {
  return (
    <section id="contenido" className="container grid gap-8 py-[6vh]">
      {content.cards.map((card, i) => {
        const Mockup = MOCKUPS[i];
        const datos = i === 0 ? mockups.finanzas : mockups.plataforma;

        return (
          <Reveal
            key={card.index}
            y={30}
            as="article"
            className="grid overflow-hidden rounded-xl4 border border-hairline bg-surface shadow-soft lg:grid-cols-[1.05fr_1fr]"
          >
            <div className="p-7 sm:p-10">
              <Eyebrow>{card.eyebrow}</Eyebrow>
              <h2 className="mt-3 text-display-sm">{card.title}</h2>
              <p className="mt-4 max-w-[38ch] text-ink-soft">{card.text}</p>

              <ul className="mt-6 grid gap-[.5rem]">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[.93rem] font-semibold">
                    <span
                      aria-hidden="true"
                      className={`h-[9px] w-[9px] flex-none rounded-full ${
                        card.tone === 'navy' ? 'bg-g-navy' : 'bg-g-copper'
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button href={`/${lang}${card.href}`} variant={card.tone === 'navy' ? 'navy' : 'copper'}>
                  {card.cta}
                </Button>
              </div>
            </div>

            {/* La interfaz de muestra. Se oculta por debajo de escritorio: en
                un móvil quedaría reducida a un rectángulo ilegible que solo
                alarga la página. */}
            <div className="relative hidden items-center justify-center overflow-hidden p-[8%] lg:flex">
              <div aria-hidden="true" className={`absolute inset-0 ${FONDOS[card.tone]}`} />
              <div className="relative w-full max-w-[24rem]">
                <Mockup data={datos} />
              </div>
            </div>
          </Reveal>
        );
      })}
    </section>
  );
}
