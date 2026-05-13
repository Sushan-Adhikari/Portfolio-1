import Reveal from '../components/Reveal'

export default function StartupsSection({ data }) {
  return (
    <section className="section startups-section" id="startups">
      <div className="container">
        <Reveal className="section-header">
          <h2 className="section-title">
            My <span className="gradient-text">Startups</span>
          </h2>
        </Reveal>

        <div className="startups-grid">
          {data.items.map((startup, index) => (
            <Reveal className="h-full" key={startup.name} style={{ transitionDelay: `${Math.min(index * 90, 360)}ms` }}>
              <div className="startup-card">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
