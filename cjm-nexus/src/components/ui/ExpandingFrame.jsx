'use client';

/**
 * <ExpandingFrame /> — un marco que crece hasta ocupar toda la pantalla
 * mientras se baja.
 *
 * Es el gesto más caro del sitio en atención del visitante, así que se usa
 * DOS VECES en todo el proyecto: en el Inicio y en la página de KLINODA. Si
 * se repitiera en cada sección dejaría de significar «mira esto» para pasar a
 * ser ruido.
 *
 * Lo que crece siempre es una pieza de producto real, nunca una imagen
 * decorativa: el gesto promete algo y hay que cumplirlo.
 *
 * En móvil no se fija ni se expande. Se muestra el marco a tamaño completo y
 * el texto debajo.
 */
import { useEffect, useState } from 'react';

import useGsap from '../../hooks/useGsap';
import { expandFrame } from '../../lib/animations';
import { marcarOscuro } from '../../lib/surface';

export default function ExpandingFrame({ backdrop, caption, children, className = '' }) {
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    // 1024 px: el mismo punto que el prefijo `lg:` de Tailwind.
    const query = window.matchMedia('(min-width: 1024px)');
    const sync = () => setIsWide(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  const scope = useGsap(
    (self, root) => {
      if (!root || !isWide) return undefined;

      /* Cuando el marco ocupa la pantalla, el fondo bajo la cabecera es
         oscuro aunque la sección sea clara. Se avisa a partir de la mitad de
         la expansión, que es cuando el marco ya cubre la franja superior. */
      let oscuro = false;
      const aplicar = (siguiente) => {
        if (siguiente === oscuro) return;
        marcarOscuro(siguiente);
        oscuro = siguiente;
      };

      expandFrame(root.querySelector('[data-frame]'), root, {
        backdrop: root.querySelector('[data-backdrop]'),
        caption: root.querySelector('[data-caption]'),
        // Al salir por abajo el marco queda expandido detrás, pero la cabecera
        // ya está sobre la sección siguiente: por eso `onProgress(1)` apaga.
        onProgress: (progress) => aplicar(progress > 0.45 && progress < 1),
      });

      return () => aplicar(false);
    },
    [isWide],
  );

  return (
    <section
      ref={scope}
      className={`relative bg-canvas px-5 py-20 lg:h-screen lg:overflow-hidden lg:p-0 ${className}`}
    >
      <div
        data-frame
        className="relative overflow-hidden rounded-xl4 shadow-deep lg:absolute lg:left-1/2 lg:top-1/2 lg:h-[58vh] lg:w-[58vw] lg:-translate-x-1/2 lg:-translate-y-1/2"
      >
        <div data-backdrop className="absolute inset-[-20%] will-change-transform">
          {backdrop}
        </div>

        {/* DOS COLUMNAS AL EXPANDIRSE, no una pieza centrada con el texto
            encima. Antes el marco crecía centrado y acababa tapando el
            titular; ahora, cuando ocupa la pantalla, el texto tiene su mitad
            izquierda y la pieza la derecha, y no pueden solaparse. */}
        <div className="relative grid min-h-[26rem] place-items-center p-6 lg:h-full lg:min-h-0 lg:grid-cols-2 lg:items-center lg:gap-[4vw] lg:px-[7vw]">
          {caption ? (
            <div data-caption className="hidden text-white lg:block lg:opacity-0">
              {caption}
            </div>
          ) : (
            <span className="hidden lg:block" />
          )}
          <div className="flex w-full justify-center lg:justify-end">{children}</div>
        </div>
      </div>

      {/* En móvil no hay expansión ni columnas: el texto va debajo de la
          pieza, en el orden en que se lee. */}
      {caption ? <div className="mt-8 max-w-[36rem] text-ink lg:hidden">{caption}</div> : null}
    </section>
  );
}
