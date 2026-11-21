import React, { useState, useMemo, useEffect } from 'react';
import {
  CreditCard,
  Plus,
  Search,
  X,
  ShieldCheck,
  ShieldOff,
  CheckCircle2,
  Repeat,
  Trash2,
  Snowflake,
  Lock,
  Tv,
  Laptop,
  Cloud,
  LayoutGrid,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useBanking } from '../context/BankingContext';
import { GlassCard } from './GlassCard';
import {
  US_SUBSCRIPTIONS,
  SubscriptionCategory,
  SubscriptionService,
} from '../data/subscriptions';

interface SubscriptionManagerProps {
  initialCardId?: string;
  onBuyVirtualCard: () => void;
}

type CategoryFilter = 'all' | SubscriptionCategory;
type AuthStatusFilter = 'all' | 'authorized' | 'blocked';

export const SubscriptionManager: React.FC<SubscriptionManagerProps> = ({
  initialCardId,
  onBuyVirtualCard,
}) => {
  const { formatCurrency, formatDate, pushToast, t } = useApp();
  const {
    accounts,
    cards,
    activeSubscriptions,
    subscriptionAuthorizations,
    paySubscription,
    toggleSubscriptionAutoPay,
    cancelSubscription,
    toggleSubscriptionAuth,
    setAllSubscriptionAuths,
  } = useBanking();

  const [selectedCardId, setSelectedCardId] = useState<string>(
    initialCardId && cards.some((c) => c.id === initialCardId)
      ? initialCardId
      : cards[0]?.id ?? 'card-titanium'
  );
  const [fundingAccountId, setFundingAccountId] = useState<string>(
    accounts[0]?.id ?? 'acc-checking'
  );
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [statusFilter, setStatusFilter] = useState<AuthStatusFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (initialCardId && cards.some((c) => c.id === initialCardId)) {
      setSelectedCardId(initialCardId);
    }
  }, [initialCardId, cards]);

  const selectedCard = cards.find((c) => c.id === selectedCardId) ?? cards[0];
  const authorizedIds = useMemo(
    () => (selectedCard ? subscriptionAuthorizations[selectedCard.id] ?? [] : []),
    [selectedCard, subscriptionAuthorizations]
  );

  const authorizedCount = authorizedIds.length;

  const categoryCounts = useMemo(
    () => ({
      all: US_SUBSCRIPTIONS.length,
      entertainment: US_SUBSCRIPTIONS.filter((s) => s.category === 'entertainment').length,
      software: US_SUBSCRIPTIONS.filter((s) => s.category === 'software').length,
      utility: US_SUBSCRIPTIONS.filter((s) => s.category === 'utility').length,
    }),
    []
  );

  const monthlySubsTotal = useMemo(
    () => activeSubscriptions.reduce((sum, s) => sum + s.price, 0),
    [activeSubscriptions]
  );

  const filteredServices = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return US_SUBSCRIPTIONS.filter((service) => {
      const isAuth = authorizedIds.includes(service.id);
      if (categoryFilter !== 'all' && service.category !== categoryFilter) return false;
      if (statusFilter === 'authorized' && !isAuth) return false;
      if (statusFilter === 'blocked' && isAuth) return false;
      if (
        q &&
        !service.name.toLowerCase().includes(q) &&
        !service.plan.toLowerCase().includes(q) &&
        !service.categoryLabel.toLowerCase().includes(q)
      ) {
        return false;
      }
      return true;
    });
  }, [categoryFilter, statusFilter, searchQuery, authorizedIds]);

  const hasActiveFilters =
    categoryFilter !== 'all' || statusFilter !== 'all' || searchQuery.trim().length > 0;

  const handleResetFilters = () => {
    setCategoryFilter('all');
    setStatusFilter('all');
    setSearchQuery('');
  };

  const handleToggleAuth = (service: SubscriptionService) => {
    if (!selectedCard) return;
    const nowAuthorized = toggleSubscriptionAuth(selectedCard.id, service.id);
    if (nowAuthorized) {
      pushToast(
        `Authorized ${service.name} on ${selectedCard.name} (•••• ${selectedCard.last4}).`,
        'success'
      );
    } else {
      pushToast(
        `Blocked ${service.name} charges on ${selectedCard.name} (•••• ${selectedCard.last4}).`,
        'info'
      );
    }
  };

  const handleBulkToggle = (authorize: boolean) => {
    if (!selectedCard) return;
    const ids = filteredServices.map((s) => s.id);
    if (ids.length === 0) return;
    setAllSubscriptionAuths(selectedCard.id, ids, authorize);
    pushToast(
      authorize
        ? `Authorized ${ids.length} subscription services on card •••• ${selectedCard.last4}.`
        : `Blocked ${ids.length} subscription services on card •••• ${selectedCard.last4}.`,
      authorize ? 'success' : 'info'
    );
  };

  const handlePayNow = (service: SubscriptionService) => {
    if (!selectedCard) return;
    const res = paySubscription({
      serviceId: service.id,
      name: service.name,
      plan: service.plan,
      price: service.price,
      cardId: selectedCard.id,
      accountId: fundingAccountId,
    });
    if (!res.ok) {
      if (res.error === 'frozen') {
        pushToast(
          'This virtual card is frozen. Unfreeze it or select another virtual card.',
          'alert'
        );
      } else if (res.error === 'unauthorized') {
        pushToast(
          `Payment blocked — toggle ${service.name} authorization ON for card •••• ${selectedCard.last4} first.`,
          'alert'
        );
      } else {
        pushToast(t.portal.insufficientFunds, 'alert');
      }
      return;
    }
    pushToast(
      `Paid ${formatCurrency(service.price)} to ${service.name} with card •••• ${selectedCard.last4}.`,
      'success'
    );
  };

  if (!selectedCard) return null;

  const categoryButtons: {
    id: CategoryFilter;
    label: string;
    count: number;
    icon: React.ReactNode;
  }[] = [
    { id: 'all', label: 'All Services', count: categoryCounts.all, icon: <LayoutGrid className="w-3.5 h-3.5" /> },
    { id: 'entertainment', label: 'Entertainment', count: categoryCounts.entertainment, icon: <Tv className="w-3.5 h-3.5" /> },
    { id: 'software', label: 'Software', count: categoryCounts.software, icon: <Laptop className="w-3.5 h-3.5" /> },
    { id: 'utility', label: 'Utility', count: categoryCounts.utility, icon: <Cloud className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="space-y-6">
      {/* Header & Virtual Card Selector */}
      <GlassCard className="p-6 sm:p-7 space-y-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#921B2D] dark:text-[#F06D80]">
              <ShieldCheck className="w-4 h-4" />
              <span>Subscription Manager · Virtual Card Payment Authorizations</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0A1D37] dark:text-white">
              Control which U.S. subscriptions can charge your virtual cards.
            </h2>
            <p className="text-xs sm:text-sm text-[#4A607A] dark:text-[#A9BED6] max-w-2xl">
              Select any virtual credit card below and toggle payment authorization on or off for 20 popular U.S. services. Blocked merchants are automatically declined before a charge can hit your balance.
            </p>
          </div>

          <button
            type="button"
            onClick={onBuyVirtualCard}
            className="inline-flex items-center justify-center gap-1.5 px-4 h-10 rounded-xl bg-[#921B2D] hover:bg-[#A82236] text-white text-xs sm:text-sm font-medium whitespace-nowrap shadow-md transition-colors shrink-0 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Buy Virtual Card</span>
          </button>
        </div>

        {/* Select Virtual Card Strip */}
        <div className="space-y-2.5 pt-2 border-t border-[#0A2342]/10 dark:border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold text-[#3C5370] dark:text-[#BDD0E4]">
              Select Virtual Card to Manage Authorizations
            </span>
            <span className="text-xs font-mono tabular-nums text-[#5C6F87] dark:text-[#96AFCB]">
              {cards.length} Virtual {cards.length === 1 ? 'Card' : 'Cards'} Available
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {cards.map((card) => {
              const isSelected = card.id === selectedCard.id;
              const count = (subscriptionAuthorizations[card.id] ?? []).length;
              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setSelectedCardId(card.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0A5C99] text-white border-[#0A5C99] shadow-md'
                      : 'bg-white/80 dark:bg-[#061830]/70 border-[#0A2342]/12 dark:border-white/12 text-[#0A1D37] dark:text-white hover:border-[#0A5C99]/40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <CreditCard
                        className={`w-4 h-4 shrink-0 ${
                          isSelected ? 'text-[#8FD1FA]' : 'text-[#0A5C99] dark:text-[#78C7F6]'
                        }`}
                      />
                      <span className="text-xs sm:text-sm font-semibold truncate">{card.name}</span>
                    </div>
                    {card.frozen && (
                      <span
                        className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold shrink-0 ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-[#921B2D]/12 text-[#921B2D] dark:text-[#F06D80]'
                        }`}
                      >
                        <Snowflake className="w-2.5 h-2.5" />
                        Frozen
                      </span>
                    )}
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[11px] font-mono tabular-nums">
                    <span className={isSelected ? 'text-[#CBE7FB]' : 'text-[#5C6F87] dark:text-[#96AFCB]'}>
                      •••• {card.last4}
                    </span>
                    <span
                      className={`font-semibold ${
                        isSelected ? 'text-white' : 'text-[#0A5C99] dark:text-[#78C7F6]'
                      }`}
                    >
                      {count} / {US_SUBSCRIPTIONS.length} Authorized
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Summary Metrics & Funding Account */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-2 border-t border-[#0A2342]/10 dark:border-white/10">
          <div className="md:col-span-4 rounded-xl bg-[#0A5C99]/8 dark:bg-[#0A5C99]/22 border border-[#0A5C99]/18 px-4 py-3 flex items-center justify-between">
            <div>
              <div className="text-[11px] font-medium text-[#4A607A] dark:text-[#9AC9ED]">
                Authorized on •••• {selectedCard.last4}
              </div>
              <div className="font-mono tabular-nums text-xl font-semibold text-[#0A1D37] dark:text-white mt-0.5">
                {authorizedCount} / {US_SUBSCRIPTIONS.length}
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#0A5C99]/15 dark:bg-[#78C7F6]/15 text-[#0A5C99] dark:text-[#78C7F6] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>

          <div className="md:col-span-4 rounded-xl bg-[#921B2D]/7 dark:bg-[#921B2D]/20 border border-[#921B2D]/18 px-4 py-3 flex items-center justify-between">
            <div>
              <div className="text-[11px] font-medium text-[#6B3340] dark:text-[#E5B8C0]">
                Active Recurring ({activeSubscriptions.length})
              </div>
              <div className="font-mono tabular-nums text-xl font-semibold text-[#0A1D37] dark:text-white mt-0.5">
                {formatCurrency(monthlySubsTotal)}/mo
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#921B2D]/15 text-[#921B2D] dark:text-[#F06D80] flex items-center justify-center">
              <Repeat className="w-5 h-5" />
            </div>
          </div>

          <div className="md:col-span-4">
            <label className="block text-[11px] font-medium text-[#3C5370] dark:text-[#BDD0E4] mb-1.5">
              Settlement Account for Instant Payments
            </label>
            <select
              value={fundingAccountId}
              onChange={(e) => setFundingAccountId(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl bg-white/90 dark:bg-[#081E3B] border border-[#0A2342]/14 dark:border-white/15 text-xs sm:text-sm text-[#0A1D37] dark:text-white focus:outline-none focus:border-[#0A5C99]"
            >
              {accounts.map((acc) => (
                <option key={acc.id} value={acc.id}>
                  {acc.name} ({formatCurrency(acc.balance)})
                </option>
              ))}
            </select>
          </div>
        </div>
      </GlassCard>

      {/* Main 20 U.S. Subscriptions Search, Category Filter & Authorization Grid */}
      <GlassCard className="p-6 space-y-5">
        {/* Dedicated Search + Authorization Status Row */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#5C6F87] dark:text-[#96AFCB] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by service, plan, or category (e.g., Netflix, Software, Utility)..."
              aria-label="Search 20 U.S. subscription services"
              className="w-full h-11 pl-10 pr-10 rounded-xl bg-white/90 dark:bg-[#061830]/80 border border-[#0A2342]/16 dark:border-white/16 text-sm text-[#0A1D37] dark:text-white placeholder:text-[#6E8299] dark:placeholder:text-[#849FBC] focus:outline-none focus:border-[#0A5C99]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg flex items-center justify-center text-[#5C6F87] hover:bg-[#0A2342]/8 dark:hover:bg-white/10 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Authorization Status Filter */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-[#0A2342]/6 dark:bg-white/8 shrink-0">
            {(
              [
                ['all', 'All Status'],
                ['authorized', `Authorized (${authorizedCount})`],
                ['blocked', `Blocked (${US_SUBSCRIPTIONS.length - authorizedCount})`],
              ] as const
            ).map(([statusKey, label]) => (
              <button
                key={statusKey}
                type="button"
                onClick={() => setStatusFilter(statusKey)}
                className={`px-3 h-9 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  statusFilter === statusKey
                    ? 'bg-[#0A5C99] text-white shadow-xs'
                    : 'text-[#3C5370] dark:text-[#BDD0E4] hover:text-[#0A1D37] dark:hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter Tabs (Entertainment, Software, Utility) + Bulk Controls */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-3 pt-1 border-t border-[#0A2342]/8 dark:border-white/10">
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {categoryButtons.map((cat) => {
              const active = categoryFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategoryFilter(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 h-9 rounded-xl text-xs font-semibold border transition-all whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-[#0A5C99] text-white border-[#0A5C99] shadow-xs'
                      : 'bg-white/75 dark:bg-white/6 border-[#0A2342]/12 dark:border-white/12 text-[#2E4662] dark:text-[#C5D8EC] hover:border-[#0A5C99]/40'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                  <span
                    className={`font-mono text-[11px] px-1.5 py-0.5 rounded-md ${
                      active
                        ? 'bg-white/20 text-white'
                        : 'bg-[#0A2342]/6 dark:bg-white/10 text-[#5C6F87] dark:text-[#96AFCB]'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-between xl:justify-end gap-2 pt-1">
            <span className="text-xs font-mono tabular-nums text-[#5C6F87] dark:text-[#96AFCB] mr-1">
              Showing {filteredServices.length} of {US_SUBSCRIPTIONS.length}
            </span>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-2.5 h-8 rounded-lg text-xs font-medium text-[#921B2D] dark:text-[#F06D80] hover:bg-[#921B2D]/10 transition-colors cursor-pointer"
              >
                Reset
              </button>
            )}

            <button
              type="button"
              onClick={() => handleBulkToggle(true)}
              disabled={filteredServices.length === 0}
              className="px-3 h-8 rounded-lg bg-[#0A5C99]/10 hover:bg-[#0A5C99]/18 disabled:opacity-40 dark:bg-white/10 dark:hover:bg-white/16 text-[#0A5C99] dark:text-[#78C7F6] text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer"
            >
              Authorize Shown
            </button>
            <button
              type="button"
              onClick={() => handleBulkToggle(false)}
              disabled={filteredServices.length === 0}
              className="px-3 h-8 rounded-lg bg-[#0A2342]/6 hover:bg-[#0A2342]/12 disabled:opacity-40 dark:bg-white/8 dark:hover:bg-white/14 text-[#4A607A] dark:text-[#B8CCE0] text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer"
            >
              Block Shown
            </button>
          </div>
        </div>

        {selectedCard.frozen && (
          <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#921B2D]/10 dark:bg-[#921B2D]/24 border border-[#921B2D]/22 text-xs text-[#7E1626] dark:text-[#F5A0AD]">
            <Snowflake className="w-4 h-4 shrink-0" />
            <span>
              <strong>{selectedCard.name} (•••• {selectedCard.last4})</strong> is currently frozen. You can still configure merchant authorizations below, and they will apply once you unfreeze the card.
            </span>
          </div>
        )}

        {filteredServices.length === 0 ? (
          <div className="py-12 text-center space-y-2">
            <p className="text-sm font-medium text-[#0A1D37] dark:text-white">
              No subscription services match your search or category filter.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-xs font-semibold text-[#0A5C99] dark:text-[#78C7F6] hover:underline cursor-pointer"
            >
              Clear filters and show all 20 U.S. subscriptions
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredServices.map((service) => {
              const isAuthorized = authorizedIds.includes(service.id);
              const activeRecord = activeSubscriptions.find(
                (s) => s.serviceId === service.id
              );

              return (
                <div
                  key={service.id}
                  className={`rounded-2xl p-4 border transition-all flex flex-col justify-between gap-4 ${
                    isAuthorized
                      ? 'bg-white/85 dark:bg-[#071F3D]/80 border-[#0A5C99]/30 dark:border-[#78C7F6]/30 shadow-xs'
                      : 'bg-white/55 dark:bg-[#05152A]/55 border-[#0A2342]/10 dark:border-white/10'
                  }`}
                >
                  {/* Top Row: Official Logo, Service Name, Category & Price */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-11 h-11 rounded-xl bg-white dark:bg-[#0B2342] border flex items-center justify-center shrink-0 shadow-xs transition-opacity ${
                          isAuthorized
                            ? 'border-[#0A5C99]/22 dark:border-white/18 opacity-100'
                            : 'border-[#0A2342]/10 dark:border-white/10 opacity-75'
                        }`}
                      >
                        {service.renderLogo(23)}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-[#0A1D37] dark:text-white truncate">
                          {service.name}
                        </div>
                        <div className="text-xs text-[#5C6F87] dark:text-[#96AFCB] truncate">
                          {service.categoryLabel} · {service.plan}
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="font-mono tabular-nums text-sm font-semibold text-[#0A1D37] dark:text-white">
                        ${service.price.toFixed(2)}
                      </div>
                      <div className="text-[10px] text-[#5C6F87] dark:text-[#96AFCB]">/mo USD</div>
                    </div>
                  </div>

                  {/* Middle Row: Virtual Card Payment Authorization Toggle */}
                  <div className="flex items-center justify-between gap-3 py-2.5 px-3 rounded-xl bg-[#0A2342]/4 dark:bg-white/6">
                    <div className="flex items-center gap-2 min-w-0">
                      {isAuthorized ? (
                        <ShieldCheck className="w-4 h-4 text-[#0A5C99] dark:text-[#78C7F6] shrink-0" />
                      ) : (
                        <ShieldOff className="w-4 h-4 text-[#6B7E96] dark:text-[#86A0BD] shrink-0" />
                      )}
                      <div className="min-w-0">
                        <div
                          className={`text-xs font-semibold truncate ${
                            isAuthorized
                              ? 'text-[#0A5C99] dark:text-[#78C7F6]'
                              : 'text-[#5C6F87] dark:text-[#96AFCB]'
                          }`}
                        >
                          {isAuthorized ? 'Authorized' : 'Blocked'}
                        </div>
                        <div className="text-[10px] font-mono text-[#5C6F87] dark:text-[#8FA8C4]">
                          Card •••• {selectedCard.last4}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      role="switch"
                      aria-checked={isAuthorized}
                      aria-label={`Toggle payment authorization for ${service.name} on card ending in ${selectedCard.last4}`}
                      onClick={() => handleToggleAuth(service)}
                      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0A5C99]/50 ${
                        isAuthorized
                          ? 'bg-[#0A5C99] dark:bg-[#38BDF8]'
                          : 'bg-[#0A2342]/20 dark:bg-white/20'
                      }`}
                    >
                      <span
                        className={`inline-block h-4.5 w-4.5 transform rounded-full bg-white shadow-sm transition-transform ${
                          isAuthorized ? 'translate-x-5.5' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Bottom Row: Instant Pay / Status Action */}
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <span className="text-[11px] font-medium text-[#5C6F87] dark:text-[#96AFCB] truncate">
                      {activeRecord
                        ? `Active · •••• ${activeRecord.cardLast4}`
                        : isAuthorized
                          ? 'Ready for USD billing'
                          : 'Charges declined'}
                    </span>

                    {isAuthorized ? (
                      <button
                        type="button"
                        onClick={() => handlePayNow(service)}
                        className={`px-3 h-8 rounded-lg text-xs font-semibold transition-colors shrink-0 cursor-pointer ${
                          activeRecord
                            ? 'bg-[#0A5C99]/12 hover:bg-[#0A5C99]/20 dark:bg-white/10 dark:hover:bg-white/16 text-[#0A5C99] dark:text-[#8FD1FA]'
                            : 'bg-[#921B2D] hover:bg-[#A82236] text-white shadow-xs'
                        }`}
                      >
                        {activeRecord ? 'Pay Now' : `Pay $${service.price.toFixed(2)}`}
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleToggleAuth(service)}
                        className="inline-flex items-center gap-1 px-2.5 h-8 rounded-lg bg-[#0A2342]/6 hover:bg-[#0A2342]/12 dark:bg-white/8 dark:hover:bg-white/14 text-[11px] font-medium text-[#4A607A] dark:text-[#B8CCE0] shrink-0 transition-colors cursor-pointer"
                      >
                        <Lock className="w-3 h-3" />
                        <span>Enable</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </GlassCard>

      {/* Active Paid Subscriptions Ledger */}
      {activeSubscriptions.length > 0 && (
        <GlassCard className="p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display text-lg font-semibold text-[#0A1D37] dark:text-white">
              Active Recurring Subscriptions ({activeSubscriptions.length})
            </h3>
            <span className="text-xs text-[#5C6F87] dark:text-[#96AFCB]">
              Billed automatically in USD · Manage Auto-Pay or cancel anytime
            </span>
          </div>

          <div className="divide-y divide-[#0A2342]/8 dark:divide-white/10">
            {activeSubscriptions.map((sub) => {
              const catalogItem = US_SUBSCRIPTIONS.find((u) => u.id === sub.serviceId);
              return (
                <div
                  key={sub.serviceId}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#09203E] border border-[#0A2342]/10 dark:border-white/14 flex items-center justify-center shrink-0 shadow-xs">
                      {catalogItem ? catalogItem.renderLogo(20) : <Repeat className="w-4 h-4" />}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-[#0A1D37] dark:text-white truncate">
                          {sub.name}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#0A5C99] dark:text-[#78C7F6]">
                          <CheckCircle2 className="w-3 h-3" />
                          Paid
                        </span>
                      </div>
                      <div className="text-xs text-[#5C6F87] dark:text-[#96AFCB]">
                        Card •••• {sub.cardLast4} · Next bill {formatDate(sub.nextBillingDate)}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 sm:justify-end">
                    <span className="font-mono tabular-nums text-sm font-semibold text-[#0A1D37] dark:text-white">
                      {formatCurrency(sub.price)}/mo
                    </span>

                    <label className="inline-flex items-center gap-1.5 text-xs text-[#3C5370] dark:text-[#BDD0E4] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={sub.autoPay}
                        onChange={() => toggleSubscriptionAutoPay(sub.serviceId)}
                        className="w-3.5 h-3.5 accent-[#0A5C99]"
                      />
                      <span>Auto-Pay</span>
                    </label>

                    <button
                      type="button"
                      onClick={() => {
                        cancelSubscription(sub.serviceId);
                        pushToast(`Cancelled ${sub.name} recurring billing.`, 'info');
                      }}
                      className="inline-flex items-center gap-1 px-2.5 h-8 rounded-lg bg-[#921B2D]/10 hover:bg-[#921B2D]/18 text-[#921B2D] dark:text-[#F06D80] text-xs font-medium transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </GlassCard>
      )}
    </div>
  );
};
