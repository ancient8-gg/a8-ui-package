export type SearchConfig = {
  baseUrl: string
  accessToken: string
}

export type HeaderConfig = {
  search: SearchConfig
}

export type HeaderProps = {
  config: HeaderConfig
}
