'use client';

/**
 * Quién manda sobre el color de la cabecera.
 *
 * EL PROBLEMA: la cabecera es fija y transparente, y el sitio alterna fondos
 * crema con bandas marino y cobre. Con un solo color, el logotipo y el menú
 * desaparecen justo en las dos secciones más llamativas.
 *
 * LA SOLUCIÓN NO PUEDE SER MEDIR POSICIONES. La esfera de la portada se
 * expande hasta ocupar la pantalla mientras la sección está fijada: en ese
 * momento el fondo bajo la cabecera es oscuro aunque la sección siga siendo
 * clara, y ningún cálculo de «qué sección toca la cabecera» acierta.
 *
 * Así que cada zona oscura AVISA cuando entra y cuando sale, y aquí se lleva
 * la cuenta. Es un contador y no un booleano porque dos zonas pueden
 * solaparse durante una transición; con un booleano, la primera en salir
 * apagaría el modo oscuro mientras la segunda sigue activa.
 */
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

/** Reinicia la cuenta. Necesario al cambiar de página. */
export function reiniciarSuperficie() {
  cuenta = 0;
  avisar();
}
