'use client';

/**
 * Sección 3 · El problema que resolvemos.
 *
 * Cabecera (eyebrow + titular + intro) + cuadrícula de 6 tarjetas con las
 * preguntas reales de dueños/gerentes (reveal escalonado al hacer scroll,
 * elevación y borde índigo al hover) + bloque destacado "RESULTADO" con
 * degradado índigo→iris.
 */
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import SectionHeader from '../components/SectionHeader';
import {
  DollarSignIcon,
  DropletIcon,
  LayersIcon,
  PieChartIcon,
  TargetIcon,
  TrendingUpIcon,
} from '../components/icons';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';

/** Preguntas (texto en locales) + icono asociado */
const QUESTIONS = [
  { key: 'q1', Icon: TrendingUpIcon },
  { key: 'q2', Icon: DollarSignIcon },
  { key: 'q3', Icon: DropletIcon },
  { key: 'q4', Icon: PieChartIcon },
  { key: 'q5', Icon: LayersIcon },
  { key: 'q6', Icon: TargetIcon },
];

export default function Problem() {
  const { t } = useTranslation();

  return (
    <section id="problema" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow={t('problem.eyebrow')}
          title={t('problem.title')}
          intro={t('problem.intro')}
        />

        {/* ---------- Cuadrícula de preguntas ---------- */}
        <motion.ul
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {QUESTIONS.map(({ key, Icon }) => (
            <motion.li
              key={key}
              variants={fadeUp}
              className="group rounded-2xl border border-softblue bg-white p-6 shadow-sm transition-all duration-300 hover:border-indigo/60 hover:shadow-card motion-safe:hover:-translate-y-1.5 dark:border-white/10 dark:bg-white/5 dark:hover:border-lavender/50"
            >
              {/* Icono en tesela — se invierte al hover */}
              <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-indigo/10 text-indigo transition-colors duration-300 group-hover:bg-indigo group-hover:text-white dark:bg-lavender/15 dark:text-lavender dark:group-hover:bg-lavender dark:group-hover:text-navy">
                <Icon className="h-5 w-5" />
              </span>
              <p className="font-display text-base font-semibold leading-snug text-slate dark:text-smoke">
                {t(`problem.${key}`)}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        {/* ---------- Bloque RESULTADO ---------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-14 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo to-iris px-8 py-11 text-center shadow-card md:px-14 md:py-14"
        >
          {/* Brillos decorativos */}
          <span aria-hidden="true" className="absolute -left-12 -top-12 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
          <span aria-hidden="true" className="absolute -bottom-14 -right-10 h-52 w-52 rounded-full bg-navy/20 blur-2xl" />

          <p className="relative text-xs font-bold uppercase tracking-[0.3em] text-white/75">
            {t('problem.resultLabel')}
          </p>
          <p className="relative mx-auto mt-3 max-w-2xl font-display text-2xl font-bold leading-snug text-white md:text-[1.9rem]">
            {t('problem.resultText')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
