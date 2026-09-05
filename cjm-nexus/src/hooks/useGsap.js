'use client';

/**
 * useGsap — ejecuta animaciones de GSAP dentro de un componente de React y las
 * limpia al desmontarlo.
 *
 * EL PROBLEMA QUE RESUELVE: una animación de GSAP creada en un efecto no
 * desaparece cuando React desmonta el componente. Queda viva, apuntando a
 * nodos que ya no existen, y sus ScrollTrigger siguen midiendo la página. Al
 * navegar entre páginas eso se acumula hasta que el desplazamiento se comporta
 * de forma extraña.
 *
 * `gsap.context()` graba todo lo que se crea dentro y `revert()` lo deshace de
 * una vez: animaciones, ScrollTrigger y estilos en línea que GSAP hubiera
 * escrito. Es la razón de que este hook devuelva una referencia: se pone en el
 * elemento raíz del componente y todos los selectores del `setup` quedan
 * acotados a él, de modo que un `'.card'` nunca alcanza las tarjetas de otra
 * sección.
 *
 * Uso:
 *   const scope = useGsap((self, root) => {
 *     gsap.from('.card', { y: 40, opacity: 0, stagger: 0.1 });
 *   });
 *   return <section ref={scope}>…</section>;
 */
import { useEffect, useLayoutEffect, useRef } from 'react';

import { gsap, registerGsap } from '../lib/gsap';

/* useLayoutEffect avisa por consola cuando se ejecuta en el servidor. Durante
   la generación estática no hay layout que medir, así que allí usamos
   useEffect, que nunca corre en servidor. En el navegador mandamos el efecto
   antes del pintado para que no se vea el primer fotograma sin animar. */
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function useGsap(setup, deps = []) {
  const scope = useRef(null);

  useIsomorphicLayoutEffect(() => {
    if (typeof setup !== 'function') return undefined;
    registerGsap();
    const ctx = gsap.context((self) => setup(self, scope.current), scope);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scope;
}
