import { motion } from 'framer-motion'
import { HiArrowRight, HiPlay } from 'react-icons/hi'
import { HiOutlineShieldCheck, HiOutlineStar, HiOutlineMapPin } from 'react-icons/hi2'

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero — Property Maintenance Services North West England"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-navy-50/50 to-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Gradient Orbs */}
        <div className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-electric-500/20 to-electric-400/5 blur-3xl animate-float" />
        <div className="absolute bottom-20 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-navy-700/10 to-electric-500/10 blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-electric-500/5 to-transparent blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(26,39,68,1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,39,68,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-32 right-20 w-20 h-20 border border-electric-500/10 rounded-2xl hidden lg:block"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-40 left-20 w-14 h-14 border border-navy-300/10 rounded-xl hidden lg:block"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
            <span className="text-sm font-medium text-navy-700">
              Trusted Property Experts Across North West England
            </span>
          </motion.div>

          {/* Headline — SEO-optimized H1 with primary keywords */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-8"
          >
            <span className="text-navy-800">Expert Property</span>
            <br />
            <span className="text-navy-800">Maintenance &amp; </span>
            <span className="gradient-text">Renovation</span>
          </motion.h1>

          {/* Subheading — keyword-rich, natural language for AI search */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-navy-500 max-w-2xl mx-auto mb-8 leading-relaxed text-balance"
          >
            Prop Care (NW) LTD delivers premium property maintenance, renovation,
            painting &amp; decorating, flooring, and construction services across
            Manchester, Liverpool, and North West England. Fully insured, quality guaranteed.
          </motion.p>

          {/* Trust Signals Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10"
          >
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-600">
              <HiOutlineShieldCheck className="w-4 h-4 text-green-600" aria-hidden="true" />
              Fully Insured &amp; Certified
            </span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-navy-300" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-600">
              <HiOutlineStar className="w-4 h-4 text-amber-500" aria-hidden="true" />
              4.9/5 Customer Rating
            </span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-navy-300" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-600">
              <HiOutlineMapPin className="w-4 h-4 text-electric-600" aria-hidden="true" />
              Serving North West England
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              id="hero-cta-quote"
              aria-label="Get a free property maintenance quote"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-navy-800 to-navy-700 text-white font-semibold text-base shadow-2xl shadow-navy-900/20 hover:shadow-navy-900/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Get Your Free Quote
              <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-electric-500 to-electric-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            </a>
            <a
              href="#services"
              id="hero-cta-services"
              aria-label="Explore our property services"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-navy-200 text-navy-700 font-semibold text-base hover:bg-navy-50 hover:border-navy-300 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <HiPlay className="text-electric-500" aria-hidden="true" />
              Explore Services
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            role="list"
            aria-label="Company statistics"
          >
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '15+', label: 'Years Experience' },
              { value: '24/7', label: 'Emergency Support' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                role="listitem"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="glass-card rounded-2xl p-5 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-2xl sm:text-3xl font-display font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-navy-500 mt-1 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
    </section>
  )
}
