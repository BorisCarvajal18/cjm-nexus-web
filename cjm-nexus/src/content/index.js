/**
 * Punto único desde el que las páginas piden sus textos.
 *
 * ESTADO (2026-09-19): los tres idiomas escritos (.impeccable/TRADUCCION.md).
 * El alemán solo tiene la línea digital, «Über uns», el portafolio y el aviso
 * de KLINODA: el índice de servicios y la dirección financiera no existen en
 * alemán (`i18n/rutas.mjs`), así que sus mapas no tienen `de` propio y nunca
 * se piden en ese idioma.
 *
 * Añadir un idioma es crear sus archivos hermanos (`home.de.js`…) y ponerlos
 * en los mapas de abajo. Ningún componente cambia.
 */
import { home as homeEs } from './home.es';
import { klinoda as klinodaEs } from './klinoda.es';
import { nosotros as nosotrosEs } from './nosotros.es';
import { portafolio as portafolioEs } from './portafolio.es';
import { sitio as sitioEs } from './sitio.es';
import { digital as digitalEs, finanzas as finanzasEs, servicios as serviciosEs } from './servicios.es';
import { home as homeEn } from './home.en';
import { klinoda as klinodaEn } from './klinoda.en';
import { nosotros as nosotrosEn } from './nosotros.en';
import { portafolio as portafolioEn } from './portafolio.en';
import { sitio as sitioEn } from './sitio.en';
import { digital as digitalEn, finanzas as finanzasEn, servicios as serviciosEn } from './servicios.en';
import { home as homeDe } from './home.de';
import { klinoda as klinodaDe } from './klinoda.de';
import { nosotros as nosotrosDe } from './nosotros.de';
import { portafolio as portafolioDe } from './portafolio.de';
import { sitio as sitioDe } from './sitio.de';
import { digital as digitalDe } from './servicios.de';

const HOME = { es: homeEs, en: homeEn, de: homeDe };
const SERVICIOS = { es: serviciosEs, en: serviciosEn };
const FINANZAS = { es: finanzasEs, en: finanzasEn };
const DIGITAL = { es: digitalEs, en: digitalEn, de: digitalDe };
const KLINODA = { es: klinodaEs, en: klinodaEn, de: klinodaDe };
const SITIO = { es: sitioEs, en: sitioEn, de: sitioDe };
const NOSOTROS = { es: nosotrosEs, en: nosotrosEn, de: nosotrosDe };
const PORTAFOLIO = { es: portafolioEs, en: portafolioEn, de: portafolioDe };

export function getHome(lang) {
  return HOME[lang] ?? HOME.es;
}

export function getServicios(lang) {
  return SERVICIOS[lang] ?? SERVICIOS.es;
}

export function getFinanzas(lang) {
  return FINANZAS[lang] ?? FINANZAS.es;
}

export function getDigital(lang) {
  return DIGITAL[lang] ?? DIGITAL.es;
}

export function getKlinoda(lang) {
  return KLINODA[lang] ?? KLINODA.es;
}

export function getSitio(lang) {
  return SITIO[lang] ?? SITIO.es;
}

export function getNosotros(lang) {
  return NOSOTROS[lang] ?? NOSOTROS.es;
}

export function getPortafolio(lang) {
  return PORTAFOLIO[lang] ?? PORTAFOLIO.es;
}
