/**
 * Portada de CJM Nexus — la maqueta aprobada el 13 de septiembre de 2026
 * (`.impeccable/mocks/portada/C-fusion.html`), pasada al sitio.
 *
 * DOS MUNDOS (DESIGN.md). De día, sobre papel, lo que la firma ofrece:
 *
 *  1. Portada — vídeo, titular y «Agendar».
 *  2. Credenciales — tres cifras a nombre de quien las sostiene.
 *  3. Qué hacemos — las dos líneas, con el mismo peso, en la escena de los
 *     tableros.
 *
 * De noche, sobre marino, la prueba y la decisión:
 *
 *  4. KLINODA — empresa del Grupo CJM Nexus; una puerta a su página.
 *  5. Cierre — la reunión de veinte minutos.
 *
 * <Noche /> no pinta contenido: es la capa que oscurece la página al entrar
 * KLINODA. Va la última porque ordena y recalcula los ScrollTrigger.
 *
 * El método, el equipo, la cinta de hechos y las cifras antiguas salieron de
 * la portada con la maqueta. El método vive en /nosotros (#metodo).
 *
 * LA PORTADA ALEMANA (`variante: 'digital'` en `home.de.js`; propuesta 5 de
 * REVISION-GENERAL.md, aprobada en .impeccable/TRADUCCION.md): en Berlín solo
 * se ofrece la línea digital, así que no hay dos líneas que pesar. Portada →
 * credenciales de la línea digital → la oferta de la web en una semana (con
 * su momento y las tres portadas) → KLINODA como banda → cierre. Sin la
 * escena de los tableros ni la de KLINODA; <Noche /> solo avisa del cierre.
 *
 * Este archivo solo COMPONE. Los textos viven en `src/content/` y la
 * maquetación en `src/blocks/registro/`.
 */
import Cierre from '../../blocks/registro/Cierre';
import Credenciales from '../../blocks/registro/Credenciales';
import Noche from '../../blocks/registro/Noche';
import Portada from '../../blocks/registro/Portada';
import PuertaKlinoda from '../../blocks/registro/PuertaKlinoda';
import QueHacemos from '../../blocks/registro/QueHacemos';
import Offer from '../../blocks/pages/Offer';
import ProductBand from '../../blocks/pages/ProductBand';
import SiteFooter from '../../components/SiteFooter';
import SiteHeader from '../../components/SiteHeader';
import { getDigital, getHome, getPortafolio } from '../../content';
import { defaultLanguage, languages } from '../../i18n/settings';

export default function HomePage({ params }) {
  const lang = languages.includes(params.lang) ? params.lang : defaultLanguage;
  const home = getHome(lang);

  if (home.variante === 'digital') {
    return (
      <>
        <SiteHeader lang={lang} />
        <main>
          <Portada content={home.portada} />
          <Credenciales content={home.credenciales} />
          <Offer content={getDigital(lang).web} id="web" semana lang={lang} portafolio={getPortafolio(lang)} />
          <ProductBand content={home.klinoda} href={`/${lang}/klinoda`} />
          <Cierre content={home.cierre} lang={lang} />
          <Noche />
        </main>
        <SiteFooter lang={lang} />
      </>
    );
  }

  return (
    <>
      <SiteHeader lang={lang} />
      <main>
        <Portada content={home.portada} />
        <Credenciales content={home.credenciales} />
        <QueHacemos content={home.hacemos} lang={lang} />
        <PuertaKlinoda content={home.klinoda} lang={lang} />
        <Cierre content={home.cierre} lang={lang} />
        <Noche />
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
