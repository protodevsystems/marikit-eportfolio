import { useEffect, useState } from 'react'
import './Nav.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#aspirations', label: 'Path' },
  { href: '#project', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    console.log('[Nav] mounted')
    const t = requestAnimationFrame(() => setReady(true))
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(t)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header className={`nav ${ready ? 'is-ready' : ''} ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="nav-brand" href="#top">
        Raphaelle
      </a>
      <nav className="nav-pill" aria-label="Primary">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a
        className="nav-linkedin"
        href="https://www.linkedin.com/in/raphaelledpiosca"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </header>
  )
}
