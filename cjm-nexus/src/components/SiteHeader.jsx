'use client';

/**
 * <SiteHeader /> — cabecera fija de todo el sitio (DESIGN.md, Navigation).
 *
 * 72 px con el isotipo, «CJM NEXUS» espaciado, el menú, los idiomas y el
 * botón pequeño de «Agendar». Es la cabecera de la portada aprobada
 * (`C-fusion.html`), pasada a React.
 *
 * TRES ESTADOS, de la combinación de dos avisos:
 * - `scrolled`: la página bajó más de 24 px.
 * - `onDark`: una zona oscura está debajo (`lib/surface.js`). La cabecera no
 *   averigua qué hay debajo: cada banda oscura avisa al entrar y al salir.
 *
 *   arriba, sobre la portada   → transparente, letra blanca, isotipo claro
 *   bajando, sobre papel       → papel con filete, letra tinta, isotipo original
 *   bajando, sobre zona oscura → marino hondo, letra blanca, isotipo claro
 *
 * Arriba de una página clara (sin zona oscura) va transparente con letra
 * tinta, que es lo que se lee sobre papel.
 *
 * BAJO 1000 PX sale el menú, y BAJO 620 los idiomas y el « · 20 min» del
 * botón. Para no dejar el teléfono sin navegación, en su lugar aparece un
 * botón que abre el menú en un panel de papel bajo la cabecera, con los
 * idiomas. Se cierra con Escape y al elegir un enlace, y devuelve el foco.
 */
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

import { getSitio } from '../content';
import { languages } from '../i18n/settings';
import { alCambiarSuperficie } from '../lib/surface';
import { navLinks } from '../lib/site';

/** La misma ruta en otro idioma: /es/klinoda → /de/klinoda. */
function enIdioma(ruta, idioma) {
  const partes = (ruta || '/').split('/');
  if (languages.includes(partes[1])) partes[1] = idioma;
  else partes.splice(1, 0, idioma);
  return partes.join('/').replace(/\/$/, '') || `/${idioma}`;
}

function Flecha() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 15 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform duration-200 ease-llegar group-hover:translate-x-[3px]"
    >
      <path d="M2 7.5h10.5M8.5 3.5 12.5 7.5 8.5 11.5" />
    </svg>
  );
}

