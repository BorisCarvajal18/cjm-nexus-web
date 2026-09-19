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
 * Los plazos del bloque 3 los confirmó Richard el 18 de septiembre de 2026
 * (`docs/preguntas-richard.md`). Las preguntas del bloque 7 siguen siendo
 * las propuestas hasta que haya clientes con quienes contrastarlas
 * (`.impeccable/CONSTRUCCION.md`, «Revisar con clientes reales»).
 */
import BoardShowcase from "../../../../blocks/pages/BoardShowcase";
import Faq from "../../../../blocks/pages/Faq";
import FeatureGrid from "../../../../blocks/pages/FeatureGrid";
import Fit from "../../../../blocks/pages/Fit";
import PageHero from "../../../../blocks/pages/PageHero";
import TableroGerencial from "../../../../components/registro/TableroGerencial";
import Steps from "../../../../blocks/pages/Steps";
import Symptoms from "../../../../blocks/pages/Symptoms";
import FinalCta from "../../../../blocks/FinalCta";
import SiteFooter from "../../../../components/SiteFooter";
import SiteHeader from "../../../../components/SiteHeader";
import { getFinanzas, getHome, getSitio } from "../../../../content";
import { existe } from "../../../../i18n/rutas.mjs";
import { defaultLanguage, languages } from "../../../../i18n/settings";
import { faqSchema, pageMetadata, serviceSchema } from "../../../../lib/seo";

const idioma = (lang) => (languages.includes(lang) ? lang : defaultLanguage);
const RUTA = "/servicios/direccion-financiera";

/* Esta página no existe en todos los idiomas (`i18n/rutas.mjs`): donde no
   existe no se genera, y `next.config.mjs` redirige a la más cercana. */
export function generateStaticParams({ params }) {
  return existe(params.lang, RUTA) ? [{}] : [];
}

export function generateMetadata({ params }) {
  const lang = idioma(params.lang);
  return pageMetadata({ lang, path: RUTA, meta: getFinanzas(lang).meta });
}

export default function DireccionFinancieraPage({ params }) {
  const lang = idioma(params.lang);
  const content = getFinanzas(lang);
  // Las interfaces de muestra de la portada: el tablero de la cabecera y el rótulo.
  const muestras = getHome(lang).hacemos;

  /* Datos estructurados. Las preguntas se derivan del MISMO array que se
     pinta más abajo: así es imposible que el buscador enseñe una respuesta
     que en la página dice otra cosa. */
  const datos = [
    serviceSchema({
      name: content.meta.servicio,
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
        <PageHero
          content={{ ...content.hero, secondaryHref: "#entregable" }}
          figura={
            // El tablero de la portada, quieto: el momento de esta página sigue
            // siendo «El tablero se dibuja», más abajo.
            <div className="caja-pieza">
              <TableroGerencial datos={muestras.tablero} />
              <p className="muestra">{muestras.muestra}</p>
            </div>
          }
        />
        <Symptoms
          content={content.symptoms}
          comillas={getSitio(lang).comillas}
        />
        <Steps content={content.month} />
        <BoardShowcase
          content={content.deliverable}
          muestra={muestras.muestra}
        />
        <FeatureGrid content={content.deliverables} columns={3} />
        <Fit content={content.fit} />
        <Faq content={content.faq} />
        <FinalCta content={content.cta} lang={lang} />
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
