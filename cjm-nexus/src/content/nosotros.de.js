/**
 * Die Seite „Über uns“, auf Deutsch — /de/nosotros. Mismas claves que
 * `nosotros.es.js` y lo mismo sin decir, a propósito.
 *
 * CAMBIA DE SENTIDO (aprobado en .impeccable/TRADUCCION.md): en alemán la
 * firma no se presenta con dos líneas. La dirección financiera se nombra
 * solo aquí, en la línea de Richard, como servicio para Latinoamérica, sin
 * enlace. «Dos líneas, una firma» pasa a «Eine Firma, zwei Länder». El método
 * enseña solo el ejemplo de software (`Method` con `lineas`).
 *
 * Idiomas (Boris, 2026-09-19): la primera conversación es en inglés; la web
 * se hace en alemán y los textos se acuerdan con el cliente.
 */
export const nosotros = {
  meta: {
    title: 'Über uns: wer hinter CJM Nexus steht | CJM Nexus',
    description:
      'Die Menschen, die CJM Nexus führen: Boris Carvajal in der Technik, Mirella Llanga in der Geschäftsführung und Gründer Richard Carvajal. Team in Berlin und Ecuador.',
  },

  hero: {
    eyebrow: 'Über uns',
    title: 'Wer hinter CJM Nexus steht.',
    highlight: 'hinter',
    lead: 'Websites und Software nach Maß, mit Team in Berlin und Ecuador. Das sind die drei Menschen, die die Firma führen – mit Namen und mit dem, was jede und jeder von ihnen macht.',
    primary: 'Gespräch vereinbaren · 20 Min.',
    secondary: 'Das Team kennenlernen',
    secondaryHref: '#personas',
  },

  personas: {
    etiqueta: 'Das Team',
    titulo: 'Drei Menschen, drei Aufgaben.',
    retratoPendiente: 'Porträt folgt',
    linkedin: 'LinkedIn',
    items: [
      {
        id: 'richard',
        nombre: 'Richard Carvajal',
        cargo: 'Gründer · Finanzen',
        lidera: 'Leitet bei CJM Nexus die externe Finanzleitung – ein Angebot für Unternehmen in Lateinamerika.',
        cifras: [
          { valor: '15+', que: 'Jahre in der Finanzleitung' },
          { valor: '100+', que: 'beratene Kunden in Lateinamerika, den USA und Europa' },
        ],
        base: 'Ecuador',
        trayectoria: null,
        linkedinHref: null,
        retrato: null,
      },
      {
        id: 'boris',
        nombre: 'Boris Carvajal',
        cargo: 'Mitgründer · Technik',
        lidera: 'Leitet die Technik von CJM Nexus: Websites, Software nach Maß und Dashboards, die an die Daten des jeweiligen Unternehmens angebunden sind.',
        cifras: [],
        base: 'Berlin',
        trayectoria: null,
        linkedinHref: null,
        retrato: null,
      },
      {
        id: 'mirella',
        nombre: 'Mirella Llanga',
        cargo: 'Geschäftsführerin',
        lidera: 'Leitet die Geschäftsführung von CJM Nexus: den Betrieb der Firma und die Abstimmung zwischen ihren Bereichen.',
        cifras: [],
        base: null,
        trayectoria: null,
        linkedinHref: null,
        retrato: null,
      },
    ],
  },

  firma: {
    etiqueta: 'Die Firma',
    titulo: 'Eine Firma, zwei Länder.',
    items: [
      {
        titulo: 'Wer spricht, baut auch',
        texto: 'Das erste Gespräch führt Boris Carvajal, der die Technik leitet – dieselbe Person, die danach die Arbeit macht.',
      },
      {
        titulo: 'Berlin und Ecuador',
        texto: 'Team in Berlin und Ecuador. Das erste Gespräch ist auf Englisch. Ihre Website entsteht auf Deutsch, und die Texte stimmen wir mit Ihnen ab.',
      },
      {
        titulo: 'KLINODA, Unternehmen der Gruppe',
        texto: 'KLINODA ist ein Unternehmen der CJM-Nexus-Gruppe. Seine Plattform, gebaut von unserem Digitalteam, bringt Ordnung in die Arbeitsmedizin von Unternehmen in Ecuador.',
        estado: 'Demo · in Entwicklung · fiktive Daten',
        enlace: 'Mehr zu KLINODA',
        href: '/klinoda',
      },
    ],
  },

  /* Solo se pinta el ejemplo de software; el de finanzas se deja vacío a
     propósito (no se muestra en alemán). */
  metodo: {
    eyebrow: 'Wie wir arbeiten',
    title: 'Die Methode ist der Beleg.',
    intro: 'Die Regeln, nach denen wir arbeiten – jeweils mit einem echten Beispiel.',
    etiquetas: { finanzas: '', software: 'Websites & Software' },
    items: [
      {
        title: 'Wir entscheiden schriftlich',
        text: 'Was entschieden wird, steht in einem Protokoll. Nichts wird nur mündlich vereinbart.',
        ejemplos: {
          finanzas: '',
          software:
            'Dreizehn Entscheidungsprotokolle in KLINODA, jedes mit seiner Begründung und seinen Alternativen, von der Wahl der Technik bis zur elektronischen Signatur.',
        },
      },
      {
        title: 'Privacy by Design',
        text: 'Wir sehen nur, was die Arbeit erfordert, und was jemand nicht sehen soll, erreicht ihn nicht.',
        ejemplos: {
          finanzas: '',
          software:
            'Das Unternehmensportal von KLINODA liest nur eine feste Liste von Feldern, und ein Test schlägt fehl, sobald medizinische Daten durchrutschen.',
        },
      },
    ],
  },

  cta: {
    eyebrow: 'Nächster Schritt',
    title: 'Zwanzig Minuten mit der Person, die die Arbeit macht.',
    text: 'Kostenlos · unverbindlich · auf Englisch oder Spanisch.',
    primary: 'Gespräch vereinbaren',
    secondary: 'E-Mail an CJM Nexus',
  },
};

export default nosotros;
