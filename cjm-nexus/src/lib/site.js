/**
 * Datos compartidos del sitio (navbar, footer y CTA final).
 *
 * Aquí viven solo ids, valores INVARIANTES (números de teléfono, correos,
 * URLs) y el nombre del icono asociado. Las etiquetas visibles se traducen
 * en locales/ (claves nav.* y contact.*).
 */

/** URL canónica del sitio (robots, sitemap, metadata, hreflang) */
export const SITE_URL = 'https://www.cjmnexus.com';

/**
 * Perfiles sociales oficiales para los datos estructurados JSON-LD (sameAs).
 * Vacío por ahora: el sitio actual no lista redes sociales, así que no se
 * inventa ninguna. Añade aquí las URLs reales (LinkedIn, Instagram, Facebook,
 * YouTube…) y aparecerán automáticamente en el schema de Organization.
 *   ej.: ['https://www.linkedin.com/company/cjm-nexus']
 */
export const SOCIAL_PROFILES = [];

/** Enlaces del menú → ancla de sección (id) + clave de traducción (nav.*) */
export const NAV_LINKS = [
  { id: 'inicio', key: 'home' },
  { id: 'problema', key: 'problem' },
  { id: 'finanzas', key: 'finance' },
  { id: 'tecnologia', key: 'technology' },
  { id: 'por-que', key: 'why' },
  { id: 'proceso', key: 'process' },
];

/** Canales de contacto directo (CTA final + footer) */
export const CONTACTS = [
  {
    key: 'waEc',
    icon: 'whatsapp',
    value: '+593 99 385 6695',
    href: 'https://wa.me/593993856695',
    external: true,
  },
  {
    key: 'waDe',
    icon: 'whatsapp',
    value: '+49 1575 5849100',
    href: 'https://wa.me/4915755849100',
    external: true,
  },
  {
    key: 'email',
    icon: 'mail',
    value: 'experiencia@cjmnexus.com',
    href: 'mailto:experiencia@cjmnexus.com',
    external: false,
  },
];

/** Sitio web oficial (footer) */
export const WEBSITE = {
  key: 'web',
  icon: 'globe',
  value: 'www.cjmnexus.com',
  href: 'https://www.cjmnexus.com',
  external: true,
};
