'use client';

/**
 * <BrochureDownload /> — botón "Descargar brochure" + modal de captura de correo.
 *
 * Flujo:
 *  1. Clic en el botón → abre un modal (renderizado en <body> vía Portal).
 *  2. El visitante introduce su correo (validación de formato en cliente).
 *  3. Al enviar, se hace POST a /api/brochure { email, lang }: el servidor
 *     NOS AVISA POR CORREO de la descarga (correo del visitante + idioma).
 *  4. Tras la respuesta correcta se entrega el PDF (descarga automática) y se
 *     muestra el mensaje de éxito. Si algo falla, mensaje de error claro.
 *
 * El PDF vive en public/ con este nombre exacto:
 *   public/Brochure CJM Nexus.pdf   →   /Brochure%20CJM%20Nexus.pdf
 */
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import Portal from './Portal';

const BROCHURE_PATH = '/Brochure CJM Nexus.pdf';
const BROCHURE_FILENAME = 'Brochure CJM Nexus.pdf';
// Validación práctica de correo (misma que valida el servidor)
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold ' +
  'transition-all duration-200 motion-safe:hover:-translate-y-0.5 active:translate-y-0 ' +
  'focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2';

const VARIANTS = {
  primary: 'bg-indigo text-white shadow-lg shadow-indigo/30 hover:bg-indigo-dark',
  outline:
    'border border-softblue bg-white/60 text-slate hover:border-indigo hover:text-indigo ' +
    'dark:border-white/15 dark:bg-white/5 dark:text-smoke dark:hover:border-lavender dark:hover:text-lavender',
  // Para fondos navy permanentes (CTA final)
  lightOutline: 'border border-white/25 bg-white/5 text-white hover:border-white hover:bg-white/10',
};

const SIZES = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-6 py-3 text-sm md:text-base',
  lg: 'px-8 py-4 text-base',
};

function triggerDownload() {
  const a = document.createElement('a');
  a.href = encodeURI(BROCHURE_PATH); // codifica los espacios del nombre
  a.download = BROCHURE_FILENAME;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export default function BrochureDownload({ variant = 'outline', size = 'md', className = '' }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${BASE} ${VARIANTS[variant] ?? VARIANTS.outline} ${SIZES[size] ?? SIZES.md} ${className}`}
      >
        <DownloadIcon className="h-5 w-5" />
        {t('brochure.button')}
      </button>

      <BrochureModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Modal de captura de correo                                          */
/* ------------------------------------------------------------------ */
function BrochureModal({ open, onClose }) {
  const { t, i18n } = useTranslation();
  const inputRef = useRef(null);

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  // Bloquea el scroll de fondo mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Reinicia el formulario y enfoca el input al abrir; cierra con Escape
  useEffect(() => {
    if (!open) return undefined;
    setStatus('idle');
    setErrorMsg('');
    const focusTimer = setTimeout(() => inputRef.current?.focus(), 80);
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(focusTimer);
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  async function handleSubmit(e) {
    e.preventDefault();
    const value = email.trim();
    if (!EMAIL_RE.test(value) || value.length > 254) {
      setStatus('error');
      setErrorMsg(t('brochure.errorEmail'));
      return;
    }
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/brochure', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value, lang: i18n.resolvedLanguage || 'es' }),
      });
      if (!res.ok) throw new Error('server');
      setStatus('success');
      triggerDownload();
    } catch (err) {
      setStatus('error');
      setErrorMsg(t('brochure.errorServer'));
    }
  }

  const sending = status === 'sending';
  const success = status === 'success';

  return (
    <Portal>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              aria-hidden="true"
              onClick={onClose}
              className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            {/* Tarjeta */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="brochure-title"
              className="relative w-full max-w-md rounded-3xl border border-softblue bg-white p-7 shadow-2xl dark:border-white/10 dark:bg-navy-light sm:p-8"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Botón cerrar */}
              <button
                type="button"
                onClick={onClose}
                aria-label={t('brochure.close')}
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-slate-muted transition-colors hover:bg-softblue/50 hover:text-slate dark:text-smoke/60 dark:hover:bg-white/10 dark:hover:text-smoke"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="h-5 w-5">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>

              {/* Icono superior */}
              <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-indigo/10 text-indigo dark:bg-lavender/15 dark:text-lavender">
                <DownloadIcon className="h-6 w-6" />
              </span>

              <h2 id="brochure-title" className="font-display text-xl font-bold text-slate dark:text-smoke">
                {t('brochure.title')}
              </h2>

              {success ? (
                /* -------- Estado de éxito -------- */
                <div className="mt-3">
                  <p className="flex items-start gap-2 rounded-2xl bg-emerald-500/10 p-4 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0" />
                    {t('brochure.success')}
                  </p>
                  <button
                    type="button"
                    onClick={triggerDownload}
                    className="mt-4 text-sm font-semibold text-indigo underline-offset-4 hover:underline dark:text-lavender"
                  >
                    {t('brochure.downloadAgain')}
                  </button>
                </div>
              ) : (
                /* -------- Formulario -------- */
                <>
                  <p className="mt-2 text-sm leading-relaxed text-slate-light dark:text-smoke/60">
                    {t('brochure.desc')}
                  </p>

                  <form onSubmit={handleSubmit} noValidate className="mt-5">
                    <label htmlFor="brochure-email" className="block text-xs font-semibold text-slate dark:text-smoke">
                      {t('brochure.emailLabel')}
                    </label>
                    <input
                      ref={inputRef}
                      id="brochure-email"
                      type="email"
                      required
                      autoComplete="email"
                      inputMode="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder={t('brochure.emailPlaceholder')}
                      aria-invalid={status === 'error'}
                      disabled={sending}
                      className="mt-1.5 w-full rounded-xl border border-softblue bg-smoke/60 px-4 py-3 text-sm text-slate outline-none transition-colors focus:border-indigo focus:bg-white disabled:opacity-60 dark:border-white/15 dark:bg-white/5 dark:text-smoke dark:focus:border-lavender"
                    />

                    {status === 'error' && (
                      <p role="alert" className="mt-2 text-sm font-medium text-red-600 dark:text-red-400">
                        {errorMsg}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className={`${BASE} mt-5 w-full bg-indigo px-6 py-3 text-sm text-white shadow-lg shadow-indigo/30 hover:bg-indigo-dark disabled:cursor-not-allowed disabled:opacity-70`}
                    >
                      {sending ? (
                        <>
                          <Spinner className="h-4 w-4" />
                          {t('brochure.sending')}
                        </>
                      ) : (
                        <>
                          <DownloadIcon className="h-5 w-5" />
                          {t('brochure.submit')}
                        </>
                      )}
                    </button>

                    <p className="mt-3 text-center text-xs text-slate-muted dark:text-smoke/50">
                      {t('brochure.note')}
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Portal>
  );
}

/* ---------------- Iconos inline ---------------- */
function DownloadIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function CheckCircleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function Spinner(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="animate-spin" {...props}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.3" strokeWidth="4" />
      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
