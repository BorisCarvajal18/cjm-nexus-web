/**
 * Un titular con su tramo de énfasis en 800 (The Weight Not Color Rule).
 * El titular llega entero desde `src/content/` y el tramo a resaltar, aparte,
 * en `highlight`: la FRASE, como lista de palabras o como texto
 * (`['en', 'una', 'semana.']` o `'en una semana.'`). Aquí el énfasis es peso,
 * no color.
 *
 * SE RESALTA LA FRASE, NO CADA PALABRA: se busca el tramo seguido en el
 * titular y se marca su primera aparición. Antes se marcaba cada palabra que
 * estuviera en la lista, y en una traducción una palabra corta repetida
 * («in», «a», «die») salía en negrita todas las veces. Si el tramo no está
 * tal cual (otra puntuación, otra mayúscula), en desarrollo avisa en la
 * consola en lugar de fallar en silencio.
 */
export default function Resaltado({ title, highlight = [] }) {
  const frase = (Array.isArray(highlight) ? highlight.join(' ') : highlight || '').split(' ').filter(Boolean);
  if (!frase.length) return title;
  const palabras = title.split(' ');
  const desde = palabras.findIndex((_, i) => frase.every((f, j) => palabras[i + j] === f));
  if (desde < 0 && process.env.NODE_ENV !== 'production') {
    console.warn(`Resaltado: «${frase.join(' ')}» no está en «${title}»`);
  }
  const fuerte = (i) => desde >= 0 && i >= desde && i < desde + frase.length;
  return palabras.map((palabra, i) => (
    <span key={`${palabra}-${i}`}>
      {i === 0 ? '' : ' '}
      {fuerte(i) ? <b>{palabra}</b> : palabra}
    </span>
  ));
}
