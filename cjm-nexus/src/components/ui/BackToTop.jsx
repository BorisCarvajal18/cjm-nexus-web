'use client';

/**
 * <BackToTop /> — botón flotante para volver a la portada.
 *
 * La página es larga y tiene tres secciones que se fijan al desplazarse, así
 * que volver arriba a mano cuesta bastante rueda. Este botón lo resuelve en
 * un clic.
 *
 * APARECE SOLO CUANDO SIRVE, pasada una pantalla y media. Antes de eso el
 * botón «volver arriba» estaría señalando a donde ya estás, y un control que
 * no hace nada útil resta.
 *
 * NO USA `scroll-behavior: smooth` A CIEGAS: si alguien ha pedido reducir el
 * movimiento, el salto es instantáneo. Un desplazamiento de diez mil píxeles
 * animado es justo el tipo de cosa que provoca mareo a quien activa esa
 * preferencia.
 */
import { useEffect, useState } from 'react';

import { prefersReducedMotion } from '../../lib/gsap';

export default function BackToTop({ label = 'Volver arriba' }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alDesplazar = () => setVisible(window.scrollY > window.innerHeight * 1.5);
    alDesplazar();
    window.addEventListener('scroll', alDesplazar, { passive: true });
    return () => window.removeEventListener('scroll', alDesplazar);
  }, []);

  const subir = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={subir}
      aria-label={label}
      title={label}
      className={`fixed bottom-6 right-6 z-30 grid h-12 w-12 place-items-center rounded-full bg-g-navy text-white shadow-[0_10px_30px_-10px_rgba(20,31,58,.8)] transition duration-300 ease-out hover:-translate-y-1 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
        <path
          d="M12 19V5M5 12l7-7 7 7"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
