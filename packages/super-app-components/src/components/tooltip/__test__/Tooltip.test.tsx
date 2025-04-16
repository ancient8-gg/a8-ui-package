import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, describe, expect } from 'vitest'

import Tooltip from '../Tooltip'

const sizes = ['sm', 'md', 'lg'] as const
const positions = ['top', 'bottom', 'left', 'right'] as const

describe('<Tooltip />', () => {
  sizes.forEach((size) => {
    positions.forEach((position) => {
      test(`shows tooltip content on hover (size=${size}, position=${position})`, async () => {
        const user = userEvent.setup()
        const label = `Trigger-${size}-${position}`
        const content = `Tooltip-${size}-${position}`

        render(
          <Tooltip size={size} position={position} content={content}>
            <button>{label}</button>
          </Tooltip>,
        )

        const trigger = screen.getByRole('button', { name: label })
        await user.hover(trigger)

        expect(await screen.findByText(content)).toBeInTheDocument()
      })
    })
  })
})
