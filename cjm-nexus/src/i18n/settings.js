/**
 * Ajustes de internacionalización — CJM Nexus.
 * Cada idioma es una URL real e indexable: /es, /en, /de.
 *
 * EL IDIOMA PRINCIPAL ES EL INGLÉS (Boris, 2026-09-19): «/» lleva a /en
 * (`middleware.js`) y el x-default de los hreflang apunta a /en. Antes era
 * el español, y «/» miraba el idioma del navegador.
 */
export const languages = ['es', 'en', 'de'];
export const defaultLanguage = 'en';

/** El nombre de cada idioma en su propio idioma: el lector de pantalla del
    selector dice «English», no «en». No se traduce. */
export const languageNames = { es: 'Español', en: 'English', de: 'Deutsch' };

/** Locale Open Graph por idioma */
export const localeMap = { es: 'es_EC', en: 'en_US', de: 'de_DE' };
