import Reveal from '../components/Reveal'

export default function CertificationsSection({ data }) {
  return (
    <section className="section certifications-section" id="certifications">
      <div className="container">
        <Reveal className="section-header">
          <h2 className="section-title">
            My <span className="gradient-text">Certifications</span>
          </h2>
        </Reveal>

        <div className="certifications-grid">
          {data.items.map((certification, index) => (
            <Reveal
              className="h-full"
              key={certification.title}
              style={{ transitionDelay: `${Math.min(index * 80, 320)}ms` }}
            >
              <div className="certification-card tilt-card" data-tilt-strength="4.5">
                <div className="cert-icon">
                  <i className={certification.iconClass}></i>
                </div>
                <div className="cert-content">
                  <h4>{certification.title}</h4>
                  <p className="cert-issuer">{certification.issuer}</p>
                  <p className="cert-date">{certification.date}</p>
                  <p className="cert-description">{certification.description}</p>
                  {certification.links?.length ? (
                    <div className="cert-links">
                      {certification.links.map((link) => (
                        <a
                          href={link.href}
                          className="cert-link"
                          target={link.external === false ? undefined : '_blank'}
                          rel={link.external === false ? undefined : 'noopener noreferrer'}
                          key={`${certification.title}-${link.label}`}
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
      </div>
    </section>
  )
}
