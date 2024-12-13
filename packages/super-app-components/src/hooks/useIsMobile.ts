import { Grid } from 'antd'

const { useBreakpoint } = Grid

const useIsMobile = () => {
  const { lg, xl, xxl } = useBreakpoint()

  if (lg === undefined || xl === undefined || xxl === undefined)
    return undefined

  if (lg !== false || xl !== false || xxl !== false) return false
  return true
}

export default useIsMobile
