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
      title: 'Send, receive, and save money worldwide—made simple.',
      description:
        'One easy online account to send and receive money internationally, hold 38+ currencies, spend anywhere with zero foreign fees, and earn 4.85% on your savings.',
      primaryCta: 'Open an Account',
      secondaryCta: 'Enter Customer Portal',
      stat1Label: 'Personal Savings',
      stat1Value: '4.85% APY',
      stat2Label: 'Business Savings',
      stat2Value: '5.10% APY',
      stat3Label: 'Deposit Protection',
      stat3Value: '$5.0M',
      stat4Label: 'Global Customers',
      stat4Value: '243K+',
    },
    home: {
      divisionsTitle: 'Everything you need to bank, send, and save worldwide.',
      divisionsSubtitle:
        'Clear rates, zero monthly account fees, and fast international transfers across Europe, the UK, the Americas, and Asia—all in one place.',
      explore: 'Learn more',
      architecturalTitle: 'Send and receive money across borders in minutes, not days.',
      architecturalBody:
        'Say goodbye to high wire fees and confusing exchange rates. Send money home, get paid from clients abroad in local currencies, and keep your savings protected up to $5,000,000.',
      architecturalCta: 'See How We Keep Money Safe',
      quickYieldTitle: 'See how much more your savings can earn.',
      quickYieldSub: 'Move the slider to compare BlueOcean’s 4.85% savings rate against the 0.45% average at regular banks.',
      depositLabel: 'Your Savings Amount',
      projectedAnnual: 'Earned in 1 Year at BlueOcean',
      vsNationalAvg: 'Extra cash vs. regular banks',
      testimonialsTitle: 'Trusted by people and businesses around the world.',
      testimonialsSub: 'Real stories from customers sending money abroad, receiving international payments, and growing their savings.',
      ctaTitle: 'Ready for simpler international banking?',
      ctaDesc: 'Open your BlueOcean account in under 4 minutes—get an instant virtual card and start sending money worldwide with no minimum deposit.',
      ctaPrimary: 'Open Account Today',
      ctaSecondary: 'Explore Customer Portal',
    },
    personal: {
      kicker: 'Personal Accounts · Send, Receive & Save Globally',
      title: 'Everyday accounts and high-interest savings with no borders.',
      subtitle:
        'Send and receive money in 38+ currencies, earn 4.85% on savings, withdraw free at 55,000+ ATMs worldwide, and organize your goals in savings vaults.',
      checkingTitle: 'Everyday Global Account',
      checkingDesc: 'Send and receive money internationally with local account details, zero overdraft fees, free worldwide ATMs, and an instant virtual card.',
      savingsTitle: 'High-Interest Savings',
      savingsDesc: 'Earn 4.85% APY with interest added daily, no minimum balance, no monthly fees, and instant transfers back to your main account.',
      cdTitle: 'Fixed-Rate Savings',
      cdDesc: 'Lock in up to 5.05% APY for 6, 12, or 24 months so you always know exactly how much your money will grow.',
      calcTitle: 'Savings Growth Calculator',
      calcSubtitle: 'See how your savings grow at 4.85% APY when you add a little each month.',
      initialDeposit: 'Starting Amount',
      monthlyContribution: 'Added Every Month',
      horizonYears: 'Time Frame',
      yearsUnit: 'Years',
      projectedBalance: 'Estimated Total',
      interestEarned: 'Total Interest Earned',
      applyNow: 'Open Personal Account',
      comparisonTitle: 'BlueOcean vs. Regular Banks',
      featureCol: 'What You Get',
      blueOceanCol: 'BlueOcean Account',
      traditionalCol: 'Regular Bank',
    },
    business: {
      kicker: 'Business Accounts · Global Payments Made Easy',
      title: 'Pay teams, receive client payments, and grow company cash worldwide.',
      subtitle:
        'Get paid in 38 currencies like a local, send fast international transfers to suppliers, issue team cards, and earn 5.10% APY on spare business cash.',
      operatingTitle: 'Global Business Account',
      operatingDesc: 'Receive payments from international clients, send low-cost transfers worldwide, set team permissions, and connect your accounting app.',
      treasuryTitle: '5.10% Business Savings',
      treasuryDesc: 'Put idle company cash to work automatically at 5.10% APY while keeping your money accessible and protected up to $5M across partner banks.',
      fxTitle: 'Send & Receive in 38 Currencies',
      fxDesc: 'Hold, convert, and send USD, EUR, GBP, CHF, SGD, BRL, and 32 more currencies at fair, upfront exchange rates with no hidden markups.',
      calcTitle: 'Business Savings Calculator',
      calcSubtitle: 'See how much extra interest your company’s spare cash can earn each year.',
      cashReserves: 'Company Cash Balance',
      annualTreasuryYield: 'Yearly Interest (5.10% APY)',
      monthlyYield: 'Estimated Monthly Payout',
      fdicSweepCap: 'Partner Bank Protection',
      scheduleTreasury: 'Open a Business Account',
    },
    cards: {
      kicker: 'Metal & Virtual Cards · Spend Anywhere',
      title: 'Cards built for everyday life and international travel.',
      subtitle:
        'Pay in any country with zero foreign transaction fees, start spending right away with a virtual card, lock your card in one tap, and earn cashback everywhere.',
      selectFinish: 'Choose Your Card',
      titaniumName: 'Titanium Everyday Debit',
      oceanicName: 'Oceanic Travel Card',
      crimsonName: 'Crimson Private Card',
      calcTitle: 'Yearly Rewards Calculator',
      calcSubtitle: 'Estimate how much cashback and travel value you can earn every year.',
      travelSpend: 'Monthly Travel & Hotels',
      diningSpend: 'Monthly Dining & Cafes',
      generalSpend: 'Monthly Everyday Spending',
      estimatedAnnualRewards: 'Estimated Yearly Rewards',
      requestCard: 'Get This Card',
      annualFee: 'Yearly Fee',
      aprRange: 'Interest Rate (APR)',
      metalSpec: 'Card Material',
    },
    loans: {
      kicker: 'Home & Personal Loans · Clear Rates',
      title: 'Simple loans for homes, refinancing, and big plans.',
      subtitle:
        'Fair fixed rates, upfront costs with no surprises, and a fast online decision within 3 days—plus rate discounts for BlueOcean account holders.',
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
      kicker: 'Security & Money Protection',
      title: 'Your money and every transfer, protected around the clock.',
      subtitle:
        'Up to $5,000,000 in combined deposit protection across 20 regulated partner banks, biometric sign-in, instant transfer alerts, and 24/7 live human help.',
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
      demoNotice: 'Any transfers, card freezes, limits, and savings vaults you test stay saved in your browser.',
      welcomeBack: 'Welcome back,',
      totalLiquidity: 'Total Available Balance',
      signOut: 'Sign Out',
      tabOverview: 'Overview',
      tabTransfers: 'Send & Receive',
      tabCards: 'My Cards',
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
      contactless: 'Tap to Pay & Wallet',
      international: 'International Spending',
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
      tagline: 'Simple international online banking to send, receive, spend, and save money across 42+ countries.',
      fdicNotice:
        'BlueOcean International Bank helps customers send, receive, and hold funds across 42+ countries. Eligible deposits are protected up to $5,000,000 through our network of 20 regulated international partner banks.',
      rights: '© 2026 BlueOcean International Bank. All rights reserved.',
      bankingCol: 'Accounts & Cards',
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
      kicker: 'Geschäftskunden & Internationales Treasury',
      title: 'Institutionelles Liquiditätsmanagement für globale Unternehmen.',
      subtitle:
        'Vereinen Sie Geschäftskonten, automatische 5,10 %-APY-Treasury-Sweeps, SEPA Instant, SWIFT GPI & Fedwire sowie Devisenhandel in 38 Währungen.',
      operatingTitle: 'Geschäfts-Girokonto Global',
      operatingDesc: 'Unbegrenzte gebührenfreie lokale & internationale Transfers, Vier-Augen-Freigaben und direkte Buchhaltungsintegration.',
      treasuryTitle: 'Automatischer Treasury-Sweep',
      treasuryDesc: 'Freie Liquidität wird über Nacht in G10-Staatsanleihen und ein 5-Mio.-$-Partnerbankennetzwerk zu 5,10 % APY angelegt.',
      fxTitle: 'Globaler Devisen-Desk',
      fxDesc: 'Halten und überweisen Sie USD, EUR, GBP, CHF, SGD und 33 weitere Währungen zu Interbank-Spreads.',
      calcTitle: 'Unternehmens-Renditerechner',
      calcSubtitle: 'Berechnen Sie den jährlichen Zinsertrag Ihrer betrieblichen Liquiditätsreserven.',
      cashReserves: 'Betriebliche Liquiditätsreserve',
      annualTreasuryYield: 'Jährlicher Treasury-Ertrag (5,10 % APY)',
      monthlyYield: 'Geschätzte monatliche Ausschüttung',
      fdicSweepCap: 'Partnerbanken-Schutz',
      scheduleTreasury: 'Treasury-Onboarding anfragen',
    },
    cards: {
      kicker: 'Gefräste Metallkarten & Prämien',
      title: 'Karten aus gebürstetem Titan, Saphirblau und tiefem Karminrot.',
      subtitle:
        'Gefertigt aus 18 Gramm Luftfahrtmetall mit sofortiger virtueller Ausstellung, flexiblen Limits und unbegrenzten Prämien.',
      selectFinish: 'Kartenausführung wählen',
      titaniumName: 'Titanium Reserve Debit',
      oceanicName: 'Oceanic Sapphire Infinite',
      crimsonName: 'Crimson Apex Private',
      calcTitle: 'Jahresprämien-Rechner',
      calcSubtitle: 'Passen Sie Ihre monatlichen Ausgaben an, um den geschätzten Prämienwert zu berechnen.',
      travelSpend: 'Reisen & Hotels monatlich',
      diningSpend: 'Gastronomie monatlich',
      generalSpend: 'Alltag & Geschäftlich monatlich',
      estimatedAnnualRewards: 'Geschätzter Jahreswert',
      requestCard: 'Diese Karte anfragen',
      annualFee: 'Jahresgebühr',
      aprRange: 'Variabler Zinssatz',
      metalSpec: 'Ausführung',
    },
    loans: {
      kicker: 'Kredite & Immobilienfinanzierung',
      title: 'Klare Finanzierungskonditionen für Immobilien und Liquidität.',
      subtitle:
        'Attraktive Festzins- und Jumbo-Hypotheken, transparente Abschlusskosten und digitale Kreditprüfung in 72 Stunden.',
      calcTitle: 'Hypotheken- & Tilgungsrechner',
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
      kicker: 'Private Banking & Vermögensverwaltung',
      title: 'Disziplinierte Kapitalbegleitung über alle Marktzyklen.',
      subtitle:
        'Persönliche CFA-Berater, steueroptimiertes globales Direct Indexing, maßgeschneiderte Staatsanleihen-Leitern und internationale Nachlassplanung.',
      allocatorTitle: 'Portfolio-Allokations-Explorer',
      allocatorSubtitle: 'Sehen Sie, wie BlueOcean Private Wealth Mandate nach Risikoprofil strukturiert.',
      conservative: 'Kapitalerhalt',
      balanced: 'Ausgewogen',
      growth: 'Globales Wachstum',
      expectedRange: 'Historischer Zielkorridor',
      bookAdvisor: 'Private-Banker-Gespräch buchen',
    },
    security: {
      kicker: 'Sicherheit, Einlagenschutz & Vertrauen',
      title: 'Institutioneller Schutz in jeder internationalen Transaktion.',
      subtitle:
        'Mehrstufige Einlagensicherung bis 5.000.000 $ über 20 regulierte internationale Partnerbanken (EU-DGS, FSCS & FDIC), geschützt durch Hardware-Passkeys.',
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
      demoNotice: 'Alle Überweisungen, Kartensperren und Tresore werden lokal im Browser gespeichert.',
      welcomeBack: 'Guten Tag,',
      totalLiquidity: 'Gesamte Netto-Liquidität',
      signOut: 'Abmelden',
      tabOverview: 'Übersicht',
      tabTransfers: 'Überweisungen',
      tabCards: 'Metallkarten',
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
      tagline: 'Internationales Online-Banking für weltweite Liquidität, Klarheit und institutionelles Vertrauen.',
      fdicNotice:
        'BlueOcean International Bank bietet regulierte Mehrwährungskonten in über 42 Ländern. Einlagen sind bis 5.000.000 $ über unser internationales Partnerbanken-Sweep-Netzwerk (inkl. EU-DGS, FSCS & FDIC) geschützt.',
      rights: '© 2026 BlueOcean International Bank. Alle Rechte vorbehalten.',
      bankingCol: 'Banking',
      institutionalCol: 'Institutionell',
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
      kicker: 'Бизнес и международное казначейство',
      title: 'Институциональное управление ликвидностью для международных компаний.',
      subtitle:
        'Единые операционные счета, автоматический Treasury Sweep 5.10% APY, переводы SEPA Instant, SWIFT GPI и Fedwire и валютный деск на 38 валют.',
      operatingTitle: 'Корпоративный расчётный счёт',
      operatingDesc: 'Бесплатные локальные и международные переводы, двойное подтверждение платежей и интеграция с учётом.',
      treasuryTitle: 'Автоматический Treasury Sweep',
      treasuryDesc: 'Свободный остаток автоматически размещается в государственные векселя G10 и сеть партнёрских банков до $5 млн под 5.10% APY.',
      fxTitle: 'Глобальный валютный деск',
      fxDesc: 'Храните и переводите USD, EUR, GBP, CHF, SGD и ещё 33 валюты по прозрачным межбанковским курсам.',
      calcTitle: 'Калькулятор доходности казначейства',
      calcSubtitle: 'Оцените годовой доход на свободные корпоративные резервы.',
      cashReserves: 'Корпоративные резервы',
      annualTreasuryYield: 'Годовой доход (5.10% APY)',
      monthlyYield: 'Ежемесячное начисление',
      fdicSweepCap: 'Защита партнёрской сети',
      scheduleTreasury: 'Запросить подключение казначейства',
    },
    cards: {
      kicker: 'Металлические карты и привилегии',
      title: 'Карты из фрезерованного титана, сапфирового и карминового металла.',
      subtitle:
        '18 граммов авиационного металла, мгновенная виртуальная карта, гибкие лимиты и неограниченные бонусы.',
      selectFinish: 'Выберите исполнение карты',
      titaniumName: 'Titanium Reserve Debit',
      oceanicName: 'Oceanic Sapphire Infinite',
      crimsonName: 'Crimson Apex Private',
      calcTitle: 'Калькулятор годовых бонусов',
      calcSubtitle: 'Настройте ежемесячные расходы, чтобы увидеть выгоду по выбранной карте.',
      travelSpend: 'Путешествия и отели в месяц',
      diningSpend: 'Рестораны в месяц',
      generalSpend: 'Повседневные расходы в месяц',
      estimatedAnnualRewards: 'Оценочная выгода в год',
      requestCard: 'Оформить эту карту',
      annualFee: 'Годовое обслуживание',
      aprRange: 'Переменная ставка APR',
      metalSpec: 'Материал',
    },
    loans: {
      kicker: 'Кредиты и ипотека · Equal Housing Lender',
      title: 'Прозрачные условия ипотеки, рефинансирования и кредитных линий.',
      subtitle:
        'Конкурентные фиксированные и Jumbo-ставки, открытый расчёт затрат на закрытие и цифровое решение за 72 часа.',
      calcTitle: 'Ипотечный калькулятор',
      calcSubtitle: 'Настройте стоимость объекта, взнос, ставку и срок для расчёта ежемесячного платежа.',
      propertyPrice: 'Стоимость недвижимости',
      downPayment: 'Первоначальный взнос',
      interestRate: 'Процентная ставка (APR)',
      loanTerm: 'Срок кредита',
      monthlyPayment: 'Ежемесячный платёж',
      loanAmount: 'Сумма кредита',
      totalInterest: 'Переплата за весь срок',
      principalShare: 'Основной долг',
      interestShare: 'Проценты',
      lockRate: 'Зафиксировать ставку',
    },
    wealth: {
      kicker: 'Private Wealth и управление капиталом',
      title: 'Дисциплинированное сохранение капитала на всех циклах рынка.',
      subtitle:
        'Персональные советники CFA, налоговая оптимизация Direct Indexing, суверенные облигации G10 и международное планирование наследия.',
      allocatorTitle: 'Модель распределения активов',
      allocatorSubtitle: 'Посмотрите структуру институциональных портфелей по профилю риска.',
      conservative: 'Сохранение капитала',
      balanced: 'Сбалансированный',
      growth: 'Глобальный рост',
      expectedRange: 'Исторический целевой диапазон',
      bookAdvisor: 'Назначить встречу с банкиром',
    },
    security: {
      kicker: 'Безопасность, защита вкладов и центр доверия',
      title: 'Институциональная защита в каждой международной транзакции.',
      subtitle:
        'Мультиюрисдикционная защита вкладов до $5 000 000 через 20 регулируемых международных банков-партнёров (EU DGS, FSCS и FDIC), аппаратные ключи Passkey и круглосуточный мониторинг.',
      checklistTitle: 'Интерактивная проверка защиты счёта',
      checklistSubtitle: 'Переключайте механизмы защиты BlueOcean для оценки уровня безопасности.',
      postureScore: 'Активный уровень защиты',
      reportFraud: 'Связаться с центром безопасности 24/7',
    },
    portal: {
      loginTitle: 'Портал клиента BlueOcean',
      loginSubtitle: 'Войдите по данным клиента или откройте готовый интерактивный демо-кабинет.',
      emailLabel: 'Электронная почта',
      passwordLabel: 'Пароль',
      signInCta: 'Безопасный вход',
      demoQuickCta: 'Мгновенный демо-вход',
      demoNotice: 'Все переводы, блокировки карт, лимиты и сейфы сохраняются локально в браузере.',
      welcomeBack: 'Добрый день,',
      totalLiquidity: 'Общая ликвидность',
      signOut: 'Выйти',
      tabOverview: 'Обзор',
      tabTransfers: 'Переводы',
      tabCards: 'Карты',
      tabVaults: 'Сейфы',
      tabLedger: 'История',
      tabSettings: 'Настройки',
      fromAccount: 'Счёт списания',
      toDestination: 'Назначение',
      amount: 'Сумма (USD)',
      memo: 'Назначение платежа',
      submitTransfer: 'Выполнить операцию',
      internalTransfer: 'Между счетами',
      externalWire: 'Внешний Wire / ACH',
      billPay: 'Оплата счетов',
      freezeCard: 'Заморозить карту',
      cardFrozen: 'Заморожена',
      cardActive: 'Активна',
      contactless: 'Бесконтактная оплата',
      international: 'Зарубежные операции',
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
      routingCopied: 'Номер ABA Routing скопирован.',
      transferSuccess: 'Операция выполнена и отражена в выписке.',
      insufficientFunds: 'Недостаточно средств на выбранном счёте.',
      vaultFunded: 'Сейф успешно пополнен с расчётного счёта.',
    },
    modal: {
      titleAccount: 'Открытие счёта BlueOcean',
      titleAdvisor: 'Запись на приватную консультацию',
      fullName: 'Полное имя',
      email: 'Электронная почта',
      product: 'Интересующий продукт',
      estimatedAmount: 'Ориентировочная сумма (USD)',
      submit: 'Отправить заявку',
      cancel: 'Отмена',
      successTitle: 'Заявка зарегистрирована',
      successBody: 'Наша международная команда онбординга закрепила ваши условия и отправила инструкции на почту.',
      referenceLabel: 'Номер подтверждения',
      done: 'Вернуться в BlueOcean',
    },
    footer: {
      tagline: 'Международный онлайн-банк для глобальной ликвидности, ясности и институционального доверия.',
      fdicNotice:
        'BlueOcean International Bank обеспечивает регулируемое мультивалютное обслуживание в более чем 42 странах. Защита вкладов до $5 000 000 обеспечивается через международную сеть банков-партнёров (включая EU DGS, FSCS и FDIC).',
      rights: '© 2026 BlueOcean International Bank. Все права защищены.',
      bankingCol: 'Банкинг',
      institutionalCol: 'Институционально',
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
      kicker: 'Zakelijk & Internationaal Treasury',
      title: 'Institutioneel liquiditeitsbeheer voor internationale bedrijven.',
      subtitle:
        'Combineer zakelijke betaalrekeningen, automatische 5,10% APY Treasury Sweeps, SEPA Instant, SWIFT GPI & Fedwire en 38 valuta’s.',
      operatingTitle: 'Zakelijke Betaalrekening Global',
      operatingDesc: 'Onbeperkte kosteloze lokale & internationale betalingen, dubbele autorisatie en directe boekhoudkoppeling.',
      treasuryTitle: 'Automatische Treasury Sweep',
      treasuryDesc: 'Overtollige kasmiddelen stromen automatisch naar G10-staatsobligaties en ons $5M partnerbankennetwerk tegen 5,10% APY.',
      fxTitle: 'Internationale FX-desk',
      fxDesc: 'Beheer USD, EUR, GBP, CHF, SGD en 33 andere valuta’s tegen scherpe interbancaire koersen.',
      calcTitle: 'Zakelijke Rendementscalculator',
      calcSubtitle: 'Bereken de jaarlijkse rente-opbrengst op uw zakelijke kasreserves.',
      cashReserves: 'Zakelijke kasreserves',
      annualTreasuryYield: 'Jaarrendement (5,10% APY)',
      monthlyYield: 'Geschatte maandelijkse opbrengst',
      fdicSweepCap: 'Partnerbank-bescherming',
      scheduleTreasury: 'Treasury-intake aanvragen',
    },
    cards: {
      kicker: 'Metalen Kaarten & Beloningen',
      title: 'Precisie-titanium, saffierblauwe en karmozijnrode kaarten.',
      subtitle:
        'Vervaardigd uit 18 gram geborsteld metaal met directe virtuele uitgifte, realtime limieten en onbeperkte punten.',
      selectFinish: 'Kies kaartuitvoering',
      titaniumName: 'Titanium Reserve Debit',
      oceanicName: 'Oceanic Sapphire Infinite',
      crimsonName: 'Crimson Apex Private',
      calcTitle: 'Jaarlijkse Beloningscalculator',
      calcSubtitle: 'Stem uw maandelijkse uitgaven af om uw geschatte voordeel te zien.',
      travelSpend: 'Reizen & hotels per maand',
      diningSpend: 'Horeca per maand',
      generalSpend: 'Dagelijks & zakelijk per maand',
      estimatedAnnualRewards: 'Geschatte jaarwaarde',
      requestCard: 'Deze kaart aanvragen',
      annualFee: 'Jaarbijdrage',
      aprRange: 'Variabele rente',
      metalSpec: 'Constructie',
    },
    loans: {
      kicker: 'Leningen & Hypotheken · Equal Housing Lender',
      title: 'Duidelijke financiering voor woningen, herfinanciering en liquiditeit.',
      subtitle:
        'Scherpe vaste en jumbo-hypotheekrentes, heldere afsluitkosten en digitale beoordeling binnen 72 uur.',
      calcTitle: 'Hypotheek- & Aflossingscalculator',
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
      lockRate: 'Rentegarantie aanvragen',
    },
    wealth: {
      kicker: 'Private Wealth & Vermogensbeheer',
      title: 'Gedisciplineerd vermogensbeheer door elke marktcyclus.',
      subtitle:
        'Persoonlijke CFA-adviseurs, fiscaal slimme Direct Indexing, op maat gemaakte obligatieladders en vermogensplanning.',
      allocatorTitle: 'Portefeuille-verkenner',
      allocatorSubtitle: 'Bekijk hoe BlueOcean Private Wealth portefeuilles per risicoprofiel opbouwt.',
      conservative: 'Vermogensbehoud',
      balanced: 'Gebalanceerd',
      growth: 'Wereldwijde Groei',
      expectedRange: 'Historische doelbandbreedte',
      bookAdvisor: 'Privébankier-gesprek plannen',
    },
    security: {
      kicker: 'Veiligheid, Depositobescherming & Vertrouwen',
      title: 'Institutionele bescherming in elke internationale transactie.',
      subtitle:
        'Meerlaagse depositobescherming tot $5.000.000 via 20 gereguleerde internationale partnerbanken (EU-DGS, FSCS & FDIC), beveiligd met hardware-passkeys.',
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
      demoNotice: 'Alle overboekingen, kaartblokkades, limieten en kluizen blijven lokaal opgeslagen.',
      welcomeBack: 'Goedendag,',
      totalLiquidity: 'Totale Netto Liquiditeit',
      signOut: 'Uitloggen',
      tabOverview: 'Overzicht',
      tabTransfers: 'Overboeken',
      tabCards: 'Kaarten',
      tabVaults: 'Spaarkluizen',
      tabLedger: 'Transacties',
      tabSettings: 'Instellingen',
      fromAccount: 'Bronrekening',
      toDestination: 'Bestemming',
      amount: 'Bedrag (USD)',
      memo: 'Omschrijving',
      submitTransfer: 'Transactie uitvoeren',
      internalTransfer: 'Eigen overboeking',
      externalWire: 'Externe Wire / ACH',
      billPay: 'Rekening betalen',
      freezeCard: 'Kaart bevriezen',
      cardFrozen: 'Bevroren',
      cardActive: 'Actief',
      contactless: 'Contactloos & Wallet',
      international: 'Internationaal gebruik',
      dailyLimit: 'Daglimiet',
      revealNumber: 'Gegevens tonen',
      hideNumber: 'Gegevens verbergen',
      fundVault: '+$500 vanaf Betaalrekening',
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
      routingCopied: 'ABA-routingnummer gekopieerd.',
      transferSuccess: 'Transactie verwerkt en toegevoegd aan uw overzicht.',
      insufficientFunds: 'Onvoldoende beschikbaar saldo op de bronrekening.',
      vaultFunded: 'Spaarkluis aangevuld vanaf Premier Betaalrekening.',
    },
    modal: {
      titleAccount: 'BlueOcean-rekening openen',
      titleAdvisor: 'Persoonlijk adviesgesprek plannen',
      fullName: 'Volledige naam',
      email: 'E-mailadres',
      product: 'Gewenst product',
      estimatedAmount: 'Geschatte inleg of mandaat (USD)',
      submit: 'Aanvraag versturen',
      cancel: 'Annuleren',
      successTitle: 'Aanvraag geregistreerd',
      successBody: 'Ons internationale onboardingteam heeft uw tariefprofiel gereserveerd en een bevestiging gemaild.',
      referenceLabel: 'Bevestigingsnummer',
      done: 'Terug naar BlueOcean',
    },
    footer: {
      tagline: 'Internationaal digitaal bankieren ontworpen voor mondiale liquiditeit, helderheid en vertrouwen.',
      fdicNotice:
        'BlueOcean International Bank biedt gereguleerd multivaluta-bankieren in ruim 42 landen. In aanmerking komende deposito’s zijn tot $5.000.000 beschermd via ons internationale partnerbankennetwerk (inclusief EU-DGS, FSCS en FDIC).',
      rights: '© 2026 BlueOcean International Bank. Alle rechten voorbehouden.',
      bankingCol: 'Bankieren',
      institutionalCol: 'Institutioneel',
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
      kicker: 'Empresas y Tesorería Internacional',
      title: 'Gestión institucional de tesorería para empresas globales.',
      subtitle:
        'Integra cuentas multi-entidad, barridos automáticos de tesorería al 5.10% APY, SEPA Instant, SWIFT GPI y Fedwire en 38 monedas.',
      operatingTitle: 'Cuenta Operativa Global',
      operatingDesc: 'Transferencias locales e internacionales sin comisiones ocultas, doble firma y sincronización contable.',
      treasuryTitle: 'Tesorería Sweep Automatizada',
      treasuryDesc: 'El efectivo excedente rinde 5.10% APY en letras soberanas G10 y nuestra red internacional de bancos socios de hasta $5M.',
      fxTitle: 'Mesa Global de Divisas',
      fxDesc: 'Opera en USD, EUR, GBP, CHF, SGD y 33 divisas adicionales con diferenciales interbancarios claros.',
      calcTitle: 'Calculadora de Rendimiento Corporativo',
      calcSubtitle: 'Estima el retorno anual sobre tus reservas operativas de efectivo.',
      cashReserves: 'Reservas de efectivo',
      annualTreasuryYield: 'Rendimiento anual (5.10% APY)',
      monthlyYield: 'Distribución mensual estimada',
      fdicSweepCap: 'Protección red socios',
      scheduleTreasury: 'Solicitar alta de tesorería',
    },
    cards: {
      kicker: 'Tarjetas Metálicas y Recompensas',
      title: 'Tarjetas fresadas en titanio, azul zafiro y carmesí reserva.',
      subtitle:
        'Fabricadas en metal aeroespacial de 18 gramos con emisión virtual inmediata, límites dinámicos y recompensas sin tope.',
      selectFinish: 'Selecciona acabado de tarjeta',
      titaniumName: 'Titanium Reserve Debit',
      oceanicName: 'Oceanic Sapphire Infinite',
      crimsonName: 'Crimson Apex Private',
      calcTitle: 'Estimador Anual de Recompensas',
      calcSubtitle: 'Ajusta tu gasto mensual para calcular el valor neto anual obtenido.',
      travelSpend: 'Viajes y hoteles mensuales',
      diningSpend: 'Restaurantes mensuales',
      generalSpend: 'Gastos cotidianos mensuales',
      estimatedAnnualRewards: 'Valor anual estimado',
      requestCard: 'Solicitar esta tarjeta',
      annualFee: 'Cuota anual',
      aprRange: 'APR variable',
      metalSpec: 'Construcción',
    },
    loans: {
      kicker: 'Préstamos e Hipotecas · Equal Housing Lender',
      title: 'Condiciones claras para vivienda, refinanciación y liquidez.',
      subtitle:
        'Tasas competitivas fijas y jumbo, costos de cierre transparentes y evaluación digital en 72 horas.',
      calcTitle: 'Calculadora Hipotecaria',
      calcSubtitle: 'Ajusta precio, entrada, tasa y plazo para calcular capital e intereses mensuales.',
      propertyPrice: 'Precio de la propiedad',
      downPayment: 'Pago inicial',
      interestRate: 'Tasa de interés (APR)',
      loanTerm: 'Plazo del préstamo',
      monthlyPayment: 'Cuota mensual estimada',
      loanAmount: 'Capital financiado',
      totalInterest: 'Interés total',
      principalShare: 'Capital',
      interestShare: 'Interés',
      lockRate: 'Solicitar bloqueo de tasa',
    },
    wealth: {
      kicker: 'Banca Privada y Asesoría Fiduciaria',
      title: 'Gestión patrimonial disciplinada a través de cada ciclo.',
      subtitle:
        'Asesores CFA dedicados, indexación directa fiscalmente eficiente, escaleras de bonos del Tesoro y planificación patrimonial.',
      allocatorTitle: 'Explorador de Asignación de Cartera',
      allocatorSubtitle: 'Explora cómo BlueOcean estructura mandatos institucionales según perfil de riesgo.',
      conservative: 'Preservación de Capital',
      balanced: 'Equilibrado',
      growth: 'Crecimiento Global',
      expectedRange: 'Rango objetivo histórico',
      bookAdvisor: 'Agendar sesión con banquero privado',
    },
    security: {
      kicker: 'Seguridad, Protección de Depósitos y Confianza',
      title: 'Protección institucional integrada en cada movimiento internacional.',
      subtitle:
        'Protección de depósitos hasta $5,000,000 mediante 20 bancos socios internacionales regulados (EU DGS, FSCS y FDIC), resguardados con llaves Passkey.',
      checklistTitle: 'Evaluador Interactivo de Seguridad',
      checklistSubtitle: 'Activa cada defensa de BlueOcean para medir tu postura de protección.',
      postureScore: 'Cobertura de defensa activa',
      reportFraud: 'Contactar mesa de seguridad 24/7',
    },
    portal: {
      loginTitle: 'Portal del Cliente BlueOcean',
      loginSubtitle: 'Inicia sesión o accede al entorno bancario interactivo precargado.',
      emailLabel: 'Correo electrónico',
      passwordLabel: 'Clave de acceso',
      signInCta: 'Iniciar sesión segura',
      demoQuickCta: 'Acceso Demo en un clic',
      demoNotice: 'Todas las transferencias, bloqueos de tarjeta, límites y bóvedas se guardan localmente.',
      welcomeBack: 'Buen día,',
      totalLiquidity: 'Liquidez Neta Total',
      signOut: 'Cerrar sesión',
      tabOverview: 'Resumen',
      tabTransfers: 'Transferencias',
      tabCards: 'Tarjetas',
      tabVaults: 'Bóvedas',
      tabLedger: 'Movimientos',
      tabSettings: 'Ajustes',
      fromAccount: 'Cuenta de origen',
      toDestination: 'Destino',
      amount: 'Monto (USD)',
      memo: 'Referencia / Concepto',
      submitTransfer: 'Ejecutar operación',
      internalTransfer: 'Transferencia interna',
      externalWire: 'Wire / ACH externo',
      billPay: 'Pago de facturas',
      freezeCard: 'Congelar tarjeta',
      cardFrozen: 'Congelada',
      cardActive: 'Activa',
      contactless: 'Sin contacto y Wallet',
      international: 'Gasto internacional',
      dailyLimit: 'Límite diario',
      revealNumber: 'Ver datos',
      hideNumber: 'Ocultar datos',
      fundVault: 'Agregar $500 desde Corriente',
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
      routingCopied: 'Número ABA Routing copiado.',
      transferSuccess: 'Operación liquidada y registrada en el historial.',
      insufficientFunds: 'Saldo disponible insuficiente en la cuenta origen.',
      vaultFunded: 'Bóveda financiada desde Cuenta Corriente Premier.',
    },
    modal: {
      titleAccount: 'Abrir cuenta en BlueOcean',
      titleAdvisor: 'Agendar consulta privada',
      fullName: 'Nombre completo',
      email: 'Correo electrónico',
      product: 'Producto de interés',
      estimatedAmount: 'Depósito o mandato estimado (USD)',
      submit: 'Enviar solicitud',
      cancel: 'Cancelar',
      successTitle: 'Solicitud registrada',
      successBody: 'Nuestro equipo internacional ha reservado tu perfil de tasas y enviado las instrucciones por correo.',
      referenceLabel: 'Referencia de confirmación',
      done: 'Volver a BlueOcean',
    },
    footer: {
      tagline: 'Banca digital internacional en la frontera global, diseñada para liquidez, claridad y confianza.',
      fdicNotice:
        'BlueOcean International Bank opera custodia multidivisa regulada en más de 42 países. Los depósitos elegibles cuentan con cobertura combinada de hasta $5,000,000 mediante nuestra red internacional de bancos socios (incluidos EU DGS, FSCS y FDIC).',
      rights: '© 2026 BlueOcean International Bank. Todos los derechos reservados.',
      bankingCol: 'Banca',
      institutionalCol: 'Institucional',
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
      kicker: 'Empresas e Tesouraria Internacional',
      title: 'Gestão institucional de tesouraria para empresas globais.',
      subtitle:
        'Reúna contas empresariais, Treasury Sweep automático de 5,10% APY, SEPA Instant, SWIFT GPI e Fedwire em 38 moedas.',
      operatingTitle: 'Conta Operacional Global',
      operatingDesc: 'Transferências locais e internacionais sem tarifas ocultas, aprovação dupla e integração contábil direta.',
      treasuryTitle: 'Treasury Sweep Automatizado',
      treasuryDesc: 'Caixa ocioso aplicado automaticamente em títulos soberanos G10 e nossa rede internacional de bancos parceiros de até US$ 5M a 5,10% APY.',
      fxTitle: 'Mesa Global de Câmbio',
      fxDesc: 'Mantenha e envie USD, EUR, GBP, CHF, SGD e outras 33 moedas com spreads interbancários transparentes.',
      calcTitle: 'Simulador de Rendimento Corporativo',
      calcSubtitle: 'Estime o retorno anual das reservas de caixa da sua empresa.',
      cashReserves: 'Reservas em caixa',
      annualTreasuryYield: 'Retorno anual (5,10% APY)',
      monthlyYield: 'Distribuição mensal estimada',
      fdicSweepCap: 'Proteção rede parceira',
      scheduleTreasury: 'Solicitar onboarding de tesouraria',
    },
    cards: {
      kicker: 'Cartões de Metal e Recompensas',
      title: 'Cartões fresados em titânio, azul safira e carmesim reserva.',
      subtitle:
        'Construídos em metal aeroespacial de 18 gramas com emissão virtual instantânea, controles em tempo real e pontos ilimitados.',
      selectFinish: 'Selecione o acabamento',
      titaniumName: 'Titanium Reserve Debit',
      oceanicName: 'Oceanic Sapphire Infinite',
      crimsonName: 'Crimson Apex Private',
      calcTitle: 'Calculadora Anual de Recompensas',
      calcSubtitle: 'Ajuste seus gastos mensais para calcular o valor anual estimado.',
      travelSpend: 'Viagens e hotéis por mês',
      diningSpend: 'Restaurantes por mês',
      generalSpend: 'Gastos diários por mês',
      estimatedAnnualRewards: 'Valor anual estimado',
      requestCard: 'Solicitar este cartão',
      annualFee: 'Anuidade',
      aprRange: 'APR variável',
      metalSpec: 'Construção',
    },
    loans: {
      kicker: 'Empréstimos e Hipotecas · Equal Housing Lender',
      title: 'Termos claros para imóveis, refinanciamento e liquidez.',
      subtitle:
        'Taxas fixas e jumbo competitivas, custos de fechamento abertos e análise digital em 72 horas.',
      calcTitle: 'Calculadora de Hipoteca',
      calcSubtitle: 'Ajuste valor do imóvel, entrada, taxa e prazo para ver parcela mensal e juros.',
      propertyPrice: 'Valor do imóvel',
      downPayment: 'Entrada',
      interestRate: 'Taxa de juros (APR)',
      loanTerm: 'Prazo',
      monthlyPayment: 'Parcela mensal estimada',
      loanAmount: 'Valor financiado',
      totalInterest: 'Juros totais',
      principalShare: 'Principal',
      interestShare: 'Juros',
      lockRate: 'Solicitar trava de taxa',
    },
    wealth: {
      kicker: 'Private Wealth e Consultoria Fiduciária',
      title: 'Gestão patrimonial disciplinada em todos os ciclos.',
      subtitle:
        'Consultores CFA dedicados, indexação direta com eficiência fiscal, escadas de títulos do Tesouro e planejamento sucessório.',
      allocatorTitle: 'Explorador de Alocação de Carteira',
      allocatorSubtitle: 'Veja como o BlueOcean estrutura mandatos institucionais por perfil de risco.',
      conservative: 'Preservação de Capital',
      balanced: 'Equilibrado',
      growth: 'Crescimento Global',
      expectedRange: 'Faixa histórica alvo',
      bookAdvisor: 'Agendar reunião com private banker',
    },
    security: {
      kicker: 'Segurança, Proteção de Depósitos e Confiança',
      title: 'Proteção institucional integrada em cada transação internacional.',
      subtitle:
        'Proteção de depósitos até US$ 5.000.000 em 20 bancos parceiros internacionais regulados (EU DGS, FSCS e FDIC), protegidos por chaves Passkey.',
      checklistTitle: 'Avaliador Interativo de Segurança',
      checklistSubtitle: 'Ative cada proteção do BlueOcean para verificar sua cobertura.',
      postureScore: 'Cobertura de defesa ativa',
      reportFraud: 'Contatar central de segurança 24/7',
    },
    portal: {
      loginTitle: 'Portal do Cliente BlueOcean',
      loginSubtitle: 'Entre com suas credenciais ou explore o ambiente bancário interativo de demonstração.',
      emailLabel: 'E-mail do cliente',
      passwordLabel: 'Senha',
      signInCta: 'Entrar com segurança',
      demoQuickCta: 'Acesso Demo em 1 clique',
      demoNotice: 'Todas as transferências, bloqueios, limites e cofres ficam salvos localmente no navegador.',
      welcomeBack: 'Bom dia,',
      totalLiquidity: 'Liquidez Líquida Total',
      signOut: 'Sair',
      tabOverview: 'Visão Geral',
      tabTransfers: 'Transferências',
      tabCards: 'Cartões',
      tabVaults: 'Cofres',
      tabLedger: 'Extrato',
      tabSettings: 'Ajustes',
      fromAccount: 'Conta de origem',
      toDestination: 'Destino',
      amount: 'Valor (USD)',
      memo: 'Descrição / Referência',
      submitTransfer: 'Executar transação',
      internalTransfer: 'Transferência interna',
      externalWire: 'Wire / ACH externo',
      billPay: 'Pagar contas',
      freezeCard: 'Congelar cartão',
      cardFrozen: 'Congelado',
      cardActive: 'Ativo',
      contactless: 'Aproximação e Wallet',
      international: 'Uso internacional',
      dailyLimit: 'Limite diário',
      revealNumber: 'Mostrar dados',
      hideNumber: 'Ocultar dados',
      fundVault: 'Adicionar US$ 500 da Corrente',
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
      routingCopied: 'Número ABA Routing copiado.',
      transferSuccess: 'Transação liquidada e registrada no extrato.',
      insufficientFunds: 'Saldo disponível insuficiente na conta de origem.',
      vaultFunded: 'Cofre reforçado a partir da Conta Corrente Premier.',
    },
    modal: {
      titleAccount: 'Abrir conta BlueOcean',
      titleAdvisor: 'Agendar consulta privada',
      fullName: 'Nome completo',
      email: 'Endereço de e-mail',
      product: 'Produto de interesse',
      estimatedAmount: 'Depósito ou mandato estimado (USD)',
      submit: 'Enviar solicitação',
      cancel: 'Cancelar',
      successTitle: 'Solicitação registrada',
      successBody: 'Nossa equipe internacional reservou seu perfil de taxas e enviou as instruções para seu e-mail.',
      referenceLabel: 'Código de confirmação',
      done: 'Voltar ao BlueOcean',
    },
    footer: {
      tagline: 'Banco digital internacional na fronteira global, projetado para liquidez, clareza e confiança.',
      fdicNotice:
        'BlueOcean International Bank opera custódia multimoeda regulada em mais de 42 países. Depósitos elegíveis contam com proteção combinada de até US$ 5.000.000 em nossa rede internacional de bancos parceiros (incluindo EU DGS, FSCS e FDIC).',
      rights: '© 2026 BlueOcean International Bank. Todos os direitos reservados.',
      bankingCol: 'Banco',
      institutionalCol: 'Institucional',
      supportCol: 'Suporte',
    },
  },
};
