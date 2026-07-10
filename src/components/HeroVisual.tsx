/**
 * HeroVisual — dedicated portrait wrapper.
 * Swap the <img> for a React Three Fiber / 3D treatment later
 * without touching Hero copy or layout chrome.
 */
export function HeroVisual() {
  return (
    <div className="hero-visual" data-hero-visual>
      <img
        src="/images/hero-graduation.jpg"
        alt="Raphaelle Piosca in graduation attire"
        width={640}
        height={800}
        fetchPriority="high"
      />
    </div>
  )
}
