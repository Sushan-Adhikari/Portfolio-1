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
                <h4>{item.org}</h4>
                <p>{item.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
