import type { BaseIconProps } from '@/types/icon.type'

export const LoadingSync = (props: BaseIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    {...props}
  >
    <rect width="48" height="48" fill="black" fillOpacity="0.01" />
    <circle opacity="0.2" cx="10" cy="24" r="4" fill="currentColor">
      <animate
        attributeName="opacity"
        begin="0.2s"
        dur="1s"
        from="0"
        to="1"
        repeatCount="indefinite"
      />
    </circle>
    <circle opacity="0.4" cx="24" cy="24" r="4" fill="currentColor">
      <animate
        attributeName="opacity"
        begin="0.4s"
        dur="1s"
        from="0"
        to="1"
        repeatCount="indefinite"
      />
    </circle>
    <circle opacity="0.6" cx="38" cy="24" r="4" fill="currentColor">
      <animate
        attributeName="opacity"
        begin="0.6s"
        dur="1s"
        from="0"
        to="1"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
)
