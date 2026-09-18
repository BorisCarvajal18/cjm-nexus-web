/**
 * Geometría de los gráficos de las interfaces de muestra.
 *
 * Los gráficos son SVG calculado, sin librería. Se dibujan en una caja de
 * `ANCHO × ALTO` unidades que el CSS estira al hueco disponible
 * (`preserveAspectRatio="none"`), así que aquí dentro solo van trazos con
 * `vector-effect: non-scaling-stroke`. Todo lo que no debe deformarse —la
 * letra de los ejes, los puntos, el globo— es HTML colocado en porcentajes
 * con `enPorcentaje()`.
 */
export const ANCHO = 300;
export const ALTO = 100;

const r = (n) => Math.round(n * 10) / 10;

/**
 * Valores → puntos de la caja. `escala` es [mínimo, máximo] del eje vertical;
 * `de` y `total` permiten dibujar un tramo de una serie más larga (la
 * proyección, que sigue donde acaba lo real).
 */
export function puntosDe(valores, [min, max], { de = 0, total = valores.length } = {}) {
  return valores.map((v, i) => [r(((de + i) / (total - 1)) * ANCHO), r((1 - (v - min) / (max - min)) * ALTO)]);
}

/** Un punto de la caja, en porcentajes, para colocar HTML encima del SVG. */
export function enPorcentaje([x, y]) {
  return { left: `${r((x / ANCHO) * 100)}%`, top: `${r((y / ALTO) * 100)}%` };
}

/**
 * Los tramos de una curva suave que pasa por todos los puntos sin rebasarlos
 * (interpolación cúbica monótona, Fritsch–Carlson): un mes que sube no dibuja
 * una joroba por encima de su valor. Devuelve un «C…» por tramo, para poder
 * partir la misma curva en dos trazos (real y proyección) sin que se note la
 * costura.
 */
function tramos(pts) {
  const n = pts.length;
  const dx = [];
  const m = [];
  for (let i = 0; i < n - 1; i += 1) {
    dx[i] = pts[i + 1][0] - pts[i][0];
    m[i] = (pts[i + 1][1] - pts[i][1]) / dx[i];
  }
  const t = [m[0]];
  for (let i = 1; i < n - 1; i += 1) t[i] = m[i - 1] * m[i] <= 0 ? 0 : (m[i - 1] + m[i]) / 2;
  t[n - 1] = m[n - 2];
  for (let i = 0; i < n - 1; i += 1) {
    if (m[i] === 0) {
      t[i] = 0;
      t[i + 1] = 0;
    } else {
      const a = t[i] / m[i];
      const b = t[i + 1] / m[i];
      const s = a * a + b * b;
      if (s > 9) {
        const k = 3 / Math.sqrt(s);
        t[i] = k * a * m[i];
        t[i + 1] = k * b * m[i];
      }
    }
  }
  return pts.slice(0, -1).map((p, i) => {
    const q = pts[i + 1];
    const h = dx[i] / 3;
    return `C${r(p[0] + h)} ${r(p[1] + t[i] * h)} ${r(q[0] - h)} ${r(q[1] - t[i + 1] * h)} ${q[0]} ${q[1]}`;
  });
}

/** La curva entera, o solo sus tramos `desde`…`hasta` (índices de punto). */
export function curva(pts, desde = 0, hasta = pts.length - 1) {
  return `M${pts[desde][0]} ${pts[desde][1]}${tramos(pts).slice(desde, hasta).join('')}`;
}

/** La misma curva, cerrada contra el suelo de la caja: el área bajo el trazo. */
export function area(pts, desde = 0, hasta = pts.length - 1) {
  return `${curva(pts, desde, hasta)}L${pts[hasta][0]} ${ALTO}L${pts[desde][0]} ${ALTO}Z`;
}

/** La caja de una chispa: 56 × 15 unidades, estirada al ancho de su carta. */
export const CHISPA = { ancho: 56, alto: 15 };

/** «0,12 9,11 …» → la chispa de un indicador: su trazo, su área y su punta. */
export function chispaDe(texto) {
  const pts = texto.split(' ').map((p) => p.split(',').map(Number));
  const ultimo = pts[pts.length - 1];
  return {
    trazo: texto,
    area: `${texto} ${ultimo[0]},${CHISPA.alto} ${pts[0][0]},${CHISPA.alto}`,
    punta: { left: `${r((ultimo[0] / CHISPA.ancho) * 100)}%`, top: `${r((ultimo[1] / CHISPA.alto) * 100)}%` },
  };
}
