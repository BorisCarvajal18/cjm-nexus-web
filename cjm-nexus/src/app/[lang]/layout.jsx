/**
 * Layout raíz por idioma — CJM Nexus.
 *
 * Al estar todas las rutas bajo /[lang], este layout hace de layout raíz:
 * renderiza <html lang="…"> con el idioma correcto (SSR) y expone la
 * metadata SEO (title, description, canonical, hreflang, Open Graph,
 * Twitter Card) generada en servidor, más el JSON-LD de Organization.
 *
 * generateStaticParams + dynamicParams=false ⇒ el sitio se genera de forma
 * ESTÁTICA para /es, /en y /de (SSG): el HTML servido ya trae todo el
 * contenido, títulos, enlaces y etiquetas SEO.
 */
import { Manrope, Syne } from 'next/font/google';

import '../globals.css';
import Providers from '../providers';
import { getDictionary } from '../../i18n/dictionaries';
import { defaultLanguage, languages, localeMap } from '../../i18n/settings';
import { organizationSchema } from '../../lib/seo';
import { SITE_URL } from '../../lib/site';

/* Fuentes del sistema «Pulso Cobre».
 *
 * SE SIRVEN DESDE NUESTRO DOMINIO, no desde Google: next/font las descarga en
 * el build y las empaqueta. Así el navegador no tiene que resolver, conectar y
 * esperar a un tercero antes de pintar el primer texto — que es lo que hacía
 * el sitio anterior con su <link> a fonts.googleapis.com — y de paso ninguna
 * visita queda registrada en un servidor ajeno.
 *
 * `display: swap` muestra la fuente de reserva mientras carga la definitiva,
 * en lugar de dejar el texto invisible.
 */
const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

// Genera estáticamente /es, /en y /de en el build.
export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

// Cualquier idioma no soportado (p. ej. /fr) devuelve 404 en vez de renderizar.
export const dynamicParams = false;

export function generateMetadata({ params }) {
  const lang = languages.includes(params.lang) ? params.lang : defaultLanguage;
  const dict = getDictionary(lang);
  const { meta } = dict;
  // Imagen para compartir, localizada por idioma (1200×630)
  const ogImage = { url: `/og-${lang}.png`, width: 1200, height: 630, alt: dict.common.tagline };

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${lang}`,
      // hreflang recíproco entre los tres idiomas + x-default al español
      languages: { es: '/es', en: '/en', de: '/de', 'x-default': `/${defaultLanguage}` },
    },
    openGraph: {
      type: 'website',
      siteName: 'CJM Nexus',
      title: meta.title,
      description: meta.description,
      url: `/${lang}`,
      locale: localeMap[lang],
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`/og-${lang}.png`],
    },
    icons: { icon: '/logo.png', apple: '/logo.png' },
  };
}

export default function LangLayout({ children, params }) {
  const lang = languages.includes(params.lang) ? params.lang : defaultLanguage;
  const dict = getDictionary(lang);
  // JSON-LD de Organization, con descripción localizada (subtítulo del hero).
  const orgJsonLd = organizationSchema({ lang, description: dict.hero.subtitle });

  return (
    <html lang={lang} className={`${syne.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        {/* Preconexión a Calendly (el widget se inyecta bajo demanda) */}
        <link rel="preconnect" href="https://assets.calendly.com" />
        {/* Datos estructurados: Organization (renderizado en servidor) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        <Providers lang={lang}>{children}</Providers>
      </body>
    </html>
  );
}
