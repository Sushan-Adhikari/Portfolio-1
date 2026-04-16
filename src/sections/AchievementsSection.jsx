export default function AchievementsSection({ data }) {
  const rollingFeatured = [...data.featured, ...data.featured, ...data.featured]

  return (
    <section className="section achievements-section" id="achievements">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Awards and <span className="gradient-text">Achievements</span>
          </h2>
        </div>

        <div className="achievements-grid">
          {data.items.map((achievement) => (
            <div className="achievement-card tilt-card" data-tilt-strength="4.5" key={achievement.title}>
              <div className="achievement-icon">
                <i className={achievement.iconClass}></i>
              </div>
              <div className="achievement-content">
                <h4>{achievement.title}</h4>
                <p className="achievement-event">{achievement.event}</p>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="featured-section">
          <h3 className="featured-title">Featured In</h3>
          <div className="featured-rolling-showcase" aria-label="Featured organizations">
            <div className="featured-rolling-track">
              {rollingFeatured.map((item, index) => (
                <div className="featured-rolling-card" key={`${item.name}-${index}`}>
                  <img src={item.image} alt={item.name} loading="lazy" decoding="async" />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
            <div className="featured-rolling-fade left" aria-hidden="true"></div>
            <div className="featured-rolling-fade right" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
