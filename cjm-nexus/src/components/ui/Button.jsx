/**
 * <Button /> — el único botón del sitio.
 *
 * Cuatro variantes, y cada una tiene un sitio: `copper` es la acción
 * principal de cada página (nunca hay dos en la misma pantalla), `navy` la
 * secundaria, `outline` la terciaria sobre fondo claro y `white` la que va
 * sobre las bandas oscuras.
 *
 * Renderiza <a> si recibe `href` y <button> si no. Se hace aquí, en un solo
 * sitio, para que un enlace nunca acabe siendo un <button> con onClick que
 * no se pueda abrir en otra pestaña.
 */
/* EL TEXTO PUEDE PARTIRSE EN DOS LINEAS, y por eso no hay `whitespace-nowrap`.
   Lo hubo, y en un telefono de 375 px la accion principal —«Agendar
   diagnostico ejecutivo · 20 min»— se salia trece pixeles por la derecha.
   Un boton que se sale del margen se lee como una pagina rota justo en el
   sitio donde se pide el clic. Centrado y con `max-w-full`, cuando no cabe
   se parte en dos lineas y sigue dentro. */
const BASE =
  'inline-flex max-w-full items-center justify-center gap-2 rounded-full text-center font-bold ' +
  'transition-transform duration-200 ease-out motion-safe:hover:-translate-y-[3px] active:translate-y-0 ' +
  'border border-transparent';

const VARIANTS = {
  copper: 'bg-g-copper text-white shadow-copper',
  navy: 'bg-g-navy text-white shadow-[0_16px_36px_-14px_rgba(20,31,58,.6)]',
  outline: 'border-stone bg-white/70 text-ink hover:border-ink',
  white: 'border-white/35 bg-white/10 text-white hover:bg-white/20',
};

const SIZES = {
  sm: 'px-4 py-2 text-[0.8rem]',
  md: 'px-5 py-3 text-[0.88rem]',
  lg: 'px-7 py-4 text-[0.95rem]',
};

export default function Button({
  href,
  variant = 'copper',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const classes = `${BASE} ${VARIANTS[variant] ?? VARIANTS.copper} ${SIZES[size] ?? SIZES.md} ${className}`;
  const external = typeof href === 'string' && /^https?:\/\//.test(href);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
