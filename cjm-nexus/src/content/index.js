/**
 * Punto único desde el que las páginas piden sus textos.
 *
 * ESTADO: solo existe el español. El inglés y el alemán son la fase 07 del
 * plan, y se hacen DESPUÉS de cerrar el español a propósito: traducir un
 * texto que todavía se está corrigiendo significa traducirlo dos veces.
 *
 * Mientras tanto `/en` y `/de` sirven el contenido español. Es visible y es
 * deliberado; la alternativa —dejar esas rutas rotas o con el contenido
 * antiguo, que ya no coincide con nada— sería peor.
 *
 * Cuando lleguen las traducciones basta con crear `home.en.js` y `home.de.js`
 * y añadirlos al mapa de abajo. Ningún componente cambia.
 */
import { home as homeEs } from './home.es';

const HOME = {
  es: homeEs,
  en: homeEs, // pendiente · fase 07
  de: homeEs, // pendiente · fase 07
};

export function getHome(lang) {
  return HOME[lang] ?? HOME.es;
}
