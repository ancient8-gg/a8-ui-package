import { describe, test, expect } from 'vitest'

import { formatPricing } from '@/utils'

describe('formatPricing', () => {
  test('formatPricing should format with symbol by default', () => {
    expect(formatPricing(1234.56)).toBe('$1,234.56')
  })

  test('formatPricing should format with currency unit when symbol is false', () => {
    expect(formatPricing(1234.56, false, '', 'USD')).toBe('1,234.56 USD')
  })

  test('formatPricing should format with large numbers correctly', () => {
    expect(formatPricing(999999.99, true, '$', 'USD')).toBe('$999,999.99')
  })
})
