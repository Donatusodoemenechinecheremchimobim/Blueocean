import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { GlassCard } from '../components/GlassCard';
import { MediaFrame } from '../components/MediaFrame';
import { Reveal } from '../components/Reveal';

const WEALTH_IMG = '/src/assets/images/wealth_coastal_pavilion_1795099365607.jpg';

type RiskProfile = 'conservative' | 'balanced' | 'growth';

const PORTFOLIOS: Record<
  RiskProfile,
  {
    targetRange: string;
    fee: string;
    description: string;
    allocations: { label: string; pct: number; color: string }[];
  }
> = {
  conservative: {
    targetRange: '5.2% – 6.8% Annualized',
    fee: '0.35% Fiduciary Advisory',
    description:
      'Prioritizes principal preservation and tax-advantaged U.S. Treasury & Municipal bond ladders with low volatility.',
    allocations: [
      { label: 'U.S. Treasury & Municipal Ladders', pct: 62, color: 'bg-[#0A5C99]' },
      { label: 'Investment-Grade Corporate Credit', pct: 18, color: 'bg-[#2995D9]' },
      { label: 'Dividend Quality Equities', pct: 12, color: 'bg-[#921B2D]' },
      { label: 'Liquid Treasury Sweep Cash', pct: 8, color: 'bg-[#8799B0]' },
    ],
  },
  balanced: {
    targetRange: '7.4% – 9.6% Annualized',
    fee: '0.45% Fiduciary Advisory',
    description:
      'Combines tax-loss harvested U.S. & Developed Direct Indexing with high-grade fixed income and real-asset ballast.',
    allocations: [
      { label: 'Tax-Managed Direct Index Equities', pct: 48, color: 'bg-[#0A5C99]' },
      { label: 'U.S. Treasury & Municipal Bonds', pct: 32, color: 'bg-[#2995D9]' },
      { label: 'Private Credit & Real Assets', pct: 14, color: 'bg-[#921B2D]' },
      { label: 'Liquid Treasury Sweep Cash', pct: 6, color: 'bg-[#8799B0]' },
    ],
  },
  growth: {
    targetRange: '9.2% – 12.1% Annualized',
    fee: '0.50% Fiduciary Advisory',
    description:
      'Long-horizon capital appreciation anchored in global public equities, private institutional co-investments, and active tax alpha.',
    allocations: [
      { label: 'Global Direct Index Equities', pct: 66, color: 'bg-[#0A5C99]' },
      { label: 'Institutional Private Equity & Credit', pct: 18, color: 'bg-[#921B2D]' },
      { label: 'Short-Duration U.S. Treasuries', pct: 12, color: 'bg-[#2995D9]' },
      { label: 'Liquid Treasury Sweep Cash', pct: 4, color: 'bg-[#8799B0]' },
    ],
  },
};

export const PrivateWealthPage: React.FC = () => {
  const { t, openModal } = useApp();
  const [profile, setProfile] = useState<RiskProfile>('balanced');
  const activePortfolio = PORTFOLIOS[profile];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 space-y-16">
      {/* Editorial Hero Split */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 flex"
        >
          <GlassCard className="p-7 sm:p-9 flex flex-col justify-center space-y-5 w-full">
            <p className="text-xs sm:text-sm font-medium text-[#0A5C99] dark:text-[#78C7F6]">
              {t.wealth.kicker}
            </p>
            <h1
              className="font-display font-bold tracking-tight text-[#081A33] dark:text-white leading-tight"
              style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.35rem)', textWrap: 'balance' }}
            >
              {t.wealth.title}
            </h1>
            <p className="text-base sm:text-lg text-[#354E6B] dark:text-[#BDD0E4] leading-relaxed">
              {t.wealth.subtitle}
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() =>
                  openModal({
                    mode: 'advisor',
                    defaultProduct: 'Private Wealth Fiduciary Mandate',
                    defaultAmount: '500000',
                  })
                }
                className="inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-[#921B2D] hover:bg-[#A82236] text-white text-sm font-medium transition-colors shadow-lg whitespace-nowrap cursor-pointer"
              >
                <span>{t.wealth.bookAdvisor}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </GlassCard>
        </motion.div>

        <div className="lg:col-span-6">
          <MediaFrame
            src={WEALTH_IMG}
            alt="BlueOcean minimalist coastal glass and brushed titanium private wealth pavilion"
            aspectClass="aspect-[16/10] lg:h-full"
            caption="Private fiduciary offices serving families, executives, and endowments nationwide."
            priority
          />
        </div>
      </section>

      {/* Interactive Portfolio Allocation Explorer */}
      <Reveal>
      <section>
        <GlassCard className="p-7 sm:p-10 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0A1D37] dark:text-white">
                {t.wealth.allocatorTitle}
              </h2>
              <p className="mt-1 text-sm text-[#4A607A] dark:text-[#A9BED6]">
                {t.wealth.allocatorSubtitle}
              </p>
            </div>

            <div className="inline-flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-[#0A2342]/6 dark:bg-white/8 self-start">
              {(
                [
                  ['conservative', t.wealth.conservative],
                  ['balanced', t.wealth.balanced],
                  ['growth', t.wealth.growth],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setProfile(key)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    profile === key
                      ? 'bg-[#0A5C99] text-white shadow-sm'
                      : 'text-[#39516E] dark:text-[#BDD0E4] hover:text-[#0A1D37] dark:hover:text-white'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              {activePortfolio.allocations.map((slice) => (
                <div key={slice.label} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-[#163050] dark:text-[#DDE8F4]">
                      {slice.label}
                    </span>
                    <span className="font-mono tabular-nums font-semibold text-[#0A1D37] dark:text-white">
                      {slice.pct}%
                    </span>
                  </div>
                  <div className="h-2.5 rounded-full bg-[#0A2342]/8 dark:bg-white/10 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${slice.color} transition-all duration-500`}
                      style={{ width: `${slice.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#08203D] to-[#0C3462] text-white p-7 space-y-4">
              <div className="text-xs text-[#9CC5E8]">{t.wealth.expectedRange}</div>
              <div className="font-mono tabular-nums text-2xl sm:text-3xl font-semibold text-white">
                {activePortfolio.targetRange}
              </div>
              <div className="text-xs font-mono text-[#78C7F6]">{activePortfolio.fee}</div>
              <p className="text-sm text-[#C7DCF0] leading-relaxed">
                {activePortfolio.description}
              </p>
              <ul className="space-y-2 pt-2 text-xs text-[#DCEAF7]">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#78C7F6]" />
                  <span>Daily automated tax-loss harvesting</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#78C7F6]" />
                  <span>Direct custody in client’s legal name</span>
                </li>
              </ul>
            </div>
          </div>
        </GlassCard>
      </section>
      </Reveal>
    </div>
  );
};
