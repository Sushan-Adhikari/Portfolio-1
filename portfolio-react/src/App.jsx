import Footer from './components/Footer'
import Navbar from './components/Navbar'
import {
  achievementData,
  aboutData,
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
import AchievementsSection from './sections/AchievementsSection'
import AboutSection from './sections/AboutSection'
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
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar links={navLinks} />

      <main>
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
    </div>
  )
}

export default App
