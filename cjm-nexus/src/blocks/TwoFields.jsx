'use client';

/**
 * Las dos líneas de negocio, más KLINODA como tercer panel.
 *
 * POR QUÉ KLINODA VA AQUÍ Y NO EN SU PROPIA SECCIÓN DE LA PORTADA: es un
 * producto de medicina ocupacional, y una portada que le dedique varios
 * bloques hace pensar que la firma se dedica a la medicina. Como tercer panel
 * de «qué hacemos», etiquetado «proyecto destacado», queda claro que es la
 * prueba de una capacidad y no un servicio. La historia completa vive en su
 * propia página.
 *
 * El recorrido es horizontal en escritorio y vertical en móvil, donde
 * secuestrar el desplazamiento sería una mala idea.
 */
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import HorizontalRail, { RailPanel } from '../components/ui/HorizontalRail';
import { Eyebrow } from '../components/ui/Text';

/* Los fondos difuminados de cada panel. Cada línea tiene su pareja de
   colores: marino con cobre en finanzas, durazno con marino en tecnología,
   y los dos suaves en el panel del producto. */
const FONDOS = {
  '01': 'bg-navy-deep bg-[radial-gradient(60%_60%_at_30%_30%,#C9784A,transparent_65%),radial-gradient(60%_60%_at_80%_70%,#3B4E7A,transparent_65%)]',
  '02': 'bg-copper-deep bg-[radial-gradient(60%_60%_at_70%_25%,#E8B48A,transparent_65%),radial-gradient(60%_60%_at_25%_75%,#1E2D4F,transparent_65%)]',
  '03': 'bg-stone bg-[radial-gradient(60%_60%_at_30%_70%,#E8B48A,transparent_65%),radial-gradient(60%_60%_at_75%_25%,#3B4E7A,transparent_65%)]',
};

export default function TwoFields({ content }) {
  const tones = content.panels.map((p) => p.tone);

  return (
    <div id="campos">
      <HorizontalRail label="Qué hacemos" panelTones={tones}>
        {content.panels.map((panel) => {
          const claro = panel.tone === 'stone';
          return (
            <RailPanel key={panel.index} tone={panel.tone} index={panel.index}>
              <div data-stagger>
                <Eyebrow tone={claro ? 'default' : 'light'}>{panel.eyebrow}</Eyebrow>
                <h2 className="mb-4 mt-3 text-display-md">{panel.title}</h2>
                <p className={`max-w-[30rem] ${claro ? 'text-ink-soft' : 'opacity-85'}`}>
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

              {/* La pieza visual del panel. Oculta en móvil: allí el texto ya
                  ocupa la pantalla y añadir una tarjeta decorativa solo
                  alargaría el desplazamiento. */}
              <div className="relative hidden overflow-hidden rounded-xl3 lg:block lg:h-[60vh]">
                <div data-parallax className={`absolute inset-[-15%] ${FONDOS[panel.index]}`} />
                <Card className="absolute inset-x-[8%] top-[12%]">
                  <div className="flex items-baseline justify-between gap-3">
                    <b className="font-display text-[.92rem]">{panel.card.label}</b>
                    <span className="text-[.62rem] font-extrabold uppercase tracking-[.1em] text-ink-muted">
                      {panel.card.note}
                    </span>
                  </div>
                  <p className="mt-2 font-display text-[1.7rem] font-extrabold tracking-tight">
                    {panel.card.value}
                  </p>
                </Card>
              </div>
            </RailPanel>
          );
        })}
      </HorizontalRail>
    </div>
  );
}
