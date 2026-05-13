import Reveal from '../components/Reveal'

export default function ExperienceSection({ data }) {
  return (
    <section className="section timeline-section" id="experience">
      <div className="container">
        <Reveal className="section-header">
          <h2 className="section-title">
            Experience and <span className="gradient-text">Education</span>
          </h2>
        </Reveal>

        <div className="timeline">
          {data.timeline.map((item, index) => (
            <Reveal
              className="timeline-item"
              key={`${item.date}-${item.role}`}
              style={{ transitionDelay: `${Math.min(index * 90, 420)}ms` }}
            >
              <div className="timeline-icon">
                <i className={item.iconClass}></i>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">{item.date}</div>
                <h3>{item.role}</h3>
                <h4>
                  {item.orgLink ? (
                    <a href={item.orgLink} target="_blank" rel="noopener noreferrer" className="timeline-org-link">
                      {item.org}
                    </a>
                  ) : (
                    item.org
                  )}
                </h4>
                <p>{item.summary}</p>
                {item.links?.length ? (
                  <div className="timeline-links">
                    {item.links.map((link) => (
                      <a
                        href={link.href}
                        target={link.external === false ? undefined : '_blank'}
                        rel={link.external === false ? undefined : 'noopener noreferrer'}
                        className="timeline-link"
                        key={`${item.role}-${link.label}`}
                      >
                        {link.iconClass ? <i className={link.iconClass}></i> : null}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
