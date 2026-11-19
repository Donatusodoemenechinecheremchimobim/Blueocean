import React from 'react';
import { motion } from 'motion/react';

interface BlueOceanLogoProps {
  size?: number;
  animated?: boolean;
  variant?: 'default' | 'light' | 'monochrome';
  className?: string;
}

/**
 * Custom BlueOcean Bank emblem:
 * Machined titanium hexagonal-vault frame enclosing dual converging oceanic wave crests
 * and a precision dark-crimson meridian anchor.
 */
export const BlueOceanLogo: React.FC<BlueOceanLogoProps> = ({
  size = 34,
  animated = false,
  variant = 'default',
  className = '',
}) => {
  const idSuffix = React.useId().replace(/:/g, '');
  const outerStroke =
    variant === 'light'
      ? `url(#bo-titanium-light-${idSuffix})`
      : variant === 'monochrome'
        ? 'currentColor'
        : `url(#bo-titanium-${idSuffix})`;

  const waveFill =
    variant === 'monochrome'
      ? 'currentColor'
      : `url(#bo-ocean-${idSuffix})`;

  const crimsonAccent =
    variant === 'monochrome' ? 'currentColor' : `url(#bo-crimson-${idSuffix})`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={`bo-titanium-${idSuffix}`}
          x1="8"
          y1="6"
          x2="56"
          y2="58"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#8EA3BA" />
          <stop offset="45%" stopColor="#0A4F85" />
          <stop offset="100%" stopColor="#5D748F" />
        </linearGradient>

        <linearGradient
          id={`bo-titanium-light-${idSuffix}`}
          x1="8"
          y1="6"
          x2="56"
          y2="58"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#B8CEE4" />
          <stop offset="100%" stopColor="#E4ECF5" />
        </linearGradient>

        <linearGradient
          id={`bo-ocean-${idSuffix}`}
          x1="12"
          y1="20"
          x2="54"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#0A5C99" />
          <stop offset="55%" stopColor="#1B86CB" />
          <stop offset="100%" stopColor="#66C2F5" />
        </linearGradient>

        <linearGradient
          id={`bo-crimson-${idSuffix}`}
          x1="26"
          y1="14"
          x2="38"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#B8253A" />
          <stop offset="100%" stopColor="#7C1524" />
        </linearGradient>
      </defs>

      {/* Outer Architectural Vault Crest */}
      <motion.path
        d="M32 5L55 17.8V46.2L32 59L9 46.2V17.8L32 5Z"
        stroke={outerStroke}
        strokeWidth="2.8"
        strokeLinejoin="round"
        initial={animated ? { pathLength: 0, opacity: 0.2 } : false}
        animate={animated ? { pathLength: 1, opacity: 1 } : undefined}
        transition={
          animated
            ? { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
            : undefined
        }
      />

      {/* Inner Precision Specular Bevel */}
      <motion.path
        d="M32 10.5L50 20.5V43.5L32 53.5L14 43.5V20.5L32 10.5Z"
        stroke={outerStroke}
        strokeOpacity="0.32"
        strokeWidth="1.2"
        strokeLinejoin="round"
        initial={animated ? { pathLength: 0, opacity: 0 } : false}
        animate={animated ? { pathLength: 1, opacity: 0.32 } : undefined}
        transition={
          animated
            ? { duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }
            : undefined
        }
      />

      {/* Upper Oceanic Horizon Wave Ribbon */}
      <motion.path
        d="M16.5 31.5C21.2 26.2 27.6 25.4 33.4 29.2C38.8 32.7 43.6 32.2 47.8 28.4"
        stroke={waveFill}
        strokeWidth="3.6"
        strokeLinecap="round"
        initial={animated ? { pathLength: 0, opacity: 0 } : false}
        animate={animated ? { pathLength: 1, opacity: 1 } : undefined}
        transition={
          animated
            ? { duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }
            : undefined
        }
      />

      {/* Lower Deep Current Ribbon */}
      <motion.path
        d="M16.5 39.2C21.8 34.4 27.9 33.8 33.6 37.5C38.6 40.7 43.4 40.3 47.6 36.8"
        stroke={waveFill}
        strokeOpacity="0.82"
        strokeWidth="3.1"
        strokeLinecap="round"
        initial={animated ? { pathLength: 0, opacity: 0 } : false}
        animate={animated ? { pathLength: 1, opacity: 0.85 } : undefined}
        transition={
          animated
            ? { duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }
            : undefined
        }
      />

      {/* Dark Crimson Meridian Vault Crown */}
      <motion.path
        d="M32 16.5L36.8 21.3L32 26.1L27.2 21.3L32 16.5Z"
        fill={crimsonAccent}
        initial={animated ? { scale: 0, opacity: 0 } : false}
        animate={animated ? { scale: 1, opacity: 1 } : undefined}
        style={{ transformOrigin: '32px 21.3px' }}
        transition={
          animated
            ? { duration: 0.45, delay: 0.72, ease: [0.16, 1, 0.3, 1] }
            : undefined
        }
      />
    </svg>
  );
};
