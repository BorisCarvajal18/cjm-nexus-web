/**
 * Datos invariantes del sitio: los que no se traducen.
 *
 * Teléfonos, correos y direcciones viven aquí y en ningún otro sitio, para
 * que cambiar un número no obligue a buscarlo por catorce páginas y tres
 * idiomas. NINGUNA ETIQUETA VISIBLE VIVE AQUÍ: el menú, el pie y los canales
 * llevan una `clave`, y su texto está en `src/content/sitio.<idioma>.js`.
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
 * KLINODA NO ESTÁ EN EL MENÚ NI EN EL PIE desde el 2026-09-19: tendrá su
 * propia web, y /klinoda es solo un aviso. Se llega desde sus bandas.
 * «Portafolio» entró el 2026-09-19, con sus tres portadas de ejemplo.
 */
export function navLinks(lang = 'es') {
  // Las etiquetas están en `src/content/sitio.<idioma>.js` → `menu`, por
  // `clave`. «Inicio» va primero: desde una página interior es la vuelta a la
  // portada más visible (el isotipo también lleva, pero no todo el mundo lo
  // sabe).
  return [
    { clave: 'inicio', href: `/${lang}` },
    { clave: 'servicios', href: `/${lang}/servicios` },
    { clave: 'portafolio', href: `/${lang}/portafolio` },
    { clave: 'metodo', href: `/${lang}/servicios#metodo` },
    { clave: 'nosotros', href: `/${lang}/nosotros` },
    // Todas las paginas terminan con la misma seccion de cierre, con
    // id="contacto". Un ancla suelta lleva a la de la pagina donde estas, y
    // no obliga a cargar la portada para pedir una reunion.
    { clave: 'contacto', href: '#contacto' },
  ];
}

/**
 * Canales de contacto directo, por idioma (decisión de Boris, 2026-09-19):
 * WhatsApp solo en español; en inglés y en alemán, teléfono y correo. Las
 * etiquetas están en `src/content/sitio.<idioma>.js` → `canales`, por `key`.
 * `conValor`: en los cierres se pinta también el número, porque «Teléfono»
 * a secas no sirve en un computador.
 */
const CANALES = [
  { key: 'waEc', langs: ['es'], value: '+593 99 385 6695', href: 'https://wa.me/593993856695' },
  { key: 'waDe', langs: ['es'], value: '+49 1575 5849100', href: 'https://wa.me/4915755849100' },
  { key: 'tel', langs: ['en', 'de'], value: '+49 1575 5849100', href: 'tel:+4915755849100', conValor: true },
  { key: 'email', langs: ['es', 'en', 'de'], value: 'experiencia@cjmnexus.com', href: 'mailto:experiencia@cjmnexus.com' },
];

export function contactos(lang = 'es') {
  return CANALES.filter((c) => c.langs.includes(lang));
}

/** El correo de la firma, para los botones «Escribir a CJM Nexus». */
export const CORREO = CANALES.find((c) => c.key === 'email').href;

/** Columnas del pie. Mismo criterio de idioma y de etiquetas que el menú:
    `src/content/sitio.<idioma>.js` → `pie.columnas` y `pie.enlaces`. */
export function footerColumns(lang = 'es') {
  return [
    {
      clave: 'servicios',
      links: [
        { clave: 'dosServicios', href: `/${lang}/servicios` },
        { clave: 'finanzas', href: `/${lang}/servicios/direccion-financiera` },
        { clave: 'digital', href: `/${lang}/servicios/soluciones-digitales` },
        { clave: 'portafolio', href: `/${lang}/portafolio` },
      ],
    },
    {
      clave: 'empresa',
      links: [
        { clave: 'inicio', href: `/${lang}` },
        { clave: 'metodo', href: `/${lang}/servicios#metodo` },
        { clave: 'nosotros', href: `/${lang}/nosotros` },
        { clave: 'contacto', href: `/${lang}#contacto` },
      ],
    },
    {
      clave: 'legal',
      links: [
        // Pendientes de la entidad legal de la firma (AUDITORIA.md, B1).
        { clave: 'privacidad', href: '#' },
        { clave: 'avisoLegal', href: '#' },
      ],
    },
  ];
}
