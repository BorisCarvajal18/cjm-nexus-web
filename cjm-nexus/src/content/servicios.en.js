/**
 * The three service pages, in English: the index, fractional CFO services and
 * digital solutions. Same keys and same order as `servicios.es.js`, which is
 * the source (.impeccable/TRADUCCION.md).
 *
 * The finance page speaks to an owner in the US: «Fractional CFO», the
 * accountant, filing taxes, dollars in the sample dashboard. No prices, no
 * promises that the Spanish doesn't make.
 */

/* ─────────────────────────────────────────────────────────────────────
   SERVICES INDEX  ·  /en/servicios
   ───────────────────────────────────────────────────────────────────── */
export const servicios = {
  meta: {
    title: 'Services: fractional CFO and custom software | CJM Nexus',
    description:
      'Fractional CFO services to decide with clear numbers, and specialized software development for operations with regulations and sensitive data.',
  },

  hero: {
    eyebrow: 'Services',
    title: 'Two services. One way of thinking.',
    highlight: 'One way of thinking.',
    lead: 'We put the numbers in order and build the software your operations need. You can hire either one on its own; together is where they pay off most, because the information the system produces is the same information you decide with.',
    primary: 'Book a diagnostic call · 20 min',
    secondary: 'See both services',
  },

  cards: [
    {
      eyebrow: 'Service 01',
      title: 'Fractional CFO services',
      text: 'A CFO for owners and managers who need clarity to decide. A diagnostic, a monthly dashboard and a meeting where decisions are made with the numbers on the table.',
      items: [
        'Executive financial diagnostic',
        'Management dashboard every month',
        '13-week cash flow forecast',
        'Profitability by business line',
      ],
      href: '/servicios/direccion-financiera',
      cta: 'See the service',
    },
    {
      eyebrow: 'Service 02',
      title: 'Websites and custom systems',
      text: 'Your professional website, live in less than a week. And, when the business calls for it, the full system your company works with every day.',
      items: [
        'Custom website, live in days',
        'Industry-specific platforms',
        'Dashboards connected to your data',
        'Automated reports and documents',
      ],
      href: '/servicios/soluciones-digitales',
      cta: 'See the service',
    },
  ],

  together: {
    eyebrow: 'Why in the same firm',
    title: 'The number and the system that produces it.',
    text: "Most dashboards fail for the same reason: the data is pieced together by hand, arrives late and nobody fully trusts it. When the people who run the finances and the people who build the software are the same firm, a metric is defined once and the system produces it on its own.",
    points: [
      {
        title: 'Defined once',
        text: 'Margin, the cash cycle or unit cost are defined in the leadership meeting and written into the system with that definition.',
      },
      {
        title: 'No longer built by hand',
        text: 'What today takes three spreadsheets and two emails comes out of the system every month, the same way every time.',
      },
      {
        title: 'One conversation',
        text: "You don't explain your business to the financial advisor and then again to the software vendor. It's the same team.",
      },
    ],
  },

  product: {
    eyebrow: 'A CJM Nexus Group company',
    title: 'KLINODA',
    text: 'Its platform brings order to occupational health for companies in Ecuador: a mandatory process, full of rules, official forms and sensitive data, organized in one place.',
    estado: 'Demo · in development · fictional data',
    cta: 'Learn about KLINODA',
  },

  cta: {
    eyebrow: 'Next step',
    title: 'Twenty minutes to understand your company and suggest a way forward.',
    text: 'Whether you come for the numbers, the software or both. No commitment, in English or Spanish.',
    primary: 'Book a diagnostic call',
    secondary: 'Email CJM Nexus',
  },
};

/* ─────────────────────────────────────────────────────────────────────
   FRACTIONAL CFO  ·  /en/servicios/direccion-financiera
   ───────────────────────────────────────────────────────────────────── */
