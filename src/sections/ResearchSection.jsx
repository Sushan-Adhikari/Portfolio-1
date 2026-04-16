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
                <p className="research-description">{paper.description}</p>
                <div className="research-tags">
                  {paper.tags.map((tag) => (
                    <span className="research-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="research-actions">
                  <a href={paper.paperLink} className="research-btn" title="Read Paper" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-file-pdf"></i>
                  </a>
                  <a href={paper.extraLink} className="research-btn" title={paper.extraLabel} target="_blank" rel="noopener noreferrer">
                    <i className={paper.extraIconClass}></i>
                  </a>
                  <a href={paper.paperLink} className="research-btn" title="Citation" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-quote-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
