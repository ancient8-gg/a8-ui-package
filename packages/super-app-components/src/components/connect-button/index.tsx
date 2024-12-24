import InternalConnectButton, { type ConnectButtonProps } from './ConnectButton'
import InternalAccountAvatar from './AccountAvatar'

import { IsolateTheme } from 'base'

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
