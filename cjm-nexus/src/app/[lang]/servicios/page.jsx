/**
 * Índice de servicios — /es/servicios
 *
 * QUÉ TIENE QUE HACER ESTA PÁGINA, en una frase: que alguien que llegó desde
 * el menú entienda en diez segundos que hay dos servicios, sepa cuál es el
 * suyo y haga clic. No tiene que vender ninguno de los dos —para eso está la
 * página de cada uno— y por eso es corta.
 *
 * ORDEN DE LOS BLOQUES:
 *  1. Cabecera — dos servicios, un criterio.
 *  2. Los dos servicios, en bloques grandes y comparables lado a lado.
 *  3. Por qué están en la misma firma — el argumento que hace que la
 *     combinación valga más que la suma, y sin el cual esto parecen dos
 *     empresas compartiendo un logotipo.
 *  4. KLINODA, una sola vez y etiquetado producto propio.
 *  5. Cierre — la reunión.
 */
import FeatureGrid from '../../../blocks/pages/FeatureGrid';
import PageHero from '../../../blocks/pages/PageHero';
import ProductBand from '../../../blocks/pages/ProductBand';
import ServiceCards from '../../../blocks/pages/ServiceCards';
import FinalCta from '../../../blocks/FinalCta';
import SiteFooter from '../../../components/SiteFooter';
import SiteHeader from '../../../components/SiteHeader';
import BackToTop from '../../../components/ui/BackToTop';
import { getHome, getServicios } from '../../../content';
import { defaultLanguage, languages } from '../../../i18n/settings';
import { pageMetadata } from '../../../lib/seo';

const idioma = (lang) => (languages.includes(lang) ? lang : defaultLanguage);

export function generateMetadata({ params }) {
  const lang = idioma(params.lang);
  return pageMetadata({ lang, path: '/servicios', meta: getServicios(lang).meta });
}

export default function ServiciosPage({ params }) {
  const lang = idioma(params.lang);
  const content = getServicios(lang);
  // Las interfaces de muestra son las mismas de la portada: quien llega desde
  // allí reconoce cada servicio antes de leer el titular.
  const { mockups } = getHome(lang);

  return (
    <>
      <SiteHeader lang={lang} />
      <main>
        <PageHero
          content={{ ...content.hero, secondaryHref: '#contenido' }}
        />
        <ServiceCards content={content} mockups={mockups} lang={lang} />
        <FeatureGrid
          content={{
            eyebrow: content.together.eyebrow,
            title: content.together.title,
            intro: content.together.text,
            items: content.together.points,
          }}
          columns={3}
        />
        <ProductBand content={content.product} href={`/${lang}/klinoda`} />
        <FinalCta content={content.cta} />
      </main>
      <SiteFooter lang={lang} />
      <BackToTop />
    </>
  );
}
