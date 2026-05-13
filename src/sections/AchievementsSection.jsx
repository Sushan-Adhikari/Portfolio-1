import Reveal from '../components/Reveal'

export default function AchievementsSection({ data }) {
  const rollingFeatured = [...data.featured, ...data.featured, ...data.featured]

  return (
    <section className="section achievements-section" id="achievements">
      <div className="container">
        <Reveal className="section-header">
          <h2 className="section-title">
            Awards and <span className="gradient-text">Achievements</span>
          </h2>
        </Reveal>

        <div className="achievements-grid">
          {data.items.map((achievement, index) => (
            <Reveal className="h-full" key={achievement.title} style={{ transitionDelay: `${Math.min(index * 80, 320)}ms` }}>
              <div className="achievement-card tilt-card" data-tilt-strength="2.6">
                <div className="achievement-icon">
                  <i className={achievement.iconClass}></i>
                </div>
                <div className="achievement-content">
                  <h4>{achievement.title}</h4>
                  <p className="achievement-event">{achievement.event}</p>
                  <p className="achievement-description">{achievement.description}</p>
                  {achievement.links?.length ? (
                    <div className="achievement-links">
                      {achievement.links.map((link) => (
                        <a
                          href={link.href}
                          className="achievement-link"
                          target={link.external === false ? undefined : '_blank'}
                          rel={link.external === false ? undefined : 'noopener noreferrer'}
                          key={`${achievement.title}-${link.label}`}
                        >
                          {link.iconClass ? <i className={link.iconClass}></i> : null}
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="featured-section" style={{ transitionDelay: '120ms' }}>
          <h3 className="featured-title">
            Featured In
            <span className="featured-swipe-hint" aria-hidden="true">
              Swipe to browse
            </span>
          </h3>
          <div
            className="featured-rolling-showcase group/featured relative isolate flex h-[130px] items-center overflow-hidden rounded-[2rem] border-0 bg-transparent motion-reduce:h-auto max-[768px]:h-[112px] max-[480px]:h-[100px]"
            aria-label="Featured organizations"
          >
            <div className="featured-rolling-track inline-flex w-max items-center gap-5 px-6 motion-safe:animate-featured-roll max-[480px]:gap-3 motion-reduce:static motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-3 motion-reduce:py-3 motion-reduce:[animation:none]">
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
          </div>
        </Reveal>
      </div>
    </section>
  )
}
