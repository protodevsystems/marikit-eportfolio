import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Aspirations } from './components/Aspirations'
import { SelfAwareness } from './components/SelfAwareness'
import { Project } from './components/Project'
import { Goals } from './components/Goals'
import { Journals } from './components/Journals'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  console.log('[App] rendering ePortfolio shell')

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Aspirations />
        <SelfAwareness />
        <Project />
        <Goals />
        <Journals />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
