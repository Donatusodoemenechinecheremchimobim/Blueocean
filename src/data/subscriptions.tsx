import React from 'react';
import {
  siNetflix,
  siApple,
  siYoutube,
  siSpotify,
  siHbo,
  siParamountplus,
  siAudible,
  siTwitch,
  siGoogle,
  siDiscord,
  siNotion,
  siFigma,
  siGithub,
  siZoom,
  siUber,
  siDropbox,
} from 'simple-icons';

export type SubscriptionCategory = 'streaming' | 'software' | 'lifestyle';

export interface SubscriptionService {
  id: string;
  name: string;
  plan: string;
  price: number;
  category: SubscriptionCategory;
  categoryLabel: string;
  brandColor: string;
  renderLogo: (size?: number) => React.ReactNode;
}

const renderSimpleIcon = (
  icon: { path: string; title: string },
  color: string,
  size = 22,
  adaptiveMonochrome = false
) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-label={icon.title}
    className={adaptiveMonochrome ? 'text-[#0A1D37] dark:text-white' : undefined}
    style={adaptiveMonochrome ? undefined : { color }}
  >
    <path d={icon.path} />
  </svg>
);

export const US_SUBSCRIPTIONS: SubscriptionService[] = [
  {
    id: 'netflix',
    name: 'Netflix',
    plan: 'Standard Monthly',
    price: 15.49,
    category: 'streaming',
    categoryLabel: 'Streaming & Media',
    brandColor: '#E50914',
    renderLogo: (size = 22) => renderSimpleIcon(siNetflix, '#E50914', size),
  },
  {
    id: 'amazon-prime',
    name: 'Amazon Prime',
    plan: 'Prime Membership',
    price: 14.99,
    category: 'lifestyle',
    categoryLabel: 'Shopping & Cloud',
    brandColor: '#FF9900',
    renderLogo: (size = 22) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" role="img" aria-label="Amazon Prime">
        <path
          d="M14.3 13.7c-.2-.2-.5-.5-.5-1.1V8.4c0-1.6.1-3-1.1-4.1-.9-.8-2.3-1.1-3.4-1.1-2.1 0-4.4.8-4.9 3.4-.1.3.2.5.4.5l2.3.3c.2 0 .4-.2.4-.4.2-1 .9-1.4 1.8-1.4.5 0 1 .2 1.3.6.3.5.3 1.1.3 1.6v.3c-1.3.2-3 .3-4.2.8-1.4.6-2.4 1.7-2.4 3.4 0 2.1 1.3 3.2 3.1 3.2 1.5 0 2.3-.4 3.5-1.5.4.6.5.8 1.2 1.4.2.1.4.1.6 0 .5-.4 1.3-1.1 1.7-1.5.2-.1.1-.4-.1-.2zm-3.4-1.8c0 .9 0 1.6-.4 2.3-.4.6-.9 1-1.6 1-.9 0-1.4-.7-1.4-1.7 0-2 1.8-2.3 3.4-2.3v.7z"
          className="fill-[#0A1D37] dark:fill-white"
        />
        <path
          d="M21.1 17.6c-2.4 1.8-5.9 2.7-8.9 2.7-4.2 0-8-1.6-10.9-4.1-.2-.2 0-.5.2-.3 3.1 1.8 6.9 2.9 10.9 2.9 2.7 0 5.6-.6 8.3-1.7.4-.2.8.3.4.5z"
          fill="#FF9900"
        />
        <path
          d="M22.1 16.5c-.3-.4-2-.2-2.8-.1-.2 0-.3-.2-.1-.3 1.4-1 3.6-.7 3.9-.4.3.3-.1 2.6-1.4 3.7-.2.2-.4.1-.3-.1.3-.7.9-2.4.7-2.8z"
          fill="#FF9900"
        />
      </svg>
    ),
  },
  {
    id: 'apple-icloud',
    name: 'Apple / iCloud+',
    plan: '2TB Cloud & Media',
    price: 9.99,
    category: 'lifestyle',
    categoryLabel: 'Shopping & Cloud',
    brandColor: '#111111',
    renderLogo: (size = 22) => renderSimpleIcon(siApple, '#000000', size, true),
  },
  {
    id: 'youtube-premium',
    name: 'YouTube Premium',
    plan: 'Ad-Free + Music',
    price: 13.99,
    category: 'streaming',
    categoryLabel: 'Streaming & Media',
    brandColor: '#FF0000',
    renderLogo: (size = 22) => renderSimpleIcon(siYoutube, '#FF0000', size),
  },
  {
    id: 'chatgpt-plus',
    name: 'ChatGPT Plus',
    plan: 'OpenAI Monthly',
    price: 20.0,
    category: 'software',
    categoryLabel: 'AI & Software',
    brandColor: '#10A37F',
    renderLogo: (size = 22) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#10A37F" role="img" aria-label="ChatGPT OpenAI">
        <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9 5.98 5.98 0 0 0 4.5 2.01 6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.73-7.07zm-9.02 12.6a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.8.8 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.5zm-9.66-4.13a4.47 4.47 0 0 1-.54-3.01l.14.09 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06l-4.84 2.79a4.5 4.5 0 0 1-6.13-1.65zM2.34 7.9a4.49 4.49 0 0 1 2.37-1.97V11.6a.77.77 0 0 0 .39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0l-4.83-2.79A4.5 4.5 0 0 1 2.34 7.9zm16.6 3.86-5.84-3.37 2.02-1.16a.08.08 0 0 1 .07 0l4.83 2.79a4.5 4.5 0 0 1-.68 8.1v-5.68a.79.79 0 0 0-.4-.68zm2.01-3.02-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.13-2.02-1.16a.08.08 0 0 1-.04-.06V6.07a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.78 2.76a.79.79 0 0 0-.39.68l-.01 6.73zm1.1-2.37 2.6-1.5 2.6 1.5v3l-2.6 1.5-2.6-1.5v-3z" />
      </svg>
    ),
  },
  {
    id: 'spotify',
    name: 'Spotify',
    plan: 'Individual Premium',
    price: 11.99,
    category: 'streaming',
    categoryLabel: 'Streaming & Media',
    brandColor: '#1ED760',
    renderLogo: (size = 22) => renderSimpleIcon(siSpotify, '#1ED760', size),
  },
  {
    id: 'hbo-max',
    name: 'Max (HBO)',
    plan: 'Ad-Free Streaming',
    price: 16.99,
    category: 'streaming',
    categoryLabel: 'Streaming & Media',
    brandColor: '#002BE7',
    renderLogo: (size = 22) => renderSimpleIcon(siHbo, '#002BE7', size),
  },
  {
    id: 'paramount-plus',
    name: 'Paramount+',
    plan: 'With SHOWTIME',
    price: 11.99,
    category: 'streaming',
    categoryLabel: 'Streaming & Media',
    brandColor: '#0064FF',
    renderLogo: (size = 22) => renderSimpleIcon(siParamountplus, '#0064FF', size),
  },
  {
    id: 'audible',
    name: 'Audible',
    plan: 'Premium Plus',
    price: 14.95,
    category: 'streaming',
    categoryLabel: 'Streaming & Media',
    brandColor: '#F8991C',
    renderLogo: (size = 22) => renderSimpleIcon(siAudible, '#F8991C', size),
  },
  {
    id: 'twitch',
    name: 'Twitch Turbo',
    plan: 'Ad-Free Live Video',
    price: 11.99,
    category: 'streaming',
    categoryLabel: 'Streaming & Media',
    brandColor: '#9146FF',
    renderLogo: (size = 22) => renderSimpleIcon(siTwitch, '#9146FF', size),
  },
  {
    id: 'adobe-cc',
    name: 'Adobe Creative Cloud',
    plan: 'All Apps Monthly',
    price: 59.99,
    category: 'software',
    categoryLabel: 'AI & Software',
    brandColor: '#FF0000',
    renderLogo: (size = 22) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#FA0F00" role="img" aria-label="Adobe Creative Cloud">
        <path d="M14.87 3H22v18L14.87 3zM9.13 3H2v18L9.13 3zM12 9.65L16.54 21h-2.98l-1.36-3.6H8.87L12 9.65z" />
      </svg>
    ),
  },
  {
    id: 'microsoft-365',
    name: 'Microsoft 365',
    plan: 'Personal Suite + 1TB',
    price: 9.99,
    category: 'software',
    categoryLabel: 'AI & Software',
    brandColor: '#00A4EF',
    renderLogo: (size = 22) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" role="img" aria-label="Microsoft 365">
        <rect x="2.5" y="2.5" width="9" height="9" fill="#F25022" />
        <rect x="12.5" y="2.5" width="9" height="9" fill="#7FBA00" />
        <rect x="2.5" y="12.5" width="9" height="9" fill="#00A4EF" />
        <rect x="12.5" y="12.5" width="9" height="9" fill="#FFB900" />
      </svg>
    ),
  },
  {
    id: 'google-one',
    name: 'Google One',
    plan: '2TB Cloud + AI',
    price: 9.99,
    category: 'lifestyle',
    categoryLabel: 'Shopping & Cloud',
    brandColor: '#4285F4',
    renderLogo: (size = 22) => renderSimpleIcon(siGoogle, '#4285F4', size),
  },
  {
    id: 'discord-nitro',
    name: 'Discord Nitro',
    plan: 'HD Streaming & Perks',
    price: 9.99,
    category: 'software',
    categoryLabel: 'AI & Software',
    brandColor: '#5865F2',
    renderLogo: (size = 22) => renderSimpleIcon(siDiscord, '#5865F2', size),
  },
  {
    id: 'notion-plus',
    name: 'Notion Plus',
    plan: 'Workspace & AI',
    price: 10.0,
    category: 'software',
    categoryLabel: 'AI & Software',
    brandColor: '#111111',
    renderLogo: (size = 22) => renderSimpleIcon(siNotion, '#000000', size, true),
  },
  {
    id: 'figma-pro',
    name: 'Figma Pro',
    plan: 'Design Seat Monthly',
    price: 15.0,
    category: 'software',
    categoryLabel: 'AI & Software',
    brandColor: '#F24E1E',
    renderLogo: (size = 22) => renderSimpleIcon(siFigma, '#F24E1E', size),
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    plan: 'Individual AI Plan',
    price: 10.0,
    category: 'software',
    categoryLabel: 'AI & Software',
    brandColor: '#181717',
    renderLogo: (size = 22) => renderSimpleIcon(siGithub, '#181717', size, true),
  },
  {
    id: 'zoom-pro',
    name: 'Zoom Pro',
    plan: 'Unlimited Meetings',
    price: 15.99,
    category: 'software',
    categoryLabel: 'AI & Software',
    brandColor: '#0B5CFF',
    renderLogo: (size = 22) => renderSimpleIcon(siZoom, '#0B5CFF', size),
  },
  {
    id: 'uber-one',
    name: 'Uber One',
    plan: 'Rides & Delivery Pass',
    price: 9.99,
    category: 'lifestyle',
    categoryLabel: 'Shopping & Cloud',
    brandColor: '#111111',
    renderLogo: (size = 22) => renderSimpleIcon(siUber, '#000000', size, true),
  },
  {
    id: 'dropbox-plus',
    name: 'Dropbox Plus',
    plan: '2TB Cloud Backup',
    price: 11.99,
    category: 'lifestyle',
    categoryLabel: 'Shopping & Cloud',
    brandColor: '#0061FF',
    renderLogo: (size = 22) => renderSimpleIcon(siDropbox, '#0061FF', size),
  },
];
