'use client';

/**
 * <LanguageSwitcher /> — selector de idioma ES / EN / DE.
 *
 * En la versión Next cada idioma es una URL real (/es, /en, /de), así que
 * cambiar de idioma es NAVEGAR con <Link> (no un simple cambio en cliente).
 * Esto hace que cada idioma sea una página indexable independiente, y la
 * navegación entre locales ocurre sin recargar (client-side routing).
 *
 * La "píldora" activa se desliza entre opciones con una animación layout de
 * Framer Motion.
 *
 * Props:
 * - layoutGroupId: prefijo único del layoutId cuando hay más de una instancia
 *   montada (navbar desktop, panel móvil, footer).
 * - tone: 'auto' sigue el tema; 'dark' para fondos navy permanentes.
 */
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { defaultLanguage, languages } from '../i18n/settings';

// Los nombres se muestran SIEMPRE en su propio idioma (convención de
// accesibilidad para selectores de idioma), por eso no salen de locales/.
const LANG_META = [
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
];

/** Deriva el idioma activo del primer segmento de la ruta (p. ej. "/en") */
function currentLangFrom(pathname) {
  const seg = (pathname || '/').split('/')[1];
  return languages.includes(seg) ? seg : defaultLanguage;
}

export default function LanguageSwitcher({ layoutGroupId = 'nav', tone = 'auto', className = '' }) {
  const { t } = useTranslation();
  const current = currentLangFrom(usePathname());

  const containerCls =
    tone === 'dark'
      ? 'border-white/15 bg-white/10'
      : 'border-softblue bg-white/70 dark:border-white/10 dark:bg-white/5';
  const inactiveCls =
    tone === 'dark'
      ? 'text-smoke/60 hover:text-lavender'
      : 'text-slate-muted hover:text-indigo dark:text-smoke/60 dark:hover:text-lavender';

  return (
    <div
      role="group"
      aria-label={t('nav.language')}
      className={`flex items-center rounded-full border p-1 ${containerCls} ${className}`}
    >
      {LANG_META.map(({ code, label, name }) => {
        const active = current === code;
        return (
          <Link
            key={code}
            href={`/${code}`}
            lang={code}
            hrefLang={code}
            aria-label={name}
            aria-current={active ? 'true' : undefined}
            className={`relative rounded-full px-2.5 py-1 text-xs font-bold tracking-wide transition-colors ${
              active ? 'text-white' : inactiveCls
            }`}
          >
            {/* Píldora índigo que se desliza hasta la opción activa */}
            {active && (
              <motion.span
                layoutId={`${layoutGroupId}-lang-pill`}
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-indigo shadow-sm"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">{label}</span>
          </Link>
        );
      })}
    </div>
  );
}
