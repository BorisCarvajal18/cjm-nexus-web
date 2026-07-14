'use client';

/**
 * Sección 8 · CTA final "Da el siguiente paso".
 *
 * Banda navy permanente (#0B1437) con degradado índigo, malla clara y
 * glows. Titular grande con la primera parte en degradado de marca,
 * texto de apoyo, CalendlyButton principal en variante clara y contactos
 * directos: WhatsApp Ecuador, WhatsApp Alemania y correo.
 * Todo entra escalonado al hacer scroll.
 */
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import CalendlyButton from '../components/CalendlyButton';
import BrochureDownload from '../components/BrochureDownload';
import { MailIcon, MessageCircleIcon } from '../components/icons';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';
import { CONTACTS } from '../lib/site';

const ICONS = { whatsapp: MessageCircleIcon, mail: MailIcon };

export default function FinalCta() {
  const { t } = useTranslation();

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-navy py-24 text-smoke dark:bg-navy-dark md:py-32"
    >
      {/* ---------- Decoración: malla + glows índigo/iris ---------- */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-navy" />
        <div className="absolute -top-32 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-indigo/25 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-iris/20 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-lavender/15 blur-3xl" />
      </div>

      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container relative max-w-4xl text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
        >
          <span className="bg-nexus-gradient bg-clip-text text-transparent">{t('cta.title1')}</span>{' '}
          {t('cta.title2')}
        </motion.h2>

        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg text-smoke/70">
          {t('cta.text')}
        </motion.p>

        {/* CTA principal + descarga de brochure (lead magnet) */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <CalendlyButton variant="light" size="lg" />
          <BrochureDownload variant="lightOutline" size="lg" />
        </motion.div>

        {/* Separador + contactos directos */}
        <motion.p
          variants={fadeUp}
          className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-smoke/60"
        >
          {t('cta.orContact')}
        </motion.p>

        <div className="mt-5 flex flex-wrap items-stretch justify-center gap-3 md:gap-4">
          {CONTACTS.map(({ key, icon, value, href, external }) => {
            const Icon = ICONS[icon];
            return (
              <motion.a
                key={key}
                variants={fadeUp}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-left transition-all duration-200 hover:border-lavender/50 hover:bg-white/10 motion-safe:hover:-translate-y-0.5"
              >
                <Icon className="h-5 w-5 shrink-0 text-lavender" />
                <span className="block">
                  <span className="block text-xs font-medium text-smoke/50">{t(`contact.${key}`)}</span>
                  <span className="block text-sm font-semibold text-smoke transition-colors group-hover:text-lavender">
                    {value}
                  </span>
                </span>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
