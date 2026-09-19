/**
 * Die Portfolio-Seite, auf Deutsch — /de/portafolio. Mismas claves que
 * `portafolio.es.js`. Las tres portadas están en inglés y no se tocan; aquí
 * solo se presentan, siempre como conceptos.
 */
export const portafolio = {
  meta: {
    title: 'Portfolio: Beispiel-Startseiten | CJM Nexus',
    description:
      'Drei Beispiel-Startseiten aus unserem Angebot „Website in einer Woche“: ein Restaurant, ein Sanierungsbetrieb und ein Barbershop in Berlin. Fiktive Marken.',
  },

  hero: {
    eyebrow: 'Portfolio',
    title: 'Drei Betriebe, drei Startseiten, die sich nicht ähneln.',
    highlight: 'nicht ähneln.',
    lead: 'So sieht der erste Bildschirm einer Website aus, die wir in einer Woche bauen. Es sind Konzepte für fiktive Berliner Marken: Keinen dieser Betriebe gibt es, aber jede Startseite ist gebaut, als gäbe es ihn.',
    primary: 'Gespräch vereinbaren · 20 Min.',
    secondary: 'Startseiten ansehen',
    secondaryHref: '#portadas',
  },

  etiqueta: 'Konzept · fiktive Marke',
  idioma: 'Die Beispiele sind auf Englisch – so, wie ein Berliner Laden sie oft bestellen würde.',
  abrir: 'Startseite öffnen',

  portadas: [
    {
      id: 'regulars',
      nombre: 'Regulars',
      sector: 'Restaurant',
      barrio: 'Friedrichshain',
      texto: 'Kiezküche mit langen Tischen und einem kurzen Menü in drei Gängen. Die Reservierung steht gleich neben der Adresse.',
    },
    {
      id: 'chalkline',
      nombre: 'Chalkline',
      sector: 'Altbausanierung',
      barrio: 'Prenzlauer Berg',
      texto: 'Sanierung von Altbauwohnungen mit unterschriebenem Übergabetermin. Die laufende Baustelle und ihr Fortschritt, gut sichtbar.',
    },
    {
      id: 'towpath',
      nombre: 'Towpath',
      sector: 'Barbershop',
      barrio: 'Kreuzberg',
      texto: 'Ein Barbershop im Kiez, direkt am Kanal. Die freien Termine von heute und die Preise, im Schaufenster.',
    },
  ],

  cta: {
    eyebrow: 'Nächster Schritt',
    title: 'Zwanzig Minuten, um über Ihre zu sprechen.',
    text: 'Kostenlos · unverbindlich · auf Englisch oder Spanisch.',
    primary: 'Gespräch vereinbaren · 20 Min.',
    secondary: 'E-Mail an CJM Nexus',
  },
};

export default portafolio;
