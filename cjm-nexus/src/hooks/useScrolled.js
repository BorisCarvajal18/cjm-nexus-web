'use client';

/**
 * useScrolled — indica si la página se desplazó más allá de un umbral.
 * Se usa para activar el fondo "glass" (translúcido + blur) de la navbar.
 */
import { useEffect, useState } from 'react';

export default function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll(); // estado correcto si la página carga ya desplazada (p. ej. con ancla)
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
