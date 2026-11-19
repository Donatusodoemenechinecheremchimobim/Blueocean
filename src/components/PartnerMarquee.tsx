import React from 'react';

interface PartnerItem {
  name: string;
  role: string;
  mark: React.ReactNode;
}

const PARTNERS: PartnerItem[] = [
  {
    name: 'ClearRail ACH',
    role: 'Domestic Settlement',
    mark: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 8H16L20 12L16 16H4L8 12L4 8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'HarborGrid Clearing',
    role: 'FDIC Sweep Network',
    mark: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M13.5 16.75H20" stroke="#921B2D" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'NordicFX Desk',
    role: 'Multi-Currency Liquidity',
    mark: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4.5 12H19.5M12 4C14.5 7 14.5 17 12 20" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Aegis Passkey',
    role: 'FIDO2 Auth Infrastructure',
    mark: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L19 6.5V12.5C19 16.8 15.8 20.1 12 21C8.2 20.1 5 16.8 5 12.5V6.5L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="12" cy="11.5" r="2.2" fill="#921B2D" />
      </svg>
    ),
  },
  {
    name: 'Veridian Custody',
    role: 'Treasury Safekeeping',
    mark: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 6L12 19L20 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 6L12 12L15.5 6" stroke="#0A5C99" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Solstice Payroll',
    role: 'Direct Deposit Rail',
    mark: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 3V5.5M12 18.5V21M3 12H5.5M18.5 12H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Kestrel Wire',
    role: 'Cross-Border SWIFT',
    mark: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 17L11 10L15 14L20 7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5 7H20V11.5" stroke="#921B2D" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Meridian Ledger',
    role: 'Audit & Reconciliation',
    mark: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5 18V8L12 13L19 8V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Allpoint® ATM',
    role: '55,000+ Fee-Free ATMs',
    mark: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 4L20 19H4L12 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="12" cy="14" r="1.8" fill="#0A5C99" />
      </svg>
    ),
  },
];

interface PartnerMarqueeProps {
  heading?: string;
}

/**
 * Pure GPU-composited infinite rotating partner marquee featuring realistic
 * mid-market banking infrastructure, clearing, FX, custody, and payroll partners.
 */
export const PartnerMarquee: React.FC<PartnerMarqueeProps> = ({
  heading = 'Connected across independent clearing rails, custody desks & fintech infrastructure',
}) => {
  const track = [...PARTNERS, ...PARTNERS];

  return (
    <div className="space-y-4">
      <p className="text-center text-xs sm:text-sm font-medium text-[#3F5673] dark:text-[#A9C2DC]">
        {heading}
      </p>

      <div className="marquee-host relative overflow-hidden rounded-2xl glass-panel py-4">
        {/* Soft left/right fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-[#EEF4FB]/90 dark:from-[#071A32]/90 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-[#EEF4FB]/90 dark:from-[#071A32]/90 to-transparent" />

        <div className="flex w-max animate-marquee gap-4 px-2">
          {track.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/55 dark:bg-white/6 border border-[#0A2342]/8 dark:border-white/10 shrink-0"
            >
              <div className="text-[#0A5C99] dark:text-[#7CC8F8] shrink-0">
                {partner.mark}
              </div>
              <div className="leading-tight">
                <div className="font-display text-sm font-semibold text-[#0A1D37] dark:text-white whitespace-nowrap">
                  {partner.name}
                </div>
                <div className="text-[11px] text-[#5C6F87] dark:text-[#96AFCB] whitespace-nowrap">
                  {partner.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
