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
 * Menú principal. Cinco entradas, todas con destino real.
 *
 * «Proyectos» se retiró: no hay trabajo de clientes que enseñar todavía y una
 * entrada de menú que lleva a una sección floja resta. En su lugar entra
 * KLINODA con su nombre: nombrar el producto hace que la firma se lea como
 * una empresa que tiene uno, que es exactamente el posicionamiento buscado.
 *
 * PROVISIONAL: KLINODA y Nosotros van a tener página propia, y son lo
 * siguiente que se construye. Hasta entonces apuntan a su sección de la
 * portada. Un enlace de menú que lleva a una página inexistente es peor que
 * uno que lleva a menos de lo prometido: el primero es un callejón sin
 * salida y el segundo, solo un adelanto.
 */
export const NAV_LINKS = [
  { href: '#campos', label: 'Servicios' },
  { href: '#campos', label: 'KLINODA' },
  { href: '#metodo', label: 'Método' },
  { href: '#equipo', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
];

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

/** Columnas del pie. */
export const FOOTER_COLUMNS = [
  {
    title: 'Servicios',
    links: [
      { label: 'Dirección financiera', href: '#campos' },
      { label: 'Soluciones digitales', href: '#campos' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'KLINODA', href: '#campos' },
      { label: 'Método', href: '#metodo' },
      { label: 'Nosotros', href: '#equipo' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidad', href: '#' },
      { label: 'Aviso legal', href: '#' },
    ],
  },
];
