import { Button } from '@ancient8/components'

import { getMainLayout } from '@/layouts/MainLayout'

function ButtonPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-primary text-center text-4xl font-bold">Button</h1>
      <h2 className="text-primary text-2xl font-bold">Base Usage</h2>

      <div className="mobile:flex-col flex gap-10">
        <div className="space-y-2">
          <p>Type: Primary</p>

          <div className="flex items-center space-x-4">
            <Button type="primary">Solid</Button>
            <Button type="primary" variant="lightSolid">
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
            <Button type="primary" variant="lightSolid" disabled>
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

        <div className="space-y-2">
          <p>Type: Neutral</p>

          <div className="flex items-center space-x-4">
            <Button type="neutral">Solid</Button>
            <Button type="neutral" variant="lightSolid">
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
            <Button type="neutral" variant="lightSolid" disabled>
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
    </section>
  )
}

ButtonPage.getLayout = getMainLayout

export default ButtonPage
