export default function ExperienceSection({ data }) {
  return (
    <section className="section timeline-section" id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Experience and <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="timeline">
          {data.timeline.map((item) => (
            <div className="timeline-item" key={`${item.date}-${item.role}`}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
