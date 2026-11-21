import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, Fingerprint, Landmark, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { GlassCard } from '../components/GlassCard';
import { MediaFrame } from '../components/MediaFrame';
import { Reveal } from '../components/Reveal';

const SECURITY_IMG = '/src/assets/images/security_titanium_vault_1795099379522.jpg';

const SAFEGUARDS = [
  {
    id: 'passkey',
    title: 'Face ID, Fingerprint & Passkey Sign-In',
    detail: 'Sign in quickly with your phone or security key—far safer than regular passwords or text codes.',
  },
  {
    id: 'sweep',
    title: '256-Bit Encryption & Segregated Funds',
    detail: 'Your account balances and personal data are encrypted end-to-end and kept separate from company operating funds.',
  },
  {
    id: 'wire',
    title: 'Extra Approval for Big Transfers',
    detail: 'Set your own limit so any large international transfer needs your direct confirmation before it leaves your account.',
  },
  {
    id: 'virtual',
    title: 'Virtual Credit Cards for Safe Online Shopping',
    detail: 'Create separate virtual credit cards for U.S. subscriptions or online stores and freeze or adjust limits anytime in one tap.',
  },
  {
    id: 'alerts',
    title: 'Instant Transfer & Card Alerts',
    detail: 'Get a real-time notification the second money enters, leaves, or is spent on your card anywhere in the world.',
  },
];

export const SecurityTrustPage: React.FC = () => {
  const { t, openModal } = useApp();
  const [enabledIds, setEnabledIds] = useState<string[]>([
    'passkey',
    'sweep',
    'wire',
    'virtual',
  ]);

  const toggleItem = (id: string) => {
    setEnabledIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const coveragePct = Math.round((enabledIds.length / SAFEGUARDS.length) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 space-y-16">
      {/* Split Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 flex"
        >
          <GlassCard className="p-7 sm:p-9 flex flex-col justify-center space-y-5 w-full">
            <p className="text-xs sm:text-sm font-medium text-[#921B2D] dark:text-[#EE6478]">
              {t.security.kicker}
            </p>
            <h1
              className="font-display font-bold tracking-tight text-[#081A33] dark:text-white leading-tight"
              style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.35rem)', textWrap: 'balance' }}
            >
              {t.security.title}
            </h1>
            <p className="text-base sm:text-lg text-[#354E6B] dark:text-[#BDD0E4] leading-relaxed">
              {t.security.subtitle}
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() =>
                  openModal({
                    mode: 'advisor',
                    defaultProduct: 'Everyday Global Account + Savings',
                    defaultAmount: '10000',
                  })
                }
                className="px-6 h-12 rounded-xl bg-[#0A5C99] hover:bg-[#0D6CB2] text-white text-sm font-medium transition-colors shadow-lg whitespace-nowrap cursor-pointer"
              >
                {t.security.reportFraud}
              </button>
            </div>
          </GlassCard>
        </motion.div>

        <div className="lg:col-span-6">
          <MediaFrame
            src={SECURITY_IMG}
            alt="BlueOcean security vault visual"
            aspectClass="aspect-[4/3] lg:h-full"
            caption="Bank-grade encryption, instant alerts, and regular independent security checks."
            priority
          />
        </div>
      </section>

      {/* 3 Security Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="p-7 space-y-3">
          <Landmark className="w-6 h-6 text-[#0A5C99] dark:text-[#78C7F6]" />
          <h2 className="font-display text-xl font-semibold text-[#0A1D37] dark:text-white">
            Instant Virtual Card Controls
          </h2>
          <p className="text-sm text-[#445A75] dark:text-[#B4C7DC] leading-relaxed">
            Freeze any virtual credit card in one tap, set custom daily spending limits, and keep your subscriptions protected from unexpected charges.
          </p>
        </GlassCard>

        <GlassCard className="p-7 space-y-3">
          <Fingerprint className="w-6 h-6 text-[#921B2D] dark:text-[#EE6478]" />
          <h2 className="font-display text-xl font-semibold text-[#0A1D37] dark:text-white">
            Biometric Sign-In &amp; Transfer Checks
          </h2>
          <p className="text-sm text-[#445A75] dark:text-[#B4C7DC] leading-relaxed">
            Your fingerprint, Face ID, or device passkey confirms logins, large international transfers, and card limit changes so only you stay in control.
          </p>
        </GlassCard>

        <GlassCard className="p-7 space-y-3">
          <Lock className="w-6 h-6 text-[#0A5C99] dark:text-[#78C7F6]" />
          <h2 className="font-display text-xl font-semibold text-[#0A1D37] dark:text-white">
            Zero Fraud Responsibility
          </h2>
          <p className="text-sm text-[#445A75] dark:text-[#B4C7DC] leading-relaxed">
            You never pay for unauthorized card charges or transfers, and our live safety team is available 24/7 in 6 languages to help immediately.
          </p>
        </GlassCard>
      </section>

      {/* Interactive Account Protection Evaluator */}
      <Reveal>
      <section>
        <GlassCard className="p-7 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0A1D37] dark:text-white">
                  {t.security.checklistTitle}
                </h2>
                <p className="mt-1 text-sm text-[#4A607A] dark:text-[#A9BED6]">
                  {t.security.checklistSubtitle}
                </p>
              </div>

              <div className="divide-y divide-[#0A2342]/10 dark:divide-white/10">
                {SAFEGUARDS.map((item) => {
                  const active = enabledIds.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      className="w-full py-4 flex items-start justify-between gap-4 text-left cursor-pointer group"
                    >
                      <div>
                        <div className="text-sm sm:text-base font-medium text-[#0A1D37] dark:text-white group-hover:text-[#0A5C99] dark:group-hover:text-[#78C7F6] transition-colors">
                          {item.title}
                        </div>
                        <p className="mt-1 text-xs sm:text-sm text-[#546B84] dark:text-[#98B1CC]">
                          {item.detail}
                        </p>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          active
                            ? 'bg-[#0A5C99] text-white'
                            : 'border border-[#0A2342]/25 dark:border-white/25'
                        }`}
                      >
                        {active && <Check className="w-4 h-4" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-4 rounded-2xl bg-gradient-to-br from-[#08203D] to-[#0C3564] text-white p-7 space-y-5">
              <div className="flex items-center gap-2 text-xs text-[#9CC5E8]">
                <ShieldCheck className="w-4 h-4 text-[#78C7F6]" />
                <span>{t.security.postureScore}</span>
              </div>
              <div className="font-mono tabular-nums text-5xl font-semibold text-white">
                {coveragePct}%
              </div>
              <div className="h-2.5 rounded-full bg-white/14 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#67C2F5] to-[#B8253A] transition-all duration-300"
                  style={{ width: `${coveragePct}%` }}
                />
              </div>
              <p className="text-xs text-[#C4D8EC] leading-relaxed">
                {enabledIds.length} of {SAFEGUARDS.length} account safety features enabled.
              </p>
            </div>
          </div>
        </GlassCard>
      </section>
      </Reveal>
    </div>
  );
};
