import { Reveal } from './Reveal'
import './Contact.css'

const channels = [
  {
    label: 'Phone',
    value: '+64 22 512 1557',
    href: 'tel:+64225121557',
  },
  {
    label: 'Email',
    value: 'rdl.dpiosca@gmail.com',
    href: 'mailto:rdl.dpiosca@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/raphaelledpiosca',
    href: 'https://www.linkedin.com/in/raphaelledpiosca',
  },
]

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-shell container">
        <Reveal className="contact-stage">
          <div className="contact-stage-glow" aria-hidden="true" />
          <span className="contact-label">Get in touch</span>
          <h2 className="contact-display">
            Let&apos;s
            <br />
            talk
          </h2>
          <p className="contact-lede">
            Open to IT support and service desk opportunities, collaboration, and
            professional connections across Aotearoa.
          </p>
          <p className="contact-place">
            <span aria-hidden="true" />
            Auckland, New Zealand
          </p>
        </Reveal>

        <Reveal delayClass="reveal-delay-1" className="contact-panel">
          <ul className="contact-channels">
            {channels.map((c) => (
              <li key={c.label}>
                <span>{c.label}</span>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {c.value}
                  <em aria-hidden="true">↗</em>
                </a>
              </li>
            ))}
          </ul>
          <p className="contact-cv">
            CV available on request — reach out by email or LinkedIn and I&apos;ll share the
            latest version.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
