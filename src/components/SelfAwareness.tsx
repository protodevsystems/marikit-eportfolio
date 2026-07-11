import { Reveal } from './Reveal'
import './SelfAwareness.css'

const chapters = [
  {
    title: 'Strengths',
    tone: 'light',
    body: `One of my greatest strengths is communicating technical information clearly to non-technical audiences. Through Level 1 support at Alorica, I developed strong troubleshooting while ensuring customers felt heard. I'm highly adaptable — moving from administration to cybersecurity to Business Informatics has meant constantly learning new systems. Attention to detail and accurate documentation from AIS Global and Ivoclar Vivadent translate directly into service desk environments where ticketing integrity matters.`,
  },
  {
    title: 'Growth',
    tone: 'warm',
    body: `The industry evolves quickly, so I'm deepening technical depth in network administration and cloud through CompTIA Network+ and Security+ alongside my Master's. Moving between industries and countries means continually building confidence in new professional environments — trusting that varied experience is an asset. Practical projects in this ePortfolio help me apply that knowledge more confidently in an IT-specific context.`,
  },
  {
    title: 'Reflection',
    tone: 'deep',
    body: `I consistently take on new challenges — relocating, transitioning industries, returning to study later in my career. Those experiences shaped someone who values continuous learning, adaptability, and genuine care for the people I support. Going forward, I'm sharpening technical IT skills and building a career in service desk or IT support — bringing technical training together with strong interpersonal skills.`,
  },
]

export function SelfAwareness() {
  return (
    <section id="awareness" className="awareness">
      <div className="container awareness-head">
        <Reveal>
          <span className="section-label">Self-awareness</span>
          <h2 className="awareness-display">Look inward</h2>
          <p className="awareness-lede">
            Resilient, adaptable, and service-oriented — with a decade across customer
            service, technical support, and IT-related roles.
          </p>
        </Reveal>
      </div>

      <div className="awareness-flow">
        {chapters.map((c, i) => (
          <Reveal
            key={c.title}
            as="article"
            className={`awareness-row awareness-row--${c.tone}`}
            delayClass={`reveal-delay-${i + 1}`}
          >
            <div className="awareness-row-inner container">
              <header className="awareness-row-head">
                <span className="awareness-row-index" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3>{c.title}</h3>
              </header>
              <p>{c.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
