type BrandMarkProps = {
  className?: string
  size?: number
}

/** Shared Raphaelle brand mark — used compact in nav, large in hero. */
export function BrandMark({ className = '', size = 32 }: BrandMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="9"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10.5 23V9h6.2c2.85 0 4.55 1.55 4.55 3.85 0 1.7-.95 2.95-2.55 3.45L22.5 23h-3.15l-3.55-5.85H13.4V23H10.5Zm2.9-8.35h3.15c1.35 0 2.1-.7 2.1-1.75s-.75-1.7-2.1-1.7H13.4v3.45Z"
        fill="currentColor"
      />
      <circle cx="24.2" cy="8.2" r="2.1" className="brand-mark-dot" />
    </svg>
  )
}
