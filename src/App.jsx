import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CVChatbot from './components/CVChatbot'
import CustomCursor from './components/CustomCursor'
import { useHideLoadingScreen } from './hooks/useHideLoadingScreen'
import { useBackToTop } from './hooks/useBackToTop'
import { useHeroParallax } from './hooks/useHeroParallax'
import { useTiltCards } from './hooks/useTiltCards'
import { useEqualizeGridHeights } from './hooks/useEqualizeGridHeights'
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
  useHideLoadingScreen()
  const showBackToTop = useBackToTop(300)
  useHeroParallax()
  useTiltCards()
  useEqualizeGridHeights()

  return (
    <div className="main-content">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

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

      <main className="main-wrapper" id="main-content" tabIndex={-1}>
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
      <CustomCursor />

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
