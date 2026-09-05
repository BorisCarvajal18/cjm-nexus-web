'use client';

/**
 * <DarkSurface /> — declara que esta sección tiene fondo oscuro.
 *
 * Mientras esté debajo de la cabecera, el logotipo y el menú pasan a blanco.
 * Sin esto, la cabecera desaparece justo en las bandas más llamativas del
 * sitio, que es donde más se mira.
 *
 * Existe como envoltorio, y no como un hook suelto, para que las secciones
 * que solo necesitan esto puedan seguir siendo componentes de servidor: el
 * único trozo que viaja al navegador es este, no la sección entera con todos
 * sus textos. El pie y el cierre son exactamente ese caso.
 */
import useDarkSection from '../../hooks/useDarkSection';

export default function DarkSurface({ as: Tag = 'div', children, ...rest }) {
  const ref = useDarkSection();
  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  );
}
