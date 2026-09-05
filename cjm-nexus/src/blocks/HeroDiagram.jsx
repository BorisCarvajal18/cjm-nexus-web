'use client';

/**
 * El dibujo que aparece cuando la esfera cubre la pantalla.
 *
 * DICE LO MISMO QUE LA FRASE. A la izquierda, finanzas: un tablero con eje,
 * rejilla, barras, la curva del año, la línea de meta y una ficha de
 * indicador. A la derecha, software: tres fuentes de datos que entran en un
 * núcleo con su escudo, y de ahí salen un documento firmado, un panel y un
 * candado. Los dos lados se curvan hacia el centro, se juntan en un nodo y de
 * ahí baja UNA sola línea. Dos campos, un criterio, literal.
 *
 * ── DECISIONES DE DIBUJO ─────────────────────────────────────────────────
 *
 * LIENZO ANCHO Y SIN RECORTE (`meet`, no `slice`). Antes iba en un cuadrado
 * recortado y se perdía la mitad del dibujo por los lados; ahora la
 * proporción es la de una pantalla y se ve entero.
 *
 * TRES GROSORES, NO UNO. Lo estructural a 2 px, lo secundario a 1,4 y la
 * rejilla a 0,8 con trazo discontinuo. Con un solo grosor todo pesa igual y
 * el ojo no encuentra por dónde empezar.
 *
 * EL CENTRO SE DEJA VACÍO a propósito: ahí va el titular, y un dibujo debajo
 * del texto lo haría ilegible.
 */
import useGsap from '../hooks/useGsap';
import { drawPaths, haloBreathe, prepareDraw, pulseAlongPath } from '../lib/animations';

