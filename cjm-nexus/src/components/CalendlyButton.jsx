'use client';

/**
 * <CalendlyButton /> — botón reutilizable "Diagnóstico Ejecutivo".
 *
 * Abre el popup oficial de Calendly (vía useCalendly). El texto sale de
 * i18n (common.diagnosticCta) salvo que se pase `children`.
 *
 * Props:
 * - variant: 'primary' (índigo) | 'outline' (borde, fondos claros) | 'light' (blanco, secciones navy)
 * - size:    'sm' | 'md' | 'lg'
 * - className: clases extra de Tailwind para casos puntuales
 */
import { useTranslation } from 'react-i18next';
import useCalendly from '../hooks/useCalendly';

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold ' +
  'transition-all duration-200 motion-safe:hover:-translate-y-0.5 active:translate-y-0 ' +
  'focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2';

const VARIANTS = {
  // Botón principal sobre fondos claros u oscuros
  primary:
    'bg-indigo text-white shadow-lg shadow-indigo/30 hover:bg-indigo-dark hover:shadow-indigo/40',
  // Botón secundario con borde para fondos claros
  outline:
    'border border-softblue bg-white/60 text-slate hover:border-indigo hover:text-indigo ' +
    'dark:border-white/15 dark:bg-white/5 dark:text-smoke dark:hover:border-lavender dark:hover:text-lavender',
  // Botón claro para secciones oscuras (navy)
  light: 'bg-white text-navy shadow-lg shadow-black/10 hover:bg-smoke',
};

const SIZES = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-6 py-3 text-sm md:text-base',
  lg: 'px-8 py-4 text-base',
};

export default function CalendlyButton({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) {
  const { t } = useTranslation();
  const openCalendly = useCalendly();

  return (
    <button
      type="button"
      onClick={openCalendly}
      className={`${BASE} ${VARIANTS[variant] ?? VARIANTS.primary} ${SIZES[size] ?? SIZES.md} ${className}`}
    >
      {children ?? t('common.diagnosticCta')}
    </button>
  );
}
