import { createContext } from 'react'

import type { SiderConfig } from './types'

const initialConfig: SiderConfig = {
  sider: {
    baseUrl: '',
    accessToken: '',
  },
}

export const SiderConfigContext = createContext<SiderConfig>(initialConfig)
