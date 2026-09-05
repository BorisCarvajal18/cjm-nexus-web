/**
 * Soluciones digitales a medida — /es/servicios/soluciones-digitales
 *
 * EL PROBLEMA COMERCIAL DE ESTA PÁGINA es que cualquiera puede escribir
 * «desarrollamos software a medida». Lo que nos diferencia no es la lista de
 * lo que construimos, sino cómo lo entregamos y qué nos obliga a nosotros:
 * ver el sistema antes de que exista, entregas periódicas, y que el código
 * quede a nombre del cliente. Por eso el proceso y las garantías van antes
 * que cualquier catálogo de tecnologías —que aquí no aparece: al comprador no
 * le importa con qué está escrito, le importa si funcionará y si queda atado.
 *
 * ORDEN DE LOS BLOQUES:
 *  1. Cabecera.
 *  2. Qué construimos — cuatro formas, no una lista de tecnologías.
 *  3. Cómo trabajamos — el prototipo antes de programar.
 *  4. Las garantías — lo que nos obliga a nosotros, comprobable.
 *  5. KLINODA como prueba, una sola vez.
 *  6. Preguntas — precio, plazo, propiedad del código.
 *  7. Cierre.
 *
 * PENDIENTE ANTES DE PUBLICAR: el bloque 3 está marcado «SUPUESTO» en
 * `src/content/servicios.es.js`; la cadencia de entregas se publica como una
 * promesa y conviene aprobarla antes.
 */
import Faq from '../../../../blocks/pages/Faq';
import FeatureGrid from '../../../../blocks/pages/FeatureGrid';
import PageHero from '../../../../blocks/pages/PageHero';
import ProductBand from '../../../../blocks/pages/ProductBand';
import Steps from '../../../../blocks/pages/Steps';
import FinalCta from '../../../../blocks/FinalCta';
import SiteFooter from '../../../../components/SiteFooter';
import SiteHeader from '../../../../components/SiteHeader';
import BackToTop from '../../../../components/ui/BackToTop';
import { getDigital } from '../../../../content';
import { defaultLanguage, languages } from '../../../../i18n/settings';
import { faqSchema, pageMetadata, serviceSchema } from '../../../../lib/seo';

const idioma = (lang) => (languages.includes(lang) ? lang : defaultLanguage);
const RUTA = '/servicios/soluciones-digitales';

export function generateMetadata({ params }) {
  const lang = idioma(params.lang);
  return pageMetadata({ lang, path: RUTA, meta: getDigital(lang).meta });
}

export default function SolucionesDigitalesPage({ params }) {
  const lang = idioma(params.lang);
  const content = getDigital(lang);

  const datos = [
    serviceSchema({
      name: 'Desarrollo de software especializado',
      description: content.meta.description,
      url: `/${lang}${RUTA}`,
    }),
    faqSchema(content.faq.items),
  ];

  return (
    <>
      <SiteHeader lang={lang} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datos) }}
      />
      <main>
        <PageHero content={{ ...content.hero, secondaryHref: '#proceso' }} />
        <FeatureGrid content={content.build} columns={4} id="contenido" />
        <Steps content={content.process} />
        <FeatureGrid content={content.guarantees} columns={2} numbered />
        <ProductBand content={content.proof} href={`/${lang}#campos`} />
        <Faq content={content.faq} />
        <FinalCta content={content.cta} />
      </main>
      <SiteFooter lang={lang} />
      <BackToTop />
    </>
  );
}
