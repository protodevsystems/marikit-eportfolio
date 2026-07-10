import { Reveal } from './Reveal'
import './SelfAwareness.css'

const blocks = [
  {
    title: 'Strengths',
    body: `One of my greatest strengths is communicating technical information clearly to non-technical audiences. Through Level 1 support at Alorica, I developed strong troubleshooting and problem-solving skills while ensuring customers felt heard. I'm also highly adaptable — moving from administration to cybersecurity to further study in Business Informatics has meant constantly learning new systems and ways of thinking. Attention to detail and accurate documentation, built through roles at AIS Global and Ivoclar Vivadent, translate directly into service desk environments where ticketing integrity matters.`,
  },
  {
    title: 'Areas for growth',
    body: `While I have strong foundational IT knowledge, the industry evolves quickly. I'm deepening technical depth in network administration and cloud technologies through CompTIA Network+ and Security+ studies alongside my Master's. I also recognise that moving between industries and countries means continually building confidence in new professional environments — trusting that varied experience is an asset. Practical projects in this ePortfolio help me apply that knowledge more confidently in an IT-specific context.`,
  },
  {
    title: 'Reflection',
    body: `I see myself as someone who consistently takes on new challenges — relocating to a new country, transitioning industries, or returning to study later in my career. These experiences shaped someone who values continuous learning, adaptability, and genuine care for the people I support. Going forward, I'm focused on sharpening technical IT skills and building a career in service desk or IT support, bringing together technical training with strong interpersonal skills.`,
  },
]

export function SelfAwareness() {
  return (
    <section id="awareness" className="section awareness">
      <div className="container">
        <Reveal>
          <span className="section-label">Self-awareness</span>
          <h2 className="section-title">My self-awareness journey</h2>
          <p className="section-lead">
            Looking back, I would describe myself as a resilient, adaptable, and
            service-oriented individual who has built a diverse skill set across more than
            a decade in customer service, technical support, and IT-related roles.
          </p>
        </Reveal>

        <div className="awareness-list">
          {blocks.map((block, i) => (
            <Reveal
              key={block.title}
              as="article"
              className="awareness-block"
              delayClass={`reveal-delay-${i + 1}`}
            >
              <h3>{block.title}</h3>
              <p>{block.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
