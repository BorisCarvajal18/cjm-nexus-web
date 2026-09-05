/**
 * Todo el texto y los datos de la portada, en un solo sitio.
 *
 * POR QUÉ ASÍ Y NO DENTRO DE LOS COMPONENTES: cuando llegue el inglés y el
 * alemán bastará con un archivo hermano (`home.en.js`, `home.de.js`) y no
 * habrá que tocar ni una línea de maquetación. Además permite revisar y
 * corregir los textos leyendo un solo archivo, que es como se aprobaron.
 *
 * REGLA AL EDITAR: cada AFIRMACIÓN sobre la firma tiene que poder responder
 * «¿dónde está eso?». Los datos que llenan las interfaces de muestra son otra
 * cosa: ilustran cómo se ve un entregable, igual que la captura de pantalla de
 * cualquier producto, y por eso pueden ser inventados. Lo que no se hace nunca
 * es presentar esos números como resultados propios ni de un cliente.
 *
 * Revisado con el dueño el 5 de septiembre de 2026.
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
    // Estas dos palabras van en gradiente dentro del titular.
    highlight: ['claras', 'altura'],
    lead: 'CJM Nexus une dirección financiera con quince años de trayectoria y desarrollo de software especializado, para empresas que quieren crecer con control.',
    primary: 'Agendar diagnóstico ejecutivo · 20 min',
    secondary: 'Ver qué hacemos',
    note: 'Sin costo · sin compromiso · en español, inglés o alemán',
    scroll: 'Desliza',
    // Aparece dentro de la esfera cuando ocupa la pantalla entera, justo
    // donde los dos dibujos se juntan en una sola línea.
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
        mockup: 'finanzas',
        eyebrow: 'Servicio 01',
        title: 'Dirección financiera externa.',
        text: 'Un director financiero para dueños y gerentes que necesitan claridad para decidir, con entregables concretos cada mes.',
        items: [
          'Diagnóstico financiero ejecutivo',
          'Flujo de caja proyectado a trece semanas',
          'Tablero de indicadores y control de costos',
          'Rentabilidad por línea de negocio',
        ],
        cta: { label: 'Ver el servicio', href: '/servicios/direccion-financiera', variant: 'copper' },
      },
      {
        index: '02',
        tone: 'copper',
        mockup: 'plataforma',
        eyebrow: 'Servicio 02',
        title: 'Páginas web y sistemas a medida.',
        text: 'Tu página web profesional publicada en menos de una semana. Y el sistema completo cuando la operación lo pide: normativa, documentos oficiales y datos sensibles.',
        items: [
          'Página web a medida, publicada en días',
          'Software especializado por sector',
          'Tableros conectados a tus datos',
          'Privacidad y trazabilidad desde el diseño',
        ],
        cta: { label: 'Ver el servicio', href: '/servicios/soluciones-digitales', variant: 'navy' },
      },
      {
        index: '03',
        tone: 'stone',
        mockup: 'klinoda',
        eyebrow: 'Producto propio',
        title: 'KLINODA: la prueba de lo que construimos.',
        text: 'KLINODA es nuestra plataforma para médicos ocupacionales en Ecuador. Digitaliza un trámite obligatorio lleno de reglas, formularios oficiales y datos sensibles, y lo deja resuelto en minutos. No es un servicio médico: es la prueba de lo que construimos para cualquier sector con normativa estricta.',
        items: [
          'Formulario oficial completo por bloques',
          'Certificados firmados electrónicamente',
          'La empresa ve la aptitud; nunca lo clínico',
        ],
        cta: { label: 'Conocer KLINODA', href: '/klinoda', variant: 'navy' },
      },
    ],
  },

  /* Interfaces de muestra de los tres paneles. Son ilustraciones del
     entregable, no resultados: por eso los números son redondos y las
     empresas genéricas. */
  mockups: {
    finanzas: {
      title: 'Tablero gerencial',
      subject: 'Junio',
      kpis: [
        { label: 'Ventas', value: '$1,24 M', delta: '▲ 12 %', tone: 'ok' },
        { label: 'Margen', value: '34 %', delta: '▲ 3 pt', tone: 'ok' },
        { label: 'Caja', value: '45 d', delta: '▼ 4 d', tone: 'warn' },
      ],
      seriesLabel: 'Ventas contra meta',
      series: [42, 48, 45, 58, 63, 72, 78, 88, 96],
      alert: 'Cartera vencida por encima de 60 días',
    },
    plataforma: {
      title: 'De tus datos al documento',
      sources: ['Contabilidad', 'Ventas', 'Operación'],
      core: 'Plataforma',
      outputs: ['Tablero', 'Documento firmado', 'Alertas'],
      foot: 'Reglas, permisos y trazabilidad en el centro, no en la pantalla.',
    },
    klinoda: {
      title: 'Portal de empresa',
      subject: 'Vista de aptitud',
      columns: ['Cargo', 'Evaluación', 'Aptitud'],
      rows: [
        ['Operador de planta', 'Periódica', 'ok', 'Apto'],
        ['Supervisora de turno', 'Ingreso', 'ok', 'Apto'],
        ['Conductor', 'Periódica', 'warn', 'Con observaciones'],
      ],
      foot: 'Diagnósticos, antecedentes y exámenes no existen en esta vista.',
    },
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

  /* En la portada el equipo va como banda corta, sin fotografías ni fichas.
     Tres tarjetas con iniciales dentro de un círculo se leen como un hueco
     esperando a rellenarse; una frase que nombra a los tres y enlaza a su
     página se lee como una decisión. Las fotos van en «Nosotros». */
  team: {
    eyebrow: 'Nosotros',
    title: 'Tres personas, dos países, una firma.',
    lead: 'Richard Carvajal dirige las finanzas desde Ecuador. Mirella Llanga lleva la operación. Boris Carvajal construye la tecnología desde Alemania.',
    people: [
      { name: 'Richard Carvajal', role: 'Fundador · Dirección financiera' },
      { name: 'Mirella Llanga', role: 'Gerente General' },
      { name: 'Boris Carvajal', role: 'Cofundador · Tecnología' },
    ],
    // Apuntará a /nosotros cuando esa página exista.
    cta: { label: 'Conocer al equipo', href: '#contacto' },
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
