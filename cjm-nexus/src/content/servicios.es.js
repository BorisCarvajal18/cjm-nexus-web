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
      title: 'Páginas web y sistemas a medida',
      text: 'Tu página web profesional publicada en menos de una semana. Y, cuando el negocio lo pide, el sistema completo con el que trabaja la empresa todos los días.',
      items: [
        'Página web a medida, publicada en días',
        'Plataformas especializadas por sector',
        'Tableros conectados a tus datos',
        'Automatización de reportes y documentos',
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
     El arranque ya está confirmado por el dueño (5-sep-2026): el primer paso
     es una conversación estratégica sobre el negocio, no una revisión de doce
     meses de estados financieros ni una reunión con el contador del cliente.
     LO QUE SIGUE SIN CONFIRMAR son los plazos —semana 1, semana 2, semanas 3
     y 4— y si la reunión de dirección es mensual o de otra periodicidad.
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
        title: 'Conversación estratégica',
        text: 'Nos sentamos a hablar de tu negocio en serio: qué vendes, cómo lo vendes, qué te cuesta y a dónde quieres llegar. Con eso y con la información financiera que ya tienes, empezamos. No pedimos acceso a tus cuentas bancarias ni movemos dinero.',
        gives: 'Lo que pones tú: la información que ya existe y una conversación a fondo sobre tu empresa.',
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
        'Buscas quien lleve la contabilidad y presente los impuestos: eso lo hace tu contador. Lo nuestro es lo que viene después.',
        'Necesitas resolver una urgencia de caja esta semana: un diagnóstico no reemplaza a un crédito.',
        'No hay disposición a tomar decisiones incómodas cuando los números las señalen.',
      ],
    },
  },

  /* SUPUESTO — las seis preguntas de abajo son las que yo esperaría, no las
     que Richard escucha de verdad en sus reuniones. Las respuestas son
     conservadoras a propósito: ninguna promete plazo ni resultado, y la del
     precio no lleva cifra por decisión del dueño —los números se hablan en la
     reunión, nunca en la web.
     Es la pregunta 2 de `docs/preguntas-richard.md`. */
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Lo que preguntan antes de empezar.',
    items: [
      {
        q: '¿Esto reemplaza a mi contador?',
        a: 'No, y no debería. El contador registra lo que ya pasó y cumple con lo que exige la ley. La dirección financiera interpreta esa información y la convierte en decisiones hacia adelante. Son dos trabajos distintos: el nuestro empieza donde termina el suyo.',
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
        q: '¿Cuánto cuesta?',
        a: 'Depende del tamaño de tu empresa y de hasta dónde llegue el trabajo, así que lo vemos en el diagnóstico ejecutivo en lugar de poner una tarifa aquí. De esa conversación sale una propuesta concreta, y decidir después no cuesta nada.',
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

   DOS OFERTAS EN UNA PÁGINA, Y EN ESTE ORDEN. Decisión del dueño el 5 de
   septiembre de 2026, después de que el primer borrador describiera solo los
   sistemas a medida.

   Primero la página web, porque es lo que la firma entrega hoy y porque su
   argumento —publicada en menos de una semana— es el más fuerte que tiene
   esta página entera. Segundo los sistemas a medida, para quien llegue
   buscando algo del tamaño de KLINODA.

   NO HAY NINGÚN CLIENTE DE PÁGINAS WEB TODAVÍA, y por eso aquí no aparece ni
   un portafolio, ni un número, ni un testimonio. La prueba son KLINODA y esta
   misma web, que es de verdad y se puede mirar. Cuando existan los primeros
   clientes, esta página tendrá un sitio evidente donde ponerlos.
   ───────────────────────────────────────────────────────────────────── */
export const digital = {
  meta: {
    title: 'Páginas web y sistemas a medida | CJM Nexus',
    description:
      'Tu página web profesional publicada en menos de una semana, y sistemas a medida para operaciones con normativa, documentos oficiales y datos sensibles.',
  },

  hero: {
    eyebrow: 'Servicio 02 · Soluciones digitales',
    title: 'Tu web publicada en una semana. Y el sistema que venga después.',
    highlight: ['en', 'una', 'semana.'],
    lead: 'Dos formas de trabajar con nosotros. Una página web profesional, hecha a tu medida y publicada en días. Y, cuando el negocio lo pide, sistemas completos para operaciones llenas de reglas, documentos oficiales y datos que no pueden salir de donde deben estar.',
    primary: 'Contar tu caso · 20 min',
    secondary: 'Ver las dos formas',
    note: 'Sin costo · sin compromiso',
  },

  /* ── OFERTA 01 · LA PÁGINA WEB ───────────────────────────────────── */
  web: {
    marker: '01',
    eyebrow: 'Lo primero',
    title: 'Una página web que no parece una plantilla.',
    text: 'Hecha para tu empresa, con tus textos, tu marca y tu forma de vender. No un tema comprado con el logotipo cambiado, que es lo que se reconoce a la primera y lo que hace que un cliente dude antes de escribir.',

    /* QUÉ ENTRA. Confirmado por el dueño el 5 de septiembre de 2026: el
       dominio, el alojamiento y el mantenimiento van dentro de lo que paga
       el cliente, no como gastos sueltos que tenga que ir contratando.

       DOMINIO Y ALOJAMIENTO INCLUIDOS PERO A SU NOMBRE. Las dos cosas a la
       vez, y no se contradicen: nos ocupamos nosotros y él no tiene que
       hablar con nadie, pero el registro es de su empresa. Si algún día se
       va con otro proveedor, se lleva su web sin pedirnos permiso, que es
       justo lo que promete la sección de garantías.

       NINGÚN PRECIO EN LA WEB. Decisión del dueño: los números se hablan en
       la reunión. Por eso la pregunta «¿cuánto cuesta?» está respondida sin
       una sola cifra, que es distinto de esquivarla. */
    includesLabel: 'Qué incluye',
    includes: [
      'Diseño propio, no una plantilla con el logotipo cambiado',
      'Se ve bien en el teléfono, que es por donde te van a mirar',
      'Textos redactados o corregidos con vosotros',
      'Formulario de contacto y enlace directo a WhatsApp',
      'Preparada para que Google la lea bien',
      'Dominio y alojamiento incluidos, y a nombre de tu empresa',
      'Mantenimiento: nos ocupamos de que siga en línea y al día',
    ],

    stepsLabel: 'Cómo va',
    steps: [
      {
        step: '01',
        when: 'Día 1',
        title: 'Nos cuentas',
        text: 'Una conversación para entender a qué te dedicas, a quién le vendes y qué quieres que pase cuando alguien entre en tu web. De ahí salen las secciones que va a tener y qué dice cada una.',
        gives: 'Lo que recibes: la estructura de tu web por escrito, antes de que exista.',
      },
      {
        step: '02',
        when: 'Los días siguientes',
        title: 'La construimos y la ves',
        text: 'La programamos y te la enseñamos funcionando, no en un dibujo. Nos dices qué cambiar y lo cambiamos sobre algo que ya puedes abrir en tu teléfono.',
        gives: 'Lo que recibes: un enlace para verla y todas las correcciones que haga falta.',
      },
      {
        step: '03',
        when: 'Menos de una semana',
        title: 'Publicada',
        text: 'Tu web en internet, con tu dominio y todo a nombre de tu empresa. A partir de ahí nos ocupamos de que siga funcionando: tú no tienes que hablar con ninguna empresa de alojamiento ni acordarte de renovar nada.',
        gives: 'Lo que recibes: la web en línea, los accesos en tu poder y el mantenimiento cubierto.',
      },
    ],

    /* LA LETRA PEQUEÑA VA A LA VISTA, y no por escrúpulo: es lo que hace
       creíble la promesa. «En una semana» sin condición suena a folleto;
       «en una semana desde que tenemos tus textos y tu logotipo» suena a
       alguien que ya lo ha hecho y sabe dónde se atasca. */
    note: 'La semana empieza a contar cuando tenemos lo tuyo: textos, logotipo e imágenes. Si aún no los tienes, te ayudamos a prepararlos, y eso lleva su tiempo aparte.',
  },

  /* ── OFERTA 02 · LOS SISTEMAS ────────────────────────────────────── */
  systems: {
    marker: '02',
    eyebrow: 'Cuando hace falta más',
    title: 'Sistemas a medida para operaciones con reglas.',
    text: 'Cuando lo que hace falta no es una web sino el sistema con el que trabaja la empresa todos los días. Es lo que construimos en KLINODA: formularios oficiales, permisos por tipo de usuario, documentos firmados y datos que solo puede ver quien debe.',
    items: [
      {
        title: 'Plataformas especializadas',
        text: 'El sistema que tu sector necesita y que ningún producto de catálogo cubre: tus formularios, tus reglas y quién puede ver qué.',
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

    stepsLabel: 'Cómo va',
    steps: [
      {
        step: '01',
        when: 'Al principio',
        title: 'Entender el proceso real',
        text: 'Dos o tres sesiones para ver cómo trabajáis de verdad todos los días, no cómo lo describe el manual. Salimos con el alcance escrito y una propuesta con precio.',
        gives: 'Lo que recibes: el alcance por escrito y el precio, antes de comprometer nada.',
      },
      {
        step: '02',
        when: 'Desde las primeras semanas',
        title: 'Lo ves funcionando',
        text: 'Programamos y te lo enseñamos. Tienes un enlace donde entras y pruebas lo que ya está construido, con datos de prueba. Vas corrigiendo sobre algo que se puede tocar, no sobre un documento. No hay meses de silencio ni un estreno final donde todo se descubre a la vez.',
        gives: 'Lo que recibes: acceso al sistema en construcción desde el primer mes.',
      },
      {
        step: '03',
        when: 'Al terminar',
        title: 'Puesta en marcha',
        text: 'Pasamos la información que ya tenéis, enseñamos a usarlo a quien lo va a usar y acompañamos las primeras semanas de uso real, que son las que de verdad prueban un sistema.',
        gives: 'Lo que recibes: el sistema en marcha y a tu equipo sabiendo usarlo.',
      },
      {
        step: '04',
        when: 'Después',
        title: 'Soporte y cambios',
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
        title: 'Todo queda a tu nombre',
        text: 'El dominio, los accesos, el código y la documentación son de tu empresa. Si algún día decides seguir con otro equipo, puedes hacerlo sin pedirnos permiso. No trabajamos atando clientes.',
      },
      {
        title: 'Probamos lo que construimos',
        text: 'Pruebas automáticas en cada cambio. Si algo se rompe, falla antes de llegar a producción y no lo descubre tu equipo un lunes por la mañana.',
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

  /* La prueba. Sin clientes de páginas web todavía, las dos únicas pruebas
     honestas son el producto propio y esta misma web. Y funcionan: quien
     está leyendo esto ya está dentro de una de ellas. */
  proof: {
    eyebrow: 'La prueba',
    title: 'No lo decimos: lo construimos.',
    text: 'KLINODA es nuestra plataforma para medicina ocupacional en Ecuador: digitaliza un trámite obligatorio lleno de reglas, formularios oficiales y datos clínicos que la empresa no puede ver. Y esta misma web, la que estás leyendo, la hicimos nosotros con el mismo criterio con el que haríamos la tuya.',
    facts: [
      { value: '2.300+', label: 'pruebas automáticas en KLINODA' },
      { value: '13', label: 'actas de decisión' },
      { value: '5,1 s', label: 'para emitir 50 certificados firmados' },
    ],
    cta: 'Conocer KLINODA',
  },

  /* SUPUESTO — dos de estas respuestas comprometen cosas que hay que
     confirmar: qué entra en el precio de una web y quién paga el dominio y el
     alojamiento. Están en la pregunta 3 de `docs/preguntas-richard.md`. */
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Lo que preguntan antes de empezar.',
    items: [
      {
        q: '¿De verdad en una semana?',
        a: 'Sí, y la condición está a la vista: la semana empieza a contar cuando tenemos tus textos, tu logotipo y tus imágenes. Con eso en la mano, tu web está publicada en menos de siete días. Lo que suele alargar un proyecto no es programar, es esperar el material.',
      },
      {
        q: '¿Qué necesitáis de mí?',
        a: 'Tu logotipo, las imágenes que quieras usar y una conversación sobre tu empresa. Los textos los podemos escribir nosotros a partir de esa conversación y tú los corriges; no hace falta que llegues con nada redactado.',
      },
      {
        q: '¿El dominio y el alojamiento son aparte?',
        a: 'No, van incluidos. Nos ocupamos nosotros de contratarlos y mantenerlos, y quedan registrados a nombre de tu empresa. Las dos cosas a la vez: tú no hablas con nadie, y si algún día decides seguir con otro equipo, te llevas tu web sin pedirnos permiso.',
      },
      {
        q: '¿Voy a salir en Google?',
        a: 'La construimos para que un buscador la entienda: velocidad, estructura correcta y cada página con su título y su descripción. Aparecer de primero en una búsqueda competida es otro trabajo, más largo, y nadie serio te lo garantiza en una semana.',
      },
      {
        q: '¿Quién la mantiene después?',
        a: 'Nosotros. El mantenimiento va incluido: que siga en línea, actualizada y segura, y los cambios que vayas necesitando. No te dejamos con la web publicada y a ver qué pasa, que es donde se cae la mayoría.',
      },
      {
        q: '¿Cuánto cuesta?',
        a: 'Depende de lo que necesites, y por eso lo hablamos en la reunión en vez de poner una tarifa aquí. Son veinte minutos, sales con una propuesta cerrada y sin sorpresas después.',
      },
      {
        q: '¿Y si lo que necesito es un sistema, no una web?',
        a: 'Entonces el camino es el otro: empezamos entendiendo tu proceso real, sale un alcance escrito con precio, y desde las primeras semanas puedes entrar a probar lo que llevamos construido. Eso se mide en meses, no en días, y lo decimos desde el principio.',
      },
      {
        q: '¿Trabajáis con empresas fuera de Ecuador?',
        a: 'Sí. El equipo técnico está en Alemania y trabajamos en español, inglés y alemán.',
      },
    ],
  },

  cta: {
    eyebrow: 'Siguiente paso',
    title: 'Cuéntanos qué necesitas y te decimos cuánto tarda.',
    text: 'Veinte minutos para saber si lo tuyo es una web en una semana o un sistema de varios meses. Sin compromiso.',
    primary: 'Agendar una conversación',
    secondary: 'Escribir a CJM Nexus',
  },
};
