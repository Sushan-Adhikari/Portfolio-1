export default function Footer({ links = [], social = [] }) {
  const year = new Date().getFullYear()

  const quickLinks = links.filter((link) => ['home', 'about', 'portfolio', 'research'].includes(link.id))
  const moreLinks = [
    { id: 'startups', label: 'Startups' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'blogs', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ]

  const footerSocial = social.filter((item) => ['LinkedIn', 'GitHub', 'Twitter', 'Medium'].includes(item.label))

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <img
                src="/img/sushan-logo-64.webp"
                alt="Sushan Adhikari Logo"
                className="logo-img"
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
              />
              <span className="logo-text">Sushan Adhikari</span>
            </div>
            <p className="footer-description">
              Final-year Computer Engineering student focused on AI/ML, NLP, Computer Vision, and MLOps.
            </p>
            <a href="/Sushan_Adhikari_CV.pdf" download="Sushan_Adhikari_CV.pdf" className="footer-cv-link">
              <i className="fas fa-download"></i>
              <span>Download CV</span>
            </a>
            <div className="footer-social">
              {footerSocial.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="social-link"
                >
                  <i className={item.iconClass}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4>More</h4>
              <ul>
                {moreLinks.map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact Info</h4>
              <ul>
                <li>
                  <i className="fas fa-envelope"></i> sushan.adhikari2060@gmail.com
                </li>
                <li>
                  <i className="fas fa-phone"></i> +977 9810538507
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i> Dhulikhel, Nepal
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} Sushan Adhikari. Crafted with <span className="heart">❤️</span> and focus.
          </p>
        </div>
      </div>
    </footer>
  )
}
