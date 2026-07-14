'use client';

/**
 * Sección 7 · Cómo trabajamos.
 *
 * Proceso de 3 pasos numerados con timeline:
 * - Desktop: línea horizontal degradada que se "dibuja" al hacer scroll.
 * - Móvil: conector vertical entre marcadores.
 * - Badge "Reunión inicial · Sin costo — 20 minutos" y reveal escalonado.
 * - Cierra con el botón "Diagnóstico Ejecutivo" (<CalendlyButton />).
 */
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import CalendlyButton from '../components/CalendlyButton';
import SectionHeader from '../components/SectionHeader';
import { ClockIcon } from '../components/icons';
import { EASE, fadeUp, stagger, viewportOnce } from '../lib/motion';

const STEPS = ['p1', 'p2', 'p3'];

export default function Process() {
  const { t } = useTranslation();

  return (
    <section
      id="proceso"
      className="relative border-y border-softblue/60 bg-white py-24 dark:border-white/5 dark:bg-navy-light/25 md:py-32"
    >
      <div className="container">
        <SectionHeader title={t('process.title')} />

        {/* Badge: reunión inicial sin costo */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full border border-indigo/25 bg-indigo/5 px-4 py-2 text-sm font-semibold text-indigo dark:border-lavender/25 dark:bg-lavender/10 dark:text-lavender"
        >
          <ClockIcon className="h-4 w-4 shrink-0" />
          {t('process.badge')}
        </motion.p>

        {/* ---------- Timeline de 3 pasos ---------- */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Línea conectora (desktop): base gris + trazo degradado que se dibuja.
              Va del centro del marcador 1 al centro del marcador 3
              (el último tercio de la cuadrícula queda fuera). */}
          <div
            aria-hidden="true"
            className="absolute left-7 right-[28.4%] top-7 hidden h-0.5 rounded-full bg-softblue dark:bg-white/10 lg:block"
          />
          <motion.div
            aria-hidden="true"
            className="absolute left-7 right-[28.4%] top-7 hidden h-0.5 origin-left rounded-full bg-nexus-gradient lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
          />

          <motion.ol
            variants={stagger(0.22)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-2 lg:grid-cols-3 lg:gap-8"
          >
            {STEPS.map((key, i) => (
              <motion.li key={key} variants={fadeUp} className="relative flex gap-5 lg:block">
                {/* Marcador numerado + conector vertical (solo móvil) */}
                <div className="flex flex-col items-center lg:block">
                  <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border-2 border-indigo/30 bg-white font-display text-xl font-bold text-indigo shadow-card dark:border-lavender/30 dark:bg-navy-light dark:text-lavender">
                    {i + 1}
                  </span>
                  {i < STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="mt-2 w-0.5 flex-1 rounded-full bg-softblue dark:bg-white/10 lg:hidden"
                    />
                  )}
                </div>

                {/* Contenido del paso */}
                <div className="pb-10 lg:mt-6 lg:pb-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-muted dark:text-smoke/50">
                    {t('process.step', { n: i + 1 })}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-semibold text-slate dark:text-smoke">
                    {t(`process.${key}.title`)}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-light dark:text-smoke/60">
                    {t(`process.${key}.text`)}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>

        {/* ---------- CTA ---------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 text-center"
        >
          <CalendlyButton size="lg" />
        </motion.div>
      </div>
    </section>
  );
}
