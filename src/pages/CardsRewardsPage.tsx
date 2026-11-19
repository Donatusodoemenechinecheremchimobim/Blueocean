import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CardFinish } from '../context/BankingContext';
import { GlassCard } from '../components/GlassCard';
import { MetalCard3D } from '../components/MetalCard3D';
import { Reveal } from '../components/Reveal';

interface CardTierSpec {
  finish: CardFinish;
  nameKey: 'titaniumName' | 'oceanicName' | 'crimsonName';
  annualFee: string;
  apr: string;
  material: string;
  travelMult: number;
  diningMult: number;
  generalMult: number;
  perks: string[];
}

const CARD_SPECS: CardTierSpec[] = [
  {
    finish: 'titanium',
    nameKey: 'titaniumName',
    annualFee: '$0',
    apr: 'Debit · Linked to Checking',
    material: '18g Machined Grade-5 Brushed Titanium',
    travelMult: 0.02,
    diningMult: 0.02,
    generalMult: 0.015,
    perks: [
      'Zero foreign transaction fees across 170+ countries',
      'Unlimited worldwide ATM fee rebates posted monthly',
      'Instant Apple Pay, Google Pay, and single-use virtual cards',
    ],
  },
  {
    finish: 'oceanic',
    nameKey: 'oceanicName',
    annualFee: '$195',
    apr: '18.99% – 24.99% Variable',
    material: '19g Deep Anodized Oceanic Sapphire Alloy',
    travelMult: 0.04,
    diningMult: 0.03,
    generalMult: 0.02,
    perks: [
      '4x points on direct flights & hotels, 3x dining, 2x everywhere else',
      'Primary rental car collision coverage & trip cancellation up to $10,000',
      'Unlimited Priority Pass Select lounge access for cardholder + 2 guests',
    ],
  },
  {
    finish: 'crimson',
    nameKey: 'crimsonName',
    annualFee: '$595',
    apr: '17.49% – 22.99% Variable',
    material: '22g Laser-Etched Dark Crimson Tungsten Core',
    travelMult: 0.06,
    diningMult: 0.04,
    generalMult: 0.025,
    perks: [
      '6x travel & private aviation partners, 4x fine dining, 2.5x uncapped base',
      '$400 annual architectural travel & wellness statement credit',
      'Dedicated 24/7 BlueOcean Private Concierge & Global Entry credit',
    ],
  },
];

