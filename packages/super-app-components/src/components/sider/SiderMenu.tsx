import { useMemo, useState, useEffect } from 'react'

import { type MenuProps, Menu, Image, Flex } from 'antd'

import { useSiderItems } from './hooks/useSiderItems'
import { useCollapseStore } from 'components/sider/stores/collapse.store'

type MenuItem = Required<MenuProps>['items'][number]

function SiderMenu() {
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
        icon: (
          <Flex align="center">
            <Image
              width={28}
              height={28}
              src={item.icon}
              alt="icon"
              preview={false}
            />
          </Flex>
        ),
        children: item.children?.map((child) => ({
          key: child.linkTo,
          label: child.title,
          icon: child.icon && (
            <div>
              <Image
                width={28}
                height={28}
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

  return (
    <div>
      <Menu
        theme="dark"
        mode="inline"
        openKeys={openKeys}
        expandIcon={null}
        selectedKeys={selectedKeys}
        onSelect={({ key }) => (window.location.href = key)}
        items={items}
      />
    </div>
  )
}

export default SiderMenu
