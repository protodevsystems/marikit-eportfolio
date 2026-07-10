import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} Raphaelle Piosca</p>
        <p className="footer-note">ePortfolio · Auckland, New Zealand</p>
      </div>
    </footer>
  )
}
