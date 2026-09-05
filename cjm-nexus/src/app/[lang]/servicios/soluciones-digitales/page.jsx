/**
 * Soluciones digitales — /es/servicios/soluciones-digitales
 *
 * DOS OFERTAS EN LA MISMA PÁGINA, y en este orden: primero la página web
 * publicada en menos de una semana, que es lo que la firma entrega hoy y el
 * argumento más fuerte que tiene; después los sistemas a medida, para quien
 * llega buscando algo del tamaño de KLINODA.
 *
 * El primer borrador de esta página describía SOLO los sistemas a medida:
 * meses de trabajo, descubrimiento, entregas parciales. Describía un servicio
 * que la firma no vende y escondía el que sí. Corregido con el dueño el 5 de
 * septiembre de 2026.
 *
 * NO HAY CLIENTES DE PÁGINAS WEB TODAVÍA, así que aquí no hay portafolio, ni
 * número de proyectos, ni testimonios. Las dos pruebas honestas son KLINODA y
 * esta misma web, y las dos se pueden mirar.
 *
 * ORDEN DE LOS BLOQUES:
 *  1. Cabecera — las dos formas de trabajar, en una frase.
 *  2. Oferta 01 — la web: qué incluye, cómo va, y la condición del plazo.
 *  3. Oferta 02 — los sistemas: qué construimos y cómo va.
 *  4. Las garantías, comunes a las dos.
 *  5. KLINODA como prueba, una sola vez.
 *  6. Preguntas — plazo, precio, dominio, propiedad.
 *  7. Cierre.
 *
 * PENDIENTE ANTES DE PUBLICAR: qué entra en el precio de una web y cómo se
 * manejan dominio y alojamiento. Marcado «SUPUESTO» en el contenido.
 */
import Faq from '../../../../blocks/pages/Faq';
import FeatureGrid from '../../../../blocks/pages/FeatureGrid';
import Offer from '../../../../blocks/pages/Offer';
import PageHero from '../../../../blocks/pages/PageHero';
import ProductBand from '../../../../blocks/pages/ProductBand';
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
        <PageHero content={{ ...content.hero, secondaryHref: '#web' }} />
        <Offer content={content.web} id="web" />
        <Offer content={content.systems} id="sistemas" tone="muted" />
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
