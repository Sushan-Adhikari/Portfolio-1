export default function ResearchSection({ data }) {
  return (
    <section className="section research-section" id="research">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Research <span className="gradient-text">Publications</span>
          </h2>
          <p className="research-intro">{data.intro}</p>
          <a href={data.scholarLink} className="research-profile-link" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-graduation-cap"></i>
            <span>View All on Google Scholar</span>
          </a>
        </div>

        <div className="research-grid">
          {data.papers.map((paper) => (
            <div className="research-card tilt-card" data-tilt-strength="5" key={paper.title}>
              <div className="research-icon">
                <i className={paper.iconClass}></i>
              </div>
              <div className="research-content">
                <h3>{paper.title}</h3>
                <p className="research-meta">
                  <span className="conference">{paper.venue}</span>
                  <span className="year">{paper.date}</span>
                </p>
                <ul className="research-description-list">
                  {(paper.descriptionLines || [paper.description]).map((line) => (
                    <li className="research-description" key={`${paper.title}-${line}`}>
                      {line}
                    </li>
                  ))}
                </ul>
                <div className="research-tags">
                  {paper.tags.map((tag) => (
                    <span className="research-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="research-actions">
                  {(paper.links || []).map((link) => (
                    <a
                      href={link.href}
                      className="research-btn research-btn-text"
                      title={link.label}
                      target={link.external === false ? undefined : '_blank'}
                      rel={link.external === false ? undefined : 'noopener noreferrer'}
                      key={`${paper.title}-${link.label}`}
                    >
                      {link.iconClass ? <i className={link.iconClass}></i> : null}
                      <span>{link.label}</span>
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
