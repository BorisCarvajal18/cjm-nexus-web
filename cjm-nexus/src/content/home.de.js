/**
 * Die Startseite auf Deutsch — /de.
 *
 * NO ES UNA TRADUCCIÓN DE `home.es.js`: en Berlín solo se ofrece la línea
 * digital (Boris, 2026-09-19), así que la portada alemana es otra
 * composición (`variante: 'digital'`, ver `app/[lang]/page.jsx`) y sus textos
 * cambian de sentido donde el español habla de las dos líneas. Todos están
 * aprobados en .impeccable/TRADUCCION.md.
 *
 * Trato de Sie. La dirección financiera no se nombra aquí: solo en «Über
 * uns», en la línea de Richard. Nadie del equipo trabaja con soltura en
 * alemán: la primera conversación es en inglés, y se dice.
 *
 * La escena de KLINODA y la noche vuelven a la portada alemana (Boris,
 * 2026-09-19); la de los dos tableros, no.
 *
 * La oferta de la web que va en medio es la de la página de servicio
 * (`servicios.de.js` → `digital.web`), no una copia.
 */
export const home = {
  variante: 'digital',

  meta: {
    title: 'Websites und Software nach Maß | CJM Nexus',
    description:
      'CJM Nexus baut Websites und Software nach Maß für kleine und mittlere Unternehmen: die Website in weniger als einer Woche online, das System, wenn der Betrieb es verlangt. Team in Berlin und Ecuador.',
  },

  portada: {
    titular: 'Ihre Website in *einer Woche*. Ihre Software *nach Maß*.',
    entrada:
      'CJM Nexus baut Websites und Software nach Maß. Ihre Website ist in weniger als einer Woche online; das System folgt, wenn Ihr Betrieb es verlangt. Für Unternehmen, die geordnet wachsen wollen.',
    agendar: 'Gespräch vereinbaren · 20 Min.',
    verQueHacemos: 'Angebot ansehen',
    verQueHacemosHref: '#web',
    nota: 'Kostenlos · unverbindlich · 20 Minuten',
    imagen: 'Drei Personen arbeiten an einem Tisch mit Berichten, ausgedruckten Diagrammen und einem Laptop, von oben gesehen.',
  },

  /* Tres cifras de la línea digital, todas con fuente aprobada (Boris,
     2026-09-19): la semana con su condición, las pruebas dichas como de
     KLINODA, y el equipo en Berlín. */
  credenciales: {
    etiqueta: 'Auf einen Blick',
    cifras: [
      {
        valor: '< 7',
        que: 'Tage, bis Ihre Website online ist',
        quien: 'Gezählt ab dem Tag, an dem Texte, Logo und Bilder bei uns sind.',
      },
      {
        hasta: 2300,
        mas: '+',
        que: 'automatisierte Tests in KLINODA',
        quien: 'In der Plattform von KLINODA, die unser Digitalteam baut.',
      },
      {
        valor: 'Berlin',
        que: 'Team vor Ort',
        quien: 'Boris Carvajal leitet die Technik von Berlin aus.',
      },
    ],
    firma:
      '**Boris Carvajal** leitet die Technik, **Mirella Llanga** die Geschäftsführung. Gegründet hat die Firma **Richard Carvajal**.',
  },

  /* La escena de KLINODA (Boris, 2026-09-19: vuelve con la noche, como en
     español e inglés). Una puerta (regla 3): enseña el producto, dice su
     estado y lleva a su página. Demo con datos ficticios y solo los módulos
     de su portal de empresa, con los rótulos en alemán: fechas «14.10.»,
     «GEEIGNET» por «APTO» y los cargos como funciones, sin masculino genérico.
     El texto, en la línea de lo aprobado: empresa del Grupo CJM Nexus, y su
     plataforma la construye nuestro equipo digital. */
  klinoda: {
    etiqueta: 'Demo · in Entwicklung · fiktive Daten',
    logo: 'KLINODA',
    lema: 'Jeder Mensch. Die ganze Geschichte.',
    seccion: 'Mein Unternehmen',
    pestanas: ['Fristen', 'Bescheinigungen', 'Personal'],
    plazos: {
      rotulo: 'Fällig in 90 Tagen oder weniger',
      total: 11,
      eje: [0, 30, 60, 90],
      tramos: [
        { cuantos: 4, que: 'in 30 Tagen oder weniger', dias: [6, 13, 21, 27] },
        { cuantos: 5, que: 'in 31 bis 60 Tagen', dias: [34, 40, 46, 52, 58] },
        { cuantos: 2, que: 'in 61 bis 90 Tagen', dias: [69, 84] },
      ],
    },
    vencidas: { cuantos: 3, rotulo: 'Überfällig' },
    certificados: { cuantos: 44, rotulo: 'Beschäftigte mit verfügbarer Bescheinigung' },
    cargos: [
      { cargo: 'Anlagenbedienung', aptitud: 'GEEIGNET', vence: 'Fällig 14.10.' },
      { cargo: 'Fahrdienst', aptitud: 'GEEIGNET UNTER BEOBACHTUNG', observacion: true, vence: 'Fällig 22.10.' },
      { cargo: 'Schichtleitung', aptitud: 'GEEIGNET', vence: 'Fällig 03.11.' },
    ],
    frases: [
      'KLINODA ist ein Unternehmen der CJM-Nexus-Gruppe für Arbeitsmedizin in Ecuador. Seine Plattform baut unser Digitalteam.',
      'Das Unternehmen sieht, welche Bescheinigungen ablaufen und wer für seine Stelle geeignet ist, ohne einem einzigen Papier hinterherzulaufen.',
      'Jede Ansicht zeigt nur, was ihr zusteht: In der Ansicht des Unternehmens gibt es keine medizinischen Daten.',
    ],
    pregunta: 'Möchten Sie mehr über KLINODA erfahren?',
    boton: 'Mehr zu KLINODA',
  },

  /* El cierre: nombra a Boris y dice que la primera conversación es en
     inglés (Boris, 2026-09-19). */
  cierre: {
    ref: 'Nächster Schritt',
    titular: 'Zwanzig Minuten mit **der Person, die die Arbeit macht**.',
    tres: [
      {
        titulo: 'Mit wem Sie sprechen',
        texto: 'Mit Boris Carvajal, der die Technik leitet – derselbe, der danach die Arbeit macht. Das erste Gespräch ist auf Englisch.',
      },
      {
        titulo: 'Was im Gespräch passiert',
        texto: 'Sie erzählen uns, was Ihr Unternehmen macht und was die Website oder das System leisten soll. Wir fragen: Wir kommen nicht, um zu präsentieren.',
      },
      {
        titulo: 'Was Sie mitnehmen',
        texto: 'Ob eine Website in einer Woche reicht oder ein System nötig ist. Und wenn wir nicht die Richtigen sind, sagen wir es Ihnen im selben Gespräch.',
      },
    ],
    agendar: 'Gespräch vereinbaren · 20 Min.',
    nota: 'Kostenlos · unverbindlich · auf Englisch oder Spanisch',
    canales: 'Weitere Kontaktwege',
  },
};

export default home;
