/**
 * Textos de las tres páginas de servicios: el índice, dirección financiera y
 * soluciones digitales.
 *
 * CÓMO LEER ESTE ARCHIVO SI ERES RICHARD O BORIS: todo lo que aparece en las
 * tres páginas está aquí, en orden. No hace falta abrir ningún otro archivo
 * para corregir una frase.
 *
 * MARCA «SUPUESTO»: los comentarios que empiezan por SUPUESTO señalan lo que
 * está escrito a partir de una suposición razonable y NO de un dato
 * confirmado. Son exactamente las frases que hay que confirmar o corregir
 * antes de publicar. Están recogidas también en `docs/preguntas-richard.md`,
 * que es la lista para revisar en una sola sentada.
 *
 * REGLA AL EDITAR: cada afirmación sobre la firma tiene que poder responder
 * «¿dónde está eso?». Los números de las interfaces de muestra ilustran cómo
 * se ve un entregable, igual que la captura de pantalla de cualquier
 * producto; nunca se presentan como resultados de un cliente.
 *
 * Borrador escrito el 5 de septiembre de 2026, pendiente de revisión.
 */

/* ─────────────────────────────────────────────────────────────────────
   ÍNDICE DE SERVICIOS  ·  /es/servicios
   ───────────────────────────────────────────────────────────────────── */
export const servicios = {
  meta: {
    title: 'Servicios: dirección financiera y software a medida | CJM Nexus',
    description:
      'Dirección financiera externa para decidir con números claros, y desarrollo de software especializado para operaciones con normativa y datos sensibles.',
  },

  hero: {
    eyebrow: 'Servicios',
    title: 'Dos servicios. Un mismo criterio.',
    highlight: ['Un', 'mismo', 'criterio.'],
    lead: 'Ponemos orden en los números y construimos el software que la operación necesita. Se pueden contratar por separado; juntos es donde más rinden, porque la información que produce el sistema es la misma con la que se decide.',
    primary: 'Agendar diagnóstico ejecutivo · 20 min',
    secondary: 'Ver los dos servicios',
  },

  cards: [
    {
      index: '01',
      tone: 'navy',
      eyebrow: 'Servicio 01',
      title: 'Dirección financiera externa',
      text: 'Un director financiero para dueños y gerentes que necesitan claridad para decidir. Diagnóstico, tablero mensual y una reunión donde se decide con números delante.',
      items: [
        'Diagnóstico financiero ejecutivo',
        'Tablero gerencial cada mes',
        'Flujo de caja proyectado a trece semanas',
        'Rentabilidad por línea de negocio',
      ],
      href: '/servicios/direccion-financiera',
      cta: 'Ver el servicio',
    },
    {
      index: '02',
      tone: 'copper',
      eyebrow: 'Servicio 02',
      title: 'Soluciones digitales a medida',
      text: 'Plataformas, tableros y automatización para operaciones con normativa, documentos oficiales y datos sensibles. Construido con el mismo criterio que nuestro propio producto.',
      items: [
        'Plataformas especializadas por sector',
        'Tableros conectados a tus datos',
        'Automatización de reportes y documentos',
        'Integración con los sistemas que ya usas',
      ],
      href: '/servicios/soluciones-digitales',
      cta: 'Ver el servicio',
    },
  ],

  /* El argumento que justifica que las dos líneas estén en la misma firma.
     Sin esto, la página parece dos empresas compartiendo un logotipo. */
  together: {
    eyebrow: 'Por qué en la misma firma',
    title: 'El número y el sistema que lo produce.',
    text: 'La mayoría de los tableros fallan por lo mismo: los datos se arman a mano, llegan tarde y nadie confía del todo en ellos. Cuando quien dirige las finanzas y quien construye el software son la misma firma, el indicador se define una vez y el sistema lo produce solo.',
    points: [
      {
        title: 'Se define una vez',
        text: 'El margen, el ciclo de caja o el costo por unidad se definen en la reunión de dirección y quedan escritos en el sistema con esa definición.',
      },
      {
        title: 'Deja de armarse a mano',
        text: 'Lo que hoy son tres hojas de cálculo y dos correos pasa a salir del sistema cada mes, siempre igual.',
      },
      {
        title: 'Una sola conversación',
        text: 'No hay que explicarle el negocio al asesor financiero y otra vez al proveedor de software. Es el mismo equipo.',
      },
    ],
  },

  /* Franja de KLINODA. Una sola vez, etiquetada producto propio: la firma
     tiene un producto, no se dedica a la medicina ocupacional. */
  product: {
    eyebrow: 'Producto propio',
    title: 'KLINODA',
    text: 'Nuestra plataforma para medicina ocupacional en Ecuador. Un trámite obligatorio, lleno de reglas, formularios oficiales y datos sensibles, resuelto en minutos. Es la prueba pública de lo que construimos.',
    cta: 'Conocer KLINODA',
  },

  cta: {
    eyebrow: 'Siguiente paso',
    title: 'Veinte minutos para entender tu empresa y proponerte un camino.',
    text: 'Vengas por los números, por el software o por los dos. Sin compromiso, en español, inglés o alemán.',
    primary: 'Agendar diagnóstico ejecutivo',
    secondary: 'Escribir a CJM Nexus',
  },
};

