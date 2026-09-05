/**
 * Dirección financiera externa — /es/servicios/direccion-financiera
 *
 * ES LA PÁGINA QUE TIENE QUE CERRAR REUNIONES. Quien llega aquí ya sabe que
 * existimos; lo que necesita es una respuesta a «¿qué pasa exactamente si os
 * contrato?». Por eso el orden pone el proceso y el entregable por delante de
 * cualquier otra cosa, y deja los adjetivos fuera.
 *
 * ORDEN DE LOS BLOQUES, y por qué es ese:
 *  1. Cabecera — qué es, en una frase que se pueda repetir de memoria.
 *  2. Síntomas — sus frases, no nuestra definición. Se reconoce antes en un
 *     problema que en la descripción de un servicio.
 *  3. El mes de trabajo — la respuesta a la pregunta que de verdad se hace.
 *  4. El tablero — la prueba de que el entregable existe y tiene forma.
 *  5. Entregables — la letra pequeña de lo anterior, en concreto.
 *  6. Para quién no es — lo que hace creíble todo lo de arriba.
 *  7. Preguntas — las objeciones que quedan en pie.
 *  8. Cierre — la reunión.
 *
 * PENDIENTE ANTES DE PUBLICAR: los bloques 3 y 7 están escritos a partir de
 * suposiciones y necesitan la revisión de Richard. Están marcados con
 * «SUPUESTO» en `src/content/servicios.es.js` y recogidos en
 * `docs/preguntas-richard.md`.
 */
import BoardShowcase from '../../../../blocks/pages/BoardShowcase';
import Faq from '../../../../blocks/pages/Faq';
import FeatureGrid from '../../../../blocks/pages/FeatureGrid';
import Fit from '../../../../blocks/pages/Fit';
import PageHero from '../../../../blocks/pages/PageHero';
import Steps from '../../../../blocks/pages/Steps';
import Symptoms from '../../../../blocks/pages/Symptoms';
import FinalCta from '../../../../blocks/FinalCta';
import SiteFooter from '../../../../components/SiteFooter';
import SiteHeader from '../../../../components/SiteHeader';
import BackToTop from '../../../../components/ui/BackToTop';
import { getFinanzas } from '../../../../content';
import { defaultLanguage, languages } from '../../../../i18n/settings';
import { faqSchema, pageMetadata, serviceSchema } from '../../../../lib/seo';

const idioma = (lang) => (languages.includes(lang) ? lang : defaultLanguage);
const RUTA = '/servicios/direccion-financiera';

export function generateMetadata({ params }) {
  const lang = idioma(params.lang);
  return pageMetadata({ lang, path: RUTA, meta: getFinanzas(lang).meta });
}

export default function DireccionFinancieraPage({ params }) {
  const lang = idioma(params.lang);
  const content = getFinanzas(lang);

  /* Datos estructurados. Las preguntas se derivan del MISMO array que se
     pinta más abajo: así es imposible que el buscador enseñe una respuesta
     que en la página dice otra cosa. */
  const datos = [
    serviceSchema({
      name: 'Dirección financiera externa',
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
        <PageHero content={{ ...content.hero, secondaryHref: '#entregable' }} />
        <Symptoms content={content.symptoms} />
        <Steps content={content.month} />
        <BoardShowcase content={content.deliverable} />
        <FeatureGrid content={content.deliverables} columns={3} />
        <Fit content={content.fit} />
        <Faq content={content.faq} />
        <FinalCta content={content.cta} />
      </main>
      <SiteFooter lang={lang} />
      <BackToTop />
    </>
  );
}
