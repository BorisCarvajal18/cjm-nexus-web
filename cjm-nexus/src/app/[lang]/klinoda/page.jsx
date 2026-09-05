/**
 * KLINODA — /es/klinoda
 *
 * ESTA PÁGINA TIENE DOS LECTORES Y LES SIRVE EN ESTE ORDEN. Primero el médico
 * ocupacional, que puede acabar usándolo. Segundo el comprador de software,
 * que llega desde «soluciones digitales» a comprobar si sabemos construir. La
 * misma página vale para los dos porque lo que convence a uno —cómo está
 * hecho por dentro— es exactamente lo que convence al otro.
 *
 * ORDEN DE LOS BLOQUES, y por qué es ese:
 *  1. Cabecera — qué es, en una frase.
 *  2. Estado — piloto y datos ficticios, dicho arriba y no al final.
 *  3. El problema — el trámite hecho a mano, con sus tres consecuencias.
 *  4. Cómo funciona — cuatro pasos, y el cuarto es la regla de privacidad.
 *  5. La regla, enseñada: el portal de empresa.
 *  6. Cómo está construido — las cifras comprobables.
 *  7. Para quién no es.
 *  8. Quién lo construye — la vuelta a la firma.
 *  9. Cierre.
 *
 * LAS SEIS REGLAS DE PUBLICACIÓN (ninguna pantalla con datos de paciente,
 * ninguna afirmación de validez legal o sanitaria, ninguna fecha, ningún
 * nombre de los profesionales que acompañan, ningún bloqueo ni detalle de
 * seguridad, y el estado dicho primero) están escritas en la cabecera de
 * `src/content/klinoda.es.js`. Antes de tocar un texto de esta página, leerlas.
 */
import FeatureGrid from '../../../blocks/pages/FeatureGrid';
import Fit from '../../../blocks/pages/Fit';
import PageHero from '../../../blocks/pages/PageHero';
import Privacy from '../../../blocks/pages/Privacy';
import ProductBand from '../../../blocks/pages/ProductBand';
import StatusBanner from '../../../blocks/pages/StatusBanner';
import Steps from '../../../blocks/pages/Steps';
import FinalCta from '../../../blocks/FinalCta';
import Numbers from '../../../blocks/Numbers';
import SiteFooter from '../../../components/SiteFooter';
import SiteHeader from '../../../components/SiteHeader';
import BackToTop from '../../../components/ui/BackToTop';
import { getKlinoda } from '../../../content';
import { defaultLanguage, languages } from '../../../i18n/settings';
import { pageMetadata, softwareSchema } from '../../../lib/seo';

const idioma = (lang) => (languages.includes(lang) ? lang : defaultLanguage);
const RUTA = '/klinoda';

export function generateMetadata({ params }) {
  const lang = idioma(params.lang);
  return pageMetadata({ lang, path: RUTA, meta: getKlinoda(lang).meta });
}

export default function KlinodaPage({ params }) {
  const lang = idioma(params.lang);
  const content = getKlinoda(lang);

  const datos = softwareSchema({
    name: 'KLINODA',
    description: content.meta.description,
    url: `/${lang}${RUTA}`,
  });

  return (
    <>
      <SiteHeader lang={lang} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datos) }}
      />
      <main>
        <PageHero content={{ ...content.hero, secondaryHref: '#proceso' }} />
        <StatusBanner content={content.status} />
        {/* <FeatureGrid /> llama `intro` al párrafo de entrada; aquí se llama
            `text`. Se traduce en la composición y no renombrando el contenido:
            el archivo de textos se lee como prosa, no como un formulario que
            hay que rellenar con las claves correctas. */}
        <FeatureGrid
          content={{ ...content.problem, intro: content.problem.text }}
          columns={3}
          id="problema"
        />
        <Steps content={content.how} />
        <Privacy content={content.privacy} />
        <Numbers content={content.built} />
        <Fit content={content.fit} />
        <ProductBand content={content.company} href={`/${lang}/servicios/soluciones-digitales`} />
        <FinalCta content={content.cta} />
      </main>
      <SiteFooter lang={lang} />
      <BackToTop />
    </>
  );
}
