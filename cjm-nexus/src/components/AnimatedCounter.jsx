'use client';

/**
 * <AnimatedCounter /> — número que cuenta de forma animada hasta `to`
 * cuando entra en el viewport (una sola vez).
 *
 * - Respeta prefers-reduced-motion: muestra el valor final sin animar.
 * - `format` permite dar formato al valor en cada frame (ej. "$1,2M", "34%").
 * - Si cambia el idioma después de terminar, re-formatea el valor final.
 *
 * Reutilizable: KPIs del hero, contadores 15+/100+/3 de "Por qué nosotros", etc.
 */
import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';
import { EASE } from '../lib/motion';

export default function AnimatedCounter({
  to,
  from = 0,
  duration = 1.6,
  delay = 0,
  format = (v) => Math.round(v).toString(),
  className = '',
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();
  const done = useRef(false);

  // Referencia siempre actualizada al formateador (evita re-lanzar la animación
  // cuando cambia el idioma a mitad de conteo)
  const formatRef = useRef(format);
  formatRef.current = format;

  const [display, setDisplay] = useState(() => format(from));

  useEffect(() => {
    if (!inView) return undefined;

    if (reduce) {
      done.current = true;
      setDisplay(formatRef.current(to));
      return undefined;
    }

    const controls = animate(from, to, {
      duration,
      delay,
      ease: EASE,
      onUpdate: (v) => setDisplay(formatRef.current(v)),
      onComplete: () => {
        done.current = true;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, from, to, duration, delay]);

  // Re-formatea el valor final si cambia el formateador (p. ej. cambio de idioma)
  useEffect(() => {
    if (done.current) setDisplay(format(to));
  }, [format, to]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display}
    </span>
  );
}
