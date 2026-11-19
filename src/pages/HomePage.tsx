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
} from 'lucide-react';
import { useApp, PageRoute } from '../context/AppContext';
import { GlassCard } from '../components/GlassCard';
import { MetalCard3D } from '../components/MetalCard3D';
import { MediaFrame } from '../components/MediaFrame';
import { VideoShowcase } from '../components/VideoShowcase';
import { Reveal } from '../components/Reveal';
import { PartnerMarquee } from '../components/PartnerMarquee';

const HERO_IMG = '/src/assets/images/hero_oceanic_architecture_1795099364980.jpg';
const HERO_VIDEO = '/blueocean-showcase.mp4';
const SECURITY_IMG = '/src/assets/images/security_titanium_vault_1795099379522.jpg';

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
      metric: '4.85% APY · $0 Monthly Fees',
      desc: t.personal.savingsDesc,
      icon: <Wallet className="w-5 h-5 text-[#0A5C99] dark:text-[#78C7F6]" />,
      span: 'lg:col-span-7',
    },
    {
      id: 'business',
      index: '02',
      title: t.nav.business,
      metric: '5.10% APY · $5M FDIC Sweep',
      desc: t.business.treasuryDesc,
      icon: <Building2 className="w-5 h-5 text-[#0A5C99] dark:text-[#78C7F6]" />,
      span: 'lg:col-span-5',
    },
    {
      id: 'cards',
      index: '03',
      title: t.nav.cards,
      metric: '18g Brushed Titanium & Crimson Metal',
      desc: t.cards.subtitle,
      icon: <CreditCard className="w-5 h-5 text-[#921B2D] dark:text-[#EB5B70]" />,
      span: 'lg:col-span-5',
    },
    {
      id: 'loans',
      index: '04',
      title: t.nav.loans,
      metric: 'Fixed & Jumbo · 72h Digital Underwriting',
      desc: t.loans.subtitle,
      icon: <Landmark className="w-5 h-5 text-[#0A5C99] dark:text-[#78C7F6]" />,
      span: 'lg:col-span-7',
    },
    {
      id: 'wealth',
      index: '05',
      title: t.nav.wealth,
      metric: 'Fiduciary CFA Advisors · Direct Indexing',
      desc: t.wealth.subtitle,
      icon: <TrendingUp className="w-5 h-5 text-[#0A5C99] dark:text-[#78C7F6]" />,
      span: 'lg:col-span-6',
    },
    {
      id: 'security',
      index: '06',
      title: t.nav.security,
      metric: 'Hardware Passkeys · 24/7 Global Fraud Ops',
      desc: t.security.subtitle,
      icon: <ShieldCheck className="w-5 h-5 text-[#921B2D] dark:text-[#EB5B70]" />,
      span: 'lg:col-span-6',
    },
  ];

  const testimonials = [
    {
      quote:
        'Moving our $3.2M operating reserve into BlueOcean Treasury Sweep generated $163,200 in annualized yield while expanding our FDIC protection across partner banks.',
      name: 'David Halvorsen',
      role: 'Chief Financial Officer · Northstar Logistics LLC',
      outcome: '+$163.2K Annualized Treasury Return',
    },
    {
      quote:
        'We locked a 15-year coastal jumbo refinance in 68 hours with zero origination surprises and transparent line-by-line closing terms inside the digital portal.',
      name: 'Dr. Elena Rostova',
      role: 'Cardiothoracic Surgeon · Boston, MA',
      outcome: 'Closed in 14 Business Days',
    },
    {
      quote:
        'Managing personal savings vaults, family cards, and international euro wires from one calm glassmorphic interface replaced three separate legacy bank logins.',
      name: 'Marcus & Sofia Delgado',
      role: 'Architectural Studio Principals · Austin, TX',
      outcome: '4.85% APY on Everyday Liquidity',
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

              {/* Floating Translucent Titanium Glass Preview */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-[280px] z-20">
                <MetalCard3D
                  finish="titanium"
                  title="Titanium Reserve"
                  maskedNumber="4532  ••••  ••••  4821"
                  compact
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Institutional Metrics Strip below Hero Split */}
        <Reveal delayMs={80} className="mt-10 lg:mt-14">
          <GlassCard className="p-6 sm:p-7">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-[#0A2342]/10 dark:divide-white/10">
              <div className="pt-2 sm:pt-0">
                <div className="text-xs font-medium text-[#5C6F87] dark:text-[#98B1CC]">
                  {t.hero.stat1Label}
                </div>
                <div className="mt-1.5 font-mono tabular-nums text-2xl sm:text-3xl font-semibold text-[#0A5C99] dark:text-[#78C7F6]">
                  {t.hero.stat1Value}
                </div>
              </div>
              <div className="pt-2 sm:pt-0 lg:pl-8">
                <div className="text-xs font-medium text-[#5C6F87] dark:text-[#98B1CC]">
                  {t.hero.stat2Label}
                </div>
                <div className="mt-1.5 font-mono tabular-nums text-2xl sm:text-3xl font-semibold text-[#0A1D37] dark:text-white">
                  {t.hero.stat2Value}
                </div>
              </div>
              <div className="pt-4 sm:pt-0 lg:pl-8">
                <div className="text-xs font-medium text-[#5C6F87] dark:text-[#98B1CC]">
                  {t.hero.stat3Label}
                </div>
                <div className="mt-1.5 font-mono tabular-nums text-2xl sm:text-3xl font-semibold text-[#921B2D] dark:text-[#EC5D72]">
                  {t.hero.stat3Value}
                </div>
              </div>
              <div className="pt-4 sm:pt-0 lg:pl-8">
                <div className="text-xs font-medium text-[#5C6F87] dark:text-[#98B1CC]">
                  {t.hero.stat4Label}
                </div>
                <div className="mt-1.5 font-mono tabular-nums text-2xl sm:text-3xl font-semibold text-[#0A1D37] dark:text-white">
                  {t.hero.stat4Value}
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
                Federal Reserve Direct Rails · ISO 27001 · SOC 2 Type II
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
                  <span>Direct pass-through FDIC coverage up to $5,000,000 across 20 U.S. program banks</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#6EC2F5] shrink-0 mt-0.5" />
                  <span>Hardware passkey authentication with biometric wire verification</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#6EC2F5] shrink-0 mt-0.5" />
                  <span>Instant virtual card generation and single-tap freeze inside the Customer Portal</span>
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

            <div className="lg:col-span-6">
              <MediaFrame
                src={SECURITY_IMG}
                alt="Brushed titanium and sapphire optical glass security vault prism with dark crimson core"
                aspectClass="aspect-[4/3]"
                caption="Multi-layer cryptographic custody and real-time Fedwire anomaly screening."
              />
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
                  4.85% APY · Compounded Daily
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
                  Compared to 0.45% FDIC national avg
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
        </Reveal>
      </section>

      {/* SECTION 5: ATTRIBUTABLE CLIENT PROOF */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl font-semibold text-[#081A33] dark:text-white">
            {t.home.testimonialsTitle}
          </h2>
          <p className="mt-2 text-base text-[#445A75] dark:text-[#AFC3D8]">
            {t.home.testimonialsSub}
          </p>
        </Reveal>

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
                  {t.nav.about} · International Frontier
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#0A1D37] dark:text-white">
                  An online bank built for cross-border clarity
                </h3>
                <p className="text-sm text-[#445A75] dark:text-[#B4C7DC] leading-relaxed">
                  Explore our global clearing hubs across New York, Frankfurt, Amsterdam, and São Paulo, our charter governance, and our partner bank rails.
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
                  {t.nav.contact} · 24/7 Global Support
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#0A1D37] dark:text-white">
                  Speak with a real BlueOcean banking specialist
                </h3>
                <p className="text-sm text-[#445A75] dark:text-[#B4C7DC] leading-relaxed">
                  Reach our multilingual personal, wire, and commercial treasury desks by phone, encrypted message, or regional office appointment.
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
              onClick={() => openModal({ mode: 'account' })}
              className="px-6 h-12 rounded-xl bg-[#921B2D] hover:bg-[#A82236] text-white text-sm font-medium transition-colors shadow-lg whitespace-nowrap cursor-pointer"
            >
              {t.home.ctaPrimary}
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
