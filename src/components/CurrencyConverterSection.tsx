import React, { useEffect, useMemo, useState } from 'react';
import { ArrowUpDown, ArrowRight, Globe2, Clock, RefreshCw } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { Reveal } from './Reveal';
import { useApp } from '../context/AppContext';

interface CurrencyInfo {
  code: string;
  name: string;
  symbol: string;
  countryHint: string;
  speed: string;
}

const CURRENCIES: CurrencyInfo[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$', countryHint: 'United States', speed: 'Arrives in seconds' },
  { code: 'EUR', name: 'Euro', symbol: '€', countryHint: 'Eurozone', speed: 'Arrives in seconds' },
  { code: 'GBP', name: 'British Pound', symbol: '£', countryHint: 'United Kingdom', speed: 'Arrives in seconds' },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', countryHint: 'Switzerland', speed: 'Arrives in minutes' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', countryHint: 'Canada', speed: 'Arrives in minutes' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', countryHint: 'Australia', speed: 'Arrives in minutes' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', countryHint: 'Japan', speed: 'Same business day' },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', countryHint: 'Singapore', speed: 'Arrives in minutes' },
  { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', countryHint: 'Brazil', speed: 'Arrives in minutes' },
  { code: 'MXN', name: 'Mexican Peso', symbol: 'MX$', countryHint: 'Mexico', speed: 'Arrives in minutes' },
  { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ', countryHint: 'United Arab Emirates', speed: 'Same business day' },
  { code: 'NGN', name: 'Nigerian Naira', symbol: '₦', countryHint: 'Nigeria', speed: 'Arrives in minutes' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', countryHint: 'India', speed: 'Arrives in minutes' },
  { code: 'ZAR', name: 'South African Rand', symbol: 'R', countryHint: 'South Africa', speed: 'Same business day' },
];

// Accurate mid-market baseline relative to 1 USD (used immediately while live rates load or offline)
const FALLBACK_RATES_USD: Record<string, number> = {
  USD: 1,
  EUR: 0.9215,
  GBP: 0.7865,
  CHF: 0.881,
  CAD: 1.394,
  AUD: 1.532,
  JPY: 153.4,
  SGD: 1.341,
  BRL: 5.78,
  MXN: 20.15,
  AED: 3.6725,
  NGN: 1625,
  INR: 84.35,
  ZAR: 18.12,
};

const POPULAR_PAIRS: { from: string; to: string; label: string }[] = [
  { from: 'USD', to: 'EUR', label: 'USD → EUR' },
  { from: 'GBP', to: 'USD', label: 'GBP → USD' },
  { from: 'EUR', to: 'GBP', label: 'EUR → GBP' },
  { from: 'USD', to: 'NGN', label: 'USD → NGN' },
  { from: 'EUR', to: 'BRL', label: 'EUR → BRL' },
  { from: 'USD', to: 'CAD', label: 'USD → CAD' },
];

type RegionKey = 'europe' | 'americas' | 'apac' | 'mea';

interface CountryEntry {
  iso: string;
  name: string;
  currency: string;
}

const REGIONS: {
  id: RegionKey;
  label: string;
  countLabel: string;
  countries: CountryEntry[];
}[] = [
  {
    id: 'europe',
    label: 'Europe & UK',
    countLabel: '18 Countries',
    countries: [
      { iso: 'GB', name: 'United Kingdom', currency: 'GBP' },
      { iso: 'DE', name: 'Germany', currency: 'EUR' },
      { iso: 'NL', name: 'Netherlands', currency: 'EUR' },
      { iso: 'FR', name: 'France', currency: 'EUR' },
      { iso: 'ES', name: 'Spain', currency: 'EUR' },
      { iso: 'PT', name: 'Portugal', currency: 'EUR' },
      { iso: 'CH', name: 'Switzerland', currency: 'CHF' },
      { iso: 'IT', name: 'Italy', currency: 'EUR' },
      { iso: 'IE', name: 'Ireland', currency: 'EUR' },
      { iso: 'BE', name: 'Belgium', currency: 'EUR' },
      { iso: 'AT', name: 'Austria', currency: 'EUR' },
      { iso: 'SE', name: 'Sweden', currency: 'EUR' },
    ],
  },
  {
    id: 'americas',
    label: 'Americas',
    countLabel: '10 Countries',
    countries: [
      { iso: 'US', name: 'United States', currency: 'USD' },
      { iso: 'CA', name: 'Canada', currency: 'CAD' },
      { iso: 'BR', name: 'Brazil', currency: 'BRL' },
      { iso: 'MX', name: 'Mexico', currency: 'MXN' },
      { iso: 'CO', name: 'Colombia', currency: 'USD' },
      { iso: 'CL', name: 'Chile', currency: 'USD' },
      { iso: 'AR', name: 'Argentina', currency: 'USD' },
      { iso: 'PE', name: 'Peru', currency: 'USD' },
    ],
  },
  {
    id: 'apac',
    label: 'Asia-Pacific',
    countLabel: '8 Countries',
    countries: [
      { iso: 'SG', name: 'Singapore', currency: 'SGD' },
      { iso: 'AU', name: 'Australia', currency: 'AUD' },
      { iso: 'JP', name: 'Japan', currency: 'JPY' },
      { iso: 'IN', name: 'India', currency: 'INR' },
      { iso: 'NZ', name: 'New Zealand', currency: 'AUD' },
      { iso: 'KR', name: 'South Korea', currency: 'USD' },
      { iso: 'PH', name: 'Philippines', currency: 'USD' },
      { iso: 'MY', name: 'Malaysia', currency: 'SGD' },
    ],
  },
  {
    id: 'mea',
    label: 'Middle East & Africa',
    countLabel: '6+ Countries',
    countries: [
      { iso: 'AE', name: 'United Arab Emirates', currency: 'AED' },
      { iso: 'NG', name: 'Nigeria', currency: 'NGN' },
      { iso: 'ZA', name: 'South Africa', currency: 'ZAR' },
      { iso: 'KE', name: 'Kenya', currency: 'USD' },
      { iso: 'GH', name: 'Ghana', currency: 'USD' },
      { iso: 'QA', name: 'Qatar', currency: 'AED' },
    ],
  },
];

const formatDecimal = (value: number, code: string): string => {
  const noDecimals = code === 'JPY' || code === 'NGN';
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: noDecimals ? 0 : 2,
    maximumFractionDigits: noDecimals ? 0 : 2,
  }).format(Number.isFinite(value) ? value : 0);
};

