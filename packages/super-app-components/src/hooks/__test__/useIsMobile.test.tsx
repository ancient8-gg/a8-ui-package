import { useEffect } from 'react'
import { describe, expect } from 'vitest'
import { fireEvent, render, renderHook } from '@testing-library/react'

import useIsMobile from '@/hooks/useIsMobile'

describe('useIsMobile', () => {
  test('returns default value', () => {
    const { result, rerender } = renderHook(() => useIsMobile())
    rerender()
    rerender()
    rerender()
    expect(result.current).toBe(false)
  })

  // test('returns initial value', () => {
  //   const { result, rerender } = renderHook(() => useIsMobile(true))
  //   rerender()
  //   rerender()
  //   rerender()
  //   expect(result.current).toBe(true)
  // })

  test('returns correct value', () => {
    const results: boolean[] = []

    const App = () => {
      const isMobile = useIsMobile()

      useEffect(() => {
        if (results[results.length - 1] !== isMobile) results.push(isMobile)
      }, [isMobile])

      return null
    }
    const { rerender } = render(<App />)

    function resize(width: number) {
      fireEvent.resize(window, { target: { innerWidth: width } })
      rerender(<App />)
    }

    resize(375)
    resize(1440)
    resize(1200)
    resize(375)
    resize(400)
    resize(400)

    expect(results).toStrictEqual([false, true, false, true])
  })
})
