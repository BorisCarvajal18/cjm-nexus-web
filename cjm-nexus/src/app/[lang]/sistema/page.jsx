/**
 * Sistema de diseño — página interna de revisión.
 *
 * NO ES UNA PÁGINA DEL SITIO. Existe para que el equipo vea en un solo sitio
 * los colores, la tipografía y los diecisiete componentes funcionando de
 * verdad, con sus animaciones, antes de montarlos en las páginas reales. Va
 * marcada como no indexable y no aparece en ninguna navegación.
 *
 * Cuando el sitio esté publicado puede quedarse: sirve de referencia para
 * quien retome el proyecto y evita que alguien reinvente un botón.
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
  title: 'Sistema de diseño · CJM Nexus',
  robots: { index: false, follow: false },
};

const GRADIENTS = [
  ['Marino', 'bg-g-navy', '#141F3A → #3B4E7A', 'Institucional, fondos oscuros'],
  ['Cobre', 'bg-g-copper', '#A85A2E → #E8B48A', 'Acción, línea financiera'],
  ['Verde azulado', 'bg-g-teal', '#1F6F7A → #45B3A8', 'Línea digital y KLINODA'],
  ['Gris cálido', 'bg-g-stone', '#B9B1A7 → #E9E5DF', 'Superficies y descansos'],
  ['Marca', 'bg-g-brand', 'marino → cobre', 'El nexo entre disciplinas'],
  ['Espectro', 'bg-g-spectrum', 'los cuatro', 'Solo hero y cierres'],
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

/** Miniatura de interfaz para las tarjetas de proyecto. */
function Thumb({ dark = false, title }) {
  const bar = dark ? 'bg-white/20' : 'bg-stone-light';
  return (
    <div
      className={`grid gap-[6px] rounded-lg p-3 shadow-lift ${dark ? 'bg-navy-deep' : 'bg-white'}`}
    >
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

export default function SistemaPage() {
  return (
    <main className="pb-24">
      {/* ── Cabecera ─────────────────────────────────────────── */}
      <header className="relative overflow-hidden bg-g-spectrum px-6 py-20 text-white">
        <Circuit
          className="absolute inset-0 h-full w-full opacity-70"
          width={800}
          height={400}
          paths={[
            'M120 0 V150 L170 200 V400',
            'M680 0 V120 L630 170 V300 L680 350 V400',
            'M400 400 V320 L440 280 V0',
          ]}
          nodes={[
            [120, 150],
            [680, 120],
            [680, 350],
          ]}
        />
        <div className="container relative">
          <Eyebrow tone="light">Fase 02 · sistema de diseño</Eyebrow>
          <h1 className="mt-4 text-display-lg">
            Los ladrillos con los que se levantan las{' '}
            <GradientText gradient="bg-gradient-to-r from-white to-copper-light">
              catorce páginas
            </GradientText>
          </h1>
          <p className="mt-4 max-w-[40rem] text-white/80">
            Página interna de revisión. Aquí están la paleta, la tipografía y los diecisiete
            componentes funcionando con sus animaciones reales.
          </p>
        </div>
      </header>

      {/* ── Paleta ───────────────────────────────────────────── */}
      <section className="container py-16">
        <SectionHeading
          eyebrow="Color"
          title={
            <>
              Cuatro familias, <GradientText>seis gradientes</GradientText>
            </>
          }
          intro="Ningún color se usa plano: fondos, botones y palabras destacadas van siempre en gradiente."
        />
        <Reveal stagger={0.06} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GRADIENTS.map(([name, cls, range, use]) => (
            <div key={name} className="overflow-hidden rounded-xl2 border border-hairline bg-surface">
              <span aria-hidden="true" className={`block h-20 ${cls}`} />
              <div className="p-4">
                <b className="block font-display">{name}</b>
                <span className="block text-[.78rem] text-ink-muted">{range}</span>
                <span className="mt-1 block text-[.82rem] text-ink-soft">{use}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ── Tipografía ───────────────────────────────────────── */}
      <section className="container py-16">
        <SectionHeading
          eyebrow="Tipografía"
          title="Syne para titular, Manrope para leer"
          intro="La escala es contenida a propósito: los títulos enormes no dejan apreciar la página."
        />
        <Card className="mt-8 grid gap-6">
          <div>
            <span className="text-[.66rem] font-extrabold uppercase tracking-[.14em] text-ink-muted">
              display-lg · titular de portada
            </span>
            <p className="font-display text-display-lg font-extrabold">
              Finanzas claras y software a la altura.
            </p>
          </div>
          <div>
            <span className="text-[.66rem] font-extrabold uppercase tracking-[.14em] text-ink-muted">
              display-md · título de sección
            </span>
            <p className="font-display text-display-md font-extrabold">
              Dos campos. Un criterio.
            </p>
          </div>
          <div>
            <span className="text-[.66rem] font-extrabold uppercase tracking-[.14em] text-ink-muted">
              cuerpo · 15 px
            </span>
            <p className="max-w-[62ch] text-ink-soft">
              CJM Nexus une dirección financiera con quince años de trayectoria y desarrollo de
              software especializado, para empresas que quieren crecer con control.
            </p>
          </div>
        </Card>
      </section>

      {/* ── Botones y etiquetas ──────────────────────────────── */}
      <section className="container py-16">
        <SectionHeading eyebrow="Controles" title="Botones, píldoras y etiquetas" />
        <Card className="mt-8 grid gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="copper">Agendar diagnóstico</Button>
            <Button variant="navy">Contar tu caso</Button>
            <Button variant="outline">Ver servicios</Button>
            <Button variant="copper" size="sm">
              Pequeño
            </Button>
            <Button variant="copper" size="lg">
              Grande
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Pill tone="ok">Apto</Pill>
            <Pill tone="warn">Con observaciones</Pill>
            <Pill tone="danger">Vencido</Pill>
            <Pill tone="neutral">Borrador</Pill>
            <Pill tone="brand">Destacado</Pill>
          </div>
          <div className="flex flex-wrap gap-3 rounded-xl2 bg-g-navy p-4">
            <Badge>En desarrollo · piloto controlado</Badge>
            <Badge tone="teal">Software especializado</Badge>
          </div>
        </Card>
      </section>

      {/* ── Cinta ────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container">
          <SectionHeading eyebrow="Cinta" title="Hechos en movimiento" />
        </div>
        <Ticker
          className="mt-8"
          items={[
            'Más de 15 años en dirección financiera',
            'Más de 100 empresas asesoradas',
            'Más de 2.300 pruebas automáticas',
            'Equipo en Ecuador y Berlín',
            'Privacidad por diseño',
          ]}
        />
      </section>

      {/* ── Manifiesto ───────────────────────────────────────── */}
      <section className="container py-16">
        <SectionHeading eyebrow="Manifiesto" title="Palabras que se encienden al bajar" />
        <Manifesto
          className="mt-8"
          highlight={['clara', 'altura', 'dos', 'cosas', 'vez']}
        >
          Las empresas medianas venden, crecen y operan todos los días. Pero cuando toca decidir,
          los números no cuentan una historia clara y el software no está a su altura. Nosotros
          arreglamos las dos cosas a la vez.
        </Manifesto>
      </section>

      {/* ── Raíl horizontal ──────────────────────────────────── */}
      <HorizontalRail label="Ejemplo de raíl horizontal">
        <RailPanel tone="navy" index="01">
          <div data-stagger>
            <Eyebrow tone="light">Servicio 01</Eyebrow>
            <h2 className="mb-4 mt-3 text-display-md">Dirección financiera externa.</h2>
            <p className="max-w-[30rem] opacity-80">
              Un director financiero para dueños y gerentes que necesitan claridad para decidir,
              con entregables concretos cada mes.
            </p>
            <div className="mt-6">
              <Button variant="copper">Agendar diagnóstico</Button>
            </div>
          </div>
          <div className="relative hidden overflow-hidden rounded-xl3 lg:block lg:h-[60vh]">
            <div
              data-parallax
              className="absolute inset-[-15%] bg-[radial-gradient(60%_60%_at_30%_30%,#C9784A,transparent_65%),radial-gradient(60%_60%_at_80%_70%,#3B4E7A,transparent_65%)] bg-navy-deep"
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
            <h2 className="mb-4 mt-3 text-display-md">Soluciones digitales a medida.</h2>
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
              className="absolute inset-[-15%] bg-[radial-gradient(60%_60%_at_70%_25%,#E8B48A,transparent_65%),radial-gradient(60%_60%_at_25%_75%,#1E2D4F,transparent_65%)] bg-copper-deep"
            />
            <Card className="absolute inset-x-[8%] top-[12%]">
              <b className="font-display">Plataforma · panel</b>
              <p className="mt-2 font-display text-[1.7rem] font-extrabold">42 documentos</p>
            </Card>
          </div>
        </RailPanel>
      </HorizontalRail>

      {/* ── Marco expansivo ──────────────────────────────────── */}
      <ExpandingFrame
        backdrop={
          <div className="h-full w-full bg-[radial-gradient(55%_55%_at_20%_25%,#C9784A,transparent_65%),radial-gradient(55%_55%_at_85%_75%,#3B4E7A,transparent_65%)] bg-navy-deep" />
        }
        caption={
          <>
            <Badge>Proyecto · en piloto</Badge>
            <h2 className="mt-3 text-display-md">Privacidad que no depende de la pantalla.</h2>
            <p className="mt-3 opacity-85">
              Así se ve el control cuando está en el modelo de datos: la empresa obtiene lo que
              necesita y nada más.
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

      {/* ── Cifras ───────────────────────────────────────────── */}
      <section className="container py-16">
        <SectionHeading eyebrow="Cifras" title="Contadores que se disparan al aparecer" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCounter display="15+" value={15} suffix="+" label="años en dirección financiera" note="Richard Carvajal" gradient="bg-g-navy" />
          <StatCounter display="100+" value={100} suffix="+" label="empresas asesoradas" note="Latinoamérica y EE. UU." gradient="bg-g-copper" />
          <StatCounter display="2.300+" value={2300} suffix="+" label="pruebas automáticas" note="En KLINODA" gradient="bg-g-teal" />
          <StatCounter display="5,1 s" label="para emitir 50 certificados" note="Medido con datos ficticios" gradient="bg-g-brand" />
        </div>
      </section>

      {/* ── Tarjetas apiladas ────────────────────────────────── */}
      <section className="container py-16">
        <SectionHeading eyebrow="Método" title="Tarjetas que se apilan al bajar" />
        <StackedCards className="mt-8" items={METHOD} />
      </section>

      {/* ── Proyectos ────────────────────────────────────────── */}
      <section className="container py-16">
        <SectionHeading eyebrow="Proyectos" title="Tarjetas con inclinación y parallax" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
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
      </section>

      {/* ── Equipo ───────────────────────────────────────────── */}
      <section className="container py-16">
        <SectionHeading
          eyebrow="Equipo"
          title="Sin fotos todavía, con iniciales"
          intro="Cuando lleguen las fotografías se pasa la imagen y no hay que tocar nada más."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
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
      </section>

      {/* ── Preguntas y formulario ───────────────────────────── */}
      <section className="container grid gap-10 py-16 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Preguntas" title="Acordeón nativo" />
          <Accordion className="mt-6" items={FAQ} />
        </div>
        <div>
          <SectionHeading eyebrow="Formulario" title="Campos con etiqueta real" />
          <form className="mt-6 grid gap-4" action="#">
            <Field label="Nombre" placeholder="Tu nombre" />
            <Field label="Correo" type="email" placeholder="tucorreo@empresa.com" />
            <Field
              label="Mensaje"
              as="textarea"
              rows={4}
              placeholder="Cuéntanos brevemente tu situación"
              hint="Te respondemos en un día hábil."
            />
            <Field
              label="Campo con error"
              defaultValue="correo-mal"
              error="Introduce un correo electrónico válido."
            />
            <div>
              <Button variant="copper">Enviar mensaje</Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
