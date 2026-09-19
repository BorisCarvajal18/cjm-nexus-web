/**
 * Genera /sitemap.xml — CJM Nexus.
 *
 * Una entrada por URL real (ruta × idioma), cada una con sus alternativas
 * hreflang. Las rutas se declaran una sola vez aquí abajo; añadir una página
 * nueva al sitio es añadir una línea a `RUTAS`.
 */
import { SITE_URL } from '../lib/site';
import { RUTAS } from '../i18n/rutas.mjs';
import { defaultLanguage } from '../i18n/settings';

/* Las rutas, sus idiomas y su prioridad están en `i18n/rutas.mjs`. La
   prioridad es relativa dentro del sitio, no una nota de calidad: la portada
   primero, luego las páginas que tienen que cerrar reuniones, y el índice de
   servicios detrás porque es sobre todo un punto de paso. */
export default function sitemap() {
  const lastModified = new Date();

  return RUTAS.filter((ruta) => ruta.sitemap !== false).flatMap((ruta) => {
    const alternates = {
      languages: Object.fromEntries(
        ruta.langs.map((l) => [l, `${SITE_URL}/${l}${ruta.path}`]),
      ),
    };

    // Solo los idiomas en los que la página existe.
    return ruta.langs.map((lang) => ({
      url: `${SITE_URL}/${lang}${ruta.path}`,
      lastModified,
      changeFrequency: 'monthly',
      // El español es el idioma escrito; el inglés y el alemán todavía sirven
      // ese mismo contenido, así que pesan menos hasta que se traduzcan.
      priority: lang === defaultLanguage ? ruta.priority : ruta.priority - 0.2,
      alternates,
    }));
  });
}
