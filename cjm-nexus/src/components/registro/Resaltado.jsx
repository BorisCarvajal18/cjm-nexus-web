/**
 * Un titular con sus palabras de énfasis en 800 (The Weight Not Color Rule).
 * El titular llega entero desde `src/content/` y las palabras a resaltar,
 * aparte, como ya hacía `HighlightTitle`; aquí el énfasis es peso, no color.
 */
export default function Resaltado({ title, highlight = [] }) {
  if (!highlight?.length) return title;
  const marcadas = new Set(highlight);
  return title.split(' ').map((palabra, i) => (
    <span key={`${palabra}-${i}`}>
      {i === 0 ? '' : ' '}
      {marcadas.has(palabra) ? <b>{palabra}</b> : palabra}
    </span>
  ));
}
