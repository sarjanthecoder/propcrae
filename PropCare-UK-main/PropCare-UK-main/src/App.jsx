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
      const hash = window.location.hash
      setCurrentHash(hash)

      if (['#privacy', '#terms'].includes(hash)) {
        window.scrollTo({ top: 0, behavior: 'instant' })
      } else if (hash && hash.startsWith('#') && hash.length > 1) {
        const id = hash.substring(1)
        // Wait for mobile menu collapse animations to finish and layout to settle
        setTimeout(() => {
          const element = document.getElementById(id)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 120)
      }
    }
    window.addEventListener('hashchange', handleHashChange)

    // Trigger scrolling on initial load if landed on hash
    if (window.location.hash) {
      setTimeout(handleHashChange, 200)
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
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
