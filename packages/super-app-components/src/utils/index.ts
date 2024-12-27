export function shortenAddress(address?: string, num = 4) {
  if (!address) return undefined
  return (
    address.substring(0, num) +
    '...' +
    address.substring(address.length - num, address.length)
  )
}

export function formatNumber(value: number, maximumFractionDigits = 3) {
  return value.toLocaleString('en-US', {
    maximumFractionDigits,
  })
}
