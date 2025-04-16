import { Tooltip } from '@ancient8/components'
import { getMainLayout } from '@/layouts/MainLayout'

const sizes = ['sm', 'md', 'lg'] as const
const variants = ['solid', 'plain'] as const
const positions = ['top', 'right', 'bottom', 'left'] as const

function TooltipPage() {
  return (
    <section className="space-y-10">
      <h1 className="text-primary text-center text-4xl font-bold">Tooltip</h1>

      {/* Size Variants */}
      <div className="space-y-8">
        <h2 className="text-primary text-2xl font-bold">Size Variants</h2>
        <div className="flex gap-4">
          {sizes.map((size) => (
            <Tooltip
              key={size}
              size={size}
              content={`Size ${size.toUpperCase()}`}
            >
              <button className="rounded bg-white/10 px-4 py-2 text-white">
                {size}
              </button>
            </Tooltip>
          ))}
        </div>
      </div>

      {/* Style Variants */}
      <div className="space-y-8">
        <h2 className="text-primary text-2xl font-bold">Style Variants</h2>
        <div className="flex gap-4">
          {variants.map((variant) => (
            <Tooltip
              key={variant}
              variant={variant}
              content={`Variant: ${variant}`}
            >
              <button className="rounded bg-white/10 px-4 py-2 text-white">
                {variant}
              </button>
            </Tooltip>
          ))}
        </div>
      </div>

      {/* Position Variants */}
      <div className="space-y-8">
        <h2 className="text-primary text-2xl font-bold">
          Position & Size Variants
        </h2>
        <div className="space-y-20">
          {sizes.map((size) => (
            <div key={size}>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Size: {size}
              </h3>
              <div className="flex flex-wrap gap-40">
                {positions.map((pos) => (
                  <Tooltip
                    key={`${size}-${pos}`}
                    position={pos}
                    size={size}
                    content={`${pos} |${size}`}
                  >
                    <button className="min-w-[40px] rounded bg-white/10 px-4 py-2 text-white">
                      {pos}
                    </button>
                  </Tooltip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

TooltipPage.getLayout = getMainLayout

export default TooltipPage
