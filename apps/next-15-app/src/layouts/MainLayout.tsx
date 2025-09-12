import type { PropsWithChildren, ReactNode } from 'react'

import { ConfigProvider } from 'antd'
import { Layout, Footer } from '@ancient8/components'
import { cn } from '@ancient8/components/utils'

function MainLayout({ children }: PropsWithChildren) {
  return (
    <Layout
      config={{
        sider: {
          strapiApi: 'https://cms-dev.ancient8.gg/api/side-menus',
        },
        header: {
          strapiApi: 'https://cms-dev.ancient8.gg/api/user-nav-menus',
          utilsApi: 'https://utils-api.ancient8.gg',
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
        <main
          className={cn(
            'mobile:px-4 mx-auto max-w-[1380px] px-6',
            'min-h-[calc(100vh_-_76px_-301px)]',
            'mobile:min-h-[calc(100vh_-_56px_-_618px)]',
          )}
        >
          {children}
          <div className="h-10"></div>
        </main>
        <Footer />
      </ConfigProvider>
    </Layout>
  )
}

export const getMainLayout = (page: ReactNode) => (
  <MainLayout>{page}</MainLayout>
)

export default MainLayout
