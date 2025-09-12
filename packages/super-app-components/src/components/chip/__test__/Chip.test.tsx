import { describe, expect, test, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'

import Chip from '@/components/chip'

describe('Chip', () => {
  test('renders with children', () => {
    const { getByText } = render(<Chip>Test Chip</Chip>)
    expect(getByText('Test Chip')).toBeInTheDocument()
  })

  test('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    const { getByText } = render(<Chip onClick={handleClick}>Click Me</Chip>)
    fireEvent.click(getByText('Click Me'))
    expect(handleClick).toHaveBeenCalled()
  })

  test('does not call onClick when disabled', () => {
    const handleClick = vi.fn()
    const { getByText } = render(
      <Chip disabled onClick={handleClick}>
        Disabled Chip
      </Chip>,
    )
    fireEvent.click(getByText('Disabled Chip'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  test('renders with checked icon when checked', () => {
    const { container } = render(
      <Chip checked showIcon>
        Checked Chip
      </Chip>,
    )
    const icon = container.querySelector('svg')
    expect(icon).toBeTruthy()
  })

  test('renders custom icon if provided', () => {
    const CustomIcon = () => <svg data-testid="custom-icon" />
    const { getByTestId } = render(
      <Chip showIcon icon={<CustomIcon />}>
        Chip with Icon
      </Chip>,
    )
    expect(getByTestId('custom-icon')).toBeInTheDocument()
  })

  test('renders close icon and calls onClose when clicked', () => {
    const handleClose = vi.fn()
    const { container } = render(
      <Chip closeIcon onClose={handleClose}>
        Closable Chip
      </Chip>,
    )
    const closeBtn = container.querySelector('span > span:last-child')
    fireEvent.click(closeBtn!)
    expect(handleClose).toHaveBeenCalled()
  })

  test('does not call onClose when disabled', () => {
    const handleClose = vi.fn()
    const { container } = render(
      <Chip closeIcon disabled onClose={handleClose}>
        Disabled Closable Chip
      </Chip>,
    )
    const closeBtn = container.querySelector('span > span:last-child')
    fireEvent.click(closeBtn!)
    expect(handleClose).not.toHaveBeenCalled()
  })
})
