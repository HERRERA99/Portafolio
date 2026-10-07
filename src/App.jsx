import { useEffect, useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { Home } from './sections/Home'
import { AboutMe } from './sections/AboutMe'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { content } from './data/content'
import { AnimatedBackground } from './components/AnimatedBackground'

function App() {
  const [motionPaused, setMotionPaused] = useState(() => localStorage.getItem('portfolio-motion') === 'paused')
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('portfolio-language')
    return ['es', 'en', 'fr'].includes(savedLanguage) ? savedLanguage : 'es'
  })

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = (event) => setReducedMotion(event.matches)
    preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [])

  const motionEnabled = !motionPaused && !reducedMotion
  const toggleMotion = () => {
    const paused = !motionPaused
    setMotionPaused(paused)
    localStorage.setItem('portfolio-motion', paused ? 'paused' : 'enabled')
  }

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('portfolio-language', language)
  }, [language])

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    if (!motionEnabled || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.12 },
    )
    elements.forEach((element) => {
      if (!element.classList.contains('is-visible')) {
        element.classList.add('reveal-ready')
        observer.observe(element)
      }
    })
    return () => {
      observer.disconnect()
      elements.forEach((element) => element.classList.remove('reveal-ready'))
    }
  }, [language, motionEnabled])

  const copy = content[language]

  return (
    <div className="site-shell" data-motion={motionEnabled ? 'on' : 'off'}>
      <AnimatedBackground enabled={motionEnabled} />
      <NavBar copy={copy.nav} language={language} onLanguageChange={setLanguage} motionEnabled={motionEnabled} onToggleMotion={toggleMotion} reducedMotion={reducedMotion} />
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
