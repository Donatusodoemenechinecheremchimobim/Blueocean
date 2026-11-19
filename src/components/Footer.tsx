import React from 'react';
import { Globe, Sun, Moon } from 'lucide-react';
import { BlueOceanLogo } from './BlueOceanLogo';
import { useApp } from '../context/AppContext';
import { SUPPORTED_LOCALES } from '../i18n/translations';

export const Footer: React.FC = () => {
  const { navigate, locale, setLocale, theme, setTheme, t } = useApp();

  return (
    <footer className="mt-24 pb-28 lg:pb-12 border-t border-[#0A2342]/10 dark:border-white/10 bg-white/55 dark:bg-[#041122]/65 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#0A2342]/10 dark:border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <button
              type="button"
              onClick={() => navigate('home')}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <BlueOceanLogo size={30} variant={theme === 'dark' ? 'light' : 'default'} />
              <span className="font-display text-lg font-semibold text-[#0A1D37] dark:text-white">
                BlueOcean Bank
              </span>
            </button>
            <p className="text-sm text-[#4A607A] dark:text-[#A9BED6] leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
            <div className="text-xs font-mono tabular-nums text-[#5C6F87] dark:text-[#8BA4C2]">
              SWIFT/BIC: BLOCGB2LXXX · Global IBAN &amp; Multi-Rail Clearing
            </div>
          </div>

          {/* Banking Divisions */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display text-sm font-semibold text-[#0A1D37] dark:text-white">
              {t.footer.bankingCol}
            </h3>
            <ul className="space-y-2 text-sm text-[#4A607A] dark:text-[#A9BED6]">
              <li>
                <button
                  type="button"
                  onClick={() => navigate('personal')}
                  className="hover:text-[#0A5C99] dark:hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.personal}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('business')}
                  className="hover:text-[#0A5C99] dark:hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.business}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('cards')}
                  className="hover:text-[#0A5C99] dark:hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.cards}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('loans')}
                  className="hover:text-[#0A5C99] dark:hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.loans}
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display text-sm font-semibold text-[#0A1D37] dark:text-white">
              {t.footer.institutionalCol}
            </h3>
            <ul className="space-y-2 text-sm text-[#4A607A] dark:text-[#A9BED6]">
              <li>
                <button
                  type="button"
                  onClick={() => navigate('wealth')}
                  className="hover:text-[#0A5C99] dark:hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.wealth}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('security')}
                  className="hover:text-[#0A5C99] dark:hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.security}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('about')}
                  className="hover:text-[#0A5C99] dark:hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('contact')}
                  className="hover:text-[#0A5C99] dark:hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('portal')}
                  className="hover:text-[#0A5C99] dark:hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.portal}
                </button>
              </li>
            </ul>
          </div>

          {/* Languages & Theme Quick Access */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-xs font-medium text-[#5C6F87] dark:text-[#96AFCB]">
              <Globe className="w-3.5 h-3.5" />
              <span>{t.nav.languageLabel}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {SUPPORTED_LOCALES.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLocale(item.code)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    locale === item.code
                      ? 'bg-[#0A5C99] text-white'
                      : 'bg-[#0A2342]/6 dark:bg-white/8 text-[#29415E] dark:text-[#C5D6E8] hover:bg-[#0A2342]/12 dark:hover:bg-white/14'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0A2342]/6 dark:bg-white/8 text-xs font-medium text-[#0A1D37] dark:text-white hover:bg-[#0A2342]/12 dark:hover:bg-white/14 transition-colors cursor-pointer"
              >
                {theme === 'light' ? (
                  <>
                    <Moon className="w-3.5 h-3.5 text-[#0A5C99]" />
                    <span>{t.nav.deepOcean}</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-3.5 h-3.5 text-[#7CC8F8]" />
                    <span>{t.nav.daylight}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* FDIC & Legal Notice */}
        <div className="pt-8 space-y-3 text-xs text-[#5C6F87] dark:text-[#8CA4BE] leading-relaxed">
          <p>{t.footer.fdicNotice}</p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2">
            <span>{t.footer.rights}</span>
            <span>London · Frankfurt · Singapore · New York · São Paulo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
