import { useMemo, useState, useEffect, useCallback } from 'react'
import clsx from 'clsx'

import { type MenuProps, Menu, Image } from 'antd'

import { useSiderItems } from './hooks/useSiderItems'
import { useCollapseStore } from './stores/collapse.store'

import { removeTrailingSlash } from 'utils/removeTrailingSlash'

type MenuItem = Required<MenuProps>['items'][number]

function SiderMenu() {
  const [isClient, setIsClient] = useState(false)
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const { siderCollapsed, setSiderCollapsed } = useCollapseStore()
  const { data } = useSiderItems()

  const isMenuSelected = useCallback((url: string) => {
    const location = window.location.href
    const locationObj = new URL(removeTrailingSlash(location))
    const urlObj = new URL(removeTrailingSlash(url))

    if (locationObj.origin !== urlObj.origin) return false

    // Home
    if (locationObj.pathname === '/' && urlObj.pathname === '/') return true

    if (locationObj.pathname.length < urlObj.pathname.length) return false

    const locationPath = locationObj.pathname.split('/')
    const urlPath = urlObj.pathname.split('/')

    if (locationPath[1] === 'swap') {
      if (locationObj.pathname === '/swap' && urlObj.pathname === '/swap')
        return true

      return locationPath[2] === 'pools' && urlPath[2] === 'pools'
    }

    return locationPath[1] === urlPath[1]
  }, [])

  const { items, hasChildren } = useMemo(() => {
    let hasChildren: string[] = []
    let items: MenuItem[] = []

    data.forEach((item) => {
      if (item.children?.length) {
        hasChildren.push(item.linkTo)
      }

      const locationObj = new URL(window.location.href)
      const urlObj = new URL(item.linkTo)
      const target = urlObj.origin === locationObj.origin ? '_self' : '_blank'

      items.push({
        key: item.linkTo,
        label: (
          <a href={item.linkTo} target={target}>
            {item.title}
          </a>
        ),
        icon: item.icon && (
          <a href={item.linkTo} target={target}>
            <div>
              <Image
                width={24}
                height={24}
                src={item.icon}
                alt="icon"
                preview={false}
              />
            </div>
          </a>
        ),
        onClick: () => setSiderCollapsed(true),
        className: clsx(
          isMenuSelected(item.linkTo) && 'a8-pkg-menu-item-selected',
        ),
        children: item.children?.map((child) => ({
          key: child.linkTo,
          label: child.title,
          icon: child.icon && (
            <div>
              <Image
                width={24}
                height={24}
                src={child.icon}
                alt="icon"
                preview={false}
              />
            </div>
          ),
        })),
      })
    })

    return {
      items,
      hasChildren,
    }
  }, [data])

  useEffect(() => {
    if (siderCollapsed) {
      setOpenKeys([])
    } else {
      // set timeout to avoid flicker submenu
      setTimeout(() => {
        setOpenKeys(hasChildren)
      }, 100)
    }
  }, [siderCollapsed, hasChildren])

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <Menu
      theme="dark"
      mode="inline"
      openKeys={openKeys}
      expandIcon={null}
      selectable={false}
      items={items}
    />
  )
}

export default SiderMenu
