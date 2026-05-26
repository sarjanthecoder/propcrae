import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'Areas', href: '#areas' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header>
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-dark shadow-lg shadow-navy-900/10 py-3'
          : 'bg-transparent py-5'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#"
            className="flex items-center group"
            aria-label="Prop Care (NW) LTD — Property Maintenance North West England — Home"
          >
            <picture className="h-16 w-auto object-contain">
              <source srcSet="/logo.webp" type="image/webp" />
              <img
                src="/logo.png"
                alt="Prop Care (NW) LTD — Property Maintenance and Renovation Services in Manchester, Liverpool & North West England"
                width={64}
                height={64}
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                fetchPriority="high"
              />
            </picture>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? 'text-navy-200 hover:text-white hover:bg-white/10'
                    : 'text-navy-600 hover:text-navy-900 hover:bg-navy-100/60'
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="#contact"
              id="nav-cta-quote"
              className="ml-4 px-6 py-3 rounded-2xl bg-gradient-to-r from-electric-500 to-electric-600 text-white text-sm font-semibold shadow-lg shadow-electric-500/20 hover:shadow-electric-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              aria-label="Get a free property maintenance quote"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors duration-300 ${
              scrolled
                ? 'text-white hover:bg-white/10'
                : 'text-navy-700 hover:bg-navy-100'
            }`}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-dark mt-2 mx-4 rounded-3xl overflow-hidden shadow-2xl"
            role="menu"
          >
            <div className="p-4 space-y-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  role="menuitem"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-navy-200 hover:text-white hover:bg-white/5 transition-all duration-200 text-sm font-medium"
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block mt-4 px-4 py-3 rounded-2xl bg-gradient-to-r from-electric-500 to-electric-600 text-white text-center text-sm font-semibold shadow-lg shadow-electric-500/20"
                role="menuitem"
              >
                Get Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </header>
  )
}