type BrandMarkProps = {
  className?: string
  /** Height in px; width follows the logo’s natural aspect ratio. */
  size?: number
}

/** RDP keycap brand mark — used compact in nav/footer, large in hero. */
export function BrandMark({ className = '', size = 32 }: BrandMarkProps) {
  const width = Math.round(size * (300 / 220))

  return (
    <img
      className={`brand-mark ${className}`.trim()}
      src="/images/kit-logo.png"
      alt=""
      width={width}
      height={size}
      decoding="async"
      aria-hidden="true"
    />
  )
}
