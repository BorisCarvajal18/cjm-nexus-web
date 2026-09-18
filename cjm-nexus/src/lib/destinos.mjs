/**
 * Destinos que cambian de sitio. Es `.mjs` porque lo lee también
 * `next.config.mjs`, que no pasa por el empaquetador.
 *
 * KLINODA_WEB — la web pública de KLINODA. Mientras sea `null`, /klinoda es
 * un aviso corto dentro de esta web. El día que exista, se escribe aquí su
 * dirección completa (https://…) y /es/klinoda, /en/klinoda y /de/klinoda
 * redirigen allí (redirección temporal: `next.config.mjs`). Los botones del
 * sitio que llevan a /klinoda no hay que tocarlos.
 */
export const KLINODA_WEB = null;
