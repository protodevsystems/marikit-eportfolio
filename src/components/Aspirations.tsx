import { Reveal } from './Reveal'
import './Aspirations.css'

const milestones = [
  {
    when: 'Now',
    title: 'Master’s in Business Informatics',
    body: 'Completing my programme at ICL Graduate Business School — strengthening business analysis, project management, and strategic thinking on top of my IT foundation.',
  },
  {
    when: '2–3 years',
    title: 'IT ops meets informatics',
    body: 'Move from front-line technical support into IT business analysis, service delivery management, or systems support coordination.',
  },
  {
    when: 'Longer term',
    title: 'Lead service management',
    body: 'Grow into leadership within IT service management — combining technical grounding and cyber security exposure to help organisations run more securely and efficiently.',
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
            Path
            <em>forward</em>
          </h2>
          <p className="aspirations-lede">
            From study to service leadership — grounded in support excellence.
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