export const CurrencyConverterSection: React.FC = () => {
  const { navigate, openModal } = useApp();

  const [rates, setRates] = useState<Record<string, number>>(FALLBACK_RATES_USD);
  const [isLive, setIsLive] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>('Updated today');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const [fromCode, setFromCode] = useState<string>('USD');
  const [toCode, setToCode] = useState<string>('EUR');
  const [sendInput, setSendInput] = useState<string>('1000');
  const [activeRegion, setActiveRegion] = useState<RegionKey>('europe');

  const fetchLiveRates = async (signal?: AbortSignal) => {
    setIsRefreshing(true);
    try {
      const response = await fetch('https://open.er-api.com/v6/latest/USD', { signal });
      if (!response.ok) throw new Error('Rate fetch failed');
      const data = await response.json();
      if (data && data.result === 'success' && data.rates) {
        const merged: Record<string, number> = { ...FALLBACK_RATES_USD };
        for (const item of CURRENCIES) {
          const liveVal = data.rates[item.code];
          if (typeof liveVal === 'number' && liveVal > 0) {
            merged[item.code] = liveVal;
          }
        }
        setRates(merged);
        setIsLive(true);
        const now = new Date();
        setLastUpdated(
          `Live · ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
        );
      }
    } catch {
      // Keep accurate fallback rates silently on offline/slow connections
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchLiveRates(controller.signal);
    return () => controller.abort();
  }, []);

  const numericSend = useMemo(() => {
    const cleaned = sendInput.replace(/[^0-9.]/g, '');
    const parsed = parseFloat(cleaned);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
  }, [sendInput]);

  const exchangeRate = useMemo(() => {
    const fromRate = rates[fromCode] ?? 1;
    const toRate = rates[toCode] ?? 1;
    return toRate / fromRate;
  }, [rates, fromCode, toCode]);

  const feeRate = fromCode === toCode ? 0 : 0.0025; // 0.25% transparent low fee
  const transferFee = numericSend * feeRate;
  const amountAfterFee = Math.max(0, numericSend - transferFee);
  const recipientGets = amountAfterFee * exchangeRate;

  // Typical traditional bank charges ~3.5% markup + flat wire fee
  const traditionalBankCost = fromCode === toCode ? 0 : numericSend * 0.035;
  const estimatedSavings = Math.max(0, traditionalBankCost - transferFee);

  const fromCurrency = CURRENCIES.find((c) => c.code === fromCode) ?? CURRENCIES[0];
  const toCurrency = CURRENCIES.find((c) => c.code === toCode) ?? CURRENCIES[1];
  const currentRegion = REGIONS.find((r) => r.id === activeRegion) ?? REGIONS[0];

  const handleSwap = () => {
    setFromCode(toCode);
    setToCode(fromCode);
  };

  const handleSelectCountry = (currencyCode: string) => {
    if (currencyCode === fromCode) {
      setToCode(fromCode === 'USD' ? 'EUR' : 'USD');
    } else {
      setToCode(currencyCode);
    }
  };

  const ratePrecision = exchangeRate >= 100 ? 2 : exchangeRate >= 10 ? 3 : 4;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6">
      <Reveal className="max-w-2xl mb-8">
        <p className="text-xs sm:text-sm font-medium text-[#0A5C99] dark:text-[#78C7F6]">
          Live Exchange Rates · 42+ Supported Countries
        </p>
        <h2
          className="mt-2 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#081A33] dark:text-white"
          style={{ textWrap: 'balance' }}
        >
          Check exchange rates and see where you can send money.
        </h2>
        <p className="mt-2.5 text-base text-[#445A75] dark:text-[#AFC3D8]">
          Calculate exactly what arrives before you send—with real exchange rates, low upfront fees, and no hidden markups.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* LEFT: REAL-TIME CURRENCY CONVERTER */}
        <Reveal className="lg:col-span-7 flex">
          <GlassCard className="p-6 sm:p-8 w-full flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Top Rate Header & Refresh */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#0A2342]/10 dark:border-white/10">
                <div>
                  <div className="text-xs font-medium text-[#5C6F87] dark:text-[#98B1CC]">
                    Real-Time Exchange Rate
                  </div>
                  <div className="mt-0.5 font-mono tabular-nums text-base sm:text-lg font-semibold text-[#0A1D37] dark:text-white">
                    1 {fromCode} = {exchangeRate.toFixed(ratePrecision)} {toCode}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => fetchLiveRates()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A5C99]/8 dark:bg-white/8 hover:bg-[#0A5C99]/14 dark:hover:bg-white/14 text-xs font-medium text-[#0A5C99] dark:text-[#78C7F6] transition-colors cursor-pointer"
                  aria-label="Refresh live exchange rates"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                  <span>{isLive ? lastUpdated : 'Mid-market rate'}</span>
                </button>
              </div>

              {/* Popular Pairs Quick Switch */}
              <div className="flex flex-wrap items-center gap-1.5">
                {POPULAR_PAIRS.map((pair) => {
                  const isActive = fromCode === pair.from && toCode === pair.to;
                  return (
                    <button
                      key={pair.label}
                      type="button"
                      onClick={() => {
                        setFromCode(pair.from);
                        setToCode(pair.to);
                      }}
                      className={`px-2.5 py-1.5 rounded-lg font-mono text-xs font-medium transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#0A5C99] text-white'
                          : 'bg-[#0A2342]/6 dark:bg-white/8 text-[#364F6C] dark:text-[#C5D6E8] hover:bg-[#0A2342]/12 dark:hover:bg-white/14'
                      }`}
                    >
                      {pair.label}
                    </button>
                  );
                })}
              </div>

              {/* Two-Way Converter Inputs */}
              <div className="space-y-3 relative">
                {/* You Send */}
                <div className="p-4 rounded-2xl bg-white/75 dark:bg-[#061830]/75 border border-[#0A2342]/14 dark:border-white/14 focus-within:border-[#0A5C99] transition-colors">
                  <label
                    htmlFor="bo-send-amount"
                    className="block text-xs font-medium text-[#5C6F87] dark:text-[#98B1CC] mb-1.5"
                  >
                    You Send
                  </label>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <span className="font-mono text-lg text-[#5C6F87] dark:text-[#90AAC7]">
                        {fromCurrency.symbol}
                      </span>
                      <input
                        id="bo-send-amount"
                        type="text"
                        inputMode="decimal"
                        value={sendInput}
                        onChange={(e) => setSendInput(e.target.value)}
                        placeholder="1000"
                        className="w-full bg-transparent font-mono tabular-nums text-2xl sm:text-3xl font-semibold text-[#0A1D37] dark:text-white focus:outline-none"
                      />
                    </div>
                    <select
                      aria-label="Send currency"
                      value={fromCode}
                      onChange={(e) => setFromCode(e.target.value)}
                      className="h-11 px-3 rounded-xl bg-[#0A2342]/6 dark:bg-white/10 border border-[#0A2342]/12 dark:border-white/14 font-mono text-sm font-semibold text-[#0A1D37] dark:text-white focus:outline-none focus:border-[#0A5C99] cursor-pointer"
                    >
                      {CURRENCIES.map((c) => (
                        <option key={c.code} value={c.code} className="bg-white dark:bg-[#081C36]">
                          {c.code} — {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Swap Divider Row */}
                <div className="flex items-center justify-between px-2">
                  <div className="text-xs text-[#4A607A] dark:text-[#A9BED6] font-mono tabular-nums">
                    Fee: {fromCurrency.symbol}
                    {formatDecimal(transferFee, fromCode)} (
                    {fromCode === toCode ? 'Free' : '0.25%'})
                  </div>
                  <button
                    type="button"
                    onClick={handleSwap}
                    className="w-9 h-9 rounded-full bg-[#0A5C99] hover:bg-[#0D6CB2] active:scale-95 text-white flex items-center justify-center shadow-md transition-all cursor-pointer"
                    aria-label="Swap currencies"
                    title="Swap currencies"
                  >
                    <ArrowUpDown className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-1.5 text-xs text-[#0A5C99] dark:text-[#78C7F6] font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{toCurrency.speed}</span>
                  </div>
                </div>

                {/* Recipient Gets */}
                <div className="p-4 rounded-2xl bg-[#0A5C99]/7 dark:bg-[#0A5C99]/20 border border-[#0A5C99]/22">
                  <div className="text-xs font-medium text-[#3D5876] dark:text-[#B4CCE4] mb-1.5">
                    Recipient Gets ({toCurrency.name})
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-mono tabular-nums text-2xl sm:text-3xl font-semibold text-[#0A5C99] dark:text-[#7CC8F8] truncate">
                      {toCurrency.symbol} {formatDecimal(recipientGets, toCode)}
                    </div>
                    <select
                      aria-label="Receive currency"
                      value={toCode}
                      onChange={(e) => setToCode(e.target.value)}
                      className="h-11 px-3 rounded-xl bg-white/85 dark:bg-[#061830]/80 border border-[#0A2342]/12 dark:border-white/15 font-mono text-sm font-semibold text-[#0A1D37] dark:text-white focus:outline-none focus:border-[#0A5C99] cursor-pointer"
                    >
                      {CURRENCIES.map((c) => (
                        <option key={c.code} value={c.code} className="bg-white dark:bg-[#081C36]">
                          {c.code} — {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Callout & Action Row */}
            <div className="pt-2 space-y-4">
              {estimatedSavings > 0 && (
                <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#921B2D]/7 dark:bg-[#921B2D]/20 border border-[#921B2D]/16 text-xs sm:text-sm">
                  <span className="text-[#5A2D37] dark:text-[#E5B8C0]">
                    You save compared to typical bank exchange fees
                  </span>
                  <span className="font-mono tabular-nums font-semibold text-[#921B2D] dark:text-[#F06D80] whitespace-nowrap ml-2">
                    ~{fromCurrency.symbol}
                    {formatDecimal(estimatedSavings, fromCode)}
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => navigate('portal')}
                  className="inline-flex items-center justify-center gap-2 px-5 h-12 rounded-xl bg-[#921B2D] hover:bg-[#A82236] text-white text-sm font-medium transition-colors shadow-md cursor-pointer"
                >
                  <span>Send Money Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => openModal({ mode: 'account' })}
                  className="inline-flex items-center justify-center gap-2 px-5 h-12 rounded-xl bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/16 border border-[#0A2342]/14 dark:border-white/16 text-[#0A1D37] dark:text-white text-sm font-medium transition-colors cursor-pointer"
                >
                  <span>Open Free Account</span>
                </button>
              </div>
            </div>
          </GlassCard>
        </Reveal>

        {/* RIGHT: COUNTRIES WE OPERATE IN */}
        <Reveal delayMs={80} className="lg:col-span-5 flex">
          <GlassCard className="p-6 sm:p-8 w-full flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0A5C99] dark:text-[#78C7F6]">
                    <Globe2 className="w-3.5 h-3.5" />
                    <span>Where We Operate</span>
                  </div>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-[#0A1D37] dark:text-white">
                    42+ Countries Connected
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-[#4A607A] dark:text-[#A9BED6]">
                    Tap any country below to preview its live exchange rate in the converter.
                  </p>
                </div>
              </div>

              {/* Region Filter Tabs */}
              <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-[#0A2342]/6 dark:bg-white/8">
                {REGIONS.map((region) => (
                  <button
                    key={region.id}
                    type="button"
                    onClick={() => setActiveRegion(region.id)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer text-left flex items-center justify-between gap-1 ${
                      activeRegion === region.id
                        ? 'bg-[#0A5C99] text-white shadow-sm'
                        : 'text-[#39516E] dark:text-[#BDD0E4] hover:text-[#0A1D37] dark:hover:text-white'
                    }`}
                  >
                    <span className="truncate">{region.label}</span>
                  </button>
                ))}
              </div>

              {/* Countries Grid */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-medium text-[#5C6F87] dark:text-[#96AFCB]">
                  <span>{currentRegion.label}</span>
                  <span className="font-mono">{currentRegion.countLabel}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {currentRegion.countries.map((country) => {
                    const selected = toCode === country.currency;
                    return (
                      <button
                        key={country.iso}
                        type="button"
                        onClick={() => handleSelectCountry(country.currency)}
                        className={`flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl border text-left transition-colors cursor-pointer ${
                          selected
                            ? 'bg-[#0A5C99]/10 dark:bg-[#0A5C99]/25 border-[#0A5C99]/40'
                            : 'bg-white/60 dark:bg-white/6 border-[#0A2342]/10 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/12'
                        }`}
                      >
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-medium text-[#0A1D37] dark:text-white truncate">
                            {country.name}
                          </div>
                          <div className="font-mono text-[11px] text-[#5C6F87] dark:text-[#98B1CC]">
                            {country.iso} · {country.currency}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#0A2342]/10 dark:border-white/10 flex items-center justify-between gap-3 text-xs text-[#4A607A] dark:text-[#A9BED6]">
              <span>Send &amp; receive in 38+ currencies worldwide</span>
              <button
                type="button"
                onClick={() => navigate('about')}
                className="font-semibold text-[#0A5C99] dark:text-[#78C7F6] hover:underline whitespace-nowrap cursor-pointer"
              >
                All regions →
              </button>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
};
