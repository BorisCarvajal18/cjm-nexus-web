/**
 * Textos de la página «Nosotros» — /es/nosotros (pieza 12).
 *
 * POR QUÉ EXISTE: la portada nombra a tres personas y hasta ahora no había
 * dónde conocerlas. Quien va a confiarnos sus finanzas o la salud ocupacional
 * de su empresa quiere saber quién está detrás.
 *
 * ── LO QUE ESTA PÁGINA NO DICE, A PROPÓSITO ─────────────────────────────
 *  · Nada de la relación familiar entre las personas del equipo.
 *  · Nada de quién dirige la plataforma de KLINODA: la construye CJM Nexus,
 *    y nada más. Tampoco nada de la médica aliada.
 *  · Ni el año ni el lugar de constitución de la firma.
 *  · Ningún dato biográfico que no esté confirmado. Los huecos están
 *    marcados con `HUECO` y listados en .impeccable/CONSTRUCCION.md
 *    (pieza 12): se rellenan, no se inventan.
 *
 * LAS CIFRAS DE TRAYECTORIA SON DE RICHARD y van en su ficha, con su nombre
 * (regla 2 de PRODUCT.md): más de 15 años en dirección financiera y más de
 * 100 clientes asesorados en Latinoamérica, Estados Unidos y Europa.
 *
 * SIN FOTOS TODAVÍA. Cada persona trae `retrato: null`. La página se lee
 * completa sin ninguno; cuando haya retratos, basta con rellenar `src` y
 * `alt` y aparecen en su sitio. Nada de fotos de archivo de personas.
 *
 * Español latinoamericano, tuteo al lector (regla 10 de PRODUCT.md).
 * Los huecos (`HUECO`) son datos que faltan de verdad: se rellenan, no se
 * inventan, y sin dato no se pinta nada.
 */
