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
      security: 'Security & FDIC',
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
      subtitle: 'BlueOcean Bank, N.A. · Member FDIC',
      skip: 'Skip intro',
    },
    hero: {
      kicker: 'BlueOcean Bank, N.A. · Global Online Banking · Member FDIC',
      title: 'Borderless online banking built for clarity and global trust.',
      description:
        'Open, manage, and move your money across borders from one modern online bank—engineered for instant international transfers, multi-currency accounts, 24/7 digital security, and everyday financial clarity.',
      primaryCta: 'Open an Account',
      secondaryCta: 'Enter Customer Portal',
      stat1Label: 'High-Yield Savings',
      stat1Value: '4.85% APY',
      stat2Label: 'Treasury Sweep',
      stat2Value: '5.10% APY',
      stat3Label: 'FDIC Network Coverage',
      stat3Value: '$5.0M',
      stat4Label: 'Wire Settlement',
      stat4Value: 'Same-Day',
    },
    home: {
      divisionsTitle: 'Six specialized banking divisions, one unified ledger.',
      divisionsSubtitle:
        'Every product is engineered with transparent rates, zero monthly maintenance fees, and direct U.S. banking rails.',
      explore: 'Explore division',
      architecturalTitle: 'Engineered for transparency, audited for resilience.',
      architecturalBody:
        'Unlike legacy branch banks weighed down by hidden account fees, BlueOcean combines real-time Federal Reserve settlement rails with dedicated U.S. relationship teams and multi-bank FDIC deposit sweeps.',
      architecturalCta: 'Inspect Security & FDIC Architecture',
      quickYieldTitle: 'See what your liquid cash earns at BlueOcean.',
      quickYieldSub: 'Drag the deposit slider to compare BlueOcean 4.85% APY against the 0.45% U.S. national savings average.',
      depositLabel: 'Liquid Cash Deposit',
      projectedAnnual: 'BlueOcean Annual Earnings',
      vsNationalAvg: 'Additional yield vs. national avg',
      testimonialsTitle: 'Trusted by depositors, founders, and family offices.',
      testimonialsSub: 'Verified client outcomes across personal savings, commercial treasury, and private lending.',
      ctaTitle: 'Move your banking to calmer, higher-yield waters.',
      ctaDesc: 'Open a BlueOcean account in under four minutes with instant virtual card issuance and zero opening minimums.',
      ctaPrimary: 'Open Account Today',
      ctaSecondary: 'Explore Customer Portal',
    },
    personal: {
      kicker: 'Personal Banking · Member FDIC',
      title: 'Everyday checking and high-yield savings without hidden friction.',
      subtitle:
        'Earn 4.85% APY on savings, access 55,000+ fee-free ATMs nationwide, receive direct deposits up to two days early, and organize goals into dedicated vaults.',
      checkingTitle: 'Premier Checking',
      checkingDesc: '0.50% APY on everyday balances, zero overdraft fees, unlimited ATM fee rebates, and instant virtual titanium debit cards.',
      savingsTitle: 'Oceanic High-Yield Savings',
      savingsDesc: '4.85% APY compounded daily with zero balance tiers, zero monthly fees, and instant transfers to checking.',
      cdTitle: 'Fixed-Term Certificates',
      cdDesc: 'Lock in up to 5.05% APY across 6, 12, or 24-month terms with automatic maturity notifications and grace-period flexibility.',
      calcTitle: 'Compound Savings Simulator',
      calcSubtitle: 'Model your savings trajectory at BlueOcean’s 4.85% APY with recurring monthly contributions.',
      initialDeposit: 'Initial Deposit',
      monthlyContribution: 'Monthly Contribution',
      horizonYears: 'Time Horizon',
      yearsUnit: 'Years',
      projectedBalance: 'Projected Balance',
      interestEarned: 'Total Interest Earned',
      applyNow: 'Open Personal Account',
      comparisonTitle: 'Transparent Terms vs. Legacy National Banks',
      featureCol: 'Account Feature',
      blueOceanCol: 'BlueOcean Premier',
      traditionalCol: 'Traditional Big Bank',
    },
    business: {
      kicker: 'Business & Commercial Treasury',
      title: 'Institutional treasury management for operating companies.',
      subtitle:
        'Unify multi-entity checking, automated 5.10% APY Treasury Sweeps, same-day Fedwire & ACH, role-based team cards, and 38-currency FX execution.',
      operatingTitle: 'Commercial Operating Checking',
      operatingDesc: 'Unlimited fee-free domestic ACH, free incoming wires, granular dual-approval controls, and native accounting sync.',
      treasuryTitle: 'Automated Treasury Sweep',
      treasuryDesc: 'Idle operating cash sweeps overnight into U.S. Treasury bills and an extended $5M FDIC partner bank network at 5.10% APY.',
      fxTitle: 'Global FX & Trade Desk',
      fxDesc: 'Hold, convert, and wire across USD, EUR, GBP, CHF, and 34 additional currencies with transparent interbank spreads.',
      calcTitle: 'Corporate Cash Yield Estimator',
      calcSubtitle: 'Estimate annual non-dilutive yield on idle operating reserves.',
      cashReserves: 'Operating Cash Reserves',
      annualTreasuryYield: 'Annual Treasury Return (5.10% APY)',
      monthlyYield: 'Estimated Monthly Distribution',
      fdicSweepCap: 'FDIC Network Protection',
      scheduleTreasury: 'Request Treasury Onboarding',
    },
    cards: {
      kicker: 'Machined Metal Cards & Rewards',
      title: 'Precision-milled titanium, sapphire, and crimson reserve cards.',
      subtitle:
        'Engineered from 18-gram brushed aerospace metal with instant virtual issuance, dynamic spend controls, and uncapped travel and cash rewards.',
      selectFinish: 'Select Card Architecture',
      titaniumName: 'Titanium Reserve Debit',
      oceanicName: 'Oceanic Sapphire Infinite',
      crimsonName: 'Crimson Apex Private',
      calcTitle: 'Annual Rewards Estimator',
      calcSubtitle: 'Adjust your monthly spend categories to calculate net rewards earned on the selected metal card.',
      travelSpend: 'Monthly Travel & Hotels',
      diningSpend: 'Monthly Dining & Hospitality',
      generalSpend: 'Monthly Everyday & Business',
      estimatedAnnualRewards: 'Estimated Annual Value',
      requestCard: 'Request This Card',
      annualFee: 'Annual Fee',
      aprRange: 'Variable APR',
      metalSpec: 'Construction',
    },
    loans: {
      kicker: 'Loans & Residential Mortgages · Equal Housing Lender',
      title: 'Clear lending terms for homes, refinancing, and liquidity.',
      subtitle:
        'Competitive fixed and jumbo mortgage rates, transparent closing costs, digital underwriting in 72 hours, and relationship rate discounts for BlueOcean depositors.',
      calcTitle: 'Mortgage & Amortization Calculator',
      calcSubtitle: 'Adjust purchase price, down payment, rate, and term to inspect monthly principal and interest.',
      propertyPrice: 'Property Price',
      downPayment: 'Down Payment',
      interestRate: 'Interest Rate (APR)',
      loanTerm: 'Loan Term',
      monthlyPayment: 'Estimated Monthly P&I',
      loanAmount: 'Total Loan Principal',
      totalInterest: 'Lifetime Interest',
      principalShare: 'Principal',
      interestShare: 'Interest',
      lockRate: 'Request Rate Lock',
    },
    wealth: {
      kicker: 'Private Wealth & Fiduciary Advisory',
      title: 'Disciplined capital stewardship across market cycles.',
      subtitle:
        'Dedicated CFA charterholders, tax-loss harvesting direct indexing, custom U.S. Treasury ladders, and estate coordination—structured on a transparent fiduciary fee.',
      allocatorTitle: 'Portfolio Allocation Explorer',
      allocatorSubtitle: 'Preview how BlueOcean Private Wealth structures institutional mandates across risk profiles.',
      conservative: 'Capital Preservation',
      balanced: 'Core Balanced',
      growth: 'Global Growth',
      expectedRange: 'Historical Target Band',
      bookAdvisor: 'Schedule Private Banker Briefing',
    },
    security: {
      kicker: 'Security, FDIC Insurance & Trust Center',
      title: 'Institutional protection engineered into every transaction.',
      subtitle:
        'Deposits insured up to $250,000 directly via FDIC and up to $5,000,000 through our insured sweep network, guarded by hardware passkeys and 24/7 U.S. fraud specialists.',
      checklistTitle: 'Interactive Account Protection Evaluator',
      checklistSubtitle: 'Toggle each BlueOcean safeguard to verify your personal security posture.',
      postureScore: 'Active Defense Coverage',
      reportFraud: 'Contact 24/7 Security Desk',
    },
    portal: {
      loginTitle: 'BlueOcean Customer Portal',
      loginSubtitle: 'Sign in with your credentials or explore the preloaded live banking workspace.',
      emailLabel: 'Customer Email',
      passwordLabel: 'Passcode',
      signInCta: 'Sign In Securely',
      demoQuickCta: 'One-Click Demo Access',
      demoNotice: 'All transfers, card locks, limits, and vaults persist locally in your browser.',
      welcomeBack: 'Good day,',
      totalLiquidity: 'Total Net Liquidity',
      signOut: 'Sign Out',
      tabOverview: 'Overview',
      tabTransfers: 'Transfers & Pay',
      tabCards: 'Metal Cards',
      tabVaults: 'Savings Vaults',
      tabLedger: 'Ledger',
      tabSettings: 'Settings',
      fromAccount: 'Source Account',
      toDestination: 'Destination',
      amount: 'Amount (USD)',
      memo: 'Reference / Memo',
      submitTransfer: 'Execute Transaction',
      internalTransfer: 'Internal Transfer',
      externalWire: 'External Wire / ACH',
      billPay: 'Bill Pay',
      freezeCard: 'Freeze Card',
      cardFrozen: 'Frozen',
      cardActive: 'Active',
      contactless: 'Contactless & Wallet',
      international: 'International Spend',
      dailyLimit: 'Daily Spend Limit',
      revealNumber: 'Reveal Details',
      hideNumber: 'Mask Details',
      fundVault: 'Add $500 from Checking',
      createVault: 'Create New Vault',
      vaultName: 'Vault Title',
      targetAmount: 'Target Goal (USD)',
      searchPlaceholder: 'Search merchant, category, or reference...',
      allAccounts: 'All Accounts',
      allTypes: 'All Activity',
      credits: 'Deposits',
      debits: 'Withdrawals',
      exportCsv: 'Export CSV',
      emptyLedger: 'No transactions match your current filters.',
      resetFilters: 'Reset Filters',
      resetDemo: 'Reset Demo Accounts',
      routingCopied: 'ABA Routing number copied to clipboard.',
      transferSuccess: 'Transaction settled and recorded to ledger.',
      insufficientFunds: 'Insufficient available balance in source account.',
      vaultFunded: 'Savings vault funded from Premier Checking.',
    },
    modal: {
      titleAccount: 'Open a BlueOcean Account',
      titleAdvisor: 'Schedule a Private Consultation',
      fullName: 'Full Legal Name',
      email: 'Email Address',
      product: 'Primary Product Interest',
      estimatedAmount: 'Estimated Deposit or Mandate (USD)',
      submit: 'Submit Application',
      cancel: 'Cancel',
      successTitle: 'Application Registered',
      successBody: 'Our U.S. onboarding desk has reserved your rate profile and sent verification instructions to your email.',
      referenceLabel: 'Confirmation Reference',
      done: 'Return to BlueOcean',
    },
    footer: {
      tagline: 'Modern American digital banking engineered for liquidity, clarity, and institutional trust.',
      fdicNotice:
        'BlueOcean Bank, N.A. is a Member FDIC and Equal Housing Lender. Standard deposit insurance is $250,000 per depositor, per ownership category; extended coverage up to $5,000,000 is available via the BlueOcean Insured Deposit Sweep Network.',
      rights: '© 2026 BlueOcean Bank, N.A. All rights reserved.',
      bankingCol: 'Banking',
      institutionalCol: 'Institutional',
      supportCol: 'Client Support',
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
      security: 'Sicherheit & FDIC',
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
      subtitle: 'BlueOcean Bank, N.A. · Mitglied der FDIC',
      skip: 'Überspringen',
    },
    hero: {
      kicker: 'BlueOcean Bank, N.A. · Internationales Online-Banking · FDIC',
      title: 'Grenzenloses Online-Banking für Klarheit und globales Vertrauen.',
      description:
        'Eröffnen, verwalten und bewegen Sie Ihr Geld weltweit über eine moderne Online-Bank – mit internationalen Sofortüberweisungen, Mehrwährungskonten und digitaler 24/7-Sicherheit.',
      primaryCta: 'Konto eröffnen',
      secondaryCta: 'Zum Kundenportal',
      stat1Label: 'Tagesgeldzins',
      stat1Value: '4,85% APY',
      stat2Label: 'Treasury Sweep',
      stat2Value: '5,10% APY',
      stat3Label: 'FDIC-Netzwerkschutz',
      stat3Value: '5,0 Mio. $',
      stat4Label: 'Überweisung',
      stat4Value: 'Taggenau',
    },
    home: {
      divisionsTitle: 'Sechs spezialisierte Bankbereiche, ein einheitliches System.',
      divisionsSubtitle:
        'Jedes Produkt bietet transparente Konditionen, null Kontoführungsgebühren und direkte US-Zahlungsverkehrsanbindung.',
      explore: 'Bereich entdecken',
      architecturalTitle: 'Auf Transparenz ausgelegt, auf Stabilität geprüft.',
      architecturalBody:
        'Im Gegensatz zu klassischen Filialbanken mit versteckten Gebühren verbindet BlueOcean Echtzeit-Zahlungsverkehr der Federal Reserve mit persönlichen Beratern und mehrstufiger FDIC-Einlagensicherung.',
      architecturalCta: 'Sicherheitsarchitektur prüfen',
      quickYieldTitle: 'Berechnen Sie den Ertrag Ihrer Liquidität.',
      quickYieldSub: 'Vergleichen Sie 4,85 % APY bei BlueOcean mit dem US-Durchschnitt von 0,45 %.',
      depositLabel: 'Liquide Einlage',
      projectedAnnual: 'Jährlicher Ertrag bei BlueOcean',
      vsNationalAvg: 'Mehrertrag gegenüber Durchschnitt',
      testimonialsTitle: 'Vertrauen von Sparern, Gründern und Family Offices.',
      testimonialsSub: 'Verifizierte Ergebnisse aus Privatkundengeschäft, Corporate Treasury und Finanzierung.',
      ctaTitle: 'Wechseln Sie zu ruhigeren, renditestärkeren Gewässern.',
      ctaDesc: 'Eröffnen Sie Ihr BlueOcean-Konto in unter vier Minuten mit sofortiger virtueller Karte.',
      ctaPrimary: 'Jetzt Konto eröffnen',
      ctaSecondary: 'Demo-Kundenportal testen',
    },
    personal: {
      kicker: 'Privatkunden · Mitglied FDIC',
      title: 'Giro- und Sparkonten ohne versteckte Gebühren.',
      subtitle:
        'Sichern Sie sich 4,85 % APY auf Ersparnisse, nutzen Sie über 55.000 gebührenfreie Geldautomaten und strukturieren Sie Sparziele in eigenen Tresoren.',
      checkingTitle: 'Premier Girokonto',
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
      kicker: 'Geschäftskunden & Corporate Treasury',
      title: 'Institutionelles Liquiditätsmanagement für Unternehmen.',
      subtitle:
        'Vereinen Sie Geschäftskonten, automatische 5,10 %-APY-Treasury-Sweeps, taggleiche Fedwire-Transfers und Devisenhandel in 38 Währungen.',
      operatingTitle: 'Geschäfts-Girokonto',
      operatingDesc: 'Unbegrenzte gebührenfreie US-ACH-Transfers, Vier-Augen-Freigaben und direkte Buchhaltungsintegration.',
      treasuryTitle: 'Automatischer Treasury-Sweep',
      treasuryDesc: 'Freie Liquidität wird über Nacht in US-Staatsanleihen und das 5-Mio.-$-FDIC-Netzwerk zu 5,10 % APY angelegt.',
      fxTitle: 'Globaler Devisen-Desk',
      fxDesc: 'Halten und überweisen Sie USD, EUR, GBP, CHF und 34 weitere Währungen zu Interbank-Spreads.',
      calcTitle: 'Unternehmens-Renditerechner',
      calcSubtitle: 'Berechnen Sie den jährlichen Zinsertrag Ihrer betrieblichen Liquiditätsreserven.',
      cashReserves: 'Betriebliche Liquiditätsreserve',
      annualTreasuryYield: 'Jährlicher Treasury-Ertrag (5,10 % APY)',
      monthlyYield: 'Geschätzte monatliche Ausschüttung',
      fdicSweepCap: 'FDIC-Netzwerkschutz',
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
        'Persönliche CFA-Berater, steueroptimiertes Direct Indexing, maßgeschneiderte US-Anleihenleitern und Nachlassplanung.',
      allocatorTitle: 'Portfolio-Allokations-Explorer',
      allocatorSubtitle: 'Sehen Sie, wie BlueOcean Private Wealth Mandate nach Risikoprofil strukturiert.',
      conservative: 'Kapitalerhalt',
      balanced: 'Ausgewogen',
      growth: 'Globales Wachstum',
      expectedRange: 'Historischer Zielkorridor',
      bookAdvisor: 'Private-Banker-Gespräch buchen',
    },
    security: {
      kicker: 'Sicherheit, FDIC-Schutz & Vertrauen',
      title: 'Institutioneller Schutz in jeder einzelnen Transaktion.',
      subtitle:
        'Einlagensicherung bis 250.000 $ direkt über die FDIC und bis 5.000.000 $ im Sweep-Netzwerk, geschützt durch Hardware-Passkeys.',
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
      successBody: 'Unser US-Onboarding-Team hat Ihre Konditionen reserviert und eine Bestätigung per E-Mail gesendet.',
      referenceLabel: 'Bestätigungsreferenz',
      done: 'Zurück zu BlueOcean',
    },
    footer: {
      tagline: 'Modernes amerikanisches Digital-Banking für Liquidität, Klarheit und institutionelles Vertrauen.',
      fdicNotice:
        'BlueOcean Bank, N.A. ist Mitglied der FDIC und Equal Housing Lender. Standard-Einlagensicherung 250.000 $ pro Einleger; erweiterter Schutz bis 5.000.000 $ über das Sweep-Netzwerk.',
      rights: '© 2026 BlueOcean Bank, N.A. Alle Rechte vorbehalten.',
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
      subtitle: 'BlueOcean Bank, N.A. · Участник FDIC',
      skip: 'Пропустить',
    },
    hero: {
      kicker: 'BlueOcean Bank, N.A. · Международный онлайн-банк · FDIC',
      title: 'Онлайн-банк без границ для ясности и глобального доверия.',
      description:
        'Открывайте счета, управляйте сбережениями и переводите средства по всему миру из одного современного онлайн-банка с мультивалютными счетами и круглосуточной цифровой защитой.',
      primaryCta: 'Открыть счёт',
      secondaryCta: 'Войти в портал',
      stat1Label: 'Накопительный счёт',
      stat1Value: '4.85% APY',
      stat2Label: 'Treasury Sweep',
      stat2Value: '5.10% APY',
      stat3Label: 'Покрытие FDIC',
      stat3Value: '$5.0M',
      stat4Label: 'Переводы Wire',
      stat4Value: 'В тот же день',
    },
    home: {
      divisionsTitle: 'Шесть банковских направлений на единой платформе.',
      divisionsSubtitle:
        'Прозрачные ставки, отсутствие ежемесячных комиссий и прямые расчётные каналы США.',
      explore: 'Подробнее',
      architecturalTitle: 'Создан для прозрачности, проверен на устойчивость.',
      architecturalBody:
        'В отличие от традиционных банков со скрытыми комиссиями, BlueOcean объединяет расчёты Федеральной резервной системы США, персональную поддержку и расширенное страхование вкладов FDIC.',
      architecturalCta: 'Изучить архитектуру защиты',
      quickYieldTitle: 'Рассчитайте доходность ваших свободных средств.',
      quickYieldSub: 'Сравните ставку BlueOcean 4.85% APY со средним показателем по США (0.45%).',
      depositLabel: 'Сумма размещения',
      projectedAnnual: 'Годовой доход в BlueOcean',
      vsNationalAvg: 'Дополнительный доход к рынку',
      testimonialsTitle: 'Нам доверяют вкладчики, основатели и семейные офисы.',
      testimonialsSub: 'Реальные результаты клиентов в личных сбережениях, казначействе и финансировании.',
      ctaTitle: 'Переведите финансы в спокойную и доходную гавань.',
      ctaDesc: 'Откройте счёт BlueOcean менее чем за четыре минуты с мгновенным выпуском виртуальной карты.',
      ctaPrimary: 'Открыть счёт сегодня',
      ctaSecondary: 'Открыть демо-портал',
    },
    personal: {
      kicker: 'Частным клиентам · Участник FDIC',
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
      kicker: 'Бизнес и корпоративное казначейство',
      title: 'Институциональное управление ликвидностью для компаний.',
      subtitle:
        'Единые операционные счета, автоматический Treasury Sweep 5.10% APY, переводы Fedwire и ACH день в день и валютный деск на 38 валют.',
      operatingTitle: 'Корпоративный расчётный счёт',
      operatingDesc: 'Бесплатные внутренние ACH-переводы, двойное подтверждение платежей и интеграция с учётом.',
      treasuryTitle: 'Автоматический Treasury Sweep',
      treasuryDesc: 'Свободный остаток автоматически размещается в казначейские векселя США и сеть FDIC до $5 млн под 5.10% APY.',
      fxTitle: 'Глобальный валютный деск',
      fxDesc: 'Храните и переводите USD, EUR, GBP, CHF и ещё 34 валюты по прозрачным межбанковским курсам.',
      calcTitle: 'Калькулятор доходности казначейства',
      calcSubtitle: 'Оцените годовой доход на свободные корпоративные резервы.',
      cashReserves: 'Корпоративные резервы',
      annualTreasuryYield: 'Годовой доход (5.10% APY)',
      monthlyYield: 'Ежемесячное начисление',
      fdicSweepCap: 'Защита сети FDIC',
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
        'Персональные советники CFA, налоговая оптимизация Direct Indexing, лестницы казначейских облигаций США и планирование наследия.',
      allocatorTitle: 'Модель распределения активов',
      allocatorSubtitle: 'Посмотрите структуру институциональных портфелей по профилю риска.',
      conservative: 'Сохранение капитала',
      balanced: 'Сбалансированный',
      growth: 'Глобальный рост',
      expectedRange: 'Исторический целевой диапазон',
      bookAdvisor: 'Назначить встречу с банкиром',
    },
    security: {
      kicker: 'Безопасность, FDIC и центр доверия',
      title: 'Институциональная защита в каждой транзакции.',
      subtitle:
        'Страхование FDIC до $250 000 напрямую и до $5 000 000 через партнёрскую сеть, аппаратные ключи Passkey и круглосуточный центр мониторинга.',
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
      successBody: 'Команда онбординга в США закрепила ваши условия и отправила инструкции на почту.',
      referenceLabel: 'Номер подтверждения',
      done: 'Вернуться в BlueOcean',
    },
    footer: {
      tagline: 'Современный американский онлайн-банк для ликвидности, ясности и институционального доверия.',
      fdicNotice:
        'BlueOcean Bank, N.A. — участник FDIC и Equal Housing Lender. Базовое страхование вкладов — $250 000; расширенное покрытие до $5 000 000 доступно через сеть Insured Deposit Sweep.',
      rights: '© 2026 BlueOcean Bank, N.A. Все права защищены.',
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
      security: 'Veiligheid & FDIC',
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
      subtitle: 'BlueOcean Bank, N.A. · Lid van FDIC',
      skip: 'Overslaan',
    },
    hero: {
      kicker: 'BlueOcean Bank, N.A. · Internationaal Online Bankieren · FDIC',
      title: 'Grenzeloos online bankieren voor helderheid en vertrouwen.',
      description:
        'Open, beheer en verplaats uw geld wereldwijd vanuit één moderne online bank—ontworpen voor snelle internationale overboekingen, meerdere valuta’s en 24/7 digitale beveiliging.',
      primaryCta: 'Rekening openen',
      secondaryCta: 'Naar klantportaal',
      stat1Label: 'Hoogrentend Sparen',
      stat1Value: '4,85% APY',
      stat2Label: 'Treasury Sweep',
      stat2Value: '5,10% APY',
      stat3Label: 'FDIC-netwerkdekking',
      stat3Value: '$5,0M',
      stat4Label: 'Overboekingen',
      stat4Value: 'Dezelfde dag',
    },
    home: {
      divisionsTitle: 'Zes gespecialiseerde bankdivisies, één overzichtelijk grootboek.',
      divisionsSubtitle:
        'Elk product biedt heldere tarieven, nul maandelijkse kosten en directe Amerikaanse betaalinfrastructuur.',
      explore: 'Divisie bekijken',
      architecturalTitle: 'Ontworpen voor transparantie, getoetst op weerbaarheid.',
      architecturalBody:
        'In tegenstelling tot traditionele banken met verborgen kosten combineert BlueOcean realtime Federal Reserve-betalingen met persoonlijke begeleiding en uitgebreide FDIC-dekking.',
      architecturalCta: 'Bekijk beveiliging & FDIC',
      quickYieldTitle: 'Bereken wat uw liquide middelen opleveren.',
      quickYieldSub: 'Vergelijk 4,85% APY bij BlueOcean met het Amerikaanse spaargemiddelde van 0,45%.',
      depositLabel: 'Liquide inleg',
      projectedAnnual: 'Jaarrendement bij BlueOcean',
      vsNationalAvg: 'Extra rendement t.o.v. gemiddelde',
      testimonialsTitle: 'Vertrouwd door spaarders, ondernemers en family offices.',
      testimonialsSub: 'Geverifieerde resultaten in particulier sparen, treasury en financiering.',
      ctaTitle: 'Breng uw bankzaken naar rustiger, rendabeler vaarwater.',
      ctaDesc: 'Open binnen vier minuten een BlueOcean-rekening met directe virtuele kaart.',
      ctaPrimary: 'Vandaag rekening openen',
      ctaSecondary: 'Demo-klantportaal verkennen',
    },
    personal: {
      kicker: 'Particulier Bankieren · Lid FDIC',
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
      kicker: 'Zakelijk & Corporate Treasury',
      title: 'Institutioneel liquiditeitsbeheer voor groeiende bedrijven.',
      subtitle:
        'Combineer zakelijke betaalrekeningen, automatische 5,10% APY Treasury Sweeps, dagelijkse Fedwire-betalingen en 38 valuta’s.',
      operatingTitle: 'Zakelijke Betaalrekening',
      operatingDesc: 'Onbeperkte kosteloze US-ACH-betalingen, dubbele autorisatie en directe boekhoudkoppeling.',
      treasuryTitle: 'Automatische Treasury Sweep',
      treasuryDesc: 'Overtollige kasmiddelen stromen automatisch naar Amerikaanse staatsobligaties en $5M FDIC-dekking tegen 5,10% APY.',
      fxTitle: 'Internationale FX-desk',
      fxDesc: 'Beheer USD, EUR, GBP, CHF en 34 andere valuta’s tegen scherpe interbancaire koersen.',
      calcTitle: 'Zakelijke Rendementscalculator',
      calcSubtitle: 'Bereken de jaarlijkse rente-opbrengst op uw zakelijke kasreserves.',
      cashReserves: 'Zakelijke kasreserves',
      annualTreasuryYield: 'Jaarrendement (5,10% APY)',
      monthlyYield: 'Geschatte maandelijkse opbrengst',
      fdicSweepCap: 'FDIC-netwerkdekking',
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
      kicker: 'Veiligheid, FDIC-verzekering & Vertrouwen',
      title: 'Institutionele bescherming in elke transactie.',
      subtitle:
        'Directe FDIC-dekking tot $250.000 en tot $5.000.000 via ons sweep-netwerk, beveiligd met hardware-passkeys.',
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
      successBody: 'Ons Amerikaanse onboardingteam heeft uw tariefprofiel gereserveerd en een bevestiging gemaild.',
      referenceLabel: 'Bevestigingsnummer',
      done: 'Terug naar BlueOcean',
    },
    footer: {
      tagline: 'Modern Amerikaans digitaal bankieren ontworpen voor liquiditeit, helderheid en vertrouwen.',
      fdicNotice:
        'BlueOcean Bank, N.A. is lid van de FDIC en Equal Housing Lender. Standaard depositoverzekering bedraagt $250.000; uitgebreide dekking tot $5.000.000 via het Sweep-netwerk.',
      rights: '© 2026 BlueOcean Bank, N.A. Alle rechten voorbehouden.',
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
      security: 'Seguridad y FDIC',
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
      subtitle: 'BlueOcean Bank, N.A. · Miembro FDIC',
      skip: 'Saltar intro',
    },
    hero: {
      kicker: 'BlueOcean Bank, N.A. · Banca Online Internacional · FDIC',
      title: 'Banca en línea sin fronteras creada para claridad y confianza.',
      description:
        'Abre, administra y mueve tu dinero por todo el mundo desde un banco digital moderno—diseñado para transferencias internacionales al instante, cuentas multidivisa y seguridad 24/7.',
      primaryCta: 'Abrir una cuenta',
      secondaryCta: 'Entrar al Portal',
      stat1Label: 'Ahorro Alto Rendimiento',
      stat1Value: '4.85% APY',
      stat2Label: 'Tesorería Sweep',
      stat2Value: '5.10% APY',
      stat3Label: 'Cobertura Red FDIC',
      stat3Value: '$5.0M',
      stat4Label: 'Transferencias Wire',
      stat4Value: 'Mismo día',
    },
    home: {
      divisionsTitle: 'Seis divisiones especializadas, un solo libro transparente.',
      divisionsSubtitle:
        'Cada producto combina tasas claras, cero comisiones mensuales de mantenimiento y rieles bancarios directos de EE. UU.',
      explore: 'Explorar división',
      architecturalTitle: 'Diseñado para la transparencia, auditado para la solidez.',
      architecturalBody:
        'A diferencia de la banca tradicional cargada de comisiones ocultas, BlueOcean combina liquidación en tiempo real de la Reserva Federal con cobertura FDIC extendida y asesores dedicados.',
      architecturalCta: 'Revisar arquitectura FDIC',
      quickYieldTitle: 'Descubre cuánto genera tu liquidez en BlueOcean.',
      quickYieldSub: 'Compara el 4.85% APY de BlueOcean frente al promedio nacional estadounidense del 0.45%.',
      depositLabel: 'Depósito líquido',
      projectedAnnual: 'Rendimiento anual BlueOcean',
      vsNationalAvg: 'Ganancia extra frente al promedio',
      testimonialsTitle: 'La confianza de ahorradores, fundadores y oficinas familiares.',
      testimonialsSub: 'Resultados verificados en banca personal, tesorería comercial y crédito privado.',
      ctaTitle: 'Lleva tu banca hacia aguas más claras y rentables.',
      ctaDesc: 'Abre tu cuenta BlueOcean en menos de cuatro minutos con emisión inmediata de tarjeta virtual.',
      ctaPrimary: 'Abrir cuenta hoy',
      ctaSecondary: 'Explorar Portal Demo',
    },
    personal: {
      kicker: 'Banca Personal · Miembro FDIC',
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
      kicker: 'Empresas y Tesorería Corporativa',
      title: 'Gestión institucional de tesorería para empresas operativas.',
      subtitle:
        'Integra cuentas multi-entidad, barridos automáticos de tesorería al 5.10% APY, Fedwire y mesa de divisas en 38 monedas.',
      operatingTitle: 'Cuenta Operativa Comercial',
      operatingDesc: 'ACH nacional ilimitado sin comisiones, controles de doble firma y sincronización contable.',
      treasuryTitle: 'Tesorería Sweep Automatizada',
      treasuryDesc: 'El efectivo excedente rinde 5.10% APY en letras del Tesoro de EE. UU. y red FDIC de hasta $5M.',
      fxTitle: 'Mesa Global de Divisas',
      fxDesc: 'Opera en USD, EUR, GBP, CHF y 34 divisas adicionales con diferenciales interbancarios claros.',
      calcTitle: 'Calculadora de Rendimiento Corporativo',
      calcSubtitle: 'Estima el retorno anual sobre tus reservas operativas de efectivo.',
      cashReserves: 'Reservas de efectivo',
      annualTreasuryYield: 'Rendimiento anual (5.10% APY)',
      monthlyYield: 'Distribución mensual estimada',
      fdicSweepCap: 'Cobertura red FDIC',
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
      kicker: 'Seguridad, Seguro FDIC y Centro de Confianza',
      title: 'Protección institucional integrada en cada movimiento.',
      subtitle:
        'Depósitos asegurados hasta $250,000 directamente por la FDIC y hasta $5,000,000 mediante red sweep, resguardados con llaves Passkey.',
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
      successBody: 'Nuestro equipo en EE. UU. ha reservado tu perfil de tasas y enviado las instrucciones por correo.',
      referenceLabel: 'Referencia de confirmación',
      done: 'Volver a BlueOcean',
    },
    footer: {
      tagline: 'Banca digital estadounidense diseñada para liquidez, claridad y confianza institucional.',
      fdicNotice:
        'BlueOcean Bank, N.A. es Miembro FDIC y Equal Housing Lender. Seguro estándar de $250,000 por depositante; cobertura extendida hasta $5,000,000 mediante la red Insured Deposit Sweep.',
      rights: '© 2026 BlueOcean Bank, N.A. Todos los derechos reservados.',
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
      security: 'Segurança e FDIC',
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
      subtitle: 'BlueOcean Bank, N.A. · Membro FDIC',
      skip: 'Pular introdução',
    },
    hero: {
      kicker: 'BlueOcean Bank, N.A. · Banco Online Internacional · FDIC',
      title: 'Banco online sem fronteiras criado para clareza e confiança global.',
      description:
        'Abra, gerencie e movimente seu dinheiro pelo mundo em um único banco digital moderno—feito para transferências internacionais rápidas, contas multimoeda e proteção digital 24/7.',
      primaryCta: 'Abrir uma conta',
      secondaryCta: 'Entrar no Portal',
      stat1Label: 'Poupança Alto Rendimento',
      stat1Value: '4,85% APY',
      stat2Label: 'Treasury Sweep',
      stat2Value: '5,10% APY',
      stat3Label: 'Cobertura Rede FDIC',
      stat3Value: 'US$ 5,0M',
      stat4Label: 'Liquidação Wire',
      stat4Value: 'Mesmo dia',
    },
    home: {
      divisionsTitle: 'Seis divisões bancárias especializadas, um único extrato claro.',
      divisionsSubtitle:
        'Taxas transparentes, zero tarifa mensal de manutenção e infraestrutura bancária direta dos EUA.',
      explore: 'Explorar divisão',
      architecturalTitle: 'Projetado para transparência, auditado para resiliência.',
      architecturalBody:
        'Ao contrário dos bancos tradicionais repletos de taxas ocultas, o BlueOcean combina liquidação em tempo real do Federal Reserve com cobertura FDIC ampliada e atendimento dedicado.',
      architecturalCta: 'Ver arquitetura de segurança',
      quickYieldTitle: 'Veja quanto sua liquidez rende no BlueOcean.',
      quickYieldSub: 'Compare os 4,85% APY do BlueOcean com a média nacional americana de 0,45%.',
      depositLabel: 'Depósito líquido',
      projectedAnnual: 'Rendimento anual BlueOcean',
      vsNationalAvg: 'Ganho adicional sobre a média',
      testimonialsTitle: 'A confiança de depositantes, fundadores e family offices.',
      testimonialsSub: 'Resultados verificados em contas pessoais, tesouraria empresarial e crédito.',
      ctaTitle: 'Mova suas finanças para águas mais tranquilas e rentáveis.',
      ctaDesc: 'Abra sua conta BlueOcean em menos de quatro minutos com cartão virtual imediato.',
      ctaPrimary: 'Abrir conta hoje',
      ctaSecondary: 'Explorar Portal Demo',
    },
    personal: {
      kicker: 'Banco Pessoal · Membro FDIC',
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
      kicker: 'Empresas e Tesouraria Corporativa',
      title: 'Gestão institucional de tesouraria para empresas operacionais.',
      subtitle:
        'Reúna contas empresariais, Treasury Sweep automático de 5,10% APY, Fedwire no mesmo dia e câmbio em 38 moedas.',
      operatingTitle: 'Conta Operacional Empresarial',
      operatingDesc: 'ACH doméstico ilimitado sem taxas, aprovação dupla e integração contábil direta.',
      treasuryTitle: 'Treasury Sweep Automatizado',
      treasuryDesc: 'Caixa ocioso aplicado automaticamente em títulos do Tesouro dos EUA e rede FDIC de até US$ 5M a 5,10% APY.',
      fxTitle: 'Mesa Global de Câmbio',
      fxDesc: 'Mantenha e envie USD, EUR, GBP, CHF e outras 34 moedas com spreads interbancários transparentes.',
      calcTitle: 'Simulador de Rendimento Corporativo',
      calcSubtitle: 'Estime o retorno anual das reservas de caixa da sua empresa.',
      cashReserves: 'Reservas em caixa',
      annualTreasuryYield: 'Retorno anual (5,10% APY)',
      monthlyYield: 'Distribuição mensal estimada',
      fdicSweepCap: 'Cobertura rede FDIC',
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
      kicker: 'Segurança, Seguro FDIC e Centro de Confiança',
      title: 'Proteção institucional integrada em cada transação.',
      subtitle:
        'Depósitos segurados até US$ 250.000 diretamente pela FDIC e até US$ 5.000.000 via rede sweep, protegidos por chaves Passkey.',
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
      successBody: 'Nossa equipe nos EUA reservou seu perfil de taxas e enviou as instruções para seu e-mail.',
      referenceLabel: 'Código de confirmação',
      done: 'Voltar ao BlueOcean',
    },
    footer: {
      tagline: 'Banco digital americano projetado para liquidez, clareza e confiança institucional.',
      fdicNotice:
        'BlueOcean Bank, N.A. é Membro FDIC e Equal Housing Lender. Seguro padrão de US$ 250.000 por depositante; cobertura estendida até US$ 5.000.000 pela rede Insured Deposit Sweep.',
      rights: '© 2026 BlueOcean Bank, N.A. Todos os direitos reservados.',
      bankingCol: 'Banco',
      institutionalCol: 'Institucional',
      supportCol: 'Suporte',
    },
  },
};
