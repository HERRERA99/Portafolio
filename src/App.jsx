import { useEffect, useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { Home } from './sections/Home'
import { AboutMe } from './sections/AboutMe'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { content } from './data/content'

function App() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('portfolio-language')
    return ['es', 'en', 'fr'].includes(savedLanguage) ? savedLanguage : 'es'
  })

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('portfolio-language', language)
  }, [language])

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.12 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [language])

  const copy = content[language]

  return (
    <div className="site-shell">
      <NavBar copy={copy.nav} language={language} onLanguageChange={setLanguage} />
      <main>
        <Home copy={copy.hero} />
        <AboutMe copy={copy.about} />
        <Projects copy={copy.projects} />
        <Contact copy={copy.contact} />
      </main>
      <footer className="footer container">
        <a className="footer-mark" href="#home" aria-label="Aitor Angulo — Inicio">AA<span>.</span></a>
        <p>{copy.footer}</p>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
