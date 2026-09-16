import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiArrowDownTray, HiBars3, HiXMark } from 'react-icons/hi2'

const sections = ['home', 'about', 'projects', 'contact']

export function NavBar({ copy, language, onLanguageChange }) {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-35% 0px -55% 0px' },
    )
    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <button className="brand" onClick={() => goTo('home')} aria-label="Aitor Angulo — Home">AA<span>.</span></button>
        <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label={copy.menu}>
          {menuOpen ? <HiXMark /> : <HiBars3 />}
        </button>
        <div className={`nav-panel ${menuOpen ? 'is-open' : ''}`}>
          <div className="nav-links">
            {copy.items.map((item) => (
              <button key={item.id} onClick={() => goTo(item.id)} className={activeSection === item.id ? 'active' : ''}>
                {item.label}
              </button>
            ))}
          </div>
          <div className="nav-actions">
            <div className="language-switcher" aria-label={copy.language}>
              {['es', 'en', 'fr'].map((code) => (
                <button key={code} className={language === code ? 'active' : ''} onClick={() => onLanguageChange(code)} aria-pressed={language === code}>
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="social-links">
              <a href="https://github.com/HERRERA99" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/aitor-angulo-salas-b81356257/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="/curriculum.pdf" download aria-label={copy.cv}><HiArrowDownTray /></a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
