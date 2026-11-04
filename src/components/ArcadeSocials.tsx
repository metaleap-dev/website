'use client';

import { Instagram, Tiktok, Youtube } from '@matrixzero/brand-icons';

// Official account destinations published by games.shapemo.com.
const accounts = [
  { name: 'Instagram', href: 'https://www.instagram.com/shapemo2026/', Icon: Instagram },
  { name: 'TikTok', href: 'https://www.tiktok.com/@createrawanimation', Icon: Tiktok },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UCqN8AF5Cee0Cbq7QJAIX69w', Icon: Youtube },
];

export default function ArcadeSocials({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`arcade-socials${compact ? ' arcade-socials-compact' : ''}`}>
      <span className="social-label">Follow Shapemo Arcade</span>
      <nav aria-label="Shapemo Arcade social media">
        {accounts.map(({ name, href, Icon }) => (
          <a key={name} href={href} target="_blank" rel="noopener noreferrer"
            aria-label={`Shapemo Arcade on ${name} (opens in a new tab)`} title={name}>
            <Icon size={20} aria-hidden="true" />
          </a>
        ))}
      </nav>
    </div>
  );
}