export const finanzas = {
  meta: {
    title: 'Fractional CFO services for midsize companies | CJM Nexus',
    servicio: 'Fractional CFO services',
    description:
      'A fractional CFO: a diagnostic, a monthly management dashboard, a 13-week cash flow forecast and a monthly meeting where decisions are made with the numbers on the table.',
  },

  hero: {
    eyebrow: 'Service 01 · Fractional CFO',
    title: 'A CFO for your company, without one on the payroll.',
    highlight: 'without one on the payroll.',
    lead: "Richard Carvajal has spent more than fifteen years putting growing companies' numbers in order. We step into yours, get the information in order and hand you a dashboard every month that you can actually make decisions with.",
    primary: 'Book a diagnostic call · 20 min',
    secondary: 'See what you get every month',
    note: 'Free · no commitment',
  },

  symptoms: {
    eyebrow: "Who it's for",
    title: 'If any of these sound familiar, this is for you.',
    items: [
      "I know how much I sell, but not how much I make on each business line.",
      "My books arrive late, and they're good for filing taxes, not for making decisions.",
      "I'm selling more than ever and the cash still isn't there.",
      "If a big payment falls through tomorrow, I don't know how many days I can hold out.",
      'I set prices by what the competition charges, not by what it costs me.',
      "I want to apply for financing and my numbers aren't presentable.",
    ],
  },

  month: {
    eyebrow: 'How we work',
    title: 'This is the first month, and every month after.',
    intro:
      'No consulting that ends in a report nobody opens. The work has a fixed rhythm and deliverables with dates.',
    steps: [
      {
        step: '01',
        when: 'Week 1',
        title: 'Strategy conversation',
        text: "We sit down and talk about your business seriously: what you sell, how you sell it, what it costs you and where you want to go. With that and the financial information you already have, we get started. We don't ask for access to your bank accounts and we don't move money.",
        gives: 'What you bring: the information that already exists and an in-depth conversation about your company.',
      },
      {
        step: '02',
        when: 'One to two weeks',
        title: 'Financial diagnostic',
        text: "A document with the real state of the business: profitability by line, cost structure, cash cycle and the three or four issues costing you the most money today. It's presented and discussed in a meeting, not just sent by email.",
        gives: 'What you get: the diagnostic and a prioritized list of what to tackle first.',
      },
      {
        step: '03',
        when: 'The next two weeks',
        title: 'Setup',
        text: "We build the management dashboard and the 13-week cash flow forecast with your company's data, using the metrics that matter in your industry, not a generic template.",
        gives: 'What you get: the dashboard up and running, with your numbers in it.',
      },
      {
        step: '04',
        when: 'Every month from here',
        title: 'Leadership meeting',
        text: 'A monthly meeting with the dashboard in front of you: what happened, what gets decided and who does what before the next one. Decisions are written down, with their reasoning.',
        gives: "What you get: an updated dashboard, the month's alerts and the meeting minutes.",
      },
    ],
  },

  deliverable: {
    badge: 'Monthly deliverable',
    title: 'This is what you get every month.',
    text: 'Sales against target, margin by line, days of cash and the alerts that call for a decision. A living document that is reviewed in a meeting.',
    board: {
      title: 'Management dashboard',
      subject: 'Sample Company · June',
      kpis: [
        { label: 'Sales', value: '$1.24M', delta: '▲ 12%', tone: 'ok', spark: '0,12 9,11 18,12 27,8 36,7 45,4 55,2' },
        { label: 'Margin', value: '34%', delta: '▲ 3 pt', tone: 'ok', spark: '0,10 9,12 18,9 27,10 36,6 45,7 55,4' },
        { label: 'Cash', value: '45 days', delta: '▼ 4 d', tone: 'warn', spark: '0,4 9,5 18,3 27,7 36,8 45,11 55,12' },
        { label: 'Profitability', value: '18.2%', delta: '▲ 1.5 pt', tone: 'ok', spark: '0,11 9,10 18,11 27,8 36,9 45,6 55,5' },
      ],
      seriesLabel: 'Sales vs. target',
      targetLabel: 'target',
      series: [58, 64, 61, 72, 78, 86, 92, 88, 101, 96, 102, 114],
      months: ['J', 'A', 'S', 'O', 'N', 'D', 'J', 'F', 'M', 'A', 'M', 'J'],
      target: 95,
      linesLabel: 'Margin by line',
      // «34%», with no space, as in English.
      porcentaje: '%',
      lines: [
        ['Services', 41, 'ok'],
        ['Product', 33, 'ok'],
        ['Distribution', 27, 'warn'],
        ['Digital', 21, 'neutral'],
      ],
      alertsLabel: "This month's alerts",
      alerts: [
        ['Receivables over 60 days past due', 'warn'],
        ['Margin above target in Services', 'ok'],
      ],
    },
  },

  deliverables: {
    eyebrow: 'Deliverables',
    title: "What's inside, specifically.",
    items: [
      {
        title: 'Monthly management dashboard',
        text: 'Sales against target, margin, days of cash and profitability, compared with the previous month and the previous year.',
      },
      {
        title: '13-week cash flow forecast',
        text: 'What comes in and what goes out, week by week, over the next quarter, with the moments when cash gets tight flagged in advance.',
      },
      {
        title: 'Profitability by business line',
        text: 'How much each product, service or location really makes, with overhead allocated on an explicit basis.',
      },
      {
        title: 'Cost structure and break-even point',
        text: 'How much you need to sell not to lose money, and what happens to that number if a cost goes up or a price goes down.',
      },
      {
        title: "This month's alerts",
        text: 'What calls for a decision now: overdue receivables, falling margins, stalled inventory, a client that weighs too much.',
      },
      {
        title: 'Meeting minutes',
        text: "What was decided, why, and who's responsible for each item before the next meeting.",
      },
    ],
  },

  fit: {
    eyebrow: 'Honesty up front',
    title: "Who it works for, and who it doesn't.",
    yes: {
      title: 'It works if',
      items: [
        "Your company already has steady revenue and the owner can't keep the numbers in their head.",
        "You have an accountant, and what's missing isn't bookkeeping but interpretation.",
        "You're growing, planning to invest or about to apply for financing.",
        'You want to decide with numbers, not gut feeling.',
      ],
    },
    no: {
      title: "It's not for you if",
      items: [
        "You're looking for someone to keep the books and file taxes: that's your accountant's job. Ours is what comes after.",
        "You need to fix a cash emergency this week: a diagnostic doesn't replace a loan.",
        "There's no willingness to make uncomfortable decisions when the numbers point to them.",
      ],
    },
  },

  /* PROPOSED QUESTIONS, like the Spanish ones: reviewed when there are real
     clients (.impeccable/CONSTRUCCION.md, «Revisar con clientes reales»). */
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'What people ask before starting.',
    items: [
      {
        q: 'Does this replace my accountant?',
        a: "No, and it shouldn't. Your accountant records what already happened and handles what the law requires. Financial leadership interprets that information and turns it into decisions going forward. They're two different jobs: ours starts where theirs ends.",
      },
      {
        q: 'What if my books are a mess?',
        a: "That's the most common case, and it's not an obstacle. Part of the first month is precisely getting the minimum information in order so you can make decisions. Everything doesn't have to be perfect to start.",
      },
      {
        q: 'How much of my time will it take?',
        a: 'Handing over the initial information and one meeting a month. We do the work of building, reviewing and forecasting; you decide.',
      },
      {
        q: 'Do you need access to my bank accounts?',
        a: "No. We work with reports and accounting information. We don't handle, move or authorize any client's money.",
      },
      {
        q: 'From what company size does it make sense?',
        a: "From the moment pricing, purchasing or hiring decisions carry enough weight that getting them wrong is expensive, and the owner can no longer keep all the numbers in their head. That happens much earlier than most people think.",
      },
      {
        q: 'How much does it cost?',
        a: 'It depends on the size of your company and how far the work goes, so we cover it in the diagnostic call instead of posting a rate here. That conversation leads to a concrete proposal, and deciding afterwards costs nothing.',
      },
      {
        q: 'Do you work remotely?',
        a: 'Yes. We have a team in Ecuador and in Berlin, and we work in English, Spanish and German. Meetings are by video call unless being there in person is needed.',
      },
    ],
  },

  cta: {
    eyebrow: 'Next step',
    title: 'Twenty minutes with your numbers on the table.',
    text: "A short executive diagnostic to understand where you stand and tell you frankly whether we can help. No commitment.",
    primary: 'Book a diagnostic call',
    secondary: 'Email CJM Nexus',
  },
};

