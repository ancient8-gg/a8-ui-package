import { useMemo, useState, useEffect } from 'react'

import { type MenuProps, Menu, Image } from 'antd'

import { useSiderItems } from './hooks/useSiderItems'
import { useCollapseStore } from './stores/collapse.store'

type MenuItem = Required<MenuProps>['items'][number]

function SiderMenu() {
  const [isClient, setIsClient] = useState(false)

  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const { siderCollapsed } = useCollapseStore()
  const { data } = useSiderItems()

  const { items, hasChildren } = useMemo(() => {
    let hasChildren: string[] = []
    let items: MenuItem[] = []

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
    setSelectedKeys([window.location.href])
  }, [])

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
      onSelect={({ key }) => (window.location.href = key)}
      items={items}
    />
  )
}

export default SiderMenu
