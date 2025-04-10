import type { SVGProps } from 'react'

import { cn } from '@/utils'

type CheckedIconProps = SVGProps<SVGSVGElement> & {
  className?: string
}

export const CheckedIcon = ({ className, ...props }: CheckedIconProps) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('h-4 w-4', className)}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.7475 4.00015L5.99999 12.7477L1.25244 8.00015L2.66665 6.58594L5.99999 9.91927L13.3333 2.58594L14.7475 4.00015Z"
      fill="#101010"
    />
  </svg>
)
