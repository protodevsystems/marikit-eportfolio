import { useState } from 'react'
import { Reveal } from './Reveal'
import './Journals.css'

type Journal = {
  title: string
  sections: { label: string; body: string }[]
}

const journals: Journal[] = [
  {
    title: 'Building a Strategic Plan for The Warehouse Group',
    sections: [
      {
        label: 'Experience',
        body: `For my Business Transformation course, I developed a comprehensive strategic plan for The Warehouse Group (TWG), covering digital disruption analysis, a SWOT analysis, gap analysis, SMART objectives, and a Balanced Scorecard-linked KPI framework.`,
      },
      {
        label: 'Feelings',
        body: `Initially, I felt overwhelmed by the scope of the task — pulling together multiple strategic frameworks into one coherent plan felt daunting, especially translating abstract concepts like "digital disruption" into something concrete and specific to a real New Zealand retailer. As I progressed, however, I felt a growing sense of confidence and even enjoyment as the pieces started connecting.`,
      },
      {
        label: 'Evaluation',
        body: `What worked well was breaking the plan into stages and tackling one framework at a time rather than trying to synthesise everything at once. What was more difficult was ensuring the SMART objectives and KPIs genuinely linked back to the SWOT and gap analysis, rather than feeling like separate, disconnected sections.`,
      },
      {
        label: 'Analysis',
        body: `This experience highlighted that strategic planning isn't just about applying frameworks in isolation — it's about creating a coherent narrative where each part logically supports the next. I realised that a Balanced Scorecard is only meaningful if its KPIs are traceable back to the organisation's actual strategic gaps and objectives, not just generic metrics.`,
      },
      {
        label: 'Conclusion',
        body: `I gained a much stronger grasp of strategic planning and business analysis, particularly how to integrate multiple frameworks into a single, defensible strategy. This is directly useful in an IT/business informatics context, where technology decisions must always tie back to broader organisational strategy.`,
      },
      {
        label: 'Action Plan',
        body: `Going forward, I plan to apply this same "connected narrative" approach to future business cases and, professionally, to think more strategically when proposing technical solutions — always asking how a solution ties back to the bigger organisational picture.`,
      },
    ],
  },
  {
    title: 'Strengthening Critical Analysis in the Enterprise Systems Report',
    sections: [
      {
        label: 'Experience',
        body: `For my Enterprise Systems and Business Analysis course, I wrote a two-part report — Part 1 on Fonterra's SAP landscape and Part 2 on Continental Airlines' real-time BI case study. My initial drafts received recurring feedback that they lacked critical depth and relied too heavily on description rather than analysis.`,
      },
      {
        label: 'Feelings',
        body: `Receiving this feedback was honestly a little discouraging at first, as I felt I had covered the material thoroughly. But once I understood what "critical depth" meant in an academic context, I felt motivated to revise rather than defeated by it.`,
      },
      {
        label: 'Evaluation',
        body: `The positive outcome was that revising the report with a more critical lens significantly improved its quality — I moved from simply describing what SAP modules Fonterra used, to evaluating why those choices mattered, what trade-offs existed, and how effective the change management approach was. The challenge was training myself to naturally ask "so what?" after every descriptive statement.`,
      },
      {
        label: 'Analysis',
        body: `This taught me that descriptive writing summarises what happened, while critical writing evaluates significance, implications, and alternatives. I learned to build in evaluative questions as I write — not just "what did this organisation do," but "was this effective, and compared to what."`,
      },
      {
        label: 'Conclusion',
        body: `I developed a stronger critical thinking and academic writing skill, which is essential not just for postgraduate study but for real workplace analysis — for example, evaluating whether an IT system genuinely meets business needs, not just describing its features.`,
      },
      {
        label: 'Action Plan',
        body: `I intend to apply this critical lens to all future academic writing, and professionally, to develop the habit of evaluating IT systems and processes critically rather than simply reporting on them — a skill directly relevant to service desk and IT support roles where recommending genuine improvements matters.`,
      },
    ],
  },
  {
    title: 'Revising My Research Methods Proposal',
    sections: [
      {
        label: 'Experience',
        body: `In my Research Methods course, I revised my research proposal on MFA (Multi-Factor Authentication) user acceptance, using a TAM (Technology Acceptance Model)-based quantitative framework. The revision addressed gaps in my hypotheses, construct measurement, and data analysis planning.`,
      },
      {
        label: 'Feelings',
        body: `I felt a mix of frustration and curiosity during this process. Frustration, because research design felt far more rigid and technical than I expected; curiosity, because I found myself genuinely interested in understanding why people accept or resist new security technologies like MFA.`,
      },
      {
        label: 'Evaluation',
        body: `What worked well was going back to the TAM literature to properly ground my hypotheses in established theory rather than intuition. What was harder was operationalising abstract constructs (like "perceived usefulness") into measurable survey items.`,
      },
      {
        label: 'Analysis',
        body: `This experience showed me that good research isn't just about having an interesting question — it requires precise, theory-grounded design from the outset. I learned that vague hypotheses lead to vague, unusable data, and that construct measurement needs to be planned with the end analysis already in mind.`,
      },
      {
        label: 'Conclusion',
        body: `I gained a much clearer understanding of quantitative research design, particularly hypothesis development and construct measurement. This is valuable for evaluating technology adoption in real organisations, such as understanding why staff may resist new security tools.`,
      },
      {
        label: 'Action Plan',
        body: `I plan to apply this structured research thinking beyond academic contexts — for example, when supporting the rollout of new IT systems or security measures at work, I can better anticipate user resistance and design more effective communication or training around adoption.`,
      },
    ],
  },
  {
    title: 'Repurposing Strategic Work into a Presentation',
    sections: [
      {
        label: 'Experience',
        body: `For Assignment 3, I needed to derive a PowerPoint presentation directly from my earlier strategic plan for The Warehouse Group, condensing a detailed written report into a clear, visual, presentable format.`,
      },
      {
        label: 'Feelings',
        body: `At first, this felt like it should be quick and easy since the content already existed — but I quickly felt challenged by how different "writing for reading" is from "designing for presenting."`,
      },
      {
        label: 'Evaluation',
        body: `What worked well was identifying the key messages from each section of my report rather than trying to fit everything in. What was difficult was resisting the urge to cram detailed analysis onto slides, when a presentation audience needs concise, digestible points supported verbally.`,
      },
      {
        label: 'Analysis',
        body: `This taught me that repurposing content across formats requires re-thinking the purpose of the content, not just reformatting it. A report is meant to be read in detail; a presentation is meant to be delivered and understood quickly, with the presenter adding depth verbally.`,
      },
      {
        label: 'Conclusion',
        body: `I developed a stronger communication and presentation design skill, learning how to distil complex analysis into clear, audience-appropriate visuals. This is directly useful in IT support and business contexts, where communicating technical or strategic information clearly to different audiences (technical vs non-technical) is a constant requirement.`,
      },
      {
        label: 'Action Plan',
        body: `I plan to apply this skill whenever I need to communicate technical information to non-technical stakeholders — a core requirement in service desk roles — by focusing on key messages first and layering in detail through explanation rather than dense slides or documentation.`,
      },
    ],
  },
  {
    title: 'Building My ePortfolio',
    sections: [
      {
        label: 'Experience',
        body: `Throughout this course, I built this ePortfolio from the ground up — drafting sections including About Me, Project Work, Professional Development, and Reflective Learning, while weaving in both academic and personal/professional experiences, including my cybersecurity internship project at CIANAA Technologies.`,
      },
      {
        label: 'Feelings',
        body: `This process felt surprisingly personal compared to my other academic work. I felt a bit vulnerable sharing personal context (like my move to New Zealand and the challenges that came with it), but also proud as the ePortfolio started coming together as a genuine reflection of my journey.`,
      },
      {
        label: 'Evaluation',
        body: `What worked well was approaching each section iteratively — drafting, reviewing, and refining rather than trying to write everything perfectly the first time. What was challenging was deciding how much personal detail to include while keeping a professional tone appropriate for potential employers.`,
      },
      {
        label: 'Analysis',
        body: `This experience reinforced that self-presentation is itself a skill — one that requires balancing authenticity with professionalism. I also realised that reflecting on my own work (like this journal, or my self-evaluation) deepened my understanding of my own strengths and growth areas far more than simply listing achievements would have.`,
      },
      {
        label: 'Conclusion',
        body: `I developed stronger self-reflection and professional branding skills, learning how to present my diverse background — spanning IT, customer service, and personal interests — as a coherent, compelling professional narrative.`,
      },
      {
        label: 'Action Plan',
        body: `I plan to keep this ePortfolio updated as I progress in my career, treating it as a living document. I also intend to apply this same reflective habit professionally — regularly reviewing my performance and growth areas, rather than only reflecting when required to for an assignment.`,
      },
    ],
  },
]

