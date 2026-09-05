/**
 * Punto único desde el que las páginas piden sus textos.
 *
 * ESTADO: solo existe el español. El inglés y el alemán son una fase propia
 * del plan, y se hacen DESPUÉS de cerrar el español a propósito: traducir un
 * texto que todavía se está corrigiendo significa traducirlo dos veces.
 *
 * Mientras tanto `/en` y `/de` sirven el contenido español. Es visible y es
 * deliberado; la alternativa —dejar esas rutas rotas o con el contenido
 * antiguo, que ya no coincide con nada— sería peor.
 *
 * Cuando lleguen las traducciones basta con crear `home.en.js`,
 * `servicios.en.js` y sus hermanos en alemán, y añadirlos a los mapas de
 * abajo. Ningún componente cambia.
 */
import { home as homeEs } from './home.es';
import { digital as digitalEs, finanzas as finanzasEs, servicios as serviciosEs } from './servicios.es';

const HOME = { es: homeEs, en: homeEs, de: homeEs };
const SERVICIOS = { es: serviciosEs, en: serviciosEs, de: serviciosEs };
const FINANZAS = { es: finanzasEs, en: finanzasEs, de: finanzasEs };
const DIGITAL = { es: digitalEs, en: digitalEs, de: digitalEs };

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
