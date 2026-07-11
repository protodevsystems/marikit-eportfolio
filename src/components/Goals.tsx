import { Reveal } from './Reveal'
import './Goals.css'

const personal = [
  {
    title: 'Strengthen technical IT competency',
    detail:
      'Deepen network administration, security fundamentals, and system troubleshooting beyond Level 1 — building on CompTIA Network+ and Security+ studies.',
  },
  {
    title: 'Develop project management skills',
    detail:
      'Build a working understanding of project management to contribute to IT projects and eventually take on coordination responsibilities.',
  },
  {
    title: 'Grow confidence in new environments',
    detail:
      'Keep building confidence applying technical knowledge in NZ workplaces — proposing ideas and taking initiative in team settings.',
  },
  {
    title: 'Build data and business analysis skills',
    detail:
      "Through my Master's, strengthen the ability to interpret data, understand business processes, and connect technical solutions to organisational needs.",
  },
]

const professional = [
  {
    title: 'Secure a service desk or IT support role',
    detail:
      'Land a New Zealand IT role where I can apply troubleshooting and customer service experience — ideally within the next 6–12 months.',
  },
  {
    title: "Complete my Master's in Business Informatics",
    detail:
      'Finish the programme to a high standard and use that knowledge to support a transition into more advanced IT and business-facing roles.',
  },
  {
    title: 'Expand my NZ IT network',
    detail:
      'Connect with IT professionals, attend industry events, and engage with local tech communities to support job search and long-term growth.',
  },
  {
    title: 'Progress toward a specialised or senior role',
    detail:
      'Within 3–5 years, move beyond entry-level support into cybersecurity, systems analysis, or IT project coordination.',
  },
]

export function Goals() {
  return (
    <section id="goals" className="goals">
      <div className="container goals-head">
        <Reveal>
          <span className="section-label">PPLG</span>
          <h2 className="goals-display">Learning goals</h2>
          <p className="goals-lede">
            Personal skills and professional targets guiding the next 1–3 years in IT
            support and service delivery.
          </p>
        </Reveal>
      </div>

      <div className="goals-boards">
        <Reveal className="goals-board goals-board--personal">
          <header>
            <span>01</span>
            <h3>Personal</h3>
            <p>Skills and competencies to develop</p>
          </header>
          <ul>
            {personal.map((g) => (
              <li key={g.title}>
                <strong>{g.title}</strong>
                <span>{g.detail}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delayClass="reveal-delay-1" className="goals-board goals-board--pro">
          <header>
            <span>02</span>
            <h3>Professional</h3>
            <p>Career objectives on the horizon</p>
          </header>
          <ul>
            {professional.map((g) => (
              <li key={g.title}>
                <strong>{g.title}</strong>
                <span>{g.detail}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