/* ─────────────────────────────────────────────────────────────────────
   DIGITAL SOLUTIONS  ·  /en/servicios/soluciones-digitales

   Two offers on one page, in this order: first the website, then custom
   systems. No website clients yet, so no numbers and no testimonials: the
   proof is KLINODA, this website and the three sample homepages.
   ───────────────────────────────────────────────────────────────────── */
export const digital = {
  meta: {
    title: 'Websites and custom systems | CJM Nexus',
    servicio: 'Specialized software development',
    description:
      'Your professional website, live in less than a week, and custom systems for operations with regulations, official documents and sensitive data.',
  },

  hero: {
    eyebrow: 'Service 02 · Digital solutions',
    title: 'Your website live in one week. And the system that comes after.',
    highlight: 'in one week.',
    lead: "Two ways to work with us. A professional website, built to fit you and live in days. And, when the business calls for it, complete systems for operations full of rules, official documents and data that can't leave where it belongs.",
    primary: 'Book a call · 20 min',
    secondary: 'See both options',
    note: 'Free · no commitment',
  },

  web: {
    marker: '01',
    eyebrow: 'First',
    title: "A website that doesn't look like a template.",
    text: "Made for your company, with your copy, your brand and the way you sell. Not a purchased theme with the logo swapped in, which people spot right away and which makes a client hesitate before getting in touch.",

    includesLabel: "What's included",
    includes: [
      'Original design',
      "Looks good on a phone, which is where people will see you",
      'Copy written or edited with you',
      'Contact form and one-tap call, email or WhatsApp',
      'Built so Google reads it properly',
      "Domain and hosting included, in your company's name",
      'Maintenance: we keep it online and up to date',
    ],

    stepsLabel: 'How it goes',
    steps: [
      {
        step: '01',
        when: 'Day 1',
        title: 'You tell us',
        text: 'A conversation to understand what you do, who you sell to and what you want to happen when someone lands on your website. That gives us the sections it will have and what each one says.',
        gives: 'What you get: the structure of your website in writing, before it exists.',
      },
      {
        step: '02',
        when: 'The next few days',
        title: 'We build it and you see it',
        text: "We code it and show it to you working, not as a mockup. You tell us what to change and we change it on something you can already open on your phone.",
        gives: 'What you get: a link to see it and every round of changes it takes.',
      },
      {
        step: '03',
        when: 'Less than a week',
        title: 'Live',
        text: "Your website online, with your domain and everything in your company's name. From then on we keep it running: you don't have to deal with any hosting company or remember to renew anything.",
        gives: 'What you get: the website online, the logins in your hands and maintenance covered.',
      },
    ],

    note: "The week starts counting once we have your material: copy, logo and images. If you don't have them yet, we help you prepare them, and that takes its own time.",
    portafolio: { enlace: 'See three sample homepages', href: '/portafolio' },
  },

  systems: {
    marker: '02',
    eyebrow: 'When you need more',
    title: 'Custom systems for operations with rules.',
    text: "When what you need isn't a website but the system your company works with every day. It's what we build in KLINODA: official forms, permissions by type of user, signed documents and data that only the right people can see.",
    items: [
      {
        title: 'Specialized platforms',
        text: 'The system your industry needs and no off-the-shelf product covers: your forms, your rules and who can see what.',
      },
      {
        title: 'Dashboards connected to your data',
        text: 'Metrics that update themselves from your own systems, instead of a spreadsheet someone rebuilds every month.',
      },
      {
        title: 'Automated reports and documents',
        text: 'What today is copying, pasting, checking and sending happens on its own, with an e-signature when the document requires one.',
      },
      {
        title: 'Integrations',
        text: 'We connect what you already use — invoicing, accounting, inventory — so they stop being islands and data stops being typed in twice.',
      },
    ],

    stepsLabel: 'How it goes',
    steps: [
      {
        step: '01',
        when: 'At the start',
        title: 'Understand the real process',
        text: 'Two or three sessions to see how your team really works every day, not how the manual describes it. We come out with the scope in writing and a proposal with a price.',
        gives: 'What you get: the scope in writing and the price, before committing to anything.',
      },
      {
        step: '02',
        when: 'From the first weeks',
        title: 'You see it working',
        text: "We build and show you. You get a link where you log in and try what's already built, with test data. You make corrections on something you can touch, not on a document. No months of silence and no big reveal where everything comes out at once.",
        gives: 'What you get: access to the system under construction from the first month.',
      },
      {
        step: '03',
        when: 'At the end',
        title: 'Rollout',
        text: "We move over the information you already have, train the people who will use it and stay with you through the first weeks of real use, which are the ones that truly test a system.",
        gives: 'What you get: the system running and your team knowing how to use it.',
      },
      {
        step: '04',
        when: 'After that',
        title: 'Support and changes',
        text: 'Regulations change, the business changes and the system has to keep up. Support is a separate agreement, with response times in writing.',
        gives: 'What you get: fixes, improvements and updates for regulatory changes.',
      },
    ],
  },

  guarantees: {
    eyebrow: 'Our commitments',
    title: 'What we hold ourselves to.',
    intro: 'Four commitments you can check, not four adjectives.',
    items: [
      {
        title: "Everything is in your name",
        text: "The domain, the logins, the code and the documentation belong to your company. If you ever decide to move to another team, you can do it without asking our permission. We don't lock clients in.",
      },
      {
        title: 'We test what we build',
        text: "In custom systems, automated tests on every change. If something breaks, it fails before it reaches production, not when your team finds it on a Monday morning.",
      },
      {
        title: 'Privacy by design',
        text: "What a user shouldn't see never leaves the database. The rule lives in the data model, not on the screen, which is where it breaks.",
      },
      {
        title: 'Decisions in writing',
        text: "Every relevant decision goes into a record with its reasoning and its alternatives. Two years from now, you'll be able to know why the system is the way it is.",
      },
    ],
  },

  proof: {
    eyebrow: 'What already exists',
    title: "We don't just say it: we build it.",
    text: "KLINODA is a CJM Nexus Group company working in occupational health in Ecuador: a mandatory process full of rules, official forms and clinical data the employer isn't allowed to see. Its platform is built by our digital team. And this very website, the one you're reading, we made with the same care we'd put into yours.",
    estado: 'Demo · in development · fictional data',
    facts: [
      { value: '2,300+', label: 'automated tests in KLINODA' },
      { value: '13', label: 'decision records' },
      { value: '5.1 s', label: 'to issue 50 signed certificates' },
    ],
    cta: 'Learn about KLINODA',
  },

  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Questions about websites and systems.',
    items: [
      {
        q: 'Really, in one week?',
        a: 'Yes, and the condition is out in the open: the week starts counting once we have your copy, your logo and your images. With those in hand, your website is live in less than seven days. What usually drags a project out is not the coding, it is waiting for the material.',
      },
      {
        q: 'What do you need from me?',
        a: "Your logo, the images you want to use and a conversation about your company. We can write the copy ourselves from that conversation and you edit it; you don't need to show up with anything written.",
      },
      {
        q: 'Are the domain and hosting extra?',
        a: "No, they're included. We take care of buying and maintaining them, and they're registered in your company's name. Both at once: you don't have to deal with anyone, and if you ever decide to move to another team, you take your website with you without asking our permission.",
      },
      {
        q: 'Will I show up on Google?',
        a: "We build it so a search engine understands it: speed, the right structure and every page with its own title and description. Ranking first for a competitive search is a different, longer job, and nobody serious will guarantee it in a week.",
      },
      {
        q: 'Who maintains it afterwards?',
        a: "We do. Maintenance is included: keeping it online, updated and secure, with small changes included. We don't leave you with a published website and see what happens, which is where most of them fall apart.",
      },
      {
        q: 'How much does it cost?',
        a: "It depends on what you need, which is why we discuss it in the meeting instead of posting a rate here. In twenty minutes you'll know what you need; the final proposal follows, in writing.",
      },
      {
        q: 'What if what I need is a system, not a website?',
        a: "Then the path is the other one: we start by understanding your real process, you get a written scope with a price, and from the first weeks you can log in and try what we've built so far. That's measured in months, not days, and we say so from the start.",
      },
      {
        q: 'Do you work with international companies?',
        a: 'Yes. Our technical team is based in Berlin, and we work in English, Spanish and German.',
      },
    ],
  },

  cta: {
    eyebrow: 'Next step',
    title: "Tell us what you need and we'll tell you how long it takes.",
    text: 'Twenty minutes to find out whether yours is a website in a week or a system that takes months. No commitment.',
    primary: 'Book a call · 20 min',
    secondary: 'Email CJM Nexus',
  },
};
