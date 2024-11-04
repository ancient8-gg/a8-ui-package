import React, { type PropsWithChildren } from 'react'

import { ConfigProvider, type ThemeConfig } from 'antd'

const themeConfig: ThemeConfig = {
  token: {
    fontFamily: 'var(--a8-font-family)',
  },
}

function IsolateTheme({ children }: PropsWithChildren) {
  return (
    <ConfigProvider
      theme={themeConfig}
      prefixCls="a8-pkg"
      iconPrefixCls="a8-pkg-icon"
      wave={{ disabled: true }}
    >
      {children}
    </ConfigProvider>
  )
}

export const extractStyleConfig = (node: React.JSX.Element) => {
  return (
    <ConfigProvider
      theme={themeConfig}
      prefixCls="a8-pkg"
      iconPrefixCls="a8-pkg-icon"
      wave={{ disabled: true }}
    >
      {node}
    </ConfigProvider>
  )
}

export default IsolateTheme
