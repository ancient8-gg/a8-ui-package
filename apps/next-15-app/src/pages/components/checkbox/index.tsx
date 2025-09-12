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
          <p className="text-base">Variants</p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span>Solid:</span> <Checkbox variant="solid" checked={true} />
            </div>
            <div className="flex items-center gap-2">
              <span>Outline:</span>{' '}
              <Checkbox variant="outline" checked={true} />
            </div>
            <div className="flex items-center gap-2">
              <span>Transparent:</span>{' '}
              <Checkbox variant="transparent" checked={true} />
            </div>
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
            <Checkbox variant="outline" checked={true} disabled />
          </div>
        </div>

        <div>
          <p className="text-base">Sizes (xxxs - xxs)</p>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Checkbox size="xxxs" checked={false} />
              <Checkbox size="xxs" checked={false} />
            </div>

            <div className="flex gap-4">
              <Checkbox size="xxxs" checked={true} />
              <Checkbox size="xxs" checked={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

CheckboxPage.getLayout = getMainLayout

export default CheckboxPage
