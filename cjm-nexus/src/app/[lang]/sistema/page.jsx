/**
 * Catálogo del sistema de diseño — herramienta interna.
 *
 * NO ES UNA PÁGINA DEL SITIO y está montada para que se note: sin portada
 * grande, sin llamadas a la acción reales y con un índice lateral, porque lo
 * que se hace aquí es CONSULTAR una pieza concreta, no recorrer una página de
 * arriba abajo. La primera versión imitaba una portada y se confundía con el
 * sitio; ese fue justamente el problema que había que arreglar.
 *
 * Cada bloque lleva su ficha: qué es la pieza y dónde se usa. Las mecánicas
 * que se apoderan de la pantalla —el raíl horizontal y el marco expansivo—
 * van al final y avisadas, para que consultar el catálogo no secuestre el
 * desplazamiento a mitad de camino.
 *
 * Va marcada como no indexable y no aparece en ninguna navegación.
 */
import {
  Accordion,
  Badge,
  Button,
  Card,
  Circuit,
  ExpandingFrame,
  Eyebrow,
  Field,
  GradientText,
  HorizontalRail,
  Manifesto,
  PersonCard,
  Pill,
  ProjectCard,
  RailPanel,
  Reveal,
  SectionHeading,
  StackedCards,
  StatCounter,
  Ticker,
} from '../../../components/ui';

export const metadata = {
  title: 'Catálogo del sistema · CJM Nexus',
  robots: { index: false, follow: false },
};

/* ------------------------------------------------------------------ */
/*  Piezas del propio catálogo                                         */
/* ------------------------------------------------------------------ */

/** Ficha de una pieza: nombre, para qué sirve y dónde se usa. */
function Spec({ id, name, what, where, children, wide = false }) {
  return (
    <article id={id} className="scroll-mt-8 overflow-hidden rounded-xl2 border border-hairline bg-surface">
      <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-hairline bg-surface-muted px-5 py-3">
        <b className="font-display text-[.95rem] font-bold">{name}</b>
        <span className="text-[.75rem] text-ink-muted">{where}</span>
        <p className="w-full text-[.82rem] text-ink-soft">{what}</p>
      </header>
      <div className={wide ? '' : 'p-6'}>{children}</div>
    </article>
  );
}

