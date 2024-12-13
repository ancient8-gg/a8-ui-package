import type { MenuStrapiType } from 'components/sider'

export type StrapiMenu = {
  id: number
  badge: string | null
  linkTo: string
  title: string
  icon: string
  children?: StrapiMenu[]
  order: number
}

export function parseStrapiMenu(menu: MenuStrapiType[]): StrapiMenu[] {
  return menu
    .map((item) => {
      const { id, badge, linkTo, title, icon, children, order } = item

      return {
        id,
        badge,
        linkTo,
        title,
        order,
        icon: icon?.url ?? '',
        children: children?.length ? parseStrapiMenu(children) : undefined,
      } as StrapiMenu
    })
    .sort(({ order: a }, { order: b }) => a - b)
}
