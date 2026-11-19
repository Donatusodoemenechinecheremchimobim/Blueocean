import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe2, ShieldCheck, Landmark, ArrowRight, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { GlassCard } from '../components/GlassCard';
import { MediaFrame } from '../components/MediaFrame';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { Reveal } from '../components/Reveal';

const HQ_IMG = '/src/assets/images/business_treasury_hq_1795099381602.jpg';
const WEALTH_IMG = '/src/assets/images/wealth_coastal_pavilion_1795099365607.jpg';

interface Corridor {
  id: string;
  region: string;
  hubs: string;
  currencies: string;
  settlement: string;
  summary: string;
}

const CORRIDORS: Corridor[] = [
  {
    id: 'eu',
    region: 'Europe & UK',
    hubs: 'London · Frankfurt · Amsterdam · Zurich · Madrid',
    currencies: 'EUR · GBP · CHF · SEK',
    settlement: 'SEPA Instant & UK Faster Payments',
    summary:
      'Local euro, sterling, and franc settlement corridors engineered for international professionals, exporters, and borderless families across Europe and the UK.',
  },
  {
    id: 'apac',
    region: 'Asia-Pacific & Middle East',
    hubs: 'Singapore · Tokyo · Sydney · Dubai',
    currencies: 'SGD · JPY · AUD · AED',
    settlement: '24/7 SWIFT GPI & Multi-Currency Wallets',
    summary:
      'Hold, convert, and disburse across 38 currencies inside one unified Customer Portal with real-time clearing visibility and interbank FX spreads.',
  },
  {
    id: 'americas',
    region: 'Americas & Atlantic',
    hubs: 'New York · Toronto · São Paulo · Mexico City',
    currencies: 'USD · CAD · BRL · MXN',
    settlement: 'FedNow · Wire · Regional Instant Rails',
    summary:
      'Full cross-border USD, CAD, and LatAm liquidity—so North and South American customers bank seamlessly alongside European and APAC peers.',
  },
  {
    id: 'global',
    region: 'Global Expat & Remote',
    hubs: '42+ Approved International Corridors',
    currencies: '38 Currencies · Zero Hidden FX Markup',
    settlement: 'Multi-Rail Instant Smart Routing',
    summary:
      'One global IBAN & multi-rail account with 55,000+ fee-free ATMs worldwide, instant virtual cards, and 24/7 multilingual specialists.',
  },
];

