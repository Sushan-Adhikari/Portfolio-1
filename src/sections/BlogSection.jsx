export default function BlogSection({ data }) {
  return (
    <section className="section blog-section" id="blogs">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="gradient-text">Blog</span>
          </h2>
        </div>

        <div className="blog-grid">
          {data.items.map((post) => (
            <div className="blog-card" key={post.title}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} loading="lazy" decoding="async" />
                <div className="blog-category">{post.category}</div>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-status">
                    <i className="fas fa-hourglass-half"></i>
                    Coming Soon
                  </span>
                </div>
                <span className="blog-link blog-link-disabled">Coming Soon</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
