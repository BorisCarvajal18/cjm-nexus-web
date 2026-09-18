/**
 * Textos de la página «Nosotros» — /es/nosotros (pieza 12, sin programar).
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
 * TEXTOS POR APROBAR: todo lo que no viene de un texto ya aprobado (ver
 * CONSTRUCCION.md, pieza 12).
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
        // HUECO — qué hace en concreto como gerente general (pregunta 9).
        // Hasta tenerlo, la línea dice solo lo que ya está aprobado en la
        // firma de la portada.
        lidera: 'Lidera la gerencia general de CJM Nexus.',
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

  /* Un solo enlace a cómo trabajamos, que vive en /servicios#metodo. */
  metodo: {
    etiqueta: 'Cómo trabajamos',
    texto: 'Cuatro reglas que aplicamos en cada proyecto, con un ejemplo real de cada una.',
    enlace: 'Ver cómo trabajamos',
    href: '/servicios#metodo',
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
