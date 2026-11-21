import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, Globe2, Layers, ArrowRight, CheckCircle2, ArrowDownLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { GlassCard } from '../components/GlassCard';
import { MediaFrame } from '../components/MediaFrame';
import { Reveal } from '../components/Reveal';

const HQ_IMG = '/src/assets/images/business_treasury_hq_1795099381602.jpg';

export const BusinessTreasuryPage: React.FC = () => {
  const { t, openModal, formatCurrency } = useApp();
  const [reserves, setReserves] = useState(1250000);

  const annualReturn = reserves * 0.051;
  const monthlyReturn = annualReturn / 12;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 space-y-16">
      {/* Hero Split */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 flex"
        >
          <GlassCard className="p-7 sm:p-9 flex flex-col justify-center space-y-5 w-full">
            <p className="text-xs sm:text-sm font-medium text-[#0A5C99] dark:text-[#78C7F6]">
              {t.business.kicker}
            </p>
            <h1
              className="font-display font-bold tracking-tight text-[#081A33] dark:text-white leading-tight"
              style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.3rem)', textWrap: 'balance' }}
            >
              {t.business.title}
            </h1>
            <p className="text-base sm:text-lg text-[#354E6B] dark:text-[#BDD0E4] leading-relaxed">
              {t.business.subtitle}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  openModal({
                    mode: 'account',
                    defaultAccountType: 'business',
                    defaultProduct: 'Business Account — Receive Client Payments',
                    defaultAmount: '25000',
                  })
                }
                className="inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-[#921B2D] hover:bg-[#A82236] text-white text-sm font-medium transition-colors shadow-lg whitespace-nowrap cursor-pointer"
              >
                <span>{t.business.scheduleTreasury}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  openModal({
                    mode: 'advisor',
                    defaultAccountType: 'business',
                    defaultProduct: 'Business Account — Receive Client Payments',
                    defaultAmount: String(reserves),
                  })
                }
                className="inline-flex items-center gap-2 px-5 h-12 rounded-xl bg-white/80 dark:bg-white/10 border border-[#0A2342]/14 dark:border-white/16 text-[#0A1D37] dark:text-white hover:bg-white dark:hover:bg-white/16 text-sm font-medium transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Talk to Business Team</span>
              </button>
            </div>
          </GlassCard>
        </motion.div>

        <div className="lg:col-span-6">
          <MediaFrame
            src={HQ_IMG}
            alt="BlueOcean international business banking office"
            aspectClass="aspect-[4/3] lg:h-full"
            caption="Business support teams across London, Frankfurt, Singapore, and New York."
            priority
          />
        </div>
      </section>

      {/* Three Commercial Pillars */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="p-7 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#0A5C99]/10 dark:bg-white/10 flex items-center justify-center text-[#0A5C99] dark:text-[#78C7F6]">
            <Building2 className="w-5 h-5" />
          </div>
          <h2 className="font-display text-xl font-semibold text-[#0A1D37] dark:text-white">
            {t.business.operatingTitle}
          </h2>
          <p className="text-sm text-[#445A75] dark:text-[#B4C7DC] leading-relaxed">
            {t.business.operatingDesc}
          </p>
          <div className="pt-2 font-mono text-xs text-[#5C6F87] dark:text-[#96AFCB]">
            Fast Global Transfers · Team Permissions · Accounting Sync
          </div>
        </GlassCard>

        <GlassCard variant="oceanic" className="p-7 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-white/12 flex items-center justify-center text-[#8FD1FA]">
            <Layers className="w-5 h-5" />
          </div>
          <h2 className="font-display text-xl font-semibold text-white">
            {t.business.treasuryTitle}
          </h2>
          <p className="text-sm text-[#C7DCF0] leading-relaxed">
            {t.business.treasuryDesc}
          </p>
          <div className="pt-2 font-mono text-xs text-[#8FD1FA]">
            Always Accessible · Clear Monthly Payouts · $0 Account Fee
          </div>
        </GlassCard>

        <GlassCard className="p-7 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#921B2D]/10 dark:bg-[#921B2D]/25 flex items-center justify-center text-[#921B2D] dark:text-[#F06D80]">
            <Globe2 className="w-5 h-5" />
          </div>
          <h2 className="font-display text-xl font-semibold text-[#0A1D37] dark:text-white">
            {t.business.fxTitle}
          </h2>
          <p className="text-sm text-[#445A75] dark:text-[#B4C7DC] leading-relaxed">
            {t.business.fxDesc}
          </p>
          <div className="pt-2 font-mono text-xs text-[#5C6F87] dark:text-[#96AFCB]">
            38 Currencies · Fair Exchange Rates · No Hidden Markup
          </div>
        </GlassCard>
      </section>

      {/* Receive Client Payments Worldwide Strip */}
      <Reveal>
        <section>
          <GlassCard className="p-7 sm:p-9">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A5C99] dark:text-[#78C7F6]">
                  <ArrowDownLeft className="w-4 h-4" />
                  <span>Receive International Business Payments</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0A1D37] dark:text-white">
                  Get paid by overseas clients like a local business.
                </h2>
                <p className="text-sm text-[#445A75] dark:text-[#B4C7DC] leading-relaxed">
                  Every BlueOcean Business Account comes with ready-to-share receiving details for USD, EUR, GBP, and global SWIFT wires—so clients, marketplaces, and payment platforms can pay you directly without losing money on bad rates.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    currency: 'USD Account Details',
                    detail: 'ACH & Wire Routing',
                    note: 'Receive U.S. client invoices, Stripe & marketplace payouts',
                  },
                  {
                    currency: 'EUR & GBP Details',
                    detail: 'SEPA & Faster Payments IBAN',
                    note: 'Get paid by European and UK customers with zero incoming fee',
                  },
                  {
                    currency: 'Global SWIFT Ready',
                    detail: 'BIC: BLOCGB2LXXX',
                    note: 'Accept incoming wires in 38+ currencies from 42+ countries',
                  },
                ].map((item) => (
                  <div
                    key={item.currency}
                    className="p-4 rounded-2xl bg-[#0A2342]/4 dark:bg-white/6 border border-[#0A2342]/10 dark:border-white/10 space-y-2"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0A5C99] dark:text-[#78C7F6]">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.currency}</span>
                    </div>
                    <div className="font-mono text-xs font-semibold text-[#0A1D37] dark:text-white">
                      {item.detail}
                    </div>
                    <p className="text-xs text-[#546B86] dark:text-[#A4BBD4] leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </section>
      </Reveal>

      {/* Corporate Cash Yield Estimator */}
      <Reveal>
      <section>
        <GlassCard className="p-7 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0A1D37] dark:text-white">
                {t.business.calcTitle}
              </h2>
              <p className="text-sm text-[#4A607A] dark:text-[#A9BED6]">
                {t.business.calcSubtitle}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-[#374F6B] dark:text-[#C5D6E8]">
                    {t.business.cashReserves}
                  </span>
                  <span className="font-mono tabular-nums text-lg font-semibold text-[#0A1D37] dark:text-white">
                    {formatCurrency(reserves, 0)}
                  </span>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={10000000}
                  step={50000}
                  value={reserves}
                  onChange={(e) => setReserves(Number(e.target.value))}
                  className="w-full bo-slider"
                />
                <div className="flex justify-between font-mono text-xs text-[#61768F] dark:text-[#8BA4C2]">
                  <span>$100K</span>
                  <span>$5.0M</span>
                  <span>$10.0M</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-[#0A5C99]/8 dark:bg-[#0A5C99]/22 border border-[#0A5C99]/18">
                <div className="text-xs text-[#435D7A] dark:text-[#AFC9E4]">
                  {t.business.annualTreasuryYield}
                </div>
                <div className="mt-2 font-mono tabular-nums text-2xl font-semibold text-[#0A5C99] dark:text-[#78C7F6]">
                  {formatCurrency(annualReturn, 0)}
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white/70 dark:bg-white/6 border border-[#0A2342]/10 dark:border-white/10">
                <div className="text-xs text-[#5C6F87] dark:text-[#98B1CC]">
                  {t.business.monthlyYield}
                </div>
                <div className="mt-2 font-mono tabular-nums text-2xl font-semibold text-[#0A1D37] dark:text-white">
                  {formatCurrency(monthlyReturn, 0)}
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-[#921B2D]/8 dark:bg-[#921B2D]/20 border border-[#921B2D]/18">
                <div className="text-xs text-[#5E2D37] dark:text-[#E5B8C0]">
                  Monthly Account Fee
                </div>
                <div className="mt-2 font-mono tabular-nums text-2xl font-semibold text-[#921B2D] dark:text-[#F06D80]">
                  $0 / mo
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>
      </Reveal>
    </div>
  );
};
