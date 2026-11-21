import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  LayoutDashboard,
  ArrowLeftRight,
  CreditCard,
  PiggyBank,
  ReceiptText,
  Settings,
  LogOut,
  Copy,
  Download,
  Search,
  Lock,
  Eye,
  EyeOff,
  Snowflake,
  Plus,
  RotateCcw,
  Globe,
  Sun,
  Moon,
  ArrowUpRight,
  ArrowDownLeft,
  ShieldCheck,
  Globe2,
  Send,
  Sparkles,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useBanking } from '../context/BankingContext';
import { GlassCard } from '../components/GlassCard';
import { MetalCard3D } from '../components/MetalCard3D';
import { BlueOceanLogo } from '../components/BlueOceanLogo';
import { SUPPORTED_LOCALES } from '../i18n/translations';

type PortalTab = 'overview' | 'transfers' | 'cards' | 'vaults' | 'ledger' | 'settings';

export const ClientPortalPage: React.FC = () => {
  const { t, locale, setLocale, theme, setTheme, formatCurrency, formatDate, pushToast } = useApp();
  const {
    isAuthenticated,
    profile,
    accounts,
    transactions,
    cards,
    vaults,
    alertsEnabled,
    signIn,
    signOut,
    executeTransfer,
    toggleCardSetting,
    updateCardLimit,
    fundVault,
    createVault,
    toggleAlert,
    resetDemoData,
    exportTransactionsCsv,
  } = useBanking();

  // Sign-in form state
  const [loginEmail, setLoginEmail] = useState(profile.email);
  const [loginPassword, setLoginPassword] = useState('••••••••••••');

  // Portal Navigation & Interactive State
  const [activeTab, setActiveTab] = useState<PortalTab>('overview');
  const [selectedMonthIdx, setSelectedMonthIdx] = useState<number>(5);

  // Transfer Form
  const [transferMode, setTransferMode] = useState<'internal' | 'wire' | 'bill'>('internal');
  const [fromAcc, setFromAcc] = useState(accounts[0]?.id ?? 'acc-checking');
  const [toAcc, setToAcc] = useState(accounts[1]?.id ?? 'acc-savings');
  const [externalRecipient, setExternalRecipient] = useState('');
  const [transferAmount, setTransferAmount] = useState('1250');
  const [transferMemo, setTransferMemo] = useState('');

  // Card Management
  const [selectedCardId, setSelectedCardId] = useState(cards[0]?.id ?? 'card-titanium');
  const [revealedCardIds, setRevealedCardIds] = useState<string[]>([]);

  // Vault Creation
  const [newVaultName, setNewVaultName] = useState('');
  const [newVaultTarget, setNewVaultTarget] = useState('25000');

  // Ledger Search & Filter
  const [searchQuery, setSearchQuery] = useState('');
  const [accountFilter, setAccountFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'credit' | 'debit'>('all');

  const totalLiquidity = useMemo(
    () => accounts.reduce((sum, acc) => sum + acc.balance, 0),
    [accounts]
  );

  const filteredTransactions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return transactions.filter((tx) => {
      if (accountFilter !== 'all' && tx.accountId !== accountFilter) return false;
      if (typeFilter !== 'all' && tx.type !== typeFilter) return false;
      if (
        q &&
        !tx.merchant.toLowerCase().includes(q) &&
        !tx.category.toLowerCase().includes(q) &&
        !tx.reference.toLowerCase().includes(q)
      ) {
        return false;
      }
      return true;
    });
  }, [transactions, searchQuery, accountFilter, typeFilter]);

  const activeCard = cards.find((c) => c.id === selectedCardId) ?? cards[0];

  const handleCopyRouting = (routing: string) => {
    navigator.clipboard?.writeText(routing).catch(() => {});
    pushToast(t.portal.routingCopied, 'info');
  };

  const handleTransferSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = Number(transferAmount);
    if (!Number.isFinite(num) || num <= 0) {
      pushToast('Enter a valid transfer amount greater than $0.', 'alert');
      return;
    }
    if (transferMode === 'internal' && fromAcc === toAcc) {
      pushToast('Select two different accounts for an internal transfer.', 'alert');
      return;
    }
    const res = executeTransfer({
      fromAccountId: fromAcc,
      toAccountId: transferMode === 'internal' ? toAcc : undefined,
      externalRecipient: transferMode !== 'internal' ? externalRecipient : undefined,
      amount: num,
      memo: transferMemo,
      mode: transferMode,
    });
    if (!res.ok) {
      pushToast(t.portal.insufficientFunds, 'alert');
      return;
    }
    pushToast(t.portal.transferSuccess, 'success');
    setTransferMemo('');
    setExternalRecipient('');
  };

  const handleFundVault = (vaultId: string) => {
    const res = fundVault(vaultId, 500);
    if (!res.ok) {
      pushToast(t.portal.insufficientFunds, 'alert');
      return;
    }
    pushToast(t.portal.vaultFunded, 'success');
  };

  const handleCreateVault = (e: React.FormEvent) => {
    e.preventDefault();
    const targetNum = Number(newVaultTarget);
    if (!newVaultName.trim() || !Number.isFinite(targetNum) || targetNum <= 0) return;
    createVault(newVaultName, targetNum);
    setNewVaultName('');
    pushToast(`Created savings vault "${newVaultName.trim()}"`, 'success');
  };

  const toggleRevealCard = (cardId: string) => {
    setRevealedCardIds((prev) =>
      prev.includes(cardId) ? prev.filter((id) => id !== cardId) : [...prev, cardId]
    );
  };

  // ARCHITECTURAL GLASS VAULT CUSTOMER PORTAL SIGN-IN
  if (!isAuthenticated) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
        >
          {/* Left Deep Oceanic Vault Identity Panel */}
          <GlassCard
            variant="oceanic"
            className="lg:col-span-6 p-7 sm:p-9 flex flex-col justify-between gap-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BlueOceanLogo size={38} variant="light" />
                <div>
                  <div className="font-display font-bold text-lg tracking-tight text-white">
                    BlueOcean
                  </div>
                  <div className="text-[11px] font-mono text-[#8FD1FA]">
                    {t.nav.portal} · Protected Sign-In
                  </div>
                </div>
              </div>

              <h1
                className="font-display text-2xl sm:text-3xl font-semibold text-white leading-tight pt-1"
                style={{ textWrap: 'balance' }}
              >
                {t.portal.loginTitle}
              </h1>
              <p className="text-sm text-[#C3DAEE] leading-relaxed">
                {t.portal.loginSubtitle}
              </p>
            </div>

            <div className="py-2">
              <MetalCard3D
                finish="titanium"
                title="Titanium Reserve"
                holder={profile.name.toUpperCase()}
                maskedNumber="4532  ••••  ••••  4821"
                compact
              />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/14 text-xs text-[#CFE2F4]">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#7AC8F8] shrink-0 mt-0.5" />
                <span>Deposits protected up to $5,000,000 via partner banks</span>
              </div>
              <div className="flex items-start gap-2">
                <Globe2 className="w-4 h-4 text-[#7AC8F8] shrink-0 mt-0.5" />
                <span>Send &amp; receive money in 38+ currencies</span>
              </div>
            </div>
          </GlassCard>

          {/* Right Frosted Glass Sign-In Form */}
          <GlassCard className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-center space-y-6">
            <div className="space-y-1.5">
              <div className="text-xs font-mono font-medium text-[#0A5C99] dark:text-[#78C7F6]">
                {t.nav.portal}
              </div>
              <h2 className="font-display text-2xl font-semibold text-[#0A1D37] dark:text-white">
                {t.portal.signInCta}
              </h2>
              <p className="text-xs sm:text-sm text-[#4A607A] dark:text-[#A9BED6]">
                Check your balances, send or receive money internationally, manage your cards, and grow your savings vaults.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                signIn(loginEmail);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-medium text-[#3C5370] dark:text-[#BDD0E4] mb-1.5">
                  {t.portal.emailLabel}
                </label>
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl bg-white/85 dark:bg-[#061830]/75 border border-[#0A2342]/14 dark:border-white/15 text-sm text-[#0A1D37] dark:text-white focus:outline-none focus:border-[#0A5C99]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#3C5370] dark:text-[#BDD0E4] mb-1.5">
                  {t.portal.passwordLabel}
                </label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl bg-white/85 dark:bg-[#061830]/75 border border-[#0A2342]/14 dark:border-white/15 text-sm text-[#0A1D37] dark:text-white focus:outline-none focus:border-[#0A5C99]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-[#921B2D] hover:bg-[#A82236] active:scale-[0.99] text-white text-sm font-medium transition-all shadow-[0_12px_28px_-8px_rgba(146,27,45,0.5)] cursor-pointer"
              >
                {t.portal.signInCta}
              </button>
            </form>

            <div className="relative flex items-center justify-center">
              <div className="h-px w-full bg-[#0A2342]/10 dark:bg-white/12" />
            </div>

            <button
              type="button"
              onClick={() => signIn(profile.email)}
              className="w-full h-12 rounded-xl bg-[#0A5C99]/10 hover:bg-[#0A5C99]/18 dark:bg-white/10 dark:hover:bg-white/16 border border-[#0A5C99]/18 dark:border-white/12 text-[#0A5C99] dark:text-[#8CD2FA] text-sm font-medium transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.portal.demoQuickCta}</span>
            </button>

            <p className="text-xs text-center text-[#5C6F87] dark:text-[#90AAC7] flex items-center justify-center gap-1.5">
              <Lock className="w-3.5 h-3.5 shrink-0" />
              <span>{t.portal.demoNotice}</span>
            </p>
          </GlassCard>
        </motion.div>
      </div>
    );
  }

  // AUTHENTICATED CUSTOMER PORTAL WORKSPACE
  const portalTabs: { id: PortalTab; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: t.portal.tabOverview, icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'transfers', label: t.portal.tabTransfers, icon: <ArrowLeftRight className="w-4 h-4" /> },
    { id: 'cards', label: t.portal.tabCards, icon: <CreditCard className="w-4 h-4" /> },
    { id: 'vaults', label: t.portal.tabVaults, icon: <PiggyBank className="w-4 h-4" /> },
    { id: 'ledger', label: t.portal.tabLedger, icon: <ReceiptText className="w-4 h-4" /> },
    { id: 'settings', label: t.portal.tabSettings, icon: <Settings className="w-4 h-4" /> },
  ];

  // Cashflow visualization data (6 months)
  const cashflowBars = [
    { month: 'Jun', inVal: 19400, outVal: 9200 },
    { month: 'Jul', inVal: 22100, outVal: 11400 },
    { month: 'Aug', inVal: 20800, outVal: 10100 },
    { month: 'Sep', inVal: 24600, outVal: 12300 },
    { month: 'Oct', inVal: 23200, outVal: 9800 },
    { month: 'Nov', inVal: 26850, outVal: 10940 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Portal Sidebar (Desktop) & Horizontal Tab Strip (Mobile) */}
        <aside className="lg:col-span-3 space-y-4">
          <GlassCard className="p-5 space-y-5">
            <div>
              <div className="text-xs text-[#5C6F87] dark:text-[#96AFCB]">
                {t.portal.welcomeBack}
              </div>
              <div className="font-display text-lg font-semibold text-[#0A1D37] dark:text-white mt-0.5">
                {profile.name}
              </div>
              <div className="text-xs text-[#0A5C99] dark:text-[#78C7F6] mt-0.5">
                {profile.tier}
              </div>
            </div>

            <nav className="flex lg:flex-col gap-1.5 overflow-x-auto pb-1 lg:pb-0">
              {portalTabs.map((tab) => {
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2.5 px-3.5 min-h-[42px] rounded-xl text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#0A5C99] text-white shadow-sm'
                        : 'text-[#324966] dark:text-[#C4D5E8] hover:bg-[#0A2342]/6 dark:hover:bg-white/8'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="hidden lg:block pt-3 border-t border-[#0A2342]/10 dark:border-white/10">
              <button
                type="button"
                onClick={signOut}
                className="w-full flex items-center gap-2.5 px-3.5 h-10 rounded-xl text-xs font-medium text-[#921B2D] dark:text-[#F06D80] hover:bg-[#921B2D]/8 transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>{t.portal.signOut}</span>
              </button>
            </div>
          </GlassCard>
        </aside>

        {/* Portal Main Viewport */}
        <main className="lg:col-span-9 space-y-6">
          {/* Top Liquidity Banner */}
          <div className="rounded-2xl bg-gradient-to-r from-[#071D38] via-[#0B305C] to-[#0E4479] text-white p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-white/14 shadow-xl">
            <div>
              <div className="text-xs text-[#9CC5E8]">
                {t.portal.totalLiquidity} · Global Multi-Currency Sweep Active
              </div>
              <div className="mt-1 font-mono tabular-nums text-3xl sm:text-4xl font-semibold">
                {formatCurrency(totalLiquidity)}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => setActiveTab('transfers')}
                className="px-4 h-10 rounded-xl bg-[#921B2D] hover:bg-[#A82236] text-white text-xs sm:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer"
              >
                {t.portal.tabTransfers}
              </button>
              <button
                type="button"
                onClick={() => handleCopyRouting('BLOCGB2LXXX')}
                className="inline-flex items-center gap-1.5 px-3.5 h-10 rounded-xl bg-white/12 hover:bg-white/20 text-white font-mono text-xs whitespace-nowrap transition-colors cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>SWIFT BLOCGB2LXXX</span>
              </button>
            </div>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Tactile Glass Quick Actions Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('transfers')}
                  className="glass-panel rounded-2xl p-4 text-left hover:bg-white/90 dark:hover:bg-white/12 transition-all flex items-center gap-3 cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#921B2D]/12 dark:bg-[#921B2D]/25 text-[#921B2D] dark:text-[#F06D80] flex items-center justify-center shrink-0">
                    <Send className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-[#0A1D37] dark:text-white truncate">
                      {t.portal.tabTransfers}
                    </div>
                    <div className="text-[11px] text-[#5C6F87] dark:text-[#96AFCB] truncate">
                      ACH &amp; SWIFT
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('cards')}
                  className="glass-panel rounded-2xl p-4 text-left hover:bg-white/90 dark:hover:bg-white/12 transition-all flex items-center gap-3 cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0A5C99]/12 dark:bg-[#0A5C99]/25 text-[#0A5C99] dark:text-[#78C7F6] flex items-center justify-center shrink-0">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-[#0A1D37] dark:text-white truncate">
                      {t.portal.tabCards}
                    </div>
                    <div className="text-[11px] text-[#5C6F87] dark:text-[#96AFCB] truncate">
                      {cards.length} Metal Cards
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('vaults')}
                  className="glass-panel rounded-2xl p-4 text-left hover:bg-white/90 dark:hover:bg-white/12 transition-all flex items-center gap-3 cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0A5C99]/12 dark:bg-[#0A5C99]/25 text-[#0A5C99] dark:text-[#78C7F6] flex items-center justify-center shrink-0">
                    <PiggyBank className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-[#0A1D37] dark:text-white truncate">
                      {t.portal.tabVaults}
                    </div>
                    <div className="text-[11px] text-[#5C6F87] dark:text-[#96AFCB] truncate">
                      4.85% APY
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => exportTransactionsCsv(transactions)}
                  className="glass-panel rounded-2xl p-4 text-left hover:bg-white/90 dark:hover:bg-white/12 transition-all flex items-center gap-3 cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0A2342]/10 dark:bg-white/12 text-[#0A1D37] dark:text-white flex items-center justify-center shrink-0">
                    <Download className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-[#0A1D37] dark:text-white truncate">
                      {t.portal.exportCsv}
                    </div>
                    <div className="text-[11px] text-[#5C6F87] dark:text-[#96AFCB] truncate">
                      {transactions.length} Entries
                    </div>
                  </div>
                </button>
              </div>

              {/* 3 Account Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {accounts.map((acc) => (
                  <GlassCard key={acc.id} className="p-5 flex flex-col justify-between gap-4">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#5C6F87] dark:text-[#96AFCB]">
                        <span>{acc.accountNumberMasked}</span>
                        <span className="font-mono tabular-nums text-[#0A5C99] dark:text-[#78C7F6]">
                          {acc.apy.toFixed(2)}% APY
                        </span>
                      </div>
                      <h3 className="mt-1.5 font-display text-base font-semibold text-[#0A1D37] dark:text-white">
                        {acc.name}
                      </h3>
                    </div>
                    <div className="font-mono tabular-nums text-2xl font-semibold text-[#0A1D37] dark:text-white">
                      {formatCurrency(acc.balance)}
                    </div>
                  </GlassCard>
                ))}
              </div>

              {/* Interactive 6-Month Cashflow Chart */}
              <GlassCard className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[#0A1D37] dark:text-white">
                      6-Month Cashflow &amp; Treasury Inflows
                    </h3>
                    <p className="text-xs text-[#5C6F87] dark:text-[#96AFCB]">
                      Tap any month to inspect inflows, outflows, and net liquidity
                    </p>
                  </div>
                  {cashflowBars[selectedMonthIdx] && (
                    <div className="flex flex-wrap items-center gap-3 px-3.5 py-2 rounded-xl bg-[#0A2342]/6 dark:bg-white/8 text-xs font-mono tabular-nums">
                      <span className="font-semibold text-[#0A1D37] dark:text-white">
                        {cashflowBars[selectedMonthIdx].month}
                      </span>
                      <span className="text-[#0A5C99] dark:text-[#78C7F6]">
                        +{formatCurrency(cashflowBars[selectedMonthIdx].inVal, 0)}
                      </span>
                      <span className="text-[#921B2D] dark:text-[#F06D80]">
                        -{formatCurrency(cashflowBars[selectedMonthIdx].outVal, 0)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-6 gap-2 sm:gap-5 items-end h-44 pt-4">
                  {cashflowBars.map((b, idx) => {
                    const inH = Math.round((b.inVal / 28000) * 100);
                    const outH = Math.round((b.outVal / 28000) * 100);
                    const isSelected = idx === selectedMonthIdx;
                    return (
                      <button
                        key={b.month}
                        type="button"
                        onClick={() => setSelectedMonthIdx(idx)}
                        className={`flex flex-col items-center h-full justify-end gap-2 rounded-xl p-1.5 transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#0A5C99]/10 dark:bg-white/10'
                            : 'hover:bg-[#0A2342]/4 dark:hover:bg-white/5'
                        }`}
                      >
                        <div className="w-full flex items-end justify-center gap-1.5 h-full">
                          <div
                            title={`Inflow: ${formatCurrency(b.inVal, 0)}`}
                            className={`w-3 sm:w-5 rounded-t-md transition-all duration-300 ${
                              isSelected
                                ? 'bg-[#0A5C99] dark:bg-[#78C7F6]'
                                : 'bg-[#0A5C99]/75 dark:bg-[#67C2F5]/75'
                            }`}
                            style={{ height: `${inH}%` }}
                          />
                          <div
                            title={`Outflow: ${formatCurrency(b.outVal, 0)}`}
                            className={`w-3 sm:w-5 rounded-t-md transition-all duration-300 ${
                              isSelected
                                ? 'bg-[#921B2D] dark:bg-[#EE5D72]'
                                : 'bg-[#921B2D]/70 dark:bg-[#DF5167]/70'
                            }`}
                            style={{ height: `${outH}%` }}
                          />
                        </div>
                        <span
                          className={`font-mono text-xs ${
                            isSelected
                              ? 'font-semibold text-[#0A1D37] dark:text-white'
                              : 'text-[#5C6F87] dark:text-[#96AFCB]'
                          }`}
                        >
                          {b.month}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </GlassCard>

              {/* Recent Transactions Preview */}
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-lg font-semibold text-[#0A1D37] dark:text-white">
                    Recent Ledger Activity
                  </h3>
                  <button
                    type="button"
                    onClick={() => setActiveTab('ledger')}
                    className="text-xs font-medium text-[#0A5C99] dark:text-[#78C7F6] hover:underline cursor-pointer"
                  >
                    {t.portal.tabLedger} →
                  </button>
                </div>
                <div className="divide-y divide-[#0A2342]/8 dark:divide-white/8">
                  {transactions.slice(0, 5).map((tx) => (
                    <div
                      key={tx.id}
                      className="py-3.5 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                            tx.type === 'credit'
                              ? 'bg-[#0A5C99]/10 text-[#0A5C99] dark:bg-[#6BC2F5]/15 dark:text-[#78C7F6]'
                              : 'bg-[#0A2342]/6 text-[#3C5370] dark:bg-white/8 dark:text-[#C5D6E8]'
                          }`}
                        >
                          {tx.type === 'credit' ? (
                            <ArrowDownLeft className="w-4 h-4" />
                          ) : (
                            <ArrowUpRight className="w-4 h-4" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-[#0A1D37] dark:text-white truncate">
                            {tx.merchant}
                          </div>
                          <div className="text-xs text-[#5C6F87] dark:text-[#96AFCB]">
                            {tx.category} · {formatDate(tx.date)}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`font-mono tabular-nums text-sm font-semibold shrink-0 ${
                          tx.type === 'credit'
                            ? 'text-[#0A5C99] dark:text-[#78C7F6]'
                            : 'text-[#0A1D37] dark:text-white'
                        }`}
                      >
                        {tx.type === 'credit' ? '+' : '-'}
                        {formatCurrency(tx.amount)}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          )}

          {/* TAB 2: TRANSFERS & BILL PAY */}
          {activeTab === 'transfers' && (
            <GlassCard className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#0A2342]/6 dark:bg-white/8 w-fit">
                {(
                  [
                    ['internal', t.portal.internalTransfer],
                    ['wire', t.portal.externalWire],
                    ['bill', t.portal.billPay],
                  ] as const
                ).map(([mode, label]) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setTransferMode(mode)}
                    className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                      transferMode === mode
                        ? 'bg-[#0A5C99] text-white shadow-sm'
                        : 'text-[#3C5370] dark:text-[#BDD0E4]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <form onSubmit={handleTransferSubmit} className="space-y-4 max-w-xl">
                <div>
                  <label className="block text-xs font-medium text-[#3C5370] dark:text-[#BDD0E4] mb-1.5">
                    {t.portal.fromAccount}
                  </label>
                  <select
                    value={fromAcc}
                    onChange={(e) => setFromAcc(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl bg-white/85 dark:bg-[#061830]/75 border border-[#0A2342]/14 dark:border-white/15 text-sm text-[#0A1D37] dark:text-white"
                  >
                    {accounts.map((acc) => (
                      <option key={acc.id} value={acc.id}>
                        {acc.name} ({formatCurrency(acc.balance)})
                      </option>
                    ))}
                  </select>
                </div>

                {transferMode === 'internal' ? (
                  <div>
                    <label className="block text-xs font-medium text-[#3C5370] dark:text-[#BDD0E4] mb-1.5">
                      {t.portal.toDestination}
                    </label>
                    <select
                      value={toAcc}
                      onChange={(e) => setToAcc(e.target.value)}
                      className="w-full h-11 px-3.5 rounded-xl bg-white/85 dark:bg-[#061830]/75 border border-[#0A2342]/14 dark:border-white/15 text-sm text-[#0A1D37] dark:text-white"
                    >
                      {accounts.map((acc) => (
                        <option key={acc.id} value={acc.id}>
                          {acc.name} ({acc.accountNumberMasked})
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-medium text-[#3C5370] dark:text-[#BDD0E4] mb-1.5">
                      {t.portal.toDestination}
                    </label>
                    <input
                      type="text"
                      value={externalRecipient}
                      onChange={(e) => setExternalRecipient(e.target.value)}
                      placeholder={
                        transferMode === 'wire'
                          ? 'Beneficiary Name / Routing & Account'
                          : 'Biller Name (e.g. Con Edison, IRS, Amex)'
                      }
                      required
                      className="w-full h-11 px-3.5 rounded-xl bg-white/85 dark:bg-[#061830]/75 border border-[#0A2342]/14 dark:border-white/15 text-sm text-[#0A1D37] dark:text-white"
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#3C5370] dark:text-[#BDD0E4] mb-1.5">
                      {t.portal.amount}
                    </label>
                    <input
                      type="number"
                      min="1"
                      step="0.01"
                      value={transferAmount}
                      onChange={(e) => setTransferAmount(e.target.value)}
                      required
                      className="w-full h-11 px-3.5 rounded-xl bg-white/85 dark:bg-[#061830]/75 border border-[#0A2342]/14 dark:border-white/15 font-mono tabular-nums text-sm text-[#0A1D37] dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#3C5370] dark:text-[#BDD0E4] mb-1.5">
                      {t.portal.memo}
                    </label>
                    <input
                      type="text"
                      value={transferMemo}
                      onChange={(e) => setTransferMemo(e.target.value)}
                      placeholder="Q4 Liquidity Rebalance"
                      className="w-full h-11 px-3.5 rounded-xl bg-white/85 dark:bg-[#061830]/75 border border-[#0A2342]/14 dark:border-white/15 text-sm text-[#0A1D37] dark:text-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-6 h-12 rounded-xl bg-[#921B2D] hover:bg-[#A82236] text-white text-sm font-medium transition-colors shadow-lg cursor-pointer"
                >
                  {t.portal.submitTransfer}
                </button>
              </form>
            </GlassCard>
          )}

          {/* TAB 3: METAL CARDS */}
          {activeTab === 'cards' && activeCard && (
            <GlassCard className="p-6 sm:p-8 space-y-8">
              <div className="flex flex-wrap gap-2">
                {cards.map((card) => (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => setSelectedCardId(card.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                      card.id === activeCard.id
                        ? 'bg-[#0A5C99] text-white'
                        : 'bg-[#0A2342]/6 dark:bg-white/8 text-[#29415E] dark:text-[#C5D6E8]'
                    }`}
                  >
                    {card.name} · {card.last4}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <MetalCard3D
                    finish={activeCard.finish}
                    title={activeCard.name}
                    holder={activeCard.holder}
                    maskedNumber={
                      revealedCardIds.includes(activeCard.id)
                        ? activeCard.fullNumber
                        : `${activeCard.fullNumber.slice(0, 4)}  ••••  ••••  ${activeCard.last4}`
                    }
                    expiry={activeCard.expiry}
                    network={activeCard.network.toUpperCase()}
                    frozen={activeCard.frozen}
                  />
                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={() => toggleRevealCard(activeCard.id)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A2342]/6 dark:bg-white/8 text-xs font-medium text-[#0A1D37] dark:text-white cursor-pointer"
                    >
                      {revealedCardIds.includes(activeCard.id) ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5" />
                          <span>
                            {t.portal.hideNumber} (CVV: {activeCard.cvv})
                          </span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>{t.portal.revealNumber}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#0A2342]/10 dark:border-white/10">
                    <div>
                      <div className="text-xs text-[#5C6F87] dark:text-[#96AFCB]">Card Status</div>
                      <div
                        className={`text-sm font-semibold mt-0.5 ${
                          activeCard.frozen
                            ? 'text-[#921B2D] dark:text-[#F06D80]'
                            : 'text-[#0A5C99] dark:text-[#78C7F6]'
                        }`}
                      >
                        {activeCard.frozen ? t.portal.cardFrozen : t.portal.cardActive}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleCardSetting(activeCard.id, 'frozen')}
                      className={`inline-flex items-center gap-2 px-4 h-10 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                        activeCard.frozen
                          ? 'bg-[#0A5C99] text-white'
                          : 'bg-[#921B2D] text-white'
                      }`}
                    >
                      <Snowflake className="w-3.5 h-3.5" />
                      <span>{t.portal.freezeCard}</span>
                    </button>
                  </div>

                  {/* Toggles */}
                  <div className="space-y-3">
                    <label className="flex items-center justify-between text-sm cursor-pointer">
                      <span className="text-[#0A1D37] dark:text-white font-medium">
                        {t.portal.contactless}
                      </span>
                      <input
                        type="checkbox"
                        checked={activeCard.contactless}
                        onChange={() => toggleCardSetting(activeCard.id, 'contactless')}
                        className="w-4 h-4 accent-[#0A5C99]"
                      />
                    </label>

                    <label className="flex items-center justify-between text-sm cursor-pointer">
                      <span className="text-[#0A1D37] dark:text-white font-medium">
                        {t.portal.international}
                      </span>
                      <input
                        type="checkbox"
                        checked={activeCard.international}
                        onChange={() => toggleCardSetting(activeCard.id, 'international')}
                        className="w-4 h-4 accent-[#0A5C99]"
                      />
                    </label>
                  </div>

                  {/* Daily Spend Limit Slider */}
                  <div className="pt-2 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#3C5370] dark:text-[#BDD0E4] font-medium">
                        {t.portal.dailyLimit}
                      </span>
                      <span className="font-mono tabular-nums font-semibold text-[#0A1D37] dark:text-white">
                        {formatCurrency(activeCard.dailyLimit, 0)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1000}
                      max={75000}
                      step={1000}
                      value={activeCard.dailyLimit}
                      onChange={(e) => updateCardLimit(activeCard.id, Number(e.target.value))}
                      className="w-full bo-slider"
                    />
                  </div>
                </div>
              </div>
            </GlassCard>
          )}

          {/* TAB 4: SAVINGS VAULTS */}
          {activeTab === 'vaults' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {vaults.map((vault) => {
                  const pct = Math.min(100, Math.round((vault.saved / Math.max(vault.target, 1)) * 100));
                  return (
                    <GlassCard key={vault.id} className="p-6 space-y-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-lg font-semibold text-[#0A1D37] dark:text-white">
                            {vault.name}
                          </h3>
                          <span className="font-mono text-xs text-[#0A5C99] dark:text-[#78C7F6]">
                            {vault.apy.toFixed(2)}% APY
                          </span>
                        </div>
                        <span className="font-mono tabular-nums text-sm font-semibold text-[#0A1D37] dark:text-white">
                          {pct}%
                        </span>
                      </div>

                      <div className="h-2.5 rounded-full bg-[#0A2342]/10 dark:bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#0A5C99] to-[#2995D9] transition-all duration-300"
                          style={{ width: `${pct}%` }}
                        />
                      </div>

                      <div className="flex items-center justify-between text-xs font-mono tabular-nums text-[#5C6F87] dark:text-[#96AFCB]">
                        <span>{formatCurrency(vault.saved, 0)}</span>
                        <span>/ {formatCurrency(vault.target, 0)}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleFundVault(vault.id)}
                        className="w-full h-10 rounded-xl bg-[#0A5C99]/10 hover:bg-[#0A5C99]/18 dark:bg-white/10 dark:hover:bg-white/16 text-[#0A5C99] dark:text-[#78C7F6] text-xs font-semibold transition-colors cursor-pointer"
                      >
                        {t.portal.fundVault}
                      </button>
                    </GlassCard>
                  );
                })}
              </div>

              <GlassCard className="p-6">
                <h3 className="font-display text-base font-semibold text-[#0A1D37] dark:text-white mb-4 flex items-center gap-2">
                  <Plus className="w-4 h-4 text-[#921B2D]" />
                  <span>{t.portal.createVault}</span>
                </h3>
                <form
                  onSubmit={handleCreateVault}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end"
                >
                  <div>
                    <label className="block text-xs text-[#5C6F87] dark:text-[#96AFCB] mb-1">
                      {t.portal.vaultName}
                    </label>
                    <input
                      type="text"
                      value={newVaultName}
                      onChange={(e) => setNewVaultName(e.target.value)}
                      placeholder="European Travel Reserve"
                      required
                      className="w-full h-10 px-3 rounded-xl bg-white/85 dark:bg-[#061830]/75 border border-[#0A2342]/14 dark:border-white/15 text-sm text-[#0A1D37] dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#5C6F87] dark:text-[#96AFCB] mb-1">
                      {t.portal.targetAmount}
                    </label>
                    <input
                      type="number"
                      min="100"
                      value={newVaultTarget}
                      onChange={(e) => setNewVaultTarget(e.target.value)}
                      required
                      className="w-full h-10 px-3 rounded-xl bg-white/85 dark:bg-[#061830]/75 border border-[#0A2342]/14 dark:border-white/15 font-mono tabular-nums text-sm text-[#0A1D37] dark:text-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="h-10 px-4 rounded-xl bg-[#921B2D] hover:bg-[#A82236] text-white text-sm font-medium transition-colors cursor-pointer"
                  >
                    {t.portal.createVault}
                  </button>
                </form>
              </GlassCard>
            </div>
          )}

          {/* TAB 5: TRANSACTION LEDGER & CSV EXPORT */}
          {activeTab === 'ledger' && (
            <GlassCard className="p-6 space-y-5">
              <div className="flex flex-col md:flex-row gap-3 justify-between">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-[#5C6F87] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t.portal.searchPlaceholder}
                    className="w-full h-10 pl-10 pr-3.5 rounded-xl bg-white/85 dark:bg-[#061830]/75 border border-[#0A2342]/14 dark:border-white/15 text-sm text-[#0A1D37] dark:text-white"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <select
                    value={accountFilter}
                    onChange={(e) => setAccountFilter(e.target.value)}
                    className="h-10 px-3 rounded-xl bg-white/85 dark:bg-[#061830]/75 border border-[#0A2342]/14 dark:border-white/15 text-xs font-medium text-[#0A1D37] dark:text-white"
                  >
                    <option value="all">{t.portal.allAccounts}</option>
                    {accounts.map((acc) => (
                      <option key={acc.id} value={acc.id}>
                        {acc.name}
                      </option>
                    ))}
                  </select>

                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value as 'all' | 'credit' | 'debit')}
                    className="h-10 px-3 rounded-xl bg-white/85 dark:bg-[#061830]/75 border border-[#0A2342]/14 dark:border-white/15 text-xs font-medium text-[#0A1D37] dark:text-white"
                  >
                    <option value="all">{t.portal.allTypes}</option>
                    <option value="credit">{t.portal.credits}</option>
                    <option value="debit">{t.portal.debits}</option>
                  </select>

                  <button
                    type="button"
                    onClick={() => exportTransactionsCsv(filteredTransactions)}
                    className="inline-flex items-center gap-1.5 h-10 px-3.5 rounded-xl bg-[#0A5C99] hover:bg-[#0C6BB0] text-white text-xs font-medium whitespace-nowrap cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{t.portal.exportCsv}</span>
                  </button>
                </div>
              </div>

              {filteredTransactions.length === 0 ? (
                <div className="py-12 text-center space-y-3">
                  <p className="text-sm text-[#5C6F87] dark:text-[#96AFCB]">
                    {t.portal.emptyLedger}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setAccountFilter('all');
                      setTypeFilter('all');
                    }}
                    className="px-4 h-9 rounded-xl bg-[#0A5C99]/10 text-[#0A5C99] dark:text-[#78C7F6] text-xs font-medium cursor-pointer"
                  >
                    {t.portal.resetFilters}
                  </button>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[640px]">
                    <thead>
                      <tr className="border-b border-[#0A2342]/10 dark:border-white/10 text-xs font-medium text-[#5C6F87] dark:text-[#96AFCB]">
                        <th className="py-3 pr-4">Date</th>
                        <th className="py-3 px-4">Description</th>
                        <th className="py-3 px-4">Reference</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 pl-4 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#0A2342]/8 dark:divide-white/8 text-sm">
                      {filteredTransactions.map((tx) => (
                        <tr
                          key={tx.id}
                          className="hover:bg-[#0A5C99]/4 dark:hover:bg-white/4 transition-colors"
                        >
                          <td className="py-3.5 pr-4 font-mono tabular-nums text-xs text-[#5C6F87] dark:text-[#96AFCB] whitespace-nowrap">
                            {formatDate(tx.date)}
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="font-medium text-[#0A1D37] dark:text-white">
                              {tx.merchant}
                            </div>
                            <div className="text-xs text-[#5C6F87] dark:text-[#96AFCB]">
                              {tx.category}
                            </div>
                          </td>
                          <td className="py-3.5 px-4 font-mono text-xs text-[#5C6F87] dark:text-[#96AFCB]">
                            {tx.reference}
                          </td>
                          <td className="py-3.5 px-4 text-xs text-[#435A75] dark:text-[#B4C8DE]">
                            {tx.status}
                          </td>
                          <td
                            className={`py-3.5 pl-4 text-right font-mono tabular-nums font-semibold whitespace-nowrap ${
                              tx.type === 'credit'
                                ? 'text-[#0A5C99] dark:text-[#78C7F6]'
                                : 'text-[#0A1D37] dark:text-white'
                            }`}
                          >
                            {tx.type === 'credit' ? '+' : '-'}
                            {formatCurrency(tx.amount)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </GlassCard>
          )}

          {/* TAB 6: SETTINGS, LANGUAGE, THEME & DEMO RESET */}
          {activeTab === 'settings' && (
            <GlassCard className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-[#0A1D37] dark:text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#0A5C99] dark:text-[#78C7F6]" />
                  <span>{t.nav.languageLabel}</span>
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {SUPPORTED_LOCALES.map((loc) => (
                    <button
                      key={loc.code}
                      type="button"
                      onClick={() => setLocale(loc.code)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                        locale === loc.code
                          ? 'bg-[#0A5C99] text-white'
                          : 'bg-[#0A2342]/6 dark:bg-white/8 text-[#29415E] dark:text-[#C5D6E8]'
                      }`}
                    >
                      {loc.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-[#0A2342]/10 dark:bg-white/10" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="font-display text-base font-semibold text-[#0A1D37] dark:text-white">
                  {t.nav.themeLabel}
                </span>
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0A2342]/6 dark:bg-white/8">
                  <button
                    type="button"
                    onClick={() => setTheme('light')}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium cursor-pointer ${
                      theme === 'light'
                        ? 'bg-white text-[#0A1D37] shadow-sm'
                        : 'text-[#5C6F87] dark:text-[#B4C6DA]'
                    }`}
                  >
                    <Sun className="w-3.5 h-3.5" />
                    <span>{t.nav.daylight}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme('dark')}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium cursor-pointer ${
                      theme === 'dark'
                        ? 'bg-[#0B2D56] text-white shadow-sm'
                        : 'text-[#5C6F87] dark:text-[#B4C6DA]'
                    }`}
                  >
                    <Moon className="w-3.5 h-3.5" />
                    <span>{t.nav.deepOcean}</span>
                  </button>
                </div>
              </div>

              <div className="h-px bg-[#0A2342]/10 dark:bg-white/10" />

              <div className="space-y-3">
                <label className="flex items-center justify-between text-sm cursor-pointer">
                  <span className="text-[#0A1D37] dark:text-white">
                    Alert on outbound wires exceeding $5,000
                  </span>
                  <input
                    type="checkbox"
                    checked={alertsEnabled.largeTransfers}
                    onChange={() => toggleAlert('largeTransfers')}
                    className="w-4 h-4 accent-[#0A5C99]"
                  />
                </label>
                <label className="flex items-center justify-between text-sm cursor-pointer">
                  <span className="text-[#0A1D37] dark:text-white">
                    Instant international card authorization notifications
                  </span>
                  <input
                    type="checkbox"
                    checked={alertsEnabled.cardInternational}
                    onChange={() => toggleAlert('cardInternational')}
                    className="w-4 h-4 accent-[#0A5C99]"
                  />
                </label>
                <label className="flex items-center justify-between text-sm cursor-pointer">
                  <span className="text-[#0A1D37] dark:text-white">
                    Automated monthly PDF &amp; CSV statement delivery
                  </span>
                  <input
                    type="checkbox"
                    checked={alertsEnabled.monthlyStatement}
                    onChange={() => toggleAlert('monthlyStatement')}
                    className="w-4 h-4 accent-[#0A5C99]"
                  />
                </label>
              </div>

              <div className="h-px bg-[#0A2342]/10 dark:bg-white/10" />

              <div className="flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    resetDemoData();
                    pushToast('Demo balances, cards, and ledger reset to initial state.', 'info');
                  }}
                  className="inline-flex items-center gap-2 px-4 h-10 rounded-xl bg-[#0A2342]/8 dark:bg-white/10 text-xs font-medium text-[#0A1D37] dark:text-white hover:bg-[#0A2342]/14 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.portal.resetDemo}</span>
                </button>

                <button
                  type="button"
                  onClick={signOut}
                  className="inline-flex items-center gap-2 px-4 h-10 rounded-xl bg-[#921B2D]/12 text-xs font-medium text-[#921B2D] dark:text-[#F06D80] cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>{t.portal.signOut}</span>
                </button>
              </div>
            </GlassCard>
          )}
        </main>
      </div>
    </div>
  );
};
