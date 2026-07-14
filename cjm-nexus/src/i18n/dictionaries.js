/**
 * Diccionarios utilizables en el SERVIDOR (Server Components / metadata).
 * Los JSON se importan estáticamente, así que están disponibles en el build
 * para generar <title>, <meta description>, etc. renderizados en servidor.
 */
import es from '../locales/es.json';
import en from '../locales/en.json';
import de from '../locales/de.json';
import { defaultLanguage } from './settings';

const dictionaries = { es, en, de };

export function getDictionary(lang) {
  return dictionaries[lang] ?? dictionaries[defaultLanguage];
}
