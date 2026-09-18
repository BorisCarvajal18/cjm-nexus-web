/**
 * «**Richard Carvajal** dirige las finanzas» → el nombre en <b>.
 * Así el texto sigue entero en `src/content/`, con su énfasis marcado.
 */
export default function Negritas({ children }) {
  return String(children)
    .split(/(\*\*[^*]+\*\*)/)
    .map((trozo, i) =>
      trozo.startsWith('**') ? <b key={i}>{trozo.slice(2, -2)}</b> : trozo,
    );
}
