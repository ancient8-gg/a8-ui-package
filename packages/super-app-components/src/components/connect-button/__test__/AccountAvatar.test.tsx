import { describe } from 'vitest'
import { render } from '@testing-library/react'

import AccountAvatar from '@/components/connect-button/AccountAvatar'

describe('AccountAvatar', () => {
  test('display correctly emoji', () => {
    const avatar1 = render(
      <AccountAvatar address="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" />,
    )
    const avatar2 = render(
      <AccountAvatar address="0x70997970c51812dc3a010c7d01b50e0d17dc79c8" />,
    )

    expect(avatar1.getByText('🍣')).toBeInTheDocument()
    expect(avatar2.getByText('🎈')).toBeInTheDocument()
  })

  test('display correctly ems avatar', () => {
    const src = 'https://example.com/avatar.png'
    const avatar = render(<AccountAvatar ensAvatar={src} />)
    const img = avatar.getByRole('img')

    expect(img).toBeInTheDocument()
    expect(img.getAttribute('src')).toBe(src)
  })
})
