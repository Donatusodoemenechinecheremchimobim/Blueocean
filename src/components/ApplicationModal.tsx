import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  CheckCircle2,
  ShieldCheck,
  User,
  Building2,
  Copy,
  ArrowRight,
  Globe2,
} from 'lucide-react';
import { useApp, AccountCategory } from '../context/AppContext';
import { useBanking } from '../context/BankingContext';

const PERSONAL_PRODUCTS = [
  'Personal Global Account + Virtual Credit Card',
  'Personal High-Yield Savings & International Transfers',
  'USD Virtual Credit Card (20+ U.S. Subscriptions)',
  'Home or Personal Loan',
  'Personal Investment Advisory',
];

const BUSINESS_PRODUCTS = [
  'Business Account — Receive Client Payments',
  'Business Account + Team Virtual Credit Cards',
  'Multi-Currency Supplier & Team Payouts',
  'Business Savings Reserve',
];

const RECEIVING_CURRENCY_PRESETS = [
  'USD · EUR · GBP (Global Client Payments)',
  'USD · CAD (North America)',
  'EUR · GBP · CHF (Europe & UK)',
  'All 38+ Supported Currencies',
];

interface CreatedAccountSummary {
  ref: string;
  accountCategory: AccountCategory;
  accountName: string;
  accountNumberMasked: string;
  routingNumber: string;
  iban: string;
  swiftCode: string;
  receivingCurrencies: string;
}

