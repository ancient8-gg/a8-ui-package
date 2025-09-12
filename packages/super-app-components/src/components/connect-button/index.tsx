import { IsolateTheme } from '@/components/base'
import InternalConnectButton, { type ConnectButtonProps } from './ConnectButton'
import InternalAccountAvatar from './AccountAvatar'

function ConnectButton(props: ConnectButtonProps) {
  return (
    <IsolateTheme>
      <InternalConnectButton {...props} />
    </IsolateTheme>
  )
}

export type { ConnectButtonProps }

export { InternalConnectButton, InternalAccountAvatar }

export default ConnectButton
