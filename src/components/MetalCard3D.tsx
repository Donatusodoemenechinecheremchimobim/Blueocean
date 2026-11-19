import React, { useRef, useEffect } from 'react';
import { Wifi, Snowflake } from 'lucide-react';
import { BlueOceanLogo } from './BlueOceanLogo';
import { CardFinish } from '../context/BankingContext';

interface MetalCard3DProps {
  finish: CardFinish;
  title: string;
  holder?: string;
  maskedNumber?: string;
  expiry?: string;
  network?: string;
  frozen?: boolean;
  compact?: boolean;
}

const FINISH_STYLES: Record<
  CardFinish,
  {
    bg: string;
    border: string;
    text: string;
    subtext: string;
    chip: string;
    logoVariant: 'default' | 'light';
    accentLine: string;
  }
> = {
  titanium: {
    bg: 'bg-gradient-to-br from-[#F3F6FA] via-[#CFD9E5] to-[#98ABC0]',
    border: 'border-white/75',
    text: 'text-[#0A1D37]',
    subtext: 'text-[#2D4463]',
    chip: 'from-[#E2E8F0] via-[#B4C2D2] to-[#8798AD]',
    logoVariant: 'default',
    accentLine: 'bg-[#921B2D]',
  },
  oceanic: {
    bg: 'bg-gradient-to-br from-[#0F5E9C] via-[#09325C] to-[#051A34]',
    border: 'border-[#7AC4F5]/35',
    text: 'text-white',
    subtext: 'text-[#BBD8F2]',
    chip: 'from-[#E8EEF5] via-[#B9CADC] to-[#7A94B0]',
    logoVariant: 'light',
    accentLine: 'bg-[#56B8F0]',
  },
  crimson: {
    bg: 'bg-gradient-to-br from-[#9C1F32] via-[#6C1120] to-[#360811]',
    border: 'border-[#F2B2BD]/30',
    text: 'text-white',
    subtext: 'text-[#F0CCD2]',
    chip: 'from-[#F4E6C8] via-[#D8BC88] to-[#A68952]',
    logoVariant: 'light',
    accentLine: 'bg-[#E5EBF3]',
  },
};

export const MetalCard3D: React.FC<MetalCard3DProps> = ({
  finish,
  title,
  holder = 'ALEXANDRA MERCER',
  maskedNumber = '4532  ••••  ••••  4821',
  expiry = '09/29',
  network = 'VISA INFINITE',
  frozen = false,
  compact = false,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const glareRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const style = FINISH_STYLES[finish];

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * 13;
    const ry = (px - 0.5) * 16;
    const gx = px * 100;
    const gy = py * 100;

    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (cardRef.current) {
        cardRef.current.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      }
      if (glareRef.current) {
        glareRef.current.style.background = `radial-gradient(circle at ${gx.toFixed(1)}% ${gy.toFixed(1)}%, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.04) 42%, transparent 72%)`;
      }
    });
  };

  const resetTilt = () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    if (cardRef.current) {
      cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
    if (glareRef.current) {
      glareRef.current.style.background =
        'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.04) 42%, transparent 72%)';
    }
  };

  return (
    <div
      className="perspective-1200 w-full max-w-[420px] mx-auto select-none"
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
    >
      <div
        ref={cardRef}
        className={`relative aspect-[1.586/1] w-full rounded-[22px] border ${style.border} ${style.bg} brushed-titanium overflow-hidden shadow-[0_24px_54px_-18px_rgba(7,28,54,0.42)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] preserve-3d will-change-transform`}
      >
        {/* Dynamic specular glare */}
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 opacity-65"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.04) 42%, transparent 72%)',
          }}
        />

        {/* Precision Accent Hairline */}
        <div className={`absolute top-0 left-7 w-12 h-[3px] rounded-b-full ${style.accentLine}`} />

        {/* Card Content */}
        <div
          className={`relative z-10 h-full flex flex-col justify-between ${
            compact ? 'p-5' : 'p-6 sm:p-7'
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <BlueOceanLogo size={compact ? 26 : 30} variant={style.logoVariant} />
              <div>
                <div className={`font-display text-sm sm:text-base font-semibold tracking-tight ${style.text}`}>
                  BlueOcean
                </div>
                <div className={`text-[11px] font-medium ${style.subtext}`}>{title}</div>
              </div>
            </div>
            <Wifi className={`w-4 h-4 rotate-90 opacity-75 ${style.text}`} />
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div
                className={`w-11 h-8 rounded-md bg-gradient-to-br ${style.chip} border border-black/15 shadow-inner relative overflow-hidden`}
              >
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black/15" />
                <div className="absolute inset-y-0 left-1/3 w-[1px] bg-black/15" />
                <div className="absolute inset-y-0 right-1/3 w-[1px] bg-black/15" />
              </div>
            </div>
            <div
              className={`font-mono tabular-nums tracking-[0.14em] ${
                compact ? 'text-sm sm:text-base' : 'text-base sm:text-lg'
              } font-medium ${style.text}`}
            >
              {maskedNumber}
            </div>
          </div>

          <div className="flex items-end justify-between gap-4">
            <div className="min-w-0">
              <div className={`text-[10px] tracking-wider opacity-75 ${style.subtext}`}>CARDHOLDER</div>
              <div className={`text-xs sm:text-sm font-medium tracking-wide truncate ${style.text}`}>
                {holder}
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className={`text-[10px] tracking-wider opacity-75 ${style.subtext}`}>VALID THRU</div>
              <div className={`font-mono tabular-nums text-xs sm:text-sm font-medium ${style.text}`}>
                {expiry}
              </div>
            </div>
            <div className={`font-display text-xs font-semibold tracking-wider shrink-0 ${style.text}`}>
              {network}
            </div>
          </div>
        </div>

        {/* Frozen Frost State Overlay */}
        {frozen && (
          <div className="absolute inset-0 z-20 bg-[#0A2546]/60 backdrop-blur-md flex flex-col items-center justify-center text-white gap-2">
            <Snowflake className="w-7 h-7 text-[#8FD1FA]" />
            <span className="font-display text-sm font-semibold tracking-wide">Card Frozen</span>
          </div>
        )}
      </div>
    </div>
  );
};