export const AboutPage: React.FC = () => {
  const { navigate, openModal } = useApp();
  const [selectedCorridor, setSelectedCorridor] = useState<string>('eu');
  const active = CORRIDORS.find((c) => c.id === selectedCorridor) ?? CORRIDORS[0];

  const milestones = [
    {
      year: '2021',
      title: 'Built for Borderless Online Banking',
      detail:
        'Founded by international banking engineers and global treasury specialists to eliminate opaque branch fees and slow cross-border wires.',
    },
    {
      year: '2023',
      title: 'Multi-Jurisdiction $5M Sweep Architecture',
      detail:
        'Launched automated overnight liquidity distribution across 20 regulated international partner banks, delivering institutional safety worldwide.',
    },
    {
      year: '2025',
      title: 'International Frontier Expansion',
      detail:
        'Opened multi-currency corridors across 38 currencies with native support in English, German, Russian, Dutch, Spanish, and Portuguese.',
    },
    {
      year: '2026',
      title: 'BlueOcean Next-Gen Customer Portal',
      detail:
        'Unified real-time SWIFT GPI, SEPA Instant, FedNow, machined Titanium & Crimson metal cards, savings vaults, and biometric passkeys in one digital bank.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10 space-y-16">
      {/* Hero Split */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 flex flex-col justify-center"
        >
          <GlassCard className="p-6 sm:p-8 space-y-5">
            <p className="text-xs sm:text-sm font-medium text-[#0A5C99] dark:text-[#78C7F6]">
              About BlueOcean Bank · International Digital Frontier
            </p>
            <h1
              className="font-display font-bold tracking-tight text-[#081A33] dark:text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 3.8vw, 3.25rem)', textWrap: 'balance' }}
            >
              An online bank engineered for people and companies who live beyond one border.
            </h1>
            <p className="text-base text-[#3D536E] dark:text-[#B9CBE0] leading-relaxed">
              BlueOcean International Bank operates on the global online banking frontier—combining multi-jurisdiction deposit safeguards with instant 38-currency accounts for customers across Europe, the UK, Asia-Pacific, Latin America, and North America.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <button
                type="button"
                onClick={() => openModal({ mode: 'account' })}
                className="inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-[#921B2D] hover:bg-[#A82236] text-white text-sm font-medium transition-colors shadow-md cursor-pointer"
              >
                <span>Open an Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => navigate('contact')}
                className="inline-flex items-center gap-2 px-5 h-11 rounded-xl border border-[#0A2342]/16 dark:border-white/20 text-[#0A1D37] dark:text-white hover:bg-white/60 dark:hover:bg-white/10 text-sm font-medium transition-colors cursor-pointer"
              >
                <span>Contact Our Team</span>
              </button>
            </div>
          </GlassCard>
        </motion.div>

        <div className="lg:col-span-6">
          <MediaFrame
            src={HQ_IMG}
            alt="BlueOcean International Bank architectural glass hub"
            aspectClass="aspect-[4/3] lg:h-full"
            caption="Global digital clearing hubs spanning London, Frankfurt, Singapore, New York, and São Paulo."
            priority
          />
        </div>
      </section>

      {/* Institutional Numbers Strip */}
      <Reveal>
        <GlassCard className="p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x divide-[#0A2342]/10 dark:divide-white/10">
            <div>
              <div className="text-xs text-[#5C6F87] dark:text-[#96AFCB]">Countries Connected</div>
              <div className="mt-1 font-mono tabular-nums text-3xl font-semibold text-[#0A5C99] dark:text-[#78C7F6]">
                42+
              </div>
            </div>
            <div className="lg:pl-6">
              <div className="text-xs text-[#5C6F87] dark:text-[#96AFCB]">Supported Currencies</div>
              <div className="mt-1 font-mono tabular-nums text-3xl font-semibold text-[#0A1D37] dark:text-white">
                38
              </div>
            </div>
            <div className="lg:pl-6">
              <div className="text-xs text-[#5C6F87] dark:text-[#96AFCB]">Reserve Ratio</div>
              <div className="mt-1 font-mono tabular-nums text-3xl font-semibold text-[#921B2D] dark:text-[#EE6478]">
                100% Liquid
              </div>
            </div>
            <div className="lg:pl-6">
              <div className="text-xs text-[#5C6F87] dark:text-[#96AFCB]">Multilingual Support</div>
              <div className="mt-1 font-mono tabular-nums text-3xl font-semibold text-[#0A1D37] dark:text-white">
                24/7 · 6 Lang
              </div>
            </div>
          </div>
        </GlassCard>
      </Reveal>

      {/* Interactive International Frontier Corridors */}
      <Reveal>
        <GlassCard className="p-7 sm:p-10 space-y-7">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0A1D37] dark:text-white">
                Operating Across the International Banking Frontier
              </h2>
              <p className="mt-1.5 text-sm text-[#4A607A] dark:text-[#A9BED6]">
                Select a corridor to inspect local settlement rails, currencies, and regional coverage.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#0A2342]/6 dark:bg-white/8 self-start">
              {CORRIDORS.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedCorridor(c.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCorridor === c.id
                      ? 'bg-[#0A5C99] text-white shadow-sm'
                      : 'text-[#39516E] dark:text-[#BDD0E4] hover:text-[#0A1D37] dark:hover:text-white'
                  }`}
                >
                  {c.region}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="font-mono text-xs font-semibold text-[#921B2D] dark:text-[#F06D80]">
                {active.currencies} · {active.settlement}
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#0A1D37] dark:text-white">
                {active.hubs}
              </h3>
              <p className="text-sm sm:text-base text-[#3D536E] dark:text-[#B9CBE0] leading-relaxed">
                {active.summary}
              </p>
              <ul className="space-y-2 text-sm text-[#2D4460] dark:text-[#D1E0F0] pt-1">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0A5C99] dark:text-[#78C7F6]" />
                  <span>Transparent interbank FX spreads displayed before every transfer</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0A5C99] dark:text-[#78C7F6]" />
                  <span>Dedicated compliance and instant verification inside the Customer Portal</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5">
              <MediaFrame
                src={WEALTH_IMG}
                alt="BlueOcean international coastal banking pavilion"
                aspectClass="aspect-[16/10]"
              />
            </div>
          </div>
        </GlassCard>
      </Reveal>

      {/* Core Pillars + Timeline */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 space-y-5">
          <Reveal>
            <GlassCard variant="oceanic" className="p-7 space-y-5 h-full">
              <Globe2 className="w-7 h-7 text-[#78C7F6]" />
              <h2 className="font-display text-2xl font-semibold text-white">
                Built on Three Non-Negotiable Principles
              </h2>
              <div className="space-y-4 text-sm text-[#CFE2F4]">
                <div className="flex items-start gap-3">
                  <Landmark className="w-4 h-4 text-[#78C7F6] shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-white">Radical Fee Clarity</div>
                    <p className="mt-0.5 text-xs leading-relaxed">
                      Zero monthly maintenance charges, zero surprise overdraft penalties, and open FX pricing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#F06D80] shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-white">Conservative Reserve Custody</div>
                    <p className="mt-0.5 text-xs leading-relaxed">
                      Customer deposits are never lent into speculative assets—backed 1:1 by G10 sovereign treasury bills and regulated international partner bank sweep networks.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {milestones.map((m, idx) => (
            <Reveal key={m.year} delayMs={idx * 60}>
              <GlassCard className="p-6 h-full space-y-2.5">
                <div className="font-mono tabular-nums text-xs font-semibold text-[#921B2D] dark:text-[#F06D80]">
                  {m.year}
                </div>
                <h3 className="font-display text-lg font-semibold text-[#0A1D37] dark:text-white">
                  {m.title}
                </h3>
                <p className="text-sm text-[#445A75] dark:text-[#B4C7DC] leading-relaxed">
                  {m.detail}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Rotating Banking Rail Partners */}
      <Reveal>
        <PartnerMarquee />
      </Reveal>
    </div>
  );
};
