export default function AboutSection({ data }) {
  const logoTech = (data.techShowcase || []).filter((tech) => tech.logo)
  const rollingTech = [...logoTech, ...logoTech, ...logoTech]

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="about-content">
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

        <div className="about-skills-block">
          <div className="skills-section">
            <h3>{data.skillsTitle}</h3>

            {data.techShowcase?.length ? (
              <div
                className="tech-rolling-showcase group/tech relative mb-0 h-[146px] overflow-hidden rounded-[2rem] border-0 bg-transparent max-[768px]:h-[122px] max-[480px]:mb-6 max-[480px]:h-[118px] motion-reduce:h-auto"
                aria-label="Core technology stack"
              >
                <div className="tech-rolling-track absolute left-0 top-1/2 inline-flex w-max -translate-y-1/2 gap-4 px-6 motion-safe:animate-tech-roll group-hover/tech:[animation-play-state:paused] max-[480px]:gap-2 motion-reduce:static motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:translate-y-0 motion-reduce:px-3 motion-reduce:py-3 motion-reduce:[animation:none]">
                  {rollingTech.map((tech, index) => (
                    <div
                      className="tech-rolling-chip inline-flex h-[84px] items-center gap-3 whitespace-nowrap rounded-full border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,248,253,0.96))] px-5 shadow-sm transition-[transform,box-shadow,border-color] duration-300 [transform:perspective(920px)_rotateX(11deg)] hover:[transform:perspective(920px)_rotateX(2deg)_translateY(-3px)] hover:border-[var(--primary-300)] hover:shadow-lg dark:bg-[linear-gradient(180deg,rgba(30,41,59,0.97),rgba(17,24,39,0.94))] max-[768px]:h-[72px] max-[768px]:px-3 max-[480px]:h-[68px] max-[480px]:px-4"
                      key={`${tech.name}-${index}`}
                    >
                      <span
                        className="tech-rolling-icon inline-flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-variant)] shadow-sm dark:shadow-none max-[768px]:h-[50px] max-[768px]:w-[50px] max-[480px]:h-[46px] max-[480px]:w-[46px]"
                        aria-hidden="true"
                      >
                        <img
                          src={tech.logo}
                          alt=""
                          className="tech-rolling-logo-image h-[2.1rem] w-[2.1rem] object-contain max-[768px]:h-[1.75rem] max-[768px]:w-[1.75rem] max-[480px]:h-[1.6rem] max-[480px]:w-[1.6rem]"
                          loading="lazy"
                          decoding="async"
                        />
                      </span>
                      <span className="tech-rolling-name text-[0.95rem] font-bold tracking-[0.01em] text-[var(--text-primary)] max-[768px]:text-[0.88rem] max-[480px]:text-[0.84rem]">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="tech-rolling-fade left hidden" aria-hidden="true"></div>
                <div className="tech-rolling-fade right hidden" aria-hidden="true"></div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
