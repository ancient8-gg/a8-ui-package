import path from 'path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // transpilePackages: ['wagmi'],

  webpack(config) {
    /**
     * Disable css module
     * Source: https://cwtuan.blogspot.com/2022/10/disable-css-module-in-nextjs-v1231-sept.html
     */
    config.module.rules.forEach((rule: any) => {
      const { oneOf } = rule
      if (oneOf) {
        oneOf.forEach((one: any) => {
          if (!`${one.issuer?.and}`.includes('_app')) return
          one.issuer.and = [path.resolve(__dirname)]
        })
      }
    })

    /**
     * Make alias import in scss
     * https://stackoverflow.com/questions/72179248/how-do-i-configure-nextjs-to-correctly-handle-alias-paths-within-scss
     */
    config.resolve.alias['./@'] = path.resolve(__dirname, 'src')

    return config
  },
}

export default nextConfig
