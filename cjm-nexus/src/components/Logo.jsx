'use client';

/**
 * <Logo /> — marca CJM NEXUS (isotipo oficial + wordmark).
 * Enlaza al inicio de la página. Reutilizable en navbar, panel móvil y footer.
 *
 * El isotipo es la imagen oficial en public/logo.png (misma que el favicon),
 * presentada como insignia circular sobre fondo blanco para que se vea
 * completa y nítida en ambos temas.
 *
 * tone:
 * - 'auto' (por defecto): wordmark oscuro en claro / claro en oscuro.
 * - 'dark': wordmark claro siempre, para fondos navy permanentes (footer).
 */
import { useTranslation } from 'react-i18next';

export default function Logo({ onClick, className = '', tone = 'auto' }) {
  const { t } = useTranslation();
  const brand = t('common.brand'); // "CJM Nexus"
  const [first, ...rest] = brand.split(' ');
  const wordmarkCls = tone === 'dark' ? 'text-smoke' : 'text-slate dark:text-smoke';

  return (
    <a
      href="#inicio"
      onClick={onClick}
      aria-label={brand}
      className={`group inline-flex items-center gap-2.5 rounded-lg ${className}`}
    >
      {/* Isotipo oficial (decorativo: el enlace ya lleva aria-label).
          rounded-full + padding interno garantizan que el sello circular
          se vea completo, sin recortes, y gira sutilmente al hover. */}
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        width="40"
        height="40"
        className="h-10 w-10 shrink-0 rounded-full bg-white object-contain p-0.5 shadow-sm ring-1 ring-softblue/70 transition-transform duration-200 motion-safe:group-hover:rotate-6 dark:ring-white/15"
      />

      {/* Wordmark: "CJM" sólido + "NEXUS" con degradado */}
      <span className={`font-display text-lg font-bold uppercase tracking-tight md:text-xl ${wordmarkCls}`}>
        {first}{' '}
        <span className="bg-nexus-gradient bg-clip-text text-transparent">{rest.join(' ')}</span>
      </span>
    </a>
  );
}
