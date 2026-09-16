import { HiArrowDown, HiArrowUpRight } from 'react-icons/hi2'

export function Home({ copy }) {
  return (
    <section id="home" className="hero section">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <div className="availability"><span />{copy.availability}</div>
          <p className="eyebrow">{copy.role}</p>
          <h1>{copy.titleStart}<em>{copy.titleAccent}</em>{copy.titleEnd}</h1>
          <p className="hero-description">{copy.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">{copy.projects}<HiArrowDown /></a>
            <a className="text-link" href="#contact">{copy.contact}<HiArrowUpRight /></a>
          </div>
        </div>
        <div className="portrait-stage" data-reveal style={{ '--delay': '160ms' }}>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="portrait-card">
            <span className="portrait-label">Aitor<br />Angulo</span>
            <img src="/PerfilAvatar.png" alt={copy.imageAlt} />
            <span className="portrait-code">01 / 04</span>
          </div>
        </div>
      </div>
      <div className="container expertise-strip" aria-label={copy.expertiseLabel}>
        {copy.expertise.map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>
  )
}
