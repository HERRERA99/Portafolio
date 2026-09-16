import { FaGithub } from 'react-icons/fa'
import { HiArrowUpRight } from 'react-icons/hi2'

export function Projects({ copy }) {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-heading section-heading-inline" data-reveal>
          <div><p className="section-index">03</p><p className="eyebrow">{copy.eyebrow}</p><h2>{copy.title}</h2></div>
          <p>{copy.intro}</p>
        </div>
        <div className="project-list">
          {copy.items.map((project, index) => (
            <article className="project-card" key={project.title} data-reveal>
              <a className="project-media" href={project.web || project.repo} target="_blank" rel="noreferrer" aria-label={`${copy.open} ${project.title}`}>
                <img src={project.image} alt="" loading="lazy" />
                <span className="project-number">0{index + 1}</span><span className="project-open"><HiArrowUpRight /></span>
              </a>
              <div className="project-info">
                <div><p className="project-type">{project.type}</p><h3>{project.title}</h3></div>
                <p>{project.description}</p>
                <div className="project-footer">
                  <ul aria-label="Technologies">{project.stack.map((technology) => <li key={technology}>{technology}</li>)}</ul>
                  <div className="project-links">
                    <a href={project.repo} target="_blank" rel="noreferrer"><FaGithub />{copy.code}</a>
                    {project.web && <a href={project.web} target="_blank" rel="noreferrer">{copy.live}<HiArrowUpRight /></a>}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
