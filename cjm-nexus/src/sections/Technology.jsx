'use client';

/**
 * Sección 5 · Línea 02 — Tecnología a la Medida.
 *
 * Banda navy PERMANENTE (se mantiene oscura en ambos temas) con acento
 * lavanda para diferenciarse visualmente de la Línea 01: malla clara,
 * glows difuminados, marca de agua "02", 6 servicios con reveal al
 * scroll y frase de cierre destacada con degradado.
 */
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import {
  CpuIcon,
  DatabaseIcon,
  LayoutIcon,
  MonitorIcon,
  SmartphoneIcon,
  ZapIcon,
} from '../components/icons';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';

/** Servicios (textos en locales) + icono asociado */
const SERVICES = [
  { key: 's1', Icon: MonitorIcon },    // Página web corporativa
  { key: 's2', Icon: SmartphoneIcon }, // Aplicaciones web y móviles
  { key: 's3', Icon: LayoutIcon },     // Dashboards gerenciales
  { key: 's4', Icon: ZapIcon },        // Automatización de reportes
  { key: 's5', Icon: DatabaseIcon },   // Integración de datos
  { key: 's6', Icon: CpuIcon },        // Inteligencia artificial aplicada
];

export default function Technology() {
  const { t } = useTranslation();

  return (
    <section
      id="tecnologia"
      className="relative overflow-hidden bg-navy py-24 text-smoke dark:bg-navy-dark md:py-32"
    >
      {/* ---------- Decoración de fondo ---------- */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-navy" />
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-iris/25 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-indigo/25 blur-3xl" />
      </div>

      {/* Marca de agua decorativa "02" */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-9 right-6 hidden select-none font-display text-[11rem] font-bold leading-none text-white/5 lg:block"
      >
        02
      </span>

      <div className="container relative">
        <SectionHeader
          tone="dark"
          eyebrow={t('technology.eyebrow')}
          title={t('technology.title')}
          intro={t('technology.intro')}
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
              tone="dark"
              Icon={Icon}
              title={t(`technology.${key}.title`)}
              text={t(`technology.${key}.text`)}
            />
          ))}
        </motion.ul>

        {/* ---------- Frase de cierre ---------- */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <motion.span
            variants={fadeUp}
            aria-hidden="true"
            className="mx-auto mb-6 block h-1 w-16 rounded-full bg-nexus-gradient"
          />
          <motion.p variants={fadeUp} className="font-display text-2xl font-bold leading-snug md:text-3xl">
            <span className="text-smoke/60">{t('technology.closing1')}</span>{' '}
            <span className="bg-nexus-gradient bg-clip-text text-transparent">
              {t('technology.closing2')}
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
