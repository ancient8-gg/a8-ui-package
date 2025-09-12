import { useEffect } from 'react'
import ReactGA from 'react-ga4'

export function useGoogleAnalytics(gtmId: string, enabled = false) {
  useEffect(() => {
    if (!enabled || gtmId === '') return

    ReactGA.initialize([{ trackingId: gtmId }])
  }, [gtmId, enabled])
}
