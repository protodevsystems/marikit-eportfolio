import { Reveal } from './Reveal'
import './Goals.css'

const personal = [
  {
    title: 'Strengthen technical IT competency',
    detail:
      'Deepen practical knowledge of network administration, security fundamentals, and system troubleshooting beyond Level 1 support — building on CompTIA Network+ and Security+ studies.',
  },
  {
    title: 'Develop project management skills',
    detail:
      'Build a working understanding of project management to contribute to IT projects and eventually take on coordination responsibilities.',
  },
  {
    title: 'Grow confidence in new environments',
    detail:
      'Continue building confidence applying technical knowledge in the New Zealand workplace — proposing ideas and taking initiative in team settings.',
  },
  {
    title: 'Build data and business analysis skills',
    detail:
      'Through my Master\'s in Business Informatics, strengthen the ability to interpret data, understand business processes, and connect technical solutions to organisational needs.',
  },
]

const professional = [
  {
    title: 'Secure a service desk or IT support role',
    detail:
      'Obtain a New Zealand IT role where I can apply technical troubleshooting and customer service experience — ideally within the next 6–12 months.',
  },
  {
    title: 'Complete my Master\'s in Business Informatics',
    detail:
      'Finish the programme to a high standard and use that knowledge to support a transition into more advanced IT and business-facing roles.',
  },
  {
    title: 'Expand my NZ IT network',
    detail:
      'Connect with IT professionals, attend industry events or meetups, and engage with local tech communities to support job search and long-term growth.',
  },
  {
    title: 'Progress toward a specialised or senior role',
    detail:
      'Within 3–5 years, move beyond entry-level support into cybersecurity, systems analysis, or IT project coordination.',
  },
]

export function Goals() {
  return (
    <section id="goals" className="section goals">
      <div className="container">
        <Reveal>
          <span className="section-label">PPLG</span>
          <h2 className="section-title">Personal &amp; professional learning goals</h2>
          <p className="section-lead">
            Goals that guide my growth over the next 1–3 years as I build a career in IT
            support and service delivery in New Zealand.
          </p>
        </Reveal>

        <div className="goals-columns">
          <Reveal delayClass="reveal-delay-1" className="goals-col">
            <h3>Personal</h3>
            <p className="goals-focus">Skills and competencies I want to develop</p>
            <ul>
              {personal.map((g) => (
                <li key={g.title}>
                  <strong>{g.title}</strong>
                  <span>{g.detail}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delayClass="reveal-delay-2" className="goals-col">
            <h3>Professional</h3>
            <p className="goals-focus">Specific career objectives</p>
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
      </div>
    </section>
  )
}
