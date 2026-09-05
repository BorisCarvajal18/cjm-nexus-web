/**
 * Portada de CJM Nexus.
 *
 * ORDEN DE LOS BLOQUES, y por qué es ese:
 *
 *  1. Portada — qué hacemos, para quién, qué valor, qué hacer ahora.
 *  2. Cinta de hechos — razones para creer ANTES de pedir nada.
 *  3. Manifiesto — el problema del cliente, con sus palabras.
 *  4. Los dos campos — la oferta, con KLINODA como tercer panel.
 *  5. Tablero gerencial — el momento visual grande, sobre lo que la mayoría
 *     viene a comprar.
 *  6. Proyectos — evidencia, contada con su estado real.
 *  7. Cifras — cuatro datos sostenibles.
 *  8. Método — cómo trabajamos, con un ejemplo comprobable por regla.
 *  9. Equipo — quiénes somos.
 * 10. Cierre — la reunión.
 *
 * Este archivo solo COMPONE. Los textos viven en `src/content/` y la
 * maquetación en `src/blocks/`, de modo que traducir no obliga a tocar
 * ningún componente y cambiar una frase no obliga a leer JSX.
 */
import DeliverableFrame from '../../blocks/DeliverableFrame';
import FactsTicker from '../../blocks/FactsTicker';
import FinalCta from '../../blocks/FinalCta';
import Hero from '../../blocks/Hero';
import ManifestoBlock from '../../blocks/ManifestoBlock';
import Method from '../../blocks/Method';
import Numbers from '../../blocks/Numbers';
import ProjectsStrip from '../../blocks/ProjectsStrip';
import Team from '../../blocks/Team';
import TwoFields from '../../blocks/TwoFields';
import SiteFooter from '../../components/SiteFooter';
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
        <TwoFields content={home.fields} />
        <DeliverableFrame content={home.deliverable} />
        <ProjectsStrip content={home.projects} />
        <Numbers content={home.numbers} />
        <Method content={home.method} />
        <Team content={home.team} />
        <FinalCta content={home.cta} />
      </main>
      <SiteFooter />
    </>
  );
}
