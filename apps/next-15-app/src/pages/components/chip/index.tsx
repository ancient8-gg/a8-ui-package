import { Chip } from '@ancient8/components'
import { getMainLayout } from '@/layouts/MainLayout'

function ChipPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-10 px-4 py-10">
      <h1 className="text-primary text-center text-4xl font-bold">Chips</h1>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Neutral Group */}
        <div className="space-y-8">
          <div className="flex flex-wrap gap-3">
            <Chip type="neutral">Chips</Chip>
            <Chip type="neutral" variant="outline">
              Chips
            </Chip>
          </div>

          <div className="flex flex-wrap gap-3">
            <Chip type="neutral" checked>
              Chips
            </Chip>
            <Chip type="neutral" variant="outline" checked>
              Chips
            </Chip>
          </div>

          <div className="flex flex-wrap gap-3">
            <Chip type="neutral" checked showIcon>
              Chips
            </Chip>
            <Chip type="neutral" checked showIcon closeIcon>
              Chips
            </Chip>
            <Chip type="neutral" showIcon>
              Chips
            </Chip>
            <Chip type="neutral" variant="outline" checked showIcon>
              Chips
            </Chip>
            <Chip type="neutral" variant="outline" checked showIcon closeIcon>
              Chips
            </Chip>
          </div>

          <div className="flex flex-wrap gap-3">
            <Chip type="neutral" variant="solid" disabled>
              Chips
            </Chip>
            <Chip type="neutral" variant="solid" checked showIcon disabled>
              Chips
            </Chip>
            <Chip type="neutral" variant="outline" disabled>
              Chips
            </Chip>
            <Chip type="neutral" variant="outline" checked showIcon disabled>
              Chips
            </Chip>
            <Chip
              type="neutral"
              variant="outline"
              checked
              showIcon
              closeIcon
              disabled
            >
              Chips
            </Chip>
          </div>
        </div>

        {/* Primary Group */}
        <div className="space-y-8">
          <div className="flex flex-wrap gap-3">
            <Chip type="primary">Chips</Chip>
            <Chip type="primary" variant="outline">
              Chips
            </Chip>
          </div>

          <div className="flex flex-wrap gap-3">
            <Chip type="primary" checked>
              Chips
            </Chip>
            <Chip type="primary" variant="outline" checked>
              Chips
            </Chip>
          </div>

          <div className="flex flex-wrap gap-3">
            <Chip type="primary" checked showIcon>
              Chips
            </Chip>
            <Chip type="primary" checked showIcon closeIcon>
              Chips
            </Chip>
            <Chip type="primary" showIcon>
              Chips
            </Chip>
            <Chip type="primary" variant="outline" checked showIcon>
              Chips
            </Chip>
            <Chip type="primary" variant="outline" checked showIcon closeIcon>
              Chips
            </Chip>
          </div>

          <div className="flex flex-wrap gap-3">
            <Chip type="primary" disabled>
              Chips
            </Chip>
            <Chip type="primary" checked showIcon disabled>
              Chips
            </Chip>
            <Chip type="primary" variant="outline" disabled>
              Chips
            </Chip>
            <Chip type="primary" variant="outline" checked showIcon disabled>
              Chips
            </Chip>
            <Chip
              type="primary"
              variant="outline"
              checked
              showIcon
              closeIcon
              disabled
            >
              Chips
            </Chip>
          </div>
        </div>
      </div>
    </section>
  )
}

ChipPage.getLayout = getMainLayout
export default ChipPage
