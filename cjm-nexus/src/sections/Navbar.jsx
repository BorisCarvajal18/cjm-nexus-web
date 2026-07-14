'use client';

/**
 * Sección 1 · Navbar fija.
 *
 * - Glassmorphism sutil: transparente arriba del todo; al hacer scroll,
 *   fondo translúcido con blur, borde inferior y sombra suave (ref. MVP Match).
 * - Desktop: logo · 6 enlaces con scroll suave · selector ES/EN/DE ·
 *   toggle claro/oscuro · CTA "Diagnóstico Ejecutivo" (<CalendlyButton />).
 * - Móvil/tablet: toggle de tema + hamburguesa animada que abre un panel
 *   lateral con Framer Motion (backdrop, stagger de enlaces, bloqueo de
 *   scroll del body, cierre con Escape y foco gestionado).
 *
 * IMPORTANTE (fix): el overlay del menú móvil se renderiza en <body> vía
 * <Portal>. Antes vivía dentro del <header>, pero al hacer scroll el header
 * recibe `backdrop-blur` (backdrop-filter), lo que lo convierte en el bloque
 * contenedor de sus descendientes `fixed`: el panel se posicionaba respecto
 * al header (~64px) en vez de la ventana y el menú se rompía al reabrirlo tras
 * hacer scroll. Con el portal el panel siempre cubre la ventana completa.
 */
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import Logo from '../components/Logo';
import LanguageSwitcher from '../components/LanguageSwitcher';
import ThemeToggle from '../components/ThemeToggle';
import CalendlyButton from '../components/CalendlyButton';
import Portal from '../components/Portal';
import useScrolled from '../hooks/useScrolled';
import { NAV_LINKS } from '../lib/site';

export default function Navbar() {
  const { t } = useTranslation();
  const scrolled = useScrolled(12);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-softblue/60 bg-white/70 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-navy/70'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label={t('nav.menuLabel')}
        className="container flex h-16 items-center justify-between gap-4 md:h-20"
      >
        <Logo />

        {/* Enlaces de sección — solo desktop (scroll suave vía CSS scroll-behavior) */}
        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map(({ id, key }) => (
            <NavItem key={id} href={`#${id}`} label={t(`nav.${key}`)} />
          ))}
        </ul>

        {/* Controles de la derecha */}
        <div className="flex items-center gap-2 md:gap-3">
          <LanguageSwitcher className="hidden lg:flex" />
          <ThemeToggle />
          <CalendlyButton size="sm" className="hidden lg:inline-flex" />
          <HamburgerButton
            open={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          />
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Enlace de desktop con subrayado degradado animado al hover         */
/* ------------------------------------------------------------------ */
function NavItem({ href, label }) {
  return (
    <li>
      <a
        href={href}
        className="relative rounded-sm py-2 text-sm font-medium text-slate-light transition-colors hover:text-indigo dark:text-smoke/75 dark:hover:text-lavender after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-nexus-gradient after:transition-transform after:duration-300 hover:after:scale-x-100 motion-reduce:after:transition-none"
      >
        {label}
      </a>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  Hamburguesa: 3 líneas que se transforman en "X" (Framer Motion)    */
/* ------------------------------------------------------------------ */
function HamburgerButton({ open, onClick, label }) {
  const line = 'absolute left-0 block h-0.5 w-6 rounded-full bg-current';
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-expanded={open}
      aria-controls="mobile-menu"
      className="grid h-10 w-10 place-items-center rounded-full border border-softblue bg-white/70 text-slate transition-colors hover:border-indigo hover:text-indigo dark:border-white/10 dark:bg-white/5 dark:text-smoke lg:hidden"
    >
      <span className="relative block h-4 w-6" aria-hidden="true">
        <motion.span className={line} style={{ top: 0 }} initial={false} animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} />
        <motion.span className={line} style={{ top: 7 }} initial={false} animate={{ opacity: open ? 0 : 1 }} transition={{ duration: 0.15 }} />
        <motion.span className={line} style={{ top: 14 }} initial={false} animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} />
      </span>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Panel lateral móvil (renderizado en <body> vía Portal)             */
/* ------------------------------------------------------------------ */

/** Variantes: el panel entra con spring y sus hijos con stagger */
const panelVariants = {
  closed: { x: '100%', transition: { type: 'tween', duration: 0.22, ease: 'easeIn' } },
  open: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 320,
      damping: 34,
      when: 'beforeChildren',
      staggerChildren: 0.055,
      delayChildren: 0.04,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, x: 28 },
  open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 420, damping: 32 } },
};

function MobileMenu({ open, onClose }) {
  const { t } = useTranslation();
  const closeBtnRef = useRef(null);

  // Bloquea el scroll del body mientras el panel está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Cierra con Escape y lleva el foco al botón de cierre al abrir (a11y)
  useEffect(() => {
    if (!open) return undefined;
    closeBtnRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  /**
   * Navegación desde el panel: se desbloquea el scroll ANTES de desplazar
   * (con overflow:hidden el salto de ancla no funcionaría) y se actualiza
   * el hash sin provocar un segundo salto.
   */
  const handleNavigate = (e, id) => {
    e.preventDefault();
    document.body.style.overflow = '';
    onClose();
    document.getElementById(id)?.scrollIntoView(); // respeta scroll-behavior del CSS
    history.replaceState(null, '', `#${id}`);
  };

  return (
    <Portal>
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop oscuro: cierra el panel al tocarlo (por encima del header z-50) */}
            <motion.div
              key="backdrop"
              aria-hidden="true"
              onClick={onClose}
              className="fixed inset-0 z-[60] bg-navy/50 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            {/* Panel lateral */}
            <motion.aside
              key="panel"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label={t('nav.menuLabel')}
              className="fixed inset-y-0 right-0 z-[70] flex w-[86%] max-w-sm flex-col overflow-y-auto overscroll-contain bg-white p-6 shadow-2xl dark:bg-navy-light lg:hidden"
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Cabecera del panel: logo + botón de cierre */}
              <div className="mb-6 flex items-center justify-between">
                <Logo onClick={(e) => handleNavigate(e, 'inicio')} />
                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={onClose}
                  aria-label={t('nav.closeMenu')}
                  className="grid h-10 w-10 place-items-center rounded-full border border-softblue text-slate transition-colors hover:border-indigo hover:text-indigo dark:border-white/10 dark:text-smoke dark:hover:border-lavender dark:hover:text-lavender"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Enlaces con entrada escalonada */}
              <ul className="flex flex-col">
                {NAV_LINKS.map(({ id, key }, index) => (
                  <motion.li key={id} variants={itemVariants}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => handleNavigate(e, id)}
                      className="group flex items-baseline gap-3 border-b border-softblue/70 py-4 font-display text-lg font-semibold text-slate transition-colors hover:text-indigo dark:border-white/10 dark:text-smoke dark:hover:text-lavender"
                    >
                      {/* Índice decorativo estilo "01" */}
                      <span
                        aria-hidden="true"
                        className="text-xs font-bold text-slate-muted transition-colors group-hover:text-indigo dark:text-smoke/60 dark:group-hover:text-lavender"
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {t(`nav.${key}`)}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Idioma + CTA ancladas al pie del panel */}
              <motion.div variants={itemVariants} className="mt-auto flex flex-col gap-4 pt-8">
                <LanguageSwitcher layoutGroupId="mobile" className="self-start" />
                <CalendlyButton className="w-full" />
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
}

/** Icono "X" para cerrar el panel */
function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
