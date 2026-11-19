import React from 'react';

/**
 * Pure GPU-Composited 3D Kinetic Oceanic Background:
 * Uses hardware-accelerated CSS 3D perspective architectural planes and vector
 * oceanic contour waves with zero per-frame JS/canvas repaints.
 * This keeps backdrop-filter glassmorphism locked at 60–120fps on all devices
 * and guarantees instant smooth rendering even on slow/offline connections.
 */
export const KineticBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Trustworthy Luminous Titanium-Mist / Deep Ocean Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F6F9FC] via-[#EDF3F9] to-[#E2ECF6] dark:from-[#061529] dark:via-[#081E3A] dark:to-[#0A2546] transition-colors duration-500" />

      {/* Soft Static Atmospheric Radial Depth Pools (GPU cached, zero repaint) */}
      <div
        className="absolute -top-32 -left-24 w-[68vw] max-w-[820px] h-[68vw] max-h-[820px] rounded-full opacity-75 dark:opacity-55"
        style={{
          background:
            'radial-gradient(circle, rgba(14,114,182,0.16) 0%, rgba(164,198,230,0.10) 45%, transparent 72%)',
        }}
      />
      <div
        className="absolute top-[14%] -right-24 w-[52vw] max-w-[640px] h-[52vw] max-h-[640px] rounded-full opacity-65 dark:opacity-45"
        style={{
          background:
            'radial-gradient(circle, rgba(146,27,45,0.085) 0%, rgba(10,92,153,0.06) 45%, transparent 70%)',
        }}
      />

      {/* 3D Perspective Floating Titanium Architectural Planes (Pure GPU Compositor) */}
      <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-[46px] border border-[#0A5C99]/12 dark:border-white/10 bg-gradient-to-br from-white/55 via-[#D4E4F4]/25 to-transparent dark:from-[#124B7C]/25 dark:via-[#0A2B52]/15 dark:to-transparent animate-drift-plane-a" />

      <div className="absolute top-[44%] -left-28 w-[420px] h-[420px] rounded-[42px] border border-[#921B2D]/12 dark:border-[#B8253A]/18 bg-gradient-to-tr from-[#0A5C99]/10 via-white/30 to-transparent dark:from-[#921B2D]/14 dark:via-[#0C3563]/20 dark:to-transparent animate-drift-plane-b" />

      {/* Slow Drifting Vector Oceanic Wave Ribbons (100% GPU translate3d) */}
      <svg
        className="absolute top-[18%] -left-[6%] w-[112%] h-[360px] opacity-60 dark:opacity-40 animate-wave-ribbon"
        viewBox="0 0 1440 360"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 160C240 90 480 230 720 155C960 80 1200 215 1440 135"
          stroke="#0A5C99"
          strokeOpacity="0.18"
          strokeWidth="1.5"
        />
        <path
          d="M0 215C280 145 510 275 760 205C1010 135 1230 250 1440 185"
          stroke="#921B2D"
          strokeOpacity="0.14"
          strokeWidth="1.2"
        />
      </svg>

      <svg
        className="absolute bottom-[6%] -left-[6%] w-[112%] h-[300px] opacity-55 dark:opacity-35 animate-wave-ribbon-reverse"
        viewBox="0 0 1440 300"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 140C260 210 520 80 780 150C1040 220 1240 110 1440 165"
          stroke="#1376BA"
          strokeOpacity="0.18"
          strokeWidth="1.4"
        />
        <path
          d="M0 195C300 245 540 130 810 195C1080 260 1260 155 1440 210"
          stroke="#0A5C99"
          strokeOpacity="0.12"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};