export const ApplicationModal: React.FC = () => {
  const { modal, closeModal, navigate, t, pushToast } = useApp();
  const { openNewAccount, signIn } = useBanking();

  const [accountType, setAccountType] = useState<AccountCategory>(modal.defaultAccountType);
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [product, setProduct] = useState(modal.defaultProduct);
  const [receivingCurrencies, setReceivingCurrencies] = useState(RECEIVING_CURRENCY_PRESETS[0]);
  const [amount, setAmount] = useState(modal.defaultAmount);
  const [error, setError] = useState('');
  const [confirmationRef, setConfirmationRef] = useState<string | null>(null);
  const [createdSummary, setCreatedSummary] = useState<CreatedAccountSummary | null>(null);

  useEffect(() => {
    if (modal.open) {
      const nextType: AccountCategory = modal.defaultAccountType ?? 'personal';
      setAccountType(nextType);
      const list = nextType === 'business' ? BUSINESS_PRODUCTS : PERSONAL_PRODUCTS;
      const matched = list.includes(modal.defaultProduct) ? modal.defaultProduct : list[0];
      setProduct(matched);
      setAmount(modal.defaultAmount);
      setError('');
      setConfirmationRef(null);
      setCreatedSummary(null);
    }
  }, [modal.open, modal.defaultAccountType, modal.defaultProduct, modal.defaultAmount]);

  const handleSelectAccountType = (nextType: AccountCategory) => {
    setAccountType(nextType);
    setProduct(nextType === 'business' ? BUSINESS_PRODUCTS[0] : PERSONAL_PRODUCTS[0]);
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accountType === 'business' && (!businessName.trim() || businessName.trim().length < 2)) {
      setError('Please enter your business or company name.');
      return;
    }
    if (!name.trim() || name.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');

    const ref = `BO-${accountType === 'business' ? 'BIZ' : 'PER'}-${Math.floor(
      100000 + Math.random() * 899999
    )}`;

    if (modal.mode === 'account') {
      const depositNum = Number(amount);
      const accountName =
        accountType === 'business'
          ? `${businessName.trim()} — Business Account`
          : `${name.trim().split(' ')[0]}’s Personal Account`;

      const res = openNewAccount({
        accountCategory: accountType,
        accountName,
        ownerName: name.trim(),
        email: email.trim(),
        startingDeposit: Number.isFinite(depositNum) && depositNum > 0 ? depositNum : 0,
        receivingCurrencies:
          accountType === 'business' ? receivingCurrencies : 'USD · EUR · GBP',
      });

      setCreatedSummary({
        ref,
        accountCategory: accountType,
        accountName,
        accountNumberMasked: res.accountNumberMasked,
        routingNumber: res.routingNumber,
        iban: res.iban,
        swiftCode: res.swiftCode,
        receivingCurrencies:
          accountType === 'business' ? receivingCurrencies : 'USD · EUR · GBP',
      });
      setConfirmationRef(ref);
      pushToast(
        `${accountType === 'business' ? 'Business Account' : 'Personal Account'} created (${ref})`,
        'success'
      );
      return;
    }

    setConfirmationRef(ref);
    pushToast(`${t.modal.successTitle} (${ref})`, 'success');
  };

  const handleCopyReceivingDetails = () => {
    if (!createdSummary) return;
    const text = [
      `Account Name: ${createdSummary.accountName}`,
      `Account Type: ${createdSummary.accountCategory === 'business' ? 'Business Account' : 'Personal Account'}`,
      `IBAN: ${createdSummary.iban}`,
      `Routing Number: ${createdSummary.routingNumber}`,
      `SWIFT / BIC: ${createdSummary.swiftCode}`,
    ].join('\n');
    navigator.clipboard?.writeText(text).catch(() => {});
    pushToast('Receiving payment details copied to clipboard.', 'success');
  };

  const handleOpenInPortal = () => {
    signIn(email.trim() || undefined);
    closeModal();
    navigate('portal');
  };

  const productOptions = accountType === 'business' ? BUSINESS_PRODUCTS : PERSONAL_PRODUCTS;

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
            className="relative z-10 w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl glass-chrome p-6 sm:p-8 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <h2 className="font-display text-2xl font-semibold text-[#0A1D37] dark:text-white">
                  {modal.mode === 'advisor'
                    ? t.modal.titleAdvisor
                    : accountType === 'business'
                      ? 'Open a Business Account'
                      : 'Open a Personal Account'}
                </h2>
                <p className="mt-1 text-xs text-[#5C6F87] dark:text-[#9EB4CC]">
                  BlueOcean International Bank · Personal &amp; Business Accounts · 42+ Countries
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
              <div className="py-2 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0A5C99]/12 dark:bg-[#38BDF8]/15 text-[#0A5C99] dark:text-[#78C7F6] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#0A5C99]/12 dark:bg-[#38BDF8]/15 text-[#0A5C99] dark:text-[#78C7F6]">
                    {createdSummary?.accountCategory === 'business' ? (
                      <Building2 className="w-3.5 h-3.5" />
                    ) : (
                      <User className="w-3.5 h-3.5" />
                    )}
                    <span>
                      {createdSummary
                        ? createdSummary.accountCategory === 'business'
                          ? 'Business Account Ready to Receive Payments'
                          : 'Personal Account Ready'
                        : 'Request Confirmed'}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#0A1D37] dark:text-white">
                    {createdSummary ? createdSummary.accountName : t.modal.successTitle}
                  </h3>
                  <p className="text-sm text-[#435975] dark:text-[#B8CAE0] max-w-sm mx-auto">
                    {createdSummary
                      ? createdSummary.accountCategory === 'business'
                        ? 'Your business account is active inside the Customer Portal. Share your IBAN, routing, or SWIFT details with international clients to get paid directly.'
                        : 'Your personal account is active inside the Customer Portal. Send transfers worldwide or issue a virtual credit card anytime.'
                      : t.modal.successBody}
                  </p>
                </div>

                {createdSummary ? (
                  <div className="text-left rounded-2xl bg-[#0A2342]/5 dark:bg-white/6 border border-[#0A2342]/10 dark:border-white/10 p-4 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[#5C6F87] dark:text-[#96AEC8]">Account Number</span>
                      <span className="font-mono font-semibold text-[#0A1D37] dark:text-white">
                        {createdSummary.accountNumberMasked}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[#5C6F87] dark:text-[#96AEC8]">IBAN (EUR / GBP / Global)</span>
                      <span className="font-mono font-semibold text-[#0A1D37] dark:text-white">
                        {createdSummary.iban}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[#5C6F87] dark:text-[#96AEC8]">USD Routing · SWIFT</span>
                      <span className="font-mono font-semibold text-[#0A1D37] dark:text-white">
                        {createdSummary.routingNumber} · {createdSummary.swiftCode}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-[#0A2342]/8 dark:border-white/10 flex items-center justify-between">
                      <span className="text-[#5C6F87] dark:text-[#96AEC8]">Reference</span>
                      <button
                        type="button"
                        onClick={handleCopyReceivingDetails}
                        className="inline-flex items-center gap-1.5 font-medium text-[#0A5C99] dark:text-[#78C7F6] hover:underline cursor-pointer"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Receiving Details</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="py-3 px-4 rounded-xl bg-[#0A2342]/5 dark:bg-white/6 inline-block">
                    <div className="text-xs text-[#5C6F87] dark:text-[#96AEC8]">
                      {t.modal.referenceLabel}
                    </div>
                    <div className="font-mono tabular-nums text-base font-semibold text-[#0A1D37] dark:text-white mt-0.5">
                      {confirmationRef}
                    </div>
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  {createdSummary && (
                    <button
                      type="button"
                      onClick={handleOpenInPortal}
                      className="flex-1 h-11 px-4 rounded-xl bg-[#921B2D] hover:bg-[#A82236] text-white text-sm font-medium transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Open in Customer Portal</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={closeModal}
                    className={`${
                      createdSummary
                        ? 'sm:w-28 bg-[#0A2342]/8 dark:bg-white/10 text-[#0A1D37] dark:text-white hover:bg-[#0A2342]/14'
                        : 'w-full bg-[#0A5C99] hover:bg-[#0C6BB0] text-white'
                    } h-11 px-4 rounded-xl text-sm font-medium transition-colors cursor-pointer`}
                  >
                    {t.modal.done}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Account Type Toggle: Personal vs Business */}
                <div>
                  <label className="block text-xs font-medium text-[#3C5370] dark:text-[#BDD0E4] mb-1.5">
                    Account Type
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => handleSelectAccountType('personal')}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        accountType === 'personal'
                          ? 'bg-[#0A5C99]/12 dark:bg-[#0A5C99]/30 border-[#0A5C99] dark:border-[#78C7F6] shadow-sm'
                          : 'bg-white/70 dark:bg-white/5 border-[#0A2342]/12 dark:border-white/12 hover:bg-white/90 dark:hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <User
                          className={`w-4 h-4 ${
                            accountType === 'personal'
                              ? 'text-[#0A5C99] dark:text-[#78C7F6]'
                              : 'text-[#5C6F87] dark:text-[#96AEC8]'
                          }`}
                        />
                        <span className="text-sm font-semibold text-[#0A1D37] dark:text-white">
                          Personal Account
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] text-[#5C6F87] dark:text-[#96AEC8] leading-snug">
                        Everyday transfers, savings &amp; U.S. subscriptions
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSelectAccountType('business')}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        accountType === 'business'
                          ? 'bg-[#921B2D]/10 dark:bg-[#921B2D]/28 border-[#921B2D] dark:border-[#F06D80] shadow-sm'
                          : 'bg-white/70 dark:bg-white/5 border-[#0A2342]/12 dark:border-white/12 hover:bg-white/90 dark:hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Building2
                          className={`w-4 h-4 ${
                            accountType === 'business'
                              ? 'text-[#921B2D] dark:text-[#F06D80]'
                              : 'text-[#5C6F87] dark:text-[#96AEC8]'
                          }`}
                        />
                        <span className="text-sm font-semibold text-[#0A1D37] dark:text-white">
                          Business Account
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] text-[#5C6F87] dark:text-[#96AEC8] leading-snug">
                        Receive global client payments &amp; pay teams
                      </p>
                    </button>
                  </div>
                </div>

                {accountType === 'business' && (
                  <div className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-medium text-[#3C5370] dark:text-[#BDD0E4] mb-1.5">
                        Business or Company Name
                      </label>
                      <input
                        type="text"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="Northstar Creative Studio LLC"
                        className="w-full h-11 px-3.5 rounded-xl bg-white/80 dark:bg-[#061830]/70 border border-[#0A2342]/14 dark:border-white/15 text-sm text-[#0A1D37] dark:text-white focus:outline-none focus:border-[#0A5C99]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#3C5370] dark:text-[#BDD0E4] mb-1.5">
                        Currencies You Receive Payments In
                      </label>
                      <select
                        value={receivingCurrencies}
                        onChange={(e) => setReceivingCurrencies(e.target.value)}
                        className="w-full h-11 px-3 rounded-xl bg-white/80 dark:bg-[#061830]/70 border border-[#0A2342]/14 dark:border-white/15 text-sm text-[#0A1D37] dark:text-white focus:outline-none focus:border-[#0A5C99]"
                      >
                        {RECEIVING_CURRENCY_PRESETS.map((preset) => (
                          <option key={preset} value={preset}>
                            {preset}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-[#3C5370] dark:text-[#BDD0E4] mb-1.5">
                      {accountType === 'business' ? 'Authorized Owner Name' : t.modal.fullName}
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
                      {accountType === 'business' ? 'Work Email' : t.modal.email}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={
                        accountType === 'business'
                          ? 'billing@northstarstudio.com'
                          : 'jordan.vance@example.com'
                      }
                      className="w-full h-11 px-3.5 rounded-xl bg-white/80 dark:bg-[#061830]/70 border border-[#0A2342]/14 dark:border-white/15 text-sm text-[#0A1D37] dark:text-white focus:outline-none focus:border-[#0A5C99]"
                    />
                  </div>
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
                      {productOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#3C5370] dark:text-[#BDD0E4] mb-1.5">
                      {accountType === 'business'
                        ? 'Opening Balance / Est. Volume ($)'
                        : t.modal.estimatedAmount}
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

                {accountType === 'business' && (
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0A5C99]/8 dark:bg-[#0A5C99]/20 border border-[#0A5C99]/18 text-xs text-[#2B4766] dark:text-[#C5DCF2]">
                    <Globe2 className="w-4 h-4 text-[#0A5C99] dark:text-[#78C7F6] shrink-0 mt-0.5" />
                    <span>
                      Your Business Account includes local USD, EUR &amp; GBP receiving details plus SWIFT (<span className="font-mono font-semibold">BLOCGB2LXXX</span>) so overseas clients can pay your invoices directly.
                    </span>
                  </div>
                )}

                {error && (
                  <p className="text-xs font-medium text-[#921B2D] dark:text-[#F2798A]">{error}</p>
                )}

                <div className="flex items-center gap-2 text-xs text-[#5C6F87] dark:text-[#96AEC8] pt-1">
                  <ShieldCheck className="w-4 h-4 text-[#0A5C99] dark:text-[#6FC2F5] shrink-0" />
                  <span>$0 monthly account fee · Instant online setup · No impact to credit score.</span>
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
                    {modal.mode === 'advisor'
                      ? t.modal.submit
                      : accountType === 'business'
                        ? 'Create Business Account'
                        : 'Create Personal Account'}
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
