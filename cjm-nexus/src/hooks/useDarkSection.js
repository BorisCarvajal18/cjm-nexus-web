'use client';

/**
 * useDarkSection — avisa a la cabecera mientras esta sección está debajo.
 *
 * Se pone en toda banda oscura (la portada, las bandas marino, el cierre, el
 * pie) para que el menú y el logotipo pasen a blanco al pasar por delante. La
 * sección solo declara «soy oscura»; quién lleva la cuenta y cómo se pinta la
 * cabecera no es asunto suyo (`lib/surface.js`).
 *
 * Devuelve la referencia que hay que poner en el elemento de la sección.
 */
import { useEffect, useRef } from 'react';

import { vigilaZonaOscura } from '../lib/surface';

export default function useDarkSection() {
  const ref = useRef(null);
  useEffect(() => (ref.current ? vigilaZonaOscura(ref.current) : undefined), []);
  return ref;
}
