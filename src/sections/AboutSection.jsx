import {
  FaAws,
  FaCodeBranch,
  FaComments,
  FaCogs,
  FaCrosshairs,
  FaDatabase,
  FaEye,
  FaMicrochip,
  FaServer,
} from 'react-icons/fa'
import {
  SiApacheairflow,
  SiApachespark,
  SiDatabricks,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGstreamer,
  SiNvidia,
  SiOpencv,
  SiPostgresql,
  SiPytorch,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiTerraform,
  SiYolo,
} from 'react-icons/si'

const techIconMap = {
  python: SiPython,
  pytorch: SiPytorch,
  scikitlearn: SiScikitlearn,
  nlp: FaComments,
  vision: FaEye,
  nvidia: SiNvidia,
  triton: FaMicrochip,
  gstreamer: SiGstreamer,
  yolo: SiYolo,
  opencv: SiOpencv,
  fastapi: SiFastapi,
  flask: SiFlask,
  postgresql: SiPostgresql,
  rest: FaServer,
  pipeline: FaCodeBranch,
  docker: SiDocker,
  aws: FaAws,
  terraform: SiTerraform,
  django: SiDjango,
  react: SiReact,
  databricks: SiDatabricks,
  airflow: SiApacheairflow,
  spark: SiApachespark,
  sql: FaDatabase,
  cicd: FaCogs,
  ec2: FaServer,
  git: SiGit,
  target: FaCrosshairs,
}

function renderTechIcon(tech) {
  if (tech.logo) {
    return <img src={tech.logo} alt="" className="tech-rolling-logo-image" loading="lazy" decoding="async" />
  }

  const IconComponent = techIconMap[tech.icon]
  if (!IconComponent) return <i className={tech.iconClass || 'fas fa-circle'}></i>
  return <IconComponent style={tech.color ? { color: tech.color } : undefined} />
}

export default function AboutSection({ data }) {
  const rollingTech = [...(data.techShowcase || []), ...(data.techShowcase || []), ...(data.techShowcase || [])]

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
              <div className="tech-rolling-showcase" aria-label="Core technology stack">
                <div className="tech-rolling-track">
                  {rollingTech.map((tech, index) => (
                    <div className="tech-rolling-chip" key={`${tech.name}-${index}`}>
                      <span className="tech-rolling-icon" aria-hidden="true">
                        {renderTechIcon(tech)}
                      </span>
                      <span className="tech-rolling-name">{tech.name}</span>
                    </div>
                  ))}
                </div>
                <div className="tech-rolling-fade left" aria-hidden="true"></div>
                <div className="tech-rolling-fade right" aria-hidden="true"></div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
