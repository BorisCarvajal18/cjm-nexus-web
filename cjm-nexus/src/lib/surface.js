'use client';

/**
 * Quién manda sobre el color de la cabecera.
 *
 * EL PROBLEMA: la cabecera es fija y el sitio alterna papel con bandas marino
 * (la portada, KLINODA, el cierre, el pie). Con un solo color, el logotipo y el
 * menú desaparecen justo en las secciones más llamativas.
 *
 * LA SOLUCIÓN NO ES MEDIR QUÉ HAY DEBAJO. En la portada la página entera se
 * hace de noche ligada al scroll (<Noche />): el fondo bajo la cabecera pasa a
 * oscuro sin que ninguna sección haya cambiado de sitio, y ningún cálculo de
 * «qué sección toca la cabecera» acierta.
 *
 * Así que cada zona oscura AVISA cuando entra y cuando sale, y aquí se lleva
 * la cuenta. Es un contador y no un booleano porque dos zonas pueden
 * solaparse durante una transición; con un booleano, la primera en salir
 * apagaría el modo oscuro mientras la segunda sigue activa.
 */
import { registerGsap, ScrollTrigger } from './gsap';

/** Alto de la cabecera fija, en px. Es `espacio.cabecera` de
    tailwind.config.js: si cambia allí, cambia aquí. */
export const ALTO_CABECERA = 72;

let cuenta = 0;
const oyentes = new Set();

function avisar() {
  const oscuro = cuenta > 0;
  oyentes.forEach((fn) => fn(oscuro));
}

/** Una zona oscura entra o sale de debajo de la cabecera. */
export function marcarOscuro(activo) {
  cuenta = Math.max(0, cuenta + (activo ? 1 : -1));
  avisar();
}

/** La cabecera se suscribe. Devuelve la función para darse de baja. */
export function alCambiarSuperficie(fn) {
  oyentes.add(fn);
  fn(cuenta > 0);
  return () => oyentes.delete(fn);
}

/**
 * Vigila una zona oscura: avisa a la cabecera mientras la zona está debajo de
 * ella. Devuelve la función que deja de vigilar.
 *
 * `alFinal`, solo para la última sección de la página: si mide menos que la
 * pantalla, su borde nunca llegaría a la cabecera.
 */
export function vigilaZonaOscura(el, { alFinal = false } = {}) {
  registerGsap();
  let dentro = false;
  const disparador = ScrollTrigger.create({
    trigger: el,
    start: alFinal ? `clamp(top ${ALTO_CABECERA}px)` : `top ${ALTO_CABECERA}px`,
    end: `bottom ${ALTO_CABECERA}px`,
    onToggle: (self) => {
      if (self.isActive === dentro) return;
      dentro = self.isActive;
      marcarOscuro(dentro);
    },
  });
  return () => {
    // Si deja de vigilarse con la zona activa hay que devolver su punto a la
    // cuenta, o la cabecera se quedaría blanca sobre fondo claro.
    if (dentro) marcarOscuro(false);
    disparador.kill();
  };
}
