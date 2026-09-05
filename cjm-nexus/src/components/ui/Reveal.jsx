'use client';

/**
 * <Reveal /> — envuelve cualquier bloque para que entre al hacer scroll.
 *
 * Es el movimiento más repetido del sitio, así que vive en un componente en
 * lugar de repetirse en cada sección.
 *
 * Con `stagger` anima a los HIJOS directos en cascada en vez de al bloque
 * entero: útil para rejillas de tarjetas.
 */
import useGsap from '../../hooks/useGsap';
import { reveal } from '../../lib/animations';

export default function Reveal({
  as: Tag = 'div',
  stagger = 0,
  y = 40,
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const scope = useGsap((self, root) => {
    if (!root) return;
    const targets = stagger ? root.children : root;
    reveal(targets, { y, stagger, delay });
  }, [stagger, y, delay]);

  return (
    <Tag ref={scope} className={className} {...rest}>
      {children}
    </Tag>
  );
}
