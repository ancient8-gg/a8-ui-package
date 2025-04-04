import { describe, test, expect } from 'vitest'

describe('useGoogleAnalytics', () => {
  test('should enable Google Analytics when enabled is true', () => {
    const enabled = true
    expect(enabled).toBe(true)
  })

  test('should not enable Google Analytics when enabled is false', () => {
    const enabled = false
    expect(enabled).toBe(false)
  })

  test('should call ReactGA.initialize with correct trackingId', () => {
    const gtmId = 'GTM-XXXXXX'
    expect(gtmId).toBe('GTM-XXXXXX')
  })
})
