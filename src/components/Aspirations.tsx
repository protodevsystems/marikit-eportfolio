import { Reveal } from './Reveal'
import './Aspirations.css'

const milestones = [
  {
    when: 'Immediate',
    title: 'Master’s in Business Informatics',
    body: `Complete my Master's in Business Informatics at ICL Graduate Business School, building on my IT foundation with stronger business analysis, project management, and strategic thinking capability.`,
  },
  {
    when: '2–3 years',
    title: 'IT Ops × Business Informatics',
    body: `Move from front-line technical support into a role that blends IT operations with business informatics — such as IT business analysis, service delivery management, or systems support coordination.`,
  },
  {
    when: 'Longer term',
    title: 'Lead IT Service Management',
    body: `Grow into a leadership position within IT service management, combining my technical grounding and cyber security exposure to help organisations run more securely and efficiently.`,
  },
]

export function Aspirations() {
  return (
    <section id="aspirations" className="aspirations">
      <div className="aspirations-glow" aria-hidden="true" />

      <div className="aspirations-layout container">
        <Reveal className="aspirations-brand">
          <span className="aspirations-label">Looking ahead</span>
          <h2 className="aspirations-display">
            Career
            <em>aspirations</em>
          </h2>
          <p className="aspirations-lede">
            From study, into blended IT operations, toward service management leadership.
          </p>
        </Reveal>

        <ol className="aspirations-steps">
          {milestones.map((m, i) => (
            <Reveal
              key={m.when}
              as="li"
              className="aspirations-step"
              delayClass={`reveal-delay-${i + 1}`}
            >
              <div className="aspirations-step-index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="aspirations-step-copy">
                <p className="aspirations-when">{m.when}</p>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
