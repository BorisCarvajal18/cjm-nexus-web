'use client';

/**
 * <Manifesto /> — párrafo grande cuyas palabras se encienden al bajar.
 *
 * Es el único sitio del sitio donde el texto ES la ilustración, así que se
 * reserva para una frase por página como mucho, y solo cuando esa frase
 * merezca leerse despacio.
 *
 * `highlight` recibe las palabras que van en gradiente. Se comparan sin
 * acentos ni signos para que «altura.» case con «altura».
 */
import { useEffect, useRef } from 'react';

import useGsap from '../../hooks/useGsap';
import { splitWords, wordsLightUp } from '../../lib/animations';

const normalize = (word) =>
  word
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}]/gu, '');

export default function Manifesto({ children, highlight = [], className = '' }) {
  const wanted = useRef(new Set());

  useEffect(() => {
    wanted.current = new Set(highlight.map(normalize));
  }, [highlight]);

  const scope = useGsap((self, root) => {
    if (!root) return;
    const el = root.querySelector('[data-text]');
    const words = splitWords(el);
    words.forEach((word) => {
      if (wanted.current.has(normalize(word.textContent))) {
        word.classList.add('text-grad', 'bg-g-brand');
      }
    });
    wordsLightUp(words, root);
  }, []);

  return (
    <div ref={scope} className={className}>
      <p
        data-text
        className="max-w-[30ch] font-display text-[clamp(1.25rem,2.3vw,2rem)] font-bold leading-tight tracking-tight"
      >
        {children}
      </p>
    </div>
  );
}
