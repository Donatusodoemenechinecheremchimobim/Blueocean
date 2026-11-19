import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ApplicationModal: React.FC = () => {
  const { modal, closeModal, t, pushToast } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [product, setProduct] = useState(modal.defaultProduct);
  const [amount, setAmount] = useState(modal.defaultAmount);
  const [error, setError] = useState('');
  const [confirmationRef, setConfirmationRef] = useState<string | null>(null);

  useEffect(() => {
    if (modal.open) {
      setProduct(modal.defaultProduct);
      setAmount(modal.defaultAmount);
      setError('');
      setConfirmationRef(null);
    }
  }, [modal.open, modal.defaultProduct, modal.defaultAmount]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || name.trim().length < 2) {
      setError('Please enter your full legal name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    const ref = `BO-APP-${Math.floor(100000 + Math.random() * 899999)}`;
    setConfirmationRef(ref);
    pushToast(`${t.modal.successTitle} (${ref})`, 'success');
  };

  return (
    <AnimatePresence>
      {modal.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-[#041021]/60 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg rounded-3xl glass-chrome p-6 sm:p-8 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="font-display text-2xl font-semibold text-[#0A1D37] dark:text-white">
                  {modal.mode === 'advisor' ? t.modal.titleAdvisor : t.modal.titleAccount}
                </h2>
                <p className="mt-1 text-xs text-[#5C6F87] dark:text-[#9EB4CC]">
                  BlueOcean Bank, N.A. · Member FDIC · 256-Bit Encrypted Onboarding
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-xl bg-[#0A2342]/6 dark:bg-white/10 text-[#0A1D37] dark:text-white hover:bg-[#0A2342]/12 transition-colors cursor-pointer"
                aria-label={t.nav.close}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {confirmationRef ? (
              <div className="py-4 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0A5C99]/12 dark:bg-[#38BDF8]/15 text-[#0A5C99] dark:text-[#78C7F6] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[#0A1D37] dark:text-white">
                  {t.modal.successTitle}
                </h3>
                <p className="text-sm text-[#435975] dark:text-[#B8CAE0] max-w-sm mx-auto">
                  {t.modal.successBody}
                </p>
                <div className="py-3 px-4 rounded-xl bg-[#0A2342]/5 dark:bg-white/6 inline-block">
                  <div className="text-xs text-[#5C6F87] dark:text-[#96AEC8]">
                    {t.modal.referenceLabel}
                  </div>
                  <div className="font-mono tabular-nums text-base font-semibold text-[#0A1D37] dark:text-white mt-0.5">
                    {confirmationRef}
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="w-full h-11 rounded-xl bg-[#0A5C99] hover:bg-[#0C6BB0] text-white text-sm font-medium transition-colors cursor-pointer"
                  >
                    {t.modal.done}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label className="block text-xs font-medium text-[#3C5370] dark:text-[#BDD0E4] mb-1.5">
                    {t.modal.fullName}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jordan Vance"
                    className="w-full h-11 px-3.5 rounded-xl bg-white/80 dark:bg-[#061830]/70 border border-[#0A2342]/14 dark:border-white/15 text-sm text-[#0A1D37] dark:text-white focus:outline-none focus:border-[#0A5C99]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#3C5370] dark:text-[#BDD0E4] mb-1.5">
                    {t.modal.email}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jordan.vance@example.com"
                    className="w-full h-11 px-3.5 rounded-xl bg-white/80 dark:bg-[#061830]/70 border border-[#0A2342]/14 dark:border-white/15 text-sm text-[#0A1D37] dark:text-white focus:outline-none focus:border-[#0A5C99]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-[#3C5370] dark:text-[#BDD0E4] mb-1.5">
                      {t.modal.product}
                    </label>
                    <select
                      value={product}
                      onChange={(e) => setProduct(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl bg-white/80 dark:bg-[#061830]/70 border border-[#0A2342]/14 dark:border-white/15 text-sm text-[#0A1D37] dark:text-white focus:outline-none focus:border-[#0A5C99]"
                    >
                      <option value="Premier Checking + High-Yield Savings">
                        Premier Checking + Savings (4.85% APY)
                      </option>
                      <option value="Business Operating & Treasury Sweep">
                        Business Treasury Sweep (5.10% APY)
                      </option>
                      <option value="Titanium Reserve / Crimson Apex Card">
                        Machined Metal Card Suite
                      </option>
                      <option value="Residential / Jumbo Mortgage">
                        Residential &amp; Jumbo Mortgage
                      </option>
                      <option value="Private Wealth Fiduciary Mandate">
                        Private Wealth Advisory
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#3C5370] dark:text-[#BDD0E4] mb-1.5">
                      {t.modal.estimatedAmount}
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full h-11 px-3.5 rounded-xl bg-white/80 dark:bg-[#061830]/70 border border-[#0A2342]/14 dark:border-white/15 font-mono tabular-nums text-sm text-[#0A1D37] dark:text-white focus:outline-none focus:border-[#0A5C99]"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-xs font-medium text-[#921B2D] dark:text-[#F2798A]">{error}</p>
                )}

                <div className="flex items-center gap-2 text-xs text-[#5C6F87] dark:text-[#96AEC8] pt-1">
                  <ShieldCheck className="w-4 h-4 text-[#0A5C99] dark:text-[#6FC2F5] shrink-0" />
                  <span>No impact to credit score for rate inquiry or deposit pre-registration.</span>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="h-11 px-4 rounded-xl text-sm font-medium text-[#445B76] dark:text-[#B9CCE0] hover:bg-[#0A2342]/6 dark:hover:bg-white/8 transition-colors cursor-pointer"
                  >
                    {t.modal.cancel}
                  </button>
                  <button
                    type="submit"
                    className="h-11 px-6 rounded-xl bg-[#921B2D] hover:bg-[#A82236] text-white text-sm font-medium transition-colors shadow-md cursor-pointer"
                  >
                    {t.modal.submit}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
