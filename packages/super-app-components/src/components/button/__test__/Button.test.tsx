import { describe } from 'vitest'
import { useState } from 'react'
import { act, fireEvent, render } from '@testing-library/react'

import Button, { type ButtonProps } from '@/components/button'

describe('Button', () => {
  test('display loading instantly', () => {
    const App = () => {
      const [loading, setLoading] = useState<ButtonProps['loading']>(false)
      return (
        <Button loading={loading} onClick={() => setLoading(true)}>
          Button
        </Button>
      )
    }
    const { container } = render(<App />)

    fireEvent.click(container.firstChild!)
    expect(container.querySelectorAll('.a8-btn-loading')).toHaveLength(1)
  })

  test('display loading with delay', () => {
    vi.useFakeTimers()

    const App = () => {
      const [loading, setLoading] = useState<ButtonProps['loading']>(false)
      return (
        <Button loading={loading} onClick={() => setLoading({ delay: 1000 })}>
          Button
        </Button>
      )
    }
    const { container } = render(<App />)

    fireEvent.click(container.firstChild!)
    expect(container.querySelectorAll('.a8-btn-loading')).toHaveLength(0)
    act(() => {
      vi.advanceTimersByTime(500)
    })
    expect(container.querySelectorAll('.a8-btn-loading')).toHaveLength(0)
    act(() => {
      vi.advanceTimersByTime(500)
    })
    expect(container.querySelectorAll('.a8-btn-loading')).toHaveLength(1)

    vi.clearAllTimers()
    vi.useRealTimers()
  })

  test('display loading instantly with delay = 0', () => {
    const App = () => {
      const [loading, setLoading] = useState<ButtonProps['loading']>(false)
      return (
        <Button loading={loading} onClick={() => setLoading({ delay: 0 })}>
          Button
        </Button>
      )
    }
    const { container } = render(<App />)

    fireEvent.click(container.firstChild!)
    expect(container.querySelectorAll('.a8-btn-loading')).toHaveLength(1)
  })

  test('not render loading when reset', () => {
    vi.useFakeTimers()

    const { rerender, container } = render(
      <Button loading={{ delay: 1000 }}>Button</Button>,
    )
    rerender(<Button loading={{ delay: 2000 }}>Button</Button>)
    rerender(<Button loading={false}>Button</Button>)

    act(() => {
      vi.runAllTimers()
    })
    expect(container.querySelectorAll('.a8-btn-loading')).toHaveLength(0)

    vi.clearAllTimers()
    vi.useRealTimers()
  })

  test('not clickable when loading', () => {
    const onClick = vi.fn()
    const { container } = render(
      <Button loading onClick={onClick}>
        button
      </Button>,
    )

    fireEvent.click(container.firstChild!)
    expect(onClick).not.toHaveBeenCalled()
  })

  test('not clickable when disabled', () => {
    const onClick = vi.fn()
    const { container } = render(
      <Button disabled onClick={onClick}>
        button
      </Button>,
    )
    fireEvent.click(container.firstChild!)
    expect(onClick).not.toHaveBeenCalled()
  })

  test('display prefix/suffix icon', () => {
    const { container } = render(
      <Button
        icons={{
          prefix: <i className="icon-prefix" />,
          suffix: <i className="icon-suffix" />,
        }}
      >
        Button
      </Button>,
    )
    expect(container.querySelectorAll('.icon-prefix')).toHaveLength(1)
    expect(container.querySelectorAll('.icon-suffix')).toHaveLength(1)
  })

  test('display loading icon', () => {
    const { container } = render(
      <Button
        loading
        icons={{
          loading: <i className="icon-custom" />,
        }}
      >
        Button
      </Button>,
    )
    expect(container.querySelectorAll('.icon-custom')).toHaveLength(1)
  })
})
