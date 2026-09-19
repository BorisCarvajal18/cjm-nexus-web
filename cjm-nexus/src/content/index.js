/**
 * Punto único desde el que las páginas piden sus textos.
 *
 * ESTADO (2026-09-19): español e inglés escritos. El alemán es la fase 3 de
 * la traducción (.impeccable/TRADUCCION.md); mientras llega, `/de` sirve el
 * contenido español. Es visible y es deliberado.
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

const HOME = { es: homeEs, en: homeEn, de: homeEs };
const SERVICIOS = { es: serviciosEs, en: serviciosEn, de: serviciosEs };
const FINANZAS = { es: finanzasEs, en: finanzasEn, de: finanzasEs };
const DIGITAL = { es: digitalEs, en: digitalEn, de: digitalEs };
const KLINODA = { es: klinodaEs, en: klinodaEn, de: klinodaEs };
const SITIO = { es: sitioEs, en: sitioEn, de: sitioEs };
const NOSOTROS = { es: nosotrosEs, en: nosotrosEn, de: nosotrosEs };
const PORTAFOLIO = { es: portafolioEs, en: portafolioEn, de: portafolioEs };

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
