'use client';

/**
 * <Portal /> — renderiza sus hijos directamente en <body> mediante
 * createPortal (tras montar en cliente, para no romper la hidratación SSR).
 *
 * Se usa en overlays (menú móvil, modales) para que NO queden anidados bajo
 * ancestros con transform/filter/backdrop-filter — que crean un bloque
 * contenedor y romperían el posicionamiento `fixed`. Al colgar de <body>,
 * los elementos `fixed` se posicionan respecto a la ventana y el z-index se
 * evalúa en el contexto raíz.
 */
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Portal({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? createPortal(children, document.body) : null;
}
