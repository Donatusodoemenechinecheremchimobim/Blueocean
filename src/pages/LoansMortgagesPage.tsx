import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Home, RefreshCw, Car, Briefcase } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { GlassCard } from '../components/GlassCard';
import { Reveal } from '../components/Reveal';

export const LoansMortgagesPage: React.FC = () => {
  const { t, openModal, formatCurrency } = useApp();
  const [propertyPrice, setPropertyPrice] = useState(650000);
  const [downPercent, setDownPercent] = useState(20);
  const [rate, setRate] = useState(6.15);
  const [termYears, setTermYears] = useState<15 | 20 | 30>(30);

  const downAmount = (propertyPrice * downPercent) / 100;
  const principal = Math.max(0, propertyPrice - downAmount);
  const monthlyRate = rate / 100 / 12;
  const totalPayments = termYears * 12;

  const monthlyPayment =
    monthlyRate > 0
      ? (principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
        (Math.pow(1 + monthlyRate, totalPayments) - 1)
      : principal / totalPayments;

  const totalPaid = monthlyPayment * totalPayments;
  const totalInterest = Math.max(0, totalPaid - principal);
  const principalRatio = totalPaid > 0 ? Math.round((principal / totalPaid) * 100) : 100;
  const interestRatio = 100 - principalRatio;

  const loanProducts = [
    {
      icon: <Home className="w-5 h-5 text-[#0A5C99] dark:text-[#78C7F6]" />,
      title: 'Fixed & Jumbo Mortgages',
      rate: 'From 5.95% APR',
      desc: 'Primary, secondary, and coastal residences up to $5M with 72-hour digital underwriting and relationship pricing.',
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-[#0A5C99] dark:text-[#78C7F6]" />,
      title: 'Rate-Term Refinance',
      rate: 'Zero Lender Origination Fee',
      desc: 'Lower your monthly obligation or shorten your term with transparent closing disclosures and automated title coordination.',
    },
    {
      icon: <Car className="w-5 h-5 text-[#921B2D] dark:text-[#EB5B70]" />,
      title: 'Auto & EV Financing',
      rate: 'From 5.29% APR',
      desc: 'Direct dealer or private-party financing up to $180,000 with same-day funding approval inside the Customer Portal.',
    },
    {
      icon: <Briefcase className="w-5 h-5 text-[#0A5C99] dark:text-[#78C7F6]" />,
      title: 'Personal Credit Lines',
      rate: 'From 7.45% APR',
      desc: 'Unsecured liquidity from $15,000 to $150,000 with zero prepayment penalties and flexible draw schedules.',
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
            {t.loans.kicker}
          </p>
          <h1
            className="font-display font-bold tracking-tight text-[#081A33] dark:text-white leading-tight"
            style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.35rem)', textWrap: 'balance' }}
          >
            {t.loans.title}
          </h1>
          <p className="text-base sm:text-lg text-[#354E6B] dark:text-[#BDD0E4] leading-relaxed">
            {t.loans.subtitle}
          </p>
        </GlassCard>
      </motion.section>

      {/* Interactive Mortgage & Amortization Calculator */}
      <section>
        <GlassCard className="p-7 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0A1D37] dark:text-white">
                  {t.loans.calcTitle}
                </h2>
                <p className="mt-1 text-sm text-[#4A607A] dark:text-[#A9BED6]">
                  {t.loans.calcSubtitle}
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-[#374F6B] dark:text-[#C5D6E8]">
                      {t.loans.propertyPrice}
                    </span>
                    <span className="font-mono tabular-nums font-semibold text-[#0A1D37] dark:text-white">
                      {formatCurrency(propertyPrice, 0)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={200000}
                    max={3000000}
                    step={25000}
                    value={propertyPrice}
                    onChange={(e) => setPropertyPrice(Number(e.target.value))}
                    className="w-full bo-slider"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-[#374F6B] dark:text-[#C5D6E8]">
                      {t.loans.downPayment} ({downPercent}%)
                    </span>
                    <span className="font-mono tabular-nums font-semibold text-[#0A1D37] dark:text-white">
                      {formatCurrency(downAmount, 0)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={50}
                    step={1}
                    value={downPercent}
                    onChange={(e) => setDownPercent(Number(e.target.value))}
                    className="w-full bo-slider"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-[#374F6B] dark:text-[#C5D6E8]">
                      {t.loans.interestRate}
                    </span>
                    <span className="font-mono tabular-nums font-semibold text-[#0A1D37] dark:text-white">
                      {rate.toFixed(2)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={4.5}
                    max={8.5}
                    step={0.05}
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full bo-slider"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <span className="text-sm font-medium text-[#374F6B] dark:text-[#C5D6E8]">
                    {t.loans.loanTerm}
                  </span>
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0A2342]/6 dark:bg-white/8">
                    {([15, 20, 30] as const).map((yrs) => (
                      <button
                        key={yrs}
                        type="button"
                        onClick={() => setTermYears(yrs)}
                        className={`px-4 py-1.5 rounded-lg font-mono text-xs font-medium transition-colors cursor-pointer ${
                          termYears === yrs
                            ? 'bg-[#0A5C99] text-white shadow-sm'
                            : 'text-[#435B77] dark:text-[#BDD0E4] hover:text-[#0A1D37] dark:hover:text-white'
                        }`}
                      >
                        {yrs} yr
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Amortization Summary */}
            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#08203D] to-[#0D3564] text-white p-7 space-y-6">
              <div>
                <div className="text-xs text-[#9CC5E8]">{t.loans.monthlyPayment}</div>
                <div className="mt-1.5 font-mono tabular-nums text-4xl font-semibold text-white">
                  {formatCurrency(monthlyPayment, 0)}
                  <span className="text-base font-normal text-[#9CC5E8]"> /mo</span>
                </div>
              </div>

              {/* Principal vs Interest Ratio Bar */}
              <div className="space-y-2">
                <div className="h-3 rounded-full overflow-hidden bg-white/12 flex">
                  <div
                    className="h-full bg-[#6BC2F5] transition-all duration-300"
                    style={{ width: `${principalRatio}%` }}
                  />
                  <div
                    className="h-full bg-[#B8253A] transition-all duration-300"
                    style={{ width: `${interestRatio}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-[#C7DCF0] font-mono tabular-nums">
                  <span>
                    {t.loans.principalShare}: {principalRatio}%
                  </span>
                  <span>
                    {t.loans.interestShare}: {interestRatio}%
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/12">
                <div>
                  <div className="text-xs text-[#9CC5E8]">{t.loans.loanAmount}</div>
                  <div className="mt-1 font-mono tabular-nums text-lg font-semibold text-white">
                    {formatCurrency(principal, 0)}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#9CC5E8]">{t.loans.totalInterest}</div>
                  <div className="mt-1 font-mono tabular-nums text-lg font-semibold text-[#F49AA7]">
                    {formatCurrency(totalInterest, 0)}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  openModal({
                    mode: 'advisor',
                    defaultProduct: 'Residential / Jumbo Mortgage',
                    defaultAmount: String(principal),
                  })
                }
                className="w-full h-11 rounded-xl bg-[#921B2D] hover:bg-[#A82236] text-white text-sm font-medium inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>{t.loans.lockRate}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Lending Division Grid */}
      <Reveal>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loanProducts.map((prod) => (
          <GlassCard key={prod.title} className="p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono tabular-nums text-xs font-semibold text-[#0A5C99] dark:text-[#78C7F6]">
                  {prod.rate}
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#0A5C99]/8 dark:bg-white/8 flex items-center justify-center">
                  {prod.icon}
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold text-[#0A1D37] dark:text-white">
                {prod.title}
              </h3>
              <p className="mt-2.5 text-sm text-[#445A75] dark:text-[#B4C7DC] leading-relaxed">
                {prod.desc}
              </p>
            </div>
          </GlassCard>
        ))}
      </section>
      </Reveal>
    </div>
  );
};
