import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFilePdf, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Reveal } from './Reveal'
import './Contact.css'

const channels: {
  label: string
  value: string
  href: string
  icon: IconDefinition
}[] = [
  {
    label: 'Phone',
    value: '+64 22 512 1557',
    href: 'tel:+64225121557',
    icon: faPhone,
  },
  {
    label: 'Email',
    value: 'rdl.dpiosca@gmail.com',
    href: 'mailto:rdl.dpiosca@gmail.com',
    icon: faEnvelope,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/raphaelledpiosca',
    href: 'https://www.linkedin.com/in/raphaelledpiosca',
    icon: faLinkedin,
  },
  {
    label: 'Facebook',
    value: 'facebook.com/kitkit.piosca',
    href: 'https://www.facebook.com/kitkit.piosca',
    icon: faFacebook,
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
            I welcome networking opportunities, collaboration, and inquiries related to IT
            support, service desk roles, or professional connections. Feel free to reach out
            through any of the channels below.
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
                <span className="contact-channel-icon" aria-hidden="true">
                  <FontAwesomeIcon icon={c.icon} />
                </span>
                <div className="contact-channel-copy">
                  <span className="contact-channel-label">{c.label}</span>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {c.value}
                    <em aria-hidden="true">↗</em>
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <div className="contact-cv">
            <p>
              I&apos;m happy to connect with fellow IT students, professionals, or potential
              employers — don&apos;t hesitate to get in touch.
            </p>
            <a
              className="contact-cv-btn"
              href="/docs/Raphaelle-Dayao-Piosca-CV.pdf"
              download
              target="_blank"
              rel="noreferrer"
              onClick={() => console.log('[Contact] CV download clicked')}
            >
              <FontAwesomeIcon icon={faFilePdf} />
              Download CV (PDF)
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
