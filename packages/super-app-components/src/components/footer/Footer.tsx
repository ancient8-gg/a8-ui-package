import { Flex, Typography, Space } from 'antd'

import Socials from '@/components/footer/Socials'

import useIsMobile from '@/hooks/useIsMobile'

import { Brand } from '@/assets/icons'

function Footer() {
  const isMobile = useIsMobile()

  return (
    <Flex
      vertical={!!isMobile}
      justify={!isMobile ? 'space-between' : undefined}
      gap={!isMobile ? 0 : 24}
      className="a8-pkg-footer-container"
    >
      <Flex vertical gap={!isMobile ? 40 : 20}>
        <Flex vertical gap={20}>
          <a href="/">
            <Brand />
          </a>

          <Typography.Text className="a8-pkg-footer--sub-brand">
            On The Edge Of Gaming
          </Typography.Text>
        </Flex>

        <Socials />

        <Typography.Text className="a8-pkg-footer--copyright">
          © {new Date().getFullYear()} Ancient8. All rights reserved.
        </Typography.Text>
      </Flex>

      <Flex vertical={!!isMobile} gap={!isMobile ? 0 : 24}>
        <Flex justify={!isMobile ? undefined : 'space-between'}>
          <Space direction="vertical" size={20} className="a8-pkg-footer--menu">
            <Typography.Text className="a8-pkg-footer--menu-title">
              Application
            </Typography.Text>
            <Typography.Link
              href="/nftmarketplace"
              target="_blank"
              className="a8-pkg-footer--menu-content"
            >
              NFT Marketplace
            </Typography.Link>
            {/* TODO: Temporarily hidden due to no page */}
            {/* <Typography.Link
              href="/gamesandprotocols"
              target="_blank"
              className="a8-pkg-footer--menu-content"
            >
              Games/Protocols
            </Typography.Link> */}
            <Typography.Link
              href="/swap"
              target="_blank"
              className="a8-pkg-footer--menu-content"
            >
              Swap
            </Typography.Link>
            <Typography.Link
              href="/bridge"
              target="_blank"
              className="a8-pkg-footer--menu-content"
            >
              Bridge
            </Typography.Link>
            <Typography.Link
              href="/staking"
              target="_blank"
              className="a8-pkg-footer--menu-content"
            >
              Stake
            </Typography.Link>
          </Space>

          <Space direction="vertical" size={20} className="a8-pkg-footer--menu">
            <Typography.Text className="a8-pkg-footer--menu-title">
              Resources
            </Typography.Text>
            <Typography.Link
              href="https://blog.ancient8.gg/"
              target="_blank"
              className="a8-pkg-footer--menu-content"
            >
              Newsletters
            </Typography.Link>
            <Typography.Link
              href="https://docs.ancient8.gg/"
              target="_blank"
              className="a8-pkg-footer--menu-content"
            >
              Documentation
            </Typography.Link>
            <Typography.Link
              href="https://scan.ancient8.gg/"
              target="_blank"
              className="a8-pkg-footer--menu-content"
            >
              A8 Scan
            </Typography.Link>
            <Typography.Link
              href="https://drive.google.com/file/d/1OtQB9cs-OTW32q1ywsDrrcmUcANUHji6"
              target="_blank"
              className="a8-pkg-footer--menu-content"
            >
              Brand Assets
            </Typography.Link>
          </Space>
        </Flex>

        <Space direction="vertical" size={20} className="a8-pkg-footer--menu">
          <Typography.Text className="a8-pkg-footer--menu-title">
            Company
          </Typography.Text>
          <Typography.Link
            href="https://ancient8.gg/"
            target="_blank"
            className="a8-pkg-footer--menu-content"
          >
            About Ancient8
          </Typography.Link>
          <Typography.Link
            href="https://ancient8.gg/careers"
            target="_blank"
            className="a8-pkg-footer--menu-content"
          >
            Careers
          </Typography.Link>
          <Typography.Link
            href="https://ancient8.gg/ecosystem"
            target="_blank"
            className="a8-pkg-footer--menu-content"
          >
            Ecosystem
          </Typography.Link>
        </Space>
      </Flex>
    </Flex>
  )
}

export default Footer
