import React, { useEffect, useRef } from 'react';

interface CountUpProps {
  end: number;
  start?: number;
  durationMs?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  useGrouping?: boolean;
  locale?: string;
  className?: string;
}

const formatNumber = (
  value: number,
  decimals: number,
  useGrouping: boolean,
  locale: string,
  prefix: string,
  suffix: string
): string => {
  const formatted = new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping,
  }).format(value);
  return `${prefix}${formatted}${suffix}`;
};

export const CountUp: React.FC<CountUpProps> = ({
  end,
  start = 0,
  durationMs = 1700,
  decimals = 0,
  prefix = '',
  suffix = '',
  useGrouping = false,
  locale = 'en-US',
  className = '',
}) => {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const finalFormatted = formatNumber(end, decimals, useGrouping, locale, prefix, suffix);
    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || hasAnimatedRef.current) {
      el.textContent = finalFormatted;
      return;
    }

    let rafId = 0;

    const runAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;
      const startTime = performance.now();
      const delta = end - start;

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        // Smooth ease-out quintic/cubic blend for crisp institutional deceleration
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = start + delta * eased;

        if (spanRef.current) {
          spanRef.current.textContent = formatNumber(
            progress >= 1 ? end : current,
            decimals,
            useGrouping,
            locale,
            prefix,
            suffix
          );
        }

        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        }
      };

      rafId = requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === 'undefined') {
      runAnimation();
      return () => {
        if (rafId) cancelAnimationFrame(rafId);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.disconnect();
            runAnimation();
            break;
          }
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [end, start, durationMs, decimals, prefix, suffix, useGrouping, locale]);

  return (
    <span
      ref={spanRef}
      className={`tabular-nums ${className}`}
      aria-label={formatNumber(end, decimals, useGrouping, locale, prefix, suffix)}
    >
      {formatNumber(start, decimals, useGrouping, locale, prefix, suffix)}
    </span>
  );
};
