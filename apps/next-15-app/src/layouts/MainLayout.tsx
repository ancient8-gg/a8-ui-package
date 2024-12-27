import type { PropsWithChildren, ReactNode } from 'react'

import { ConfigProvider } from 'antd'
import { Layout, Footer } from '@ancient8/components'

function MainLayout({ children }: PropsWithChildren) {
  return (
    <Layout
      config={{
        sider: {
          baseUrl: 'https://cms-dev.ancient8.gg/api/side-menus',
        },
        header: {
          baseUrl: 'https://cms-dev.ancient8.gg/api/user-nav-menus',
          startsA8Proxy: 'https://app-dev.ancient8.gg',
        },
      }}
    >
      <ConfigProvider
        theme={{
          token: {
            fontSize: 16,
            colorPrimary: '#D8FF76',
            lineHeight: 1,
          },
          components: {
            Button: {
              colorPrimary: '#D8FF76',
            },
          },
        }}
      >
        <div className="px-6 mobile:px-4">
          {children}
          <div className="h-10"></div>
          <Footer />
        </div>
      </ConfigProvider>
    </Layout>
  )
}

export const getMainLayout = (page: ReactNode) => (
  <MainLayout>{page}</MainLayout>
)

export default MainLayout
