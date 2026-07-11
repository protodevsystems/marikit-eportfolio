import { Reveal } from './Reveal'
import './Project.css'

type ProjectChapter = {
  label: string
  body?: string
  list?: string[]
}

const chapters: ProjectChapter[] = [
  {
    label: 'Challenge',
    body: `The organisation needed a clearer way to understand how international security standards aligned with New Zealand-specific requirements. There was a gap between ISO/IEC 27002:2022 and the New Zealand Information Security Manual (NZISM). Without a clear mapping, demonstrating compliance and supporting security audits was inefficient.`,
  },
  {
    label: 'Goals',
    list: [
      'Identify how ISO/IEC 27002:2022 controls corresponded to NZISM requirements',
      'Create a practical, reusable mapping tool for governance and audit teams',
      'Support broader information security risk assessment and compliance activities',
    ],
  },
  {
    label: 'Approach',
    body: `I developed the mapping tool end-to-end — researching both frameworks, gathering business requirements, cross-referencing controls and documenting gaps or partial matches, and writing findings so non-specialist audit stakeholders could use the tool. I also assisted with broader information security documentation and monitoring.`,
  },
  {
    label: 'Outcomes',
    body: `The completed tool gave the organisation a clear reference for aligning security practices with both an international standard and NZISM — supporting more efficient audits and reducing ambiguity in compliance. Personally, it deepened my understanding of information security governance and reinforced the value of clear documentation.`,
  },
]

export function Project() {
  return (
    <section id="project" className="project">
      <div className="project-top container">
        <Reveal className="project-intro">
          <span className="project-eyebrow">Featured work</span>
          <p className="project-kicker">Case study · 01</p>
          <h2 className="project-display">
            ISO/IEC 27002
            <span>→ NZISM</span>
          </h2>
          <p className="project-subtitle">Security mapping tool</p>
          <p className="project-meta">
            Cyber Security Intern · CIANAA Technologies · Auckland · 2022
          </p>
        </Reveal>

        <Reveal delayClass="reveal-delay-1" className="project-pull">
          <p>
            Bridging an international security standard with New Zealand&apos;s NZISM — so
            audits stop guessing and start aligning.
          </p>
        </Reveal>
      </div>

      <div className="project-grid container">
        {chapters.map((ch, i) => (
          <Reveal
            key={ch.label}
            as="article"
            className={`project-cell project-cell--${i + 1}`}
            delayClass={`reveal-delay-${(i % 3) + 1}`}
          >
            <span className="project-cell-mark" aria-hidden="true">
              {ch.label.charAt(0)}
            </span>
            <h3>
              <em>{String(i + 1).padStart(2, '0')}</em>
              {ch.label}
            </h3>
            {ch.body ? <p>{ch.body}</p> : null}
            {ch.list ? (
              <ul>
                {ch.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
