import { Reveal } from './Reveal'
import './Aspirations.css'

export function Aspirations() {
  return (
    <section id="aspirations" className="section aspirations">
      <div className="container">
        <Reveal>
          <span className="section-label">Looking ahead</span>
          <h2 className="section-title">Career aspirations</h2>
        </Reveal>

        <Reveal delayClass="reveal-delay-1" className="aspirations-text">
          <p>
            My immediate goal is to complete my Master&apos;s in Business Informatics at
            ICL Graduate Business School, building on my IT foundation with stronger
            business analysis, project management, and strategic thinking.
          </p>
          <p>
            In the next 2–3 years, I aim to move from front-line technical support into a
            role that blends IT operations with business informatics — such as IT business
            analysis, service delivery management, or systems support coordination.
          </p>
          <p>
            Longer term, I&apos;m working toward a leadership position within IT service
            management, where I can combine my technical grounding and cyber security
            exposure to help organisations run more securely and efficiently.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
