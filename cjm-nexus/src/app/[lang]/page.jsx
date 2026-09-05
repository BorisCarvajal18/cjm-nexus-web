/**
 * Portada de CJM Nexus.
 *
 * ORDEN DE LOS BLOQUES, y por qué es ese:
 *
 *  1. Portada — qué hacemos, para quién, qué valor, qué hacer ahora.
 *  2. Cinta de hechos — razones para creer ANTES de pedir nada.
 *  3. Manifiesto — el problema del cliente, con sus palabras.
 *  4. Los dos campos — la oferta, con KLINODA como tercer panel.
 * 5. Cifras — cuatro datos sostenibles.
 * 6. Método — cómo trabajamos, con un ejemplo comprobable por regla.
 * 7. Equipo — quiénes somos, en banda corta y con enlace a su página.
 * 8. Cierre — la reunión.
 *
 * DOS SECCIONES QUE SE RETIRARON, Y POR QUÉ:
 *
 * · Proyectos. Con tres piezas, dos de ellas esta misma web y un tablero,
 *   restaba más de lo que sumaba. Vuelve cuando haya trabajo de clientes.
 *
 * · El tablero gerencial que se expandía a pantalla completa. Era la tercera
 *   sección fijada de la portada, y fijar el desplazamiento es lo más caro
 *   que hace esta página: mientras dura, cada fotograma recalcula posiciones.
 *   Tres seguidas era demasiado para lo que aportaba. El tablero se conserva
 *   como componente y su sitio natural es la página de dirección financiera,
 *   donde puede ocupar el espacio que merece sin competir con nada.
 *
 * Este archivo solo COMPONE. Los textos viven en `src/content/` y la
 * maquetación en `src/blocks/`, de modo que traducir no obliga a tocar
 * ningún componente y cambiar una frase no obliga a leer JSX.
 */
import FactsTicker from '../../blocks/FactsTicker';
import FinalCta from '../../blocks/FinalCta';
import Hero from '../../blocks/Hero';
import ManifestoBlock from '../../blocks/ManifestoBlock';
import Method from '../../blocks/Method';
import Numbers from '../../blocks/Numbers';
import Team from '../../blocks/Team';
import TwoFields from '../../blocks/TwoFields';
import SiteFooter from '../../components/SiteFooter';
import BackToTop from '../../components/ui/BackToTop';
import SiteHeader from '../../components/SiteHeader';
import { home } from '../../content/home.es';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero content={home.hero} />
        <FactsTicker items={home.facts} />
        <ManifestoBlock content={home.manifesto} />
        <TwoFields content={home.fields} mockups={home.mockups} />
        <Numbers content={home.numbers} />
        <Method content={home.method} />
        <Team content={home.team} />
        <FinalCta content={home.cta} />
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  );
}
