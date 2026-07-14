'use client';

/**
 * useCalendly — integración con el widget oficial de Calendly.
 *
 * Carga el script y el CSS del widget UNA sola vez (inyección idempotente,
 * sin importar cuántos botones haya en la página) y devuelve una función
 * que abre el popup de agendamiento con Calendly.initPopupWidget().
 */
import { useCallback, useEffect } from 'react';

/** Link oficial del Diagnóstico Ejecutivo de CJM Nexus */
export const CALENDLY_URL = 'https://calendly.com/cjmnexus/diagnostico-ejecutivo';

const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';
const CSS_HREF = 'https://assets.calendly.com/assets/external/widget.css';

/** Inyecta los assets oficiales de Calendly en <head> (solo si aún no existen). */
function ensureCalendlyAssets() {
  if (typeof document === 'undefined') return;

  if (!document.querySelector(`link[href="${CSS_HREF}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = CSS_HREF;
    document.head.appendChild(link);
  }

  if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;
    document.head.appendChild(script);
  }
}

/**
 * @param {string} url — URL de Calendly (por defecto, el Diagnóstico Ejecutivo).
 * @returns {() => void} función que abre el popup.
 */
export default function useCalendly(url = CALENDLY_URL) {
  // Pre-carga los assets al montar el primer botón para que
  // el popup abra al instante cuando el usuario haga clic.
  useEffect(() => {
    ensureCalendlyAssets();
  }, []);

  return useCallback(() => {
    // Caso normal: el widget ya está cargado.
    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url });
      return;
    }

    // El script aún se está descargando: reintenta unos instantes…
    ensureCalendlyAssets();
    let attempts = 0;
    const timer = setInterval(() => {
      attempts += 1;
      if (window.Calendly?.initPopupWidget) {
        clearInterval(timer);
        window.Calendly.initPopupWidget({ url });
      } else if (attempts >= 20) {
        // …y como último recurso (sin red hacia Calendly), abre en pestaña nueva.
        clearInterval(timer);
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    }, 150);
  }, [url]);
}
