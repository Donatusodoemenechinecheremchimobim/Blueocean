import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown,
  Globe,
  Sun,
  Moon,
  Home,
  Wallet,
  CreditCard,
  Lock,
  LayoutGrid,
  X,
  Building2,
  Landmark,
  TrendingUp,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import { BlueOceanLogo } from './BlueOceanLogo';
import { useApp, PageRoute } from '../context/AppContext';
import { SUPPORTED_LOCALES } from '../i18n/translations';

export const Navigation: React.FC = () => {
  const { route, navigate, locale, setLocale, theme, setTheme, t, openModal } = useApp();
  const [moreOpen, setMoreOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMoreOpen(false);
        setDrawerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  const go = (target: PageRoute) => {
    navigate(target);
    setMoreOpen(false);
    setDrawerOpen(false);
  };

  const primaryDesktopLinks: { id: PageRoute; label: string }[] = [
    { id: 'personal', label: t.nav.personal },
    { id: 'business', label: t.nav.business },
    { id: 'cards', label: t.nav.cards },
    { id: 'loans', label: t.nav.loans },
  ];

  const allMobileDestinations: {
    id: PageRoute;
    label: string;
    icon: React.ReactNode;
  }[] = [
    { id: 'home', label: t.nav.home, icon: <Home className="w-4 h-4" /> },
    { id: 'personal', label: t.nav.personal, icon: <Wallet className="w-4 h-4" /> },
    { id: 'business', label: t.nav.business, icon: <Building2 className="w-4 h-4" /> },
    { id: 'cards', label: t.nav.cards, icon: <CreditCard className="w-4 h-4" /> },
    { id: 'loans', label: t.nav.loans, icon: <Landmark className="w-4 h-4" /> },
    { id: 'wealth', label: t.nav.wealth, icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'security', label: t.nav.security, icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'portal', label: t.nav.portal, icon: <Lock className="w-4 h-4" /> },
  ];

  const currentLocaleShort =
    SUPPORTED_LOCALES.find((l) => l.code === locale)?.short ?? 'EN';

  return (
    <>
      {/* DESKTOP 3-ZONE TOP BAR CONTRACT (lg and up) */}
      <header className="hidden lg:block sticky top-0 z-40 px-6 pt-4">
        <div className="max-w-7xl mx-auto h-16 px-6 rounded-2xl glass-chrome flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Lockup */}
          <button
            type="button"
            onClick={() => go('home')}
            className="flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A5C99] rounded-lg cursor-pointer"
          >
            <BlueOceanLogo size={30} variant={theme === 'dark' ? 'light' : 'default'} />
            <span className="font-display text-lg font-semibold tracking-tight text-[#0A1D37] dark:text-white">
              BlueOcean
            </span>
          </button>

          {/* Zone 2: 5 concise single-line navigation links */}
          <nav className="flex items-center gap-7" aria-label="Main navigation">
            {primaryDesktopLinks.map((item) => {
              const active = route === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => go(item.id)}
                  className={`relative py-1.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    active
                      ? 'text-[#0A5C99] dark:text-[#7CC8F8]'
                      : 'text-[#314763] dark:text-[#C5D5E8] hover:text-[#0A1D37] dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="desktop-nav-underline"
                      className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-[#921B2D] dark:bg-[#D13A50]"
                    />
                  )}
                </button>
              );
            })}

            {/* More Dropdown (Private Wealth, Security & FDIC, 6 Languages, Daylight/Deep Ocean) */}
            <div ref={moreRef} className="relative">
              <button
                type="button"
                onClick={() => setMoreOpen((v) => !v)}
                aria-expanded={moreOpen}
                className={`flex items-center gap-1.5 py-1.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  route === 'wealth' || route === 'security' || moreOpen
                    ? 'text-[#0A5C99] dark:text-[#7CC8F8]'
                    : 'text-[#314763] dark:text-[#C5D5E8] hover:text-[#0A1D37] dark:hover:text-white'
                }`}
              >
                <span>{t.nav.more}</span>
                <span className="text-xs font-mono text-[#647B96] dark:text-[#8BA4C2]">
                  · {currentLocaleShort}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    moreOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute right-0 mt-4 w-[390px] rounded-2xl glass-chrome p-5 shadow-2xl"
                  >
                    <div className="space-y-4">
                      {/* Additional Divisions */}
                      <div>
                        <p className="text-xs font-medium text-[#5C6F87] dark:text-[#96AFCB] mb-2.5">
                          {t.nav.divisionsHeading}
                        </p>
                        <div className="grid grid-cols-1 gap-1.5">
                          <button
                            type="button"
                            onClick={() => go('wealth')}
                            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                              route === 'wealth'
                                ? 'bg-[#0A5C99]/12 text-[#0A5C99] dark:bg-white/10 dark:text-white'
                                : 'hover:bg-[#0A2342]/5 dark:hover:bg-white/8 text-[#0A1D37] dark:text-[#E6EFF8]'
                            }`}
                          >
                            <span className="flex items-center gap-2.5 text-sm font-medium">
                              <TrendingUp className="w-4 h-4 text-[#0A5C99] dark:text-[#6EC2F5]" />
                              {t.nav.wealth}
                            </span>
                            <ArrowUpRight className="w-4 h-4 opacity-50" />
                          </button>

                          <button
                            type="button"
                            onClick={() => go('security')}
                            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                              route === 'security'
                                ? 'bg-[#0A5C99]/12 text-[#0A5C99] dark:bg-white/10 dark:text-white'
                                : 'hover:bg-[#0A2342]/5 dark:hover:bg-white/8 text-[#0A1D37] dark:text-[#E6EFF8]'
                            }`}
                          >
                            <span className="flex items-center gap-2.5 text-sm font-medium">
                              <ShieldCheck className="w-4 h-4 text-[#921B2D] dark:text-[#DF4D63]" />
                              {t.nav.security}
                            </span>
                            <ArrowUpRight className="w-4 h-4 opacity-50" />
                          </button>
                        </div>
                      </div>

                      <div className="h-px bg-[#0A2342]/10 dark:bg-white/10" />

                      {/* 6-Language Switcher */}
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-[#5C6F87] dark:text-[#96AFCB] mb-2.5">
                          <Globe className="w-3.5 h-3.5" />
                          <span>{t.nav.languageLabel}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1.5">
                          {SUPPORTED_LOCALES.map((item) => {
                            const active = locale === item.code;
                            return (
                              <button
                                key={item.code}
                                type="button"
                                onClick={() => setLocale(item.code)}
                                className={`px-2.5 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                                  active
                                    ? 'bg-[#0A5C99] text-white shadow-sm'
                                    : 'bg-[#0A2342]/5 dark:bg-white/6 text-[#1E3654] dark:text-[#D1DFEE] hover:bg-[#0A2342]/10 dark:hover:bg-white/12'
                                }`}
                              >
                                {item.label}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="h-px bg-[#0A2342]/10 dark:bg-white/10" />

                      {/* Daylight / Deep Ocean Appearance Switch */}
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs font-medium text-[#5C6F87] dark:text-[#96AFCB]">
                          {t.nav.themeLabel}
                        </span>
                        <div className="flex items-center gap-1 p-1 rounded-lg bg-[#0A2342]/6 dark:bg-white/8">
                          <button
                            type="button"
                            onClick={() => setTheme('light')}
                            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                              theme === 'light'
                                ? 'bg-white text-[#0A1D37] shadow-sm'
                                : 'text-[#5C6F87] dark:text-[#B4C6DA] hover:text-[#0A1D37] dark:hover:text-white'
                            }`}
                          >
                            <Sun className="w-3.5 h-3.5" />
                            <span>{t.nav.daylight}</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setTheme('dark')}
                            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                              theme === 'dark'
                                ? 'bg-[#0B2D56] text-white shadow-sm'
                                : 'text-[#5C6F87] dark:text-[#B4C6DA] hover:text-[#0A1D37] dark:hover:text-white'
                            }`}
                          >
                            <Moon className="w-3.5 h-3.5" />
                            <span>{t.nav.deepOcean}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Zone 3: 1 Primary CTA Button */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => go('portal')}
              className="px-4 py-2.5 rounded-xl bg-[#921B2D] hover:bg-[#A82236] active:scale-[0.98] text-white text-sm font-medium whitespace-nowrap shrink-0 transition-all shadow-[0_8px_20px_-6px_rgba(146,27,45,0.55)] cursor-pointer"
            >
              {t.nav.portal}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MINIMAL BRAND HEADER (no legacy heavy navbar — pairs with Floating Bottom Glass Dock) */}
      <header className="lg:hidden sticky top-0 z-30 px-4 pt-2.5 pb-1.5">
        <div className="h-12 px-4 rounded-2xl glass-chrome flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => go('home')}
            className="flex items-center gap-2 whitespace-nowrap shrink-0 min-h-[44px]"
          >
            <BlueOceanLogo size={24} variant={theme === 'dark' ? 'light' : 'default'} />
            <span className="font-display text-base font-semibold tracking-tight text-[#0A1D37] dark:text-white">
              BlueOcean
            </span>
          </button>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open language and navigation drawer"
            className="flex items-center gap-1.5 px-3 min-h-[40px] rounded-xl bg-[#0A2342]/6 dark:bg-white/10 text-xs font-mono font-medium text-[#0A1D37] dark:text-white whitespace-nowrap shrink-0"
          >
            <Globe className="w-3.5 h-3.5 text-[#0A5C99] dark:text-[#78C7F6]" />
            <span>{currentLocaleShort}</span>
          </button>
        </div>
      </header>

      {/* NEW-AGE FLOATING GLASSMORPHIC BOTTOM DOCK (Mobile & Tablet < lg) */}
      <nav
        aria-label="Mobile quick dock"
        className="lg:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[min(420px,calc(100vw-24px))]"
      >
        <div className="h-[60px] px-2 rounded-full glass-chrome flex items-center justify-between shadow-[0_18px_42px_-12px_rgba(7,28,54,0.34)]">
          <button
            type="button"
            onClick={() => go('home')}
            className={`flex flex-col items-center justify-center min-w-[54px] min-h-[46px] rounded-full transition-colors ${
              route === 'home'
                ? 'text-[#0A5C99] dark:text-[#7AC8F8]'
                : 'text-[#4B627E] dark:text-[#9FB4CD]'
            }`}
          >
            <Home className="w-[19px] h-[19px]" />
            <span className="text-[10px] font-medium mt-0.5 leading-none truncate max-w-[54px]">
              {t.nav.home}
            </span>
          </button>

          <button
            type="button"
            onClick={() => go('personal')}
            className={`flex flex-col items-center justify-center min-w-[54px] min-h-[46px] rounded-full transition-colors ${
              route === 'personal'
                ? 'text-[#0A5C99] dark:text-[#7AC8F8]'
                : 'text-[#4B627E] dark:text-[#9FB4CD]'
            }`}
          >
            <Wallet className="w-[19px] h-[19px]" />
            <span className="text-[10px] font-medium mt-0.5 leading-none truncate max-w-[56px]">
              {t.nav.personal}
            </span>
          </button>

          {/* Elevated Center Titanium-Oceanic Command Orb */}
          <button
            type="button"
            onClick={() => setDrawerOpen((v) => !v)}
            aria-expanded={drawerOpen}
            aria-label={drawerOpen ? t.nav.close : t.nav.menu}
            className="-mt-4 w-13 h-13 rounded-full bg-gradient-to-br from-[#0E6BA8] via-[#093A6E] to-[#921B2D] text-white flex items-center justify-center shadow-[0_12px_28px_-6px_rgba(10,92,153,0.65)] border-2 border-white/80 dark:border-[#D4E2F2]/40 active:scale-95 transition-transform"
          >
            {drawerOpen ? <X className="w-5 h-5" /> : <LayoutGrid className="w-5 h-5" />}
          </button>

          <button
            type="button"
            onClick={() => go('cards')}
            className={`flex flex-col items-center justify-center min-w-[54px] min-h-[46px] rounded-full transition-colors ${
              route === 'cards'
                ? 'text-[#0A5C99] dark:text-[#7AC8F8]'
                : 'text-[#4B627E] dark:text-[#9FB4CD]'
            }`}
          >
            <CreditCard className="w-[19px] h-[19px]" />
            <span className="text-[10px] font-medium mt-0.5 leading-none truncate max-w-[54px]">
              {t.nav.cards}
            </span>
          </button>

          <button
            type="button"
            onClick={() => go('portal')}
            className={`flex flex-col items-center justify-center min-w-[54px] min-h-[46px] rounded-full transition-colors ${
              route === 'portal'
                ? 'text-[#921B2D] dark:text-[#EB5B70]'
                : 'text-[#4B627E] dark:text-[#9FB4CD]'
            }`}
          >
            <Lock className="w-[19px] h-[19px]" />
            <span className="text-[10px] font-medium mt-0.5 leading-none truncate max-w-[56px]">
              {t.nav.portal}
            </span>
          </button>
        </div>
      </nav>

      {/* SPRING FULL-BLUR MOBILE DRAWER */}
      <AnimatePresence>
        {drawerOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="absolute inset-0 bg-[#041021]/55 backdrop-blur-md"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="relative z-10 rounded-t-[28px] glass-chrome border-t border-white/40 dark:border-white/15 px-5 pt-3 pb-7 max-h-[84vh] overflow-y-auto"
            >
              {/* Drag Handle */}
              <div className="w-11 h-1.5 rounded-full bg-[#0A2342]/20 dark:bg-white/25 mx-auto mb-4" />

              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-base font-semibold text-[#0A1D37] dark:text-white">
                  {t.nav.divisionsHeading}
                </span>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-[#0A2342]/6 dark:bg-white/10 text-[#0A1D37] dark:text-white"
                  aria-label={t.nav.close}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* All 8 Banking Pages Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-5">
                {allMobileDestinations.map((dest) => {
                  const active = route === dest.id;
                  return (
                    <button
                      key={dest.id}
                      type="button"
                      onClick={() => go(dest.id)}
                      className={`flex items-center gap-2.5 px-3.5 min-h-[48px] rounded-xl text-left text-sm font-medium transition-colors ${
                        active
                          ? 'bg-[#0A5C99] text-white shadow-sm'
                          : 'bg-[#0A2342]/5 dark:bg-white/8 text-[#0A1D37] dark:text-[#E6EFF8]'
                      }`}
                    >
                      <span className="shrink-0 opacity-85">{dest.icon}</span>
                      <span className="truncate">{dest.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* 6-Language Switcher */}
              <div className="mb-5">
                <div className="flex items-center gap-1.5 text-xs font-medium text-[#5C6F87] dark:text-[#9FB4CD] mb-2.5">
                  <Globe className="w-3.5 h-3.5" />
                  <span>{t.nav.languageLabel}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {SUPPORTED_LOCALES.map((item) => {
                    const active = locale === item.code;
                    return (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() => setLocale(item.code)}
                        className={`min-h-[44px] px-2 rounded-xl text-xs font-medium transition-colors ${
                          active
                            ? 'bg-[#0A5C99] text-white'
                            : 'bg-[#0A2342]/5 dark:bg-white/8 text-[#1C3554] dark:text-[#D1E0F0]'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Appearance Switch + Open Account Action */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="text-xs font-medium text-[#5C6F87] dark:text-[#9FB4CD]">
                  {t.nav.themeLabel}
                </span>
                <div className="flex items-center gap-1 p-1 rounded-xl bg-[#0A2342]/6 dark:bg-white/10">
                  <button
                    type="button"
                    onClick={() => setTheme('light')}
                    className={`flex items-center gap-1.5 px-3 min-h-[38px] rounded-lg text-xs font-medium ${
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
                    className={`flex items-center gap-1.5 px-3 min-h-[38px] rounded-lg text-xs font-medium ${
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

              <button
                type="button"
                onClick={() => {
                  setDrawerOpen(false);
                  openModal({ mode: 'account' });
                }}
                className="w-full h-12 rounded-xl bg-[#921B2D] hover:bg-[#A82236] text-white font-medium text-sm shadow-lg"
              >
                {t.nav.openAccount}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
