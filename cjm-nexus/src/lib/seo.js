/**
 * Datos estructurados (JSON-LD) — CJM Nexus.
 *
 * Solo información REAL presente en el sitio: nombre, logo, correo, teléfonos
 * de contacto y alcance. `sameAs` se rellena desde SOCIAL_PROFILES, vacío
 * mientras no exista una página de empresa en LinkedIn.
 *
 * DOS COSAS QUE SE RETIRARON AQUÍ, y por el mismo motivo que en el resto del
 * sitio: el eslogan en inglés, que ya no se usa en ninguna parte; y el
 * alcance «Latinoamérica, Estados Unidos y Europa», que era el del sitio
 * anterior y no se sostiene. La firma opera desde Ecuador y Alemania, y eso
 * es lo que se declara. La trayectoria de Richard en Latinoamérica y Estados
 * Unidos se cuenta donde corresponde: en su ficha, con su nombre.
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
    logo: `${SITE_URL}/marca/cjm-isotipo.png`,
    image: `${SITE_URL}/og-${lang}.png`,
    description,
    email: 'experiencia@cjmnexus.com',
    areaServed: ['Ecuador', 'Germany'],
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