/* ─────────────────────────────────────────────────────────────────────
   DIRECCIÓN FINANCIERA  ·  /es/servicios/direccion-financiera
   ───────────────────────────────────────────────────────────────────── */
export const finanzas = {
  meta: {
    title: 'Dirección financiera externa para empresas medianas | CJM Nexus',
    description:
      'Un director financiero externo: diagnóstico, tablero gerencial mensual, flujo de caja a trece semanas y una reunión mensual donde se decide con números delante.',
  },

  hero: {
    eyebrow: 'Servicio 01 · Dirección financiera',
    title: 'Un director financiero para tu empresa, sin tenerlo en nómina.',
    highlight: ['sin', 'tenerlo', 'en', 'nómina.'],
    lead: 'Richard Carvajal lleva más de quince años ordenando los números de empresas que crecen. Entramos en la tuya, ponemos la información en orden y te entregamos cada mes un tablero con el que se puede decidir de verdad.',
    primary: 'Agendar diagnóstico ejecutivo · 20 min',
    secondary: 'Ver lo que recibes cada mes',
    note: 'Sin costo · sin compromiso',
  },

  /* Los síntomas. Van primero porque la gente se reconoce antes en un
     problema que en una descripción de servicio. */
  symptoms: {
    eyebrow: 'Para quién es',
    title: 'Si te suena alguna de estas frases, esto es para ti.',
    items: [
      'Sé cuánto vendo, pero no cuánto gano en cada línea de negocio.',
      'La contabilidad me llega tarde y sirve para declarar impuestos, no para decidir.',
      'Estoy vendiendo más que nunca y la plata sigue sin alcanzar.',
      'Si mañana se cae un cobro grande, no sé cuántos días aguanto.',
      'Los precios los pongo por lo que cobra la competencia, no por lo que me cuesta.',
      'Quiero pedir financiamiento y no tengo los números presentables.',
    ],
  },

  /* SUPUESTO — LO MÁS IMPORTANTE DE ESTA PÁGINA.
     Este es el ritmo de trabajo tal y como yo lo supongo: un levantamiento,
     un diagnóstico presentado en reunión, una puesta en marcha del tablero y
     luego una reunión mensual fija. Los plazos (semana 1, semana 2, semanas 3
     y 4) y el contenido de cada paso son suposiciones. Richard tiene que
     confirmar el ritmo real o corregirlo.
     Es la pregunta 1 de `docs/preguntas-richard.md`. */
  month: {
    eyebrow: 'Cómo trabajamos',
    title: 'Así es el primer mes, y así son todos los siguientes.',
    intro:
      'Nada de asesorías que terminan en un informe que nadie abre. El trabajo tiene un ritmo fijo y entregables con fecha.',
    steps: [
      {
        step: '01',
        when: 'Semana 1',
        title: 'Levantamiento',
        text: 'Nos entregas los estados financieros de los últimos doce meses y conversamos una vez con tu contador. No pedimos acceso a tus cuentas bancarias ni movemos dinero: leemos y preguntamos.',
        gives: 'Lo que pones tú: los reportes que ya tienes y un par de horas de tu tiempo.',
      },
      {
        step: '02',
        when: 'Semana 2',
        title: 'Diagnóstico financiero',
        text: 'Un documento con el estado real del negocio: rentabilidad por línea, estructura de costos, ciclo de caja y los tres o cuatro puntos que más dinero te están costando hoy. Se presenta en reunión y se discute; no se envía por correo y ya.',
        gives: 'Lo que recibes: el diagnóstico y una lista priorizada de qué atacar primero.',
      },
      {
        step: '03',
        when: 'Semanas 3 y 4',
        title: 'Puesta en marcha',
        text: 'Montamos el tablero gerencial y la proyección de flujo de caja a trece semanas con los datos de tu empresa, con los indicadores que importan en tu sector y no con una plantilla genérica.',
        gives: 'Lo que recibes: el tablero funcionando, con tus cifras dentro.',
      },
      {
        step: '04',
        when: 'Cada mes, a partir de aquí',
        title: 'Reunión de dirección',
        text: 'Una reunión mensual con el tablero al frente: qué pasó, qué se decide y quién hace qué antes de la siguiente. Las decisiones quedan escritas, con su motivo.',
        gives: 'Lo que recibes: tablero actualizado, alertas del mes y el acta de la reunión.',
      },
    ],
  },

  /* El tablero. Estuvo en la portada y se trajo aquí, que es su sitio: en la
     página del servicio puede ocupar el espacio que merece sin competir con
     nada. Su estructura es la del brochure que ya se enseña a clientes. */
  deliverable: {
    badge: 'Entregable mensual',
    title: 'Así se ve lo que recibes cada mes.',
    text: 'Las ventas contra la meta, el margen por línea, los días de caja y las alertas que exigen una decisión. Un documento vivo que se revisa en reunión, no un informe que nadie abre.',
    board: {
      title: 'Tablero gerencial',
      subject: 'Empresa Ejemplo · junio',
      kpis: [
        { label: 'Ventas', value: '$1,24 M', delta: '▲ 12 %', tone: 'ok' },
        { label: 'Margen', value: '34 %', delta: '▲ 3 pt', tone: 'ok' },
        { label: 'Caja', value: '45 días', delta: '▼ 4 d', tone: 'warn' },
        { label: 'Rentabilidad', value: '18,2 %', delta: '▲ 1,5', tone: 'ok' },
      ],
      seriesLabel: 'Ventas contra meta',
      series: [58, 64, 61, 72, 78, 86, 92, 88, 101, 96, 108, 114],
      target: 95,
      linesLabel: 'Margen por línea',
      lines: [
        ['Servicios', 41, 'ok'],
        ['Producto', 33, 'ok'],
        ['Distribución', 27, 'warn'],
        ['Digital', 21, 'neutral'],
      ],
      alertsLabel: 'Alertas del mes',
      alerts: ['Cartera vencida por encima de 60 días', 'Margen sobre meta en Servicios'],
    },
  },

  deliverables: {
    eyebrow: 'Entregables',
    title: 'Qué hay dentro, en concreto.',
    items: [
      {
        title: 'Tablero gerencial mensual',
        text: 'Ventas contra meta, margen, días de caja y rentabilidad, con la comparación contra el mes y el año anteriores.',
      },
      {
        title: 'Flujo de caja a trece semanas',
        text: 'Qué entra y qué sale semana a semana durante el próximo trimestre, con los momentos en que la caja se aprieta señalados por adelantado.',
      },
      {
        title: 'Rentabilidad por línea de negocio',
        text: 'Cuánto deja realmente cada producto, servicio o sucursal, con los costos indirectos repartidos con un criterio explícito.',
      },
      {
        title: 'Estructura de costos y punto de equilibrio',
        text: 'Cuánto tienes que vender para no perder, y qué pasa con ese número si sube un costo o baja un precio.',
      },
      {
        title: 'Alertas del mes',
        text: 'Lo que exige una decisión ahora: cartera vencida, márgenes que caen, inventario detenido, un cliente que pesa demasiado.',
      },
      {
        title: 'Acta de la reunión',
        text: 'Qué se decidió, por qué y quién es responsable de cada cosa antes de la reunión siguiente.',
      },
    ],
  },

  /* Decir para quién NO es vende más que decir para quién sí: quien se
     reconoce en la columna de la izquierda confía en el resto de la página. */
  fit: {
    eyebrow: 'Honestidad por delante',
    title: 'Para quién funciona y para quién no.',
    yes: {
      title: 'Funciona si',
      items: [
        'Tu empresa ya factura de forma estable y el dueño no puede llevar los números en la cabeza.',
        'Tienes contador y lo que falta no es registro, sino interpretación.',
        'Estás creciendo, planeas invertir o vas a pedir financiamiento.',
        'Quieres decidir con números y no con intuición.',
      ],
    },
    no: {
      title: 'No es lo tuyo si',
      items: [
        'Buscas quien lleve la contabilidad y presente los impuestos: eso lo hace tu contador, y nosotros trabajamos con él.',
        'Necesitas resolver una urgencia de caja esta semana: un diagnóstico no reemplaza a un crédito.',
        'No hay disposición a tomar decisiones incómodas cuando los números las señalen.',
      ],
    },
  },

  /* SUPUESTO — las seis preguntas de abajo son las que yo esperaría, no las
     que Richard escucha de verdad en sus reuniones. Las respuestas son
     conservadoras a propósito: ninguna promete precio, plazo ni resultado.
     Es la pregunta 2 de `docs/preguntas-richard.md`. */
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Lo que preguntan antes de empezar.',
    items: [
      {
        q: '¿Esto reemplaza a mi contador?',
        a: 'No, y no debería. El contador registra lo que ya pasó y cumple con lo que exige la ley. La dirección financiera interpreta esa información y la convierte en decisiones hacia adelante. Trabajamos con tu contador, no en su lugar.',
      },
      {
        q: '¿Y si mi contabilidad está desordenada?',
        a: 'Es lo más común, y no es un impedimento. Parte del primer mes es justamente ordenar la información mínima necesaria para poder decidir. No hace falta que esté todo perfecto para empezar.',
      },
      {
        q: '¿Cuánto tiempo me va a quitar?',
        a: 'La entrega inicial de información y una reunión al mes. El trabajo de armar, revisar y proyectar lo hacemos nosotros; tú decides.',
      },
      {
        q: '¿Necesitan acceso a mis cuentas bancarias?',
        a: 'No. Trabajamos con reportes e información contable. No manejamos, movemos ni autorizamos dinero de ningún cliente.',
      },
      {
        q: '¿Desde qué tamaño de empresa tiene sentido?',
        a: 'Desde el momento en que las decisiones de precio, compra o contratación pesan lo suficiente como para que equivocarse cueste caro, y el dueño ya no puede tener todos los números en la cabeza. Eso pasa mucho antes de lo que la mayoría cree.',
      },
      {
        q: '¿Trabajan a distancia?',
        a: 'Sí. Tenemos equipo en Ecuador y en Alemania, y trabajamos en español, inglés y alemán. Las reuniones son por videollamada salvo que haga falta estar presente.',
      },
    ],
  },

  cta: {
    eyebrow: 'Siguiente paso',
    title: 'Veinte minutos con tus números sobre la mesa.',
    text: 'Un diagnóstico ejecutivo corto para entender dónde estás y decirte con franqueza si podemos ayudarte. Sin compromiso.',
    primary: 'Agendar diagnóstico ejecutivo',
    secondary: 'Escribir a CJM Nexus',
  },
};

