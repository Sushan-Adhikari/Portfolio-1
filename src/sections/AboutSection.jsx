export default function AboutSection({ data }) {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-left">
            <div className="about-text">
              <h3>{data.heading}</h3>
              {data.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="about-highlights">
              {data.highlights.map((item) => (
                <div className="highlight-item" key={item.title}>
                  <i className={item.iconClass}></i>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right">
            <div className="skills-section">
              <h3>{data.skillsTitle}</h3>
              <div className="skills-grid">
                {data.skills.map((group) => (
                  <div className="skill-category" key={group.title}>
                    <h4>
                      <i className={group.iconClass}></i> {group.title}
                    </h4>
                    <div className="skill-tags">
                      {group.tags.map((tag) => (
                        <span className="skill-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
