import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoShowcaseProps {
  src: string;
  poster: string;
  alt: string;
  className?: string;
}

/**
 * Hardware-accelerated brand video frame:
 * Shows instant architectural poster while loading on slow internet,
 * loops silently by default for zero-friction autoplay, and provides
 * accessible Play/Pause and Audio controls.
 */
export const VideoShowcase: React.FC<VideoShowcaseProps> = ({
  src,
  poster,
  alt,
  className = '',
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [failed, setFailed] = useState(false);

  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play().catch(() => {});
      setPlaying(true);
    } else {
      vid.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setMuted(vid.muted);
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[#0A2342]/14 dark:border-white/15 bg-[#061830] shadow-[0_24px_60px_-20px_rgba(7,28,54,0.42)] ${className}`}
    >
      {!failed ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={alt}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setFailed(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src={poster}
          alt={alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      )}

      {/* Subtle bottom scrim for controls legibility */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#041021]/70 via-[#041021]/20 to-transparent" />

      {/* Clean Play/Pause & Sound Controls */}
      {!failed && (
        <div className="absolute bottom-3.5 right-3.5 z-20 flex items-center gap-2">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? 'Pause brand film' : 'Play brand film'}
            className="w-10 h-10 rounded-xl bg-[#071C36]/75 hover:bg-[#0B2A50]/90 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer"
          >
            {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? 'Unmute brand film' : 'Mute brand film'}
            className="w-10 h-10 rounded-xl bg-[#071C36]/75 hover:bg-[#0B2A50]/90 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      )}
    </div>
  );
};
