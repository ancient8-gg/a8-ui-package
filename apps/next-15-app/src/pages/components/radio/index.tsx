import { Button, RadioButton } from '@ancient8/components'

import { getMainLayout } from '@/layouts/MainLayout'

function ButtonPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-primary text-center text-4xl font-bold">Radio Button</h1>
      <h2 className="text-primary text-2xl font-bold">Base Usage</h2>

      <div className="mobile:flex-col flex gap-10">
        <div className="space-y-2">
          <p>State: Checked</p>
          <div className="flex items-center space-x-4">
            <RadioButton size="sm" value="Size SM" checked />
            <RadioButton size="md" value="Size MD" checked />
            <RadioButton size="lg" value="Size LG" checked />
          </div>

          <p>State: Unchecked</p>

          <div className="flex items-center space-x-4">
            <RadioButton size="sm" value="Size SM" checked={false} />
            <RadioButton size="md" value="Size MD" checked={false} />
            <RadioButton size="lg" value="Size LG" checked={false} />
          </div>

          <p>Disabled</p>

          <div className="flex items-center space-x-4">
            <RadioButton size="sm" value="Size SM" checked disabled />
            <RadioButton size="md" value="Size MD" checked disabled />
            <RadioButton size="lg" value="Size LG" checked disabled />
          </div>

          <div className="flex items-center space-x-4">
            <RadioButton size="sm" value="Size SM" checked={false} disabled />
            <RadioButton size="md" value="Size MD" checked={false} disabled />
            <RadioButton size="lg" value="Size LG" checked={false} disabled />
          </div>
        </div>
      </div>
    </section>
  )
}

ButtonPage.getLayout = getMainLayout

export default ButtonPage
