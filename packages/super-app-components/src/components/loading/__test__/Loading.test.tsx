import { describe, expect } from 'vitest'
import { render } from '@testing-library/react'

import Loading from '@/components/loading'

describe('Loading', () => {
  test('display correctly', () => {
    const primaryScreen = render(<Loading type="primary" />)
    const neutralScreen = render(<Loading type="neutral" />)

    expect(primaryScreen.container.firstChild).toHaveClass('*:fill-primary')
    expect(neutralScreen.container.firstChild).toHaveClass('*:fill-neutral-900')
  })

  test('display with variant', () => {
    const primaryScreen = render(<Loading type="primary" variant="sync" />)
    const neutralScreen = render(<Loading type="neutral" variant="sync" />)

    expect(primaryScreen.container.firstChild).toHaveClass('*:fill-primary')
    expect(neutralScreen.container.firstChild).toHaveClass('*:fill-neutral-900')
  })

  test('display with custom class', () => {
    const primaryScreen = render(<Loading type="primary" className="size-4" />)
    const neutralScreen = render(<Loading type="neutral" className="size-4" />)

    expect(primaryScreen.container.firstChild).toHaveClass('size-4')
    expect(neutralScreen.container.firstChild).toHaveClass('size-4')
  })
})
