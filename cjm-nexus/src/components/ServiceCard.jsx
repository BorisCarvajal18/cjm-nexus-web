'use client';

/**
 * <ServiceCard /> — tarjeta de servicio (icono + título + descripción).
 * Renderiza un <motion.li>: úsala dentro de un <motion.ul> con variants
 * de stagger para el reveal escalonado al hacer scroll.
 *
 * Microinteracciones: elevación suave, borde acento y el icono pasa de
 * tesela suave a rellena al hover.
 *
 * tone:
 * - 'auto' (por defecto): sigue el tema claro/oscuro con acento índigo.
 * - 'dark': para bandas navy permanentes, con acento lavanda.
 */
import { motion } from 'framer-motion';
import { fadeUp } from '../lib/motion';

const STYLES = {
  auto: {
    card:
      'border-softblue bg-white shadow-sm hover:border-indigo/60 hover:shadow-card ' +
      'dark:border-white/10 dark:bg-white/5 dark:hover:border-lavender/50',
    icon:
      'bg-indigo/10 text-indigo group-hover:bg-indigo group-hover:text-white ' +
      'dark:bg-lavender/15 dark:text-lavender dark:group-hover:bg-lavender dark:group-hover:text-navy',
    title: 'text-slate dark:text-smoke',
    text: 'text-slate-light dark:text-smoke/60',
  },
  dark: {
    card: 'border-white/10 bg-white/5 hover:border-lavender/50 hover:bg-white/[0.08]',
    icon: 'bg-lavender/15 text-lavender group-hover:bg-lavender group-hover:text-navy',
    title: 'text-smoke',
    text: 'text-smoke/60',
  },
};

export default function ServiceCard({ Icon, title, text, tone = 'auto' }) {
  const s = STYLES[tone] ?? STYLES.auto;

  return (
    <motion.li
      variants={fadeUp}
      className={`group rounded-2xl border p-6 transition-all duration-300 motion-safe:hover:-translate-y-1.5 ${s.card}`}
    >
      <span
        className={`mb-4 grid h-11 w-11 place-items-center rounded-xl transition-colors duration-300 ${s.icon}`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3 className={`font-display text-lg font-semibold leading-snug ${s.title}`}>{title}</h3>
      <p className={`mt-2 text-sm leading-relaxed ${s.text}`}>{text}</p>
    </motion.li>
  );
}