export default function SiteHeader({ lang = 'es', ctaHref }) {
  const t = getSitio(lang).cabecera;
  /* Los enlaces se calculan con el idioma de la página. Ver `navLinks` en
     `lib/site.js`: ninguna ruta del sitio existe sin su prefijo de idioma. */
  const links = navLinks(lang);
  // Todas las páginas terminan en la sección de cierre, con id="contacto".
  const cta = ctaHref ?? '#contacto';
  const ruta = usePathname();
  const [open, setOpen] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef(null);

  useEffect(() => alCambiarSuperficie(setOnDark), []);

  useEffect(() => {
    const alDesplazar = () => setScrolled(window.scrollY > 24);
    alDesplazar();
    window.addEventListener('scroll', alDesplazar, { passive: true });
    return () => window.removeEventListener('scroll', alDesplazar);
  }, []);

  /* Panel abierto: Escape lo cierra y el fondo no se desplaza. */
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      menuButton.current?.focus();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  /* Si la ventana se ensancha con el panel abierto, el panel sobra. */
  useEffect(() => {
    if (!open) return undefined;
    const ancho = window.matchMedia('(min-width: 1001px)');
    const alCambiar = (e) => e.matches && setOpen(false);
    ancho.addEventListener('change', alCambiar);
    return () => ancho.removeEventListener('change', alCambiar);
  }, [open]);

  const close = () => {
    setOpen(false);
    menuButton.current?.focus();
  };

  // Con el panel abierto la cabecera es papel: el panel cuelga de ella.
  const oscuro = onDark && !open;
  const conFondo = scrolled || open;
  const estado = conFondo
    ? oscuro
      ? 'bg-tinta-honda border-white/10 text-white'
      : 'bg-papel border-linea text-tinta'
    : `bg-transparent border-transparent ${oscuro ? 'text-white' : 'text-tinta'}`;

  const actual = (href) => ruta && !href.includes('#') && ruta.replace(/\/$/, '') === href;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ease-out ${estado}`}
    >
      <div className="marco flex h-cabecera items-center gap-9 max-[620px]:gap-3">
        <a href={`/${lang}`} className="inline-flex items-center gap-[11px] no-underline" aria-label={t.inicio}>
          <img
            src={oscuro ? '/marca/cjm-isotipo-claro.png' : '/marca/cjm-isotipo.png'}
            alt=""
            width="28"
            height="28"
            className="block h-7 w-7 flex-none max-[620px]:h-[25px] max-[620px]:w-[25px]"
          />
          <span className="whitespace-nowrap font-display text-[14px] font-bold uppercase tracking-[.2em] max-[620px]:text-[12.5px] max-[620px]:tracking-[.17em]">
            {t.marca}
          </span>
        </a>

        <nav aria-label={t.menu} className="ml-auto flex gap-[26px] max-[1000px]:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={actual(link.href) ? 'page' : undefined}
              className="relative py-[5px] text-[14.5px] font-medium no-underline opacity-[.84] transition-opacity duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-cobre after:transition-transform after:duration-[340ms] after:ease-llegar after:content-[''] hover:opacity-100 hover:after:scale-x-100 aria-[current=page]:opacity-100 aria-[current=page]:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Idiomas
          lang={lang}
          ruta={ruta}
          etiqueta={t.idiomas}
          className="max-[1000px]:ml-auto max-[620px]:hidden"
        />

        <div className="flex items-center gap-3 max-[620px]:ml-auto">
          <a
            href={cta}
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-cobre-honda px-[15px] py-[9px] font-display text-[.82rem] font-bold text-white no-underline transition-colors duration-200 ease-llegar hover:bg-cobre-presion active:bg-cobre-presion max-[620px]:px-3 max-[620px]:py-2 max-[620px]:text-[.76rem]"
          >
            {t.agendar}
            <span className="max-[620px]:hidden">{t.agendarDetalle}</span>
            <Flecha />
          </a>

          <button
            ref={menuButton}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            className="-mr-2 grid h-10 w-10 place-items-center min-[1001px]:hidden"
          >
            <span className="sr-only">{open ? t.cerrarMenu : t.abrirMenu}</span>
            <span aria-hidden="true" className="relative block h-[10px] w-[18px]">
              <span
                className={`absolute left-0 block h-[1.5px] w-full bg-current transition-transform duration-200 ease-llegar ${open ? 'top-[4px] rotate-45' : 'top-0'}`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-full bg-current transition-transform duration-200 ease-llegar ${open ? 'top-[4px] -rotate-45' : 'top-[8.5px]'}`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Panel del menú bajo 1000 px. Cuelga de la cabecera, que sigue a la
          vista con el botón para cerrarlo. */}
      {open ? (
        <div
          id="menu-movil"
          className="fixed inset-x-0 bottom-0 top-cabecera overflow-y-auto border-t border-linea bg-papel text-tinta min-[1001px]:hidden"
        >
          <div className="marco pb-10 pt-4">
            <nav aria-label={t.menu}>
              <ul>
                {links.map((link) => (
                  <li key={link.href} className="border-b border-linea">
                    <a
                      href={link.href}
                      onClick={close}
                      aria-current={actual(link.href) ? 'page' : undefined}
                      className="flex py-4 font-display text-[1.2rem] font-bold tracking-[-0.01em] no-underline aria-[current=page]:text-cobre-honda"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <Idiomas lang={lang} ruta={ruta} etiqueta={t.idiomas} className="mt-7 min-[621px]:hidden" />
          </div>
        </div>
      ) : null}
    </header>
  );
}

/** ES · EN · DE. El actual en negrita; los otros llevan a la misma página. */
function Idiomas({ lang, ruta, etiqueta, className = '' }) {
  return (
    <nav aria-label={etiqueta} className={className}>
      <ul className="flex gap-[9px] text-[12.5px] font-semibold uppercase tracking-[.08em]">
        {languages.map((idioma) => (
          <li key={idioma}>
            {idioma === lang ? (
              <span aria-current="true" className="font-bold">
                {idioma}
              </span>
            ) : (
              <a
                href={enIdioma(ruta, idioma)}
                hrefLang={idioma}
                lang={idioma}
                className="no-underline opacity-70 transition-opacity duration-200 hover:opacity-100"
              >
                {idioma}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
