import { useEffect, useState } from 'react'
import { HeroVisual } from './HeroVisual'
import './Hero.css'

export function Hero() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    console.log('[Hero] entrance sequence starting')
    const t = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(t)
  }, [])

  return (
    <section id="top" className={`hero ${ready ? 'is-ready' : ''}`}>
      <div className="hero-glow" aria-hidden="true" />

      <p className="hero-copy hero-intro">
        Kia ora — I&apos;m an IT professional based in Auckland with over a decade across
        customer service, technical support, and service desk environments.
      </p>

      <h1 className="hero-name" aria-label="Raphaelle Piosca">
        <span>Raphaelle</span>
        <span>Piosca</span>
      </h1>

      <HeroVisual />

      <p className="hero-copy hero-mission">
        Building a career where technical troubleshooting meets clear communication —
        and continuous learning never stops.
      </p>

      <div className="hero-cta">
        <a className="btn btn-primary" href="#project">
          View work
          <span aria-hidden="true">→</span>
        </a>
        <a className="btn btn-ghost" href="#contact">
          Get in touch
        </a>
      </div>

      <p className="hero-meta">
        <span className="hero-dot" aria-hidden="true" />
        Open to service desk &amp; IT support roles · Auckland, NZ
      </p>

      <div className="hero-scroll" aria-hidden="true">
        Scroll
      </div>
    </section>
  )
}
