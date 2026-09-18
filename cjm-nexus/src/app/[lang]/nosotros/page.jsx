/**
 * Nosotros — /es/nosotros (pieza 12)
 *
 * La portada nombra a tres personas; esta página dice quiénes son y qué hace
 * cada una. Textos en `src/content/nosotros.es.js`, con lo que la página no
 * dice a propósito escrito en su cabecera.
 *
 * ORDEN DE LOS BLOQUES:
 *  1. Cabecera — qué es la firma y que aquí están sus tres personas.
 *  2. El equipo — tres fichas iguales, en el orden de la firma de la portada.
 *  3. La firma — dos líneas, Ecuador y Alemania, y KLINODA como puerta. Con
 *     el remite a cómo trabajamos (/servicios#metodo).
 *  4. Cierre.
 *
 * SIN FOTOS, Y COMPLETA IGUAL: lo que no tiene dato (retrato, LinkedIn,
 * lugar) no se pinta. Ver <Personas />.
 *
 * Quieta, como las demás páginas interiores: su momento de movimiento está
 * pendiente del guion (CONSTRUCCION.md).
 */
import Firma from '../../../blocks/pages/Firma';
import PageHero from '../../../blocks/pages/PageHero';
import Personas from '../../../blocks/pages/Personas';
import FinalCta from '../../../blocks/FinalCta';
import SiteFooter from '../../../components/SiteFooter';
import SiteHeader from '../../../components/SiteHeader';
import { getNosotros } from '../../../content';
import { defaultLanguage, languages } from '../../../i18n/settings';
import { pageMetadata } from '../../../lib/seo';

const idioma = (lang) => (languages.includes(lang) ? lang : defaultLanguage);
const RUTA = '/nosotros';

export function generateMetadata({ params }) {
  const lang = idioma(params.lang);
  return pageMetadata({ lang, path: RUTA, meta: getNosotros(lang).meta });
}

export default function NosotrosPage({ params }) {
  const lang = idioma(params.lang);
  const content = getNosotros(lang);

  return (
    <>
      <SiteHeader lang={lang} />
      <main>
        <PageHero content={content.hero} />
        <Personas content={content.personas} />
        <Firma content={content.firma} metodo={content.metodo} lang={lang} />
        <FinalCta content={content.cta} />
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
