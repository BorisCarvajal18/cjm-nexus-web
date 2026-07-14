'use client';

/**
 * Sección 9 · Footer — navy oscuro permanente en ambos temas.
 *
 * - Marca (Logo tone dark) + eslogan + selector de idioma.
 * - Columnas: navegación (mismos enlaces de la navbar vía lib/site),
 *   contacto (WhatsApp EC/DE, correo, web) y alcance regional.
 * - Línea inferior con copyright de año dinámico y eslogan de marca.
 */
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import Logo from '../components/Logo';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { GlobeIcon, MailIcon, MessageCircleIcon } from '../components/icons';
import { fadeUp } from '../lib/motion';
import { CONTACTS, NAV_LINKS, WEBSITE } from '../lib/site';

const ICONS = { whatsapp: MessageCircleIcon, mail: MailIcon, globe: GlobeIcon };

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const contactItems = [...CONTACTS, WEBSITE];

  return (
    <footer className="border-t border-white/5 bg-navy-dark text-smoke">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        className="container py-14 md:py-16"
      >
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1fr] lg:gap-8">
          {/* ---------- Marca + eslogan + idioma ---------- */}
          <div>
            <Logo tone="dark" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-smoke/60">
              {t('footer.slogan')}
            </p>
            <LanguageSwitcher layoutGroupId="footer" tone="dark" className="mt-6 w-fit" />
          </div>

          {/* ---------- Navegación ---------- */}
          <nav aria-label={t('footer.navTitle')}>
            <h3 className="text-xs font-bold uppercase tracking-widest text-smoke/60">
              {t('footer.navTitle')}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map(({ id, key }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-sm text-smoke/70 transition-colors hover:text-lavender"
                  >
                    {t(`nav.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---------- Contacto ---------- */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-smoke/60">
              {t('footer.contactTitle')}
            </h3>
            <ul className="mt-4 space-y-3.5">
              {contactItems.map(({ key, icon, value, href, external }) => {
                const Icon = ICONS[icon];
                return (
                  <li key={key}>
                    <a
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group flex items-start gap-2.5 text-sm"
                    >
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-lavender/80" />
                      <span>
                        <span className="block text-xs text-smoke/60">{t(`contact.${key}`)}</span>
                        <span className="text-smoke/80 transition-colors group-hover:text-lavender">
                          {value}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ---------- Alcance ---------- */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-smoke/60">
              {t('footer.reachTitle')}
            </h3>
            <p className="mt-4 flex items-start gap-2.5 text-sm text-smoke/70">
              <GlobeIcon className="mt-0.5 h-4 w-4 shrink-0 text-lavender/80" />
              {t('hero.regions')}
            </p>
          </div>
        </div>
      </motion.div>

      {/* ---------- Línea inferior ---------- */}
      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-smoke/50 md:flex-row md:text-left">
          <p>
            © {year} CJM Nexus. {t('footer.rights')}
          </p>
          <p className="text-smoke/55">{t('common.tagline')}</p>
        </div>
      </div>
    </footer>
  );
}
