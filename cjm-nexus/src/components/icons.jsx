/**
 * Iconos SVG inline del proyecto (trazo 2px, currentColor, estilo "feather").
 * Sin dependencias externas: solo los iconos que la web realmente usa.
 * Todos llevan aria-hidden: son decorativos y el texto acompaña siempre.
 */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

/** Crecimiento / rentabilidad */
export const TrendingUpIcon = (props) => (
  <svg {...base} {...props}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

/** Costos y gastos */
export const DollarSignIcon = (props) => (
  <svg {...base} {...props}>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

/** Flujo de caja / liquidez */
export const DropletIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);

/** Indicadores / reporting */
export const PieChartIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </svg>
);

/** Orden / estructura por áreas */
export const LayersIcon = (props) => (
  <svg {...base} {...props}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

/** Decisiones concretas / foco */
export const TargetIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

/** Alcance internacional */
export const GlobeIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

/** Alerta / advertencia */
export const AlertTriangleIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

/** Check (beneficios / listas) */
export const CheckIcon = (props) => (
  <svg {...base} {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ---------- Línea 01 · Finanzas Estratégicas ---------- */

/** Diagnóstico / análisis en profundidad */
export const SearchIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

/** Dirección estratégica (CFO fraccional) */
export const CompassIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

/** Control de costos y gastos */
export const SlidersIcon = (props) => (
  <svg {...base} {...props}>
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="17" y1="16" x2="23" y2="16" />
  </svg>
);

/** Flujo de caja (ciclo) */
export const RefreshCwIcon = (props) => (
  <svg {...base} {...props}>
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

/** KPIs / indicadores */
export const BarChart2Icon = (props) => (
  <svg {...base} {...props}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

/* ---------- Línea 02 · Tecnología a la Medida ---------- */

/** Página web corporativa */
export const MonitorIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

/** Aplicaciones web y móviles */
export const SmartphoneIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

/** Dashboards gerenciales */
export const LayoutIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);

/** Automatización */
export const ZapIcon = (props) => (
  <svg {...base} {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

/** Integración de datos */
export const DatabaseIcon = (props) => (
  <svg {...base} {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

/** Inteligencia artificial aplicada */
export const CpuIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

/* ---------- Proceso / contacto ---------- */

/** Reunión / duración */
export const ClockIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

/** WhatsApp / chat */
export const MessageCircleIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

/** Correo */
export const MailIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
    <polyline points="22 6 12 13 2 6" />
  </svg>
);
