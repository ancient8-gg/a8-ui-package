import { Switch } from '@ancient8/components'
import { useState } from 'react'

import { getMainLayout } from '@/layouts/MainLayout'

function SwitchPage() {
  const [checkedSM, setCheckSM] = useState(false)
  const [checkedMD, setCheckMD] = useState(false)
  const [checkedLG, setCheckLG] = useState(false)

  return (
    <section className="space-y-4">
      <h1 className="text-primary text-center text-4xl font-bold">Switch</h1>
      <h2 className="text-primary text-2xl font-bold">Base Usage</h2>

      <div className="mobile:flex-col flex gap-10">
        <div className="space-y-2">
          <p>State: Checked</p>
          <div className="flex items-center space-x-4">
            <Switch size="sm" checked />
            <Switch size="md" checked />
            <Switch size="lg" checked />
          </div>

          <p>State: Unchecked</p>

          <div className="flex items-center space-x-4">
            <Switch size="sm" checked={false} />
            <Switch size="md" checked={false} />
            <Switch size="lg" checked={false} />
          </div>

          <p>Disabled</p>

          <div className="flex items-center space-x-4">
            <Switch size="sm" checked disabled />
            <Switch size="md" checked disabled />
            <Switch size="lg" checked disabled />
          </div>

          <div className="flex items-center space-x-4">
            <Switch size="sm" checked={false} disabled />
            <Switch size="md" checked={false} disabled />
            <Switch size="lg" checked={false} disabled />
          </div>

          <p>Dynamic</p>

          <div className="flex items-center space-x-4">
            <Switch
              size="sm"
              checked={checkedSM}
              onChange={() => setCheckSM((prev) => !prev)}
            />
            <Switch
              size="md"
              checked={checkedMD}
              onChange={() => setCheckMD((prev) => !prev)}
            />
            <Switch
              size="lg"
              checked={checkedLG}
              onChange={() => setCheckLG((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

SwitchPage.getLayout = getMainLayout

export default SwitchPage
