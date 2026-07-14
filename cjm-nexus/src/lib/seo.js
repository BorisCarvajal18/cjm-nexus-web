/**
 * Datos estructurados (JSON-LD) — CJM Nexus.
 *
 * Solo información REAL presente en el sitio: nombre, logo, eslogan oficial,
 * correo, teléfonos de contacto (WhatsApp Ecuador / Alemania) y regiones de
 * alcance. `sameAs` se rellena desde SOCIAL_PROFILES (vacío mientras no haya
 * perfiles sociales reales que declarar).
 */
import { SITE_URL, SOCIAL_PROFILES } from './site';

/**
 * schema.org/Organization.
 * @param {{ lang: string, description: string }} opts
 *   description: descripción localizada (usamos el subtítulo del hero).
 */
export function organizationSchema({ lang, description }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CJM Nexus',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-${lang}.png`,
    description,
    slogan: 'Connecting Finance. Technology. Global Growth.',
    email: 'experiencia@cjmnexus.com',
    // Alcance declarado en el sitio: Latinoamérica · Estados Unidos · Europa
    areaServed: ['Latin America', 'United States', 'Europe'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+593993856695',
        contactType: 'customer service',
        areaServed: 'EC',
        availableLanguage: ['es', 'en'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+4915755849100',
        contactType: 'customer service',
        areaServed: 'DE',
        availableLanguage: ['de', 'en', 'es'],
      },
    ],
  };

  // Solo se añade sameAs si hay perfiles sociales reales configurados.
  if (SOCIAL_PROFILES.length > 0) schema.sameAs = SOCIAL_PROFILES;

  return schema;
}
