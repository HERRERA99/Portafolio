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
        <div className="stack-stage" data-reveal style={{ '--delay': '160ms' }}>
          <div className="stack-panel">
            <div className="stack-panel-top"><span>{copy.stackLabel}</span><span>01 — 04</span></div>
            {copy.stack.map((group, index) => (
              <div className="stack-group" key={group.title}>
                <span className="stack-index">0{index + 1}</span>
                <div><p>{group.title}</p><span>{group.items.join(' · ')}</span></div>
              </div>
            ))}
            <div className="stack-signal"><i /><span>{copy.stackFooter}</span></div>
          </div>
        </div>
      </div>
      <div className="container expertise-strip" aria-label={copy.expertiseLabel}>
        {copy.expertise.map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>
  )
}
