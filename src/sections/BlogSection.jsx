import Reveal from '../components/Reveal'
import { track } from '../lib/analytics'

// Posts whose href still points at the Medium profile root (rather than a real
// article URL) are treated as unpublished and shown as "Coming Soon". Replace a
// post's `href` in siteData with its real article URL and the card automatically
// upgrades to show date · read time and a working "Read article" link.
const MEDIUM_PROFILE_ROOT = 'https://medium.com/@sushan.adhikari2060'

function isPublished(post) {
  if (!post.href) return false
  const href = post.href.replace(/\/+$/, '')
  return href.startsWith('http') && href !== MEDIUM_PROFILE_ROOT
}

export default function BlogSection({ data }) {
  return (
    <section className="section blog-section" id="blogs">
      <div className="container">
        <Reveal className="section-header">
          <h2 className="section-title">
            My <span className="gradient-text">Blog</span>
          </h2>
        </Reveal>

        <div className="blog-grid">
          {data.items.map((post, index) => {
            const published = isPublished(post)

            return (
              <Reveal className="h-full" key={post.title} style={{ transitionDelay: `${Math.min(index * 80, 240)}ms` }}>
                <div className="blog-card tilt-card" data-tilt-strength="5">
                  <div className="blog-image">
                    <img src={post.image} alt={post.title} loading="lazy" decoding="async" />
                    <div className="blog-category">{post.category}</div>
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <div className="blog-meta">
                      {published ? (
                        <>
                          {post.date ? (
                            <span>
                              <i className="far fa-calendar"></i> {post.date}
                            </span>
                          ) : null}
                          {post.readTime ? (
                            <span>
                              <i className="far fa-clock"></i> {post.readTime}
                            </span>
                          ) : null}
                        </>
                      ) : (
                        <span className="blog-status">
                          <i className="fas fa-hourglass-half"></i>
                          Coming Soon
                        </span>
                      )}
                    </div>
                    {published ? (
                      <a
                        className="blog-link"
                        href={post.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => track('blog-click', { title: `Blog: ${post.title}` })}
                      >
                        Read article <i className="fas fa-arrow-right" aria-hidden="true"></i>
                      </a>
                    ) : (
                      <span className="blog-link blog-link-disabled">Coming Soon</span>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
