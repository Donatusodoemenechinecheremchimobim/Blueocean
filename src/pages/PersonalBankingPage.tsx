import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, Minus } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { GlassCard } from '../components/GlassCard';
import { Reveal } from '../components/Reveal';

export const PersonalBankingPage: React.FC = () => {
  const { t, openModal, formatCurrency } = useApp();
  const [initialDeposit, setInitialDeposit] = useState(25000);
  const [monthlyAdd, setMonthlyAdd] = useState(1200);
  const [years, setYears] = useState(5);

  const annualRate = 0.0485;
  const months = years * 12;
  const monthlyRate = annualRate / 12;

  const futureInitial = initialDeposit * Math.pow(1 + monthlyRate, months);
  const futureSeries =
    monthlyAdd * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
  const totalBalance = futureInitial + futureSeries;
  const totalPrincipal = initialDeposit + monthlyAdd * months;
  const interestEarned = Math.max(0, totalBalance - totalPrincipal);

  const comparisonRows = [
    {
      feature: 'Savings Interest Rate',
      blueOcean: '4.85% APY',
      legacy: '0.01% – 0.45% APY',
    },
    {
      feature: 'Monthly Account Fee',
      blueOcean: '$0 (No minimum balance)',
      legacy: '$12 – $25 / month',
    },
    {
      feature: 'Worldwide Fee-Free ATMs',
      blueOcean: '55,000+ Global ATMs + Fee Rebates',
      legacy: 'Local branch network only',
    },
    {
      feature: 'Sending & Receiving Abroad',
      blueOcean: '38+ Currencies · Fast Transfers',
      legacy: '3% hidden markup · 3–5 day waits',
    },
    {
      feature: 'Overdraft Penalty Fees',
      blueOcean: '$0 with automatic savings backup',
      legacy: '$35 per occurrence',
    },
    {
      feature: 'Virtual Credit Cards',
      blueOcean: 'Instant USD Virtual Credit Cards (20+ U.S. Subscriptions)',
      legacy: 'Wait 7–10 days for mail delivery',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 space-y-16">
      {/* Glassmorphic Header */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <GlassCard className="p-7 sm:p-10 max-w-4xl space-y-4">
          <p className="text-xs sm:text-sm font-medium text-[#0A5C99] dark:text-[#78C7F6]">
            {t.personal.kicker}
          </p>
          <h1
            className="font-display font-bold tracking-tight text-[#081A33] dark:text-white leading-tight"
            style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.35rem)', textWrap: 'balance' }}
          >
            {t.personal.title}
          </h1>
          <p className="text-base sm:text-lg text-[#354E6B] dark:text-[#BDD0E4] leading-relaxed">
            {t.personal.subtitle}
          </p>
        </GlassCard>
      </motion.section>

      {/* Product Tiers */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="p-7 flex flex-col justify-between">
          <div>
            <div className="font-mono tabular-nums text-xs font-semibold text-[#0A5C99] dark:text-[#78C7F6]">
              01 · Everyday Spending · $0 Monthly Fee
            </div>
            <h2 className="mt-2 font-display text-2xl font-semibold text-[#0A1D37] dark:text-white">
              {t.personal.checkingTitle}
            </h2>
            <p className="mt-3 text-sm text-[#445A75] dark:text-[#B4C7DC] leading-relaxed">
              {t.personal.checkingDesc}
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              openModal({
                mode: 'account',
                defaultProduct: 'Everyday Global Account + Savings',
                defaultAmount: '10000',
              })
            }
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#921B2D] dark:text-[#EE6478] hover:underline cursor-pointer"
          >
            <span>{t.personal.applyNow}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </GlassCard>

        <GlassCard variant="oceanic" className="p-7 flex flex-col justify-between">
          <div>
            <div className="font-mono tabular-nums text-xs font-semibold text-[#8FD1FA]">
              02 · Flexible Savings · No Minimum
            </div>
            <h2 className="mt-2 font-display text-2xl font-semibold text-white">
              {t.personal.savingsTitle}
            </h2>
            <p className="mt-3 text-sm text-[#C7DCF0] leading-relaxed">
              {t.personal.savingsDesc}
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              openModal({
                mode: 'account',
                defaultProduct: 'Everyday Global Account + Savings',
                defaultAmount: String(initialDeposit),
              })
            }
            className="mt-6 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-white text-[#081A33] hover:bg-[#EAF2FA] text-sm font-semibold transition-colors cursor-pointer"
          >
            <span>{t.personal.applyNow}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </GlassCard>

        <GlassCard className="p-7 flex flex-col justify-between">
          <div>
            <div className="font-mono tabular-nums text-xs font-semibold text-[#921B2D] dark:text-[#EE6478]">
              03 · Fixed-Term Savings · 6–24 Months
            </div>
            <h2 className="mt-2 font-display text-2xl font-semibold text-[#0A1D37] dark:text-white">
              {t.personal.cdTitle}
            </h2>
            <p className="mt-3 text-sm text-[#445A75] dark:text-[#B4C7DC] leading-relaxed">
              {t.personal.cdDesc}
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              openModal({
                mode: 'account',
                defaultProduct: 'Premier Checking + High-Yield Savings',
                defaultAmount: '50000',
              })
            }
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#0A5C99] dark:text-[#78C7F6] hover:underline cursor-pointer"
          >
            <span>{t.personal.applyNow}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </GlassCard>
      </section>

      {/* Interactive Compound Savings Simulator */}
      <Reveal>
      <section>
        <GlassCard className="p-7 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0A1D37] dark:text-white">
                  {t.personal.calcTitle}
                </h2>
                <p className="mt-1.5 text-sm text-[#4A607A] dark:text-[#A9BED6]">
                  {t.personal.calcSubtitle}
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-[#374F6B] dark:text-[#C5D6E8]">
                      {t.personal.initialDeposit}
                    </span>
                    <span className="font-mono tabular-nums font-semibold text-[#0A1D37] dark:text-white">
                      {formatCurrency(initialDeposit, 0)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1000}
                    max={250000}
                    step={1000}
                    value={initialDeposit}
                    onChange={(e) => setInitialDeposit(Number(e.target.value))}
                    className="w-full bo-slider"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-[#374F6B] dark:text-[#C5D6E8]">
                      {t.personal.monthlyContribution}
                    </span>
                    <span className="font-mono tabular-nums font-semibold text-[#0A1D37] dark:text-white">
                      {formatCurrency(monthlyAdd, 0)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={10000}
                    step={100}
                    value={monthlyAdd}
                    onChange={(e) => setMonthlyAdd(Number(e.target.value))}
                    className="w-full bo-slider"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-[#374F6B] dark:text-[#C5D6E8]">
                      {t.personal.horizonYears}
                    </span>
                    <span className="font-mono tabular-nums font-semibold text-[#0A1D37] dark:text-white">
                      {years} {t.personal.yearsUnit}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={20}
                    step={1}
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full bo-slider"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#08203D] to-[#0C3463] text-white p-7 space-y-6">
              <div>
                <div className="text-xs text-[#9CC5E8]">{t.personal.projectedBalance}</div>
                <div className="mt-1.5 font-mono tabular-nums text-4xl font-semibold text-white">
                  {formatCurrency(totalBalance, 0)}
                </div>
              </div>

              <div className="h-px bg-white/15" />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-[#9CC5E8]">{t.personal.interestEarned}</div>
                  <div className="mt-1 font-mono tabular-nums text-xl font-semibold text-[#78C7F6]">
                    +{formatCurrency(interestEarned, 0)}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#9CC5E8]">APY Rate</div>
                  <div className="mt-1 font-mono tabular-nums text-xl font-semibold text-white">
                    4.85%
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  openModal({
                    mode: 'account',
                    defaultProduct: 'Premier Checking + High-Yield Savings',
                    defaultAmount: String(initialDeposit),
                  })
                }
                className="w-full h-11 rounded-xl bg-[#921B2D] hover:bg-[#A82236] text-white text-sm font-medium transition-colors cursor-pointer"
              >
                {t.personal.applyNow}
              </button>
            </div>
          </div>
        </GlassCard>
      </section>
      </Reveal>

      {/* Transparent Comparison Matrix */}
      <Reveal delayMs={60}>
      <section>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0A1D37] dark:text-white mb-6">
          {t.personal.comparisonTitle}
        </h2>
        <GlassCard className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-[#0A2342]/10 dark:border-white/10 text-xs font-medium text-[#5C6F87] dark:text-[#96AFCB]">
                <th className="py-4 px-6">{t.personal.featureCol}</th>
                <th className="py-4 px-6 text-[#0A5C99] dark:text-[#78C7F6]">
                  {t.personal.blueOceanCol}
                </th>
                <th className="py-4 px-6">{t.personal.traditionalCol}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0A2342]/8 dark:divide-white/8 text-sm">
              {comparisonRows.map((row) => (
                <tr
                  key={row.feature}
                  className="hover:bg-[#0A5C99]/4 dark:hover:bg-white/4 transition-colors"
                >
                  <td className="py-4 px-6 font-medium text-[#0A1D37] dark:text-white">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 font-mono tabular-nums font-medium text-[#0A5C99] dark:text-[#78C7F6]">
                    <span className="inline-flex items-center gap-2">
                      <Check className="w-4 h-4 shrink-0" />
                      {row.blueOcean}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-[#5C6F87] dark:text-[#94ABC4]">
                    <span className="inline-flex items-center gap-2">
                      <Minus className="w-3.5 h-3.5 shrink-0 opacity-60" />
                      {row.legacy}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </GlassCard>
      </section>
      </Reveal>
    </div>
  );
};
