/**
 * La flecha de los botones y del enlace con filete (DESIGN.md, Buttons).
 * `abajo` es la del enlace que lleva a una sección de la misma página.
 */
export default function Flecha({ abajo = false, size = 15, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={abajo ? 'M7.5 2.5v10M3.5 8.5l4 4 4-4' : 'M2 7.5h10.5M8.5 3.5 12.5 7.5 8.5 11.5'} />
    </svg>
  );
}
