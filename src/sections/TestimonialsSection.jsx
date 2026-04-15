import { useEffect, useState } from 'react'

export default function TestimonialsSection({ data }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!data.items.length) return undefined

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.items.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [data.items.length])

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Mentor <span className="gradient-text">Testimonials</span>
          </h2>
        </div>

        <div className="testimonials-slider">
          <div className="testimonials-container">
            {data.items.map((testimonial, index) => (
              <div
                className={`testimonial-card${index === activeIndex ? ' active' : ''}`}
                key={`${testimonial.author}-${index}`}
              >
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p>"{testimonial.quote}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <i className={testimonial.avatarIconClass}></i>
                  </div>
                  <div className="author-info">
                    <h5>{testimonial.author}</h5>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-navigation">
            {data.items.map((testimonial, index) => (
              <button
                key={`${testimonial.author}-nav-${index}`}
                className={`testimonial-nav-btn${index === activeIndex ? ' active' : ''}`}
                onClick={() => setActiveIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