/** Título de grupo del catálogo. */
function Group({ id, n, title, note }) {
  return (
    <div id={id} className="scroll-mt-8 border-b border-hairline pb-3 pt-4">
      <div className="flex items-baseline gap-3">
        <span className="font-display text-[.8rem] font-extrabold text-copper-deep">{n}</span>
        <h2 className="font-display text-[1.35rem] font-extrabold tracking-tight">{title}</h2>
      </div>
      {note ? <p className="mt-1 max-w-[62ch] text-[.88rem] text-ink-soft">{note}</p> : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Datos de muestra                                                   */
/* ------------------------------------------------------------------ */

const GRADIENTS = [
  ['Marino', 'bg-g-navy', '#141F3A → #3B4E7A', 'Institucional y fondos oscuros'],
  ['Cobre', 'bg-g-copper', '#A85A2E → #E8B48A', 'Acción y línea financiera'],
  ['Verde azulado', 'bg-g-teal', '#1F6F7A → #45B3A8', 'Línea digital y KLINODA'],
  ['Gris cálido', 'bg-g-stone', '#B9B1A7 → #E9E5DF', 'Superficies y descansos'],
  ['Marca', 'bg-g-brand', 'marino → cobre', 'El nexo entre disciplinas'],
  ['Espectro', 'bg-g-spectrum', 'los cuatro', 'Solo portada y cierres'],
];

const METHOD = [
  {
    title: 'Decidimos por escrito',
    text: 'Cada decisión relevante queda en un acta numerada con su motivo y sus alternativas.',
    evidence: 'Trece actas en KLINODA, del stack elegido a la firma electrónica.',
  },
  {
    title: 'Probamos lo que construimos',
    text: 'Pruebas automáticas y puertas de seguridad en integración continua.',
    evidence: 'Más de 2.300 pruebas y una matriz de cada ruta contra cada perfil.',
  },
  {
    title: 'Privacidad por diseño',
    text: 'Lo que un rol no debe ver no sale de la base de datos.',
    evidence: 'El portal de empresa consume una lista blanca; una prueba falla si se filtra un dato clínico.',
  },
];

const FAQ = [
  {
    q: '¿Reemplazan a mi contador?',
    a: 'No. El contador registra; nosotros interpretamos y dirigimos. Trabajamos con la información que él produce.',
  },
  {
    q: '¿Qué información necesitan para el diagnóstico?',
    a: 'Estados financieros de los últimos periodos, ventas por línea y la estructura de costos. Lo que no exista, lo construimos juntos.',
  },
];

const INDEX = [
  ['Fundamentos', [['color', 'Color'], ['tipografia', 'Tipografía']]],
  [
    'Componentes',
    [
      ['botones', 'Botones'],
      ['estados', 'Estados'],
      ['tarjetas', 'Tarjetas'],
      ['cifras', 'Cifras'],
      ['personas', 'Personas'],
      ['proyectos', 'Proyectos'],
      ['preguntas', 'Preguntas'],
      ['formulario', 'Formulario'],
      ['circuito', 'Circuito'],
    ],
  ],
  [
    'Mecánicas de scroll',
    [
      ['cinta', 'Cinta'],
      ['manifiesto', 'Manifiesto'],
      ['apiladas', 'Tarjetas apiladas'],
      ['rail', 'Raíl horizontal'],
      ['marco', 'Marco expansivo'],
    ],
  ],
];

/** Miniatura de interfaz para las tarjetas de proyecto. */
function Thumb({ dark = false, title }) {
  const bar = dark ? 'bg-white/20' : 'bg-stone-light';
  return (
    <div className={`grid gap-[6px] rounded-lg p-3 shadow-lift ${dark ? 'bg-navy-deep' : 'bg-white'}`}>
      <span
        className={`font-display text-[.7rem] font-extrabold uppercase tracking-[.1em] ${dark ? 'text-white' : 'text-navy'}`}
      >
        {title}
      </span>
      <span className="block h-2 w-[30%] rounded bg-g-copper" />
      <span className={`block h-2 w-full rounded ${bar}`} />
      <span className={`block h-2 w-[70%] rounded ${bar}`} />
      <span className={`block h-2 w-[50%] rounded ${bar}`} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Página                                                             */
/* ------------------------------------------------------------------ */

export default function SistemaPage() {
  return (
    <main className="pb-20">
      {/* Cabecera de herramienta: pequeña y sin parecerse a una portada. */}
      <header className="border-b border-hairline bg-surface">
        <div className="container flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 py-6">
          <div>
            <Eyebrow>Herramienta interna · no forma parte del sitio</Eyebrow>
            <h1 className="mt-2 font-display text-[1.6rem] font-extrabold tracking-tight">
              Catálogo del sistema de diseño
            </h1>
          </div>
          <p className="max-w-[38rem] text-[.9rem] text-ink-soft">
            Las piezas con las que se levantan las catorce páginas del sitio, cada una con su
            ficha. Esta página no se publica en ninguna navegación ni se indexa.
          </p>
        </div>
      </header>

      <div className="container grid gap-10 py-10 lg:grid-cols-[13rem_minmax(0,1fr)]">
        {/* Índice */}
        <nav aria-label="Índice del catálogo" className="lg:sticky lg:top-6 lg:self-start">
          {INDEX.map(([group, links]) => (
            <div key={group} className="mb-5">
              <p className="mb-2 text-[.66rem] font-extrabold uppercase tracking-[.16em] text-ink-muted">
                {group}
              </p>
              <ul className="grid gap-[2px]">
                {links.map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={`#${href}`}
                      className="block rounded-lg px-2 py-1 text-[.86rem] text-ink-soft transition-colors hover:bg-stone-light hover:text-ink"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="grid gap-5">
          {/* ── Fundamentos ─────────────────────────────────── */}
          <Group
            n="01"
            title="Fundamentos"
            note="Color y tipografía. Todo lo demás se construye sobre estas dos decisiones."
          />

          <Spec
            id="color"
            name="Color"
            what="Cuatro familias, cada una viviendo en un gradiente. Ningún color se usa plano."
            where="Todo el sitio"
          >
            <Reveal stagger={0.05} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GRADIENTS.map(([name, cls, range, use]) => (
                <div key={name} className="overflow-hidden rounded-xl2 border border-hairline">
                  <span aria-hidden="true" className={`block h-16 ${cls}`} />
                  <div className="p-3">
                    <b className="block font-display text-[.9rem]">{name}</b>
                    <span className="block text-[.76rem] text-ink-muted">{range}</span>
                    <span className="mt-1 block text-[.8rem] text-ink-soft">{use}</span>
                  </div>
                </div>
              ))}
            </Reveal>
          </Spec>

          <Spec
            id="tipografia"
            name="Tipografía"
            what="Plus Jakarta Sans para titulares e Inter para texto. La misma familia que usa KLINODA."
            where="Todo el sitio"
          >
            <div className="grid gap-6">
              {[
                ['Titular de portada · display-lg', 'text-display-lg', 'Finanzas claras y software a la altura.'],
                ['Título de sección · display-md', 'text-display-md', 'Dos campos. Un criterio.'],
                ['Subtítulo · display-sm', 'text-display-sm', 'Dirección financiera externa'],
              ].map(([label, size, text]) => (
                <div key={label}>
                  <span className="text-[.66rem] font-extrabold uppercase tracking-[.14em] text-ink-muted">
                    {label}
                  </span>
                  <p className={`font-display font-extrabold ${size}`}>{text}</p>
                </div>
              ))}
              <div>
                <span className="text-[.66rem] font-extrabold uppercase tracking-[.14em] text-ink-muted">
                  Texto corrido · 15 px
                </span>
                <p className="max-w-[62ch] text-ink-soft">
                  CJM Nexus une dirección financiera con quince años de trayectoria y desarrollo de
                  software especializado, para empresas que quieren crecer con control.
                </p>
              </div>
              <div>
                <span className="text-[.66rem] font-extrabold uppercase tracking-[.14em] text-ink-muted">
                  Ceja · eyebrow
                </span>
                <div className="mt-1">
                  <Eyebrow>Finanzas · Tecnología · Ecuador y Berlín</Eyebrow>
                </div>
              </div>
            </div>
          </Spec>

          {/* ── Componentes ─────────────────────────────────── */}
          <Group
            n="02"
            title="Componentes"
            note="Piezas quietas: se colocan, no se animan solas. Son la mayor parte del sitio."
          />

          <Spec
            id="botones"
            name="Button"
            what="Cuatro variantes y tres tamaños. Solo una acción principal por pantalla."
            where="Todas las páginas"
          >
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="copper">Agendar diagnóstico</Button>
              <Button variant="navy">Contar tu caso</Button>
              <Button variant="outline">Ver servicios</Button>
              <Button variant="copper" size="sm">Pequeño</Button>
              <Button variant="copper" size="lg">Grande</Button>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 rounded-xl2 bg-g-navy p-4">
              <Button variant="white">Sobre banda oscura</Button>
            </div>
          </Spec>

          <Spec
            id="estados"
            name="Pill · Badge"
            what="El color nunca va solo: cada estado lleva su palabra, para quien no distinga los tonos."
            where="Proyectos, KLINODA, tablas"
          >
            <div className="flex flex-wrap items-center gap-2">
              <Pill tone="ok">Apto</Pill>
              <Pill tone="warn">Con observaciones</Pill>
              <Pill tone="danger">Vencido</Pill>
              <Pill tone="neutral">Borrador</Pill>
              <Pill tone="brand">Destacado</Pill>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 rounded-xl2 bg-g-navy p-4">
              <Badge>En desarrollo · piloto controlado</Badge>
              <Badge tone="teal">Software especializado</Badge>
            </div>
          </Spec>

          <Spec
            id="tarjetas"
            name="Card · SectionHeading"
            what="La barra de color tipifica la tarjeta sin necesidad de rótulo. No todo es una tarjeta."
            where="Servicios, método, capacidades"
          >
            <SectionHeading
              eyebrow="Qué hacemos"
              title={<>Dos campos. <GradientText>Un criterio.</GradientText></>}
              intro="Finanzas que entienden la tecnología. Tecnología que entiende el negocio."
            />
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Card accent="navy" hover>
                <b className="font-display">Dirección financiera</b>
                <p className="mt-2 text-[.9rem] text-ink-soft">Acento marino: institucional.</p>
              </Card>
              <Card accent="teal" hover>
                <b className="font-display">Soluciones digitales</b>
                <p className="mt-2 text-[.9rem] text-ink-soft">Acento verde: tecnología.</p>
              </Card>
              <Card accent="copper" hover>
                <b className="font-display">Proyecto destacado</b>
                <p className="mt-2 text-[.9rem] text-ink-soft">Acento cobre: acción.</p>
              </Card>
            </div>
          </Spec>

          <Spec
            id="cifras"
            name="StatCounter"
            what="El valor final se escribe en el servidor; la animación solo lo recorre desde cero."
            where="Inicio, Nosotros"
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCounter display="15+" value={15} suffix="+" label="años de experiencia" note="Richard Carvajal" gradient="bg-g-navy" />
              <StatCounter display="100+" value={100} suffix="+" label="empresas asesoradas" note="Latinoamérica y EE. UU." gradient="bg-g-copper" />
              <StatCounter display="2.300+" value={2300} suffix="+" label="pruebas automáticas" note="En KLINODA" gradient="bg-g-teal" />
              <StatCounter display="5,1 s" label="para emitir 50 certificados" note="Con datos ficticios" gradient="bg-g-brand" />
            </div>
          </Spec>

          <Spec
            id="personas"
            name="PersonCard"
            what="Sin fotografía muestra las iniciales. Cuando lleguen las fotos se pasa la imagen y ya."
            where="Nosotros, Inicio"
          >
            <div className="grid gap-4 md:grid-cols-3">
              <PersonCard
                index={0}
                name="Richard Carvajal"
                role="Fundador · Dirección financiera"
                bio="Más de quince años en asesoría financiera, con más de cien empresas en Latinoamérica y Estados Unidos."
                linkedin="https://www.linkedin.com/in/richard-jefferson-carvajal-pilliza-3a58b171/"
              />
              <PersonCard
                index={1}
                name="Mirella Llanga"
                role="Gerente General"
                bio="Dirige la operación de la firma y la relación con los clientes."
                linkedin="https://www.linkedin.com/in/mirella-ana-llanga-deid%C3%A1n-08295318a/"
              />
              <PersonCard
                index={2}
                name="Boris Carvajal"
                role="Cofundador · Tecnología · Berlín"
                bio="Responsable del área tecnológica: KLINODA, las soluciones digitales y esta web."
                linkedin="https://www.linkedin.com/in/boris-carvajal"
              />
            </div>
          </Spec>

          <Spec
            id="proyectos"
            name="ProjectCard"
            what="La miniatura se inclina siguiendo al cursor. Pruébalo pasando el ratón por encima."
            where="Proyectos, Inicio"
          >
            <div className="grid gap-6 md:grid-cols-3">
              <ProjectCard
                title="KLINODA"
                meta="Plataforma · 2026"
                description="Medicina ocupacional para Ecuador."
                status="En piloto controlado"
                tone="navy"
                preview={<Thumb dark title="KLINODA" />}
              />
              <ProjectCard
                title="cjmnexus.com"
                meta="Web · 2026"
                description="Sitio corporativo trilingüe."
                tone="stone"
                preview={<Thumb title="CJM Nexus" />}
              />
              <ProjectCard
                title="Tablero gerencial"
                meta="Dirección financiera"
                description="El entregable mensual: KPIs, caja y rentabilidad."
                tone="copper"
                preview={<Thumb title="Tablero" />}
              />
            </div>
          </Spec>

          <Spec
            id="preguntas"
            name="Accordion"
            what="Usa <details> nativo: funciona sin JavaScript y el buscador del navegador encuentra texto dentro."
            where="Servicios, ambas líneas, Contacto"
          >
            <Accordion items={FAQ} />
          </Spec>

          <Spec
            id="formulario"
            name="Field"
            what="La etiqueta va siempre encima y es un <label> real. El error se anuncia a los lectores de pantalla."
            where="Contacto, lista de espera"
          >
            <div className="grid max-w-[34rem] gap-4">
              <Field label="Nombre" placeholder="Tu nombre" />
              <Field label="Correo" type="email" placeholder="tucorreo@empresa.com" />
              <Field
                label="Mensaje"
                as="textarea"
                rows={3}
                placeholder="Cuéntanos brevemente tu situación"
                hint="Te respondemos en un día hábil."
              />
              <Field label="Campo con error" defaultValue="correo-mal" error="Introduce un correo electrónico válido." />
              <div>
                <Button variant="copper">Enviar mensaje</Button>
              </div>
            </div>
          </Spec>

          <Spec
            id="circuito"
            name="Circuit"
            what="El único ornamento del sitio, y dice algo: una firma que conecta finanzas y tecnología."
            where="Bandas oscuras"
            wide
          >
            <div className="relative h-56 overflow-hidden bg-g-navy">
              <Circuit
                className="absolute inset-0 h-full w-full"
                width={800}
                height={300}
                paths={['M120 0 V110 L170 160 V300', 'M680 0 V90 L630 140 V220 L680 270 V300', 'M400 300 V240 L440 200 V0']}
                nodes={[[120, 110], [680, 90], [680, 270]]}
              />
            </div>
          </Spec>

          {/* ── Mecánicas ───────────────────────────────────── */}
          <Group
            n="03"
            title="Mecánicas de scroll"
            note="Piezas que se mueven con el desplazamiento. Las dos últimas se apoderan de la pantalla mientras duran: es su función en el sitio, aquí solo resulta llamativo porque están fuera de contexto."
          />

          <Spec
            id="cinta"
            name="Ticker"
            what="Hechos verificables en movimiento continuo. Nunca eslóganes."
            where="Inicio, Servicios"
            wide
          >
            <Ticker
              items={[
                'Más de 15 años en dirección financiera',
                'Más de 100 empresas asesoradas',
                'Más de 2.300 pruebas automáticas',
                'Equipo en Ecuador y Berlín',
                'Privacidad por diseño',
              ]}
            />
          </Spec>

          <Spec
            id="manifiesto"
            name="Manifesto"
            what="Las palabras se encienden al bajar. Una frase por página como mucho."
            where="Inicio, Método"
          >
            <Manifesto highlight={['clara', 'altura', 'dos', 'cosas', 'vez']}>
              Las empresas medianas venden, crecen y operan todos los días. Pero cuando toca
              decidir, los números no cuentan una historia clara y el software no está a su altura.
              Nosotros arreglamos las dos cosas a la vez.
            </Manifesto>
          </Spec>

          <Spec
            id="apiladas"
            name="StackedCards"
            what="Cada tarjeta se queda pegada y la siguiente la cubre. Solo para contenido que es una secuencia."
            where="Método, fases de un proyecto"
          >
            <StackedCards items={METHOD} />
          </Spec>

          <Spec
            id="rail"
            name="HorizontalRail"
            what="La sección se fija y los paneles se recorren de lado. Por debajo de 1024 px se apilan en vertical."
            where="Inicio, Servicios"
            wide
          >
            <HorizontalRail label="Ejemplo de raíl horizontal">
              <RailPanel tone="navy" index="01">
                <div data-stagger>
                  <Eyebrow tone="light">Servicio 01</Eyebrow>
                  <h3 className="mb-4 mt-3 text-display-md">Dirección financiera externa.</h3>
                  <p className="max-w-[30rem] opacity-80">
                    Un director financiero para dueños y gerentes que necesitan claridad para
                    decidir, con entregables concretos cada mes.
                  </p>
                  <div className="mt-6">
                    <Button variant="copper">Agendar diagnóstico</Button>
                  </div>
                </div>
                <div className="relative hidden overflow-hidden rounded-xl3 lg:block lg:h-[60vh]">
                  <div
                    data-parallax
                    className="absolute inset-[-15%] bg-navy-deep bg-[radial-gradient(60%_60%_at_30%_30%,#C9784A,transparent_65%),radial-gradient(60%_60%_at_80%_70%,#3B4E7A,transparent_65%)]"
                  />
                  <Card className="absolute inset-x-[8%] top-[12%]">
                    <b className="font-display">Flujo de caja proyectado</b>
                    <p className="mt-2 font-display text-[1.7rem] font-extrabold">13 semanas</p>
                  </Card>
                </div>
              </RailPanel>

              <RailPanel tone="copper" index="02">
                <div data-stagger>
                  <Eyebrow tone="light">Servicio 02</Eyebrow>
                  <h3 className="mb-4 mt-3 text-display-md">Soluciones digitales a medida.</h3>
                  <p className="max-w-[30rem] opacity-85">
                    Plataformas web, dashboards y automatización para operaciones con normativa,
                    documentos oficiales y datos sensibles.
                  </p>
                  <div className="mt-6">
                    <Button variant="navy">Contar tu caso</Button>
                  </div>
                </div>
                <div className="relative hidden overflow-hidden rounded-xl3 lg:block lg:h-[60vh]">
                  <div
                    data-parallax
                    className="absolute inset-[-15%] bg-copper-deep bg-[radial-gradient(60%_60%_at_70%_25%,#E8B48A,transparent_65%),radial-gradient(60%_60%_at_25%_75%,#1E2D4F,transparent_65%)]"
                  />
                  <Card className="absolute inset-x-[8%] top-[12%]">
                    <b className="font-display">Plataforma · panel</b>
                    <p className="mt-2 font-display text-[1.7rem] font-extrabold">42 documentos</p>
                  </Card>
                </div>
              </RailPanel>
            </HorizontalRail>
          </Spec>

          <Spec
            id="marco"
            name="ExpandingFrame"
            what="Crece hasta ocupar la pantalla. Se usa dos veces en todo el sitio: Inicio y KLINODA."
            where="Inicio, KLINODA"
            wide
          >
            <ExpandingFrame
              backdrop={
                <div className="h-full w-full bg-navy-deep bg-[radial-gradient(55%_55%_at_20%_25%,#C9784A,transparent_65%),radial-gradient(55%_55%_at_85%_75%,#3B4E7A,transparent_65%)]" />
              }
              caption={
                <>
                  <Badge>Proyecto · en piloto</Badge>
                  <h3 className="mt-3 text-display-md">Privacidad que no depende de la pantalla.</h3>
                  <p className="mt-3 opacity-85">
                    Así se ve el control cuando está en el modelo de datos: la empresa obtiene lo
                    que necesita y nada más.
                  </p>
                </>
              }
            >
              <div className="w-full max-w-[42rem] rounded-xl3 bg-white p-6 shadow-deep">
                <div className="mb-4 flex items-center justify-between">
                  <b className="font-display uppercase tracking-[.06em] text-navy">KLINODA</b>
                  <span className="text-[.66rem] font-extrabold uppercase tracking-[.1em] text-ink-muted">
                    Portal de empresa
                  </span>
                </div>
                <div className="overflow-hidden rounded-xl2 border border-hairline">
                  {[
                    ['Operador de planta', 'Periódica', 'ok', 'Apto'],
                    ['Supervisora de turno', 'Ingreso', 'ok', 'Apto'],
                    ['Conductor', 'Periódica', 'warn', 'Con observaciones'],
                  ].map(([cargo, tipo, tone, estado]) => (
                    <div
                      key={cargo}
                      className="grid grid-cols-[1.3fr_1fr_1.2fr] items-center gap-3 border-t border-hairline px-4 py-3 text-[.84rem] first:border-t-0"
                    >
                      <span>{cargo}</span>
                      <span className="text-ink-soft">{tipo}</span>
                      <Pill tone={tone}>{estado}</Pill>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-[.78rem] text-ink-soft">
                  Diagnósticos, antecedentes y exámenes no existen en esta vista.
                </p>
              </div>
            </ExpandingFrame>
          </Spec>
        </div>
      </div>
    </main>
  );
}
