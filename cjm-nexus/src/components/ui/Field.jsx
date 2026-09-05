/**
 * <Field /> — campo de formulario.
 *
 * La etiqueta va SIEMPRE encima y es un <label> real ligado al control. Nada
 * de texto de marcador de posición haciendo de etiqueta: desaparece al
 * escribir, y quien vuelve a revisar el formulario ya no sabe qué pedía cada
 * casilla.
 *
 * El error se anuncia con `role="alert"` y se enlaza al control con
 * aria-describedby, de modo que un lector de pantalla lo lea al llegar.
 */
import { useId } from 'react';

const CONTROL =
  'w-full rounded-xl2 border border-hairline bg-surface-muted px-4 py-3 text-[.95rem] text-ink ' +
  'transition-colors duration-150 placeholder:text-ink-muted focus:border-copper focus:bg-white focus:outline-none';

export default function Field({
  label,
  type = 'text',
  as = 'input',
  hint,
  error,
  className = '',
  ...rest
}) {
  const id = useId();
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy = [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(' ');

  const Control = as === 'textarea' ? 'textarea' : as === 'select' ? 'select' : 'input';

  return (
    <div className={`grid gap-[.35rem] ${className}`}>
      <label
        htmlFor={id}
        className="text-[.68rem] font-extrabold uppercase tracking-[.14em] text-ink-soft"
      >
        {label}
      </label>

      <Control
        id={id}
        {...(Control === 'input' ? { type } : {})}
        className={`${CONTROL} ${error ? 'border-[#A33232]' : ''}`}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={describedBy || undefined}
        {...rest}
      />

      {hint ? (
        <p id={hintId} className="text-[.78rem] text-ink-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} role="alert" className="text-[.82rem] font-semibold text-[#A33232]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
