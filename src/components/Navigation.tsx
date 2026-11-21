import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown,
  Globe,
  Sun,
  Moon,
  Home,
  Wallet,
  Lock,
  Compass,
  X,
  Building2,
  Landmark,
  TrendingUp,
  ShieldCheck,
  ArrowUpRight,
  Info,
  Mail,
  LogOut,
  LayoutDashboard,
  Plus,
} from 'lucide-react';
import { BlueOceanLogo } from './BlueOceanLogo';
import { useApp, PageRoute } from '../context/AppContext';
import { useBanking } from '../context/BankingContext';
import { SUPPORTED_LOCALES } from '../i18n/translations';

const SMOOTH_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const Navigation: React.FC = () => {
  const {
    route,
    navigate,
    locale,
    setLocale,
    theme,
    setTheme,
    t,
    openModal,
    formatCurrency,
    pushToast,
  } = useApp();
  const { isAuthenticated, profile, accounts, signOut } = useBanking();

  const [moreOpen, setMoreOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const moreRef = useRef<HTMLDivElement | null>(null);
  const accountRef = useRef<HTMLDivElement | null>(null);

  const totalBalance = useMemo(
    () => accounts.reduce((sum, acc) => sum + acc.balance, 0),
    [accounts]
  );

  const firstName = useMemo(() => {
    const trimmed = profile.name.trim();
    return trimmed ? trimmed.split(/\s+/)[0] : 'Member';
  }, [profile.name]);

  const initials = useMemo(() => {
    const parts = profile.name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return 'BO';
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }, [profile.name]);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) {
        setAccountMenuOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMoreOpen(false);
        setAccountMenuOpen(false);
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

  // Lock background scrolling cleanly while mobile sheet is open to keep GPU animation silky
  useEffect(() => {
    if (!drawerOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [drawerOpen]);

  const go = (target: PageRoute) => {
    navigate(target);
    setMoreOpen(false);
    setAccountMenuOpen(false);
    setDrawerOpen(false);
  };

  const handleSignOut = () => {
    signOut();
    setAccountMenuOpen(false);
    setDrawerOpen(false);
    pushToast('You have signed out of your BlueOcean account.', 'info');
    if (route === 'portal') {
      navigate('home');
    }
  };

  const primaryDesktopLinks: { id: PageRoute; label: string }[] = [
    { id: 'personal', label: t.nav.personal },
    { id: 'business', label: t.nav.business },
    { id: 'loans', label: t.nav.loans },
    { id: 'security', label: t.nav.security },
  ];

  const allDestinations: {
    id: PageRoute;
    label: string;
    icon: React.ReactNode;
    accent?: boolean;
  }[] = [
    { id: 'home', label: t.nav.home, icon: <Home className="w-4 h-4" /> },
    { id: 'personal', label: t.nav.personal, icon: <Wallet className="w-4 h-4" /> },
    { id: 'business', label: t.nav.business, icon: <Building2 className="w-4 h-4" /> },
    { id: 'loans', label: t.nav.loans, icon: <Landmark className="w-4 h-4" /> },
    { id: 'wealth', label: t.nav.wealth, icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'security', label: t.nav.security, icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'about', label: t.nav.about, icon: <Info className="w-4 h-4" /> },
    { id: 'contact', label: t.nav.contact, icon: <Mail className="w-4 h-4" /> },
    {
      id: 'portal',
      label: isAuthenticated ? 'My Portal Dashboard' : t.nav.portal,
      icon: isAuthenticated ? (
        <LayoutDashboard className="w-4 h-4" />
      ) : (
        <Lock className="w-4 h-4" />
      ),
      accent: true,
    },
  ];

  const currentLocaleShort =
    SUPPORTED_LOCALES.find((l) => l.code === locale)?.short ?? 'EN';

  const quickRailItems: { id: PageRoute; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: t.nav.home, icon: <Home className="w-[18px] h-[18px]" /> },
    { id: 'personal', label: t.nav.personal, icon: <Wallet className="w-[18px] h-[18px]" /> },
    { id: 'business', label: t.nav.business, icon: <Building2 className="w-[18px] h-[18px]" /> },
  ];

  return (
    <>
      {/* DESKTOP 3-ZONE TOP BAR (Adapts distinctly when user is logged in) */}
      <header className="hidden lg:block sticky top-0 z-40 px-6 pt-4">
        <motion.div
          layout
          transition={{ duration: 0.32, ease: SMOOTH_EASE }}
          className={`max-w-7xl mx-auto h-16 px-6 rounded-2xl flex items-center justify-between gap-6 transition-all duration-300 ${
            isAuthenticated
              ? 'bg-[#071D38]/92 dark:bg-[#051529]/92 backdrop-blur-xl border border-[#78C7F6]/28 shadow-[0_14px_38px_-14px_rgba(7,28,54,0.55)] text-white'
              : 'glass-chrome'
          }`}
        >
          {/* Zone 1: Brand Lockup + Logged-In Member Indicator */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => go('home')}
              className="flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A5C99] rounded-lg cursor-pointer"
            >
              <BlueOceanLogo
                size={30}
                variant={isAuthenticated || theme === 'dark' ? 'light' : 'default'}
              />
              <span
                className={`font-display text-lg font-semibold tracking-tight ${
                  isAuthenticated ? 'text-white' : 'text-[#0A1D37] dark:text-white'
                }`}
              >
                BlueOcean
              </span>
            </button>

            <AnimatePresence>
              {isAuthenticated && (
                <motion.span
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  transition={{ duration: 0.25, ease: SMOOTH_EASE }}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-400/14 border border-emerald-400/30 text-[11px] font-medium text-emerald-300 whitespace-nowrap"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Signed In</span>
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="flex items-center gap-7" aria-label="Main navigation">
            {primaryDesktopLinks.map((item) => {
              const active = route === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => go(item.id)}
                  className={`relative py-1.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isAuthenticated
                      ? active
                        ? 'text-[#7CC8F8]'
                        : 'text-[#C6DAF0] hover:text-white'
                      : active
                        ? 'text-[#0A5C99] dark:text-[#7CC8F8]'
                        : 'text-[#314763] dark:text-[#C5D5E8] hover:text-[#0A1D37] dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="desktop-nav-underline"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className={`absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full ${
                        isAuthenticated ? 'bg-[#7CC8F8]' : 'bg-[#921B2D] dark:bg-[#D13A50]'
                      }`}
                    />
                  )}
                </button>
              );
            })}

            {/* More Dropdown */}
            <div ref={moreRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setMoreOpen((v) => !v);
                  setAccountMenuOpen(false);
                }}
                aria-expanded={moreOpen}
                className={`flex items-center gap-1.5 py-1.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  isAuthenticated
                    ? route === 'wealth' || route === 'about' || route === 'contact' || moreOpen
                      ? 'text-[#7CC8F8]'
                      : 'text-[#C6DAF0] hover:text-white'
                    : route === 'wealth' || route === 'about' || route === 'contact' || moreOpen
                      ? 'text-[#0A5C99] dark:text-[#7CC8F8]'
                      : 'text-[#314763] dark:text-[#C5D5E8] hover:text-[#0A1D37] dark:hover:text-white'
                }`}
              >
                <span>{t.nav.more}</span>
                <span
                  className={`text-xs font-mono ${
                    isAuthenticated ? 'text-[#89AFD4]' : 'text-[#647B96] dark:text-[#8BA4C2]'
                  }`}
                >
                  · {currentLocaleShort}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ease-out ${
                    moreOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    key="desktop-more-dropdown"
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.24, ease: SMOOTH_EASE }}
                    className="origin-top-right absolute right-0 mt-4 w-[390px] rounded-2xl bg-white/95 dark:bg-[#071B34]/96 backdrop-blur-xl border border-[#0A2342]/12 dark:border-white/16 p-5 shadow-[0_24px_60px_-14px_rgba(4,16,33,0.45)] will-change-[transform,opacity]"
                  >
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-medium text-[#5C6F87] dark:text-[#96AFCB] mb-2.5">
                          {t.nav.divisionsHeading}
                        </p>
                        <div className="grid grid-cols-1 gap-1.5">
                          {(
                            [
                              {
                                id: 'wealth' as PageRoute,
                                label: t.nav.wealth,
                                icon: <TrendingUp className="w-4 h-4 text-[#0A5C99] dark:text-[#6EC2F5]" />,
                              },
                              {
                                id: 'security' as PageRoute,
                                label: t.nav.security,
                                icon: <ShieldCheck className="w-4 h-4 text-[#921B2D] dark:text-[#DF4D63]" />,
                              },
                              {
                                id: 'about' as PageRoute,
                                label: t.nav.about,
                                icon: <Info className="w-4 h-4 text-[#0A5C99] dark:text-[#6EC2F5]" />,
                              },
                              {
                                id: 'contact' as PageRoute,
                                label: t.nav.contact,
                                icon: <Mail className="w-4 h-4 text-[#0A5C99] dark:text-[#6EC2F5]" />,
                              },
                            ]
                          ).map((entry, idx) => (
                            <motion.button
                              key={entry.id}
                              type="button"
                              initial={{ opacity: 0, x: -6 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.2,
                                delay: idx * 0.03,
                                ease: SMOOTH_EASE,
                              }}
                              onClick={() => go(entry.id)}
                              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                                route === entry.id
                                  ? 'bg-[#0A5C99]/12 text-[#0A5C99] dark:bg-white/10 dark:text-white'
                                  : 'hover:bg-[#0A2342]/5 dark:hover:bg-white/8 text-[#0A1D37] dark:text-[#E6EFF8]'
                              }`}
                            >
                              <span className="flex items-center gap-2.5 text-sm font-medium">
                                {entry.icon}
                                {entry.label}
                              </span>
                              <ArrowUpRight className="w-4 h-4 opacity-50" />
                            </motion.button>
                          ))}
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

                      {/* Light Mode / Deep Ocean Appearance Switch */}
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

          {/* Zone 3: Distinct Logged-In Member Control vs Guest Portal CTA */}
          <div className="shrink-0">
            {isAuthenticated ? (
              <div ref={accountRef} className="relative flex items-center gap-2.5">
                {/* Live Total Balance Shortcut */}
                <button
                  type="button"
                  onClick={() => go('portal')}
                  className="hidden xl:inline-flex items-center gap-2 px-3 h-10 rounded-xl bg-white/8 hover:bg-white/14 border border-white/12 text-xs transition-colors cursor-pointer"
                  title="Open Customer Portal"
                >
                  <span className="text-[#99C2E6]">Balance</span>
                  <span className="font-mono tabular-nums font-semibold text-white">
                    {formatCurrency(totalBalance, 0)}
                  </span>
                </button>

                {/* Logged-In User Profile Trigger */}
                <button
                  type="button"
                  onClick={() => {
                    setAccountMenuOpen((v) => !v);
                    setMoreOpen(false);
                  }}
                  aria-expanded={accountMenuOpen}
                  className="inline-flex items-center gap-2.5 pl-1.5 pr-3 h-10 rounded-xl bg-[#0A5C99] hover:bg-[#0D6DB5] border border-[#7CC8F8]/35 text-white transition-all shadow-md cursor-pointer"
                >
                  <span className="relative w-7 h-7 rounded-lg bg-white/18 flex items-center justify-center font-display text-xs font-bold text-white">
                    {initials}
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0A5C99]" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                    Hi, {firstName}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#CBE7FB] transition-transform duration-300 ease-out ${
                      accountMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Smooth Animated Logged-In Member Dropdown */}
                <AnimatePresence>
                  {accountMenuOpen && (
                    <motion.div
                      key="desktop-account-dropdown"
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.97 }}
                      transition={{ duration: 0.22, ease: SMOOTH_EASE }}
                      className="origin-top-right absolute right-0 top-12 w-[300px] rounded-2xl bg-white/96 dark:bg-[#071B34]/96 backdrop-blur-xl border border-[#0A2342]/12 dark:border-white/16 p-4 shadow-[0_24px_60px_-14px_rgba(4,16,33,0.5)] text-[#0A1D37] dark:text-white will-change-[transform,opacity]"
                    >
                      <div className="flex items-center gap-3 pb-3.5 border-b border-[#0A2342]/10 dark:border-white/10">
                        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A5C99] to-[#072C54] text-white font-display font-bold text-sm flex items-center justify-center shrink-0">
                          {initials}
                          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-white dark:ring-[#071B34]" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold truncate">{profile.name}</div>
                          <div className="text-xs text-[#5C6F87] dark:text-[#96AFCB] truncate">
                            {profile.email}
                          </div>
                        </div>
                      </div>

                      <div className="py-3 border-b border-[#0A2342]/10 dark:border-white/10 flex items-center justify-between text-xs">
                        <span className="text-[#5C6F87] dark:text-[#96AFCB]">
                          Total Liquidity ({accounts.length})
                        </span>
                        <span className="font-mono tabular-nums font-semibold text-[#0A5C99] dark:text-[#78C7F6]">
                          {formatCurrency(totalBalance)}
                        </span>
                      </div>

                      <div className="pt-2.5 space-y-1">
                        <button
                          type="button"
                          onClick={() => go('portal')}
                          className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium hover:bg-[#0A5C99]/10 dark:hover:bg-white/8 text-[#0A5C99] dark:text-[#78C7F6] transition-colors cursor-pointer"
                        >
                          <span className="flex items-center gap-2">
                            <LayoutDashboard className="w-4 h-4" />
                            <span>Open Customer Portal</span>
                          </span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setAccountMenuOpen(false);
                            openModal({ mode: 'account', defaultAccountType: 'business' });
                          }}
                          className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium hover:bg-[#0A2342]/6 dark:hover:bg-white/8 transition-colors cursor-pointer"
                        >
                          <Plus className="w-4 h-4 text-[#5C6F87] dark:text-[#96AFCB]" />
                          <span>Open Personal or Business Account</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleSignOut}
                          className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-[#921B2D] dark:text-[#F06D80] hover:bg-[#921B2D]/10 transition-colors cursor-pointer"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>{t.portal.signOut}</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => go('portal')}
                className="px-4 py-2.5 rounded-xl bg-[#921B2D] hover:bg-[#A82236] active:scale-[0.98] text-white text-sm font-medium whitespace-nowrap shrink-0 transition-all shadow-[0_8px_20px_-6px_rgba(146,27,45,0.55)] cursor-pointer"
              >
                {t.nav.portal}
              </button>
            )}
          </div>
        </motion.div>
      </header>

      {/* MOBILE TOP BRAND STRIP (Distinct logged-in header with member greeting) */}
      <header className="lg:hidden sticky top-0 z-30 px-4 pt-3 pb-2">
        <div
          className={`h-12 px-3.5 rounded-full flex items-center justify-between gap-2.5 transition-all duration-300 ${
            isAuthenticated
              ? 'bg-[#071D38]/92 dark:bg-[#051529]/92 backdrop-blur-xl border border-[#78C7F6]/30 shadow-[0_12px_28px_-10px_rgba(4,16,33,0.55)] text-white'
              : 'glass-chrome'
          }`}
        >
          <button
            type="button"
            onClick={() => go('home')}
            className="flex items-center gap-2 pl-1 whitespace-nowrap shrink-0 min-h-[44px]"
          >
            <BlueOceanLogo
              size={24}
              variant={isAuthenticated || theme === 'dark' ? 'light' : 'default'}
            />
            <span
              className={`font-display text-[15px] font-semibold tracking-tight ${
                isAuthenticated ? 'text-white' : 'text-[#0A1D37] dark:text-white'
              }`}
            >
              BlueOcean
            </span>
          </button>

          <div className="flex items-center gap-1.5">
            {isAuthenticated && (
              <button
                type="button"
                onClick={() => go('portal')}
                className="flex items-center gap-1.5 pl-1.5 pr-2.5 h-8 rounded-full bg-white/12 border border-white/16 text-xs font-medium text-white whitespace-nowrap shrink-0 active:scale-95 transition-transform"
              >
                <span className="relative w-5 h-5 rounded-full bg-[#0A5C99] flex items-center justify-center text-[10px] font-bold">
                  {initials}
                  <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 ring-1 ring-[#071D38]" />
                </span>
                <span>Hi, {firstName}</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label="Toggle appearance theme"
              className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                isAuthenticated
                  ? 'bg-white/10 text-white'
                  : 'bg-[#0A2342]/6 dark:bg-white/10 text-[#0A1D37] dark:text-white'
              }`}
            >
              {theme === 'light' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
            </button>

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open language selector and menu"
              className={`flex items-center gap-1.5 px-2.5 h-9 rounded-full text-xs font-mono font-medium whitespace-nowrap shrink-0 transition-colors ${
                isAuthenticated
                  ? 'bg-white/10 text-white'
                  : 'bg-[#0A2342]/6 dark:bg-white/10 text-[#0A1D37] dark:text-white'
              }`}
            >
              <Globe
                className={`w-3.5 h-3.5 ${
                  isAuthenticated ? 'text-[#78C7F6]' : 'text-[#0A5C99] dark:text-[#78C7F6]'
                }`}
              />
              <span>{currentLocaleShort}</span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FLOATING COMMAND CAPSULE (Adapts clearly when signed in) */}
      <nav
        aria-label="Mobile spatial command bar"
        className="lg:hidden fixed bottom-3.5 left-1/2 -translate-x-1/2 z-40 w-[min(392px,calc(100vw-24px))]"
      >
        <div
          className={`h-[58px] p-1.5 rounded-full flex items-center justify-between gap-1.5 shadow-[0_20px_48px_-12px_rgba(7,28,54,0.45)] transition-all duration-300 ${
            isAuthenticated
              ? 'bg-[#071D38]/92 backdrop-blur-xl border border-[#78C7F6]/30'
              : 'glass-chrome border border-white/60 dark:border-white/18'
          }`}
        >
          {/* Left: Smooth Morphing Menu Trigger */}
          <button
            type="button"
            onClick={() => setDrawerOpen((v) => !v)}
            aria-expanded={drawerOpen}
            aria-label={drawerOpen ? t.nav.close : t.nav.menu}
            className={`h-[44px] px-3.5 rounded-full flex items-center gap-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors active:scale-95 ${
              drawerOpen
                ? 'bg-white text-[#0A1D37] shadow-sm'
                : isAuthenticated
                  ? 'bg-white/12 text-white'
                  : 'bg-[#0A2342]/7 dark:bg-white/10 text-[#0A1D37] dark:text-white'
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={drawerOpen ? 'close-icon' : 'menu-icon'}
                initial={{ rotate: -60, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 60, opacity: 0 }}
                transition={{ duration: 0.18, ease: SMOOTH_EASE }}
                className="flex items-center justify-center"
              >
                {drawerOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Compass
                    className={`w-4 h-4 ${
                      isAuthenticated ? 'text-[#78C7F6]' : 'text-[#0A5C99] dark:text-[#78C7F6]'
                    }`}
                  />
                )}
              </motion.span>
            </AnimatePresence>
            <span>{drawerOpen ? t.nav.close : t.nav.menu}</span>
          </button>

          {/* Center: Luminous Quick Rail */}
          <div
            className={`flex items-center gap-1 px-1 py-1 rounded-full ${
              isAuthenticated ? 'bg-white/8' : 'bg-[#0A2342]/5 dark:bg-white/6'
            }`}
          >
            {quickRailItems.map((item) => {
              const active = route === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => go(item.id)}
                  aria-label={item.label}
                  className={`relative w-11 h-[38px] rounded-full flex items-center justify-center transition-colors ${
                    active
                      ? 'text-white'
                      : isAuthenticated
                        ? 'text-[#A6C4E0] hover:text-white'
                        : 'text-[#3F5673] dark:text-[#A9C0DA] hover:text-[#0A1D37] dark:hover:text-white'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="mobile-spatial-pill"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0A5C99] to-[#083B6B] shadow-[0_6px_16px_-4px_rgba(10,92,153,0.65)]"
                    />
                  )}
                  <span className="relative z-10">{item.icon}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Authenticated User Capsule vs Guest Portal Button */}
          {isAuthenticated ? (
            <button
              type="button"
              onClick={() => go('portal')}
              aria-label="Open My Account Portal"
              className={`h-[44px] pl-2 pr-3.5 rounded-full flex items-center gap-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-all active:scale-95 ${
                route === 'portal'
                  ? 'bg-[#0A5C99] text-white ring-2 ring-[#78C7F6]/45 shadow-[0_8px_20px_-4px_rgba(10,92,153,0.75)]'
                  : 'bg-gradient-to-r from-[#0A5C99] to-[#0D6EB8] text-white shadow-[0_8px_18px_-6px_rgba(10,92,153,0.65)]'
              }`}
            >
              <span className="relative w-6 h-6 rounded-full bg-white/18 flex items-center justify-center text-[10px] font-bold">
                {initials}
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 ring-1 ring-[#0A5C99]" />
              </span>
              <span>{firstName}</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => go('portal')}
              aria-label={t.nav.portal}
              className={`h-[44px] px-3.5 rounded-full flex items-center gap-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-all active:scale-95 ${
                route === 'portal'
                  ? 'bg-gradient-to-r from-[#A82236] to-[#7D1524] text-white ring-2 ring-[#921B2D]/30 shadow-[0_8px_22px_-4px_rgba(146,27,45,0.7)]'
                  : 'bg-[#921B2D] text-white shadow-[0_8px_18px_-6px_rgba(146,27,45,0.55)]'
              }`}
            >
              <Lock className="w-3.5 h-3.5 shrink-0" />
              <span>{t.nav.dockPortal}</span>
            </button>
          )}
        </div>
      </nav>

      {/* SILKY GPU-ACCELERATED MOBILE NAVIGATION SHEET (No blur-scale jank!) */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            key="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: SMOOTH_EASE }}
            className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end p-3 pb-5"
          >
            {/* Solid translucent scrim (avoids frame-dropping live backdrop-blur animation on mobile) */}
            <div
              onClick={() => setDrawerOpen(false)}
              className="absolute inset-0 bg-[#041021]/68"
            />

            {/* Pure translateY sheet transition + staggered items */}
            <motion.div
              key="mobile-nav-sheet"
              initial={{ y: '100%', opacity: 0.9 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0.9 }}
              transition={{ duration: 0.36, ease: SMOOTH_EASE }}
              className="relative z-10 rounded-[28px] bg-[#F7FAFE]/98 dark:bg-[#071A33]/98 border border-white/70 dark:border-white/15 px-5 pt-4 pb-6 max-h-[85vh] overflow-y-auto shadow-[0_28px_70px_-16px_rgba(4,16,33,0.7)] will-change-transform"
            >
              <div className="w-10 h-1 rounded-full bg-[#0A2342]/20 dark:bg-white/25 mx-auto mb-4" />

              {/* Logged-In Member Recognition Card inside Mobile Menu */}
              {isAuthenticated ? (
                <div className="mb-4 p-4 rounded-2xl bg-gradient-to-r from-[#071D38] via-[#0B2E58] to-[#0A477C] text-white border border-[#78C7F6]/25 space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative w-10 h-10 rounded-xl bg-white/16 flex items-center justify-center font-display font-bold text-sm shrink-0">
                        {initials}
                        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-[#071D38]" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] text-emerald-300 font-medium">
                          Signed In · {profile.tier}
                        </div>
                        <div className="font-display text-sm font-semibold truncate">
                          {profile.name}
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setDrawerOpen(false)}
                      className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-full bg-white/12 text-white shrink-0"
                      aria-label={t.nav.close}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="pt-2.5 border-t border-white/14 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-[10px] text-[#A8CBE8]">Total Balance</div>
                      <div className="font-mono tabular-nums text-base font-semibold">
                        {formatCurrency(totalBalance)}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => go('portal')}
                        className="px-3 h-8 rounded-lg bg-white text-[#071D38] text-xs font-semibold"
                      >
                        My Portal
                      </button>
                      <button
                        type="button"
                        onClick={handleSignOut}
                        className="px-2.5 h-8 rounded-lg bg-[#921B2D] text-white text-xs font-medium inline-flex items-center gap-1"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="font-display text-base font-semibold text-[#0A1D37] dark:text-white">
                      {t.nav.divisionsHeading}
                    </span>
                    <p className="text-[11px] text-[#5C6F87] dark:text-[#96AFCB]">
                      BlueOcean International Bank · 42+ Countries
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setDrawerOpen(false)}
                    className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-full bg-[#0A2342]/7 dark:bg-white/10 text-[#0A1D37] dark:text-white"
                    aria-label={t.nav.close}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Staggered Choreographed Destination Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-5">
                {allDestinations.map((dest, idx) => {
                  const active = route === dest.id;
                  return (
                    <motion.button
                      key={dest.id}
                      type="button"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.24,
                        delay: 0.05 + idx * 0.024,
                        ease: SMOOTH_EASE,
                      }}
                      onClick={() => go(dest.id)}
                      className={`flex items-center gap-2.5 px-3.5 min-h-[48px] rounded-2xl text-left text-[13px] font-medium transition-colors active:scale-[0.98] ${
                        active
                          ? dest.accent
                            ? isAuthenticated
                              ? 'bg-[#0A5C99] text-white shadow-md'
                              : 'bg-[#921B2D] text-white shadow-md'
                            : 'bg-[#0A5C99] text-white shadow-md'
                          : dest.accent
                            ? isAuthenticated
                              ? 'bg-[#0A5C99]/12 dark:bg-[#0A5C99]/28 text-[#0A5C99] dark:text-[#8FD1FA] border border-[#0A5C99]/22'
                              : 'bg-[#921B2D]/10 dark:bg-[#921B2D]/25 text-[#921B2D] dark:text-[#F48797] border border-[#921B2D]/20'
                            : 'bg-[#0A2342]/5 dark:bg-white/8 text-[#0A1D37] dark:text-[#E6EFF8]'
                      }`}
                    >
                      <span className="shrink-0 opacity-90">{dest.icon}</span>
                      <span className="leading-tight">{dest.label}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* 6-Language Switcher */}
              <div className="mb-5">
                <div className="flex items-center gap-1.5 text-xs font-medium text-[#5C6F87] dark:text-[#9FB4CD] mb-2">
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
                        className={`min-h-[42px] px-2 rounded-xl text-xs font-medium transition-colors ${
                          active
                            ? 'bg-[#0A5C99] text-white shadow-sm'
                            : 'bg-[#0A2342]/5 dark:bg-white/8 text-[#1C3554] dark:text-[#D1E0F0]'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Appearance Switch */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-xs font-medium text-[#5C6F87] dark:text-[#9FB4CD]">
                  {t.nav.themeLabel}
                </span>
                <div className="flex items-center gap-1 p-1 rounded-xl bg-[#0A2342]/6 dark:bg-white/10">
                  <button
                    type="button"
                    onClick={() => setTheme('light')}
                    className={`flex items-center gap-1.5 px-3 min-h-[36px] rounded-lg text-xs font-medium transition-colors ${
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
                    className={`flex items-center gap-1.5 px-3 min-h-[36px] rounded-lg text-xs font-medium transition-colors ${
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
                className="w-full h-12 rounded-2xl bg-[#921B2D] hover:bg-[#A82236] text-white font-medium text-sm shadow-lg transition-colors"
              >
                {isAuthenticated ? 'Open New Personal or Business Account' : t.nav.openAccount}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
