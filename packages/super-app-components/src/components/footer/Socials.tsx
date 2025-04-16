import { cn } from '@/utils'

import {
  DiscordIcon,
  LinkedinIcon,
  TelegramIcon,
  XIcon,
  YoutubeIcon,
} from '@/assets/icons'

type SocialsType = Record<
  string,
  {
    url: string
    icon: JSX.Element
  }
>

const SOCIALS: SocialsType = {
  DISCORD: { url: 'https://discord.com/invite/ancient8', icon: <DiscordIcon /> },
  TELEGRAM: { url: 'https://t.me/ancient8_gg', icon: <TelegramIcon /> },
  X: { url: 'https://x.com/Ancient8_gg', icon: <XIcon /> },
  YOUTUBE: { url: 'https://www.youtube.com/@Ancient8_gg', icon: <YoutubeIcon /> },
  LINKEDIN: {
    url: 'https://www.linkedin.com/company/ancient8',
    icon: <LinkedinIcon />,
  },
}

function Socials() {
  return (
    <div className='flex gap-3'>
      {Object.keys(SOCIALS).map((name) => (
          <a
            href={SOCIALS[name].url}
            target="_blank"
            rel="noopener noreferrer"
            key={name}
            className={cn(
              "flex justify-center items-center w-12 h-12",
              'rounded-lg border border-white/[0.08] hover:bg-white/[0.08]'
            )}
          >
            {SOCIALS[name].icon}
          </a>
        ))}
    </div>
  )
}

export default Socials
