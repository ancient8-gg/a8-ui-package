import { ConnectButton } from '@ancient8/components'

import { getMainLayout } from '@/layouts/MainLayout'

export default function Home() {
  return (
    <div>
      <ConnectButton />
    </div>
  )
}

Home.getLayout = getMainLayout
