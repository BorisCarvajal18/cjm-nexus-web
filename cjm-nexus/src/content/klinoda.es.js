/**
 * Textos de la página de KLINODA — /es/klinoda
 *
 * ── LAS SEIS REGLAS DE ESTA PÁGINA ──────────────────────────────────────
 *
 * Están acordadas con el dueño y no son de estilo: son las que evitan que la
 * firma diga en público algo que todavía no puede sostener.
 *
 *  1. NINGUNA PANTALLA CON DATOS DE PACIENTE, ni siquiera inventados. La
 *     única interfaz que se enseña es el portal de empresa, que por diseño no
 *     contiene un solo dato clínico: cargo, tipo de evaluación y aptitud. Sin
 *     nombres, ni reales ni ficticios.
 *  2. NINGUNA AFIRMACIÓN DE VALIDEZ LEGAL O SANITARIA. Se dice lo que el
 *     sistema hace, nunca que cumple una norma o que un documento es válido.
 *     Eso lo dictamina un abogado, no una página web.
 *  3. NINGUNA FECHA DE LANZAMIENTO. No hay ninguna comprometida, y anunciar
 *     una que luego se mueve cuesta más que no anunciar nada.
 *  4. NINGÚN NOMBRE de los profesionales que acompañan el proyecto.
 *  5. NADA DE BLOQUEOS, RIESGOS NI DETALLES DE SEGURIDAD. Una lista de lo que
 *     falta es un documento interno; publicarla no es transparencia, es dar
 *     material a quien no debe tenerlo.
 *  6. EL ESTADO SE DICE, Y SE DICE PRIMERO: «Demo · en desarrollo · datos
 *     ficticios». Lo que falta no se lista. Ocultarlo sería mentir; contarlo bien es el mejor
 *     argumento que tiene la página, porque casi nadie trabaja así.
 *
 * DOS PERSONAS, DOS MENSAJES (reglas 7, 8 y 9 de PRODUCT.md, 15 y 18 de
 * septiembre de 2026). KLINODA es una empresa del Grupo CJM Nexus, nunca
 * «producto propio». Su cliente es la empresa: a ella se le habla de orden y
 * tranquilidad, diciendo lo que el sistema hace, nunca que cumple una norma.
 * El médico ocupacional es usuario y quien la recomienda: a él se le habla de
 * una herramienta que le quita trabajo. Nunca «plataforma para médicos».
 * TEXTOS POR APROBAR: todos los reescritos el 18-sep-2026 (ver
 * .impeccable/CONSTRUCCION.md).
 *
 * Las cifras están comprobadas en el repositorio del producto el 5 de
 * septiembre de 2026: 2.382 pruebas automáticas, 13 actas de decisión, y los
 * 50 certificados firmados en 5,1 segundos medidos en el acta 0012. Si alguna
 * cambia, se cambia aquí y en ningún otro sitio.
 */
