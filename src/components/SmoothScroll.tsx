import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useApp } from '../context/AppContext';

/**
 * Silky-smooth locally bundled Lenis inertia scroll engine + zero-re-render
 * GPU scroll progress bar. Works 100% offline/on slow connections, respects
 * prefers-reduced-motion, and resets cleanly on page transitions.
 */
export const SmoothScroll: React.FC = () => {
  const { route } = useApp();
  const lenisRef = useRef<Lenis | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 0.92,
      smoothWheel: true,
      syncTouch: false,
      autoRaf: false,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ({ progress }: { progress: number }) => {
      if (progressBarRef.current) {
        const clamped = Math.max(0, Math.min(1, progress || 0));
        progressBarRef.current.style.transform = `scaleX(${clamped.toFixed(4)})`;
      }
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Reset scroll cleanly on route change without fighting page transitions
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    if (progressBarRef.current) {
      progressBarRef.current.style.transform = 'scaleX(0)';
    }
  }, [route]);

  return (
    <div
      className="fixed top-0 inset-x-0 h-[2.5px] z-50 pointer-events-none"
      aria-hidden="true"
    >
      <div
        ref={progressBarRef}
        className="h-full w-full origin-left bg-gradient-to-r from-[#0A5C99] via-[#4BB5F0] to-[#921B2D] will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
};
