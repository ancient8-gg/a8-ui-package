import { renderHook } from '@testing-library/react'
import { vi } from 'vitest'

vi.mock('react-ga4', async () => {
  const actual = await vi.importActual<typeof import('react-ga4')>('react-ga4')

  return {
    ...actual,
    default: {
      ...actual.default,
      initialize: vi.fn(),
    },
  }
})

import ReactGA from 'react-ga4'
import { useGoogleAnalytics } from '../useGoogleAnalytics'

describe('useGoogleAnalytics', () => {
  beforeEach(() => {
    vi.resetModules()
    vi.clearAllMocks()
  })

  test('initializes Google Analytics when enabled is true', () => {
    renderHook(() => useGoogleAnalytics('GTM-XXXX', true))

    expect(ReactGA.initialize).toHaveBeenCalledWith([
      { trackingId: 'GTM-XXXX' },
    ])
  })

  test('skips Google Analytics initialization when disabled', () => {
    renderHook(() => useGoogleAnalytics('GTM-XXXX', false))

    expect(ReactGA.initialize).not.toHaveBeenCalled()
  })

  test('skips Google Analytics initialization with empty gtmId', () => {
    renderHook(() => useGoogleAnalytics('', true))

    expect(ReactGA.initialize).not.toHaveBeenCalled()
  })
})
