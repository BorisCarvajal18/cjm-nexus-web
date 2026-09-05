'use client';

/**
 * El dibujo que vive dentro de la esfera de la portada.
 *
 * DICE LO MISMO QUE LA FRASE. A la izquierda un dibujo financiero: ejes,
 * barras y una curva que sube. A la derecha uno de software: nodos
 * conectados, un documento y un candado. Los dos trazos salen de sus
 * respectivos dibujos, se curvan hacia el centro, se juntan en un solo nodo
 * y de ahí baja UNA sola línea. Dos campos, un criterio, literal.
 *
 * Al entrar, los trazos se dibujan solos y dos pulsos de luz viajan desde
 * cada extremo hasta encontrarse en el nodo central, justo donde después
 * aparece el titular.
 *
 * TODO EN LÍNEA FINA COBRE sobre la aurora. No lleva relleno ni color propio:
 * es un dibujo técnico, no una ilustración, y por eso no compite con el
 * fondo ni con el texto que se le pone encima.
 */
import useGsap from '../hooks/useGsap';
import { drawPaths, haloBreathe, prepareDraw, pulseAlongPath } from '../lib/animations';

export default function HeroDiagram({ className = '' }) {
  const scope = useGsap((self, root) => {
    if (!root) return;
    const trazos = root.querySelectorAll('path, line, polyline, rect, circle.dibujo');
    prepareDraw(trazos);
    drawPaths(trazos, { stagger: 0.05, duration: 1.6, delay: 0.5 });
    haloBreathe(root.querySelectorAll('.halo'));
    pulseAlongPath(root.querySelector('#hd-izq-pulso'), root.querySelector('#hd-izq'), {
      duration: 4.5,
    });
    pulseAlongPath(root.querySelector('#hd-der-pulso'), root.querySelector('#hd-der'), {
      duration: 4.5,
      delay: 0.6,
    });
    pulseAlongPath(root.querySelector('#hd-baja-pulso'), root.querySelector('#hd-baja'), {
      duration: 3.5,
      delay: 1.2,
    });
  }, []);

  return (
    <svg
      ref={scope}
      viewBox="0 0 600 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className={`circuit pointer-events-none ${className}`}
    >
      {/* ── Campo izquierdo · finanzas ─────────────────────────── */}
      <g>
        <path d="M52 300 V196 M52 300 H176" />
        <rect className="dibujo" x="66" y="262" width="16" height="38" rx="2" />
        <rect className="dibujo" x="94" y="242" width="16" height="58" rx="2" />
        <rect className="dibujo" x="122" y="252" width="16" height="48" rx="2" />
        <rect className="dibujo" x="150" y="222" width="16" height="78" rx="2" />
        <path d="M62 246 L104 224 L136 232 L172 202" />
        <circle className="halo" cx="172" cy="202" r="8" />
        <circle className="node" cx="172" cy="202" r="3.5" />
      </g>

      {/* ── Campo derecho · software ───────────────────────────── */}
      <g>
        <rect className="dibujo" x="430" y="196" width="66" height="34" rx="6" />
        <rect className="dibujo" x="516" y="256" width="52" height="34" rx="6" />
        <rect className="dibujo" x="418" y="316" width="66" height="34" rx="6" />
        <path d="M463 230 V256 H542 V256 M542 290 V316 H451 V316" />
        {/* Documento con candado: lo que el sistema protege. */}
        <path d="M508 358 h44 a4 4 0 0 1 4 4 v52 a4 4 0 0 1 -4 4 h-44 a4 4 0 0 1 -4 -4 v-52 a4 4 0 0 1 4 -4 z" />
        <path d="M516 374 h28 M516 386 h28 M516 398 h18" />
        <path d="M432 376 v-8 a10 10 0 0 1 20 0 v8" />
        <rect className="dibujo" x="426" y="376" width="32" height="24" rx="4" />
        <circle className="halo" cx="463" cy="213" r="8" />
        <circle className="node" cx="463" cy="213" r="3.5" />
      </g>

      {/* ── Convergencia ───────────────────────────────────────── */}
      <path id="hd-izq" d="M172 202 C232 202 244 168 300 168" />
      <path id="hd-der" d="M463 213 C400 213 356 168 300 168" />
      <path id="hd-baja" d="M300 168 V600" />
      <circle className="halo" cx="300" cy="168" r="12" />
      <circle className="node" cx="300" cy="168" r="5" />

      <circle className="pulse" id="hd-izq-pulso" r="3.5" />
      <circle className="pulse" id="hd-der-pulso" r="3.5" />
      <circle className="pulse" id="hd-baja-pulso" r="3" />
    </svg>
  );
}
