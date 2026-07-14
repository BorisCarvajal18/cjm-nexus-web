'use client';

/**
 * <SectionHeader /> — cabecera estándar de sección:
 * eyebrow (píldora pequeña) + título display + intro opcional.
 * Se revela con stagger al entrar en el viewport.
 *
 * Props:
 * - title: acepta un nodo (permite resaltar palabras con <span>).
 * - tone:  'auto' sigue el tema claro/oscuro (por defecto);
 *          'dark' fuerza texto claro para bandas navy permanentes
 *          (p. ej. Línea 02 · Tecnología).
 * - align: 'center' | 'left'.
 */
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';

export default function SectionHeader({
  eyebrow,
  title,
  intro,
  align = 'center',
  tone = 'auto',
  className = '',
}) {
  const alignCls = align === 'center' ? 'mx-auto text-center' : 'text-left';
  const dark = tone === 'dark';

  const eyebrowCls = dark
    ? 'border-lavender/30 bg-lavender/10 text-lavender'
    : 'border-indigo/20 bg-indigo/5 text-indigo dark:border-lavender/25 dark:bg-lavender/10 dark:text-lavender';
  const titleCls = dark ? 'text-smoke' : 'text-slate dark:text-smoke';
  const introCls = dark ? 'text-smoke/70' : 'text-slate-light dark:text-smoke/70';

  return (
    <motion.div
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`max-w-3xl ${alignCls} ${className}`}
    >
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${eyebrowCls}`}
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        variants={fadeUp}
        className={`font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] ${titleCls}`}
      >
        {title}
      </motion.h2>

      {intro && (
        <motion.p variants={fadeUp} className={`mt-5 text-lg ${introCls}`}>
          {intro}
        </motion.p>
      )}
    </motion.div>
  );
}
