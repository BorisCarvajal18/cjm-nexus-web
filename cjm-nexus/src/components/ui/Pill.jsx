/**
 * <Pill /> — estado en una palabra: apto, firmada, en desarrollo…
 *
 * EL COLOR NUNCA VA SOLO. Cada píldora lleva su texto, de modo que quien no
 * distingue el verde del ámbar sigue sabiendo qué pasa. Es la regla que
 * separa un estado de un adorno.
 *
 * Los tonos de estado (verde, ámbar, rojo) son independientes de la paleta de
 * marca: significan algo y no deben reutilizarse para decorar.
 */
const TONES = {
  ok: 'bg-[#E3F2EA] text-[#1F6E4E]',
  warn: 'bg-[#FAEBDD] text-[#A85A2E]',
  danger: 'bg-[#FBE7E7] text-[#A33232]',
  neutral: 'bg-stone-light text-ink-muted',
  brand: 'bg-g-brand text-white',
};

export default function Pill({ tone = 'neutral', className = '', children }) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full px-[.55rem] py-[.18rem] text-[.66rem] font-extrabold tracking-wide ${TONES[tone] ?? TONES.neutral} ${className}`}
    >
      {children}
    </span>
  );
}

/**
 * <Badge /> — etiqueta con punto, para el estado de un proyecto.
 * Más grande que la píldora y pensada para ir sobre fondos oscuros.
 */
export function Badge({ tone = 'copper', className = '', children }) {
  const dot = { copper: 'bg-g-copper', teal: 'bg-g-teal', navy: 'bg-g-navy' }[tone] ?? 'bg-g-copper';
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-white/14 px-3 py-[.35rem] text-[.7rem] font-bold backdrop-blur-sm ${className}`}
    >
      <span aria-hidden="true" className={`h-2 w-2 rounded-full ${dot}`} />
      {children}
    </span>
  );
}
