/**
 * The home page, in English. Same keys as `home.es.js`, which is the source:
 * every text here says what the approved Spanish says, adapted, not
 * translated word for word (.impeccable/TRADUCCION.md, approved by Boris on
 * 2026-09-19).
 *
 * American English. Numbers and money in US format ($1.24M, 34%, Jun 12);
 * the sample dashboards stay in dollars.
 *
 * The rules of `home.es.js` still apply: every claim about the firm must be
 * able to answer «where is that?», and the numbers in the sample interfaces
 * are never presented as our results or a client's.
 */
export const home = {
  meta: {
    title: 'Fractional CFO services and specialized software | CJM Nexus',
    description:
      "CJM Nexus brings together Richard Carvajal's financial leadership, fifteen years in the making, and specialized software development, for small and midsize businesses that want to grow in control.",
  },

  portada: {
    titular: '*Clear* finances and software that *measures up* to your business.',
    entrada:
      "CJM Nexus brings together Richard Carvajal's financial leadership, fifteen years in the making, and specialized software development. For companies that want to grow in control.",
    agendar: 'Book a diagnostic call · 20 min',
    verQueHacemos: 'See what we do',
    nota: 'Free · no commitment · 20 minutes',
    imagen: 'Three people working at a table with reports, printed charts and a laptop, seen from above.',
  },

  credenciales: {
    etiqueta: 'Track record and team',
    cifras: [
      {
        hasta: 15,
        mas: '+',
        que: 'years in financial leadership',
        quien: "The track record of Richard Carvajal, the firm's founder.",
      },
      {
        hasta: 100,
        mas: '+',
        que: 'clients advised',
        quien: 'By Richard Carvajal in Latin America, the US and Europe.',
      },
      {
        valor: '3',
        que: 'working languages',
        quien: 'English, Spanish and German, with a team in Ecuador and Berlin.',
      },
    ],
    firma:
      '**Richard Carvajal** leads finance, **Boris Carvajal** technology and **Mirella Llanga** general management.',
  },

  hacemos: {
    titulo: 'What we do',
    rotulo: 'Two lines, one firm. Whoever defines the number also builds the system that produces it.',
    muestra: 'Sample interface · illustrative data',
    servicios: [
      {
        ref: 'Service 01',
        titulo: ['Fractional CFO', 'services.'],
        lead: 'A CFO for owners and managers who need clarity to decide, with concrete deliverables every month.',
        lista: [
          'Executive financial diagnostic',
          '13-week cash flow forecast',
          'KPIs and cost control',
          'Profitability by business line',
        ],
        boton: 'See the service',
        href: '/servicios/direccion-financiera',
      },
      {
        ref: 'Service 02',
        titulo: ['Websites and', 'custom systems.'],
        lead: 'Your professional website, live in less than a week. And the full system when operations call for it.',
        lista: [
          'Custom website, in days',
          'Industry-specific software',
          'Dashboards connected to your data',
          'Privacy and traceability',
        ],
        boton: 'See the service',
        href: '/servicios/soluciones-digitales',
      },
    ],
    /* THE NUMBERS ADD UP, as in a real dashboard: the three lines add up to
       $1.24M, which is the «Sales» KPI and the June point of the chart; June
       is 12% over May; and the line crosses the target between April and May. */
    tablero: {
      titulo: 'Management dashboard',
      periodo: 'June',
      vistas: ['Month', 'Quarter', 'Year'],
      kpis: [
        { nombre: 'Sales', cambio: '▲ 12%', valor: '$1.24M', chispa: '0,12 9,11 18,12 27,8 36,7 45,4 55,2' },
        { nombre: 'Margin', cambio: '▲ 3 pt', valor: '34%', chispa: '0,10 9,12 18,9 27,10 36,6 45,7 55,4' },
        { nombre: 'Cash', cambio: '▼ 4 d', valor: '45 d', aviso: true, chispa: '0,4 9,5 18,3 27,7 36,8 45,11 55,12' },
        // «A/R»: accounts receivable. «Receivables» doesn't fit (≤ 7 letters).
        { nombre: 'A/R', cambio: '▲ 2 pt', valor: '18%', aviso: true, chispa: '0,11 9,10 18,11 27,8 36,9 45,6 55,5' },
      ],
      grafico: 'Sales vs. target',
      real: 'Actual',
      meta: 'Target',
      proyeccion: 'Forecast',
      ejeY: ['1.4M', '1.1M', '0.8M', '0.5M'],
      ejeX: ['JAN', 'MAR', 'MAY', 'JUL', 'SEP'],
      ventas: {
        escala: [0.5, 1.4],
        real: [0.82, 0.88, 0.85, 0.97, 1.11, 1.24],
        proyeccion: [1.27, 1.31, 1.36],
        meta: [1.0, 1.2],
        globo: { mes: 'JUN', valor: '$1.24M', nota: '10% above target' },
      },
      tabla: ['Profitability by line', 'Revenue', 'Margin'],
      lineas: [
        { nombre: 'Services', ingresos: '$612K', barra: 1, margen: '38%' },
        { nombre: 'Product', ingresos: '$431K', barra: 0.82, margen: '31%' },
        { nombre: 'Maintenance', ingresos: '$197K', barra: 0.63, margen: '24%' },
      ],
      alerta: 'Receivables over 60 days past due',
    },
    portal: {
      titulo: 'Documents and traceability',
      rotulo: 'Company portal',
      buscar: 'Search documents',
      columnas: ['Document', 'Status'],
      documentos: [
        { nombre: 'Monthly report', origen: 'Accounting · Jun 12', estado: 'Signed', sel: true },
        { nombre: 'Board minutes', origen: 'Management · Jun 5', estado: 'Signed' },
        { nombre: 'Reconciliation', origen: 'Accounting · Jun 4', estado: 'In review', tipo: 'rev' },
        { nombre: 'Purchase order 2418', origen: 'Operations · Jun 3', estado: 'Draft', tipo: 'bor' },
        { nombre: 'Inventory report', origen: 'Operations · Jun 1', estado: 'Signed' },
      ],
      cuantos: '5 of 128 documents',
      periodo: 'Last 30 days',
      reparto: [
        { estado: 'Signed', cuantos: 96 },
        { estado: 'In review', cuantos: 21, tipo: 'rev' },
        { estado: 'Draft', cuantos: 11, tipo: 'bor' },
      ],
      traza: 'Document trail',
      sello: 'Seal 9F3A · C21E',
      sucesos: [
        ['Creates the document', '09:12 · Operations', 'documento'],
        ['Checks 12 rules', '09:20 · System', 'regla'],
        ['Attaches the backup', '09:26 · Accounting', 'clip'],
        ['E-signature', '09:34 · Management', 'firma'],
        ['Seals and delivers', '09:34 · System', 'sello'],
      ],
      reglas: 'Rules passed',
      cumplidas: 12,
      total: 12,
      pie: 'Rules, permissions and traceability at the core, not on the screen.',
    },
  },

  /* KLINODA on the home page: a door (rule 3 of PRODUCT.md). Fictional demo
     data, only modules that exist in its company portal, its real labels
     translated («APTO» → «FIT»: Boris, 2026-09-19). */
  klinoda: {
    etiqueta: 'Demo · in development · fictional data',
    logo: 'KLINODA',
    lema: 'Every person. One complete history.',
    seccion: 'My company dashboard',
    pestanas: ['Deadlines', 'Certificates', 'Staff'],
    plazos: {
      rotulo: 'Due in 90 days or less',
      total: 11,
      eje: [0, 30, 60, 90],
      tramos: [
        { cuantos: 4, que: 'in 30 days or less', dias: [6, 13, 21, 27] },
        { cuantos: 5, que: 'in 31 to 60 days', dias: [34, 40, 46, 52, 58] },
        { cuantos: 2, que: 'in 61 to 90 days', dias: [69, 84] },
      ],
    },
    vencidas: { cuantos: 3, rotulo: 'Overdue' },
    certificados: { cuantos: 44, rotulo: 'Workers with a certificate available' },
    cargos: [
      { cargo: 'Plant operator', aptitud: 'FIT', vence: 'Due Oct 14' },
      { cargo: 'Driver', aptitud: 'FIT UNDER OBSERVATION', observacion: true, vence: 'Due Oct 22' },
      { cargo: 'Shift supervisor', aptitud: 'FIT', vence: 'Due Nov 3' },
    ],
    frases: [
      'KLINODA is a CJM Nexus Group company. Its platform brings order to occupational health for companies in Ecuador.',
      "You see which certificates are expiring and who is fit for their job, without chasing a single piece of paper.",
      "Each view shows only what belongs to it: in the company's view, clinical data doesn't exist.",
    ],
    pregunta: 'Want to know more about KLINODA?',
    boton: 'See KLINODA',
  },

  cierre: {
    ref: 'Next step',
    titular: 'Twenty minutes with **the people who will do the work**.',
    tres: [
      {
        titulo: "Who you'll talk to",
        texto: 'Richard Carvajal for financial leadership, Boris Carvajal for technology: the same people who then do the work.',
      },
      {
        titulo: 'What happens in the meeting',
        texto: "You tell us how you make decisions today, with what information and what's missing. We ask questions: we're not there to pitch.",
      },
      {
        titulo: 'What you take away',
        texto: "What to sort out first, and in what order. And if we're not the right fit, we'll tell you in that same meeting.",
      },
    ],
    agendar: 'Book a diagnostic call · 20 min',
    nota: 'Free · no commitment · in English or Spanish',
    canales: 'Other channels',
  },
};

export default home;
