import { ConnectButton, Layout, LayoutProps } from '@ancient8/components'

import { getMainLayout } from '@/layouts/MainLayout'

export default function Home() {

  return (
    <div>
      <ConnectButton />

      <Layout config={{
        sider: {
          baseUrl: `/side-menus`,
        },
        header: {
          baseUrl: `/user-nav-menus`,
          utilsApi: '',
        },
      }}
        classNames={{
          content: 'bg-charcoal-0',
        }}>
        
      </Layout>
    </div >
  )
}

Home.getLayout = getMainLayout
