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
    id: 'us',
    region: 'North America',
    hubs: 'New York · Boston · San Francisco · Toronto',
    currencies: 'USD · CAD · MXN',
    settlement: 'Same-Day Fedwire & Instant FedNow®',
    summary:
      'Direct U.S. national banking charter rails with 55,000+ fee-free ATMs and automated multi-bank FDIC deposit sweep protection.',
  },
  {
    id: 'eu',
    region: 'European Union & UK',
    hubs: 'Frankfurt · Amsterdam · London · Madrid · Lisbon',
    currencies: 'EUR · GBP · CHF',
    settlement: 'SEPA Instant & Faster Payments',
    summary:
      'Local euro and sterling settlement corridors engineered for remote professionals, exporters, and dual-continent families.',
  },
  {
    id: 'latam',
    region: 'Latin America & Atlantic',
    hubs: 'Miami Gateway · São Paulo · Bogotá · Buenos Aires',
    currencies: 'USD · BRL · COP',
    settlement: 'Real-Time USD Treasury & Local FX',
    summary:
      'USD-denominated stability with transparent interbank conversion spreads and Portuguese/Spanish 24/7 customer support.',
  },
  {
    id: 'apac',
    region: 'Global Trade Frontier',
    hubs: 'Singapore · Tokyo · Sydney · Dubai',
    currencies: 'SGD · JPY · AUD · AED',
    settlement: '24/7 SWIFT GPI & Multi-Currency Wallets',
    summary:
      'Hold, convert, and disburse across 38 currencies inside one unified Customer Portal with real-time settlement tracking.',
  },
];

export const AboutPage: React.FC = () => {
  const { navigate, openModal } = useApp();
  const [selectedCorridor, setSelectedCorridor] = useState<string>('us');
  const active = CORRIDORS.find((c) => c.id === selectedCorridor) ?? CORRIDORS[0];

  const milestones = [
    {
      year: '2021',
      title: 'Chartered for Borderless Online Banking',
      detail:
        'Founded by U.S. banking engineers and treasury veterans to eliminate opaque branch fees and slow international settlement.',
    },
    {
      year: '2023',
      title: 'Multi-Bank $5M FDIC Sweep Architecture',
      detail:
        'Launched automated overnight liquidity distribution across 20 U.S. program banks, giving everyday customers institutional safety.',
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
        'Unified real-time Fedwire, machined Titanium & Crimson metal cards, savings vaults, and biometric passkeys in one seamless digital bank.',
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
              BlueOcean Bank, N.A. pairs the regulatory rigor of an American FDIC-insured bank with the speed, clarity, and multi-currency reach of a modern international online platform.
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
            alt="BlueOcean Bank architectural glass headquarters"
            aspectClass="aspect-[4/3] lg:h-full"
            caption="Headquartered in New York with regional settlement hubs spanning Europe and the Americas."
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
                      Customer deposits are never lent into speculative assets—backed by U.S. Treasuries and FDIC sweep networks.
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
