export type Locale = 'en' | 'de' | 'ru' | 'nl' | 'es' | 'pt';

export interface LocaleMeta {
  code: Locale;
  short: string;
  label: string;
  intlLocale: string;
}

export const SUPPORTED_LOCALES: LocaleMeta[] = [
  { code: 'en', short: 'EN', label: 'English', intlLocale: 'en-US' },
  { code: 'de', short: 'DE', label: 'Deutsch', intlLocale: 'de-DE' },
  { code: 'ru', short: 'RU', label: 'Русский', intlLocale: 'ru-RU' },
  { code: 'nl', short: 'NL', label: 'Nederlands', intlLocale: 'nl-NL' },
  { code: 'es', short: 'ES', label: 'Español', intlLocale: 'es-ES' },
  { code: 'pt', short: 'PT', label: 'Português', intlLocale: 'pt-PT' },
];

export interface TranslationDictionary {
  nav: {
    home: string;
    personal: string;
    business: string;
    cards: string;
    loans: string;
    wealth: string;
    security: string;
    about: string;
    contact: string;
    more: string;
    portal: string;
    dockPortal: string;
    openAccount: string;
    divisionsHeading: string;
    languageLabel: string;
    themeLabel: string;
    daylight: string;
    deepOcean: string;
    menu: string;
    close: string;
  };
  splash: {
    subtitle: string;
    skip: string;
  };
  hero: {
    kicker: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
    stat3Label: string;
    stat3Value: string;
    stat4Label: string;
    stat4Value: string;
  };
  home: {
    divisionsTitle: string;
    divisionsSubtitle: string;
    explore: string;
    architecturalTitle: string;
    architecturalBody: string;
    architecturalCta: string;
    quickYieldTitle: string;
    quickYieldSub: string;
    depositLabel: string;
    projectedAnnual: string;
    vsNationalAvg: string;
    testimonialsTitle: string;
    testimonialsSub: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  personal: {
    kicker: string;
    title: string;
    subtitle: string;
    checkingTitle: string;
    checkingDesc: string;
    savingsTitle: string;
    savingsDesc: string;
    cdTitle: string;
    cdDesc: string;
    calcTitle: string;
    calcSubtitle: string;
    initialDeposit: string;
    monthlyContribution: string;
    horizonYears: string;
    yearsUnit: string;
    projectedBalance: string;
    interestEarned: string;
    applyNow: string;
    comparisonTitle: string;
    featureCol: string;
    blueOceanCol: string;
    traditionalCol: string;
  };
  business: {
    kicker: string;
    title: string;
    subtitle: string;
    operatingTitle: string;
    operatingDesc: string;
    treasuryTitle: string;
    treasuryDesc: string;
    fxTitle: string;
    fxDesc: string;
    calcTitle: string;
    calcSubtitle: string;
    cashReserves: string;
    annualTreasuryYield: string;
    monthlyYield: string;
    fdicSweepCap: string;
    scheduleTreasury: string;
  };
  cards: {
    kicker: string;
    title: string;
    subtitle: string;
    selectFinish: string;
    titaniumName: string;
    oceanicName: string;
    crimsonName: string;
    calcTitle: string;
    calcSubtitle: string;
    travelSpend: string;
    diningSpend: string;
    generalSpend: string;
    estimatedAnnualRewards: string;
    requestCard: string;
    annualFee: string;
    aprRange: string;
    metalSpec: string;
  };
  loans: {
    kicker: string;
    title: string;
    subtitle: string;
    calcTitle: string;
    calcSubtitle: string;
    propertyPrice: string;
    downPayment: string;
    interestRate: string;
    loanTerm: string;
    monthlyPayment: string;
    loanAmount: string;
    totalInterest: string;
    principalShare: string;
    interestShare: string;
    lockRate: string;
  };
  wealth: {
    kicker: string;
    title: string;
    subtitle: string;
    allocatorTitle: string;
    allocatorSubtitle: string;
    conservative: string;
    balanced: string;
    growth: string;
    expectedRange: string;
    bookAdvisor: string;
  };
  security: {
    kicker: string;
    title: string;
    subtitle: string;
    checklistTitle: string;
    checklistSubtitle: string;
    postureScore: string;
    reportFraud: string;
  };
  portal: {
    loginTitle: string;
    loginSubtitle: string;
    emailLabel: string;
    passwordLabel: string;
    signInCta: string;
    demoQuickCta: string;
    demoNotice: string;
    welcomeBack: string;
    totalLiquidity: string;
    signOut: string;
    tabOverview: string;
    tabTransfers: string;
    tabCards: string;
    tabVaults: string;
    tabLedger: string;
    tabSettings: string;
    fromAccount: string;
    toDestination: string;
    amount: string;
    memo: string;
    submitTransfer: string;
    internalTransfer: string;
    externalWire: string;
    billPay: string;
    freezeCard: string;
    cardFrozen: string;
    cardActive: string;
    contactless: string;
    international: string;
    dailyLimit: string;
    revealNumber: string;
    hideNumber: string;
    fundVault: string;
    createVault: string;
    vaultName: string;
    targetAmount: string;
    searchPlaceholder: string;
    allAccounts: string;
    allTypes: string;
    credits: string;
    debits: string;
    exportCsv: string;
    emptyLedger: string;
    resetFilters: string;
    resetDemo: string;
    routingCopied: string;
    transferSuccess: string;
    insufficientFunds: string;
    vaultFunded: string;
  };
  modal: {
    titleAccount: string;
    titleAdvisor: string;
    fullName: string;
    email: string;
    product: string;
    estimatedAmount: string;
    submit: string;
    cancel: string;
    successTitle: string;
    successBody: string;
    referenceLabel: string;
    done: string;
  };
  footer: {
    tagline: string;
    fdicNotice: string;
    rights: string;
    bankingCol: string;
    institutionalCol: string;
    supportCol: string;
  };
}

export const TRANSLATIONS: Record<Locale, TranslationDictionary> = {
  en: {
    nav: {
      home: 'Home',
      personal: 'Personal',
      business: 'Business',
      cards: 'Cards',
      loans: 'Loans',
      wealth: 'Private Wealth',
      security: 'Security & Trust',
      about: 'About Us',
      contact: 'Contact Us',
      more: 'More',
      portal: 'Customer Portal',
      dockPortal: 'Portal',
      openAccount: 'Open Account',
      divisionsHeading: 'Banking Divisions',
      languageLabel: 'Language',
      themeLabel: 'Appearance',
      daylight: 'Titanium Daylight',
      deepOcean: 'Deep Ocean',
      menu: 'Menu',
      close: 'Close',
    },
    splash: {
      subtitle: 'BlueOcean Bank · Simple International Online Banking',
      skip: 'Skip intro',
    },
    hero: {
      kicker: 'BlueOcean Bank · Send & Receive Money in 42+ Countries',
      title: 'Send, receive, and spend money worldwide—made simple.',
      description:
        'One easy online account to send and receive money internationally, hold 38+ currencies, pay Netflix, Amazon & 20+ U.S. subscriptions with instant virtual credit cards, and save with zero monthly fees.',
      primaryCta: 'Open an Account',
      secondaryCta: 'Enter Customer Portal',
      stat1Label: 'Global Customers',
      stat1Value: '243K+',
      stat2Label: 'Countries Supported',
      stat2Value: '42+',
      stat3Label: 'Currencies Available',
      stat3Value: '38+',
      stat4Label: 'Global Customers',
      stat4Value: '243K+',
    },
    home: {
      divisionsTitle: 'Everything you need to send, receive, and spend worldwide.',
      divisionsSubtitle:
        'Clear exchange rates, zero monthly account fees, instant virtual credit cards, and fast transfers across Europe, the UK, the Americas, and Asia.',
      explore: 'Learn more',
      architecturalTitle: 'Send and receive money across borders in minutes, not days.',
      architecturalBody:
        'Say goodbye to high wire fees, confusing exchange rates, and declined cards on U.S. subscriptions. Send money home, get paid in local currencies, and manage virtual credit cards from one simple portal.',
      architecturalCta: 'See How We Keep Accounts Safe',
      quickYieldTitle: 'Estimate how your savings can grow over time.',
      quickYieldSub: 'Move the slider to see how setting money aside in BlueOcean savings compares with regular bank accounts.',
      depositLabel: 'Your Savings Amount',
      projectedAnnual: 'Estimated 1-Year Growth',
      vsNationalAvg: 'Extra vs. regular banks',
      testimonialsTitle: 'Trusted by people and businesses around the world.',
      testimonialsSub: 'Real stories from customers sending money abroad, paying U.S. subscriptions with virtual credit cards, and getting paid internationally.',
      ctaTitle: 'Ready for simpler international banking?',
      ctaDesc: 'Open your BlueOcean account in under 4 minutes—get an instant virtual credit card and start sending money worldwide with no minimum deposit.',
      ctaPrimary: 'Open Account Today',
      ctaSecondary: 'Explore Customer Portal',
    },
    personal: {
      kicker: 'Personal Accounts · Send, Receive & Save Globally',
      title: 'Everyday accounts and simple savings with no borders.',
      subtitle:
        'Send and receive money in 38+ currencies, create instant virtual credit cards for online shopping and U.S. subscriptions, and organize goals in savings vaults.',
      checkingTitle: 'Everyday Global Account',
      checkingDesc: 'Send and receive money internationally with local receiving details, zero monthly account fees, and instant virtual credit cards in your Customer Portal.',
      savingsTitle: 'Flexible Savings Account',
      savingsDesc: 'Set money aside with no minimum balance, no monthly fees, and instant transfers back to your main account whenever you need it.',
      cdTitle: 'Fixed-Term Savings',
      cdDesc: 'Lock in a clear fixed rate for 6, 12, or 24 months so you always know exactly how much your savings will grow.',
      calcTitle: 'Savings Growth Estimator',
      calcSubtitle: 'See how your savings can grow over time when you add a little each month.',
      initialDeposit: 'Starting Amount',
      monthlyContribution: 'Added Every Month',
      horizonYears: 'Time Frame',
      yearsUnit: 'Years',
      projectedBalance: 'Estimated Total',
      interestEarned: 'Estimated Growth',
      applyNow: 'Open Personal Account',
      comparisonTitle: 'BlueOcean vs. Regular Banks',
      featureCol: 'What You Get',
      blueOceanCol: 'BlueOcean Account',
      traditionalCol: 'Regular Bank',
    },
    business: {
      kicker: 'Business Accounts · Global Payments Made Easy',
      title: 'Pay teams, receive client payments, and manage company cash worldwide.',
      subtitle:
        'Get paid in 38+ currencies like a local, send fast international transfers to suppliers, and issue virtual credit cards for company software and travel.',
      operatingTitle: 'Global Business Account',
      operatingDesc: 'Receive payments from international clients, send low-cost transfers worldwide, set team permissions, and connect your accounting app.',
      treasuryTitle: 'Business Savings Reserve',
      treasuryDesc: 'Keep spare company cash earning steady interest while staying ready to withdraw anytime for payroll, invoices, or supplier payouts.',
      fxTitle: 'Send & Receive in 38+ Currencies',
      fxDesc: 'Hold, convert, and send USD, EUR, GBP, CHF, SGD, BRL, and 32 more currencies at fair, upfront exchange rates with no hidden markups.',
      calcTitle: 'Business Savings Estimator',
      calcSubtitle: 'Estimate how much extra interest your company’s spare cash could earn each year.',
      cashReserves: 'Company Cash Balance',
      annualTreasuryYield: 'Estimated Yearly Growth',
      monthlyYield: 'Estimated Monthly Payout',
      fdicSweepCap: 'Monthly Account Fee',
      scheduleTreasury: 'Open a Business Account',
    },
    cards: {
      kicker: 'Virtual Credit Cards · Accepted Worldwide',
      title: 'Instant virtual credit cards built for online shopping and U.S. subscriptions.',
      subtitle:
        'Buy and activate a USD virtual credit card straight from your Customer Portal—accepted on Netflix, Amazon Prime, ChatGPT, and 20+ U.S. services with instant freeze controls.',
      selectFinish: 'Choose Your Virtual Credit Card',
      titaniumName: 'Standard Virtual Credit',
      oceanicName: 'Oceanic Virtual Credit',
      crimsonName: 'Crimson Virtual Credit',
      calcTitle: 'Spending Estimator',
      calcSubtitle: 'Plan your monthly online spending and virtual card limits.',
      travelSpend: 'Monthly Travel & Hotels',
      diningSpend: 'Monthly Dining & Delivery',
      generalSpend: 'Monthly Subscriptions & Shopping',
      estimatedAnnualRewards: 'Estimated Yearly Spending',
      requestCard: 'Get Virtual Credit Card',
      annualFee: 'One-Time Issuance Fee',
      aprRange: 'Card Type',
      metalSpec: 'Format',
    },
    loans: {
      kicker: 'Home & Personal Loans · Clear Terms',
      title: 'Simple loans for homes, refinancing, and big plans.',
      subtitle:
        'Clear fixed rates, upfront monthly payment estimates with no surprises, and a straightforward online application.',
      calcTitle: 'Monthly Payment Calculator',
      calcSubtitle: 'Adjust home price, down payment, rate, and loan length to see your estimated monthly payment.',
      propertyPrice: 'Home Price',
      downPayment: 'Down Payment',
      interestRate: 'Interest Rate (APR)',
      loanTerm: 'Loan Length',
      monthlyPayment: 'Estimated Monthly Payment',
      loanAmount: 'Amount Borrowed',
      totalInterest: 'Total Interest',
      principalShare: 'Loan Amount',
      interestShare: 'Interest',
      lockRate: 'Check My Rate',
    },
    wealth: {
      kicker: 'Wealth & Investing · Personal Guidance',
      title: 'Steady, long-term investing with real human advice.',
      subtitle:
        'Work with a dedicated advisor to build a diversified global portfolio, plan for retirement or family goals, and pay one clear, simple fee.',
      allocatorTitle: 'Explore Investment Plans',
      allocatorSubtitle: 'See how we balance global stocks, bonds, and cash based on how much risk feels right for you.',
      conservative: 'Steady & Careful',
      balanced: 'Balanced Mix',
      growth: 'Long-Term Growth',
      expectedRange: 'Typical Yearly Range',
      bookAdvisor: 'Talk to an Advisor',
    },
    security: {
      kicker: 'Security & Account Safety',
      title: 'Your account and every virtual credit card, protected around the clock.',
      subtitle:
        '256-bit encryption, biometric sign-in, one-tap virtual credit card freeze, instant spending alerts, and 24/7 live human support in 6 languages.',
      checklistTitle: 'Check Your Account Protection',
      checklistSubtitle: 'Toggle each safety feature to see how BlueOcean keeps your account secure.',
      postureScore: 'Your Protection Level',
      reportFraud: 'Contact 24/7 Safety Team',
    },
    portal: {
      loginTitle: 'BlueOcean Customer Portal',
      loginSubtitle: 'Sign in to your account or try the interactive demo right away.',
      emailLabel: 'Email Address',
      passwordLabel: 'Password',
      signInCta: 'Sign In Securely',
      demoQuickCta: 'Try Interactive Demo',
      demoNotice: 'Any transfers, virtual credit cards, subscriptions, and savings vaults you test stay saved in your browser.',
      welcomeBack: 'Welcome back,',
      totalLiquidity: 'Total Available Balance',
      signOut: 'Sign Out',
      tabOverview: 'Overview',
      tabTransfers: 'Send & Receive',
      tabCards: 'Virtual Cards',
      tabVaults: 'Savings Vaults',
      tabLedger: 'Activity',
      tabSettings: 'Settings',
      fromAccount: 'From Account',
      toDestination: 'Send To',
      amount: 'Amount (USD)',
      memo: 'Note / Reference',
      submitTransfer: 'Send Money Now',
      internalTransfer: 'Between My Accounts',
      externalWire: 'International / Bank Transfer',
      billPay: 'Pay a Bill',
      freezeCard: 'Freeze Card',
      cardFrozen: 'Frozen',
      cardActive: 'Active',
      contactless: 'Apple Pay & Google Pay',
      international: 'International & U.S. Billing',
      dailyLimit: 'Daily Spending Limit',
      revealNumber: 'Show Card Number',
      hideNumber: 'Hide Card Number',
      fundVault: 'Add $500 to Vault',
      createVault: 'Create New Vault',
      vaultName: 'Goal Name',
      targetAmount: 'Savings Goal (USD)',
      searchPlaceholder: 'Search payments, names, or notes...',
      allAccounts: 'All Accounts',
      allTypes: 'All Activity',
      credits: 'Money In',
      debits: 'Money Out',
      exportCsv: 'Download CSV',
      emptyLedger: 'No activity matches your search.',
      resetFilters: 'Clear Filters',
      resetDemo: 'Reset Demo Accounts',
      routingCopied: 'Account details copied to clipboard.',
      transferSuccess: 'Transfer sent and added to your activity.',
      insufficientFunds: 'Not enough available balance in this account.',
      vaultFunded: 'Added $500 to your savings vault.',
    },
    modal: {
      titleAccount: 'Open a BlueOcean Account',
      titleAdvisor: 'Book a Friendly Consultation',
      fullName: 'Full Name',
      email: 'Email Address',
      product: 'What would you like to open?',
      estimatedAmount: 'Starting Deposit (Optional, USD)',
      submit: 'Continue',
      cancel: 'Cancel',
      successTitle: 'You’re All Set',
      successBody: 'We’ve received your request and sent simple next steps straight to your email.',
      referenceLabel: 'Reference Number',
      done: 'Back to BlueOcean',
    },
    footer: {
      tagline: 'Simple international online banking to send, receive, and spend globally with instant virtual credit cards across 42+ countries.',
      fdicNotice:
        'BlueOcean International Bank provides online multi-currency accounts and virtual credit cards across 42+ countries with bank-grade encryption and 24/7 customer support.',
      rights: '© 2026 BlueOcean International Bank. All rights reserved.',
      bankingCol: 'Accounts & Loans',
      institutionalCol: 'Company',
      supportCol: 'Help & Support',
    },
  },

  de: {
    nav: {
      home: 'Startseite',
      personal: 'Privatkunden',
      business: 'Geschäftskunden',
      cards: 'Karten',
      loans: 'Kredite',
      wealth: 'Private Banking',
      security: 'Sicherheit & Schutz',
      about: 'Über uns',
      contact: 'Kontakt',
      more: 'Mehr',
      portal: 'Kundenportal',
      dockPortal: 'Portal',
      openAccount: 'Konto eröffnen',
      divisionsHeading: 'Geschäftsbereiche',
      languageLabel: 'Sprache',
      themeLabel: 'Darstellung',
      daylight: 'Titan Hell',
      deepOcean: 'Tiefsee Dunkel',
      menu: 'Menü',
      close: 'Schließen',
    },
    splash: {
      subtitle: 'BlueOcean Bank · Internationales Online-Banking',
      skip: 'Überspringen',
    },
    hero: {
      kicker: 'BlueOcean Bank · Geld weltweit senden & empfangen · 42+ Länder',
      title: 'Weltweit Geld senden, empfangen und sparen – ganz einfach.',
      description:
        'Ein übersichtliches Online-Konto für internationale Überweisungen in 38+ Währungen, weltweit gebührenfreies Bezahlen und 4,85 % Zinsen auf Ihre Ersparnisse.',
      primaryCta: 'Konto eröffnen',
      secondaryCta: 'Zum Kundenportal',
      stat1Label: 'Tagesgeldzins',
      stat1Value: '4,85% APY',
      stat2Label: 'Geschäftszins',
      stat2Value: '5,10% APY',
      stat3Label: 'Einlagenschutz',
      stat3Value: '5,0 Mio. $',
      stat4Label: 'Kunden weltweit',
      stat4Value: '243K+',
    },
    home: {
      divisionsTitle: 'Alles zum Senden, Empfangen und Sparen – weltweit.',
      divisionsSubtitle:
        'Klare Zinsen, null monatliche Kontogebühren und schnelle internationale Überweisungen in Europa, UK, Amerika und Asien.',
      explore: 'Mehr erfahren',
      architecturalTitle: 'Geld in Minuten statt Tagen ins Ausland senden.',
      architecturalBody:
        'Schluss mit hohen Auslandsgebühren und undurchsichtigen Wechselkursen. Senden Sie Geld an Familie oder Partner, empfangen Sie Zahlungen aus dem Ausland und genießen Sie bis zu 5 Mio. $ Schutz.',
      architecturalCta: 'So schützen wir Ihr Geld',
      quickYieldTitle: 'Sehen Sie, wie viel mehr Ihre Ersparnisse bringen.',
      quickYieldSub: 'Vergleichen Sie 4,85 % Zinsen bei BlueOcean mit dem Durchschnitt klassischer Banken von 0,45 %.',
      depositLabel: 'Ihr Sparbetrag',
      projectedAnnual: 'Zinsen pro Jahr bei BlueOcean',
      vsNationalAvg: 'Mehr Ertrag als bei normalen Banken',
      testimonialsTitle: 'Vertrauen von Menschen und Unternehmen weltweit.',
      testimonialsSub: 'Echte Erfahrungen beim Geld senden, international bezahlt werden und Sparen.',
      ctaTitle: 'Bereit für einfacheres internationales Banking?',
      ctaDesc: 'Eröffnen Sie Ihr BlueOcean-Konto in unter 4 Minuten – mit sofortiger virtueller Karte und ohne Mindesteinlage.',
      ctaPrimary: 'Jetzt Konto eröffnen',
      ctaSecondary: 'Kundenportal testen',
    },
    personal: {
      kicker: 'Privatkunden · Mehrwährungskonten',
      title: 'Giro- und Sparkonten ohne Grenzen und versteckte Gebühren.',
      subtitle:
        'Sichern Sie sich 4,85 % APY auf Ersparnisse, nutzen Sie über 55.000 gebührenfreie Geldautomaten weltweit und strukturieren Sie Sparziele in eigenen Tresoren.',
      checkingTitle: 'Premier Girokonto Global',
      checkingDesc: '0,50 % APY auf laufende Guthaben, keine Überziehungsgebühren und sofortige virtuelle Titan-Debitkarte.',
      savingsTitle: 'Oceanic Hochzins-Sparen',
      savingsDesc: '4,85 % APY mit täglicher Verzinsung, ohne Mindestbetrag und mit sofortigem Übertrag aufs Girokonto.',
      cdTitle: 'Festgeld-Zertifikate',
      cdDesc: 'Bis zu 5,05 % APY fest für 6, 12 oder 24 Monate mit voller Planungssicherheit.',
      calcTitle: 'Zinseszins-Rechner',
      calcSubtitle: 'Simulieren Sie Ihr Vermögenswachstum bei 4,85 % APY und monatlichen Sparraten.',
      initialDeposit: 'Ersteinlage',
      monthlyContribution: 'Monatliche Sparrate',
      horizonYears: 'Anlagehorizont',
      yearsUnit: 'Jahre',
      projectedBalance: 'Prognostiziertes Guthaben',
      interestEarned: 'Erzielte Zinsen gesamt',
      applyNow: 'Privatkonto beantragen',
      comparisonTitle: 'Transparente Konditionen im Vergleich',
      featureCol: 'Leistungsmerkmal',
      blueOceanCol: 'BlueOcean Premier',
      traditionalCol: 'Klassische Großbank',
    },
    business: {
      kicker: 'Geschäftskunden · Internationale Zahlungen',
      title: 'Teams bezahlen, Kundenrechnungen empfangen und weltweit wachsen.',
      subtitle:
        'Empfangen Sie Zahlungen in 38+ Währungen, senden Sie schnelle internationale Überweisungen und nutzen Sie virtuelle Kreditkarten für Ihr Team.',
      operatingTitle: 'Globales Geschäftskonto',
      operatingDesc: 'Unkomplizierte lokale & internationale Transfers, Team-Freigaben und direkte Buchhaltungsintegration.',
      treasuryTitle: 'Flexibles Geschäfts-Sparen',
      treasuryDesc: 'Legen Sie freie Rücklagen flexibel an und greifen Sie jederzeit für Rechnungen oder Gehälter darauf zu.',
      fxTitle: '38+ Währungen direkt verwalten',
      fxDesc: 'Halten und überweisen Sie USD, EUR, GBP, CHF, SGD und 33 weitere Währungen zu fairen Wechselkursen.',
      calcTitle: 'Unternehmens-Sparrechner',
      calcSubtitle: 'Schätzen Sie den möglichen Jahresertrag Ihrer geschäftlichen Rücklagen.',
      cashReserves: 'Geschäftsguthaben',
      annualTreasuryYield: 'Geschätzter Jahresertrag',
      monthlyYield: 'Geschätzte monatliche Ausschüttung',
      fdicSweepCap: 'Monatliche Gebühr',
      scheduleTreasury: 'Geschäftskonto eröffnen',
    },
    cards: {
      kicker: 'Virtuelle Kreditkarten · Weltweit akzeptiert',
      title: 'Sofortige virtuelle Kreditkarten für Online-Shopping & US-Abos.',
      subtitle:
        'Aktivieren Sie Ihre virtuelle USD-Kreditkarte direkt im Kundenportal – ideal für Netflix, Amazon Prime, ChatGPT und über 20 US-Dienste.',
      selectFinish: 'Virtuelle Karte wählen',
      titaniumName: 'Standard Virtuelle Kreditkarte',
      oceanicName: 'Oceanic Virtuelle Kreditkarte',
      crimsonName: 'Crimson Virtuelle Kreditkarte',
      calcTitle: 'Ausgaben-Planer',
      calcSubtitle: 'Planen Sie monatliche Online-Ausgaben und Kartenlimits.',
      travelSpend: 'Reisen & Hotels monatlich',
      diningSpend: 'Gastronomie monatlich',
      generalSpend: 'Abos & Online-Shopping',
      estimatedAnnualRewards: 'Geschätzte Jahresausgaben',
      requestCard: 'Virtuelle Kreditkarte bestellen',
      annualFee: 'Einmalige Gebühr',
      aprRange: 'Kartentyp',
      metalSpec: 'Format',
    },
    loans: {
      kicker: 'Kredite & Immobilienfinanzierung',
      title: 'Klare Finanzierungskonditionen für Zuhause und persönliche Pläne.',
      subtitle:
        'Faire Festzinsen, transparente Monatsraten ohne versteckte Gebühren und ein einfacher Online-Antrag.',
      calcTitle: 'Monatsraten-Rechner',
      calcSubtitle: 'Berechnen Sie monatliche Raten sowie Tilgungs- und Zinsanteile in Echtzeit.',
      propertyPrice: 'Immobilienpreis',
      downPayment: 'Eigenkapital',
      interestRate: 'Zinssatz (APR)',
      loanTerm: 'Laufzeit',
      monthlyPayment: 'Geschätzte Monatsrate',
      loanAmount: 'Darlehensbetrag',
      totalInterest: 'Zinskosten gesamt',
      principalShare: 'Tilgung',
      interestShare: 'Zinsen',
      lockRate: 'Zinsbindung anfragen',
    },
    wealth: {
      kicker: 'Private Banking & Vermögensberatung',
      title: 'Langfristige Geldanlage mit persönlicher Beratung.',
      subtitle:
        'Bauen Sie gemeinsam mit persönlichen Beratern ein breit gestreutes Portfolio für Ruhestand und Familienziele auf.',
      allocatorTitle: 'Portfolio-Planer',
      allocatorSubtitle: 'Sehen Sie, wie Aktien, Anleihen und Guthaben je nach Risikoprofil verteilt werden.',
      conservative: 'Vorsichtig & Stabil',
      balanced: 'Ausgewogen',
      growth: 'Langfristiges Wachstum',
      expectedRange: 'Typische Jahresbandbreite',
      bookAdvisor: 'Gespräch vereinbaren',
    },
    security: {
      kicker: 'Sicherheit & Kontoschutz',
      title: 'Ihr Konto und Ihre virtuellen Kreditkarten rund um die Uhr geschützt.',
      subtitle:
        '256-Bit-Verschlüsselung, biometrischer Login, sofortige Kartensperre, Echtzeit-Benachrichtigungen und 24/7-Support.',
      checklistTitle: 'Interaktiver Sicherheits-Check',
      checklistSubtitle: 'Aktivieren Sie Schutzebenen, um Ihren persönlichen Sicherheitsstatus zu prüfen.',
      postureScore: 'Aktive Schutzabdeckung',
      reportFraud: '24/7-Sicherheitsdesk kontaktieren',
    },
    portal: {
      loginTitle: 'BlueOcean Kundenportal',
      loginSubtitle: 'Melden Sie sich an oder starten Sie direkt den vorkonfigurierten Live-Demo-Bereich.',
      emailLabel: 'Kunden-E-Mail',
      passwordLabel: 'Zugangscode',
      signInCta: 'Sicher anmelden',
      demoQuickCta: 'Ein-Klick-Demo-Zugang',
      demoNotice: 'Alle Überweisungen, virtuellen Kreditkarten, Abos und Tresore werden lokal im Browser gespeichert.',
      welcomeBack: 'Guten Tag,',
      totalLiquidity: 'Verfügbares Gesamtguthaben',
      signOut: 'Abmelden',
      tabOverview: 'Übersicht',
      tabTransfers: 'Überweisungen',
      tabCards: 'Virtuelle Karten',
      tabVaults: 'Spartresore',
      tabLedger: 'Umsätze',
      tabSettings: 'Einstellungen',
      fromAccount: 'Quellkonto',
      toDestination: 'Empfänger',
      amount: 'Betrag (USD)',
      memo: 'Verwendungszweck',
      submitTransfer: 'Transaktion ausführen',
      internalTransfer: 'Umbuchung',
      externalWire: 'Auslands- / Wire-Transfer',
      billPay: 'Rechnung zahlen',
      freezeCard: 'Karte sperren',
      cardFrozen: 'Gesperrt',
      cardActive: 'Aktiv',
      contactless: 'Kontaktlos & Wallet',
      international: 'Auslandseinsatz',
      dailyLimit: 'Tageslimit',
      revealNumber: 'Daten anzeigen',
      hideNumber: 'Daten verbergen',
      fundVault: '+500 $ vom Girokonto',
      createVault: 'Neuen Tresor anlegen',
      vaultName: 'Tresor-Name',
      targetAmount: 'Zielbetrag (USD)',
      searchPlaceholder: 'Händler, Kategorie oder Referenz suchen...',
      allAccounts: 'Alle Konten',
      allTypes: 'Alle Umsätze',
      credits: 'Eingänge',
      debits: 'Ausgänge',
      exportCsv: 'CSV exportieren',
      emptyLedger: 'Keine Transaktionen für die aktuelle Auswahl gefunden.',
      resetFilters: 'Filter zurücksetzen',
      resetDemo: 'Demo-Konten zurücksetzen',
      routingCopied: 'ABA-Bankleitzahl in die Zwischenablage kopiert.',
      transferSuccess: 'Transaktion ausgeführt und im Journal verbucht.',
      insufficientFunds: 'Nicht genügend verfügbares Guthaben auf dem Quellkonto.',
      vaultFunded: 'Spartresor erfolgreich vom Girokonto aufgeladen.',
    },
    modal: {
      titleAccount: 'BlueOcean-Konto eröffnen',
      titleAdvisor: 'Persönliche Beratung vereinbaren',
      fullName: 'Vollständiger Name',
      email: 'E-Mail-Adresse',
      product: 'Gewünschtes Produkt',
      estimatedAmount: 'Geschätzte Einlage / Volumen (USD)',
      submit: 'Antrag absenden',
      cancel: 'Abbrechen',
      successTitle: 'Antrag erfolgreich registriert',
      successBody: 'Unser internationales Onboarding-Team hat Ihre Konditionen reserviert und eine Bestätigung per E-Mail gesendet.',
      referenceLabel: 'Bestätigungsreferenz',
      done: 'Zurück zu BlueOcean',
    },
    footer: {
      tagline: 'Einfaches internationales Online-Banking mit sofortigen virtuellen Kreditkarten in über 42 Ländern.',
      fdicNotice:
        'BlueOcean International Bank bietet Mehrwährungskonten und virtuelle Kreditkarten in über 42 Ländern mit starker Verschlüsselung und 24/7-Kundenservice.',
      rights: '© 2026 BlueOcean International Bank. Alle Rechte vorbehalten.',
      bankingCol: 'Banking',
      institutionalCol: 'Unternehmen',
      supportCol: 'Kundenservice',
    },
  },

  ru: {
    nav: {
      home: 'Главная',
      personal: 'Частным',
      business: 'Бизнесу',
      cards: 'Карты',
      loans: 'Кредиты',
      wealth: 'Капитал',
      security: 'Безопасность',
      about: 'О банке',
      contact: 'Контакты',
      more: 'Ещё',
      portal: 'Портал клиента',
      dockPortal: 'Портал',
      openAccount: 'Открыть счёт',
      divisionsHeading: 'Подразделения банка',
      languageLabel: 'Язык',
      themeLabel: 'Оформление',
      daylight: 'Светлый Титан',
      deepOcean: 'Глубокий Океан',
      menu: 'Меню',
      close: 'Закрыть',
    },
    splash: {
      subtitle: 'BlueOcean Bank · Международный онлайн-банк',
      skip: 'Пропустить',
    },
    hero: {
      kicker: 'BlueOcean Bank · Отправляйте и получайте деньги в 42+ странах',
      title: 'Отправляйте, получайте и копите деньги по всему миру — просто.',
      description:
        'Один удобный онлайн-счёт для быстрых международных переводов в 38+ валютах, оплат без скрытых комиссий и дохода 4.85% на сбережения.',
      primaryCta: 'Открыть счёт',
      secondaryCta: 'Войти в портал',
      stat1Label: 'Доход по вкладам',
      stat1Value: '4.85% APY',
      stat2Label: 'Доход для бизнеса',
      stat2Value: '5.10% APY',
      stat3Label: 'Защита вкладов',
      stat3Value: '$5.0M',
      stat4Label: 'Клиентов по миру',
      stat4Value: '243K+',
    },
    home: {
      divisionsTitle: 'Всё для международных переводов, карт и сбережений.',
      divisionsSubtitle:
        'Понятные условия, ноль ежемесячных комиссий и быстрые переводы в Европу, Великобританию, Америку и Азию.',
      explore: 'Подробнее',
      architecturalTitle: 'Отправляйте и получайте деньги за границу за минуты.',
      architecturalBody:
        'Забудьте о дорогих банковских переводах и невыгодном курсе. Отправляйте деньги близким, принимайте оплату из других стран и храните средства с защитой до $5 000 000.',
      architecturalCta: 'Как мы защищаем деньги',
      quickYieldTitle: 'Посмотрите, сколько принесут ваши сбережения.',
      quickYieldSub: 'Сравните ставку BlueOcean 4.85% со средней ставкой обычных банков (0.45%).',
      depositLabel: 'Сумма сбережений',
      projectedAnnual: 'Доход за год в BlueOcean',
      vsNationalAvg: 'Больше, чем в обычном банке',
      testimonialsTitle: 'Нам доверяют люди и компании по всему миру.',
      testimonialsSub: 'Реальные истории клиентов, которые переводят деньги за границу и копят с BlueOcean.',
      ctaTitle: 'Готовы к простому международному банку?',
      ctaDesc: 'Откройте счёт BlueOcean за 4 минуты — с мгновенной виртуальной картой и без минимального взноса.',
      ctaPrimary: 'Открыть счёт сегодня',
      ctaSecondary: 'Открыть демо-портал',
    },
    personal: {
      kicker: 'Частным клиентам · Мультивалютные счета',
      title: 'Расчётные и накопительные счета без скрытых комиссий.',
      subtitle:
        'До 4.85% APY по сбережениям, более 55 000 банкоматов без комиссии, раннее зачисление зарплаты и целевые сейфы.',
      checkingTitle: 'Premier Checking',
      checkingDesc: '0.50% APY на остаток, ноль штрафов за овердрафт, возмещение комиссий банкоматов и виртуальная титановая карта.',
      savingsTitle: 'Oceanic High-Yield Savings',
      savingsDesc: '4.85% APY с ежедневным начислением процентов, без минимального остатка и мгновенными переводами.',
      cdTitle: 'Срочные депозиты (CD)',
      cdDesc: 'Фиксированная доходность до 5.05% APY на 6, 12 или 24 месяца с гибким продлением.',
      calcTitle: 'Калькулятор сложного процента',
      calcSubtitle: 'Смоделируйте рост сбережений под 4.85% APY с ежемесячным пополнением.',
      initialDeposit: 'Начальный вклад',
      monthlyContribution: 'Ежемесячное пополнение',
      horizonYears: 'Срок накопления',
      yearsUnit: 'лет',
      projectedBalance: 'Прогноз баланса',
      interestEarned: 'Начисленные проценты',
      applyNow: 'Открыть личный счёт',
      comparisonTitle: 'Сравнение условий с традиционными банками',
      featureCol: 'Параметр счёта',
      blueOceanCol: 'BlueOcean Premier',
      traditionalCol: 'Крупный традиционный банк',
    },
    business: {
      kicker: 'Бизнес · Международные платежи',
      title: 'Оплачивайте работу команд и принимайте платежи со всего мира.',
      subtitle:
        'Принимайте оплату в 38+ валютах, отправляйте быстрые международные переводы и выпускайте виртуальные кредитные карты для онлайн-сервисов.',
      operatingTitle: 'Глобальный бизнес-счёт',
      operatingDesc: 'Быстрые переводы поставщикам, контроль доступов команды и простая интеграция с учётом.',
      treasuryTitle: 'Гибкий бизнес-резерв',
      treasuryDesc: 'Храните свободные средства с постоянным доступом для выплат, счетов и повседневных расходов.',
      fxTitle: '38+ валют по честному курсу',
      fxDesc: 'Храните и переводите USD, EUR, GBP, CHF, SGD и ещё 33 валюты без скрытых наценок.',
      calcTitle: 'Калькулятор бизнес-накоплений',
      calcSubtitle: 'Оцените ориентировочный рост резервов компании за год.',
      cashReserves: 'Остаток на счёте',
      annualTreasuryYield: 'Ориентировочный доход за год',
      monthlyYield: 'Ежемесячное начисление',
      fdicSweepCap: 'Ежемесячная плата',
      scheduleTreasury: 'Открыть бизнес-счёт',
    },
    cards: {
      kicker: 'Виртуальные кредитные карты · Весь мир',
      title: 'Мгновенные виртуальные кредитные карты для онлайн-оплат и подписок США.',
      subtitle:
        'Выпустите виртуальную USD-кредитную карту в портале клиента — подходит для Netflix, Amazon Prime, ChatGPT и 20+ сервисов США.',
      selectFinish: 'Выберите виртуальную карту',
      titaniumName: 'Standard Virtual Credit',
      oceanicName: 'Oceanic Virtual Credit',
      crimsonName: 'Crimson Virtual Credit',
      calcTitle: 'Калькулятор расходов',
      calcSubtitle: 'Спланируйте ежемесячные онлайн-расходы и лимиты карты.',
      travelSpend: 'Путешествия и отели в месяц',
      diningSpend: 'Рестораны в месяц',
      generalSpend: 'Подписки и покупки в месяц',
      estimatedAnnualRewards: 'Годовой объём',
      requestCard: 'Оформить виртуальную карту',
      annualFee: 'Разовый выпуск',
      aprRange: 'Тип карты',
      metalSpec: 'Формат',
    },
    loans: {
      kicker: 'Кредиты и ипотека · Понятные условия',
      title: 'Прозрачные условия для покупки жилья и личных планов.',
      subtitle:
        'Понятные фиксированные ставки, расчёт ежемесячного платежа заранее и удобная онлайн-заявка.',
      calcTitle: 'Калькулятор платежей',
      calcSubtitle: 'Настройте сумму, взнос, ставку и срок для расчёта ежемесячного платежа.',
      propertyPrice: 'Стоимость недвижимости',
      downPayment: 'Первоначальный взнос',
      interestRate: 'Процентная ставка (APR)',
      loanTerm: 'Срок кредита',
      monthlyPayment: 'Ежемесячный платёж',
      loanAmount: 'Сумма кредита',
      totalInterest: 'Переплата за весь срок',
      principalShare: 'Основной долг',
      interestShare: 'Проценты',
      lockRate: 'Проверить ставку',
    },
    wealth: {
      kicker: 'Капитал и инвестиции · Личная поддержка',
      title: 'Спокойное долгосрочное инвестирование с понятными советами.',
      subtitle:
        'Работайте с персональным советником, чтобы собрать сбалансированный портфель под ваши личные и семейные цели.',
      allocatorTitle: 'Модель распределения активов',
      allocatorSubtitle: 'Посмотрите баланс акций, облигаций и резерва под ваш уровень риска.',
      conservative: 'Осторожный',
      balanced: 'Сбалансированный',
      growth: 'Долгосрочный рост',
      expectedRange: 'Типичный годовой диапазон',
      bookAdvisor: 'Поговорить с советником',
    },
    security: {
      kicker: 'Безопасность и защита счёта',
      title: 'Ваш счёт и виртуальные кредитные карты под круглосуточной защитой.',
      subtitle:
        'Шифрование 256-бит, биометрический вход, мгновенная заморозка карты, уведомления в реальном времени и поддержка 24/7.',
      checklistTitle: 'Интерактивная проверка защиты счёта',
      checklistSubtitle: 'Переключайте механизмы защиты BlueOcean для оценки уровня безопасности.',
      postureScore: 'Активный уровень защиты',
      reportFraud: 'Связаться с поддержкой 24/7',
    },
    portal: {
      loginTitle: 'Портал клиента BlueOcean',
      loginSubtitle: 'Войдите по данным клиента или откройте готовый интерактивный демо-кабинет.',
      emailLabel: 'Электронная почта',
      passwordLabel: 'Пароль',
      signInCta: 'Безопасный вход',
      demoQuickCta: 'Мгновенный демо-вход',
      demoNotice: 'Все переводы, виртуальные кредитные карты, подписки и сейфы сохраняются локально в браузере.',
      welcomeBack: 'Добрый день,',
      totalLiquidity: 'Доступный баланс',
      signOut: 'Выйти',
      tabOverview: 'Обзор',
      tabTransfers: 'Переводы',
      tabCards: 'Виртуальные карты',
      tabVaults: 'Сейфы',
      tabLedger: 'История',
      tabSettings: 'Настройки',
      fromAccount: 'Счёт списания',
      toDestination: 'Назначение',
      amount: 'Сумма (USD)',
      memo: 'Назначение платежа',
      submitTransfer: 'Выполнить операцию',
      internalTransfer: 'Между счетами',
      externalWire: 'Международный перевод',
      billPay: 'Оплата счетов',
      freezeCard: 'Заморозить карту',
      cardFrozen: 'Заморожена',
      cardActive: 'Активна',
      contactless: 'Apple Pay и Google Pay',
      international: 'Международные и США оплаты',
      dailyLimit: 'Дневной лимит',
      revealNumber: 'Показать реквизиты',
      hideNumber: 'Скрыть реквизиты',
      fundVault: 'Пополнить на $500',
      createVault: 'Создать новый сейф',
      vaultName: 'Название цели',
      targetAmount: 'Целевая сумма (USD)',
      searchPlaceholder: 'Поиск по контрагенту, категории или коду...',
      allAccounts: 'Все счета',
      allTypes: 'Все операции',
      credits: 'Поступления',
      debits: 'Списания',
      exportCsv: 'Экспорт CSV',
      emptyLedger: 'По текущим фильтрам операций не найдено.',
      resetFilters: 'Сбросить фильтры',
      resetDemo: 'Сбросить демо-данные',
      routingCopied: 'Реквизиты скопированы.',
      transferSuccess: 'Операция выполнена и отражена в истории.',
      insufficientFunds: 'Недостаточно средств на выбранном счёте.',
      vaultFunded: 'Сейф успешно пополнен на $500.',
    },
    modal: {
      titleAccount: 'Открытие счёта BlueOcean',
      titleAdvisor: 'Запись на консультацию',
      fullName: 'Полное имя',
      email: 'Электронная почта',
      product: 'Интересующий продукт',
      estimatedAmount: 'Ориентировочная сумма (USD)',
      submit: 'Отправить заявку',
      cancel: 'Отмена',
      successTitle: 'Заявка зарегистрирована',
      successBody: 'Мы получили вашу заявку и отправили дальнейшие шаги на почту.',
      referenceLabel: 'Номер подтверждения',
      done: 'Вернуться в BlueOcean',
    },
    footer: {
      tagline: 'Простой международный онлайн-банк с мгновенными виртуальными кредитными картами в 42+ странах.',
      fdicNotice:
        'BlueOcean International Bank предоставляет мультивалютные онлайн-счета и виртуальные кредитные карты в 42+ странах с банковским шифрованием и поддержкой 24/7.',
      rights: '© 2026 BlueOcean International Bank. Все права защищены.',
      bankingCol: 'Банкинг',
      institutionalCol: 'Компания',
      supportCol: 'Поддержка',
    },
  },

  nl: {
    nav: {
      home: 'Home',
      personal: 'Particulier',
      business: 'Zakelijk',
      cards: 'Kaarten',
      loans: 'Leningen',
      wealth: 'Vermogen',
      security: 'Veiligheid & Bescherming',
      about: 'Over ons',
      contact: 'Contact',
      more: 'Meer',
      portal: 'Klantportaal',
      dockPortal: 'Portaal',
      openAccount: 'Rekening openen',
      divisionsHeading: 'Bankdivisies',
      languageLabel: 'Taal',
      themeLabel: 'Weergave',
      daylight: 'Titanium Licht',
      deepOcean: 'Diepe Oceaan',
      menu: 'Menu',
      close: 'Sluiten',
    },
    splash: {
      subtitle: 'BlueOcean Bank · Internationaal Online Bankieren',
      skip: 'Overslaan',
    },
    hero: {
      kicker: 'BlueOcean Bank · Geld wereldwijd versturen & ontvangen · 42+ Landen',
      title: 'Wereldwijd geld versturen, ontvangen en sparen—eenvoudig geregeld.',
      description:
        'Eén heldere online rekening om snel geld over de grens te sturen en ontvangen in 38+ valuta’s, wereldwijd zonder extra kosten te betalen en 4,85% rente te verdienen.',
      primaryCta: 'Rekening openen',
      secondaryCta: 'Naar klantportaal',
      stat1Label: 'Spaarrente',
      stat1Value: '4,85% APY',
      stat2Label: 'Zakelijk sparen',
      stat2Value: '5,10% APY',
      stat3Label: 'Depositobescherming',
      stat3Value: '$5,0M',
      stat4Label: 'Klanten wereldwijd',
      stat4Value: '243K+',
    },
    home: {
      divisionsTitle: 'Alles om wereldwijd te betalen, versturen en sparen.',
      divisionsSubtitle:
        'Duidelijke tarieven, nul maandelijkse kosten en snelle internationale overboekingen in Europa, het VK, Amerika en Azië.',
      explore: 'Meer bekijken',
      architecturalTitle: 'Stuur en ontvang geld naar het buitenland in minuten.',
      architecturalBody:
        'Geen hoge bankkosten of onduidelijke wisselkoersen meer. Stuur geld naar familie, ontvang betalingen uit het buitenland en houd uw spaargeld beschermd tot $5.000.000.',
      architecturalCta: 'Hoe wij uw geld beschermen',
      quickYieldTitle: 'Zie hoeveel extra uw spaargeld kan opleveren.',
      quickYieldSub: 'Vergelijk 4,85% rente bij BlueOcean met het gemiddelde van gewone banken (0,45%).',
      depositLabel: 'Uw spaarbedrag',
      projectedAnnual: 'Rente per jaar bij BlueOcean',
      vsNationalAvg: 'Extra t.o.v. gewone banken',
      testimonialsTitle: 'Vertrouwd door mensen en bedrijven wereldwijd.',
      testimonialsSub: 'Echte verhalen van klanten die geld over de grens sturen, internationaal betaald worden en sparen.',
      ctaTitle: 'Klaar voor makkelijker internationaal bankieren?',
      ctaDesc: 'Open binnen 4 minuten uw BlueOcean-rekening met directe virtuele kaart en zonder minimale inleg.',
      ctaPrimary: 'Vandaag rekening openen',
      ctaSecondary: 'Klantportaal verkennen',
    },
    personal: {
      kicker: 'Particulier Online Bankieren · Multivaluta',
      title: 'Betaal- en spaarrekeningen zonder verborgen kosten.',
      subtitle:
        'Ontvang 4,85% APY op spaargeld, gebruik ruim 55.000 kosteloze geldautomaten en verdeel doelen over slimme spaarkluizen.',
      checkingTitle: 'Premier Betaalrekening',
      checkingDesc: '0,50% APY op dagelijks saldo, geen roodstandboetes en directe virtuele titanium debetkaart.',
      savingsTitle: 'Oceanic Hoogrentend Sparen',
      savingsDesc: '4,85% APY dagelijks samengesteld zonder minimumsaldo en met directe overboeking.',
      cdTitle: 'Termijndeposito’s (CD)',
      cdDesc: 'Zet tot 5,05% APY vast voor 6, 12 of 24 maanden met volledige transparantie.',
      calcTitle: 'Rente-op-rente Simulator',
      calcSubtitle: 'Bereken uw vermogensgroei bij 4,85% APY en maandelijkse inleg.',
      initialDeposit: 'Eerste inleg',
      monthlyContribution: 'Maandelijkse inleg',
      horizonYears: 'Looptijd',
      yearsUnit: 'jaar',
      projectedBalance: 'Verwacht eindsaldo',
      interestEarned: 'Totaal verdiende rente',
      applyNow: 'Particuliere rekening openen',
      comparisonTitle: 'Heldere voorwaarden vergeleken',
      featureCol: 'Kenmerk',
      blueOceanCol: 'BlueOcean Premier',
      traditionalCol: 'Traditionele grootbank',
    },
    business: {
      kicker: 'Zakelijk · Internationale Betalingen',
      title: 'Betaal teams, ontvang klantbetalingen en beheer zakelijk geld wereldwijd.',
      subtitle:
        'Ontvang betalingen in 38+ valuta’s, stuur snelle internationale overboekingen en gebruik virtuele creditcards voor online uitgaven.',
      operatingTitle: 'Wereldwijde Zakelijke Rekening',
      operatingDesc: 'Snelle lokale & internationale betalingen, teamrechten en directe boekhoudkoppeling.',
      treasuryTitle: 'Flexibele Bedrijfsreserve',
      treasuryDesc: 'Zet extra bedrijfsreserves apart met directe toegang wanneer u leveranciers of salarissen betaalt.',
      fxTitle: '38+ Valuta’s tegen eerlijke koersen',
      fxDesc: 'Beheer USD, EUR, GBP, CHF, SGD en 33 andere valuta’s zonder verborgen wisselkoersopslag.',
      calcTitle: 'Zakelijke Spaarcalculator',
      calcSubtitle: 'Schat hoeveel extra rendement uw zakelijke kasreserve per jaar kan opleveren.',
      cashReserves: 'Zakelijk saldo',
      annualTreasuryYield: 'Geschat jaarresultaat',
      monthlyYield: 'Geschatte maandelijkse opbrengst',
      fdicSweepCap: 'Maandelijkse kosten',
      scheduleTreasury: 'Zakelijke rekening openen',
    },
    cards: {
      kicker: 'Virtuele Creditcards · Wereldwijd Geaccepteerd',
      title: 'Directe virtuele creditcards voor online winkelen & Amerikaanse abonnementen.',
      subtitle:
        'Activeer uw virtuele USD-creditcard direct in het Klantportaal—geaccepteerd bij Netflix, Amazon Prime, ChatGPT en 20+ Amerikaanse diensten.',
      selectFinish: 'Kies uw virtuele creditcard',
      titaniumName: 'Standard Virtuele Creditcard',
      oceanicName: 'Oceanic Virtuele Creditcard',
      crimsonName: 'Crimson Virtuele Creditcard',
      calcTitle: 'Uitgavenplanner',
      calcSubtitle: 'Plan uw maandelijkse online uitgaven en kaartlimieten.',
      travelSpend: 'Reizen & hotels per maand',
      diningSpend: 'Horeca per maand',
      generalSpend: 'Abonnementen & winkelen',
      estimatedAnnualRewards: 'Geschatte jaaruitgaven',
      requestCard: 'Virtuele creditcard aanvragen',
      annualFee: 'Eenmalige uitgiftekosten',
      aprRange: 'Kaarttype',
      metalSpec: 'Formaat',
    },
    loans: {
      kicker: 'Leningen & Hypotheken · Heldere Voorwaarden',
      title: 'Duidelijke financiering voor woningen en persoonlijke plannen.',
      subtitle:
        'Heldere vaste rentes, vooraf inzicht in maandlasten zonder verborgen kosten en een snelle online aanvraag.',
      calcTitle: 'Maandlasten-calculator',
      calcSubtitle: 'Pas aankoopprijs, eigen inbreng, rente en looptijd aan voor uw maandlast.',
      propertyPrice: 'Woningprijs',
      downPayment: 'Eigen inbreng',
      interestRate: 'Rentepercentage (APR)',
      loanTerm: 'Looptijd',
      monthlyPayment: 'Geschatte maandlast',
      loanAmount: 'Leenbedrag',
      totalInterest: 'Totale rentelasten',
      principalShare: 'Aflossing',
      interestShare: 'Rente',
      lockRate: 'Rente bekijken',
    },
    wealth: {
      kicker: 'Vermogen & Beleggen · Persoonlijk Advies',
      title: 'Rustig beleggen voor de lange termijn met persoonlijk advies.',
      subtitle:
        'Werk samen met een vaste adviseur aan een gespreide portefeuille voor pensioen of gezinsdoelen.',
      allocatorTitle: 'Portefeuille-verkenner',
      allocatorSubtitle: 'Bekijk hoe aandelen, obligaties en kasreserve per risicoprofiel worden verdeeld.',
      conservative: 'Voorzichtig & Stabiel',
      balanced: 'Gebalanceerd',
      growth: 'Lange Termijn Groei',
      expectedRange: 'Typische jaarbandbreedte',
      bookAdvisor: 'Gesprek plannen',
    },
    security: {
      kicker: 'Veiligheid & Rekeningbescherming',
      title: 'Uw rekening en virtuele creditcards 24/7 veilig beschermd.',
      subtitle:
        '256-bits versleuteling, biometrisch inloggen, directe kaartblokkering, realtime meldingen en 24/7 hulp.',
      checklistTitle: 'Interactieve Beveiligingscheck',
      checklistSubtitle: 'Schakel elke beveiligingslaag in om uw beschermingsniveau te toetsen.',
      postureScore: 'Actieve beveiligingsdekking',
      reportFraud: '24/7 Beveiligingsdesk bellen',
    },
    portal: {
      loginTitle: 'BlueOcean Klantportaal',
      loginSubtitle: 'Log in met uw gegevens of verken direct de live demo-omgeving.',
      emailLabel: 'Klant e-mailadres',
      passwordLabel: 'Toegangscode',
      signInCta: 'Veilig inloggen',
      demoQuickCta: 'Directe demo-toegang',
      demoNotice: 'Alle overboekingen, virtuele creditcards, abonnementen en kluizen blijven lokaal opgeslagen.',
      welcomeBack: 'Goedendag,',
      totalLiquidity: 'Beschikbaar Totaalsaldo',
      signOut: 'Uitloggen',
      tabOverview: 'Overzicht',
      tabTransfers: 'Overboeken',
      tabCards: 'Virtuele Kaarten',
      tabVaults: 'Spaarkluizen',
      tabLedger: 'Transacties',
      tabSettings: 'Instellingen',
      fromAccount: 'Bronrekening',
      toDestination: 'Bestemming',
      amount: 'Bedrag (USD)',
      memo: 'Omschrijving',
      submitTransfer: 'Transactie uitvoeren',
      internalTransfer: 'Eigen overboeking',
      externalWire: 'Internationale overboeking',
      billPay: 'Rekening betalen',
      freezeCard: 'Kaart bevriezen',
      cardFrozen: 'Bevroren',
      cardActive: 'Actief',
      contactless: 'Apple Pay & Google Pay',
      international: 'Internationaal & VS gebruik',
      dailyLimit: 'Daglimiet',
      revealNumber: 'Gegevens tonen',
      hideNumber: 'Gegevens verbergen',
      fundVault: '+$500 naar kluis',
      createVault: 'Nieuwe kluis maken',
      vaultName: 'Naam spaarkluis',
      targetAmount: 'Doelbedrag (USD)',
      searchPlaceholder: 'Zoek op begunstigde, categorie of referentie...',
      allAccounts: 'Alle rekeningen',
      allTypes: 'Alle transacties',
      credits: 'Bijschrijvingen',
      debits: 'Afschrijvingen',
      exportCsv: 'CSV exporteren',
      emptyLedger: 'Geen transacties gevonden voor deze filters.',
      resetFilters: 'Filters wissen',
      resetDemo: 'Demogegevens herstellen',
      routingCopied: 'Rekeninggegevens gekopieerd.',
      transferSuccess: 'Transactie verwerkt en toegevoegd aan uw overzicht.',
      insufficientFunds: 'Onvoldoende beschikbaar saldo op de bronrekening.',
      vaultFunded: '$500 toegevoegd aan uw spaarkluis.',
    },
    modal: {
      titleAccount: 'BlueOcean-rekening openen',
      titleAdvisor: 'Persoonlijk adviesgesprek plannen',
      fullName: 'Volledige naam',
      email: 'E-mailadres',
      product: 'Gewenst product',
      estimatedAmount: 'Geschatte inleg (USD)',
      submit: 'Aanvraag versturen',
      cancel: 'Annuleren',
      successTitle: 'Aanvraag geregistreerd',
      successBody: 'We hebben uw aanvraag ontvangen en de volgende stappen gemaild.',
      referenceLabel: 'Bevestigingsnummer',
      done: 'Terug naar BlueOcean',
    },
    footer: {
      tagline: 'Eenvoudig internationaal online bankieren met directe virtuele creditcards in ruim 42 landen.',
      fdicNotice:
        'BlueOcean International Bank biedt multivaluta online rekeningen en virtuele creditcards in ruim 42 landen met bankwaardige versleuteling en 24/7 klantenservice.',
      rights: '© 2026 BlueOcean International Bank. Alle rechten voorbehouden.',
      bankingCol: 'Bankieren',
      institutionalCol: 'Bedrijf',
      supportCol: 'Klantenservice',
    },
  },

  es: {
    nav: {
      home: 'Inicio',
      personal: 'Personal',
      business: 'Empresas',
      cards: 'Tarjetas',
      loans: 'Préstamos',
      wealth: 'Banca Privada',
      security: 'Seguridad y Confianza',
      about: 'Nosotros',
      contact: 'Contacto',
      more: 'Más',
      portal: 'Portal del Cliente',
      dockPortal: 'Portal',
      openAccount: 'Abrir cuenta',
      divisionsHeading: 'Divisiones Bancarias',
      languageLabel: 'Idioma',
      themeLabel: 'Apariencia',
      daylight: 'Titanio Claro',
      deepOcean: 'Océano Profundo',
      menu: 'Menú',
      close: 'Cerrar',
    },
    splash: {
      subtitle: 'BlueOcean Bank · Frontera de Banca Online Internacional',
      skip: 'Saltar intro',
    },
    hero: {
      kicker: 'BlueOcean Bank · Envía y recibe dinero en 42+ países',
      title: 'Envía, recibe y ahorra dinero en todo el mundo, sin complicaciones.',
      description:
        'Una cuenta en línea sencilla para enviar y recibir dinero internacionalmente, guardar más de 38 divisas, pagar sin comisiones extranjeras y ganar 4.85% en tus ahorros.',
      primaryCta: 'Abrir una cuenta',
      secondaryCta: 'Entrar al Portal',
      stat1Label: 'Ahorro Personal',
      stat1Value: '4.85% APY',
      stat2Label: 'Ahorro Empresas',
      stat2Value: '5.10% APY',
      stat3Label: 'Protección Global',
      stat3Value: '$5.0M',
      stat4Label: 'Clientes Globales',
      stat4Value: '243K+',
    },
    home: {
      divisionsTitle: 'Todo lo que necesitas para enviar, recibir y ahorrar en el mundo.',
      divisionsSubtitle:
        'Tasas claras, cero comisiones mensuales y transferencias internacionales rápidas en Europa, América, Reino Unido y Asia.',
      explore: 'Ver más',
      architecturalTitle: 'Envía y recibe dinero al extranjero en minutos, no en días.',
      architecturalBody:
        'Olvídate de las comisiones altas y los tipos de cambio confusos. Envía dinero a tu familia, cobra desde el extranjero en moneda local y mantén tu dinero protegido hasta $5,000,000.',
      architecturalCta: 'Cómo protegemos tu dinero',
      quickYieldTitle: 'Mira cuánto más pueden ganar tus ahorros.',
      quickYieldSub: 'Compara el 4.85% de BlueOcean frente al promedio del 0.45% en bancos tradicionales.',
      depositLabel: 'Cantidad ahorrada',
      projectedAnnual: 'Ganancia en 1 año con BlueOcean',
      vsNationalAvg: 'Dinero extra vs. bancos comunes',
      testimonialsTitle: 'La confianza de personas y negocios en todo el mundo.',
      testimonialsSub: 'Historias reales de clientes enviando dinero al extranjero, recibiendo pagos y ahorrando.',
      ctaTitle: '¿Listo para una banca internacional más simple?',
      ctaDesc: 'Abre tu cuenta BlueOcean en menos de 4 minutos con tarjeta virtual al instante y sin depósito mínimo.',
      ctaPrimary: 'Abrir cuenta hoy',
      ctaSecondary: 'Explorar Portal Demo',
    },
    personal: {
      kicker: 'Banca Personal Online · Multidivisa',
      title: 'Cuentas corrientes y ahorro de alto rendimiento sin fricción.',
      subtitle:
        'Obtén 4.85% APY en ahorros, acceso a más de 55,000 cajeros sin comisión y bóvedas dedicadas para cada meta.',
      checkingTitle: 'Cuenta Corriente Premier',
      checkingDesc: '0.50% APY en saldo diario, cero comisiones por sobregiro y tarjeta virtual de titanio al instante.',
      savingsTitle: 'Ahorro Oceanic Alto Rendimiento',
      savingsDesc: '4.85% APY capitalizado diariamente, sin saldo mínimo y transferencias inmediatas.',
      cdTitle: 'Certificados a Plazo Fijo (CD)',
      cdDesc: 'Asegura hasta 5.05% APY a 6, 12 o 24 meses con avisos automáticos al vencimiento.',
      calcTitle: 'Simulador de Interés Compuesto',
      calcSubtitle: 'Proyecta el crecimiento de tu ahorro al 4.85% APY con aportes mensuales.',
      initialDeposit: 'Depósito inicial',
      monthlyContribution: 'Aporte mensual',
      horizonYears: 'Horizonte temporal',
      yearsUnit: 'Años',
      projectedBalance: 'Saldo proyectado',
      interestEarned: 'Intereses ganados',
      applyNow: 'Abrir cuenta personal',
      comparisonTitle: 'Términos transparentes frente a la banca tradicional',
      featureCol: 'Característica',
      blueOceanCol: 'BlueOcean Premier',
      traditionalCol: 'Gran banco tradicional',
    },
    business: {
      kicker: 'Empresas · Pagos Internacionales',
      title: 'Paga equipos, cobra a clientes y administra tu negocio globalmente.',
      subtitle:
        'Cobra en más de 38 monedas, envía transferencias rápidas a proveedores y emite tarjetas de crédito virtuales para compras y software.',
      operatingTitle: 'Cuenta Global de Empresas',
      operatingDesc: 'Transferencias internacionales rápidas, permisos por equipo y sincronización contable.',
      treasuryTitle: 'Reserva Flexible de Negocio',
      treasuryDesc: 'Aparta liquidez empresarial disponible en cualquier momento para nómina y proveedores.',
      fxTitle: 'Envía y Recibe en 38+ Divisas',
      fxDesc: 'Opera en USD, EUR, GBP, CHF, SGD y 33 divisas adicionales con tipos de cambio claros.',
      calcTitle: 'Calculadora de Ahorro Empresarial',
      calcSubtitle: 'Estima el crecimiento anual de las reservas de tu empresa.',
      cashReserves: 'Saldo empresarial',
      annualTreasuryYield: 'Crecimiento anual estimado',
      monthlyYield: 'Distribución mensual estimada',
      fdicSweepCap: 'Cuota mensual',
      scheduleTreasury: 'Abrir cuenta empresarial',
    },
    cards: {
      kicker: 'Tarjetas de Crédito Virtuales · Uso Mundial',
      title: 'Tarjetas de crédito virtuales al instante para compras online y suscripciones de EE. UU.',
      subtitle:
        'Activa tu tarjeta virtual en USD desde el Portal del Cliente: aceptada en Netflix, Amazon Prime, ChatGPT y más de 20 servicios de EE. UU.',
      selectFinish: 'Elige tu tarjeta virtual',
      titaniumName: 'Standard Virtual Credit',
      oceanicName: 'Oceanic Virtual Credit',
      crimsonName: 'Crimson Virtual Credit',
      calcTitle: 'Planificador de Gastos',
      calcSubtitle: 'Calcula tus gastos online y límites mensuales.',
      travelSpend: 'Viajes y hoteles mensuales',
      diningSpend: 'Restaurantes mensuales',
      generalSpend: 'Suscripciones y compras online',
      estimatedAnnualRewards: 'Gasto anual estimado',
      requestCard: 'Obtener tarjeta virtual',
      annualFee: 'Emisión única',
      aprRange: 'Tipo de tarjeta',
      metalSpec: 'Formato',
    },
    loans: {
      kicker: 'Préstamos e Hipotecas · Condiciones Claras',
      title: 'Préstamos simples para vivienda, refinanciación y planes personales.',
      subtitle:
        'Tasas fijas claras, cálculo de cuota mensual desde el inicio y solicitud en línea sencilla.',
      calcTitle: 'Calculadora de Cuota Mensual',
      calcSubtitle: 'Ajusta precio, entrada, tasa y plazo para calcular tu pago mensual estimado.',
      propertyPrice: 'Precio de la propiedad',
      downPayment: 'Pago inicial',
      interestRate: 'Tasa de interés (APR)',
      loanTerm: 'Plazo del préstamo',
      monthlyPayment: 'Cuota mensual estimada',
      loanAmount: 'Capital financiado',
      totalInterest: 'Interés total',
      principalShare: 'Capital',
      interestShare: 'Interés',
      lockRate: 'Consultar tasa',
    },
    wealth: {
      kicker: 'Inversión y Patrimonio · Acompañamiento Personal',
      title: 'Inversión a largo plazo con asesoría clara y humana.',
      subtitle:
        'Trabaja con un asesor dedicado para planificar ahorros, retiro y metas familiares con comisiones transparentes.',
      allocatorTitle: 'Explorador de Planes',
      allocatorSubtitle: 'Explora el balance entre acciones, bonos y efectivo según tu perfil de riesgo.',
      conservative: 'Estable y Cuidadoso',
      balanced: 'Equilibrado',
      growth: 'Crecimiento a Largo Plazo',
      expectedRange: 'Rango anual típico',
      bookAdvisor: 'Hablar con un asesor',
    },
    security: {
      kicker: 'Seguridad y Protección de Cuenta',
      title: 'Tu cuenta y tus tarjetas de crédito virtuales protegidas 24/7.',
      subtitle:
        'Cifrado de 256 bits, acceso biométrico, congelamiento instantáneo de tarjeta, alertas al instante y soporte humano 24/7.',
      checklistTitle: 'Evaluador Interactivo de Seguridad',
      checklistSubtitle: 'Activa cada defensa de BlueOcean para medir tu postura de protección.',
      postureScore: 'Nivel de protección',
      reportFraud: 'Contactar equipo de seguridad 24/7',
    },
    portal: {
      loginTitle: 'Portal del Cliente BlueOcean',
      loginSubtitle: 'Inicia sesión o accede al entorno bancario interactivo precargado.',
      emailLabel: 'Correo electrónico',
      passwordLabel: 'Clave de acceso',
      signInCta: 'Iniciar sesión segura',
      demoQuickCta: 'Acceso Demo en un clic',
      demoNotice: 'Todas las transferencias, tarjetas virtuales, suscripciones y bóvedas se guardan localmente.',
      welcomeBack: 'Buen día,',
      totalLiquidity: 'Saldo Disponible Total',
      signOut: 'Cerrar sesión',
      tabOverview: 'Resumen',
      tabTransfers: 'Transferencias',
      tabCards: 'Tarjetas Virtuales',
      tabVaults: 'Bóvedas',
      tabLedger: 'Movimientos',
      tabSettings: 'Ajustes',
      fromAccount: 'Cuenta de origen',
      toDestination: 'Destino',
      amount: 'Monto (USD)',
      memo: 'Referencia / Concepto',
      submitTransfer: 'Enviar dinero ahora',
      internalTransfer: 'Entre mis cuentas',
      externalWire: 'Transferencia internacional',
      billPay: 'Pago de facturas',
      freezeCard: 'Congelar tarjeta',
      cardFrozen: 'Congelada',
      cardActive: 'Activa',
      contactless: 'Apple Pay y Google Pay',
      international: 'Pagos internacionales y EE. UU.',
      dailyLimit: 'Límite diario',
      revealNumber: 'Ver datos',
      hideNumber: 'Ocultar datos',
      fundVault: 'Agregar $500 a la bóveda',
      createVault: 'Crear nueva bóveda',
      vaultName: 'Nombre de la meta',
      targetAmount: 'Meta (USD)',
      searchPlaceholder: 'Buscar comercio, categoría o referencia...',
      allAccounts: 'Todas las cuentas',
      allTypes: 'Toda la actividad',
      credits: 'Ingresos',
      debits: 'Egresos',
      exportCsv: 'Exportar CSV',
      emptyLedger: 'No hay movimientos que coincidan con tus filtros.',
      resetFilters: 'Restablecer filtros',
      resetDemo: 'Reiniciar cuentas demo',
      routingCopied: 'Datos de cuenta copiados.',
      transferSuccess: 'Operación enviada y registrada en el historial.',
      insufficientFunds: 'Saldo disponible insuficiente en la cuenta origen.',
      vaultFunded: 'Se agregaron $500 a tu bóveda de ahorro.',
    },
    modal: {
      titleAccount: 'Abrir cuenta en BlueOcean',
      titleAdvisor: 'Agendar consulta',
      fullName: 'Nombre completo',
      email: 'Correo electrónico',
      product: 'Producto de interés',
      estimatedAmount: 'Depósito inicial (Opcional, USD)',
      submit: 'Continuar',
      cancel: 'Cancelar',
      successTitle: 'Solicitud registrada',
      successBody: 'Recibimos tu solicitud y enviamos los siguientes pasos a tu correo.',
      referenceLabel: 'Referencia de confirmación',
      done: 'Volver a BlueOcean',
    },
    footer: {
      tagline: 'Banca online internacional simple con tarjetas de crédito virtuales instantáneas en más de 42 países.',
      fdicNotice:
        'BlueOcean International Bank ofrece cuentas multidivisa en línea y tarjetas de crédito virtuales en más de 42 países con cifrado bancario y soporte 24/7.',
      rights: '© 2026 BlueOcean International Bank. Todos los derechos reservados.',
      bankingCol: 'Cuentas y Préstamos',
      institutionalCol: 'Empresa',
      supportCol: 'Atención al cliente',
    },
  },

  pt: {
    nav: {
      home: 'Início',
      personal: 'Pessoal',
      business: 'Empresas',
      cards: 'Cartões',
      loans: 'Crédito',
      wealth: 'Private Wealth',
      security: 'Segurança e Proteção',
      about: 'Sobre Nós',
      contact: 'Contato',
      more: 'Mais',
      portal: 'Portal do Cliente',
      dockPortal: 'Portal',
      openAccount: 'Abrir conta',
      divisionsHeading: 'Divisões Bancárias',
      languageLabel: 'Idioma',
      themeLabel: 'Aparência',
      daylight: 'Titânio Claro',
      deepOcean: 'Oceano Profundo',
      menu: 'Menu',
      close: 'Fechar',
    },
    splash: {
      subtitle: 'BlueOcean Bank · Fronteira do Banco Online Internacional',
      skip: 'Pular introdução',
    },
    hero: {
      kicker: 'BlueOcean Bank · Envie e receba dinheiro em 42+ países',
      title: 'Envie, receba e guarde dinheiro pelo mundo—de forma simples.',
      description:
        'Uma conta online prática para enviar e receber dinheiro do exterior, guardar mais de 38 moedas, pagar sem taxas internacionais e ganhar 4,85% na poupança.',
      primaryCta: 'Abrir uma conta',
      secondaryCta: 'Entrar no Portal',
      stat1Label: 'Poupança Pessoal',
      stat1Value: '4,85% APY',
      stat2Label: 'Poupança Empresas',
      stat2Value: '5,10% APY',
      stat3Label: 'Proteção Global',
      stat3Value: 'US$ 5,0M',
      stat4Label: 'Clientes Globais',
      stat4Value: '243K+',
    },
    home: {
      divisionsTitle: 'Tudo para enviar, receber e poupar dinheiro no mundo todo.',
      divisionsSubtitle:
        'Taxas transparentes, zero tarifa mensal e transferências internacionais rápidas na Europa, Américas, Reino Unido e Ásia.',
      explore: 'Saiba mais',
      architecturalTitle: 'Envie e receba dinheiro internacional em minutos, não em dias.',
      architecturalBody:
        'Chega de tarifas abusivas e câmbio confuso. Envie dinheiro para a família, receba pagamentos do exterior na moeda local e mantenha seu saldo protegido até US$ 5.000.000.',
      architecturalCta: 'Como protegemos seu dinheiro',
      quickYieldTitle: 'Veja quanto suas economias podem render a mais.',
      quickYieldSub: 'Compare os 4,85% do BlueOcean com a média de 0,45% dos bancos comuns.',
      depositLabel: 'Valor guardado',
      projectedAnnual: 'Rendimento em 1 ano no BlueOcean',
      vsNationalAvg: 'A mais que bancos comuns',
      testimonialsTitle: 'A confiança de pessoas e empresas no mundo inteiro.',
      testimonialsSub: 'Histórias reais de quem envia dinheiro ao exterior, recebe pagamentos internacionais e poupa.',
      ctaTitle: 'Pronto para um banco internacional mais simples?',
      ctaDesc: 'Abra sua conta BlueOcean em menos de 4 minutos com cartão virtual na hora e sem depósito mínimo.',
      ctaPrimary: 'Abrir conta hoje',
      ctaSecondary: 'Explorar Portal Demo',
    },
    personal: {
      kicker: 'Banco Pessoal Online · Multimoeda',
      title: 'Conta corrente e poupança de alto rendimento sem atrito.',
      subtitle:
        'Ganhe 4,85% APY na poupança, acesse mais de 55.000 caixas sem tarifa e organize metas em cofres dedicados.',
      checkingTitle: 'Conta Corrente Premier',
      checkingDesc: '0,50% APY no saldo diário, zero tarifa de cheque especial e cartão virtual de titânio imediato.',
      savingsTitle: 'Poupança Oceanic Alto Rendimento',
      savingsDesc: '4,85% APY com capitalização diária, sem saldo mínimo e transferências instantâneas.',
      cdTitle: 'Certificados de Depósito (CD)',
      cdDesc: 'Garanta até 5,05% APY em prazos de 6, 12 ou 24 meses com total previsibilidade.',
      calcTitle: 'Simulador de Juros Compostos',
      calcSubtitle: 'Simule a evolução do seu patrimônio a 4,85% APY com aportes mensais.',
      initialDeposit: 'Depósito inicial',
      monthlyContribution: 'Aporte mensal',
      horizonYears: 'Prazo',
      yearsUnit: 'Anos',
      projectedBalance: 'Saldo projetado',
      interestEarned: 'Juros acumulados',
      applyNow: 'Abrir conta pessoal',
      comparisonTitle: 'Condições transparentes vs. bancos tradicionais',
      featureCol: 'Recurso da conta',
      blueOceanCol: 'BlueOcean Premier',
      traditionalCol: 'Banco tradicional',
    },
    business: {
      kicker: 'Empresas · Pagamentos Internacionais',
      title: 'Pague equipes, receba de clientes e gerencie seu negócio no mundo todo.',
      subtitle:
        'Receba em mais de 38 moedas, envie transferências rápidas a fornecedores e emita cartões de crédito virtuais para compras online.',
      operatingTitle: 'Conta Global Empresarial',
      operatingDesc: 'Transferências internacionais rápidas, permissões por equipe e integração contábil.',
      treasuryTitle: 'Reserva Flexível Empresarial',
      treasuryDesc: 'Mantenha o caixa da empresa organizado e disponível a qualquer momento para pagamentos.',
      fxTitle: 'Envie e Receba em 38+ Moedas',
      fxDesc: 'Mantenha e envie USD, EUR, GBP, CHF, SGD e outras 33 moedas com câmbio transparente.',
      calcTitle: 'Simulador de Reserva Empresarial',
      calcSubtitle: 'Estime o crescimento anual das reservas da sua empresa.',
      cashReserves: 'Saldo empresarial',
      annualTreasuryYield: 'Crescimento anual estimado',
      monthlyYield: 'Distribuição mensal estimada',
      fdicSweepCap: 'Tarifa mensal',
      scheduleTreasury: 'Abrir conta empresarial',
    },
    cards: {
      kicker: 'Cartões de Crédito Virtuais · Uso Global',
      title: 'Cartões de crédito virtuais na hora para compras online e assinaturas dos EUA.',
      subtitle:
        'Ative seu cartão de crédito virtual em USD no Portal do Cliente—aceito na Netflix, Amazon Prime, ChatGPT e mais de 20 serviços dos EUA.',
      selectFinish: 'Escolha seu cartão virtual',
      titaniumName: 'Standard Virtual Credit',
      oceanicName: 'Oceanic Virtual Credit',
      crimsonName: 'Crimson Virtual Credit',
      calcTitle: 'Planejador de Gastos',
      calcSubtitle: 'Planeje seus gastos online e limites mensais.',
      travelSpend: 'Viagens e hotéis por mês',
      diningSpend: 'Restaurantes por mês',
      generalSpend: 'Assinaturas e compras online',
      estimatedAnnualRewards: 'Gasto anual estimado',
      requestCard: 'Obter cartão virtual',
      annualFee: 'Emissão única',
      aprRange: 'Tipo de cartão',
      metalSpec: 'Formato',
    },
    loans: {
      kicker: 'Crédito e Financiamento · Condições Claras',
      title: 'Crédito simples para imóveis, refinanciamento e planos pessoais.',
      subtitle:
        'Taxas fixas claras, simulação de parcela mensal transparente e solicitação online descomplicada.',
      calcTitle: 'Calculadora de Parcela Mensal',
      calcSubtitle: 'Ajuste valor, entrada, taxa e prazo para ver a parcela mensal estimada.',
      propertyPrice: 'Valor do imóvel',
      downPayment: 'Entrada',
      interestRate: 'Taxa de juros (APR)',
      loanTerm: 'Prazo',
      monthlyPayment: 'Parcela mensal estimada',
      loanAmount: 'Valor financiado',
      totalInterest: 'Juros totais',
      principalShare: 'Principal',
      interestShare: 'Juros',
      lockRate: 'Consultar taxa',
    },
    wealth: {
      kicker: 'Investimentos · Orientação Pessoal',
      title: 'Investimento de longo prazo com acompanhamento humano.',
      subtitle:
        'Conte com um consultor dedicado para planejar aposentadoria, reservas e metas familiares com transparência.',
      allocatorTitle: 'Explorador de Planos',
      allocatorSubtitle: 'Veja o equilíbrio entre ações, renda fixa e reserva conforme seu perfil de risco.',
      conservative: 'Estável e Cauteloso',
      balanced: 'Equilibrado',
      growth: 'Crescimento Longo Prazo',
      expectedRange: 'Faixa anual típica',
      bookAdvisor: 'Falar com consultor',
    },
    security: {
      kicker: 'Segurança e Proteção da Conta',
      title: 'Sua conta e seus cartões de crédito virtuais protegidos 24/7.',
      subtitle:
        'Criptografia de 256 bits, login biométrico, bloqueio instantâneo do cartão, alertas em tempo real e suporte humano 24/7.',
      checklistTitle: 'Avaliador Interativo de Segurança',
      checklistSubtitle: 'Ative cada proteção do BlueOcean para verificar sua cobertura.',
      postureScore: 'Nível de proteção',
      reportFraud: 'Contatar central de segurança 24/7',
    },
    portal: {
      loginTitle: 'Portal do Cliente BlueOcean',
      loginSubtitle: 'Entre com suas credenciais ou explore o ambiente bancário interativo de demonstração.',
      emailLabel: 'E-mail do cliente',
      passwordLabel: 'Senha',
      signInCta: 'Entrar com segurança',
      demoQuickCta: 'Acesso Demo em 1 clique',
      demoNotice: 'Todas as transferências, cartões virtuais, assinaturas e cofres ficam salvos localmente no navegador.',
      welcomeBack: 'Bom dia,',
      totalLiquidity: 'Saldo Disponível Total',
      signOut: 'Sair',
      tabOverview: 'Visão Geral',
      tabTransfers: 'Transferências',
      tabCards: 'Cartões Virtuais',
      tabVaults: 'Cofres',
      tabLedger: 'Extrato',
      tabSettings: 'Ajustes',
      fromAccount: 'Conta de origem',
      toDestination: 'Destino',
      amount: 'Valor (USD)',
      memo: 'Descrição / Referência',
      submitTransfer: 'Enviar dinheiro agora',
      internalTransfer: 'Entre minhas contas',
      externalWire: 'Transferência internacional',
      billPay: 'Pagar contas',
      freezeCard: 'Congelar cartão',
      cardFrozen: 'Congelado',
      cardActive: 'Ativo',
      contactless: 'Apple Pay e Google Pay',
      international: 'Pagamentos internacionais e EUA',
      dailyLimit: 'Limite diário',
      revealNumber: 'Mostrar dados',
      hideNumber: 'Ocultar dados',
      fundVault: 'Adicionar US$ 500 ao cofre',
      createVault: 'Criar novo cofre',
      vaultName: 'Nome do objetivo',
      targetAmount: 'Meta (USD)',
      searchPlaceholder: 'Buscar estabelecimento, categoria ou código...',
      allAccounts: 'Todas as contas',
      allTypes: 'Toda atividade',
      credits: 'Entradas',
      debits: 'Saídas',
      exportCsv: 'Exportar CSV',
      emptyLedger: 'Nenhuma transação corresponde aos filtros atuais.',
      resetFilters: 'Limpar filtros',
      resetDemo: 'Restaurar dados demo',
      routingCopied: 'Dados da conta copiados.',
      transferSuccess: 'Transação enviada e registrada no extrato.',
      insufficientFunds: 'Saldo disponível insuficiente na conta de origem.',
      vaultFunded: 'US$ 500 adicionados ao seu cofre.',
    },
    modal: {
      titleAccount: 'Abrir conta BlueOcean',
      titleAdvisor: 'Agendar consulta',
      fullName: 'Nome completo',
      email: 'Endereço de e-mail',
      product: 'Produto de interesse',
      estimatedAmount: 'Depósito inicial (Opcional, USD)',
      submit: 'Continuar',
      cancel: 'Cancelar',
      successTitle: 'Solicitação registrada',
      successBody: 'Recebemos sua solicitação e enviamos os próximos passos para seu e-mail.',
      referenceLabel: 'Código de confirmação',
      done: 'Voltar ao BlueOcean',
    },
    footer: {
      tagline: 'Banco online internacional simples com cartões de crédito virtuais instantâneos em mais de 42 países.',
      fdicNotice:
        'BlueOcean International Bank oferece contas multimoeda online e cartões de crédito virtuais em mais de 42 países com criptografia bancária e suporte 24/7.',
      rights: '© 2026 BlueOcean International Bank. Todos os direitos reservados.',
      bankingCol: 'Contas e Crédito',
      institutionalCol: 'Empresa',
      supportCol: 'Suporte',
    },
  },
};
