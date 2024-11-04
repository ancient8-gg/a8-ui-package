import { createContext } from 'react'

import type { HeaderConfig } from './types'

const initialConfig: HeaderConfig = {
  search: {
    baseUrl: '',
    accessToken: '',
  },
}

export const HeaderConfigContext = createContext<HeaderConfig>(initialConfig)
