import type { SiderMenuType, SiderStrapiType } from './types'

export function parseSiderStrapiMenu(menu: SiderStrapiType[]): SiderMenuType[] {
  return menu.map((item) => {
    const { id, linkTo, title, icon, children } = item

    return {
      id,
      linkTo,
      title,
      icon: icon?.url ?? '',
      children: children?.length ? parseSiderStrapiMenu(children) : undefined,
    } as SiderMenuType
  })
}
