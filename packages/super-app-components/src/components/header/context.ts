import { createContext } from 'react'

import type { HeaderConfig } from './types'

const initialConfig: HeaderConfig = {
  header: {
    baseUrl: '',
    startsA8Proxy: '',
  },
}

export const HeaderConfigContext = createContext<HeaderConfig>(initialConfig)
