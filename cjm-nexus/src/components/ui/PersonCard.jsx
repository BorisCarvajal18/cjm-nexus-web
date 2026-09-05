import Image from 'next/image';

/**
 * <PersonCard /> — una persona del equipo.
 *
 * `photo` es opcional a propósito: mientras no haya fotografías reales se
 * muestran las iniciales sobre un gradiente. Es honesto y no obliga a
 * rellenar con retratos de banco de imágenes, que es lo que hace que una
 * firma pequeña parezca inventada.
 *
 * Cuando lleguen las fotos, se pasa `photo` y no hay que tocar nada más.
 */
const GRADIENTS = ['bg-g-navy', 'bg-g-copper', 'bg-g-brand', 'bg-g-teal'];

export default function PersonCard({ name, role, bio, linkedin, photo, index = 0, className = '' }) {
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  return (
    <article
      className={`rounded-xl3 border border-hairline bg-surface p-7 shadow-soft ${className}`}
    >
      {photo ? (
        <Image
          src={photo}
          alt=""
          width={80}
          height={80}
          className="mb-4 h-20 w-20 rounded-xl2 object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className={`mb-4 grid h-20 w-20 place-items-center rounded-xl2 font-display text-[1.3rem] font-extrabold text-white ${GRADIENTS[index % GRADIENTS.length]}`}
        >
          {initials}
        </span>
      )}

      <b className="block font-display text-[1.15rem] font-extrabold tracking-tight">{name}</b>
      <span className="text-[.7rem] font-extrabold uppercase tracking-[.12em] text-copper-deep">
        {role}
      </span>
      {bio ? <p className="mb-4 mt-3 text-[.92rem] text-ink-soft">{bio}</p> : null}
      {linkedin ? (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-extrabold text-navy-light hover:underline"
        >
          LinkedIn →
        </a>
      ) : null}
    </article>
  );
}