export const CardsRewardsPage: React.FC = () => {
  const { t, openModal, formatCurrency } = useApp();
  const [selectedFinish, setSelectedFinish] = useState<CardFinish>('titanium');
  const [travelSpend, setTravelSpend] = useState(1200);
  const [diningSpend, setDiningSpend] = useState(900);
  const [generalSpend, setGeneralSpend] = useState(3500);

  const spec = CARD_SPECS.find((c) => c.finish === selectedFinish) ?? CARD_SPECS[0];
  const cardName = t.cards[spec.nameKey];

  const annualRewards =
    (travelSpend * spec.travelMult +
      diningSpend * spec.diningMult +
      generalSpend * spec.generalMult) *
    12;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 space-y-16">
      {/* Glassmorphic Header */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <GlassCard className="p-7 sm:p-10 max-w-4xl space-y-4">
          <p className="text-xs sm:text-sm font-medium text-[#921B2D] dark:text-[#EE6478]">
            {t.cards.kicker}
          </p>
          <h1
            className="font-display font-bold tracking-tight text-[#081A33] dark:text-white leading-tight"
            style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.35rem)', textWrap: 'balance' }}
          >
            {t.cards.title}
          </h1>
          <p className="text-base sm:text-lg text-[#354E6B] dark:text-[#BDD0E4] leading-relaxed">
            {t.cards.subtitle}
          </p>
        </GlassCard>
      </motion.section>

      {/* Interactive 3D Metal Card Studio */}
      <section className="rounded-[28px] bg-gradient-to-br from-[#071D38] via-[#0B2D56] to-[#081E3B] text-white p-7 sm:p-10 lg:p-12 border border-white/14 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Interactive 3D Card Display */}
          <div className="lg:col-span-6 space-y-6">
            <MetalCard3D
              finish={spec.finish}
              title={cardName}
              maskedNumber={
                spec.finish === 'titanium'
                  ? '4532  ••••  ••••  4821'
                  : spec.finish === 'oceanic'
                    ? '4916  ••••  ••••  7704'
                    : '5412  ••••  ••••  9026'
              }
              network={spec.finish === 'crimson' ? 'WORLD ELITE' : 'VISA INFINITE'}
            />

            {/* Segmented Finish Switcher */}
            <div className="space-y-2.5 text-center">
              <div className="text-xs font-medium text-[#A4C4E2]">{t.cards.selectFinish}</div>
              <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-white/8 border border-white/12">
                {CARD_SPECS.map((tier) => {
                  const active = tier.finish === selectedFinish;
                  return (
                    <button
                      key={tier.finish}
                      type="button"
                      onClick={() => setSelectedFinish(tier.finish)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                        active
                          ? 'bg-white text-[#081A33] shadow-md'
                          : 'text-[#C4D8EC] hover:text-white'
                      }`}
                    >
                      {t.cards[tier.nameKey]}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Selected Card Spec Sheet */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="font-display text-3xl font-semibold text-white">{cardName}</h2>
              <p className="mt-1.5 text-sm text-[#9CC5E8]">{spec.material}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/12">
              <div>
                <div className="text-xs text-[#9CC5E8]">{t.cards.annualFee}</div>
                <div className="mt-1 font-mono tabular-nums text-2xl font-semibold text-white">
                  {spec.annualFee}
                </div>
              </div>
              <div>
                <div className="text-xs text-[#9CC5E8]">{t.cards.aprRange}</div>
                <div className="mt-1 font-mono tabular-nums text-sm sm:text-base font-medium text-white">
                  {spec.apr}
                </div>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-[#D8E7F6]">
              {spec.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#78C7F6] shrink-0 mt-0.5" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() =>
                openModal({
                  mode: 'account',
                  defaultProduct: 'Titanium Reserve / Crimson Apex Card',
                  defaultAmount: '15000',
                })
              }
              className="inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-[#921B2D] hover:bg-[#A82236] text-white text-sm font-medium transition-colors shadow-lg cursor-pointer"
            >
              <span>{t.cards.requestCard}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Live Annual Rewards Estimator */}
      <Reveal>
      <section>
        <GlassCard className="p-7 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0A1D37] dark:text-white">
                  {t.cards.calcTitle}
                </h2>
                <p className="mt-1 text-sm text-[#4A607A] dark:text-[#A9BED6]">
                  {t.cards.calcSubtitle}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-[#374F6B] dark:text-[#C5D6E8]">
                      {t.cards.travelSpend}
                    </span>
                    <span className="font-mono tabular-nums font-semibold text-[#0A1D37] dark:text-white">
                      {formatCurrency(travelSpend, 0)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={10000}
                    step={100}
                    value={travelSpend}
                    onChange={(e) => setTravelSpend(Number(e.target.value))}
                    className="w-full bo-slider"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-[#374F6B] dark:text-[#C5D6E8]">
                      {t.cards.diningSpend}
                    </span>
                    <span className="font-mono tabular-nums font-semibold text-[#0A1D37] dark:text-white">
                      {formatCurrency(diningSpend, 0)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={6000}
                    step={100}
                    value={diningSpend}
                    onChange={(e) => setDiningSpend(Number(e.target.value))}
                    className="w-full bo-slider"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-[#374F6B] dark:text-[#C5D6E8]">
                      {t.cards.generalSpend}
                    </span>
                    <span className="font-mono tabular-nums font-semibold text-[#0A1D37] dark:text-white">
                      {formatCurrency(generalSpend, 0)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={25000}
                    step={250}
                    value={generalSpend}
                    onChange={(e) => setGeneralSpend(Number(e.target.value))}
                    className="w-full bo-slider"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-7 rounded-2xl bg-[#0A5C99]/8 dark:bg-[#0A5C99]/22 border border-[#0A5C99]/18 space-y-4">
              <div className="text-xs font-medium text-[#445F7D] dark:text-[#B4CCE4]">
                {cardName} · {t.cards.estimatedAnnualRewards}
              </div>
              <div className="font-mono tabular-nums text-4xl font-semibold text-[#0A5C99] dark:text-[#78C7F6]">
                {formatCurrency(annualRewards, 0)}
              </div>
              <p className="text-xs text-[#546D88] dark:text-[#99B3CE] leading-relaxed">
                Rewards post automatically as cash statement credits or direct transfers into Oceanic High-Yield Savings.
              </p>
            </div>
          </div>
        </GlassCard>
      </section>
      </Reveal>
    </div>
  );
};