const peerPosts: Journal[] = [
  {
    title: 'Peer Evaluation Post 1 — Presentation Leadership',
    sections: [
      {
        label: 'Peer feedback',
        body: `A teammate recognised my leadership in designing PowerPoint presentations across Innovation Design and Thinking, Enterprise Systems and Business Analysis, Project Management, and IT Service Management and Strategy — highlighting visual quality, organisation, openness to feedback, reliability, and initiative.`,
      },
      {
        label: 'Experience',
        body: `Across several group assignments this trimester, I consistently took the lead in designing and developing our team's PowerPoint presentations, ensuring they were visually engaging, well-structured, and aligned with the project requirements.`,
      },
      {
        label: 'Feelings',
        body: `Reading the feedback was genuinely affirming. Having a teammate specifically recognise my attention to detail and ability to present complex information clearly felt like validation that my efforts were valued — and a quiet sense of relief at being described as reliable and collaborative while building my professional network in a new country.`,
      },
      {
        label: 'Evaluation',
        body: `What stood out most was being recognised not just for the output, but for the process — welcoming feedback and incorporating suggestions. Consistently meeting deadlines across four courses suggested a working pattern rather than a one-off effort.`,
      },
      {
        label: 'Analysis',
        body: `This feedback helped me realise that consistently reliable, high-quality work across multiple courses builds a professional reputation. Soft skills like reliability, openness to feedback, and initiative compound across repeated collaborations.`,
      },
      {
        label: 'Conclusion',
        body: `This reinforced my presentation and communication design skills, and my collaborative teamwork skills — both directly relevant to translating technical information for non-technical audiences in IT support roles.`,
      },
      {
        label: 'Action Plan',
        body: `Going forward, I plan to keep treating feedback as something to actively invite, and to be more deliberate about documenting positive feedback patterns across future roles and projects.`,
      },
    ],
  },
  {
    title: 'Peer Evaluation Post 2 — Professionalism & Leadership',
    sections: [
      {
        label: 'Peer feedback',
        body: `Course-wide peer feedback highlighted professionalism, integrity, reliability, respectful communication, leadership, critical thinking, ethical conduct, accountability, and continuous desire to learn — describing me as a valued classmate and role model with leadership potential.`,
      },
      {
        label: 'Experience',
        body: `I received peer feedback reflecting on my conduct and contribution across the course more broadly, covering professionalism, integrity, reliability, communication, leadership, and critical thinking within the Business Information Technology programme.`,
      },
      {
        label: 'Feelings',
        body: `This felt different from typical assignment feedback — it felt like being seen as a person and professional. Being described as a "role model" with "leadership potential" was humbling and slightly unexpected.`,
      },
      {
        label: 'Evaluation',
        body: `What stood out most was recognition beyond academic performance — ethical conduct, accountability, active listening, and creating an inclusive environment. Having a peer independently notice these qualities suggested the effort genuinely comes through.`,
      },
      {
        label: 'Analysis',
        body: `Before this feedback, I measured progress mainly through tangible outputs. This reflection showed me that professional growth is also measured by how you show up for others — listening, including people, and acting with integrity.`,
      },
      {
        label: 'Conclusion',
        body: `This feedback reinforced my interpersonal leadership and professional integrity skills. In IT support and service desk roles, being dependable and easy to work with matters as much as technical skill.`,
      },
      {
        label: 'Action Plan',
        body: `I intend to keep leaning into these qualities deliberately — taking initiative, staying open to feedback, and creating space for others' perspectives as I move into professional IT teams in New Zealand.`,
      },
    ],
  },
]

