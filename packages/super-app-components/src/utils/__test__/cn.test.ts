import { describe, test, expect } from 'vitest'

import { cn } from '@/utils'

describe('cn', () => {
  test('combine classes correctly', () => {
    expect(cn('text-lg', 'text-center')).toBe('text-lg text-center')
  })

  test('merge conflicting classes', () => {
    expect(cn('text-lg', 'text-lg', 'text-center')).toBe('text-lg text-center')
  })


  test('merge padding', () => {
    expect(cn('p-0', 'px-2', 'py-3')).toBe('p-0 px-2 py-3')
  })

  test('merge padding wtesth higher priortesty', () => {
    expect(cn('p-0', 'p-4')).toBe('p-4')
    expect(cn('px-2', 'px-4')).toBe('px-4')
    expect(cn('py-3', 'py-0')).toBe('py-0')
  })

  test('merge the padding mixed', () => {
    expect(cn('p-0', 'px-2', 'py-auto')).toBe('p-0 px-2 py-auto')
    expect(cn('py-3', 'pt-1', 'pb-2')).toBe('py-3 pt-1 pb-2')
    expect(cn('p-4', 'px-2')).toBe('p-4 px-2')
  })

  test('combination of directional and shorthand padding classes', () => {
    expect(cn('p-4', 'pt-2')).toBe('p-4 pt-2')
    expect(cn('px-3', 'pl-1')).toBe('px-3 pl-1')
    expect(cn('py-2', 'pb-4')).toBe('py-2 pb-4')
  })
})
