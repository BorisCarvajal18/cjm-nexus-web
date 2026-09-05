/**
 * <SiteFooter /> — pie de todas las páginas.
 *
 * Los enlaces legales están puestos pero no llevan a ninguna parte todavía:
 * las páginas de privacidad y aviso legal necesitan la entidad legal de la
 * firma, que sigue pendiente. Se dejan visibles a propósito, porque su
 * ausencia es una de las señales que resta seriedad a un sitio B2B.
 */
import { CONTACTS, footerColumns } from '../lib/site';
import DarkSurface from './ui/DarkSurface';

export default function SiteFooter({ lang = 'es' }) {
  return (
    <DarkSurface as="footer" className="bg-g-navy text-white">
      <div className="container grid gap-10 py-14 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <a href={`/${lang}`} className="flex items-center gap-[.55rem]" aria-label="CJM Nexus, inicio">
            <img
              src="/marca/cjm-isotipo.png"
              alt=""
              width="34"
              height="34"
              className="h-[34px] w-[34px] rounded-full bg-white/95 object-contain p-[2px]"
            />
            <span className="font-display text-[.98rem] font-extrabold uppercase tracking-[.04em]">
              CJM Nexus
            </span>
          </a>
          <p className="mt-4 max-w-[26rem] text-[.92rem] text-white/70">
            Dirección financiera y software especializado para empresas que crecen con control.
            Ecuador y Alemania.
          </p>
          <ul className="mt-5 grid text-[.88rem]">
            {CONTACTS.map((contact) => (
              <li key={contact.key}>
                <a
                  href={contact.href}
                  className="inline-block py-[.5rem] text-white/70 transition-colors hover:text-copper-light"
                >
                  <span className="text-white/45">{contact.label}: </span>
                  {contact.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {footerColumns(lang).map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2 className="mb-3 text-[.66rem] font-extrabold uppercase tracking-[.18em] text-copper-light">
              {column.title}
            </h2>
            <ul className="grid">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-block py-[.4rem] text-[.9rem] text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-wrap items-center justify-between gap-3 py-5 text-[.8rem] text-white/50">
          <span>© 2026 CJM Nexus</span>
          <span>ES · EN · DE</span>
        </div>
      </div>
    </DarkSurface>
  );
}
