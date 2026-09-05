/**
 * Genera /sitemap.xml — CJM Nexus.
 *
 * Una entrada por URL real (ruta × idioma), cada una con sus alternativas
 * hreflang. Las rutas se declaran una sola vez aquí abajo; añadir una página
 * nueva al sitio es añadir una línea a `RUTAS`.
 */
import { SITE_URL } from '../lib/site';
import { defaultLanguage, languages } from '../i18n/settings';

/* Prioridad relativa dentro del sitio, no una nota de calidad: la portada
   primero, luego las páginas que tienen que cerrar reuniones, y el índice de
   servicios detrás porque es sobre todo un punto de paso. */
const RUTAS = [
  { path: '', priority: 1 },
  { path: '/servicios', priority: 0.7 },
  { path: '/servicios/direccion-financiera', priority: 0.9 },
  { path: '/servicios/soluciones-digitales', priority: 0.9 },
  { path: '/klinoda', priority: 0.8 },
];

export default function sitemap() {
  const lastModified = new Date();

  return RUTAS.flatMap((ruta) => {
    const alternates = {
      languages: Object.fromEntries(
        languages.map((l) => [l, `${SITE_URL}/${l}${ruta.path}`]),
      ),
    };

    return languages.map((lang) => ({
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
