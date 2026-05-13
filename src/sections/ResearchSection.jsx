import Reveal from '../components/Reveal'

export default function ResearchSection({ data }) {
  return (
    <section className="section research-section" id="research">
      <div className="container">
        <Reveal className="section-header">
          <h2 className="section-title">
            Research <span className="gradient-text">Publications</span>
          </h2>
          <p className="research-intro">{data.intro}</p>
          <a href={data.scholarLink} className="research-profile-link" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-graduation-cap"></i>
            <span>View All on Google Scholar</span>
          </a>
        </Reveal>

        <div className="research-grid">
          {data.papers.map((paper, index) => (
            <Reveal className="h-full" key={paper.title} style={{ transitionDelay: `${Math.min(index * 80, 360)}ms` }}>
              <div className="research-card">
                <div className="research-icon">
                  <i className={paper.iconClass}></i>
                </div>
                <div className="research-content">
                  <h3>{paper.title}</h3>
                  <p className="research-meta">
                    <span className="conference">{paper.venue}</span>
                    <span className="year">{paper.date}</span>
                  </p>
                  <div className="research-actions">
                    {(paper.links || []).map((link) => {
                      const label = (link.label || '').toLowerCase()
                      let kindClass = 'research-btn-general'
                      if (label.includes('paper')) kindClass = 'research-btn-paper'
                      else if (label.includes('code')) kindClass = 'research-btn-code'
                      else if (label.includes('certificate') || label.includes('acceptance') || label.includes('email')) {
                        kindClass = 'research-btn-proof'
                      } else if (label.includes('scholar')) kindClass = 'research-btn-scholar'

                      return (
                        <a
                          href={link.href}
                          className={`research-btn research-btn-text ${kindClass}`}
                          title={link.label}
                          target={link.external === false ? undefined : '_blank'}
                          rel={link.external === false ? undefined : 'noopener noreferrer'}
                          key={`${paper.title}-${link.label}`}
                        >
                          {link.iconClass ? <i className={link.iconClass}></i> : null}
                          <span>{link.label}</span>
                        </a>
                      )
                    })}
                  </div>
                  <ul className="research-description-list">
                    {(paper.descriptionLines || [paper.description]).map((line) => (
                      <li className="research-description" key={`${paper.title}-${line}`}>
                        {line}
                      </li>
                    ))}
                  </ul>
                  <div className="research-keywords">
                    <span className="research-keywords-label">Keywords:</span>
                    <span className="research-keywords-list">
                      {paper.tags.map((tag, tagIndex) => (
                        <span className="research-keyword-item" key={tag}>
                          {tag}
                          {tagIndex < paper.tags.length - 1 ? <span aria-hidden="true"> · </span> : null}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
