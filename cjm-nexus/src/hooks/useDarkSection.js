'use client';

/**
 * useDarkSection — avisa a la cabecera mientras esta sección está debajo.
 *
 * Se pone en toda banda oscura (marino, cobre, el pie) para que el menú y el
 * logotipo pasen a blanco al pasar por delante. La sección solo declara «soy
 * oscura»; quién lleva la cuenta y cómo se pinta la cabecera no es asunto
 * suyo.
 *
 * Devuelve la referencia que hay que poner en el elemento de la sección.
 */
import { useEffect, useRef } from 'react';

import { registerGsap, ScrollTrigger } from '../lib/gsap';
import { marcarOscuro } from '../lib/surface';

/** Alto de la cabecera. Si cambia allí, cambia aquí. */
const CABECERA = 72;

export default function useDarkSection() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    registerGsap();

    let dentro = false;
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: `top ${CABECERA}px`,
      end: `bottom ${CABECERA}px`,
      onToggle: (self) => {
        if (self.isActive === dentro) return;
        dentro = self.isActive;
        marcarOscuro(dentro);
      },
    });

    return () => {
      // Si se desmonta con la sección activa hay que devolver su punto a la
      // cuenta, o la cabecera se quedaría blanca sobre fondo claro.
      if (dentro) marcarOscuro(false);
      trigger.kill();
    };
  }, []);

  return ref;
}
