import { Space, Typography } from 'antd'
import Icon from '@ant-design/icons'

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any // Couldn't infer type, so we cast to any
  }
>

const SOCIALS: SocialsType = {
  DISCORD: { url: 'https://discord.com/invite/ancient8', icon: DiscordIcon },
  TELEGRAM: { url: 'https://t.me/ancient8_gg', icon: TelegramIcon },
  X: { url: 'https://x.com/Ancient8_gg', icon: XIcon },
  YOUTUBE: { url: 'https://www.youtube.com/@Ancient8_gg', icon: YoutubeIcon },
  LINKEDIN: {
    url: 'https://www.linkedin.com/company/ancient8',
    icon: LinkedinIcon,
  },
}

function Socials() {
  return (
    <Space size={12} className="a8-pkg-footer--social">
      {Object.keys(SOCIALS).map((name) => (
        <Typography.Link
          href={SOCIALS[name].url}
          target="_blank"
          key={name}
          className="a8-pkg-footer--social-btn"
        >
          <Icon component={SOCIALS[name].icon} />
        </Typography.Link>
      ))}
    </Space>
  )
}

export default Socials
