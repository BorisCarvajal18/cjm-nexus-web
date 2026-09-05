/**
 * <Card /> — superficie base de todo el sitio.
 *
 * NO TODO ES UNA TARJETA. El borde, el relleno, el radio y la sombra dicen
 * «esto es un objeto aparte», y si se ponen en todos los bloques la jerarquía
 * se aplana. Se usa para agrupar cosas comparables entre sí: tres servicios,
 * cuatro personas, varios proyectos.
 *
 * `accent` dibuja una barra de gradiente a la izquierda. Sirve para tipificar
 * la tarjeta (financiera, digital, producto) sin necesidad de un rótulo.
 */
const ACCENTS = {
  none: null,
  navy: 'bg-g-navy',
  copper: 'bg-g-copper',
  teal: 'bg-g-teal',
  brand: 'bg-g-brand',
};

export default function Card({
  as: Tag = 'div',
  accent = 'none',
  hover = false,
  className = '',
  children,
  ...rest
}) {
  const bar = ACCENTS[accent];
  return (
    <Tag
      className={`relative overflow-hidden rounded-xl3 border border-hairline bg-surface p-6 shadow-soft ${
        hover ? 'transition duration-300 ease-out motion-safe:hover:-translate-y-1 hover:shadow-lift' : ''
      } ${className}`}
      {...rest}
    >
      {bar ? <span aria-hidden="true" className={`absolute inset-y-0 left-0 w-1 ${bar}`} /> : null}
      {children}
    </Tag>
  );
}