/* ─────────────────────────────────────────────────────────────────────
   SOLUCIONES DIGITALES  ·  /es/servicios/soluciones-digitales
   ───────────────────────────────────────────────────────────────────── */
export const digital = {
  meta: {
    title: 'Software a medida para operaciones con normativa | CJM Nexus',
    description:
      'Plataformas, tableros y automatización para empresas que trabajan con normativa, documentos oficiales y datos sensibles. Prototipo antes de construir y entregas periódicas.',
  },

  hero: {
    eyebrow: 'Servicio 02 · Soluciones digitales',
    title: 'Software que entiende tu operación, no una plantilla más.',
    highlight: ['no', 'una', 'plantilla', 'más.'],
    lead: 'Construimos plataformas, tableros y automatizaciones para empresas cuyo trabajo está lleno de reglas, formularios y datos que no pueden salir de donde deben estar. Con el mismo criterio con el que construimos nuestro propio producto.',
    primary: 'Contar tu caso · 20 min',
    secondary: 'Ver cómo trabajamos',
    note: 'Sin costo · sin compromiso',
  },

  build: {
    eyebrow: 'Qué construimos',
    title: 'Cuatro formas de resolver el mismo problema.',
    intro:
      'Casi siempre el problema es el mismo: la información existe, pero está repartida entre hojas de cálculo, correos y la cabeza de dos personas.',
    items: [
      {
        title: 'Plataformas especializadas',
        text: 'El sistema que tu sector necesita y que ningún producto de catálogo cubre: los formularios oficiales, las reglas de tu normativa y los permisos por tipo de usuario.',
      },
      {
        title: 'Tableros conectados a tus datos',
        text: 'Indicadores que se actualizan solos desde tus propios sistemas, en lugar de una hoja de cálculo que alguien rearma cada mes.',
      },
      {
        title: 'Automatización de reportes y documentos',
        text: 'Lo que hoy es copiar, pegar, revisar y enviar pasa a hacerse solo, con firma electrónica cuando el documento lo exige.',
      },
      {
        title: 'Integraciones',
        text: 'Conectamos lo que ya usas —facturación, contabilidad, inventario— para que dejen de ser islas y los datos dejen de teclearse dos veces.',
      },
    ],
  },

  /* SUPUESTO — el proceso de abajo es el que aplicamos en KLINODA, adaptado a
     un proyecto de cliente. La cadencia concreta («cada dos semanas hay algo
     que puedes abrir») es un compromiso que sí se puede sostener, pero
     conviene aprobarlo antes de publicarlo como promesa.
     Es la pregunta 3 de `docs/preguntas-richard.md`. */
  process: {
    eyebrow: 'Cómo trabajamos',
    title: 'Ves el sistema antes de que exista.',
    intro:
      'El mayor riesgo de un proyecto de software no es técnico: es construir con precisión algo que no era lo que hacía falta. Por eso el proceso empieza enseñando y no programando.',
    steps: [
      {
        step: '01',
        when: 'Semana 1',
        title: 'Descubrimiento',
        text: 'Dos o tres sesiones para entender el proceso real, el que ocurre todos los días, no el que describe el manual. Salimos con el alcance escrito, los riesgos identificados y una estimación.',
        gives: 'Lo que recibes: el alcance por escrito y una propuesta con precio.',
      },
      {
        step: '02',
        when: 'Semanas 2 y 3',
        title: 'Prototipo navegable',
        text: 'Antes de escribir el sistema ves las pantallas y las recorres con tu propio caso. Cambiar una pantalla aquí cuesta una tarde; cambiarla con el sistema construido cuesta semanas.',
        gives: 'Lo que recibes: un prototipo que puedes abrir, recorrer y criticar.',
      },
      {
        step: '03',
        when: 'Según el alcance',
        title: 'Construcción por entregas',
        text: 'Cada dos semanas hay una versión que puedes abrir y usar. Nunca hay meses de silencio ni un estreno final donde todo se descubre a la vez.',
        gives: 'Lo que recibes: versiones periódicas y acceso al avance en todo momento.',
      },
      {
        step: '04',
        when: 'Al terminar',
        title: 'Puesta en marcha',
        text: 'Migración de la información que ya tienes, capacitación a quien lo va a usar y acompañamiento durante las primeras semanas de uso real, que son las que de verdad prueban un sistema.',
        gives: 'Lo que recibes: el sistema en producción y a tu equipo sabiendo usarlo.',
      },
      {
        step: '05',
        when: 'Después',
        title: 'Soporte y evolución',
        text: 'La normativa cambia, el negocio cambia y el sistema tiene que seguirlos. El soporte es un acuerdo aparte, con tiempos de respuesta escritos.',
        gives: 'Lo que recibes: correcciones, mejoras y adaptaciones a cambios de norma.',
      },
    ],
  },

  guarantees: {
    eyebrow: 'Las garantías',
    title: 'Lo que nos obliga a nosotros.',
    intro: 'Cuatro compromisos que se pueden comprobar, no cuatro adjetivos.',
    items: [
      {
        title: 'El código es tuyo',
        text: 'Al terminar, el repositorio, la documentación y las credenciales quedan a tu nombre. Si algún día decides seguir con otro equipo, puedes hacerlo. No trabajamos atando clientes.',
      },
      {
        title: 'Probamos lo que construimos',
        text: 'Pruebas automáticas en cada cambio. Si algo se rompe, falla la compilación antes de llegar a producción y no lo descubre tu equipo un lunes por la mañana.',
      },
      {
        title: 'Privacidad por diseño',
        text: 'Lo que un usuario no debe ver no sale de la base de datos. La regla vive en el modelo de datos y no en la pantalla, que es donde se rompe.',
      },
      {
        title: 'Decisiones por escrito',
        text: 'Cada decisión relevante queda en un acta con su motivo y sus alternativas. Dentro de dos años se podrá saber por qué el sistema es como es.',
      },
    ],
  },

  /* La prueba. Una sola franja y con enlace a la página del producto: aquí no
     se cuenta KLINODA entera, se usa como evidencia de capacidad. */
  proof: {
    eyebrow: 'La prueba',
    title: 'No lo decimos: lo construimos.',
    text: 'KLINODA es nuestra plataforma para medicina ocupacional en Ecuador. Digitaliza un trámite obligatorio lleno de reglas, formularios oficiales y datos clínicos que la empresa no puede ver, y lo deja resuelto en minutos. Lo que ofrecemos como servicio es exactamente lo que aplicamos en nuestro propio producto.',
    facts: [
      { value: '2.300+', label: 'pruebas automáticas' },
      { value: '13', label: 'actas de decisión' },
      { value: '5,1 s', label: 'para emitir 50 certificados firmados' },
    ],
    cta: 'Conocer KLINODA',
  },

  /* SUPUESTO — mismas seis preguntas que en la otra página: son las que yo
     esperaría de un comprador de software a medida, no las que hemos
     escuchado. Ninguna respuesta compromete precio ni plazo. */
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Lo que preguntan antes de empezar.',
    items: [
      {
        q: '¿Cuánto cuesta un proyecto?',
        a: 'Depende del alcance, y por eso no damos una cifra antes de entenderlo. Del descubrimiento sale una propuesta con alcance cerrado y precio cerrado: sabes qué vas a recibir y cuánto cuesta antes de comprometer nada.',
      },
      {
        q: '¿Cuánto tarda?',
        a: 'Un tablero conectado a tus datos se mide en semanas. Una plataforma completa, en meses. La estimación concreta sale del descubrimiento, con las entregas intermedias fechadas.',
      },
      {
        q: '¿Sirve si ya tengo sistemas?',
        a: 'Sí, y suele ser el caso. Casi nunca hay que reemplazarlo todo: lo habitual es integrar lo que ya funciona y construir solo lo que falta.',
      },
      {
        q: '¿Dónde quedan alojados los datos?',
        a: 'Donde tu operación y tu normativa lo exijan; se decide contigo antes de construir y queda escrito. No es una decisión que tomemos por conveniencia técnica.',
      },
      {
        q: '¿Qué pasa si dejamos de trabajar juntos?',
        a: 'Te quedas con el código, la documentación y los accesos. La documentación se escribe pensando en que la lea otro equipo, no en que solo la entendamos nosotros.',
      },
      {
        q: '¿Trabajan con empresas fuera de Ecuador?',
        a: 'Sí. El equipo técnico está en Alemania y trabajamos en español, inglés y alemán.',
      },
    ],
  },

  cta: {
    eyebrow: 'Siguiente paso',
    title: 'Cuéntanos el proceso que hoy te duele.',
    text: 'Veinte minutos para entender qué haces a mano, qué te cuesta y si tiene sentido automatizarlo. Sin compromiso.',
    primary: 'Agendar una conversación',
    secondary: 'Escribir a CJM Nexus',
  },
};