export default function HeroDiagram({ className = '' }) {
  const scope = useGsap((self, root) => {
    if (!root) return;

    // La rejilla y los rellenos suaves aparecen sin dibujarse: son fondo.
    const trazos = root.querySelectorAll('[data-traza]');
    prepareDraw(trazos);
    drawPaths(trazos, { stagger: 0.035, duration: 1.4, delay: 0.15 });
    haloBreathe(root.querySelectorAll('.halo'));

    pulseAlongPath(root.querySelector('#hd-p-izq'), root.querySelector('#hd-izq'), { duration: 4.2 });
    pulseAlongPath(root.querySelector('#hd-p-der'), root.querySelector('#hd-der'), {
      duration: 4.2,
      delay: 0.7,
    });
    pulseAlongPath(root.querySelector('#hd-p-baja'), root.querySelector('#hd-baja'), {
      duration: 3.2,
      delay: 1.4,
    });
  }, []);

  return (
    <svg
      ref={scope}
      viewBox="0 0 1200 620"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
      className={`circuit pointer-events-none ${className}`}
    >
      <defs>
        <linearGradient id="hd-barra" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8B48A" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#E8B48A" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* ══ IZQUIERDA · FINANZAS ══════════════════════════════════ */}
      <g strokeWidth="1.4">
        {/* Rejilla: fondo, no se dibuja con animación. */}
        <g stroke="#E8B48A" strokeOpacity=".22" strokeWidth=".8" strokeDasharray="3 6">
          <line x1="120" y1="180" x2="470" y2="180" />
          <line x1="120" y1="250" x2="470" y2="250" />
          <line x1="120" y1="320" x2="470" y2="320" />
        </g>

        {/* Ejes */}
        <path data-traza d="M120 130 V400 H470" strokeWidth="2" />

        {/* Barras, con relleno suave para que tengan cuerpo */}
        <g>
          {[
            [150, 300],
            [204, 258],
            [258, 282],
            [312, 222],
            [366, 240],
            [420, 176],
          ].map(([x, y]) => (
            <g key={x}>
              <rect x={x} y={y} width="34" height={400 - y} rx="5" fill="url(#hd-barra)" stroke="none" />
              <rect data-traza x={x} y={y} width="34" height={400 - y} rx="5" />
            </g>
          ))}
        </g>

        {/* Meta y curva del año */}
        <path
          d="M120 210 H470"
          stroke="#E8B48A"
          strokeOpacity=".5"
          strokeWidth="1.4"
          strokeDasharray="7 6"
        />
        <path data-traza d="M167 292 L221 250 L275 268 L329 214 L383 228 L437 168" strokeWidth="2.4" />
        {[
          [167, 292],
          [275, 268],
          [383, 228],
        ].map(([cx, cy]) => (
          <circle key={cx} cx={cx} cy={cy} r="4" fill="#141F3A" stroke="#E8B48A" strokeWidth="1.6" />
        ))}
        <circle className="halo" cx="437" cy="168" r="12" />
        <circle className="node" cx="437" cy="168" r="5" />

        {/* Ficha de indicador: una cifra tiene más peso que otra barra. */}
        <g data-traza>
          <rect x="120" y="440" width="150" height="62" rx="10" />
          <path d="M138 470 h44 M138 484 h72" />
        </g>
        <path d="M212 462 l14 -14 l14 14" stroke="#E8B48A" strokeWidth="2" fill="none" />
        <path data-traza d="M226 448 V486" strokeWidth="2" />
      </g>

      {/* ══ DERECHA · SOFTWARE ════════════════════════════════════ */}
      <g strokeWidth="1.4">
        {/* Fuentes de datos */}
        {[168, 268, 368].map((y) => (
          <g key={y} data-traza>
            <rect x="724" y={y} width="104" height="46" rx="8" />
            <path d={`M746 ${y + 18} h34 M746 ${y + 30} h58`} />
          </g>
        ))}

        {/* Entradas al núcleo */}
        <path data-traza d="M828 191 H872 V268 M828 291 H872 M828 391 H872 V314" strokeWidth="1.6" />

        {/* Núcleo con escudo: lo que ordena y protege */}
        <g data-traza>
          <rect x="872" y="248" width="112" height="86" rx="14" strokeWidth="2" />
          <path d="M928 268 l22 8 v18 c0 14 -9 22 -22 26 c-13 -4 -22 -12 -22 -26 v-18 z" strokeWidth="1.6" />
          <path d="M920 296 l6 6 l11 -12" strokeWidth="1.8" />
        </g>
        <circle className="halo" cx="928" cy="291" r="14" />

        {/* Salidas */}
        <path data-traza d="M984 291 H1024 V168 M984 291 H1024 M984 291 H1024 V414" strokeWidth="1.6" />

        {/* Documento firmado */}
        <g data-traza>
          <path d="M1044 146 h74 a8 8 0 0 1 8 8 v72 a8 8 0 0 1 -8 8 h-74 a8 8 0 0 1 -8 -8 v-72 a8 8 0 0 1 8 -8 z" />
          <path d="M1056 172 h50 M1056 188 h50 M1056 204 h28" />
        </g>
        <path d="M1092 206 c8 -12 14 4 22 -8" stroke="#E8B48A" strokeWidth="2" fill="none" />
        <circle className="node" cx="1120" cy="222" r="4" />

        {/* Panel con barras */}
        <g data-traza>
          <rect x="1036" y="266" width="90" height="52" rx="8" />
          <path d="M1050 306 V288 M1066 306 V278 M1082 306 V294 M1098 306 V272" strokeWidth="2" />
        </g>

        {/* Candado */}
        <g data-traza>
          <path d="M1058 396 v-12 a14 14 0 0 1 28 0 v12" strokeWidth="1.8" />
          <rect x="1048" y="396" width="48" height="38" rx="8" strokeWidth="1.8" />
        </g>
        <circle className="node" cx="1072" cy="415" r="3.5" />
      </g>

      {/* ══ CONVERGENCIA ══════════════════════════════════════════ */}
      <path id="hd-izq" data-traza d="M437 168 C520 168 540 118 600 118" strokeWidth="2" />
      <path id="hd-der" data-traza d="M928 248 C928 150 700 118 600 118" strokeWidth="2" />
      <path id="hd-baja" data-traza d="M600 118 V620" strokeWidth="2" />
      <circle className="halo" cx="600" cy="118" r="18" />
      <circle className="node" cx="600" cy="118" r="6" />

      <circle className="pulse" id="hd-p-izq" r="4" />
      <circle className="pulse" id="hd-p-der" r="4" />
      <circle className="pulse" id="hd-p-baja" r="3.5" />
    </svg>
  );
}
