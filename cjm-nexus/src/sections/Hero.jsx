'use client';

/**
 * Sección 2 · Hero.
 *
 * - Fondo: degradado suave azul→lavanda en claro / navy con brillo sutil en
 *   oscuro + malla decorativa muy tenue + blobs difuminados animados.
 * - Titular grande con la parte clave resaltada en índigo (por idioma),
 *   subtítulo, CTA "Diagnóstico Ejecutivo" y alcance regional.
 * - A la derecha (o debajo en móvil): <DemoDashboard /> con flotación suave.
 * - Entrada escalonada de todo el contenido con Framer Motion.
 */
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import CalendlyButton from '../components/CalendlyButton';
import DemoDashboard from '../components/DemoDashboard';
import { GlobeIcon } from '../components/icons';
import { EASE, fadeUp, stagger } from '../lib/motion';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* ---------- Fondo decorativo ---------- */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {/* Degradado claro: azul→lavanda suave sobre blanco humo */}
        <div className="absolute inset-0 bg-gradient-to-br from-lavender/50 via-smoke to-iris/25 dark:hidden" />
        {/* Degradado oscuro: navy profundo con brillo iris sutil */}
        <div className="absolute inset-0 hidden bg-gradient-to-br from-navy via-navy to-iris/30 dark:block" />
        {/* Malla/grid muy tenue que se desvanece hacia los bordes */}
        <div className="absolute inset-0 bg-grid-hero" />
        {/* Blobs difuminados (el primero "respira" lentamente) */}
        <motion.div
          className="absolute -right-28 top-16 h-[26rem] w-[26rem] rounded-full bg-nexus-gradient opacity-25 blur-3xl dark:opacity-20"
          animate={{ scale: [1, 1.12, 1], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-lavender/40 blur-3xl dark:bg-iris/20" />
        {/* Fundido hacia la siguiente sección */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-smoke dark:to-navy" />
      </div>

      <div className="container grid items-center gap-14 pb-20 pt-32 md:pt-36 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24 lg:pt-40">
        {/* ---------- Columna de texto ---------- */}
        <motion.div
          variants={stagger(0.12, 0.1)}
          initial="hidden"
          animate="show"
          className="text-center lg:text-left"
        >
          {/* Eslogan de marca como eyebrow */}
          <motion.p
            variants={fadeUp}
            className="mb-5 inline-flex items-center rounded-full border border-indigo/20 bg-white/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-indigo backdrop-blur dark:border-lavender/25 dark:bg-white/5 dark:text-lavender sm:text-xs"
          >
            {t('common.tagline')}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-slate dark:text-smoke sm:text-5xl xl:text-6xl"
          >
            {t('hero.titleStart')}{' '}
            <span className="text-indigo dark:text-lavender">{t('hero.titleHighlight')}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-lg text-slate-light dark:text-smoke/70 lg:mx-0"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col items-center gap-5 lg:items-start">
            <CalendlyButton size="lg" />
            <p className="inline-flex items-center gap-2 text-sm font-medium text-slate-muted dark:text-smoke/60">
              <GlobeIcon className="h-4 w-4" />
              {t('hero.regions')}
            </p>
          </motion.div>
        </motion.div>

        {/* ---------- Dashboard de demostración ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
        >
          {/* Flotación suave e infinita para que se sienta "vivo" */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
          >
            <DemoDashboard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
