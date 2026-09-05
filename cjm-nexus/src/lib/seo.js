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
import { languages } from '../i18n/settings';
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

/**
 * Metadata de una página interior.
 *
 * EXISTE PARA QUE EL hreflang NO SE ESCRIBA A MANO EN CADA PÁGINA. Ese bloque
 * —canónica más una alternativa por idioma más el x-default— es igual en todo
 * el sitio salvo por la ruta, y copiarlo cinco veces garantiza que en la
 * sexta se apunte por error a la portada. Aquí se escribe una vez y se deriva
 * de `path`.
 *
 * `path` es la ruta SIN el idioma: '' para la portada, '/servicios' para el
 * índice de servicios. El prefijo lo pone esta función.
 */
export function pageMetadata({ lang, path = '', meta }) {
  const ruta = `/${lang}${path}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: ruta,
      languages: {
        ...Object.fromEntries(languages.map((l) => [l, `/${l}${path}`])),
        'x-default': `/es${path}`,
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'CJM Nexus',
      title: meta.title,
      description: meta.description,
      url: ruta,
      images: [{ url: `/og-${lang}.png`, width: 1200, height: 630, alt: 'CJM Nexus' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`/og-${lang}.png`],
    },
  };
}

/**
 * schema.org/FAQPage a partir de las preguntas que YA están en la página.
 *
 * Se construye desde el mismo array que se pinta, nunca desde una copia. Es
 * la única forma de que el buscador no acabe mostrando una respuesta que en
 * la página dice otra cosa: no hay dos textos que puedan desincronizarse.
 */
export function faqSchema(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

/**
 * schema.org/Service para las dos páginas de servicio.
 * Solo declara lo que la página afirma: nombre, descripción, quién lo presta
 * y dónde. Sin precio ni valoraciones, que no tenemos.
 */
export function serviceSchema({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: { '@type': 'Organization', name: 'CJM Nexus', url: SITE_URL },
    areaServed: ['Ecuador', 'Germany'],
  };
}
