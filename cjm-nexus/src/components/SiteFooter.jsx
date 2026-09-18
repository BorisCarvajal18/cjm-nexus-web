/**
 * <SiteFooter /> — pie de todas las páginas, en el sistema del registro.
 *
 * Sigue al cierre en marino hondo, con filetes en lugar de cajas y el
 * subrayado cobre al apuntar de los enlaces (estilos en app/estilos/cierre.css,
 * `.pie-sitio`). Es una zona oscura: avisa a la cabecera con <DarkSurface />,
 * que es lo único que viaja al navegador.
 *
 * Los enlaces legales están puestos pero no llevan a ninguna parte todavía:
 * las páginas de privacidad y aviso legal necesitan la entidad legal de la
 * firma, que sigue pendiente. Se dejan visibles a propósito, porque su
 * ausencia es una de las señales que resta seriedad a un sitio B2B.
 */
import { getSitio } from '../content';
import { CONTACTS, footerColumns } from '../lib/site';
import DarkSurface from './ui/DarkSurface';

export default function SiteFooter({ lang = 'es' }) {
  const t = getSitio(lang);
  return (
    <DarkSurface as="footer" className="registro pie-sitio">
      <div className="marco rejilla">
        <div>
          <a href={`/${lang}`} className="marca" aria-label={t.cabecera.inicio}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/marca/cjm-isotipo-claro.png" alt="" width="28" height="28" />
            <span>{t.cabecera.marca}</span>
          </a>
          <p className="lema">{t.pie.lema}</p>
          <ul className="contactos" aria-label={t.pie.contacto}>
            {CONTACTS.map((contact) => (
              <li key={contact.key}>
                <a href={contact.href}>
                  <span>{contact.label}: </span>
                  {contact.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {footerColumns(lang).map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2>{column.title}</h2>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="base">
        <div className="marco">
          <span>{t.pie.derechos}</span>
          <span>{t.pie.idiomas}</span>
        </div>
      </div>
    </DarkSurface>
  );
}
