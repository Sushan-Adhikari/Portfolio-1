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
          <div
            className="featured-rolling-showcase group/featured relative h-[130px] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] motion-reduce:h-auto max-[768px]:h-[112px] max-[480px]:h-[100px]"
            aria-label="Featured organizations"
          >
            <div className="featured-rolling-track absolute left-0 top-1/2 inline-flex w-max -translate-y-1/2 items-center gap-5 px-6 motion-safe:animate-featured-roll group-hover/featured:[animation-play-state:paused] max-[480px]:gap-3 motion-reduce:static motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:translate-y-0 motion-reduce:px-3 motion-reduce:py-3 motion-reduce:[animation:none]">
              {rollingFeatured.map((item, index) => (
                <div
                  className="featured-rolling-card inline-flex h-[82px] min-w-[210px] items-center gap-3 rounded-[1.5rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.96))] px-5 shadow-sm transition-[transform,box-shadow,border-color] duration-300 [transform:perspective(900px)_rotateX(9deg)] hover:[transform:perspective(900px)_rotateX(1deg)_translateY(-2px)] hover:border-[var(--primary-300)] hover:shadow-lg dark:bg-[linear-gradient(180deg,rgba(30,41,59,0.95),rgba(17,24,39,0.92))] max-[768px]:h-[68px] max-[768px]:min-w-[180px] max-[768px]:px-4 max-[480px]:h-[62px] max-[480px]:min-w-[162px] max-[480px]:px-3"
                  key={`${item.name}-${index}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="h-[50px] w-[50px] rounded-[0.75rem] object-contain max-[768px]:h-[42px] max-[768px]:w-[42px] max-[480px]:h-9 max-[480px]:w-9"
                  />
                  <span className="whitespace-nowrap text-left text-[0.95rem] font-bold text-[var(--text-primary)] max-[768px]:text-[0.84rem] max-[480px]:text-[0.78rem]">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
            <div
              className="featured-rolling-fade left pointer-events-none absolute inset-y-0 left-0 z-[2] w-[78px] bg-gradient-to-r from-[var(--surface)] to-transparent motion-reduce:hidden max-[480px]:w-[44px]"
              aria-hidden="true"
            ></div>
            <div
              className="featured-rolling-fade right pointer-events-none absolute inset-y-0 right-0 z-[2] w-[78px] bg-gradient-to-l from-[var(--surface)] to-transparent motion-reduce:hidden max-[480px]:w-[44px]"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
