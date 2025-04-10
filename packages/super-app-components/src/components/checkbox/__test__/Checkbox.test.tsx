import { describe, test, expect, vi } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import { useState } from 'react'

import Checkbox from '@/components/checkbox'

describe('Checkbox', () => {
  test('toggle checked state', () => {
    const App = () => {
      const [checked, setChecked] = useState(false)
      return (
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      )
    }

    const { container } = render(<App />)
    const input = container.querySelector(
      'input[type="checkbox"]',
    ) as HTMLInputElement

    expect(input.checked).toBe(false)
    fireEvent.click(input)
    expect(input.checked).toBe(true)
  })

  test('call onChange when checked', () => {
    const onChange = vi.fn()
    const { container } = render(
      <Checkbox checked={false} onChange={onChange} disabled />,
    )

    const input = container.querySelector(
      'input[type="checkbox"]',
    ) as HTMLInputElement

    fireEvent.click(input)
    expect(onChange).not.toHaveBeenCalled()
  })

  test('disabled state', () => {
    const { container } = render(
      <Checkbox checked={false} onChange={() => {}} disabled />,
    )
    const input = container.querySelector(
      'input[type="checkbox"]',
    ) as HTMLInputElement

    expect(input.disabled).toBe(true)
  })

  test('checked default', () => {
    const { container } = render(<Checkbox checked={true} />)
    const input = container.querySelector(
      'input[type="checkbox"]',
    ) as HTMLInputElement

    expect(input.checked).toBe(true)
  })

  test('renders small size', () => {
    const { container } = render(<Checkbox size="sm" />)
    const input = container.querySelector(
      'input[type="checkbox"]',
    ) as HTMLInputElement

    expect(input).toHaveClass('h-4 w-4')
  })

  test('renders correctly sized icon for default (md) size when checked', () => {
    const { container } = render(<Checkbox checked={true} />)
    const icon = container.querySelector('svg')
    expect(icon).not.toBeNull()
    expect(icon).toHaveClass('w-3 h-3')
  })
})
