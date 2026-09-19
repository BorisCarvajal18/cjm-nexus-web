/**
 * The portfolio page, in English — /en/portafolio. Same keys as
 * `portafolio.es.js`. The three covers are already in English and are not
 * touched; here they are only presented, always as concepts.
 *
 * `idioma` is empty on purpose: «they're in English» says nothing on a page
 * that is itself in English.
 */
export const portafolio = {
  meta: {
    title: 'Portfolio: sample homepages | CJM Nexus',
    description:
      'Three sample homepages from our website-in-a-week offer: a restaurant, a renovation company and a barbershop in Berlin. Fictional brands.',
  },

  hero: {
    eyebrow: 'Portfolio',
    title: "Three businesses, three homepages that don't look alike.",
    highlight: "don't look alike.",
    lead: "This is what the first screen of a website we build in a week looks like. They're concepts for fictional Berlin brands: none of these businesses exists, but each homepage is built as if it did.",
    primary: 'Book a call · 20 min',
    secondary: 'See the homepages',
    secondaryHref: '#portadas',
  },

  etiqueta: 'Concept · fictional brand',
  idioma: '',
  abrir: 'Open the homepage',

  portadas: [
    {
      id: 'regulars',
      nombre: 'Regulars',
      sector: 'Restaurant',
      barrio: 'Friedrichshain',
      texto: 'A neighborhood kitchen with long tables and a short three-course menu. Booking sits right next to the address.',
    },
    {
      id: 'chalkline',
      nombre: 'Chalkline',
      sector: 'Altbau renovations',
      barrio: 'Prenzlauer Berg',
      texto: 'Renovations of old apartments with a signed handover date. The job in progress, and how far along it is, in plain view.',
    },
    {
      id: 'towpath',
      nombre: 'Towpath',
      sector: 'Barbershop',
      barrio: 'Kreuzberg',
      texto: "A neighborhood barbershop by the canal. Today's open slots and the prices, right in the window.",
    },
  ],

  cta: {
    eyebrow: 'Next step',
    title: 'Twenty minutes to talk about yours.',
    text: 'Free · no commitment · in English or Spanish.',
    primary: 'Book a call · 20 min',
    secondary: 'Email CJM Nexus',
  },
};

export default portafolio;
