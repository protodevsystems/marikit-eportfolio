import { useEffect, useState, type CSSProperties } from 'react'
import { BrandMark } from './BrandMark'
import './Nav.css'

const links = [
  { href: '#project', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#aspirations', label: 'Path' },
  { href: '#goals', label: 'Goals' },
  { href: '#journals', label: 'Journals' },
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
    console.log('[Nav] mobile menu open — locking scroll')
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        console.log('[Nav] Escape closed menu')
        setMenuOpen(false)
      }
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`nav ${ready ? 'is-ready' : ''} ${scrolled ? 'is-scrolled' : ''} ${
          menuOpen ? 'is-open' : ''
        }`}
      >
        <a className="nav-brand" href="#top" onClick={closeMenu}>
          <span className="nav-mark">
            <BrandMark size={32} />
          </span>
          <span className="nav-brand-text">
            Raphaelle
            <span className="nav-brand-sub">Piosca</span>
          </span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact">
            Let&apos;s talk
          </a>
        </nav>

        <button
          className="nav-menu"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
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

      {/* Sibling overlay — must stay outside .nav so backdrop-filter cannot trap fixed positioning */}
      <div
        id="mobile-nav"
        className={`nav-drawer ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="nav-drawer-panel">
          <p className="nav-drawer-label">Navigate</p>
          <ul className="nav-drawer-list">
            {links.map((link, i) => (
              <li key={link.href} style={{ '--i': i } as CSSProperties}>
                <a href={link.href} tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>
                  <span className="nav-drawer-index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="nav-drawer-link">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            className="nav-drawer-cta"
            href="#contact"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => {
              console.log('[Nav] CTA Let’s talk')
              closeMenu()
            }}
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </>
  )
}
