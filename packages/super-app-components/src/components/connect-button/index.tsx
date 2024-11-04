import InternalConnectButton, { type ConnectButtonProps } from './ConnectButton'

import { IsolateTheme } from 'base'

function ConnectButton(props: ConnectButtonProps) {
  return (
    <IsolateTheme>
      <InternalConnectButton {...props} />
    </IsolateTheme>
  )
}

export type { ConnectButtonProps }

export { InternalConnectButton }

export default ConnectButton
