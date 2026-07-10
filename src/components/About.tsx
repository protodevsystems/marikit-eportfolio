import { Reveal } from './Reveal'
import './About.css'

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <Reveal className="about-media">
          <img
            src="/images/about-coast.jpg"
            alt="Raphaelle Piosca on a New Zealand coast"
            width={720}
            height={900}
            loading="lazy"
          />
        </Reveal>

        <div className="about-content">
          <Reveal>
            <span className="section-label">Who I am</span>
            <h2 className="section-title">About me</h2>
          </Reveal>

          <Reveal delayClass="reveal-delay-1" className="about-body">
            <p>
              Kia ora, my name is Raphaelle Piosca. I&apos;m an IT professional based in
              Auckland, New Zealand, with over 10 years of combined experience in customer
              service, technical support, and service desk environments.
            </p>
            <p>
              My journey into IT began in the Philippines, where I completed a Bachelor of
              Science in Information Technology. That path has taken me through technical
              support, administration, and cybersecurity — including Level 1 support for
              international customers at Alorica, and a Cyber Security internship at CIANAA
              Technologies applying ISO/IEC 27002 standards.
            </p>
            <p>
              What drew me to New Zealand was the chance to grow personally and
              professionally — further study, welcoming communities, and a different way of
              life. Since arriving, I&apos;ve completed a Bachelor of Digital Technologies
              (Level 7) and I&apos;m currently completing a Master&apos;s in Business
              Informatics at ICL Graduate Business School.
            </p>
            <p>
              Outside work I train in MMA, kickboxing, and Brazilian Jiu-Jitsu — disciplines
              that sharpen focus and perseverance. I also enjoy multimedia and photography,
              capturing moments and telling stories through images.
            </p>
          </Reveal>

          <Reveal delayClass="reveal-delay-2" className="about-aside">
            <img
              src="/images/lifestyle-park.jpg"
              alt="Raphaelle outdoors in a park setting"
              width={480}
              height={600}
              loading="lazy"
            />
            <p>
              Through this ePortfolio I hope to showcase not just my growth as an IT
              professional, but the resilience, adaptability, and well-rounded person
              I&apos;ve become along the way.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
