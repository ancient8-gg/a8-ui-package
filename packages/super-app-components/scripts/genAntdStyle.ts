// import fs from 'fs'
//
// import { extractStyle } from '@ant-design/static-style-extract'
// import { extractStyleConfig } from '../src/base/IsolateTheme'
//
// const cssText = extractStyle(extractStyleConfig)
//
// console.log(cssText)

import fs from 'fs'
import { extractStyle } from '@ant-design/static-style-extract'
import { extractStyleConfig } from '../src/base/IsolateTheme'

const outputPath = './src/styles/antd.min.scss'

// 1. default theme

// const css = extractStyle();

// 2. With custom theme

const css = extractStyle(extractStyleConfig)

fs.writeFileSync(outputPath, css)
