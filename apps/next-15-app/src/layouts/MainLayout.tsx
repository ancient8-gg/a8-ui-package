import { Layout, Footer } from '@ancient8/components'
import type { PropsWithChildren, ReactNode } from 'react'

function MainLayout({ children }: PropsWithChildren) {
  return (
    <Layout
      config={{
        sider: {
          baseUrl: 'https://cms-dev.ancient8.gg/api/side-menus',
        },
        header: {
          baseUrl: 'http://localhost:1337/api/user-nav-menus',
          startsA8Proxy: 'https://app-dev.ancient8.gg',
        },
      }}
    >
      <div className="px-6 mobile:px-4">
        {children}
        <div className="h-10"></div>
        <Footer />
      </div>
    </Layout>
  )
}

export const getMainLayout = (page: ReactNode) => (
  <MainLayout>{page}</MainLayout>
)

export default MainLayout
