import { createContext } from 'react'

import type { SiderConfig } from './types'

const initialConfig: SiderConfig = {
  sider: {
    strapiApi: '',
  },
}

export const SiderConfigContext = createContext<SiderConfig>(initialConfig)
