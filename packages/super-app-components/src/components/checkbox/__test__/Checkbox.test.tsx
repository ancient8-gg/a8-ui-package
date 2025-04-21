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

  test('renders extra extra extra small size', () => {
    const { container } = render(<Checkbox size="xxxs" />)
    const input = container.querySelector(
      'input[type="checkbox"]',
    ) as HTMLInputElement

    expect(input).toHaveClass('size-4')
  })

  test('renders variant: solid', () => {
    const { container } = render(<Checkbox checked variant="solid" />)
    const input = container.querySelector('input[type="checkbox"]')!

    expect(input.className).toMatch(/checked:bg-primary/)
    expect(input.className).toMatch(/border-neutral-200/)
    expect(input.className).toMatch(/hover:border-primary-600/)
  })

  test('renders variant: outline', () => {
    const { container } = render(<Checkbox checked variant="outline" />)
    const input = container.querySelector('input[type="checkbox"]')!

    expect(input.className).toMatch(/checked:bg-transparent/)
    expect(input.className).toMatch(/border-neutral-200/)
    expect(input.className).toMatch(/hover:border-primary/)
  })
})
