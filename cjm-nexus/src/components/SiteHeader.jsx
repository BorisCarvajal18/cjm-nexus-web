'use client';

/**
 * <SiteHeader /> — cabecera fija de todo el sitio.
 *
 * LA MARCA SE COMPONE, NO SE PONE. El logotipo completo que existe es un JPEG
 * con fondo blanco: sobre el crema de la página se le vería el recuadro. Así
 * que se monta el isotipo, que sí tiene transparencia, con el nombre escrito
 * en Plus Jakarta Sans — que es además la tipografía del sistema. El día que
 * llegue un vectorial se sustituye aquí y en el pie, y nada más.
 *
 * SE ADAPTA AL FONDO QUE TIENE DEBAJO. Sobre las bandas oscuras el texto pasa
 * a blanco: sin eso, la cabecera desaparece justo en las dos secciones más
 * llamativas. Lo decide un ScrollTrigger por sección oscura, no un cálculo de
 * posiciones a mano.
 *
 * En móvil el menú es un panel que ocupa la pantalla. Se cierra con Escape,
 * al pulsar fuera y al elegir un enlace, y devuelve el foco al botón.
 */
import { useEffect, useRef, useState } from 'react';

import { alCambiarSuperficie } from '../lib/surface';
import { navLinks } from '../lib/site';
import Button from './ui/Button';

export default function SiteHeader({ lang = 'es', ctaLabel = 'Agendar diagnóstico', ctaHref }) {
  /* Los enlaces se calculan con el idioma de la página. Ver `navLinks` en
     `lib/site.js`: ninguna ruta del sitio existe sin su prefijo de idioma. */
  const links = navLinks(lang);
  const cta = ctaHref ?? `/${lang}#contacto`;
  const [open, setOpen] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef(null);

  /* La cabecera no averigua qué hay debajo: se lo dicen. Cada banda oscura
     avisa al entrar y al salir, y aquí solo se escucha. */
  useEffect(() => alCambiarSuperficie(setOnDark), []);

  /* Al salir de la portada, la cabecera gana fondo propio.
     Sobre la portada va suelta, para que la primera pantalla se vea entera;
     a partir de ahí pasa por encima de secciones de todos los colores, y sin
     un fondo detrás el menú se pierde en cuanto el contenido tiene contraste. */
  useEffect(() => {
    const alDesplazar = () => setScrolled(window.scrollY > 24);
    alDesplazar();
    window.addEventListener('scroll', alDesplazar, { passive: true });
    return () => window.removeEventListener('scroll', alDesplazar);
  }, []);

  /* Cerrar el panel con Escape y bloquear el desplazamiento de fondo. */
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    menuButton.current?.focus();
  };

  const tone = onDark ? 'text-white' : 'text-ink';
  const fondo = scrolled
    ? onDark
      ? 'bg-navy-deep border-white/10'
      : 'bg-canvas border-hairline'
    : 'bg-transparent border-transparent';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${tone} ${fondo}`}
    >
      <div className="container flex h-[72px] items-center justify-between gap-4">
        <a href={`/${lang}`} className="flex items-center gap-[.55rem]" aria-label="CJM Nexus, inicio">
          <img
            src="/marca/cjm-isotipo.png"
            alt=""
            width="34"
            height="34"
            className="h-[34px] w-[34px] shrink-0 rounded-full bg-white/95 object-contain p-[2px] shadow-soft"
          />
          <span className="font-display text-[.98rem] font-extrabold uppercase tracking-[.04em]">
            CJM Nexus
          </span>
        </a>

        {/* La píldora del menú necesita BORDE Y FONDO propios. Translúcida
            sobre el crema de la portada no se separaba del fondo y el menú
            desaparecía, que es justo lo que había que arreglar. */}
        <nav
          aria-label="Principal"
          className={`hidden items-center gap-[.15rem] rounded-full border p-[.3rem] lg:flex ${
            onDark
              ? 'border-white/25 bg-white/15'
              : 'border-hairline bg-white/90 shadow-[0_1px_2px_rgba(26,34,56,.06),0_8px_24px_-16px_rgba(26,34,56,.35)]'
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-[.9rem] py-[.45rem] text-[.82rem] font-bold transition-colors ${
                onDark ? 'text-white/85 hover:bg-white/20 hover:text-white' : 'text-ink hover:bg-g-navy hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Cobre y no marino: sobre el crema de la portada el marino se
              apaga, y en todo el sistema lo que se pulsa es cobre. */}
          <Button href={cta} variant="copper" size="sm" className="hidden sm:inline-flex">
            {ctaLabel}
          </Button>

          <button
            ref={menuButton}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            className={`grid h-10 w-10 place-items-center rounded-full border lg:hidden ${
              onDark ? 'border-white/25 bg-white/10' : 'border-hairline bg-white/70'
            }`}
          >
            <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
            <span aria-hidden="true" className="relative block h-[14px] w-[20px]">
              <span
                className={`absolute left-0 block h-[2px] w-full rounded-full bg-current transition-transform duration-200 ${open ? 'top-[6px] rotate-45' : 'top-0'}`}
              />
              <span
                className={`absolute left-0 top-[6px] block h-[2px] w-full rounded-full bg-current transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`absolute left-0 block h-[2px] w-full rounded-full bg-current transition-transform duration-200 ${open ? 'top-[6px] -rotate-45' : 'top-[12px]'}`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Panel móvil */}
      {open ? (
        <div
          id="menu-movil"
          className="fixed inset-0 z-50 bg-canvas px-6 pb-10 pt-[72px] text-ink lg:hidden"
        >
          <nav aria-label="Principal" className="grid gap-1 border-t border-hairline pt-6">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="flex items-baseline gap-3 border-b border-hairline py-4 font-display text-[1.15rem] font-extrabold"
              >
                <span className="text-[.7rem] font-extrabold text-copper-deep">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {link.label}
              </a>
            ))}
          </nav>
          <Button href={cta} variant="copper" className="mt-8 w-full" onClick={close}>
            {ctaLabel}
          </Button>
        </div>
      ) : null}
    </header>
  );
}
