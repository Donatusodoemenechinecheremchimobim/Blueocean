import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ToastStack: React.FC = () => {
  const { toasts, dismissToast } = useApp();

  return (
    <div
      className="fixed top-20 right-4 sm:right-6 z-50 flex flex-col gap-2.5 w-[min(360px,calc(100vw-32px))] pointer-events-none"
      aria-live="polite"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 24, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto rounded-2xl glass-chrome px-4 py-3.5 flex items-start gap-3 shadow-xl"
          >
            {toast.tone === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-[#0A5C99] dark:text-[#6CC4F6] shrink-0 mt-0.5" />
            ) : toast.tone === 'alert' ? (
              <AlertCircle className="w-4 h-4 text-[#921B2D] dark:text-[#F06C7F] shrink-0 mt-0.5" />
            ) : (
              <Info className="w-4 h-4 text-[#0A5C99] dark:text-[#6CC4F6] shrink-0 mt-0.5" />
            )}
            <p className="text-xs sm:text-sm font-medium text-[#0A1D37] dark:text-white flex-1">
              {toast.message}
            </p>
            <button
              type="button"
              onClick={() => dismissToast(toast.id)}
              className="text-[#5C6F87] hover:text-[#0A1D37] dark:hover:text-white cursor-pointer"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
