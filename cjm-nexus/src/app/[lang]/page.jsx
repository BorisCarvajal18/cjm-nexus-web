'use client';

/**
 * Página one-page de CJM Nexus (SSR/SSG).
 *
 * Aunque es un Client Component (todas las secciones son interactivas),
 * Next lo renderiza también en el servidor: los textos, títulos y enlaces
 * existen en el HTML servido. El orden de secciones (1–9) es el del brief.
 *
 * El <h1> descriptivo único de la página vive en <Hero />; el resto de
 * secciones usan <h2>/<h3>.
 */
import { useTranslation } from 'react-i18next';

import Navbar from '../../sections/Navbar';
import Hero from '../../sections/Hero';
import Problem from '../../sections/Problem';
import Finance from '../../sections/Finance';
import Technology from '../../sections/Technology';
import WhyNexus from '../../sections/WhyNexus';
import Process from '../../sections/Process';
import FinalCta from '../../sections/FinalCta';
import Footer from '../../sections/Footer';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Enlace de salto para navegación con teclado / lectores de pantalla */}
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-indigo focus:px-5 focus:py-2.5 focus:text-white"
      >
        {t('common.skipToContent')}
      </a>

      <Navbar /> {/* 1 · Navegación fija */}

      <main>
        <Hero />       {/* 2 · Hero + demo interactiva          → #inicio     */}
        <Problem />    {/* 3 · El problema que resolvemos       → #problema   */}
        <Finance />    {/* 4 · Línea 01 · Finanzas Estratégicas → #finanzas   */}
        <Technology /> {/* 5 · Línea 02 · Tecnología a la Medida→ #tecnologia */}
        <WhyNexus />   {/* 6 · Por qué elegir CJM Nexus         → #por-que    */}
        <Process />    {/* 7 · Cómo trabajamos                  → #proceso    */}
        <FinalCta />   {/* 8 · CTA final "Da el siguiente paso" → #contacto   */}
      </main>

      <Footer /> {/* 9 · Footer */}
    </div>
  );
}
