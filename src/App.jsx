import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Work from './components/Work.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="swiss-noise min-h-screen bg-swiss-bg text-swiss-fg">
      <a
        href="#work"
        className="swiss-focus sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:h-11 focus:bg-swiss-fg focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:uppercase focus:tracking-label focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Skills />
        <Experience />
        <Education />
      </main>
      <Footer />
    </div>
  )
}
