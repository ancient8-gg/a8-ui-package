import { useState } from 'react'
import { Checkbox } from '@ancient8/components'

import { getMainLayout } from '@/layouts/MainLayout'

function CheckboxPage() {
  const [checked, setChecked] = useState(false)

  return (
    <section className="space-y-4">
      <h1 className="text-primary text-center text-4xl font-bold">Checkbox</h1>

      <div className="flex flex-col gap-10">
        <div>
          <p className="text-base">Checked: {checked ? 'true' : 'false'}</p>
          <div className="flex items-center gap-4">
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          </div>
        </div>

        <div>
          <p className="text-base">Checked default</p>
          <Checkbox checked={true} />
        </div>

        <div>
          <p className="text-base">Disabled</p>
          <div className="flex gap-4">
            <Checkbox disabled />
            <Checkbox checked={true} disabled />
          </div>
        </div>

        <div>
          <p className="text-base">Sizes</p>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Checkbox size="xs" checked={false} />
              <Checkbox size="sm" checked={false} />
              <Checkbox size="md" checked={false} />
              <Checkbox size="lg" checked={false} />
            </div>

            <div className="flex gap-4">
              <Checkbox size="xs" checked={true} />
              <Checkbox size="sm" checked={true} />
              <Checkbox size="md" checked={true} />
              <Checkbox size="lg" checked={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

CheckboxPage.getLayout = getMainLayout

export default CheckboxPage
