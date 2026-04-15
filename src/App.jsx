import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CVChatbot from './components/CVChatbot'
import {
  aboutData,
  achievementData,
  blogData,
  certificationData,
  contactData,
  experienceData,
  heroData,
  navLinks,
  projectData,
  researchData,
  startupData,
  testimonialData,
} from './data/siteData'
import AboutSection from './sections/AboutSection'
import AchievementsSection from './sections/AchievementsSection'
import BlogSection from './sections/BlogSection'
import CertificationsSection from './sections/CertificationsSection'
import ContactSection from './sections/ContactSection'
import ExperienceSection from './sections/ExperienceSection'
import Hero from './sections/Hero'
import PortfolioSection from './sections/PortfolioSection'
import ResearchSection from './sections/ResearchSection'
import StartupsSection from './sections/StartupsSection'
import TestimonialsSection from './sections/TestimonialsSection'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const hideLoading = () => {
      const loadingScreen = document.getElementById('loadingScreen')
      if (!loadingScreen) return
      window.setTimeout(() => {
        loadingScreen.classList.add('hidden')
      }, 80)
    }

    if (document.readyState === 'complete') {
      hideLoading()
    } else {
      window.addEventListener('load', hideLoading)
    }

    return () => window.removeEventListener('load', hideLoading)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.pageYOffset > 300)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const heroImage = document.querySelector('.hero-image')
    if (!heroImage) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return undefined

    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        heroImage.style.transform = `translate3d(0, ${window.pageYOffset * 0.08}px, 0)`
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="main-content">
      <div className="loading-screen" id="loadingScreen">
        <div className="loader">
          <div className="loader-circle"></div>
          <div className="loader-text">Loading Sushan Adhikari&apos;s portfolio...</div>
        </div>
      </div>

      <div className="particles-container">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <Navbar links={navLinks} />

      <main className="main-wrapper">
        <Hero data={heroData} />
        <AboutSection data={aboutData} />
        <PortfolioSection data={projectData} />
        <ResearchSection data={researchData} />
        <StartupsSection data={startupData} />
        <ExperienceSection data={experienceData} />
        <CertificationsSection data={certificationData} />
        <AchievementsSection data={achievementData} />
        <TestimonialsSection data={testimonialData} />
        <BlogSection data={blogData} />
        <ContactSection data={contactData} />
      </main>

      <Footer links={navLinks} social={contactData.social} />
      <CVChatbot />

      <button
        className={`back-to-top${showBackToTop ? ' show visible' : ''}`}
        aria-label="Back to top"
        id="backToTop"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </div>
  )
}

export default App
