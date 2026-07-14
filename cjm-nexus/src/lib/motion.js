/**
 * Presets de animación compartidos (Framer Motion).
 *
 * Uso típico de reveal al hacer scroll:
 *   <motion.div variants={stagger()} initial="hidden" whileInView="show" viewport={viewportOnce}>
 *     <motion.div variants={fadeUp}>…</motion.div>
 *   </motion.div>
 *
 * Gracias a <MotionConfig reducedMotion="user"> (App.jsx), todos estos
 * presets respetan automáticamente prefers-reduced-motion.
 */

/** Curva suave tipo easeOutExpo — la usamos en todo el sitio */
export const EASE = [0.16, 1, 0.3, 1];

/** Aparece subiendo ligeramente */
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

/** Contenedor que escalona la entrada de sus hijos */
export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

/** Configuración estándar de viewport para whileInView (revela una sola vez) */
export const viewportOnce = { once: true, margin: '-80px' };
