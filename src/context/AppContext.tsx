import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { Locale, SUPPORTED_LOCALES, TRANSLATIONS, TranslationDictionary } from '../i18n/translations';

export type PageRoute =
  | 'home'
  | 'personal'
  | 'business'
  | 'cards'
  | 'loans'
  | 'wealth'
  | 'security'
  | 'about'
  | 'contact'
  | 'portal';

export type ThemeMode = 'light' | 'dark';

export interface ApplicationModalState {
  open: boolean;
  mode: 'account' | 'advisor';
  defaultProduct: string;
  defaultAmount: string;
}

export interface ToastItem {
  id: string;
  message: string;
  tone: 'info' | 'success' | 'alert';
}

interface AppContextValue {
  route: PageRoute;
  navigate: (next: PageRoute) => void;
  locale: Locale;
  setLocale: (loc: Locale) => void;
  t: TranslationDictionary;
  theme: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
  formatCurrency: (amount: number, decimals?: number) => string;
  formatDate: (isoDate: string) => string;
  modal: ApplicationModalState;
  openModal: (opts?: Partial<Omit<ApplicationModalState, 'open'>>) => void;
  closeModal: () => void;
  toasts: ToastItem[];
  pushToast: (message: string, tone?: ToastItem['tone']) => void;
  dismissToast: (id: string) => void;
}

const VALID_ROUTES: PageRoute[] = [
  'home',
  'personal',
  'business',
  'cards',
  'loans',
  'wealth',
  'security',
  'about',
  'contact',
  'portal',
];

const LOCALE_STORAGE_KEY = 'blueocean_locale_v1';
const THEME_STORAGE_KEY = 'blueocean_theme_v1';

function readRouteFromHash(): PageRoute {
  if (typeof window === 'undefined') return 'home';
  const raw = window.location.hash.replace(/^#\/?/, '').toLowerCase() as PageRoute;
  return VALID_ROUTES.includes(raw) ? raw : 'home';
}

const AppContext = createContext<AppContextValue | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [route, setRoute] = useState<PageRoute>(readRouteFromHash);

  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
      if (stored && SUPPORTED_LOCALES.some((l) => l.code === stored)) {
        return stored;
      }
    } catch {
      // ignore storage errors
    }
    return 'en';
  });

  // Default to trustworthy Luminous Titanium Daylight ('light')
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored === 'dark' || stored === 'light') return stored;
    } catch {
      // ignore storage errors
    }
    return 'light';
  });

  const [modal, setModal] = useState<ApplicationModalState>({
    open: false,
    mode: 'account',
    defaultProduct: 'Premier Checking + High-Yield Savings',
    defaultAmount: '25000',
  });

  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // ignore
    }
  }, [locale]);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(readRouteFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((next: PageRoute) => {
    setRoute(next);
    if (typeof window !== 'undefined') {
      const targetHash = next === 'home' ? '#/' : `#/${next}`;
      if (window.location.hash !== targetHash) {
        window.history.pushState(null, '', targetHash);
      }
    }
  }, []);

  const setLocale = useCallback((loc: Locale) => {
    setLocaleState(loc);
  }, []);

  const setTheme = useCallback((mode: ThemeMode) => {
    setThemeState(mode);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const intlLocale = useMemo(
    () => SUPPORTED_LOCALES.find((l) => l.code === locale)?.intlLocale ?? 'en-US',
    [locale]
  );

  const formatCurrency = useCallback(
    (amount: number, decimals = 2) => {
      try {
        return new Intl.NumberFormat(intlLocale, {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }).format(amount);
      } catch {
        return `$${amount.toFixed(decimals)}`;
      }
    },
    [intlLocale]
  );

  const formatDate = useCallback(
    (isoDate: string) => {
      try {
        const parsed = new Date(isoDate + 'T12:00:00');
        return new Intl.DateTimeFormat(intlLocale, {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }).format(parsed);
      } catch {
        return isoDate;
      }
    },
    [intlLocale]
  );

  const openModal = useCallback((opts?: Partial<Omit<ApplicationModalState, 'open'>>) => {
    setModal((prev) => ({
      open: true,
      mode: opts?.mode ?? 'account',
      defaultProduct: opts?.defaultProduct ?? prev.defaultProduct,
      defaultAmount: opts?.defaultAmount ?? prev.defaultAmount,
    }));
  }, []);

  const closeModal = useCallback(() => {
    setModal((prev) => ({ ...prev, open: false }));
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const pushToast = useCallback((message: string, tone: ToastItem['tone'] = 'info') => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    setToasts((prev) => [...prev.slice(-2), { id, message, tone }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((item) => item.id !== id));
    }, 4200);
  }, []);

  const value = useMemo<AppContextValue>(
    () => ({
      route,
      navigate,
      locale,
      setLocale,
      t: TRANSLATIONS[locale],
      theme,
      setTheme,
      toggleTheme,
      formatCurrency,
      formatDate,
      modal,
      openModal,
      closeModal,
      toasts,
      pushToast,
      dismissToast,
    }),
    [
      route,
      navigate,
      locale,
      setLocale,
      theme,
      setTheme,
      toggleTheme,
      formatCurrency,
      formatDate,
      modal,
      openModal,
      closeModal,
      toasts,
      pushToast,
      dismissToast,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
