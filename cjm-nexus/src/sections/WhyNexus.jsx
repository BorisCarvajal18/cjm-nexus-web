'use client';

/**
 * Sección 6 · Por qué elegir CJM Nexus.
 *
 * - Titular en dos partes (la segunda resaltada en índigo/lavanda).
 * - 3 razones numeradas 01–03 en estilo editorial (regla superior +
 *   número con degradado), con reveal escalonado al scroll.
 * - Franja de métricas con CONTADORES ANIMADOS que se disparan al entrar
 *   en el viewport (AnimatedCounter usa useInView de Framer Motion).
 * - Frase de cierre.
 */
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import AnimatedCounter from '../components/AnimatedCounter';
import SectionHeader from '../components/SectionHeader';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';

const REASONS = ['r1', 'r2', 'r3'];

export default function WhyNexus() {
  const { t } = useTranslation();

  return (
    <section id="por-que" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow={t('why.eyebrow')}
          title={
            <>
              {t('why.title1')}{' '}
              <span className="text-indigo dark:text-lavender">{t('why.title2')}</span>
            </>
          }
          intro={t('why.intro')}
        />

        {/* ---------- 3 razones numeradas ---------- */}
        <motion.ol
          variants={stagger(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8"
        >
          {REASONS.map((key, i) => (
            <motion.li
              key={key}
              variants={fadeUp}
              className="border-t-2 border-softblue pt-6 dark:border-white/10"
            >
              <span
                aria-hidden="true"
                className="bg-nexus-gradient bg-clip-text font-display text-4xl font-bold text-transparent"
              >
                {`0${i + 1}`}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-slate dark:text-smoke">
                {t(`why.${key}.title`)}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-light dark:text-smoke/60">
                {t(`why.${key}.text`)}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        {/* ---------- Franja de métricas con contadores ---------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo to-iris px-6 py-10 shadow-card md:px-10 md:py-12"
        >
          {/* Brillos decorativos */}
          <span aria-hidden="true" className="absolute -top-16 left-1/4 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <span aria-hidden="true" className="absolute -bottom-20 right-8 h-56 w-56 rounded-full bg-navy/20 blur-3xl" />

          <dl className="relative grid grid-cols-2 gap-x-4 gap-y-10 text-center lg:grid-cols-4">
            <Stat
              value={<AnimatedCounter to={15} duration={1.8} format={(v) => `${Math.round(v)}+`} />}
              label={t('why.stats.s1')}
            />
            <Stat
              value={<AnimatedCounter to={100} duration={2} format={(v) => `${Math.round(v)}+`} />}
              label={t('why.stats.s2')}
              divider
            />
            <Stat value={<AnimatedCounter to={3} duration={1.4} />} label={t('why.stats.s3')} divider />
            <Stat
              value={
                <>
                  <AnimatedCounter to={2} duration={1.2} />{' '}
                  <span className="text-2xl md:text-3xl">{t('why.stats.s4Value')}</span>
                </>
              }
              label={t('why.stats.s4')}
              divider
            />
          </dl>
        </motion.div>

        {/* ---------- Frase de cierre ---------- */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-12 max-w-2xl text-center font-display text-xl font-bold text-slate dark:text-smoke md:text-2xl"
        >
          {t('why.closing')}
        </motion.p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/** Métrica de la franja: valor grande + etiqueta (dt/dd accesibles) */
function Stat({ value, label, divider = false }) {
  return (
    <div className={`flex flex-col-reverse gap-2 ${divider ? 'lg:border-l lg:border-white/15' : ''}`}>
      <dt className="text-sm font-medium text-white/75">{label}</dt>
      <dd className="font-display text-4xl font-bold text-white md:text-5xl">{value}</dd>
    </div>
  );
}
