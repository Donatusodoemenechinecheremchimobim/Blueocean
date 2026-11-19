import React, { useState, useRef, useEffect } from 'react';
import { Shield } from 'lucide-react';

interface MediaFrameProps {
  src: string;
  alt: string;
  aspectClass?: string;
  caption?: string;
  className?: string;
  priority?: boolean;
}

/**
 * Ultra-smooth editorial image container:
 * Replaces heavy per-frame JS scroll-parallax listeners with a calm GPU-composited
 * IntersectionObserver zoom-settle reveal + subtle hover lift and async image decoding
 * so scrolling stays locked at 60fps even on slow internet or mobile CPUs.
 */
export const MediaFrame: React.FC<MediaFrameProps> = ({
  src,
  alt,
  aspectClass = 'aspect-[16/9]',
  caption,
  className = '',
  priority = false,
}) => {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(priority);
  const frameRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (priority) {
      setInView(true);
      return;
    }
    const el = frameRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [priority]);

  return (
    <div
      ref={frameRef}
      className={`group relative overflow-hidden rounded-2xl border border-[#0A2342]/12 dark:border-white/14 bg-gradient-to-br from-[#0B2A50] via-[#0E3F72] to-[#081F3D] shadow-[0_20px_50px_-20px_rgba(7,28,54,0.28)] ${aspectClass} ${className}`}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`w-full h-full object-cover transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] ${
            inView && loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.05]'
          }`}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#0A2D57] via-[#0E4A80] to-[#071D38] text-white">
          <Shield className="w-10 h-10 text-[#8ECBF6] mb-3" />
          <span className="font-display text-base font-medium">{alt}</span>
        </div>
      )}

      {caption && (
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t from-[#041021]/85 via-[#041021]/45 to-transparent">
          <p className="text-sm font-medium text-white/95 max-w-xl">{caption}</p>
        </div>
      )}
    </div>
  );
};
