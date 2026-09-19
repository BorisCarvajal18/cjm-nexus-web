'use client';

/**
 * La página 404, en el sistema del registro y en el idioma de la dirección.
 * `not-found` no recibe parámetros: el idioma sale de la ruta. Misma forma
 * que el aviso de KLINODA: una cabecera de página que ocupa la pantalla.
 */
import { usePathname } from 'next/navigation';

import Flecha from '../../components/registro/Flecha';
import Resaltado from '../../components/registro/Resaltado';
import SiteFooter from '../../components/SiteFooter';
import SiteHeader from '../../components/SiteHeader';
import { getSitio } from '../../content';
import { defaultLanguage, languages } from '../../i18n/settings';

export default function NoEncontrada() {
  const primero = (usePathname() || '').split('/')[1];
  const lang = languages.includes(primero) ? primero : defaultLanguage;
  const t = getSitio(lang).noEncontrada;

  return (
    <>
      <SiteHeader lang={lang} />
      <main>
        <section className="registro pag-cabeza aviso-pag">
          <div className="marco">
            <p className="ref-pag">{t.eyebrow}</p>
            <h1>
              <Resaltado title={t.title} highlight={t.highlight} />
            </h1>
            <p className="entrada">{t.lead}</p>
            <div className="acciones">
              <a className="boton-contorno" href={`/${lang}`}>
                <span>{t.volver}</span>
                <Flecha />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
