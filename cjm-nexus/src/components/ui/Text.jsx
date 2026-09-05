/**
 * Piezas de texto compartidas: la ceja, el título de sección y el texto con
 * gradiente.
 *
 * Están juntas porque siempre aparecen juntas: toda sección del sitio abre
 * con ceja + título, y el gradiente se usa para resaltar una o dos palabras
 * dentro de ese título.
 */

/**
 * <Eyebrow /> — la etiqueta pequeña sobre cada título.
 *
 * Dice DÓNDE estás, no adorna. Si una sección no puede nombrarse en dos
 * palabras, probablemente esté haciendo dos cosas a la vez.
 */
export function Eyebrow({ tone = 'default', className = '', children }) {
  const color = tone === 'light' ? 'text-copper-light' : 'text-copper-deep';
  const rule = tone === 'light' ? 'bg-white/40' : 'bg-g-copper';
  return (
    <span
      className={`inline-flex items-center gap-[.55rem] text-eyebrow uppercase ${color} ${className}`}
    >
      <span aria-hidden="true" className={`h-[2px] w-[22px] rounded-full ${rule}`} />
      {children}
    </span>
  );
}

/**
 * <GradientText /> — resalta palabras dentro de un título.
 *
 * `gradient` acepta cualquier utilidad `bg-g-*` del sistema. Se usa con
 * moderación: si todo el título va en gradiente, no destaca nada.
 */
export function GradientText({ gradient = 'bg-g-brand', className = '', children }) {
  return <span className={`text-grad ${gradient} ${className}`}>{children}</span>;
}

/**
 * <SectionHeading /> — cabecera estándar de sección.
 *
 * `title` acepta nodos, para poder meter <GradientText> en una palabra.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = 'default',
  align = 'left',
  as: Tag = 'h2',
  className = '',
}) {
  const light = tone === 'light';
  return (
    <div
      className={`grid max-w-[44rem] gap-3 ${align === 'center' ? 'mx-auto text-center justify-items-center' : ''} ${className}`}
    >
      {eyebrow ? <Eyebrow tone={light ? 'light' : 'default'}>{eyebrow}</Eyebrow> : null}
      <Tag className={`text-display-md ${light ? 'text-white' : 'text-ink'}`}>{title}</Tag>
      {intro ? (
        <p className={`text-[1rem] ${light ? 'text-white/80' : 'text-ink-soft'}`}>{intro}</p>
      ) : null}
    </div>
  );
}
