import React, { useRef } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'oceanic';
  className?: string;
  interactive?: boolean;
  onClick?: () => void;
}

/**
 * Zero-re-render 21st.dev-inspired frosted glassmorphic card:
 * Updates cursor spotlight via CSS custom properties directly on the DOM node
 * so pointer motion never triggers React reconciliation or scroll stutter.
 */
export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'default',
  className = '',
  interactive = false,
  onClick,
}) => {
  const hostRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = hostRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  const surfaceClass = variant === 'oceanic' ? 'glass-oceanic text-white' : 'glass-panel';

  return (
    <div
      ref={hostRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`glass-spotlight-host relative rounded-2xl overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${surfaceClass} ${
        interactive
          ? 'cursor-pointer hover:-translate-y-1 active:scale-[0.99]'
          : ''
      } ${className}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${
          variant === 'oceanic' ? 'spotlight-overlay-oceanic' : 'spotlight-overlay'
        }`}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};
