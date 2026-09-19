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
 * la portada con la maqueta. El método vive ahora en /servicios (#metodo).
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
import SiteFooter from '../../components/SiteFooter';
import SiteHeader from '../../components/SiteHeader';
import { getHome } from '../../content';
import { defaultLanguage, languages } from '../../i18n/settings';

export default function HomePage({ params }) {
  const lang = languages.includes(params.lang) ? params.lang : defaultLanguage;
  const home = getHome(lang);

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
