import { lazy, Suspense, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'
import SchemaMarkup from './components/SchemaMarkup'
import WhatsAppButton from './components/WhatsAppButton'

// Lazy load below-fold components for better Core Web Vitals (LCP)
const Services = lazy(() => import('./components/Services'))
const About = lazy(() => import('./components/About'))
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'))
const Gallery = lazy(() => import('./components/Gallery'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const CoverageAreas = lazy(() => import('./components/CoverageAreas'))
const FAQ = lazy(() => import('./components/FAQ'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

// Legal Pages
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./components/TermsOfService'))

// Minimal loading fallback — invisible, prevents layout shift
function SectionFallback() {
  return <div className="min-h-[200px]" aria-hidden="true" />
}

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
      if (['#privacy', '#terms'].includes(window.location.hash)) {
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    }
    window.addEventListener('hashchange', handleHashChange)

    // Intercept clicks on anchor links for smooth scrolling compatibility
    const handleGlobalClick = (e) => {
      const anchor = e.target.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (href && href.startsWith('#') && href.length > 1) {
        const id = href.substring(1)
        
        // Let legal views change standard hash states
        if (['privacy', 'terms'].includes(id)) return

        e.preventDefault()

        // Update URL state without generic jump
        window.history.pushState(null, '', href)

        // If transitioning from legal pages, restore landing page state
        if (['#privacy', '#terms'].includes(window.location.hash)) {
          setCurrentHash(href)
        }

        // Wait slightly for DOM to mount and scroll smoothly
        setTimeout(() => {
          const element = document.getElementById(id)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    }

    document.addEventListener('click', handleGlobalClick)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      document.removeEventListener('click', handleGlobalClick)
    }
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Invisible SEO component — injects JSON-LD into <head> */}
      <SchemaMarkup />

      {/* Navigation */}
      <Navbar />

      {currentHash === '#privacy' ? (
        <Suspense fallback={<SectionFallback />}>
          <PrivacyPolicy />
        </Suspense>
      ) : currentHash === '#terms' ? (
        <Suspense fallback={<SectionFallback />}>
          <TermsOfService />
        </Suspense>
      ) : (
        /* Main Content */
        <main id="main-content">
          {/* Above-the-fold: loaded eagerly for fast LCP */}
          <Hero />
          <TrustBadges />

          {/* Below-the-fold: lazy loaded for performance */}
          <Suspense fallback={<SectionFallback />}>
            <Services />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <About />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <WhyChooseUs />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Gallery />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Testimonials />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <CoverageAreas />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <FAQ />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
        </main>
      )}

      {/* Footer */}
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>

      {/* Floating Elements */}
      <WhatsAppButton />
    </div>
  )
}

export default App
