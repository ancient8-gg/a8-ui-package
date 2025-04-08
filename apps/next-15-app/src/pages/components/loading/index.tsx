import { Loading } from '@ancient8/components'

import { getMainLayout } from '@/layouts/MainLayout'

function ButtonPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-primary text-center text-4xl font-bold">Loading</h1>
      <h2 className="text-primary text-2xl font-bold">Base Usage</h2>

      <div className="mobile:flex-col flex gap-10">
        <div className="space-y-2">
          <p>Type: Primary</p>

          <div className="flex gap-4">
            <div className="flex flex-col items-center justify-center">
              <p>Material</p>

              <Loading />
            </div>

            <div className="flex flex-col items-center justify-center">
              <p>Ball Rotate</p>

              <Loading variant="ball-rotate" />
            </div>

            <div className="flex flex-col items-center justify-center">
              <p>Ball Spin</p>

              <Loading variant="ball-spin" />
            </div>

            <div className="flex flex-col items-center justify-center">
              <p>Cupertino</p>

              <Loading variant="cupertino" />
            </div>

            <div className="flex flex-col items-center justify-center">
              <p>Sync</p>

              <Loading variant="sync" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p>Type: Neutral</p>

          <div className="flex gap-4">
            <div className="flex flex-col items-center justify-center">
              <p>Material</p>

              <Loading type="neutral" />
            </div>

            <div className="flex flex-col items-center justify-center">
              <p>Ball Rotate</p>

              <Loading type="neutral" variant="ball-rotate" />
            </div>

            <div className="flex flex-col items-center justify-center">
              <p>Ball Spin</p>

              <Loading type="neutral" variant="ball-spin" />
            </div>

            <div className="flex flex-col items-center justify-center">
              <p>Cupertino</p>

              <Loading type="neutral" variant="cupertino" />
            </div>

            <div className="flex flex-col items-center justify-center">
              <p>Sync</p>

              <Loading type="neutral" variant="sync" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ButtonPage.getLayout = getMainLayout

export default ButtonPage
