import { useEffect, useState } from 'react'
import { BrandMark } from './BrandMark'
import './Nav.css'

const links = [
  { href: '#project', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#aspirations', label: 'Path' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [ready, setReady] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    console.log('[Nav] mounted')
    const t = requestAnimationFrame(() => setReady(true))
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(t)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  return (
    <header
      className={`nav ${ready ? 'is-ready' : ''} ${scrolled ? 'is-scrolled' : ''} ${
        menuOpen ? 'is-open' : ''
      }`}
    >
      <a className="nav-brand" href="#top" onClick={() => setMenuOpen(false)}>
        <span className="nav-mark">
          <BrandMark size={32} />
        </span>
        <span className="nav-brand-text">
          Raphaelle
          <span className="nav-brand-sub">Piosca</span>
        </span>
      </a>

      <nav className="nav-links" aria-label="Primary">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
          Let&apos;s talk
        </a>
      </nav>

      <button
        className="nav-menu"
        type="button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => {
          console.log('[Nav] menu toggled', !menuOpen)
          setMenuOpen((open) => !open)
        }}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}
