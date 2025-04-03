import { describe, test, expect } from 'vitest'

import { formatInputNumber } from '@/utils'

describe('formatInputNumber', () => {
  test('format integers correctly', () => {
    expect(formatInputNumber(1234)).toBe('1,234')
  })

  test('format floats correctly', () => {
    expect(formatInputNumber(1234.567, 5, 2)).toBe('1,234.57')
  })

  test('throw for large values', () => {
    expect(() => formatInputNumber(Math.pow(10, 20))).toThrow(
      'Value is too large',
    )
  })

  test('format with maximum digits correctly', () => {
    expect(formatInputNumber(99999, 5)).toBe('99,999')
  })

  test('format with maximum digits correctly', () => {
    expect(formatInputNumber(999999, 6)).toBe('999,999')
  })
})
