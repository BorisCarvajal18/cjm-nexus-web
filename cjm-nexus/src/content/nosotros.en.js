/**
 * The «About» page, in English — /en/nosotros. Same keys as
 * `nosotros.es.js`, and the same things left unsaid on purpose (no family
 * relationship, nobody named as running KLINODA's platform, no founding year
 * or place). The gaps (`HUECO`) stay empty: they are filled, not invented.
 *
 * Richard's track record figures stay on his row, with his name (rule 2 of
 * PRODUCT.md).
 */
export const nosotros = {
  meta: {
    title: "About: who's behind CJM Nexus | CJM Nexus",
    description:
      'The people who run CJM Nexus: Richard Carvajal in financial leadership, Boris Carvajal in technology and Mirella Llanga in general management. A team in Ecuador and Berlin.',
  },

  hero: {
    eyebrow: 'About',
    title: "Who's behind CJM Nexus.",
    highlight: 'behind',
    lead: 'A firm with two lines — fractional CFO services and digital solutions — and a team in Ecuador and Berlin. These are the three people who run it, with their names and what each of them does.',
    primary: 'Book a diagnostic call · 20 min',
    secondary: 'Meet the team',
    secondaryHref: '#personas',
  },

  personas: {
    etiqueta: 'The team',
    titulo: 'Three people, each with their own job.',
    retratoPendiente: 'Portrait coming',
    linkedin: 'LinkedIn',
    items: [
      {
        id: 'richard',
        nombre: 'Richard Carvajal',
        cargo: 'Founder · Financial leadership',
        lidera: "Leads CJM Nexus's financial leadership: the diagnostic, the monthly dashboard and the leadership meeting.",
        cifras: [
          { valor: '15+', que: 'years in financial leadership' },
          { valor: '100+', que: 'clients advised in Latin America, the US and Europe' },
        ],
        base: 'Ecuador',
        trayectoria: null,
        linkedinHref: null,
        retrato: null,
      },
      {
        id: 'boris',
        nombre: 'Boris Carvajal',
        cargo: 'Co-founder · Technology',
        lidera: "Leads CJM Nexus's technology: websites, custom systems and dashboards connected to each company's data.",
        cifras: [],
        base: 'Berlin',
        trayectoria: null,
        linkedinHref: null,
        retrato: null,
      },
      {
        id: 'mirella',
        nombre: 'Mirella Llanga',
        cargo: 'General Manager',
        lidera: "Leads CJM Nexus's general management: running the firm and coordinating its two lines.",
        cifras: [],
        base: null,
        trayectoria: null,
        linkedinHref: null,
        retrato: null,
      },
    ],
  },

  firma: {
    etiqueta: 'The firm',
    titulo: 'Two lines, one firm.',
    items: [
      {
        titulo: 'The number and the system, in the same firm',
        texto: 'Whoever defines the number also builds the system that produces it.',
      },
      {
        titulo: 'Ecuador and Berlin',
        texto: 'A team in Ecuador and Berlin. We work in English, Spanish and German.',
      },
      {
        titulo: 'KLINODA, a Group company',
        texto: 'KLINODA is a CJM Nexus Group company. Its platform brings order to occupational health for companies in Ecuador.',
        estado: 'Demo · in development · fictional data',
        enlace: 'See KLINODA',
        href: '/klinoda',
      },
    ],
  },

  metodo: {
    eyebrow: 'How we work',
    title: 'The method is the guarantee.',
    intro: 'The rules we apply in both lines, with a real example from each.',
    etiquetas: { finanzas: 'Financial leadership', software: 'Digital solutions' },
    items: [
      {
        title: 'We decide in writing',
        text: 'What gets decided is written down in minutes. Nothing is agreed by word of mouth.',
        ejemplos: {
          finanzas: 'Every leadership meeting, one a month, ends with its minutes.',
          software:
            'Thirteen decision records in KLINODA, each with its reasoning and its alternatives, from the choice of stack to the e-signature.',
        },
      },
      {
        title: 'Privacy by design',
        text: "We see only what the work requires, and what someone shouldn't see never reaches them.",
        ejemplos: {
          finanzas: "We don't ask for access to your bank accounts and we don't move money: we work with the reports you already have.",
          software:
            "KLINODA's company portal only reads a closed list of fields, and a test fails if any clinical data slips through.",
        },
      },
    ],
  },

  cta: {
    eyebrow: 'Next step',
    title: 'Twenty minutes with the people who will do the work.',
    text: 'Free · no commitment · in English or Spanish.',
    primary: 'Book a diagnostic call',
    secondary: 'Email CJM Nexus',
  },
};

export default nosotros;
