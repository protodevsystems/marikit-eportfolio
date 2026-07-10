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
  {
    label: 'Location',
    value: 'Auckland, New Zealand',
    href: null,
  },
]

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <Reveal>
          <span className="section-label">Get in touch</span>
          <h2 className="section-title">Let&apos;s connect</h2>
          <p className="section-lead">
            I welcome networking opportunities, collaboration, and inquiries related to IT
            support, service desk roles, or professional connections. Happy to connect with
            fellow IT students, professionals, or potential employers.
          </p>
        </Reveal>

        <Reveal delayClass="reveal-delay-1" as="ul" className="contact-list">
          {channels.map((c) => (
            <li key={c.label}>
              <span className="contact-label">{c.label}</span>
              {c.href ? (
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {c.value}
                </a>
              ) : (
                <span>{c.value}</span>
              )}
            </li>
          ))}
        </Reveal>

        <Reveal delayClass="reveal-delay-2" className="contact-cv">
          <p>
            <strong>CV</strong> — available on request. Reach out by email or LinkedIn and
            I&apos;ll share the latest version.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
