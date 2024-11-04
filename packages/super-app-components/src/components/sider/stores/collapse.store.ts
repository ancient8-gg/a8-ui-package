import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import type { SiderContextProps } from '../types'

const initialStore: SiderContextProps = {
  siderCollapsed: false,
  setSiderCollapsed: () => {},
}

export const useCollapseStore = create<SiderContextProps>()(
  persist(
    (set) => ({
      ...initialStore,
      setSiderCollapsed: (collapsed) => set({ siderCollapsed: collapsed }),
    }),
    { name: 'collapse', storage: createJSONStorage(() => localStorage) },
  ),
)
