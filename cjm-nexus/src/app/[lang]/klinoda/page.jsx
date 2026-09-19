/**
 * KLINODA — /es/klinoda: un aviso corto, no una página vacía.
 *
 * CAMBIO DE ALCANCE (Boris, 2026-09-19): KLINODA tendrá su propia web y la
 * página larga se retiró (sigue en git, commit f4bd24d). Aquí queda lo justo
 * para quien llega desde las bandas de KLINODA: que su web está en camino,
 * qué es, su estado, y escribirnos o volver.
 *
 * - NO SE INDEXA (`robots: noindex`) y no está en el sitemap.
 * - EL DÍA QUE EXISTA SU WEB se escribe su dirección en `KLINODA_WEB`
 *   (`src/lib/destinos.mjs`) y `next.config.mjs` redirige esta ruta allí.
 * - Sin «Agendar» en la página: el relleno cobre sigue en la cabecera. Aquí
 *   la acción es el botón de contorno (The Copper-Fill Rule).
 * - Quieta, y el texto está en el HTML.
 */
import Flecha from '../../../components/registro/Flecha';
import Resaltado from '../../../components/registro/Resaltado';
import SiteFooter from '../../../components/SiteFooter';
import SiteHeader from '../../../components/SiteHeader';
import { getKlinoda } from '../../../content';
import { defaultLanguage, languages } from '../../../i18n/settings';
import { pageMetadata } from '../../../lib/seo';
import { CORREO } from '../../../lib/site';

const idioma = (lang) => (languages.includes(lang) ? lang : defaultLanguage);
const RUTA = '/klinoda';

export function generateMetadata({ params }) {
  const lang = idioma(params.lang);
  return {
    ...pageMetadata({ lang, path: RUTA, meta: getKlinoda(lang).meta }),
    robots: { index: false, follow: true },
  };
}

export default function KlinodaPage({ params }) {
  const lang = idioma(params.lang);
  const a = getKlinoda(lang).aviso;
  const correo = CORREO;

  return (
    <>
      <SiteHeader lang={lang} />
      <main>
        <section className="registro pag-cabeza aviso-klinoda">
          <div className="marco">
            <p className="ref-pag">{a.eyebrow}</p>
            <h1>
              <Resaltado title={a.title} highlight={a.highlight} />
            </h1>
            <p className="entrada">{a.lead}</p>
            <p className="entrada segunda">{a.segunda}</p>
            <p className="k-etiqueta">{a.estado}</p>
            <div className="acciones">
              <a className="boton-contorno" href={`${correo}?subject=${encodeURIComponent(a.asunto)}`}>
                <span>{a.escribir}</span>
                <Flecha />
              </a>
              <a className="enlace adelante" href={`/${lang}`}>
                <span>{a.volver}</span>
                <Flecha />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