function JournalAccordion({
  items,
  idPrefix,
}: {
  items: Journal[]
  idPrefix: string
}) {
  const [openId, setOpenId] = useState<string | null>(`${idPrefix}-0`)

  return (
    <div className="journals-list">
      {items.map((item, i) => {
        const id = `${idPrefix}-${i}`
        const isOpen = openId === id
        return (
          <article key={item.title} className={`journals-item ${isOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className="journals-item-trigger"
              aria-expanded={isOpen}
              onClick={() => {
                console.log('[Journals] toggle entry', item.title, !isOpen)
                setOpenId(isOpen ? null : id)
              }}
            >
              <span className="journals-item-index">{String(i + 1).padStart(2, '0')}</span>
              <span className="journals-item-title">{item.title}</span>
              <span className="journals-item-chevron" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen ? (
              <div className="journals-item-body">
                {item.sections.map((s) => (
                  <div key={s.label} className="journals-block">
                    <h4>{s.label}</h4>
                    <p>{s.body}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </article>
        )
      })}
    </div>
  )
}

export function Journals() {
  return (
    <section id="journals" className="journals">
      <div className="container journals-head">
        <Reveal>
          <span className="section-label">Learning journals</span>
          <h2 className="journals-display">Reflection</h2>
          <p className="journals-lede">
            Reflective journal entries and peer-feedback reflections from my Master&apos;s
            journey — capturing experience, insight, and next actions.
          </p>
        </Reveal>
      </div>

      <div className="container">
        <Reveal>
          <h3 className="journals-group-title">Journal entries</h3>
          <JournalAccordion items={journals} idPrefix="j" />
        </Reveal>

        <Reveal delayClass="reveal-delay-1" className="journals-peer">
          <h3 className="journals-group-title">Peer feedback reflections</h3>
          <JournalAccordion items={peerPosts} idPrefix="p" />
        </Reveal>
      </div>
    </section>
  )
}
