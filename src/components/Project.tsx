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
    body: `During my Cyber Security internship at CIANAA Technologies, the organisation needed a clearer way to understand how international security standards aligned with New Zealand-specific requirements. Specifically, there was a gap between the internationally recognised ISO/IEC 27002:2022 framework (a set of guidelines for information security controls) and the New Zealand Information Security Manual (NZISM), which government and many private organisations in New Zealand use as their security governance benchmark. Without a clear mapping between the two, it was difficult for the organisation to demonstrate compliance and support security audits efficiently.`,
  },
  {
    label: 'Goals',
    list: [
      'Identify how ISO/IEC 27002:2022 controls corresponded to relevant NZISM requirements',
      'Create a practical, reusable mapping tool that governance and audit teams could reference',
      'Support broader information security risk assessment and compliance activities',
    ],
  },
  {
    label: 'Approach',
    body: `I was directly responsible for developing this mapping tool. Throughout the process, I also assisted with maintaining broader information security documentation and monitoring, which gave me a fuller picture of how the mapping tool fit into the organisation's overall security governance activities.`,
    list: [
      'Researching both frameworks in depth to understand the structure, intent, and terminology used in each',
      'Gathering business requirements by identifying what the organisation needed from a compliance and audit standpoint',
      'Systematically mapping controls, cross-referencing each ISO/IEC 27002 control against its NZISM equivalent (where one existed), and documenting any gaps or partial matches',
      'Documenting findings clearly, so the tool could be understood and used by people without deep technical security backgrounds',
    ],
  },
  {
    label: 'Outcomes',
    body: `The completed mapping tool gave the organisation a clear, structured reference for aligning its security practices with both an internationally recognised standard and the New Zealand-specific NZISM framework. This supported more efficient security audits and governance reviews, and reduced the ambiguity previously involved in demonstrating compliance across two separate frameworks. On a personal level, this project deepened my understanding of information security governance and reinforced the value of clear documentation — a skill I've carried into every technical role since.`,
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
          <p className="project-subtitle">Security Mapping Tool</p>
          <p className="project-meta">
            Cyber Security Intern · CIANAA Technologies · Auckland, New Zealand · 2022
          </p>
        </Reveal>

        <Reveal delayClass="reveal-delay-1" className="project-pull">
          <p>
            Bridging ISO/IEC 27002:2022 with New Zealand&apos;s NZISM — so audits stop guessing
            and start aligning.
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
