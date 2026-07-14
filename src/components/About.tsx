import { Reveal } from './Reveal'
import './About.css'

const paragraphs = [
  `My name is Raphaelle Piosca, and I'm an IT professional based in Auckland, New Zealand, with over 10 years of combined experience in customer service, technical support, and service desk environments.`,
  `My journey into IT began in the Philippines, where I completed my Bachelor of Science in Information Technology, and has taken me through a range of roles spanning technical support, administration, and cybersecurity — including providing Level 1 technical support to international customers at Alorica and working as a Cyber Security Intern applying ISO/IEC 27002 standards at CIANAA Technologies.`,
  `What drew me to New Zealand was the opportunity to grow both personally and professionally — to pursue further studies in a country known for its high-quality education system, welcoming communities, and strong work-life balance, while experiencing a completely different culture and way of life. Since arriving, I've continued building on my IT foundation, completing a Bachelor of Digital Technologies (Level 7) and gaining further hands-on experience across different industries.`,
  `Life in New Zealand has certainly come with its challenges — adjusting to a new environment, building a support network from scratch, and balancing study, work, and personal growth all at once. But it has also been incredibly rewarding. I've grown more resilient and resourceful, met people from all walks of life, and discovered a real sense of community here, whether through study, work, or the sports I'm passionate about. Every challenge has taught me something valuable and pushed me to become more adaptable — a quality I now bring into everything I do.`,
  `I'm currently completing a Master's in Business Informatics at ICL Graduate Business School, which is deepening my understanding of how technology and business intersect. I'm particularly interested in service desk and IT support roles, where I can combine my technical troubleshooting skills with my strong customer communication and problem-solving abilities.`,
  `Outside of my professional life, I'm a sporty and active person — I train in MMA, kickboxing, and Brazilian Jiu-Jitsu, which have taught me discipline, focus, and perseverance both on and off the mats. In my free time, I also enjoy multimedia and photography, capturing moments and telling stories through images.`,
  `Through this ePortfolio, I hope to showcase not just my growth as an IT professional, but also the resilience, adaptability, and well-rounded person I've become along the way.`,
]

export function About() {
  return (
    <section id="about" className="about">
      <div className="about-shell container">
        <Reveal className="about-copy">
          <div className="about-head">
            <span className="section-label">Who I am</span>
            <h2 className="about-display">Kia ora</h2>
          </div>

          <ul className="about-body">
            {paragraphs.map((text, i) => (
              <li key={i} className={i === paragraphs.length - 1 ? 'is-close' : undefined}>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <aside className="about-aside">
          <Reveal delayClass="reveal-delay-1" className="about-media">
            <p className="about-stat">
              <strong>10+</strong>
              <span>Years in support &amp; IT</span>
            </p>
            <div className="about-photos">
              <img
                className="about-photo about-photo--park"
                src="/images/lifestyle-park.jpg"
                alt="Raphaelle outdoors in a park setting"
                width={480}
                height={560}
                loading="lazy"
              />
              <img
                className="about-photo about-photo--coast"
                src="/images/about-coast.jpg"
                alt="Raphaelle Piosca on a New Zealand coast"
                width={480}
                height={560}
                loading="lazy"
              />
            </div>
          </Reveal>
        </aside>
      </div>
    </section>
  )
}
