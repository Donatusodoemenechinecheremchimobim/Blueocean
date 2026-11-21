import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Wallet,
  Building2,
  CreditCard,
  Landmark,
  TrendingUp,
  ShieldCheck,
  Check,
  User,
  Lock,
  Snowflake,
  Bell,
  Headphones,
} from 'lucide-react';
import { useApp, PageRoute } from '../context/AppContext';
import { GlassCard } from '../components/GlassCard';
import { MetalCard3D } from '../components/MetalCard3D';
import { VideoShowcase } from '../components/VideoShowcase';
import { Reveal } from '../components/Reveal';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { CountUp } from '../components/CountUp';
import { CurrencyConverterSection } from '../components/CurrencyConverterSection';
import { SubscriptionsShowcase } from '../components/SubscriptionsShowcase';

const HERO_IMG = '/src/assets/images/hero_oceanic_architecture_1795099364980.jpg';
const HERO_VIDEO = '/blueocean-showcase.mp4';

export const HomePage: React.FC = () => {
  const { t, navigate, openModal, formatCurrency } = useApp();
  const [quickDeposit, setQuickDeposit] = useState(50000);

  const annualBlueOcean = quickDeposit * 0.0485;
  const annualNational = quickDeposit * 0.0045;
  const extraYield = annualBlueOcean - annualNational;

  const divisions: {
    id: PageRoute;
    index: string;
    title: string;
    metric: string;
    desc: string;
    icon: React.ReactNode;
    span: string;
  }[] = [
    {
      id: 'personal',
      index: '01',
      title: t.nav.personal,
      metric: 'Everyday Global Accounts · 38+ Currencies',
      desc: 'Send and receive money across 42+ countries with clear exchange rates, zero monthly account fees, and simple savings goals.',
      icon: <Wallet className="w-5 h-5 text-[#0A5C99] dark:text-[#78C7F6]" />,
      span: 'lg:col-span-7',
    },
    {
      id: 'business',
      index: '02',
      title: t.nav.business,
      metric: 'Global Payments · Teams & Suppliers',
      desc: 'Get paid by international clients, send fast payouts to overseas teams and suppliers, and manage company spending in one dashboard.',
      icon: <Building2 className="w-5 h-5 text-[#0A5C99] dark:text-[#78C7F6]" />,
      span: 'lg:col-span-5',
    },
    {
      id: 'portal',
      index: '03',
      title: 'Virtual Credit Cards',
      metric: 'Instant Issue in Customer Portal · 20+ U.S. Subscriptions',
      desc: 'Buy and activate a USD virtual credit card right inside your Customer Portal—accepted worldwide and across Netflix, Amazon Prime, ChatGPT, and 20+ U.S. services.',
      icon: <CreditCard className="w-5 h-5 text-[#921B2D] dark:text-[#EB5B70]" />,
      span: 'lg:col-span-5',
    },
    {
      id: 'loans',
      index: '04',
      title: t.nav.loans,
      metric: 'Personal & Home Loans · Clear Monthly Payments',
      desc: 'Estimate monthly payments upfront and apply online with straightforward terms and no surprise paperwork fees.',
      icon: <Landmark className="w-5 h-5 text-[#0A5C99] dark:text-[#78C7F6]" />,
      span: 'lg:col-span-7',
    },
    {
      id: 'wealth',
      index: '05',
      title: t.nav.wealth,
      metric: 'Personal Guidance · Long-Term Planning',
      desc: 'Work with an advisor to plan your long-term savings, retirement, and family financial goals with clear, simple options.',
      icon: <TrendingUp className="w-5 h-5 text-[#0A5C99] dark:text-[#78C7F6]" />,
      span: 'lg:col-span-6',
    },
    {
      id: 'security',
      index: '06',
      title: t.nav.security,
      metric: 'Biometric Sign-In · Instant Card Freeze',
      desc: 'Keep your account and virtual credit cards protected with device sign-in, instant freeze controls, real-time alerts, and 24/7 support.',
      icon: <ShieldCheck className="w-5 h-5 text-[#921B2D] dark:text-[#EB5B70]" />,
      span: 'lg:col-span-6',
    },
  ];

  const testimonials = [
    {
      quote:
        'Paying our overseas suppliers in euros and dollars used to take four days and cost a fortune in bank wire fees. With BlueOcean, our transfers arrive the same day and we see the exact exchange rate before sending.',
      name: 'David Halvorsen',
      role: 'Finance Director · Northstar Logistics · Zurich & New York',
      outcome: 'Same-Day International Transfers',
    },
    {
      quote:
        'My local bank card kept getting declined on Netflix, ChatGPT, and Amazon. I bought a BlueOcean virtual credit card in the Customer Portal in two minutes and every single subscription works smoothly now.',
      name: 'Dr. Elena Rostova',
      role: 'Doctor · London, UK',
      outcome: 'Zero Subscription Declines',
    },
    {
      quote:
        'Our clients pay us in EUR, GBP, and USD, and we receive every payment straight into one account without losing money on bad exchange rates. It saved us over $1,900 in bank fees last year.',
      name: 'Marcus & Sofia Delgado',
      role: 'Design Studio Owners · Madrid & São Paulo',
      outcome: '$1,900+ Saved on Transfers & FX',
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* SECTION 1: HERO SPLIT + 4-COLUMN RATE STRIP + PARTNER MARQUEE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Glassmorphic Editorial Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex"
          >
            <GlassCard className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center space-y-5 sm:space-y-6 w-full">
              <p className="text-xs sm:text-sm font-medium text-[#0A5C99] dark:text-[#7CC8F8]">
                {t.hero.kicker}
              </p>

              <h1
                className="font-display font-bold tracking-tight text-[#081A33] dark:text-white leading-[1.07]"
                style={{
                  fontSize: 'clamp(2.05rem, 3.85vw, 3.45rem)',
                  textWrap: 'balance',
                }}
              >
                {t.hero.title}
              </h1>

              <p className="text-[15px] sm:text-base text-[#2E4662] dark:text-[#C0D3E8] leading-relaxed">
                {t.hero.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => openModal({ mode: 'account' })}
                  className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-[#921B2D] hover:bg-[#A82236] active:scale-[0.98] text-white text-sm font-medium transition-all shadow-[0_12px_28px_-8px_rgba(146,27,45,0.55)] whitespace-nowrap cursor-pointer"
                >
                  <span>{t.hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => navigate('portal')}
                  className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/16 border border-[#0A2342]/14 dark:border-white/16 text-[#0A1D37] dark:text-white text-sm font-medium transition-all whitespace-nowrap cursor-pointer"
                >
                  <span>{t.hero.secondaryCta}</span>
                </button>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Architectural 3D Visual Carrier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative flex flex-col"
          >
            <div className="relative flex-1 min-h-[300px] sm:min-h-[380px] lg:min-h-[450px]">
              <VideoShowcase
                src={HERO_VIDEO}
                poster={HERO_IMG}
                alt="BlueOcean Global Banking platform showcase film"
                className="w-full h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[450px]"
              />

              {/* Floating Virtual Credit Card Preview */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-[280px] z-20">
                <MetalCard3D
                  finish="titanium"
                  title="Virtual Credit Card"
                  maskedNumber="4532  ••••  ••••  4821"
                  network="VIRTUAL CREDIT"
                  compact
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Clear Platform Highlights below Hero Split */}
        <Reveal delayMs={80} className="mt-10 lg:mt-14">
          <GlassCard className="p-6 sm:p-7">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-[#0A2342]/10 dark:divide-white/10">
              <div className="pt-2 sm:pt-0">
                <div className="text-xs font-medium text-[#5C6F87] dark:text-[#98B1CC]">
                  {t.hero.stat4Label}
                </div>
                <div className="mt-1.5 font-mono tabular-nums text-2xl sm:text-3xl font-semibold text-[#0A5C99] dark:text-[#78C7F6]">
                  <CountUp end={243} suffix="K+" durationMs={1850} />
                </div>
              </div>
              <div className="pt-2 sm:pt-0 lg:pl-8">
                <div className="text-xs font-medium text-[#5C6F87] dark:text-[#98B1CC]">
                  Countries Supported
                </div>
                <div className="mt-1.5 font-mono tabular-nums text-2xl sm:text-3xl font-semibold text-[#0A1D37] dark:text-white">
                  <CountUp end={42} suffix="+" durationMs={1400} />
                </div>
              </div>
              <div className="pt-4 sm:pt-0 lg:pl-8">
                <div className="text-xs font-medium text-[#5C6F87] dark:text-[#98B1CC]">
                  Currencies Available
                </div>
                <div className="mt-1.5 font-mono tabular-nums text-2xl sm:text-3xl font-semibold text-[#921B2D] dark:text-[#EC5D72]">
                  <CountUp end={38} suffix="+" durationMs={1500} />
                </div>
              </div>
              <div className="pt-4 sm:pt-0 lg:pl-8">
                <div className="text-xs font-medium text-[#5C6F87] dark:text-[#98B1CC]">
                  U.S. Subscriptions Ready
                </div>
                <div className="mt-1.5 font-mono tabular-nums text-2xl sm:text-3xl font-semibold text-[#0A5C99] dark:text-[#78C7F6]">
                  <CountUp end={20} suffix="+" durationMs={1350} />
                </div>
              </div>
            </div>
          </GlassCard>
        </Reveal>

        {/* Infinite Rotating Banking & Fintech Ecosystem Partners */}
        <Reveal delayMs={120} className="mt-6">
          <PartnerMarquee />
        </Reveal>
      </section>

      {/* SECTION 1A: PERSONAL OR BUSINESS ACCOUNTS — CHOOSE HOW YOU BANK & GET PAID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="max-w-2xl mb-8">
          <p className="text-xs sm:text-sm font-medium text-[#0A5C99] dark:text-[#78C7F6]">
            Not Just Personal Banking · Built for Individuals &amp; Global Businesses
          </p>
          <h2
            className="mt-2 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#081A33] dark:text-white"
            style={{ textWrap: 'balance' }}
          >
            Open a Personal Account or a Business Account to receive payments worldwide.
          </h2>
          <p className="mt-3 text-base text-[#445A75] dark:text-[#AFC3D8]">
            Whether you are sending money to family abroad or running a company receiving international client invoices, you can open either account online in minutes.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Personal Account Card */}
          <Reveal>
            <GlassCard className="p-7 sm:p-9 h-full flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#0A5C99] dark:text-[#78C7F6]">
                    <User className="w-4 h-4" />
                    <span>Personal Account · $0 / month</span>
                  </span>
                  <span className="font-mono text-xs text-[#5C6F87] dark:text-[#96AFCB]">
                    For Individuals &amp; Families
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#0A1D37] dark:text-white">
                  Personal Online Banking
                </h3>

                <p className="text-sm sm:text-[15px] text-[#445A75] dark:text-[#B4C7DC] leading-relaxed">
                  Send and receive money internationally, keep savings earning steady interest, and pay U.S. subscriptions online with instant virtual credit cards.
                </p>

                <ul className="space-y-2.5 pt-1 text-sm text-[#2A425E] dark:text-[#CCE0F4]">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#0A5C99] dark:text-[#78C7F6] shrink-0 mt-0.5" />
                    <span>Send &amp; receive money across 42+ countries in 38+ currencies</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#0A5C99] dark:text-[#78C7F6] shrink-0 mt-0.5" />
                    <span>Instant USD virtual credit cards accepted on Netflix, Amazon &amp; 20+ U.S. services</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#0A5C99] dark:text-[#78C7F6] shrink-0 mt-0.5" />
                    <span>Flexible savings vaults earning 4.85% APY with zero monthly fees</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#0A2342]/10 dark:border-white/10 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    openModal({
                      mode: 'account',
                      defaultAccountType: 'personal',
                      defaultProduct: 'Personal Global Account + Virtual Credit Card',
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 px-5 h-11 rounded-xl bg-[#0A5C99] hover:bg-[#0D6DB5] text-white text-sm font-medium transition-colors shadow-md cursor-pointer"
                >
                  <span>Open Personal Account</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate('personal')}
                  className="px-4 h-11 rounded-xl text-sm font-medium text-[#0A5C99] dark:text-[#78C7F6] hover:bg-[#0A5C99]/8 dark:hover:bg-white/8 transition-colors cursor-pointer"
                >
                  Learn more
                </button>
              </div>
            </GlassCard>
          </Reveal>

          {/* Business Account Card */}
          <Reveal delayMs={80}>
            <GlassCard variant="oceanic" className="p-7 sm:p-9 h-full flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#8FD1FA]">
                    <Building2 className="w-4 h-4" />
                    <span>Business Account · Receive Global Payments</span>
                  </span>
                  <span className="font-mono text-xs text-[#B6D3EE]">
                    For Companies &amp; Agencies
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white">
                  Business Account &amp; Client Payments
                </h3>

                <p className="text-sm sm:text-[15px] text-[#C8DDF1] leading-relaxed">
                  Built for businesses, online stores, agencies, and contractors to receive client payments from abroad without high wire fees or slow banks.
                </p>

                <ul className="space-y-2.5 pt-1 text-sm text-[#E0EEFA]">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#78C7F6] shrink-0 mt-0.5" />
                    <span>Receive international payments with local USD, EUR &amp; GBP details + SWIFT</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#78C7F6] shrink-0 mt-0.5" />
                    <span>Hold 38+ currencies and pay overseas teams, freelancers, and suppliers fast</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#78C7F6] shrink-0 mt-0.5" />
                    <span>Issue virtual credit cards for cloud tools, ad spend, and business subscriptions</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/14 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    openModal({
                      mode: 'account',
                      defaultAccountType: 'business',
                      defaultProduct: 'Business Account — Receive Client Payments',
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 px-5 h-11 rounded-xl bg-[#921B2D] hover:bg-[#A82236] text-white text-sm font-medium transition-colors shadow-lg cursor-pointer"
                >
                  <span>Open Business Account</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate('business')}
                  className="px-4 h-11 rounded-xl text-sm font-medium text-[#CFE7FB] hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Explore Business Banking
                </button>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* SECTION 1B: REAL-TIME CURRENCY CONVERTER & COUNTRIES WE OPERATE IN */}
      <CurrencyConverterSection />

      {/* SECTION 1C: 20+ U.S. SUBSCRIPTIONS ACCEPTED WITH VIRTUAL CARDS */}
      <SubscriptionsShowcase />

      {/* SECTION 2: ASYMMETRIC 21ST.DEV BENTO GRID FOR ALL 6 BANKING DIVISIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="max-w-2xl mb-10">
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#081A33] dark:text-white"
            style={{ textWrap: 'balance' }}
          >
            {t.home.divisionsTitle}
          </h2>
          <p className="mt-3 text-base text-[#445A75] dark:text-[#AFC3D8]">
            {t.home.divisionsSubtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {divisions.map((div, idx) => (
            <Reveal
              key={div.id}
              delayMs={idx * 55}
              className={div.span}
            >
              <GlassCard
                interactive
                onClick={() => navigate(div.id)}
                className="p-6 sm:p-7 h-full flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className="font-mono tabular-nums text-xs font-medium text-[#5C6F87] dark:text-[#90AAC7]">
                      {div.index}. · {div.metric}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#0A5C99]/8 dark:bg-white/8 flex items-center justify-center shrink-0">
                      {div.icon}
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#0A1D37] dark:text-white">
                    {div.title}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-[15px] text-[#445A75] dark:text-[#B4C7DC] leading-relaxed">
                    {div.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0A2342]/8 dark:border-white/10 flex items-center justify-between text-sm font-medium text-[#0A5C99] dark:text-[#78C7F6]">
                  <span>{t.home.explore}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 3: DEEP OCEANIC ARCHITECTURAL CONTRAST SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
        <div className="rounded-[28px] overflow-hidden bg-gradient-to-br from-[#071D38] via-[#0B2D57] to-[#082242] text-white p-6 sm:p-10 lg:p-14 border border-white/14 shadow-[0_28px_70px_-24px_rgba(7,28,54,0.55)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-medium text-[#8ECBF6]">
                Fast Global Transfers · 38+ Currencies · Instant Virtual Credit Cards
              </div>
              <h2
                className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight"
                style={{ textWrap: 'balance' }}
              >
                {t.home.architecturalTitle}
              </h2>
              <p className="text-base text-[#C4D8EC] leading-relaxed">
                {t.home.architecturalBody}
              </p>

              <ul className="space-y-3 text-sm text-[#DCEAF7]">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#6EC2F5] shrink-0 mt-0.5" />
                  <span>Send and receive money across 42+ countries with real exchange rates and upfront fees</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#6EC2F5] shrink-0 mt-0.5" />
                  <span>Pay Netflix, Amazon Prime, ChatGPT, and 20+ U.S. subscriptions with your virtual credit card</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#6EC2F5] shrink-0 mt-0.5" />
                  <span>Freeze your virtual card, change spending limits, and get instant alerts inside the Customer Portal</span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => navigate('security')}
                  className="inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-white text-[#081A33] hover:bg-[#EAF2FA] text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>{t.home.architecturalCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <Lock className="w-5 h-5 text-[#78C7F6]" />,
                  title: '256-Bit Encryption',
                  desc: 'Your personal and business account details stay encrypted around the clock.',
                },
                {
                  icon: <Snowflake className="w-5 h-5 text-[#78C7F6]" />,
                  title: 'One-Tap Card Freeze',
                  desc: 'Pause any virtual credit card or block specific subscription merchants instantly.',
                },
                {
                  icon: <Bell className="w-5 h-5 text-[#78C7F6]" />,
                  title: 'Real-Time Alerts',
                  desc: 'See every incoming client payment, transfer, and card purchase the second it happens.',
                },
                {
                  icon: <Headphones className="w-5 h-5 text-[#78C7F6]" />,
                  title: '24/7 Human Support',
                  desc: 'Reach our support specialists anytime in 6 languages whenever you need help.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-white/8 border border-white/12 space-y-2.5"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C4D8EC] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </Reveal>
      </section>

      {/* SECTION 4: INTERACTIVE LIQUID CASH YIELD PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
        <GlassCard className="p-7 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2
                className="font-display text-2xl sm:text-3xl font-semibold text-[#081A33] dark:text-white"
                style={{ textWrap: 'balance' }}
              >
                {t.home.quickYieldTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#445A75] dark:text-[#AFC3D8]">
                {t.home.quickYieldSub}
              </p>

              <div className="pt-2 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-[#374F6B] dark:text-[#C5D6E8]">
                    {t.home.depositLabel}
                  </span>
                  <span className="font-mono tabular-nums text-lg font-semibold text-[#0A1D37] dark:text-white">
                    {formatCurrency(quickDeposit, 0)}
                  </span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={500000}
                  step={5000}
                  value={quickDeposit}
                  onChange={(e) => setQuickDeposit(Number(e.target.value))}
                  className="w-full bo-slider"
                  aria-label={t.home.depositLabel}
                />
                <div className="flex justify-between font-mono text-xs text-[#61768F] dark:text-[#8BA4C2]">
                  <span>$5,000</span>
                  <span>$250,000</span>
                  <span>$500,000</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#0A5C99]/8 dark:bg-[#0A5C99]/22 border border-[#0A5C99]/18">
                <div className="text-xs font-medium text-[#3D5876] dark:text-[#B4CCE4]">
                  {t.home.projectedAnnual}
                </div>
                <div className="mt-2 font-mono tabular-nums text-3xl font-semibold text-[#0A5C99] dark:text-[#7AC8F8]">
                  {formatCurrency(annualBlueOcean, 0)}
                </div>
                <div className="mt-2 text-xs text-[#546D88] dark:text-[#98B4D0]">
                  4.85% APY · Interest added daily
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#921B2D]/7 dark:bg-[#921B2D]/20 border border-[#921B2D]/18">
                <div className="text-xs font-medium text-[#5A2D37] dark:text-[#E5B8C0]">
                  {t.home.vsNationalAvg}
                </div>
                <div className="mt-2 font-mono tabular-nums text-3xl font-semibold text-[#921B2D] dark:text-[#F06D80]">
                  +{formatCurrency(extraYield, 0)}
                </div>
                <div className="mt-2 text-xs text-[#6B414A] dark:text-[#D5A3AC]">
                  Compared to 0.45% average at regular banks
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
        </Reveal>
      </section>

      {/* SECTION 5: ATTRIBUTABLE CLIENT PROOF */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-[#081A33] dark:text-white">
              {t.home.testimonialsTitle}
            </h2>
            <p className="mt-2 text-base text-[#445A75] dark:text-[#AFC3D8]">
              {t.home.testimonialsSub}
            </p>
          </Reveal>

          <Reveal delayMs={80} className="shrink-0">
            <GlassCard className="px-6 py-4 flex items-center gap-5">
              <div>
                <div className="font-mono tabular-nums text-2xl sm:text-3xl font-semibold text-[#0A5C99] dark:text-[#78C7F6]">
                  <CountUp end={243000} suffix="+" useGrouping durationMs={2100} />
                </div>
                <div className="text-xs font-medium text-[#5C6F87] dark:text-[#98B1CC] mt-0.5">
                  {t.hero.stat4Label} · 42+ Countries
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <Reveal key={item.name} delayMs={idx * 70}>
              <GlassCard className="p-6 sm:p-7 h-full flex flex-col justify-between">
                <div>
                  <div className="font-mono tabular-nums text-xs font-semibold text-[#0A5C99] dark:text-[#78C7F6] mb-3">
                    {item.outcome}
                  </div>
                  <p className="text-sm sm:text-[15px] text-[#223854] dark:text-[#D3E1F0] leading-relaxed">
                    “{item.quote}”
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#0A2342]/8 dark:border-white/10">
                  <div className="font-display text-sm font-semibold text-[#0A1D37] dark:text-white">
                    {item.name}
                  </div>
                  <div className="text-xs text-[#5C6F87] dark:text-[#96AFCB] mt-0.5">
                    {item.role}
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 5B: INTERNATIONAL FRONTIER & DIRECT SUPPORT GATEWAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <GlassCard
              interactive
              onClick={() => navigate('about')}
              className="p-7 sm:p-8 h-full flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="font-mono text-xs font-medium text-[#0A5C99] dark:text-[#78C7F6]">
                  {t.nav.about} · Worldwide Online Banking
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#0A1D37] dark:text-white">
                  Built for people who send and receive money across borders
                </h3>
                <p className="text-sm text-[#445A75] dark:text-[#B4C7DC] leading-relaxed">
                  See how BlueOcean connects 42+ countries and 38 currencies so sending money home, getting paid abroad, and saving feels effortless.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#0A2342]/10 dark:border-white/10 flex items-center justify-between text-sm font-medium text-[#0A5C99] dark:text-[#78C7F6]">
                <span>{t.nav.about}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delayMs={80}>
            <GlassCard
              interactive
              onClick={() => navigate('contact')}
              className="p-7 sm:p-8 h-full flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="font-mono text-xs font-medium text-[#921B2D] dark:text-[#EB5B70]">
                  {t.nav.contact} · 24/7 Human Support
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#0A1D37] dark:text-white">
                  Talk to a real person anytime, in your language
                </h3>
                <p className="text-sm text-[#445A75] dark:text-[#B4C7DC] leading-relaxed">
                  Message or call our friendly team in English, German, Russian, Dutch, Spanish, or Portuguese whenever you need help with an account or transfer.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#0A2342]/10 dark:border-white/10 flex items-center justify-between text-sm font-medium text-[#921B2D] dark:text-[#EB5B70]">
                <span>{t.nav.contact}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* SECTION 6: CONVERSION BAND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
        <GlassCard className="p-8 sm:p-12 text-center">
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold text-[#081A33] dark:text-white max-w-2xl mx-auto"
            style={{ textWrap: 'balance' }}
          >
            {t.home.ctaTitle}
          </h2>
          <p className="mt-3 text-base text-[#445A75] dark:text-[#AFC3D8] max-w-xl mx-auto">
            {t.home.ctaDesc}
          </p>
          <div className="mt-7 grid grid-cols-1 sm:flex sm:flex-wrap items-center justify-center gap-3.5 max-w-md sm:max-w-none mx-auto">
            <button
              type="button"
              onClick={() =>
                openModal({
                  mode: 'account',
                  defaultAccountType: 'personal',
                  defaultProduct: 'Personal Global Account + Virtual Credit Card',
                })
              }
              className="px-6 h-12 rounded-xl bg-[#0A5C99] hover:bg-[#0D6DB5] text-white text-sm font-medium transition-colors shadow-lg whitespace-nowrap cursor-pointer"
            >
              Open Personal Account
            </button>
            <button
              type="button"
              onClick={() =>
                openModal({
                  mode: 'account',
                  defaultAccountType: 'business',
                  defaultProduct: 'Business Account — Receive Client Payments',
                })
              }
              className="px-6 h-12 rounded-xl bg-[#921B2D] hover:bg-[#A82236] text-white text-sm font-medium transition-colors shadow-lg whitespace-nowrap cursor-pointer"
            >
              Open Business Account
            </button>
            <button
              type="button"
              onClick={() => navigate('portal')}
              className="px-6 h-12 rounded-xl bg-white/80 dark:bg-white/10 border border-[#0A2342]/16 dark:border-white/20 text-[#0A1D37] dark:text-white hover:bg-white dark:hover:bg-white/16 text-sm font-medium transition-colors whitespace-nowrap cursor-pointer"
            >
              {t.home.ctaSecondary}
            </button>
          </div>
        </GlassCard>
        </Reveal>
      </section>
    </div>
  );
};
