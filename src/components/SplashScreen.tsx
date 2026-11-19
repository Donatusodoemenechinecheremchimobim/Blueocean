import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BlueOceanLogo } from './BlueOceanLogo';
import { useApp } from '../context/AppContext';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const { t } = useApp();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReduced ? 450 : 1850;
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, duration);
    return () => window.clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="blueocean-splash"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: '-6%',
            transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
          }}
          onClick={handleDismiss}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center cursor-pointer overflow-hidden bg-gradient-to-br from-[#071D38] via-[#0B2B52] to-[#061830] text-white"
          role="status"
          aria-label="Loading BlueOcean Bank"
        >
          {/* Ambient oceanic & titanium light halo */}
          <div
            className="absolute w-[560px] h-[560px] rounded-full opacity-35 blur-3xl pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(25,130,196,0.55) 0%, rgba(146,27,45,0.22) 48%, rgba(7,29,56,0) 72%)',
            }}
          />

          {/* Centered Glassmorphic Crest Showcase */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center px-10 py-9 rounded-3xl glass-oceanic overflow-hidden"
          >
            {/* Metallic titanium sweep */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer-sweep" />
            </div>

            <BlueOceanLogo size={84} animated variant="light" />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-center"
            >
              <div className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Blue<span className="text-[#8BC8F5]">Ocean</span>
              </div>
              <p className="mt-1.5 text-xs sm:text-sm text-[#BFD3E8] tracking-wide">
                {t.splash.subtitle}
              </p>
            </motion.div>

            {/* Precision Loading Progress Hairline */}
            <div className="mt-7 w-48 h-[2px] rounded-full bg-white/15 overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.55, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'left center' }}
                className="h-full w-full bg-gradient-to-r from-[#67C2F5] via-white to-[#B8253A]"
              />
            </div>
          </motion.div>

          <button
            type="button"
            onClick={handleDismiss}
            className="mt-8 text-xs font-medium text-[#A9C2DC] hover:text-white transition-colors px-4 py-2 min-h-[44px]"
          >
            {t.splash.skip}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
