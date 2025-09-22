import { useEffect, useState } from 'react'
import { isBrowser, offEvent, onEvent } from '@/utils/common'

const useIsMobile = (initialValue = false) => {
  const [isMobile, setIsMobile] = useState(initialValue)

  useEffect(() => {
    if (isBrowser) {
      const handleResize = () => {
        if (window.innerWidth < 992) {
          setIsMobile(true)
        } else {
          setIsMobile(false)
        }
      }

      onEvent(window, 'resize', handleResize)

      handleResize()

      return () => {
        offEvent(window, 'resize', handleResize)
      }
    }
  }, [])

  return isMobile
}

export default useIsMobile
