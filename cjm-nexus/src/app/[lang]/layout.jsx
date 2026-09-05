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
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

import '../globals.css';
import { getHome } from '../../content';
import { defaultLanguage, languages, localeMap } from '../../i18n/settings';
import { organizationSchema } from '../../lib/seo';
import { SITE_URL } from '../../lib/site';

/* Fuentes del sistema «Pulso Cobre».
 *
 * PLUS JAKARTA SANS para titulares, INTER para texto. Elegida por el dueño el
 * 3 de septiembre de 2026 entre cuatro parejas comparadas sobre la misma
 * portada. Además de leerse bien, tiene una ventaja propia: Plus Jakarta Sans
 * es la misma familia que ya usa KLINODA, de modo que la firma y su producto
 * se ven emparentados sin que ninguno copie al otro.
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
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
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
  const { meta } = getHome(lang);
  // Imagen para compartir, localizada por idioma (1200×630).
  // PENDIENTE: las tres siguen mostrando el eslogan en inglés que se retiró
  // del sitio. Hay que rehacerlas con el titular nuevo (fase 08).
  const ogImage = { url: `/og-${lang}.png`, width: 1200, height: 630, alt: 'CJM Nexus' };

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
    // El icono de pestaña era el logotipo de 1024 px y 817 KB. Un favicon de
    // 32 px con el mismo archivo obliga al navegador a descargar y reescalar
    // todo eso para pintar un cuadrado diminuto.
    icons: {
      icon: [
        { url: '/marca/favicon-32.png', sizes: '32x32', type: 'image/png' },
        { url: '/marca/cjm-isotipo.png', sizes: '256x256', type: 'image/png' },
      ],
      apple: '/marca/apple-icon.png',
    },
  };
}

export default function LangLayout({ children, params }) {
  const lang = languages.includes(params.lang) ? params.lang : defaultLanguage;
  // JSON-LD de Organization, con la descripción del propio contenido.
  const orgJsonLd = organizationSchema({ lang, description: getHome(lang).hero.lead });

  return (
    <html lang={lang} className={`${jakarta.variable} ${inter.variable}`} suppressHydrationWarning>
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
        {children}
      </body>
    </html>
  );
}
