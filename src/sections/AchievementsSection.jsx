export default function AchievementsSection({ data }) {
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
            <div className="achievement-card" key={achievement.title}>
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
          <div className="featured-grid">
            {data.featured.map((item) => (
              <div className="featured-item" key={item.name}>
                <img src={item.image} alt={item.name} loading="lazy" decoding="async" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
