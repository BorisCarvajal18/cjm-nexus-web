'use client';

/**
 * Sección 4 · Línea 01 — Finanzas Estratégicas.
 *
 * Banda blanca (claro) / panel sutilmente más claro (oscuro) con:
 * cabecera, cuadrícula de 6 servicios con reveal escalonado al scroll,
 * franja de "Entregables principales" como chips y marca de agua "01".
 */
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import {
  BarChart2Icon,
  CheckIcon,
  CompassIcon,
  RefreshCwIcon,
  SearchIcon,
  SlidersIcon,
  TrendingUpIcon,
} from '../components/icons';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';

/** Servicios (textos en locales) + icono asociado */
const SERVICES = [
  { key: 's1', Icon: SearchIcon },     // Diagnóstico financiero ejecutivo
  { key: 's2', Icon: CompassIcon },    // Dirección financiera estratégica
  { key: 's3', Icon: TrendingUpIcon }, // Análisis de rentabilidad
  { key: 's4', Icon: SlidersIcon },    // Control de costos y gastos
  { key: 's5', Icon: RefreshCwIcon },  // Flujo de caja
  { key: 's6', Icon: BarChart2Icon },  // KPIs financieros
];

const DELIVERABLES = ['d1', 'd2', 'd3', 'd4'];

export default function Finance() {
  const { t } = useTranslation();

  return (
    <section
      id="finanzas"
      className="relative overflow-hidden border-y border-softblue/60 bg-white py-24 dark:border-white/5 dark:bg-navy-light/25 md:py-32"
    >
      {/* Marca de agua decorativa "01" */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-9 right-6 hidden select-none font-display text-[11rem] font-bold leading-none text-indigo/5 dark:text-white/5 lg:block"
      >
        01
      </span>

      <div className="container relative">
        <SectionHeader
          eyebrow={t('finance.eyebrow')}
          title={t('finance.title')}
          intro={t('finance.intro')}
        />

        {/* ---------- Cuadrícula de servicios ---------- */}
        <motion.ul
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {SERVICES.map(({ key, Icon }) => (
            <ServiceCard
              key={key}
              Icon={Icon}
              title={t(`finance.${key}.title`)}
              text={t(`finance.${key}.text`)}
            />
          ))}
        </motion.ul>

        {/* ---------- Entregables principales (chips) ---------- */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 rounded-3xl border border-softblue/80 bg-smoke/70 px-6 py-8 text-center dark:border-white/10 dark:bg-white/[0.04] md:px-10"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.22em] text-slate-muted dark:text-smoke/50"
          >
            {t('finance.deliverablesLabel')}
          </motion.p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {DELIVERABLES.map((k) => (
              <motion.li
                key={k}
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-indigo/25 bg-white px-4 py-2 text-sm font-semibold text-slate shadow-sm transition-colors duration-200 hover:border-indigo hover:text-indigo dark:border-lavender/25 dark:bg-white/5 dark:text-smoke dark:hover:border-lavender dark:hover:text-lavender"
              >
                <CheckIcon className="h-4 w-4 shrink-0 text-indigo dark:text-lavender" />
                {t(`finance.deliverables.${k}`)}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