export const klinoda = {
  meta: {
    title: 'KLINODA · Salud ocupacional para empresas | CJM Nexus',
    description:
      'KLINODA, empresa del Grupo CJM Nexus, ordena la salud ocupacional de las empresas en Ecuador: la empresa ve qué trabajadores están aptos y qué certificados vencen, y lo clínico nunca llega a ella.',
  },

  hero: {
    eyebrow: 'Empresa del Grupo CJM Nexus',
    title: 'La salud ocupacional de tu empresa, en orden y a la vista.',
    highlight: ['orden', 'vista.'],
    lead: 'KLINODA ordena la salud ocupacional de las empresas en Ecuador. La empresa ve qué trabajadores están aptos y qué certificados vencen. El médico ocupacional hace la evaluación por bloques y el certificado sale firmado electrónicamente. Lo clínico nunca llega a la empresa.',
    primary: 'Hablar de KLINODA · 20 min',
    secondary: 'Ver cómo funciona',
    note: 'Demo · en desarrollo · datos ficticios',
  },

  /* EL ESTADO VA ARRIBA, no escondido al final. Un producto en piloto que lo
     dice en la primera pantalla se lee como una firma seria; el mismo
     producto con esa información enterrada, como alguien a quien pillaron. */
  status: {
    label: 'Dónde está hoy',
    text: 'KLINODA es una demo en desarrollo y trabaja exclusivamente con datos ficticios. No atiende a personas reales. Es una decisión, no una limitación técnica: el propio sistema se niega a arrancar si alguien intenta autorizar datos reales cambiando la configuración.',
  },

  problem: {
    eyebrow: 'El problema',
    title: 'Un trámite obligatorio, lleno de reglas y hecho a mano.',
    text: 'Cada trabajador necesita su evaluación y su certificado de aptitud, con formulario oficial y un vencimiento. En muchas empresas eso vive entre correos, documentos de Word y el archivador del consultorio. Funciona, hasta que hay veinte trabajadores el mismo día o alguien pregunta qué certificados vencen este mes.',
    items: [
      {
        title: 'Se copia y se pega',
        text: 'La misma información se teclea varias veces, en varios documentos, y cada copia es una oportunidad de equivocarse.',
      },
      {
        title: 'Nadie sabe quién vio qué',
        text: 'Un expediente en una carpeta compartida no deja rastro. Si alguien abrió lo que no debía, no hay forma de saberlo.',
      },
      {
        title: 'Lo clínico se mezcla con lo laboral',
        text: 'El expediente completo y el certificado de aptitud viajan juntos, y acaban llegando a quien solo necesitaba saber si la persona puede trabajar.',
      },
    ],
  },

  how: {
    eyebrow: 'Cómo funciona',
    title: 'Cuatro pasos, y el último es el que importa.',
    intro:
      'El recorrido completo, desde que una empresa pide la evaluación hasta que recibe la respuesta que necesita.',
    steps: [
      {
        step: '01',
        when: 'La empresa',
        title: 'Solicita la evaluación',
        text: 'La empresa registra a quién hay que evaluar y por qué motivo: ingreso, periódica, cambio de puesto o salida. No entra a ningún expediente: solo pide.',
        gives: 'Queda registrado quién pidió qué y cuándo.',
      },
      {
        step: '02',
        when: 'El médico',
        title: 'Completa la evaluación por bloques',
        text: 'El formulario oficial dividido en secciones, con las reglas del propio formulario aplicadas mientras se escribe. Lo que ya está en el sistema no se vuelve a teclear.',
        gives: 'Una evaluación completa, sin copiar y pegar entre documentos.',
      },
      {
        step: '03',
        when: 'El sistema',
        title: 'Emite el certificado firmado',
        text: 'El certificado se genera y se firma electrónicamente. Cuando hay una tanda entera que emitir, se emite entera: cincuenta certificados firmados tardan poco más de cinco segundos.',
        gives: 'El documento, firmado, sin pasar por un procesador de textos.',
      },
      {
        step: '04',
        when: 'La empresa, otra vez',
        title: 'Ve la aptitud, y solo la aptitud',
        text: 'En su portal aparece el cargo, el tipo de evaluación y si la persona es apta. El diagnóstico, los antecedentes y los exámenes no están ahí: no es que estén ocultos, es que la consulta no los pide.',
        gives: 'La respuesta que la empresa necesita, sin la información que no le corresponde.',
      },
    ],
  },

  /* EL MENSAJE PARA EL MÉDICO OCUPACIONAL (regla 7). No es el cliente: usa
     KLINODA y puede proponerla en las empresas donde trabaja. */
  medico: {
    eyebrow: 'Para el médico ocupacional',
    title: 'Una herramienta que te quita trabajo, y que puedes recomendar.',
    intro:
      'KLINODA la contrata la empresa. Tú la usas para hacer tus evaluaciones, y puedes proponerla en las empresas donde las haces.',
    items: [
      {
        title: 'Por bloques, sin copiar y pegar',
        text: 'El formulario oficial dividido en secciones. Lo que ya está en el sistema no se vuelve a teclear.',
      },
      {
        title: 'El certificado, sin procesador de textos',
        text: 'Sale firmado electrónicamente, uno o una tanda entera, sin montar cada documento a mano.',
      },
      {
        title: 'Lo clínico se queda contigo',
        text: 'La empresa ve la aptitud y nada más. El resto no llega a su pantalla porque la consulta no lo pide.',
      },
    ],
  },

  /* LA REGLA DE PRIVACIDAD, ENSEÑADA EN LUGAR DE EXPLICADA. Es lo que mejor
     vende del producto y lo que mejor vende de la firma, porque es la misma
     forma de trabajar que ofrecemos como servicio. */
  privacy: {
    eyebrow: 'La regla que lo define',
    title: 'Lo que la empresa no debe ver, no sale de la base de datos.',
    text: 'La regla de privacidad no vive en la pantalla, donde se rompe en cuanto alguien cambia una plantilla o abre una dirección a mano. Vive en la consulta: el portal de empresa pide una lista cerrada de campos, y ninguno de ellos es clínico. Además hay una prueba automática cuyo único trabajo es fallar si algún día se cuela uno.',
    /* El pie de la tarjeta y sus filas viven en `mockup`. Cargos genéricos y
       ningún nombre: una lista de personas, aunque fueran inventadas, se
       parecería demasiado a un expediente de verdad. */
    mockup: {
      title: 'Portal de empresa',
      subject: 'Vista de aptitud',
      columns: ['Cargo', 'Evaluación', 'Aptitud'],
      rows: [
        // Las etiquetas reales del portal de empresa de KLINODA (revisado en su
        // repositorio para la ronda 5 de la portada).
        ['Operador de planta', 'PERIÓDICO', 'ok', 'APTO'],
        ['Supervisora de turno', 'INGRESO', 'ok', 'APTO'],
        ['Conductor', 'PERIÓDICO', 'warn', 'APTO EN OBSERVACIÓN'],
      ],
      foot: 'Diagnósticos, antecedentes y exámenes no existen en esta vista.',
    },
    points: [
      {
        title: 'Cada acceso deja rastro',
        text: 'Quién entró, qué consultó y cuándo. Un expediente en una carpeta compartida no puede decir eso.',
      },
      {
        title: 'Cada rol ve lo suyo',
        text: 'Médico, asistente y empresa no ven la misma pantalla, y no porque se les esconda: porque el sistema les entrega cosas distintas.',
      },
    ],
  },

  built: {
    eyebrow: 'Cómo está construido',
    title: 'La parte que no se ve, que es la que decide si un sistema aguanta.',
    items: [
      {
        display: '2.300+',
        label: 'pruebas automáticas',
        note: 'Se ejecutan en cada cambio, antes de que nada llegue a producción',
        gradient: 'bg-g-teal',
      },
      {
        display: '13',
        label: 'actas de decisión',
        note: 'Cada decisión relevante, con su motivo y sus alternativas',
        gradient: 'bg-g-navy',
      },
      {
        display: '5,1 s',
        label: 'para emitir 50 certificados firmados',
        note: 'Medido en la demo, con datos ficticios',
        gradient: 'bg-g-copper',
      },
      {
        display: '0',
        label: 'datos reales en el sistema',
        note: 'Y no arranca si alguien intenta cambiarlo por configuración',
        gradient: 'bg-g-brand',
      },
    ],
  },

  fit: {
    eyebrow: 'Para qué empresa es',
    title: 'A qué empresa le sirve y a cuál no.',
    yes: {
      title: 'Tiene sentido si',
      items: [
        'Tus trabajadores necesitan evaluaciones de ingreso, periódicas o de salida, y hoy las sigues con correos y hojas de cálculo.',
        'Quieres saber qué certificados vencen antes de que venzan.',
        'Necesitas saber si cada persona está apta para su puesto sin recibir información clínica que no te corresponde.',
        'Envías varios trabajadores a evaluar el mismo día.',
      ],
    },
    no: {
      title: 'No es lo tuyo si',
      items: [
        'Buscas un sistema de historia clínica general: KLINODA hace salud ocupacional y nada más.',
        'Necesitas ponerlo a trabajar con personas reales de inmediato. Hoy es una demo con datos ficticios, y esa decisión no se salta por un cliente.',
      ],
    },
  },

  /* La franja que devuelve a la firma: quien llega desde fuera tiene que
     salir sabiendo quién construye la plataforma. */
  company: {
    eyebrow: 'Quién construye su plataforma',
    title: 'El mismo criterio, para tu empresa.',
    text: 'La plataforma de KLINODA la construye CJM Nexus, la firma del grupo que hace software a medida. Las actas, las pruebas y la privacidad escrita en el modelo de datos son la forma en que trabajamos también cuando el sistema es de un cliente.',
    cta: 'Ver soluciones digitales',
  },

  cta: {
    eyebrow: 'Siguiente paso',
    title: 'Veinte minutos para ver KLINODA con los ojos de tu empresa.',
    text: 'Te enseñamos cómo funciona, con datos ficticios, y nos cuentas cómo lleváis hoy la salud ocupacional. Si eres médico ocupacional, también queremos escucharte.',
    primary: 'Agendar una conversación',
    secondary: 'Escribir a CJM Nexus',
  },
};

export default klinoda;
