import { createContext } from 'react'

import type { HeaderConfig } from './types'

const initialConfig: HeaderConfig = {
  header: {
    baseUrl: '',
    utilsApi: '',
  },
}

export const HeaderConfigContext = createContext<HeaderConfig>(initialConfig)
