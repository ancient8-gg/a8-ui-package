export function removeTrailingSlash(url: string) {
  const urlObj = new URL(url)

  urlObj.pathname =
    urlObj.pathname.endsWith('/') && urlObj.pathname.length > 1
      ? urlObj.pathname.slice(0, -1)
      : urlObj.pathname
  return urlObj.toString()
}
