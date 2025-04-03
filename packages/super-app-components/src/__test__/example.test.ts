// Placeholder test file to prevent test failed
import { formatNumber } from '@/utils'

describe('formatNumber', () => {
  const number = 1.35798

  test('correct format with default maximumFractionDigits', () => {
    expect(formatNumber(number)).toBe('1.358')
  })

  test('correct format with custom maximumFractionDigits', () => {
    expect(formatNumber(number, 4)).toBe('1.358')
  })

  test('correct format with custom maximumFractionDigits', () => {
    expect(formatNumber(number, 2)).toBe('1.36')
  })
})
