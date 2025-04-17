import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import Switch from '../Switch'

describe('Switch Component', () => {
  test('renders the Switch with state checked', () => {
    render(<Switch checked />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    const thumb = screen.getByRole('button').querySelector('span')
    expect(thumb).toHaveClass('bg-[#000]')
  })

  test('renders the Switch with state unchecked', () => {
    render(<Switch checked={false} />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    const thumb = screen.getByRole('button').querySelector('span')
    expect(thumb).toHaveClass('bg-neutral-700')
  })

  test('renders with the correct size', () => {
    render(<Switch size="sm" checked />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('h-[22px] w-10')
  })

  test('applies the correct classes based on the checked state', () => {
    render(<Switch checked />)
    const thumb = screen.getByRole('button').querySelector('span')
    expect(thumb).toHaveClass('bg-[#000]')
  })

  test('should call onChange handler when clicked', () => {
    const onChange = vi.fn()
    render(<Switch onChange={onChange} checked />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  test('should trigger onClick handler when clicked', () => {
    const onClick = vi.fn()
    render(<Switch onClick={onClick} checked />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
