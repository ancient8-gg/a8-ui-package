import { useMemo, useState, useEffect } from 'react'

import { type MenuProps, Menu, Image } from 'antd'

import { useSiderItems } from './hooks/useSiderItems'
import { useCollapseStore } from './stores/collapse.store'

import { removeTrailingSlash } from 'utils/removeTrailingSlash'

type MenuItem = Required<MenuProps>['items'][number]

function SiderMenu() {
  const [isClient, setIsClient] = useState(false)

  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const { siderCollapsed } = useCollapseStore()
  const { data } = useSiderItems()

  const { items, hasChildren, keys } = useMemo(() => {
    let hasChildren: string[] = []
    let items: MenuItem[] = []
    let keys: string[] = []

    data.forEach((item) => {
      if (item.children?.length) {
        hasChildren.push(item.linkTo)
      }

      items.push({
        key: item.linkTo,
        label: item.title,
        icon: item.icon && (
          <div>
            <Image
              width={24}
              height={24}
              src={item.icon}
              alt="icon"
              preview={false}
            />
          </div>
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

    keys = data.map((item) => item.linkTo)

    return {
      items,
      hasChildren,
      keys,
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
    const location = window.location.href
    const locationObj = new URL(removeTrailingSlash(location))

    const selectedKeys = keys.filter((key) => {
      const urlObj = new URL(removeTrailingSlash(key))

      if (locationObj.origin !== urlObj.origin) return false

      if (!locationObj.pathname.includes('/swap/pools')) {
        return locationObj.pathname === urlObj.pathname
      }

      return (
        locationObj.pathname.includes('/swap/pools') &&
        urlObj.pathname.includes('/swap/pools')
      )
    })

    setSelectedKeys(selectedKeys)
  }, [keys])

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
      selectedKeys={selectedKeys}
      onSelect={({ key }) => {
        const locationObj = new URL(window.location.href)
        const keyObj = new URL(key)
        const target = keyObj.origin === locationObj.origin ? '_self' : '_blank'

        return window.open(key, target)
      }}
      items={items}
    />
  )
}

export default SiderMenu
