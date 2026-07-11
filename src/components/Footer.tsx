import { BrandMark } from './BrandMark'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="footer-brand" href="#top">
          <BrandMark size={28} />
          <span>Raphaelle Piosca</span>
        </a>
        <p className="footer-note">ePortfolio · Auckland, New Zealand · {year}</p>
      </div>
    </footer>
  )
}
