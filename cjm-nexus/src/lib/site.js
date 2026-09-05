/**
 * Datos invariantes del sitio: los que no se traducen.
 *
 * Teléfonos, correos y direcciones viven aquí y en ningún otro sitio, para
 * que cambiar un número no obligue a buscarlo por catorce páginas y tres
 * idiomas. Las etiquetas visibles van en `src/content/`.
 */

/** URL canónica (robots, sitemap, metadata, hreflang). */
export const SITE_URL = 'https://www.cjmnexus.com';

/** Agenda del diagnóstico ejecutivo. */
export const CALENDLY_URL = 'https://calendly.com/cjmnexus/diagnostico-ejecutivo';

/**
 * Perfiles oficiales para los datos estructurados (`sameAs`).
 * Los tres son personales; falta la página de empresa en LinkedIn. Cuando
 * exista, va la primera y estas pueden quedarse o no.
 */
export const SOCIAL_PROFILES = [];

/**
 * TODOS LOS ENLACES LLEVAN EL IDIOMA DELANTE. Cada ruta del sitio vive bajo
 * /es, /en o /de, así que un enlace escrito como `/servicios` sacaría al
 * visitante de su idioma y daría un 404. Por eso el menú y el pie son
 * funciones que reciben el idioma y no constantes: es imposible olvidarse
 * del prefijo si no existe la forma de escribirlo sin él.
 *
 * PROVISIONAL: solo queda «Nosotros» apuntando a su banda de la portada,
 * hasta que exista su página. Un enlace que lleva a una página inexistente es
 * peor que uno que lleva a menos de lo prometido: el primero es un callejón
 * sin salida, el segundo un adelanto.
 */
export function navLinks(lang = 'es') {
  return [
    { href: `/${lang}/servicios`, label: 'Servicios' },
    { href: `/${lang}/klinoda`, label: 'KLINODA' },
    { href: `/${lang}#metodo`, label: 'Método' },
    { href: `/${lang}#equipo`, label: 'Nosotros' },
    // Todas las paginas terminan con la misma seccion de cierre, con
    // id="contacto". Un ancla suelta lleva a la de la pagina donde estas, y
    // no obliga a cargar la portada para pedir una reunion.
    { href: '#contacto', label: 'Contacto' },
  ];
}

/** Canales de contacto directo. */
export const CONTACTS = [
  {
    key: 'waEc',
    label: 'WhatsApp Ecuador',
    value: '+593 99 385 6695',
    href: 'https://wa.me/593993856695',
  },
  {
    key: 'waDe',
    label: 'WhatsApp Alemania',
    value: '+49 1575 5849100',
    href: 'https://wa.me/4915755849100',
  },
  {
    key: 'email',
    label: 'Correo',
    value: 'experiencia@cjmnexus.com',
    href: 'mailto:experiencia@cjmnexus.com',
  },
];

/** Columnas del pie. Mismo criterio de idioma que el menú. */
export function footerColumns(lang = 'es') {
  return [
    {
      title: 'Servicios',
      links: [
        { label: 'Los dos servicios', href: `/${lang}/servicios` },
        { label: 'Dirección financiera', href: `/${lang}/servicios/direccion-financiera` },
        { label: 'Soluciones digitales', href: `/${lang}/servicios/soluciones-digitales` },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'KLINODA', href: `/${lang}/klinoda` },
        { label: 'Método', href: `/${lang}#metodo` },
        { label: 'Nosotros', href: `/${lang}#equipo` },
        { label: 'Contacto', href: `/${lang}#contacto` },
      ],
    },
    {
      title: 'Legal',
      links: [
        // Pendientes de la entidad legal de la firma (fase 06). Se dejan
        // visibles a propósito: su ausencia resta seriedad a un sitio B2B.
        { label: 'Privacidad', href: '#' },
        { label: 'Aviso legal', href: '#' },
      ],
    },
  ];
}
