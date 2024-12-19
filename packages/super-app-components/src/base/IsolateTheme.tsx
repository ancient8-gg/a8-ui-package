import React, { type PropsWithChildren } from 'react'

import { ConfigProvider, type ThemeConfig, theme } from 'antd'

const themeConfig: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    fontFamily: 'var(--a8-font-family)',
  },
  components: {
    Typography: {
      colorText: '#E1E2E5',
    },
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

export default IsolateTheme
