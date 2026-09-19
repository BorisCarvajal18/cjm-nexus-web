/**
 * EL MAPA DE RUTAS POR IDIOMA — el único sitio que sabe qué página existe en
 * qué idioma. Es `.mjs` porque lo lee también `next.config.mjs`, que no pasa
 * por el empaquetador (igual que `lib/destinos.mjs`).
 *
 * DECISIÓN DE BORIS (2026-09-19): el inglés lleva todo el sitio; el alemán,
 * solo la línea digital (soluciones digitales y portafolio) y «Nosotros».
 * En Berlín la dirección financiera no se ofrece. Las rutas que no existen
 * en un idioma REDIRIGEN a la más cercana que sí existe (`enSuLugar`), que es
 * lo que pide el principio 5 de PRODUCT.md.
 *
 * LO LEEN: `app/sitemap.js`, los hreflang de `lib/seo.js`, el selector de
 * idioma de `SiteHeader`, el menú y el pie (`lib/site.js`), las redirecciones
 * de `next.config.mjs` y el `generateStaticParams` de las páginas que no
 * existen en todos los idiomas. Añadir una página es añadir una línea aquí.
 *
 * `path` va SIN idioma: '' es la portada. `sitemap: false` la deja fuera del
 * sitemap (el aviso de KLINODA, que además lleva noindex).
 */
export const RUTAS = [
  { path: '', priority: 1, langs: ['es', 'en', 'de'] },
  { path: '/servicios', priority: 0.7, langs: ['es', 'en'], enSuLugar: { de: '/servicios/soluciones-digitales' } },
  { path: '/servicios/direccion-financiera', priority: 0.9, langs: ['es', 'en'], enSuLugar: { de: '' } },
  { path: '/servicios/soluciones-digitales', priority: 0.9, langs: ['es', 'en', 'de'] },
  { path: '/portafolio', priority: 0.8, langs: ['es', 'en', 'de'] },
  { path: '/nosotros', priority: 0.6, langs: ['es', 'en', 'de'] },
  { path: '/klinoda', langs: ['es', 'en', 'de'], sitemap: false },
];

const rutaDe = (path) => RUTAS.find((r) => r.path === path.replace(/\/$/, ''));

/** ¿Existe esta ruta en este idioma? Una ruta que no está en el mapa, no. */
export function existe(lang, path) {
  return !!rutaDe(path)?.langs.includes(lang);
}

/** Los idiomas en los que existe una ruta (para hreflang y sitemap). */
export function idiomasDe(path) {
  return rutaDe(path)?.langs ?? [];
}

/**
 * La dirección de `path` en `lang`, con su idioma delante. Si la página no
 * existe en ese idioma, la que va en su lugar (y el ancla se pierde: era de
 * la otra página). Acepta ancla: '/servicios#metodo'.
 */
export function destinoEn(lang, pathConAncla) {
  const [path, ancla] = pathConAncla.split('#');
  if (existe(lang, path)) return `/${lang}${path}${ancla ? `#${ancla}` : ''}`;
  const enSuLugar = rutaDe(path)?.enSuLugar?.[lang];
  return `/${lang}${enSuLugar ?? ''}`;
}

/** Las redirecciones de `next.config.mjs`: temporales, por si el alcance cambia. */
export function redirecciones() {
  return RUTAS.flatMap((r) =>
    Object.entries(r.enSuLugar ?? {}).map(([lang, destino]) => ({
      source: `/${lang}${r.path}`,
      destination: `/${lang}${destino}`,
      permanent: false,
    })),
  );
}
