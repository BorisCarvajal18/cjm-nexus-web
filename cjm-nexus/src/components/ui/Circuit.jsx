'use client';

/**
 * <Circuit /> — las líneas con nodos luminosos que recorren el sitio.
 *
 * Vienen de la referencia visual del cliente y son el único ornamento que se
 * permite, porque dice algo: una firma que conecta finanzas y tecnología.
 *
 * Los trazos se dibujan al entrar en pantalla, los nodos laten y un punto de
 * luz recorre el primer camino. Sin JavaScript se ven completos y quietos,
 * que es como deben verse en reposo.
 *
 * `paths` recibe cadenas de datos SVG en un lienzo 0 0 `w` `h`, y `nodes` las
 * coordenadas donde poner un nodo. Cada sección define su propio trazado: la
 * forma cambia, el tratamiento no.
 */
import { useId } from 'react';

import useGsap from '../../hooks/useGsap';
import { drawPaths, haloBreathe, prepareDraw, pulseAlongPath } from '../../lib/animations';

export default function Circuit({
  paths = [],
  nodes = [],
  width = 600,
  height = 600,
  pulse = true,
  drawOnScroll = false,
  className = '',
}) {
  const id = useId().replace(/:/g, '');

  const scope = useGsap(
    (self, root) => {
      if (!root) return;
      const lines = root.querySelectorAll('path');
      prepareDraw(lines);
      drawPaths(lines, drawOnScroll ? { trigger: root } : { delay: 0.4 });
      haloBreathe(root.querySelectorAll('.halo'));
      if (pulse) {
        pulseAlongPath(root.querySelector('.pulse'), root.querySelector('path'));
      }
    },
    [paths.length, drawOnScroll, pulse],
  );

  return (
    <svg
      ref={scope}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className={`circuit pointer-events-none ${className}`}
    >
      {paths.map((d, i) => (
        <path key={`${id}-p${i}`} id={`${id}-p${i}`} d={d} />
      ))}
      {nodes.map(([cx, cy], i) => (
        <g key={`${id}-n${i}`}>
          <circle className="halo" cx={cx} cy={cy} r="10" />
          <circle className="node" cx={cx} cy={cy} r="4" />
        </g>
      ))}
      {pulse && paths.length ? <circle className="pulse" r="3.5" /> : null}
    </svg>
  );
}
