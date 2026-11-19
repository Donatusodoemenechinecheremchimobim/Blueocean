import React from 'react';

const BG_OCEAN_PHOTO = '/src/assets/images/hero_oceanic_architecture_1795099364980.jpg';

/**
 * Full-bleed Photographic Oceanic Architecture + 3D Kinetic Background:
 * Replaces flat white backgrounds with a luminous, subtly breathing architectural
 * oceanic photograph veiled for crisp WCAG AA readability in both Daylight and
 * Deep Ocean themes—giving every frosted glassmorphism card authentic depth
 * and light refraction while staying locked at 60fps.
 */
export const KineticBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Slowly Breathing Full-Bleed Architectural Oceanic Background Photograph */}
      <img
        src={BG_OCEAN_PHOTO}
        alt=""
        decoding="async"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover animate-bg-breath opacity-45 dark:opacity-35"
      />

      {/* Luminous Titanium-Oceanic Atmospheric Veil (keeps Daylight trustworthy & readable, Deep Ocean rich) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EDF4FB]/82 via-[#E2EDF8]/72 to-[#D4E4F4]/78 dark:from-[#041224]/86 dark:via-[#071D38]/78 dark:to-[#0A274A]/84 transition-colors duration-500" />

      {/* Subtle Oceanic Blue & Dark Crimson Depth Pools */}
      <div
        className="absolute -top-28 -left-24 w-[65vw] max-w-[820px] h-[65vw] max-h-[820px] rounded-full opacity-80 dark:opacity-60"
        style={{
          background:
            'radial-gradient(circle, rgba(14,114,182,0.22) 0%, rgba(164,198,230,0.12) 48%, transparent 72%)',
        }}
      />
      <div
        className="absolute top-[18%] -right-24 w-[52vw] max-w-[660px] h-[52vw] max-h-[660px] rounded-full opacity-75 dark:opacity-55"
        style={{
          background:
            'radial-gradient(circle, rgba(146,27,45,0.12) 0%, rgba(10,92,153,0.08) 45%, transparent 70%)',
        }}
      />

      {/* 3D Perspective Floating Titanium Glass Planes (Pure GPU Compositor) */}
      <div className="absolute -top-20 -right-24 w-[480px] h-[480px] rounded-[46px] border border-white/55 dark:border-white/14 bg-gradient-to-br from-white/35 via-[#C4DCF2]/20 to-transparent dark:from-[#124B7C]/25 dark:via-[#0A2B52]/15 dark:to-transparent animate-drift-plane-a" />

      <div className="absolute top-[46%] -left-28 w-[420px] h-[420px] rounded-[42px] border border-[#921B2D]/16 dark:border-[#B8253A]/20 bg-gradient-to-tr from-[#0A5C99]/14 via-white/25 to-transparent dark:from-[#921B2D]/16 dark:via-[#0C3563]/20 dark:to-transparent animate-drift-plane-b" />

      {/* Flowing Oceanic Wave Contour Ribbons */}
      <svg
        className="absolute top-[22%] -left-[6%] w-[112%] h-[340px] opacity-65 dark:opacity-45 animate-wave-ribbon"
        viewBox="0 0 1440 340"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 150C240 85 480 220 720 145C960 70 1200 205 1440 125"
          stroke="#0A5C99"
          strokeOpacity="0.24"
          strokeWidth="1.5"
        />
        <path
          d="M0 205C280 135 510 265 760 195C1010 125 1230 240 1440 175"
          stroke="#921B2D"
          strokeOpacity="0.18"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
};
