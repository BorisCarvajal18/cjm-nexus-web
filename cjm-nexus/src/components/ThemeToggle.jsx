'use client';

/**
 * <ThemeToggle /> — botón de modo claro/oscuro con icono sol/luna animado.
 * El icono rota y escala al cambiar (Framer Motion); la preferencia se
 * persiste vía useTheme (localStorage 'cjm-theme').
 *
 * Guard de montaje: hasta hidratar en cliente se muestra el icono del modo
 * claro (el valor por defecto del SSR), evitando desajustes de hidratación
 * para quienes tengan guardado el modo oscuro.
 */
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useTheme from '../hooks/useTheme';

const ICON_TRANSITION = { duration: 0.25, ease: 'easeOut' };

export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const showDark = mounted && isDark;
  const label = showDark ? t('nav.themeLight') : t('nav.themeDark');

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-softblue bg-white/70 text-slate transition-colors hover:border-indigo hover:text-indigo dark:border-white/10 dark:bg-white/5 dark:text-smoke dark:hover:border-lavender dark:hover:text-lavender ${className}`}
    >
      {/* mode="wait": el icono saliente termina de girar antes de entrar el nuevo */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={showDark ? 'moon' : 'sun'}
          initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
          transition={ICON_TRANSITION}
          className="grid place-items-center"
        >
          {showDark ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

/* Iconos inline (trazo currentColor) — sin dependencias externas */

function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41" />
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
    </svg>
  );
}
