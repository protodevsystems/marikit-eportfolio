import { useEffect, useState } from 'react'
import { BrandMark } from './BrandMark'
import { HeroVisual } from './HeroVisual'
import './Hero.css'

export function Hero() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    console.log('[Hero] entrance sequence starting (split + video)')
    const t = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(t)
  }, [])

  return (
    <section id="top" className={`hero ${ready ? 'is-ready' : ''}`}>
      <HeroVisual />

      <div className="hero-stage">
        <div className="hero-stage-copy">
          <div className="hero-brand">
            <BrandMark className="hero-brand-mark" size={88} />
            <h1 className="hero-brand-lockup">
              <span className="hero-brand-name">Raphaelle</span>
              <span className="hero-brand-surname">Piosca</span>
            </h1>
          </div>

          <p className="hero-tagline">
            Technical support that listens.
            <br />
            Solutions that stick.
          </p>
          <div className="hero-cta">
            <a className="btn btn-glass" href="#project">
              View work
              <span aria-hidden="true">↗</span>
            </a>
            <a className="btn btn-hero-ghost" href="#about">
              About me
            </a>
          </div>
        </div>
      </div>

      <aside className="hero-panel">
        <div className="hero-panel-top" aria-hidden="true" />

        <div className="hero-availability">
          <p className="hero-availability-label">
            Available for
            <span className="hero-availability-dot" aria-hidden="true" />
          </p>
          <h2 className="hero-availability-title">Service Desk &amp; IT Support</h2>
          <p className="hero-availability-lead">
            Calm, capable support for New Zealand teams.
          </p>
          <p className="hero-availability-place">
            <span className="hero-place-pin" aria-hidden="true" />
            Auckland, New Zealand
          </p>
        </div>
      </aside>
    </section>
  )
}
