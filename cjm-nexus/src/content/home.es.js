/**
 * Todo el texto de la portada, en un solo sitio.
 *
 * POR QUÉ ASÍ Y NO DENTRO DE LOS COMPONENTES: cuando llegue el inglés y el
 * alemán bastará con un archivo hermano (`home.en.js`, `home.de.js`) y no
 * habrá que tocar ni una línea de maquetación. Además permite revisar y
 * corregir los textos leyendo un solo archivo, que es como se aprobaron.
 *
 * Aprobado por el dueño el 5 de septiembre de 2026, con cuatro correcciones
 * suyas ya aplicadas: el eslogan en inglés se retira, se dice «clientes» y no
 * «empresas», el alcance es «Ecuador y Alemania», y el titular se queda como
 * estaba.
 *
 * REGLA AL EDITAR: cada afirmación tiene que poder responder «¿dónde está
 * eso?». Si la respuesta es «lo sabemos hacer», se reformula o se quita.
 */
export const home = {
  meta: {
    title: 'Dirección financiera y software especializado | CJM Nexus',
    description:
      'CJM Nexus une dirección financiera con quince años de trayectoria y desarrollo de software especializado, para PYMEs y empresas medianas que quieren crecer con control.',
  },

  hero: {
    eyebrow: 'Finanzas · Tecnología · Ecuador y Alemania',
    title: 'Finanzas claras y software a la altura de tu empresa.',
    // Se resaltan en gradiente dentro del titular.
    highlight: ['claras', 'altura'],
    lead: 'CJM Nexus une dirección financiera con quince años de trayectoria y desarrollo de software especializado, para empresas que quieren crecer con control.',
    primary: 'Agendar diagnóstico ejecutivo · 20 min',
    secondary: 'Ver qué hacemos',
    note: 'Sin costo · sin compromiso · en español, inglés o alemán',
    scroll: 'Desliza',
    // Aparece dentro de la esfera cuando ocupa la pantalla entera.
    reveal: {
      title: 'Dos campos. Un criterio.',
      text: 'Control: en los números y en el software.',
    },
  },

  facts: [
    'Más de 15 años en dirección financiera',
    'Más de 100 clientes asesorados',
    'Un producto propio en desarrollo: KLINODA',
    'Equipo en Ecuador y Alemania',
    'Decisiones documentadas en actas',
    'Más de 2.300 pruebas automáticas',
  ],

  manifesto: {
    eyebrow: 'Por qué existimos',
    text: 'Las empresas medianas venden, crecen y operan todos los días. Pero cuando toca decidir, los números no cuentan una historia clara y el software no está a su altura. Nosotros arreglamos las dos cosas a la vez.',
    highlight: ['clara', 'altura', 'dos', 'cosas', 'vez'],
  },

  fields: {
    eyebrow: 'Qué hacemos · desliza',
    panels: [
      {
        index: '01',
        tone: 'navy',
        eyebrow: 'Servicio 01',
        title: 'Dirección financiera externa.',
        text: 'Un director financiero para dueños y gerentes que necesitan claridad para decidir, con entregables concretos cada mes.',
        items: [
          'Diagnóstico financiero ejecutivo',
          'Flujo de caja proyectado a trece semanas',
          'Tablero de indicadores y control de costos',
          'Rentabilidad por línea de negocio',
        ],
        cta: { label: 'Ver el servicio', href: '#contacto', variant: 'copper' },
        card: { label: 'Flujo de caja proyectado', value: '13 semanas', note: 'Ejemplo' },
      },
      {
        index: '02',
        tone: 'copper',
        eyebrow: 'Servicio 02',
        title: 'Soluciones digitales a medida.',
        text: 'Plataformas web, dashboards y automatización para operaciones con normativa, documentos oficiales y datos sensibles.',
        items: [
          'Software especializado por sector',
          'Dashboards conectados a tus datos',
          'Automatización de reportes',
          'Privacidad y trazabilidad desde el diseño',
        ],
        cta: { label: 'Contar tu caso', href: '#contacto', variant: 'navy' },
        card: { label: 'Plataforma · panel', value: '42 documentos', note: 'Ejemplo' },
      },
      {
        index: '03',
        tone: 'stone',
        eyebrow: 'Proyecto destacado',
        title: 'KLINODA: la prueba de lo que construimos.',
        text: 'Convertimos una norma de sesenta páginas en una plataforma que un médico ocupacional usa cada día. No es un servicio médico: es la demostración de lo que hacemos por cualquier sector con reglas estrictas.',
        items: [
          'Formulario oficial completo por bloques',
          'Certificados firmados electrónicamente',
          'La empresa ve la aptitud; nunca lo clínico',
        ],
        cta: { label: 'Ver el proyecto', href: '#proyectos', variant: 'navy' },
        card: { label: 'KLINODA', value: 'En piloto controlado', note: 'Producto propio' },
      },
    ],
  },

  /* El momento visual grande de la portada. Va sobre el entregable de la
     línea financiera y no sobre KLINODA: es lo que la mayoría de visitantes
     viene a comprar. Las cifras son de ejemplo y se dice, sin la palabra
     «en vivo» que el sitio anterior ponía sobre datos inventados. */
  deliverable: {
    badge: 'Entregable mensual · dirección financiera',
    title: 'El tablero que tu gerencia revisa cada mes.',
    text: 'Rentabilidad por línea, flujo de caja proyectado y los indicadores que de verdad se usan para decidir. Un documento vivo, no un informe que nadie abre.',
    board: {
      title: 'Tablero gerencial',
      note: 'Cifras de ejemplo',
      kpis: [
        { label: 'Margen bruto', value: '34 %', tone: 'ok' },
        { label: 'Caja disponible', value: '45 días', tone: 'ok' },
        { label: 'Cartera vencida', value: '+8 %', tone: 'warn' },
        { label: 'Plan anual', value: '65 %', tone: 'neutral' },
      ],
      rows: [
        ['Servicios', '42 %', 'ok', 'Sano'],
        ['Comercio', '34 %', 'ok', 'Sano'],
        ['Distribución', '27 %', 'warn', 'Revisar'],
        ['Digital', '21 %', 'neutral', 'Nuevo'],
      ],
      columns: ['Línea de negocio', 'Margen', 'Estado'],
      foot: 'El mismo tablero, cada mes, con los indicadores que su gerencia decidió medir.',
    },
  },

  projects: {
    eyebrow: 'Proyectos',
    title: 'Lo que hemos construido.',
    intro: 'Contado con su estado real, sin promesas.',
    cta: { label: 'Ver todos los proyectos', href: '#proyectos' },
    items: [
      {
        title: 'KLINODA',
        meta: 'Plataforma · 2026',
        description: 'Medicina ocupacional para Ecuador: formulario oficial, certificados firmados y portal de empresa.',
        status: 'En piloto controlado',
        statusTone: 'warn',
        tone: 'navy',
        thumb: { title: 'KLINODA', dark: true },
      },
      {
        title: 'cjmnexus.com',
        meta: 'Web · 2026',
        description: 'Este sitio: trilingüe, estático y animado con GSAP.',
        tone: 'stone',
        thumb: { title: 'CJM Nexus', dark: false },
      },
      {
        title: 'Tablero gerencial',
        meta: 'Dirección financiera',
        description: 'El entregable mensual: indicadores, caja y rentabilidad por línea.',
        tone: 'copper',
        thumb: { title: 'Tablero', dark: false },
      },
    ],
  },

  numbers: {
    eyebrow: 'Medido, no prometido',
    title: 'Cifras que podemos sostener.',
    items: [
      {
        display: '15+',
        value: 15,
        suffix: '+',
        label: 'años en dirección financiera',
        note: 'Richard Carvajal, fundador',
        gradient: 'bg-g-navy',
      },
      {
        display: '100+',
        value: 100,
        suffix: '+',
        label: 'clientes asesorados',
        note: 'Latinoamérica y Estados Unidos',
        gradient: 'bg-g-copper',
      },
      {
        display: '2.300+',
        value: 2300,
        suffix: '+',
        label: 'pruebas automáticas',
        note: 'En KLINODA, hasta hoy',
        gradient: 'bg-g-teal',
      },
      {
        display: '5,1 s',
        label: 'para emitir 50 certificados firmados',
        note: 'Medido con datos ficticios',
        gradient: 'bg-g-brand',
      },
    ],
  },

  method: {
    eyebrow: 'Cómo trabajamos',
    title: 'El método es la garantía.',
    intro: 'Cuatro reglas que aplicamos en cada proyecto, con un ejemplo real de cada una.',
    items: [
      {
        title: 'Decidimos por escrito',
        text: 'Cada decisión relevante queda en un acta numerada con su motivo y sus alternativas. Nada se acuerda de palabra.',
        evidence: 'Trece actas en KLINODA, desde la elección del stack hasta la firma electrónica.',
      },
      {
        title: 'Probamos lo que construimos',
        text: 'Pruebas automáticas y controles de seguridad en cada cambio. Si algo se rompe, falla la compilación, no el cliente.',
        evidence:
          'Más de 2.300 pruebas y una matriz que comprueba cada pantalla contra cada tipo de usuario.',
      },
      {
        title: 'Privacidad por diseño',
        text: 'Lo que alguien no debe ver no sale de la base de datos. La regla vive en el modelo, no en la pantalla.',
        evidence:
          'El portal de empresa de KLINODA solo consume una lista cerrada de campos, y una prueba falla si se cuela un dato clínico.',
      },
      {
        title: 'Nada real hasta validar',
        text: 'Datos ficticios hasta que el especialista y el abogado den el visto bueno. Un producto serio no se prueba con personas reales.',
        evidence:
          'KLINODA opera en piloto controlado y el sistema se niega a arrancar si alguien intenta autorizar datos reales por configuración.',
      },
    ],
  },

  team: {
    eyebrow: 'Nosotros',
    title: 'Tres personas, dos países, una firma.',
    intro: 'Dirección financiera desde Ecuador; tecnología desde Alemania.',
    people: [
      {
        name: 'Richard Carvajal',
        role: 'Fundador · Dirección financiera',
        bio: 'Más de quince años en asesoría financiera, con más de cien clientes acompañados en Latinoamérica y Estados Unidos.',
        linkedin:
          'https://www.linkedin.com/in/richard-jefferson-carvajal-pilliza-3a58b171/',
      },
      {
        name: 'Mirella Llanga',
        role: 'Gerente General',
        bio: 'Dirige la operación diaria de la firma: coordina los proyectos, las entregas y la relación con cada cliente.',
        linkedin: 'https://www.linkedin.com/in/mirella-ana-llanga-deid%C3%A1n-08295318a/',
      },
      {
        name: 'Boris Carvajal',
        role: 'Cofundador · Tecnología',
        bio: 'Responsable del área tecnológica desde Alemania: KLINODA, las soluciones digitales y esta web.',
        linkedin: 'https://www.linkedin.com/in/boris-carvajal',
      },
    ],
  },

  cta: {
    eyebrow: 'Siguiente paso',
    title: 'Veinte minutos para entender tu empresa y proponerte un camino.',
    text: 'Diagnóstico, dirección financiera o una solución a medida. Sin compromiso, en español, inglés o alemán.',
    primary: 'Agendar diagnóstico ejecutivo',
    secondary: 'Escribir a CJM Nexus',
  },
};

export default home;
