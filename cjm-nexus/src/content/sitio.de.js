/**
 * Gemeinsame Texte aller Seiten, auf Deutsch: Kopfzeile, Fußzeile, Kanäle
 * und 404. Mismas claves que `sitio.es.js`.
 *
 * En alemán «Leistungen» lleva a Websites & Software (`i18n/rutas.mjs`), y el
 * pie no enseña «Los dos servicios» ni la dirección financiera.
 */
export const sitio = {
  cabecera: {
    inicio: 'CJM Nexus, Startseite',
    marca: 'CJM Nexus',
    menu: 'Hauptmenü',
    idiomas: 'Sprache',
    // «Termin · 20 Min.»: 16 letras, el máximo de limites-traduccion.md.
    agendar: 'Termin',
    agendarDetalle: ' · 20 Min.',
    abrirMenu: 'Menü öffnen',
    cerrarMenu: 'Menü schließen',
  },
  menu: {
    inicio: 'Start',
    servicios: 'Leistungen',
    portafolio: 'Portfolio',
    nosotros: 'Über uns',
    contacto: 'Kontakt',
  },
  /* Sin WhatsApp en alemán (Boris, 2026-09-19): teléfono y correo. */
  canales: {
    waEc: 'WhatsApp Ecuador',
    waDe: 'WhatsApp Deutschland',
    tel: 'Telefon',
    email: 'E-Mail',
  },
  noEncontrada: {
    eyebrow: 'Fehler 404',
    title: 'Diese Seite gibt es nicht.',
    highlight: 'gibt es nicht.',
    lead: 'Vielleicht ist der Link falsch geschrieben, oder die Seite ist umgezogen.',
    volver: 'Zur Startseite',
  },
  comillas: ['„', '“'],
  pie: {
    lema: 'Websites und Software nach Maß für Unternehmen, die geordnet wachsen wollen. Berlin und Ecuador.',
    contacto: 'Kontakt',
    columnas: { servicios: 'Leistungen', empresa: 'Unternehmen', legal: 'Rechtliches' },
    enlaces: {
      dosServicios: 'Beide Leistungen',
      finanzas: 'Finanzen',
      digital: 'Websites & Software',
      portafolio: 'Portfolio',
      inicio: 'Start',
      nosotros: 'Über uns',
      contacto: 'Kontakt',
      privacidad: 'Datenschutz',
      avisoLegal: 'Impressum',
    },
    derechos: '© 2026 CJM Nexus',
    idiomas: 'ES · EN · DE',
  },
};
