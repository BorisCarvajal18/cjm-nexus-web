/**
 * Websites & Software, auf Deutsch — /de/servicios/soluciones-digitales.
 *
 * Solo `digital`: en alemán no existen el índice de servicios ni la dirección
 * financiera (`i18n/rutas.mjs` las redirige). Mismas claves que
 * `servicios.es.js` → `digital`, adaptado (.impeccable/TRADUCCION.md):
 * «Websites & Software» sin «Servicio 02», «Unsere Zusagen» en lugar de
 * «garantías», «Privacy by Design», sin WhatsApp en lo que incluye la web, y
 * la pregunta de Ecuador al revés («¿Su equipo está en Alemania?»).
 *
 * Idiomas (Boris, 2026-09-19): nadie del equipo trabaja con soltura en
 * alemán. La primera conversación es en inglés; la web se hace en alemán y
 * los textos se acuerdan con el cliente. Por eso aquí no se promete que
 * escribamos los textos en alemán.
 */
export const digital = {
  meta: {
    title: 'Websites und Software nach Maß | CJM Nexus',
    servicio: 'Softwareentwicklung nach Maß',
    description:
      'Ihre professionelle Website in weniger als einer Woche online, und Software nach Maß für Abläufe mit Vorschriften, amtlichen Dokumenten und sensiblen Daten.',
  },

  hero: {
    eyebrow: 'Websites & Software',
    title: 'Ihre Website in einer Woche online. Und das System, das danach kommt.',
    highlight: 'in einer Woche online.',
    lead: 'Zwei Wege, mit uns zu arbeiten. Eine professionelle Website, auf Sie zugeschnitten und in wenigen Tagen online. Und, wenn Ihr Geschäft es verlangt, vollständige Systeme für Abläufe voller Regeln, amtlicher Dokumente und Daten, die nicht dorthin gelangen dürfen, wo sie nicht hingehören.',
    primary: 'Gespräch vereinbaren · 20 Min.',
    secondary: 'Beide Wege ansehen',
    note: 'Kostenlos · unverbindlich',
  },

  web: {
    marker: '01',
    eyebrow: 'Zuerst',
    title: 'Eine Website, die nicht nach Vorlage aussieht.',
    text: 'Gemacht für Ihr Unternehmen, mit Ihren Texten, Ihrer Marke und Ihrer Art zu verkaufen. Kein gekauftes Theme mit ausgetauschtem Logo – das erkennt man sofort, und genau das lässt Kundschaft zögern, bevor sie sich meldet.',

    includesLabel: 'Was enthalten ist',
    includes: [
      'Eigenes Design',
      'Sieht auf dem Smartphone gut aus – dort schaut man Sie an',
      'Texte, die wir mit Ihnen abstimmen',
      'Kontaktformular und Kontakt per Anruf oder E-Mail mit einem Tipp',
      'So gebaut, dass Google sie richtig liest',
      'Domain und Hosting inklusive, auf den Namen Ihres Unternehmens',
      'Wartung: Wir sorgen dafür, dass sie online und aktuell bleibt',
    ],

    stepsLabel: 'So läuft es',
    steps: [
      {
        step: '01',
        when: 'Tag 1',
        title: 'Sie erzählen',
        text: 'Ein Gespräch, um zu verstehen, was Sie machen, an wen Sie verkaufen und was passieren soll, wenn jemand Ihre Website öffnet. Daraus ergeben sich die Abschnitte und was in jedem steht.',
        gives: 'Sie bekommen: die Struktur Ihrer Website schriftlich, bevor es sie gibt.',
      },
      {
        step: '02',
        when: 'Die Tage danach',
        title: 'Wir bauen, Sie sehen',
        text: 'Wir programmieren sie und zeigen sie Ihnen funktionierend, nicht als Entwurf. Sie sagen, was sich ändern soll, und wir ändern es an etwas, das Sie schon auf Ihrem Smartphone öffnen können.',
        gives: 'Sie bekommen: einen Link zum Ansehen und alle Korrekturen, die nötig sind.',
      },
      {
        step: '03',
        when: 'Weniger als eine Woche',
        title: 'Online',
        text: 'Ihre Website im Netz, mit Ihrer Domain und allem auf den Namen Ihres Unternehmens. Ab dann sorgen wir dafür, dass sie läuft: Sie müssen mit keinem Hoster sprechen und an keine Verlängerung denken.',
        gives: 'Sie bekommen: die Website online, die Zugänge in Ihrer Hand und die Wartung abgedeckt.',
      },
    ],

    note: 'Die Woche beginnt, sobald wir Ihr Material haben: Texte, Logo und Bilder. Wenn Sie es noch nicht haben, helfen wir bei der Vorbereitung – das braucht eigene Zeit.',
    portafolio: { enlace: 'Drei Beispiel-Startseiten ansehen', href: '/portafolio' },
  },

  systems: {
    marker: '02',
    eyebrow: 'Wenn es mehr braucht',
    title: 'Software nach Maß für Abläufe mit Regeln.',
    text: 'Wenn nicht eine Website fehlt, sondern das System, mit dem Ihr Unternehmen jeden Tag arbeitet. Das bauen wir bei KLINODA: amtliche Formulare, Berechtigungen je Nutzertyp, signierte Dokumente und Daten, die nur sieht, wer sie sehen darf.',
    items: [
      {
        title: 'Branchenplattformen',
        text: 'Das System, das Ihre Branche braucht und das kein Standardprodukt abdeckt: Ihre Formulare, Ihre Regeln und wer was sehen darf.',
      },
      {
        title: 'Dashboards mit Ihren Daten',
        text: 'Kennzahlen, die sich aus Ihren eigenen Systemen selbst aktualisieren, statt einer Tabelle, die jeden Monat jemand neu zusammenbaut.',
      },
      {
        title: 'Automatisierte Berichte und Dokumente',
        text: 'Was heute Kopieren, Einfügen, Prüfen und Versenden ist, läuft von selbst – mit elektronischer Signatur, wenn das Dokument sie verlangt.',
      },
      {
        title: 'Integrationen',
        text: 'Wir verbinden, was Sie schon nutzen – Rechnungsstellung, Buchhaltung, Lager –, damit es keine Inseln mehr sind und nichts zweimal eingetippt wird.',
      },
    ],

    stepsLabel: 'So läuft es',
    steps: [
      {
        step: '01',
        when: 'Am Anfang',
        title: 'Den echten Ablauf verstehen',
        text: 'Zwei oder drei Termine, um zu sehen, wie Ihr Team wirklich jeden Tag arbeitet – nicht, wie es im Handbuch steht. Am Ende stehen der Umfang schriftlich und ein Angebot mit Preis.',
        gives: 'Sie bekommen: den Umfang schriftlich und den Preis, bevor Sie sich festlegen.',
      },
      {
        step: '02',
        when: 'Ab den ersten Wochen',
        title: 'Sie sehen es laufen',
        text: 'Wir programmieren und zeigen es Ihnen. Sie bekommen einen Link, über den Sie das schon Gebaute mit Testdaten ausprobieren. Sie korrigieren an etwas, das man anfassen kann, nicht an einem Dokument. Keine Monate Funkstille und keine große Premiere, bei der alles auf einmal ans Licht kommt.',
        gives: 'Sie bekommen: Zugang zum System im Bau ab dem ersten Monat.',
      },
      {
        step: '03',
        when: 'Zum Abschluss',
        title: 'Einführung',
        text: 'Wir übernehmen die Daten, die Sie schon haben, schulen die Menschen, die damit arbeiten, und begleiten die ersten Wochen im echten Betrieb – die zeigen, ob ein System wirklich trägt.',
        gives: 'Sie bekommen: das System im Einsatz und ein Team, das damit umgehen kann.',
      },
      {
        step: '04',
        when: 'Danach',
        title: 'Support und Änderungen',
        text: 'Vorschriften ändern sich, das Geschäft ändert sich, und das System muss mitgehen. Der Support ist eine eigene Vereinbarung, mit schriftlich festgelegten Reaktionszeiten.',
        gives: 'Sie bekommen: Korrekturen, Verbesserungen und Anpassungen an neue Vorschriften.',
      },
    ],
  },

  guarantees: {
    eyebrow: 'Unsere Zusagen',
    title: 'Wozu wir uns verpflichten.',
    intro: 'Vier Zusagen, die man nachprüfen kann, statt vier Adjektiven.',
    items: [
      {
        title: 'Alles auf Ihren Namen',
        text: 'Domain, Zugänge, Code und Dokumentation gehören Ihrem Unternehmen. Wenn Sie eines Tages mit einem anderen Team weitermachen wollen, geht das ohne unsere Erlaubnis. Wir binden niemanden.',
      },
      {
        title: 'Wir testen, was wir bauen',
        text: 'Bei Software nach Maß automatisierte Tests bei jeder Änderung. Wenn etwas kaputtgeht, schlägt es fehl, bevor es live geht – und nicht Ihr Team entdeckt es an einem Montagmorgen.',
      },
      {
        title: 'Privacy by Design',
        text: 'Was ein Nutzer nicht sehen darf, verlässt die Datenbank nicht. Die Regel steckt im Datenmodell und nicht in der Oberfläche, wo sie am ehesten bricht.',
      },
      {
        title: 'Entscheidungen schriftlich',
        text: 'Jede wichtige Entscheidung steht in einem Protokoll, mit Begründung und Alternativen. In zwei Jahren weiß man noch, warum das System so ist, wie es ist.',
      },
    ],
  },

  proof: {
    eyebrow: 'Was es schon gibt',
    title: 'Wir sagen es nicht nur: Wir bauen es.',
    text: 'KLINODA ist ein Unternehmen der CJM-Nexus-Gruppe für Arbeitsmedizin in Ecuador: ein Pflichtverfahren voller Regeln, amtlicher Formulare und medizinischer Daten, die der Arbeitgeber nicht sehen darf. Seine Plattform baut unser Digitalteam. Und diese Website, die Sie gerade lesen, haben wir mit derselben Sorgfalt gebaut wie Ihre.',
    estado: 'Demo · in Entwicklung · fiktive Daten',
    facts: [
      { value: '2.300+', label: 'automatisierte Tests in KLINODA' },
      { value: '13', label: 'Entscheidungsprotokolle' },
      { value: '5,1 s', label: 'für 50 signierte Bescheinigungen' },
    ],
    cta: 'Mehr zu KLINODA',
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    title: 'Fragen zu Websites und Software.',
    items: [
      {
        q: 'Wirklich in einer Woche?',
        a: 'Ja, und die Bedingung steht offen da: Die Woche beginnt, sobald wir Ihre Texte, Ihr Logo und Ihre Bilder haben. Damit ist Ihre Website in weniger als sieben Tagen online. Was ein Projekt meistens verzögert, ist nicht das Programmieren, sondern das Warten auf das Material.',
      },
      {
        q: 'Was brauchen Sie von mir?',
        a: 'Ihr Logo, die Bilder, die Sie verwenden möchten, und ein Gespräch über Ihr Unternehmen. Die Texte stimmen wir mit Ihnen ab; Sie müssen nichts fertig Formuliertes mitbringen.',
      },
      {
        q: 'Kosten Domain und Hosting extra?',
        a: 'Nein, sie sind inklusive. Wir kümmern uns um Vertrag und Pflege, und beides läuft auf den Namen Ihres Unternehmens. Beides zugleich: Sie müssen mit niemandem sprechen, und wenn Sie eines Tages zu einem anderen Team wechseln, nehmen Sie Ihre Website ohne unsere Erlaubnis mit.',
      },
      {
        q: 'Werde ich bei Google gefunden?',
        a: 'Wir bauen sie so, dass eine Suchmaschine sie versteht: Geschwindigkeit, saubere Struktur und jede Seite mit eigenem Titel und eigener Beschreibung. Bei einer umkämpften Suche ganz oben zu stehen, ist eine andere, längere Arbeit, und niemand Seriöses garantiert Ihnen das in einer Woche.',
      },
      {
        q: 'Wer pflegt sie danach?',
        a: 'Wir. Die Wartung ist inklusive: dass sie online, aktuell und sicher bleibt, kleine Änderungen eingeschlossen. Wir lassen Sie nicht mit einer veröffentlichten Website allein – genau da scheitern die meisten.',
      },
      {
        q: 'Was kostet das?',
        a: 'Das hängt davon ab, was Sie brauchen, deshalb besprechen wir es im Gespräch, statt hier einen Preis zu nennen. Nach zwanzig Minuten wissen Sie, was Sie brauchen; das verbindliche Angebot kommt danach, schriftlich.',
      },
      {
        q: 'Und wenn ich ein System brauche, keine Website?',
        a: 'Dann ist es der andere Weg: Wir verstehen zuerst Ihren echten Ablauf, Sie bekommen einen schriftlichen Umfang mit Preis, und ab den ersten Wochen können Sie ausprobieren, was schon gebaut ist. Das dauert Monate, nicht Tage, und das sagen wir von Anfang an.',
      },
      {
        q: 'Sitzt Ihr Team in Deutschland?',
        a: 'Ja, das technische Team ist in Berlin. Das erste Gespräch ist auf Englisch. Ihre Website entsteht auf Deutsch, und die Texte stimmen wir mit Ihnen ab.',
      },
    ],
  },

  cta: {
    eyebrow: 'Nächster Schritt',
    title: 'Erzählen Sie uns, was Sie brauchen – wir sagen Ihnen, wie lange es dauert.',
    text: 'Zwanzig Minuten, um herauszufinden, ob es bei Ihnen eine Website in einer Woche ist oder ein System über mehrere Monate. Unverbindlich.',
    primary: 'Gespräch vereinbaren · 20 Min.',
    secondary: 'E-Mail an CJM Nexus',
  },
};
