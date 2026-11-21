import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, CreditCard } from 'lucide-react';
import { US_SUBSCRIPTIONS, SubscriptionCategory } from '../data/subscriptions';
import { GlassCard } from './GlassCard';
import { Reveal } from './Reveal';
import { useApp } from '../context/AppContext';

export const SubscriptionsShowcase: React.FC = () => {
  const { navigate, formatCurrency } = useApp();
  const [filter, setFilter] = useState<'all' | SubscriptionCategory>('all');

  const visibleServices =
    filter === 'all'
      ? US_SUBSCRIPTIONS
      : US_SUBSCRIPTIONS.filter((item) => item.category === filter);

  const tabs: { id: 'all' | SubscriptionCategory; label: string }[] = [
    { id: 'all', label: `All ${US_SUBSCRIPTIONS.length} Subscriptions` },
    { id: 'entertainment', label: 'Entertainment' },
    { id: 'software', label: 'Software' },
    { id: 'utility', label: 'Utility' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6">
      <Reveal>
        <GlassCard className="p-6 sm:p-10 space-y-8">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2.5">
              <p className="text-xs sm:text-sm font-medium text-[#921B2D] dark:text-[#F06D80]">
                Accepted Worldwide · 20+ Popular U.S. Subscriptions
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#081A33] dark:text-white leading-tight"
                style={{ textWrap: 'balance' }}
              >
                Pay for Netflix, Amazon, ChatGPT, and 20+ American subscriptions with zero declines.
              </h2>
              <p className="text-sm sm:text-base text-[#445A75] dark:text-[#AFC3D8] leading-relaxed">
                Your BlueOcean USD virtual card is accepted across major U.S. streaming, cloud, AI, shopping, and software platforms—billed cleanly in dollars with no failed foreign card errors.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#0A2342]/6 dark:bg-white/8 self-start">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    filter === tab.id
                      ? 'bg-[#0A5C99] text-white shadow-sm'
                      : 'text-[#39516E] dark:text-[#BDD0E4] hover:text-[#0A1D37] dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 20 Real Brand Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {visibleServices.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col justify-between p-4 rounded-2xl bg-white/75 dark:bg-white/6 border border-[#0A2342]/10 dark:border-white/10 hover:border-[#0A5C99]/35 dark:hover:border-[#78C7F6]/35 hover:bg-white dark:hover:bg-white/10 transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0A2342]/5 dark:bg-white/10 flex items-center justify-center shrink-0">
                    {service.renderLogo(21)}
                  </div>
                  <span className="font-mono tabular-nums text-xs font-semibold text-[#0A5C99] dark:text-[#78C7F6]">
                    {formatCurrency(service.price)}/mo
                  </span>
                </div>

                <div className="mt-3.5">
                  <div className="font-display text-sm font-semibold text-[#0A1D37] dark:text-white truncate">
                    {service.name}
                  </div>
                  <div className="text-[11px] text-[#5C6F87] dark:text-[#96AFCB] truncate mt-0.5">
                    {service.plan}
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#0A2342]/8 dark:border-white/10 flex items-center gap-1.5 text-[11px] font-medium text-[#0A5C99] dark:text-[#7CC8F8]">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Virtual Card Accepted</span>
                </div>
              </div>
            ))}
          </div>

          {/* Conversion Footer Strip */}
          <div className="pt-4 border-t border-[#0A2342]/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#921B2D]/10 dark:bg-[#921B2D]/25 text-[#921B2D] dark:text-[#F06D80] flex items-center justify-center shrink-0">
                <CreditCard className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm text-[#354E6B] dark:text-[#C5D6E8]">
                <strong className="text-[#0A1D37] dark:text-white">
                  Direct subscription billing inside your Customer Portal.
                </strong>{' '}
                Issue a virtual card in seconds and pay or pause any subscription in one tap.
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate('portal')}
              className="inline-flex items-center justify-center gap-2 px-5 h-11 rounded-xl bg-[#921B2D] hover:bg-[#A82236] text-white text-sm font-medium whitespace-nowrap shadow-md transition-colors shrink-0 cursor-pointer"
            >
              <span>Pay Subscriptions in Portal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
};
