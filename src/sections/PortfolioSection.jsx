export default function PortfolioSection({ data }) {
  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="portfolio-grid">
          {data.items.map((project, index) => (
            <div className="portfolio-card" key={project.title} data-aos-delay={index * 80}>
              <div className="card-image">
                <img src={project.image} alt={project.alt || project.title} loading="lazy" decoding="async" />
                <div className="card-overlay">
                  <div className="overlay-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-stack">
                      {project.tech.map((tech) => (
                        <span className="tech-tag" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-content">
                <div className="card-icons">
                  {project.links.map((link) => (
                    <a
                      key={`${project.title}-${link.label}`}
                      href={link.href}
                      className="card-icon"
                      title={link.label}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                    >
                      <i className={link.iconClass}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
