'use client';

/**
 * Las dos líneas de negocio, más KLINODA como tercer panel.
 *
 * POR QUÉ KLINODA VA AQUÍ Y NO EN SU PROPIA SECCIÓN DE LA PORTADA: es un
 * producto de medicina ocupacional, y una portada que le dedique varios
 * bloques hace pensar que la firma se dedica a la medicina. Como tercer panel
 * de «qué hacemos», etiquetado producto propio, queda claro que es la prueba
 * de una capacidad. La historia completa vive en su propia página.
 *
 * CADA PANEL ENSEÑA UNA INTERFAZ DISTINTA, y es deliberado: un tablero, un
 * esquema de arquitectura y un portal. Con tres tableros seguidos los tres
 * paneles parecerían el mismo y no se distinguiría una línea de la otra.
 *
 * El recorrido es horizontal en escritorio y vertical en móvil, donde
 * secuestrar el desplazamiento sería una mala idea.
 */
import FinanceCard from '../components/mockups/FinanceCard';
import KlinodaCard from '../components/mockups/KlinodaCard';
import PlatformCard from '../components/mockups/PlatformCard';
import Button from '../components/ui/Button';
import HorizontalRail, { RailPanel } from '../components/ui/HorizontalRail';
import { Eyebrow } from '../components/ui/Text';

/* Los fondos difuminados de cada panel. Cada línea tiene su pareja de
   colores: cobre sobre marino en finanzas, durazno sobre cobre en tecnología,
   y los dos suaves en el panel del producto. */
const FONDOS = {
  finanzas:
    'bg-navy-deep bg-[radial-gradient(60%_60%_at_30%_30%,#C9784A,transparent_65%),radial-gradient(60%_60%_at_80%_70%,#3B4E7A,transparent_65%)]',
  plataforma:
    'bg-copper-deep bg-[radial-gradient(60%_60%_at_70%_25%,#E8B48A,transparent_65%),radial-gradient(60%_60%_at_25%_75%,#1E2D4F,transparent_65%)]',
  klinoda:
    'bg-stone bg-[radial-gradient(60%_60%_at_30%_70%,#E8B48A,transparent_65%),radial-gradient(60%_60%_at_75%_25%,#3B4E7A,transparent_65%)]',
};

const MOCKUPS = { finanzas: FinanceCard, plataforma: PlatformCard, klinoda: KlinodaCard };

export default function TwoFields({ content, mockups }) {
  const tones = content.panels.map((p) => p.tone);

  return (
    <div id="campos">
      <HorizontalRail label="Qué hacemos" panelTones={tones}>
        {content.panels.map((panel) => {
          const claro = panel.tone === 'stone';
          const Mockup = MOCKUPS[panel.mockup];

          return (
            <RailPanel key={panel.index} tone={panel.tone} index={panel.index}>
              <div data-stagger>
                <Eyebrow tone={claro ? 'default' : 'light'}>{panel.eyebrow}</Eyebrow>
                <h2 className="mb-4 mt-3 text-display-md">{panel.title}</h2>
                <p className={`max-w-[32rem] ${claro ? 'text-ink-soft' : 'opacity-85'}`}>
                  {panel.text}
                </p>
                <ul className="mt-6 grid gap-[.5rem]">
                  {panel.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[.92rem] font-semibold">
                      <span
                        aria-hidden="true"
                        className="h-[9px] w-[9px] flex-none rounded-full bg-current opacity-70"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <Button href={panel.cta.href} variant={panel.cta.variant}>
                    {panel.cta.label}
                  </Button>
                </div>
              </div>

              {/* La interfaz de muestra.
                  EL CONTENEDOR MANDA SOBRE EL ANCHO: antes la tarjeta se
                  colocaba en posición absoluta y se salía por la derecha,
                  cortada por el borde de la pantalla. Ahora va centrada
                  dentro de su columna y no puede desbordar. */}
              <div className="relative hidden items-center justify-center overflow-hidden rounded-xl3 p-[6%] lg:flex lg:h-[62vh]">
                <div data-parallax className={`absolute inset-[-15%] ${FONDOS[panel.mockup]}`} />
                <div className="relative w-full max-w-[28rem]">
                  {Mockup ? <Mockup data={mockups[panel.mockup]} /> : null}
                </div>
              </div>
            </RailPanel>
          );
        })}
      </HorizontalRail>
    </div>
  );
}