export const nosotros = {
  meta: {
    title: 'Nosotros: quién está detrás de CJM Nexus | CJM Nexus',
    description:
      'Las personas que dirigen CJM Nexus: Richard Carvajal en dirección financiera, Boris Carvajal en tecnología y Mirella Llanga en la gerencia general. Equipo en Ecuador y Alemania.',
  },

  /* La cabecera de la página (mismas claves que `PageHero`). */
  hero: {
    eyebrow: 'Nosotros',
    title: 'Quién está detrás de CJM Nexus.',
    highlight: ['detrás'],
    lead: 'Una firma de dos líneas —dirección financiera externa y soluciones digitales— con equipo en Ecuador y Alemania. Estas son las tres personas que la dirigen, con su nombre y lo que hace cada una.',
    primary: 'Agendar diagnóstico ejecutivo · 20 min',
    secondary: 'Conocer al equipo',
    secondaryHref: '#personas',
  },

  /* Las tres fichas. Mismo orden que la firma de la portada. Cada ficha:
     nombre, cargo, una línea de lo que lidera, dónde está y el enlace a su
     LinkedIn. Solo Richard lleva cifras: son su trayectoria. */
  personas: {
    etiqueta: 'El equipo',
    titulo: 'Tres personas, cada una con lo suyo.',
    retratoPendiente: 'Retrato pendiente',
    linkedin: 'LinkedIn',
    items: [
      {
        id: 'richard',
        nombre: 'Richard Carvajal',
        cargo: 'Fundador · Dirección financiera',
        lidera: 'Lidera la dirección financiera de CJM Nexus: el diagnóstico, el tablero de cada mes y la reunión de dirección.',
        cifras: [
          { valor: '15+', que: 'años en dirección financiera' },
          { valor: '100+', que: 'clientes asesorados en Latinoamérica, Estados Unidos y Europa' },
        ],
        base: 'Ecuador',
        // HUECO — trayectoria (cargos, sectores) y formación: «no por ahora».
        trayectoria: null,
        // HUECO — enlace a su perfil de LinkedIn.
        linkedinHref: null,
        // Previsto: retrato. { src: '/equipo/richard.jpg', alt: 'Retrato de Richard Carvajal' }
        retrato: null,
      },
      {
        id: 'boris',
        nombre: 'Boris Carvajal',
        cargo: 'Cofundador · Tecnología',
        lidera: 'Lidera la tecnología de CJM Nexus: las páginas web, los sistemas a medida y los tableros conectados a los datos de cada empresa.',
        cifras: [],
        base: 'Alemania',
        // HUECO — trayectoria, formación e idiomas: «no por ahora».
        trayectoria: null,
        // HUECO — enlace a su perfil de LinkedIn.
        linkedinHref: null,
        // Previsto: retrato. { src: '/equipo/boris.jpg', alt: 'Retrato de Boris Carvajal' }
        retrato: null,
      },
      {
        id: 'mirella',
        nombre: 'Mirella Llanga',
        cargo: 'Gerente general',
        // Qué hace en concreto: dado por Boris el 18-sep-2026.
        lidera: 'Lidera la gerencia general de CJM Nexus: la operación de la firma y la coordinación entre sus dos líneas.',
        cifras: [],
        // HUECO — desde dónde trabaja: «no por ahora». Sin dato, no se pinta.
        base: null,
        // HUECO — trayectoria y formación: «no por ahora».
        trayectoria: null,
        // HUECO — enlace a su perfil de LinkedIn.
        linkedinHref: null,
        // Previsto: retrato. { src: '/equipo/mirella.jpg', alt: 'Retrato de Mirella Llanga' }
        retrato: null,
      },
    ],
  },

  /* La firma, en tres puntos. Salen de textos ya aprobados en la portada y
     en KLINODA; aquí solo se juntan. */
  firma: {
    etiqueta: 'La firma',
    titulo: 'Dos líneas, una firma.',
    items: [
      {
        titulo: 'El número y el sistema, en la misma firma',
        texto: 'Quien define el número construye también el sistema que lo produce.',
      },
      {
        titulo: 'Ecuador y Alemania',
        texto: 'Equipo en Ecuador y Alemania. Trabajamos en español, inglés y alemán.',
      },
      {
        titulo: 'KLINODA, empresa del Grupo',
        texto: 'KLINODA es una empresa del Grupo CJM Nexus. Su plataforma ordena la salud ocupacional de las empresas en Ecuador.',
        estado: 'Demo · en desarrollo · datos ficticios',
        enlace: 'Ver KLINODA',
        href: '/klinoda',
      },
    ],
  },

  /* El método: cómo trabaja la firma. Vive aquí, con id="metodo", desde el
     2026-09-19 (antes estaba en /servicios y en el menú; Boris: «parece una
     página y no lleva a ninguna parte»). Textos aprobados, sin cambios. En
     alemán se pinta solo el ejemplo de software (PRODUCT.md, regla 1). */
  metodo: {
    eyebrow: 'Cómo trabajamos',
    title: 'El método es la garantía.',
    intro: 'Las reglas que aplicamos en las dos líneas, con un ejemplo real de cada una.',
    // Las referencias de los dos ejemplos de cada regla.
    etiquetas: { finanzas: 'Dirección financiera', software: 'Soluciones digitales' },
    /* EL 50/50 TAMBIÉN AQUÍ (regla 1 de PRODUCT.md): cada regla lleva un
       ejemplo de dirección financiera y uno de software, y solo entra una
       regla si las dos líneas tienen evidencia real. Aprobado por Boris el
       18-sep-2026. Fuera, a propósito:
       · «Probamos lo que construimos»: sin práctica financiera real que la
         respalde. Vuelve si Richard la da (pregunta en CONSTRUCCION.md).
       · «Nada real hasta validar»: solo es de KLINODA, y listaba lo que falta
         (regla 6). El estado de KLINODA ya se dice en su página.
       `ejemplos` sustituye al antiguo `evidence`: `Method` pinta los dos,
       lado a lado y con la misma letra. */
    items: [
      {
        title: 'Decidimos por escrito',
        text: 'Lo que se decide queda escrito en un acta. Nada se acuerda de palabra.',
        ejemplos: {
          finanzas: 'Cada reunión de dirección, una al mes, termina con su acta.',
          software:
            'Trece actas de decisión en KLINODA, cada una con su motivo y sus alternativas, desde la elección del stack hasta la firma electrónica.',
        },
      },
      {
        title: 'Privacidad por diseño',
        text: 'Vemos solo lo que el trabajo necesita, y lo que alguien no debe ver no le llega.',
        ejemplos: {
          finanzas: 'No pedimos acceso a tus cuentas bancarias ni movemos dinero: trabajamos con los reportes que ya tienes.',
          software:
            'El portal de empresa de KLINODA solo consume una lista cerrada de campos, y una prueba falla si se cuela un dato clínico.',
        },
      },
    ],
  },

  /* El cierre (mismas claves que el de las otras páginas interiores). */
  cta: {
    eyebrow: 'Siguiente paso',
    title: 'Veinte minutos con quien va a hacer el trabajo.',
    text: 'Sin costo · sin compromiso · en español, inglés o alemán.',
    primary: 'Agendar diagnóstico ejecutivo',
    secondary: 'Escribir a CJM Nexus',
  },
};

export default nosotros;
