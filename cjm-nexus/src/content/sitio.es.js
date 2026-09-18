/**
 * Textos comunes a todas las páginas: la cabecera y el pie.
 *
 * Salen de la portada aprobada (`.impeccable/mocks/portada/C-fusion.html`).
 * Las etiquetas del menú siguen en `lib/site.js` (`navLinks`), porque van
 * atadas a sus rutas.
 */
export const sitio = {
  cabecera: {
    inicio: 'CJM Nexus, inicio',
    marca: 'CJM Nexus',
    menu: 'Principal',
    idiomas: 'Idioma',
    // El botón pequeño: «Agendar · 20 min». El detalle se oculta bajo 620 px.
    agendar: 'Agendar',
    agendarDetalle: ' · 20 min',
    abrirMenu: 'Abrir menú',
    cerrarMenu: 'Cerrar menú',
  },
  pie: {
    lema: 'Dirección financiera y software especializado para empresas que crecen con control. Ecuador y Alemania.',
    contacto: 'Contacto',
    derechos: '© 2026 CJM Nexus',
    idiomas: 'ES · EN · DE',
  },
};
