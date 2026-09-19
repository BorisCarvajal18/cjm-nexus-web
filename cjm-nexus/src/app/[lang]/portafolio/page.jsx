/**
 * Portafolio — /es/portafolio
 *
 * Lo que convence a un dueño de negocio de encargar su web: ver cómo quedan.
 * Tres portadas de ejemplo de la oferta de web en una semana, para marcas
 * ficticias de Berlín, grandes y con un enlace para abrirlas enteras.
 *
 * ORDEN: cabecera (qué son y que son conceptos), las tres portadas y el
 * cierre. Quieta, como las demás páginas interiores sin momento propio.
 */
import PageHero from '../../../blocks/pages/PageHero';
import Portadas from '../../../blocks/pages/Portadas';
import FinalCta from '../../../blocks/FinalCta';
import SiteFooter from '../../../components/SiteFooter';
import SiteHeader from '../../../components/SiteHeader';
import { getPortafolio } from '../../../content';
import { defaultLanguage, languages } from '../../../i18n/settings';
import { pageMetadata } from '../../../lib/seo';

const idioma = (lang) => (languages.includes(lang) ? lang : defaultLanguage);

export function generateMetadata({ params }) {
  const lang = idioma(params.lang);
  return pageMetadata({ lang, path: '/portafolio', meta: getPortafolio(lang).meta });
}

export default function PortafolioPage({ params }) {
  const lang = idioma(params.lang);
  const content = getPortafolio(lang);

  return (
    <>
      <SiteHeader lang={lang} />
      <main>
        <PageHero content={content.hero} />
        <Portadas content={content} />
        <FinalCta content={content.cta} />
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
