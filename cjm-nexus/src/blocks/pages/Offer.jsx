import Reveal from '../../components/ui/Reveal';
import { Eyebrow } from '../../components/ui/Text';
import { StepCard } from './Steps';

/**
 * Una de las dos ofertas de la página de soluciones digitales.
 *
 * POR QUÉ LA PÁGINA TIENE DOS OFERTAS Y NO UNA: lo que la firma entrega hoy
 * son páginas web, y su argumento —publicada en menos de una semana— es el
 * más fuerte de toda la página. Pero también sabe construir sistemas del
 * tamaño de KLINODA, y quien llega buscando eso no debe irse pensando que
 * solo hacemos webs. Mezclarlas en una sola descripción sería lo peor de las
 * dos: un plazo de una semana al lado de un proceso de meses no lo cree
 * nadie.
 *
 * EL NÚMERO GRANDE HACE EL TRABAJO DE SEPARARLAS. Sin él, dos secciones
 * seguidas con la misma estructura se leen como una sola que se repite. Con
 * un 01 y un 02 del tamaño de un titular, se entiende de un vistazo que son
 * dos caminos y que hay que elegir uno.
 *
 * `tone="muted"` pone la segunda oferta sobre fondo de piedra. Es la forma
 * más barata de marcar el corte: no cuesta un píxel de animación y funciona
 * incluso mirando la página de reojo.
 */
export default function Offer({ content, tone = 'plain', id }) {
  const apagado = tone === 'muted';

  return (
    <section
      id={id}
      className={`py-[12vh] ${apagado ? 'bg-stone-light' : ''}`}
    >
      <div className="container">
        <Reveal className="grid gap-x-12 gap-y-6 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="flex gap-5">
            {/* El número. Es decorativo —la sección ya se nombra en el
                titular— así que se oculta a los lectores de pantalla en vez
                de hacerles leer «cero uno» antes de cada bloque. */}
            <span
              aria-hidden="true"
              className="hidden font-display text-[3.4rem] font-extrabold leading-none text-grad bg-g-copper sm:block"
            >
              {content.marker}
            </span>
            <div>
              <Eyebrow>{content.eyebrow}</Eyebrow>
              <h2 className="mt-3 max-w-[18ch] text-display-md">{content.title}</h2>
            </div>
          </div>

          <div className="lg:pt-2">
            <p className="max-w-[40rem] text-[1.02rem] text-ink-soft">{content.text}</p>

            {/* Qué incluye: una lista de comprobación. Es lo más parecido a
                un presupuesto que va a leer un cliente en esta página, así
                que va en columnas y no escondida en un párrafo. */}
            {content.includes ? (
              <>
                <h3 className="mt-7 text-[.68rem] font-extrabold uppercase tracking-[.14em] text-ink-soft">
                  {content.includesLabel}
                </h3>
                <ul className="mt-3 grid gap-x-8 gap-y-[.6rem] sm:grid-cols-2">
                  {content.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-[.93rem] font-semibold">
                      <svg
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="mt-[.15rem] h-[15px] w-[15px] flex-none text-copper-deep"
                      >
                        <path
                          d="M4 10.5l4 4 8-9"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        </Reveal>

        {/* Qué construimos, cuando la oferta es de sistemas. */}
        {content.items ? (
          <Reveal stagger={0.07} y={24} className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {content.items.map((item) => (
              <div key={item.title} className="border-t-2 border-hairline pt-4">
                <span aria-hidden="true" className="mb-3 block h-[3px] w-9 rounded-full bg-g-copper" />
                <h3 className="font-display text-[1.05rem] font-extrabold">{item.title}</h3>
                <p className="mt-2 text-[.92rem] text-ink-soft">{item.text}</p>
              </div>
            ))}
          </Reveal>
        ) : null}

        <h3 className="mt-14 text-[.68rem] font-extrabold uppercase tracking-[.14em] text-ink-soft">
          {content.stepsLabel}
        </h3>

        {/* Los pasos en fila. Aquí no llevan el titular fijo al lado que sí
            tienen en la página financiera: son tres o cuatro y caben de un
            vistazo, y fijar un titular por cada oferta llenaría la página de
            elementos pegajosos peleando entre ellos. */}
        <Reveal
          stagger={0.08}
          y={26}
          className={`mt-4 grid gap-4 md:grid-cols-2 ${
            content.steps.length > 3 ? 'xl:grid-cols-4' : 'lg:grid-cols-3'
          }`}
        >
          {content.steps.map((paso) => (
            <StepCard key={paso.step} paso={paso} />
          ))}
        </Reveal>

        {/* LA LETRA PEQUEÑA VA A LA VISTA, y no por escrúpulo: es lo que hace
            creíble la promesa. «En una semana» sin condición suena a folleto;
            con la condición escrita suena a alguien que ya lo ha hecho y sabe
            dónde se atasca. */}
        {content.note ? (
          <p className="mt-6 max-w-[52rem] border-l-2 border-copper pl-4 text-[.9rem] text-ink-soft">
            {content.note}
          </p>
        ) : null}
      </div>
    </section>
  );
}
