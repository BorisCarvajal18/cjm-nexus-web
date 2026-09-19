/**
 * Textos comunes a todas las páginas: la cabecera y el pie.
 *
 * Salen de la portada aprobada (`.impeccable/mocks/portada/C-fusion.html`).
 * Las rutas del menú y del pie están en `lib/site.js`; aquí, sus textos, por
 * la misma `clave`.
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
  /* El menú (y el panel del teléfono). Claves de `navLinks` en lib/site.js. */
  menu: {
    inicio: 'Inicio',
    servicios: 'Servicios',
    portafolio: 'Portafolio',
    nosotros: 'Nosotros',
    contacto: 'Contacto',
  },
  /* Los canales directos. Claves de `contactos()` en lib/site.js. WhatsApp
     solo existe en español; «Teléfono» es el de inglés y alemán. */
  canales: {
    waEc: 'WhatsApp Ecuador',
    waDe: 'WhatsApp Alemania',
    tel: 'Teléfono',
    email: 'Correo',
  },
  /* La página 404. Aprobado por Boris el 2026-09-19. */
  noEncontrada: {
    eyebrow: 'Error 404',
    title: 'Esta página no existe.',
    highlight: 'no existe.',
    lead: 'Puede que el enlace esté mal escrito o que la página se haya movido.',
    volver: 'Volver al inicio',
  },
  /* Las comillas de una cita: «…» en español, “…” en inglés, „…“ en alemán. */
  comillas: ['«', '»'],
  pie: {
    lema: 'Dirección financiera y software especializado para empresas que crecen con control. Ecuador y Berlín.',
    contacto: 'Contacto',
    /* Claves de `footerColumns` en lib/site.js. */
    columnas: { servicios: 'Servicios', empresa: 'Empresa', legal: 'Legal' },
    enlaces: {
      dosServicios: 'Los dos servicios',
      finanzas: 'Dirección financiera',
      digital: 'Soluciones digitales',
      portafolio: 'Portafolio',
      inicio: 'Inicio',
      nosotros: 'Nosotros',
      contacto: 'Contacto',
      privacidad: 'Privacidad',
      avisoLegal: 'Aviso legal',
    },
    derechos: '© 2026 CJM Nexus',
    idiomas: 'ES · EN · DE',
  },
};
