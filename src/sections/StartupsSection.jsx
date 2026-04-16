export default function StartupsSection({ data }) {
  return (
    <section className="section startups-section" id="startups">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="gradient-text">Startups</span>
          </h2>
        </div>

        <div className="startups-grid">
          {data.items.map((startup) => (
            <div className="startup-card tilt-card" data-tilt-strength="6" key={startup.name}>
              <div className="startup-header">
                <div className="startup-logo">
                  <i className={startup.iconClass}></i>
                </div>
                <div className="startup-info">
                  <h3>{startup.name}</h3>
                  <p className="startup-tagline">{startup.tagline}</p>
                </div>
                <div className={`startup-status ${startup.statusClass}`}>
                  <span>{startup.status}</span>
                </div>
              </div>

              <div className="startup-content">
                <p className="startup-description">{startup.description}</p>

                <div className="startup-metrics">
                  {startup.metrics.map((metric) => (
                    <div className="metric" key={`${startup.name}-${metric.label}`}>
                      <span className="metric-value">{metric.value}</span>
                      <span className="metric-label">{metric.label}</span>
                    </div>
                  ))}
                </div>

                <div className="startup-technologies">
                  {startup.tech.map((tag) => (
                    <span className="tech-tag" key={`${startup.name}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="startup-actions">
                <a href={startup.link} className="startup-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                  <span>Visit Website</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
