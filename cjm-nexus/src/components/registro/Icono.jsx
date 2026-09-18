/**
 * <Icono /> — los iconos de las interfaces de muestra.
 *
 * Un solo juego, dibujado a mano sobre una rejilla de 16 px: trazo de 1,4 px,
 * puntas y uniones redondas, sin relleno. Es el mismo lenguaje que la flecha
 * de los botones (`Flecha.jsx`). Ningún glifo Unicode hace de icono: un «▲»
 * cambia de forma con cada fuente del sistema; un trazo, no.
 *
 * Son adorno de una interfaz ilustrativa: van siempre con `aria-hidden`.
 */
const TRAZOS = {
  // ── navegación de los tableros ──────────────────────────────────────
  tablero: (
    <>
      <rect x="2.5" y="2.5" width="4.6" height="4.6" rx="1" />
      <rect x="8.9" y="2.5" width="4.6" height="4.6" rx="1" />
      <rect x="2.5" y="8.9" width="4.6" height="4.6" rx="1" />
      <rect x="8.9" y="8.9" width="4.6" height="4.6" rx="1" />
    </>
  ),
  flujo: <path d="M2.5 13.5h11M3.2 10.4l3-3.4 2.6 2 4-4.8" />,
  rentabilidad: (
    <>
      <circle cx="8" cy="8" r="5.5" />
      <path d="M8 2.5V8h5.5" />
    </>
  ),
  costos: <path d="M8 2.6 13.5 5.6 8 8.6 2.5 5.6ZM2.5 9.2 8 12.2l5.5-3" />,
  documento: <path d="M4 2.5h5l3 3v8H4ZM9 2.5v3h3M6.2 8.6h3.6M6.2 11h3.6" />,
  traza: (
    <>
      <circle cx="4.6" cy="3.6" r="1.4" />
      <circle cx="4.6" cy="12.4" r="1.4" />
      <circle cx="11.4" cy="5.2" r="1.4" />
      <path d="M4.6 5v6M4.6 9.2h3.6a3.2 3.2 0 0 0 3.2-2.6" />
    </>
  ),
  regla: (
    <>
      <rect x="2.5" y="2.5" width="11" height="11" rx="1.6" />
      <path d="m5.4 8.2 1.9 1.9 3.5-3.9" />
    </>
  ),
  candado: (
    <>
      <rect x="3.5" y="7" width="9" height="6.5" rx="1.3" />
      <path d="M5.6 7V5.3a2.4 2.4 0 0 1 4.8 0V7" />
    </>
  ),

  // ── acciones y estados ──────────────────────────────────────────────
  buscar: (
    <>
      <circle cx="7.1" cy="7.1" r="3.9" />
      <path d="m10.1 10.1 3.4 3.4" />
    </>
  ),
  calendario: (
    <>
      <rect x="2.5" y="3.5" width="11" height="10" rx="1.4" />
      <path d="M2.5 6.8h11M5.6 2.2v2.6M10.4 2.2v2.6" />
    </>
  ),
  clip: <path d="m12.4 7.6-4.5 4.5a2.6 2.6 0 0 1-3.7-3.7l4.9-4.9a1.75 1.75 0 0 1 2.5 2.5L6.8 10.8a.9.9 0 0 1-1.3-1.3l4.2-4.2" />,
  firma: <path d="m3 13 .7-2.7 6.9-6.9a1.42 1.42 0 0 1 2 2l-6.9 6.9ZM9.5 4.5l2 2" />,
  sello: (
    <>
      <path d="M8 2.2 13 4v4.1c0 2.9-2.1 4.8-5 5.7-2.9-.9-5-2.8-5-5.7V4Z" />
      <path d="m5.8 8 1.6 1.6 2.9-3.1" />
    </>
  ),
  certificado: (
    <>
      <circle cx="8" cy="6.3" r="3.6" />
      <path d="m6 9.3-1 4.4 3-1.7 3 1.7-1-4.4" />
    </>
  ),
  vencida: (
    <>
      <circle cx="8" cy="8" r="5.5" />
      <path d="M8 4.9v3.4l2.1 1.3" />
    </>
  ),
  alerta: <path d="M8 2.8 13.9 13H2.1ZM8 6.7v3M8 11.5v.2" />,
  maletin: (
    <>
      <rect x="2.5" y="5" width="11" height="8" rx="1.3" />
      <path d="M6 5V3.7h4V5M2.5 8.6h11" />
    </>
  ),
  sube: <path d="m4.6 11.4 6.8-6.8M6.2 4.6h5.2v5.2" />,
  baja: <path d="m4.6 4.6 6.8 6.8M11.4 6.2v5.2H6.2" />,
  'chevron-abajo': <path d="m4.2 6.2 3.8 3.8 3.8-3.8" />,
  'chevron-derecha': <path d="m6.2 4.2 3.8 3.8-3.8 3.8" />,
};

export default function Icono({ nombre, size = 16, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {TRAZOS[nombre]}
    </svg>
  );
}
