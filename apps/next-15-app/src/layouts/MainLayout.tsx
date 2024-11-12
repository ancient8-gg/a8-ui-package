import { Layout } from '@ancient8/components'
import type { PropsWithChildren, ReactNode } from 'react'

function MainLayout({ children }: PropsWithChildren) {
  return (
    <Layout
      config={{
        sider: {
          baseUrl: 'https://cms-dev.ancient8.gg/api/side-menus',
        },
      }}
    >
      {children}
    </Layout>
  )
}

export const getMainLayout = (page: ReactNode) => (
  <MainLayout>{page}</MainLayout>
)

export default MainLayout
