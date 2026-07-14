import { Reveal } from './Reveal'
import './SelfAwareness.css'

const chapters = [
  {
    title: 'Strengths',
    tone: 'light',
    paragraphs: [
      `One of my greatest strengths is my ability to communicate technical information clearly to non-technical audiences. Through roles such as my time at Alorica providing Level 1 technical support, I developed strong troubleshooting and problem-solving skills while ensuring customers felt heard and supported, even when dealing with frustrating technical issues. I'm also highly adaptable — moving from administrative work, to cybersecurity, to customer service, and now to further study in Business Informatics has required me to constantly learn new systems, tools, and ways of thinking, and I've consistently risen to that challenge.`,
      `My attention to detail and commitment to documentation and accuracy, developed through roles like my administrative work at AIS Global and my technical encoding work at Ivoclar Vivadent, has taught me the importance of maintaining data integrity and following structured processes — skills that translate directly into service desk and IT support environments where accurate ticketing and documentation are critical.`,
    ],
  },
  {
    title: 'Areas for Growth',
    tone: 'warm',
    paragraphs: [
      `While I have strong foundational IT knowledge, I recognise that the IT industry evolves rapidly, and I need to continue building my technical depth, particularly in areas like network administration and cloud technologies, to stay competitive in the New Zealand IT job market. I'm currently addressing this through my CompTIA Network+ and Security+ studies, as well as my Master's degree, but I know this is an ongoing process rather than a destination.`,
      `I also recognise that, as someone who has moved between industries and countries, I sometimes need to work on building confidence in a new professional environment — trusting that my varied experience is an asset rather than something to second-guess. My Master's studies, along with practical projects in this ePortfolio, are helping me apply my knowledge more confidently in an IT-specific context.`,
    ],
  },
  {
    title: 'Reflection',
    tone: 'deep',
    paragraphs: [
      `Overall, I see myself as someone who has consistently taken on new challenges, whether that meant relocating to a new country, transitioning industries, or returning to study later in my career. These experiences have shaped me into someone who values continuous learning, adaptability, and genuine care for the people I work with and support. Going forward, I'm focused on sharpening my technical IT skills further and building a career in service desk or IT support, where I can bring together my technical training with the strong interpersonal skills I've developed throughout my working life.`,
    ],
  },
]

export function SelfAwareness() {
  return (
    <section id="awareness" className="awareness">
      <div className="container awareness-head">
        <Reveal>
          <span className="section-label">Self-awareness</span>
          <h2 className="awareness-display">My journey</h2>
          <p className="awareness-lede">
            Looking back at my journey so far, I would describe myself as a resilient,
            adaptable, and service-oriented individual who has built a diverse skill set
            across more than a decade in customer service, technical support, and IT-related
            roles.
          </p>
          <p className="awareness-framework">
            Using Whetten&apos;s self-awareness framework, I identified adaptability,
            resilience and communication as my strongest competencies. The assessment also
            highlighted that I need to continue developing confidence in unfamiliar
            professional environments and deepen my technical expertise in networking and
            cloud technologies. This insight has helped shape my personal learning goals and
            career development plan.
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
              <div className="awareness-row-copy">
                {c.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
