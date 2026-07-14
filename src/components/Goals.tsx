import { Reveal } from './Reveal'
import './Goals.css'

const personal = [
  {
    title: 'Strengthen technical IT competency in networking and cybersecurity',
    detail:
      'Building on my CompTIA Network+ and Security+ studies, I aim to deepen my practical knowledge of network administration, security fundamentals, and system troubleshooting, so I can move beyond Level 1 support into more technically demanding IT roles.',
  },
  {
    title: 'Develop stronger project management skills',
    detail:
      'I want to build a working understanding of project management so I can contribute more effectively to IT projects and eventually take on coordination responsibilities within a service desk or IT team.',
  },
  {
    title: 'Improve confidence in a new professional environment',
    detail:
      'Having transitioned between countries and industries, I want to continue building confidence in applying my technical knowledge within the New Zealand workplace context — including becoming more comfortable proposing ideas and taking initiative in team settings.',
  },
  {
    title: 'Build data and business analysis skills',
    detail:
      "Through my Master's in Business Informatics, I aim to strengthen my ability to interpret data, understand business processes, and connect technical solutions to organisational needs — a skill set that will make me more valuable in IT support and future analyst-type roles.",
  },
]

const professional = [
  {
    title: 'Secure a Service Desk or IT Support role in New Zealand',
    detail:
      'My immediate professional goal is to obtain a role where I can apply my technical troubleshooting and customer service background in a New Zealand IT environment, ideally within the next 6–12 months.',
  },
  {
    title: "Complete my Master's in Business Informatics",
    detail:
      'I aim to complete my Masters at the end of this year to a high standard, using the knowledge gained to support my transition into more advanced IT and business-facing roles.',
  },
  {
    title: 'Expand my professional network within the NZ IT industry',
    detail:
      'I plan to actively grow my professional network by connecting with IT professionals, attending industry events or meetups, and engaging with communities such as local tech groups — supporting both my job search and long-term career development. Connect with 100 NZ IT professionals on LinkedIn and attend at least four Auckland technology networking events within the next twelve months.',
  },
  {
    title: 'Progress toward a specialised or senior IT role within 3–5 years',
    detail:
      'Longer term, I aim to move beyond entry-level support into a more specialised area of IT — potentially cybersecurity, systems analysis, or IT project coordination — building on the interests I developed during my cybersecurity internship and postgraduate studies.',
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
            As I work toward building a career in IT support and service delivery in New
            Zealand, these learning goals guide my personal and professional growth over the
            next 1–3 years — grounded in the skills I&apos;ve built so far and the areas I
            need to strengthen.
          </p>
        </Reveal>
      </div>

      <div className="goals-boards">
        <Reveal className="goals-board goals-board--personal">
          <header>
            <span>01</span>
            <h3>Personal</h3>
            <p>Skills and competencies I want to develop</p>
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
            <p>Specific career objectives</p>
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
