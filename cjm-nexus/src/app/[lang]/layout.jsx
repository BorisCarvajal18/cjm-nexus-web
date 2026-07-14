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
import '../globals.css';
import Providers from '../providers';
import { getDictionary } from '../../i18n/dictionaries';
import { defaultLanguage, languages, localeMap } from '../../i18n/settings';
import { organizationSchema } from '../../lib/seo';
import { SITE_URL } from '../../lib/site';

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

/* Anti-flash de tema: aplica modo oscuro antes del primer render SOLO si el
   usuario lo eligió antes (localStorage). Por defecto, la web abre en CLARO. */
const THEME_SCRIPT =
  "(function(){try{if(localStorage.getItem('cjm-theme')==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();";

export default function LangLayout({ children, params }) {
  const lang = languages.includes(params.lang) ? params.lang : defaultLanguage;
  const dict = getDictionary(lang);
  // JSON-LD de Organization, con descripción localizada (subtítulo del hero).
  const orgJsonLd = organizationSchema({ lang, description: dict.hero.subtitle });

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        {/* Fuentes: Space Grotesk (display) + Inter (cuerpo) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Preconexión a Calendly (el widget se inyecta bajo demanda) */}
        <link rel="preconnect" href="https://assets.calendly.com" />
        {/* Datos estructurados: Organization (renderizado en servidor) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {/* Anti-flash de tema (ver arriba) */}
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>
        <Providers lang={lang}>{children}</Providers>
      </body>
    </html>
  );
}
