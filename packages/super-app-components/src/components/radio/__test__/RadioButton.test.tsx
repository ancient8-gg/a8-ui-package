import { describe, test, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'

import RadioButton from '../RadioButton'

describe('RadioButton', () => {
  test('render with label', () => {
    const { getByLabelText } = render(
      <RadioButton value="a">Ancient8 Radio</RadioButton>,
    )
    expect(getByLabelText('Ancient8 Radio')).toBeInTheDocument()
  })

  test('checked when prop `checked=true`', () => {
    const { getByLabelText } = render(
      <RadioButton value="a" checked>
        Ancient8 Radio
      </RadioButton>,
    )
    const radio = getByLabelText('Ancient8 Radio') as HTMLInputElement
    expect(radio.checked).toBe(true)
  })

  test('unchecked when prop `checked=false`', () => {
    const { getByLabelText } = render(
      <RadioButton value="a" checked={false}>
        Ancient8 Radio
      </RadioButton>,
    )
    const radio = getByLabelText('Ancient8 Radio') as HTMLInputElement
    expect(radio.checked).toBe(false)
  })

  test('trigger onChange when clicked', () => {
    const onChange = vi.fn()
    const { getByLabelText } = render(
      <RadioButton value="a8-package-radio" onChange={onChange}>
        Ancient8 Radio
      </RadioButton>,
    )

    const radio = getByLabelText('Ancient8 Radio')
    fireEvent.click(radio)

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: 'a8-package-radio',
        }),
      }),
    )
  })

  test('not trigger onChange when disabled', () => {
    const onChange = vi.fn()
    const { getByLabelText } = render(
      <RadioButton value="Ancient8 Radio" disabled onChange={onChange}>
        Ancient8 Radio
      </RadioButton>,
    )
    const radio = getByLabelText('Ancient8 Radio')
    fireEvent.click(radio)
    expect(onChange).not.toHaveBeenCalled()
  })
})
