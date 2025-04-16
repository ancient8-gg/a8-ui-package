import { Button } from '@ancient8/components'

import { getMainLayout } from '@/layouts/MainLayout'
import { Checkbox } from 'antd'
import { useState } from 'react'

function ButtonPage() {
  const [loading, setLoading] = useState(true)

  return (
    <section className="space-y-4">
      <h1 className="text-primary text-center text-4xl font-bold">Button</h1>
      <h2 className="text-primary text-2xl font-bold">Base Usage</h2>

      <div className="mobile:grid-cols-1 grid grid-cols-2 gap-10 [&>*]:col-span-1 [&>*]:space-y-2">
        <div>
          <p>Type: Primary</p>

          <div className="flex items-center space-x-4">
            <Button type="primary">Solid</Button>
            <Button type="primary" variant="light-solid">
              Light Solid
            </Button>
            <Button type="primary" variant="outline">
              Outline
            </Button>
            <Button type="primary" variant="ghost">
              Ghost
            </Button>
            <Button type="primary" variant="text">
              Text
            </Button>
          </div>

          <p>Disabled</p>

          <div className="flex items-center space-x-4">
            <Button type="primary" disabled>
              Solid
            </Button>
            <Button type="primary" variant="light-solid" disabled>
              Light Solid
            </Button>
            <Button type="primary" variant="outline" disabled>
              Outline
            </Button>
            <Button type="primary" variant="ghost" disabled>
              Ghost
            </Button>
            <Button type="primary" variant="text" disabled>
              Text
            </Button>
          </div>
        </div>

        <div>
          <p>Type: Neutral</p>

          <div className="flex items-center space-x-4">
            <Button type="neutral">Solid</Button>
            <Button type="neutral" variant="light-solid">
              Light Solid
            </Button>
            <Button type="neutral" variant="outline">
              Outline
            </Button>
            <Button type="neutral" variant="ghost">
              Ghost
            </Button>
            <Button type="neutral" variant="text">
              Text
            </Button>
          </div>

          <p>Disabled</p>

          <div className="flex items-center space-x-4">
            <Button type="neutral" disabled>
              Solid
            </Button>
            <Button type="neutral" variant="light-solid" disabled>
              Light Solid
            </Button>
            <Button type="neutral" variant="outline" disabled>
              Outline
            </Button>
            <Button type="neutral" variant="ghost" disabled>
              Ghost
            </Button>
            <Button type="neutral" variant="text" disabled>
              Text
            </Button>
          </div>
        </div>

        <div>
          <p>Size</p>

          <div className="flex space-x-4">
            <Button type="primary" size="xs">
              Size xs
            </Button>
            <Button type="primary" size="sm">
              Size sm
            </Button>
            <Button type="primary" size="md">
              Size md
            </Button>
            <Button type="primary" size="lg">
              Size lg
            </Button>
          </div>
        </div>

        <div>
          <p>With Icon</p>
          <div className="flex items-center space-x-4">
            <Button type="primary" variant="solid" icons={{ prefix: '🫡' }}>
              Button
            </Button>
            <Button
              type="primary"
              variant="solid"
              icons={{ prefix: '🤬', suffix: '😹' }}
            >
              Button
            </Button>
            <Button type="primary" variant="solid" icons={{ suffix: '😵‍💫' }}>
              Button
            </Button>
          </div>
        </div>

        <div>
          <p>Loading</p>

          <Checkbox
            checked={loading}
            onChange={(e) => setLoading(e.target.checked)}
          >
            Loading
          </Checkbox>

          <div className="flex items-center space-x-4">
            <Button
              type="primary"
              variant="solid"
              className=""
              loading={loading}
            >
              Solid
            </Button>
            <Button
              type="primary"
              variant="light-solid"
              className=""
              loading={loading}
            >
              Light Solid
            </Button>
            <Button
              type="primary"
              variant="outline"
              className=""
              loading={loading}
            >
              Outline
            </Button>
            <Button
              type="primary"
              variant="ghost"
              className=""
              loading={loading}
            >
              Ghost
            </Button>
            <Button
              type="primary"
              variant="text"
              className=""
              loading={loading}
            >
              Text
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              type="neutral"
              variant="solid"
              className=""
              loading={loading}
            >
              Solid
            </Button>
            <Button
              type="neutral"
              variant="light-solid"
              className=""
              loading={loading}
            >
              Light Solid
            </Button>
            <Button
              type="neutral"
              variant="outline"
              className=""
              loading={loading}
            >
              Outline
            </Button>
            <Button
              type="neutral"
              variant="ghost"
              className=""
              loading={loading}
            >
              Ghost
            </Button>
            <Button
              type="neutral"
              variant="text"
              className=""
              loading={loading}
            >
              Text
            </Button>
          </div>

          <p>With Delay 500ms</p>
          <div className="flex items-center space-x-4">
            <Button
              type="neutral"
              variant="solid"
              className=""
              loading={loading && { delay: 500 }}
            >
              Solid
            </Button>
            <Button
              type="neutral"
              variant="light-solid"
              className=""
              loading={loading && { delay: 500 }}
            >
              Light Solid
            </Button>
            <Button
              type="neutral"
              variant="outline"
              className=""
              loading={loading && { delay: 500 }}
            >
              Outline
            </Button>
            <Button
              type="neutral"
              variant="ghost"
              className=""
              loading={loading && { delay: 500 }}
            >
              Ghost
            </Button>
            <Button
              type="neutral"
              variant="text"
              className=""
              loading={loading && { delay: 500 }}
            >
              Text
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

ButtonPage.getLayout = getMainLayout

export default ButtonPage
