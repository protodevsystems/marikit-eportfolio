import { Reveal } from './Reveal'
import './About.css'

export function About() {
  return (
    <section id="about" className="about">
      <div className="about-shell container">
        <Reveal className="about-copy">
          <span className="section-label">Who I am</span>
          <h2 className="about-display">Kia ora</h2>
          <p className="about-lede">
            I&apos;m Raphaelle Piosca — an IT professional in Auckland with over a decade across
            customer service, technical support, and service desk environments.
          </p>

          <div className="about-body">
            <p>
              My journey into IT began in the Philippines with a Bachelor of Science in
              Information Technology. That path led through technical support, administration,
              and cybersecurity — including Level 1 support for international customers at
              Alorica, and a Cyber Security internship at CIANAA Technologies applying ISO/IEC
              27002 standards.
            </p>
            <p>
              New Zealand offered room to grow: further study, welcoming communities, and a
              different way of life. Since arriving, I&apos;ve completed a Bachelor of Digital
              Technologies (Level 7) and I&apos;m completing a Master&apos;s in Business
              Informatics at ICL Graduate Business School.
            </p>
            <p>
              Outside work I train in MMA, kickboxing, and Brazilian Jiu-Jitsu — disciplines
              that sharpen focus and perseverance. I also enjoy multimedia and photography.
            </p>
          </div>
        </Reveal>

        <aside className="about-aside">
          <Reveal delayClass="reveal-delay-1" className="about-stat">
            <strong>10+</strong>
            <span>Years bridging people and technology</span>
          </Reveal>

          <div className="about-photos">
            <Reveal delayClass="reveal-delay-2" className="about-photo about-photo--coast">
              <img
                src="/images/about-coast.jpg"
                alt="Raphaelle Piosca on a New Zealand coast"
                width={640}
                height={800}
                loading="lazy"
              />
            </Reveal>
            <Reveal delayClass="reveal-delay-3" className="about-photo about-photo--park">
              <img
                src="/images/lifestyle-park.jpg"
                alt="Raphaelle outdoors in a park setting"
                width={640}
                height={800}
                loading="lazy"
              />
            </Reveal>
          </div>

          <Reveal delayClass="reveal-delay-3" className="about-note">
            <p>
              This ePortfolio shows growth as an IT professional — and the resilience behind
              it.
            </p>
          </Reveal>
        </aside>
      </div>
    </section>
  )
}
