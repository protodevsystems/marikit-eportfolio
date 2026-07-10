import { Reveal } from './Reveal'
import './Project.css'

export function Project() {
  return (
    <section id="project" className="section project">
      <div className="container">
        <Reveal>
          <span className="section-label">Featured work</span>
          <h2 className="section-title">
            ISO/IEC 27002 to NZISM security mapping tool
          </h2>
          <p className="project-meta">
            Cyber Security Intern · CIANAA Technologies · Auckland, New Zealand · 2022
          </p>
        </Reveal>

        <div className="project-grid">
          <Reveal delayClass="reveal-delay-1" className="project-block">
            <h3>The challenge</h3>
            <p>
              The organisation needed a clearer way to understand how international
              security standards aligned with New Zealand-specific requirements. There was
              a gap between ISO/IEC 27002:2022 and the New Zealand Information Security
              Manual (NZISM). Without a clear mapping, demonstrating compliance and
              supporting security audits was inefficient.
            </p>
          </Reveal>

          <Reveal delayClass="reveal-delay-2" className="project-block">
            <h3>Goals</h3>
            <ul>
              <li>
                Identify how ISO/IEC 27002:2022 controls corresponded to NZISM requirements
              </li>
              <li>
                Create a practical, reusable mapping tool for governance and audit teams
              </li>
              <li>
                Support broader information security risk assessment and compliance
                activities
              </li>
            </ul>
          </Reveal>

          <Reveal delayClass="reveal-delay-1" className="project-block">
            <h3>My role &amp; approach</h3>
            <p>
              I was directly responsible for developing the mapping tool — researching both
              frameworks in depth, gathering business requirements, systematically
              cross-referencing controls and documenting gaps or partial matches, and
              writing findings so non-specialist audit stakeholders could use the tool.
              I also assisted with broader information security documentation and
              monitoring.
            </p>
          </Reveal>

          <Reveal delayClass="reveal-delay-2" className="project-block project-outcome">
            <h3>Outcomes</h3>
            <p>
              The completed tool gave the organisation a clear reference for aligning
              security practices with both an international standard and NZISM — supporting
              more efficient audits and reducing ambiguity in compliance. Personally, it
              deepened my understanding of information security governance and reinforced
              the value of clear documentation.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
