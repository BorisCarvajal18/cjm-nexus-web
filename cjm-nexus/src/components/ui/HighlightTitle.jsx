import { GradientText } from './Text';

/**
 * <HighlightTitle /> — un titular con una o dos palabras en gradiente.
 *
 * El titular llega como una sola cadena desde `src/content/` y la lista de
 * palabras a resaltar llega aparte. Se hace así, y no partiendo la frase en
 * trozos dentro del contenido, por una razón práctica: quien corrige textos
 * lee una frase entera y no tres fragmentos con etiquetas en medio. Y cuando
 * llegue la traducción, el traductor recibe la frase completa.
 *
 * Si `highlight` viene vacío, el titular se pinta tal cual. No hay ningún
 * caso en que esto tenga que fallar por falta de configuración.
 */
export default function HighlightTitle({ title, highlight = [], gradient = 'bg-g-brand' }) {
  if (!highlight.length) return title;

  const marcadas = new Set(highlight);

  return title.split(' ').map((palabra, i) => {
    const espacio = i === 0 ? '' : ' ';
    return marcadas.has(palabra) ? (
      <span key={`${palabra}-${i}`}>
        {espacio}
        <GradientText gradient={gradient}>{palabra}</GradientText>
      </span>
    ) : (
      <span key={`${palabra}-${i}`}>{`${espacio}${palabra}`}</span>
    );
  });
}
