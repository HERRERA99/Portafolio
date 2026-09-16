export function AboutMe({ copy }) {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="section-index">02</p>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
        </div>
        <div className="about-grid">
          <div className="about-statement" data-reveal><p>{copy.lead}</p><p>{copy.body}</p></div>
          <div className="capabilities" data-reveal style={{ '--delay': '100ms' }}>
            {copy.capabilities.map((capability, index) => (
              <article key={capability.title}>
                <span>0{index + 1}</span>
                <div><h3>{capability.title}</h3><p>{capability.description}</p></div>
              </article>
            ))}
          </div>
        </div>
        <div className="metrics" data-reveal>
          {copy.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
        </div>
      </div>
    </section>
  )
}
