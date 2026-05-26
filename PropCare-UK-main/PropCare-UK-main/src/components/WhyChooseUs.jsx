import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  HiOutlineCheckBadge,
  HiOutlineBolt,
  HiOutlineCurrencyPound,
  HiOutlineHandThumbUp,
  HiOutlineWrench,
  HiOutlineShieldCheck,
} from 'react-icons/hi2'

const reasons = [
  {
    icon: HiOutlineCheckBadge,
    title: 'Quality Guaranteed',
    description: 'Every project is delivered with a workmanship guarantee. We never cut corners — your complete satisfaction is our benchmark for success. All work meets UK building standards.',
  },
  {
    icon: HiOutlineCurrencyPound,
    title: 'Transparent Pricing',
    description: 'No hidden fees, no surprises, no inflated quotes. Get detailed, upfront pricing before any work begins. We believe in honest, fair pricing for every property service.',
  },
  {
    icon: HiOutlineBolt,
    title: 'Fast Turnaround',
    description: 'Efficient project management ensures your property work is completed on schedule, every time. Most quotes delivered within 24 hours. Emergency services available 24/7.',
  },
  {
    icon: HiOutlineHandThumbUp,
    title: 'Customer First Approach',
    description: 'Your needs drive everything we do. We listen carefully, adapt to your requirements, and deliver exactly what you envision. 98% of our clients say they\'d recommend us.',
  },
  {
    icon: HiOutlineWrench,
    title: 'Skilled Tradespeople',
    description: 'Our team consists of certified, experienced professionals across all trades — from painting and tiling to plastering and structural work. Over 15 years of combined industry experience.',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Fully Insured',
    description: 'Comprehensive public liability insurance and full certifications give you complete peace of mind on every project. We protect your property as if it were our own.',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" aria-hidden="true" />

      {/* Background Effects */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-electric-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-electric-400/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-500/20 bg-electric-500/10 mb-6"
          >
            <span className="text-xs font-semibold text-electric-400 tracking-wider uppercase">
              Why Choose Us
            </span>
          </motion.div>

          <motion.h2
            id="why-us-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            The Prop Care{' '}
            <span className="gradient-text-light">Difference</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-navy-300 text-lg leading-relaxed"
          >
            We're not just another property maintenance company. With 500+ completed projects
            and a 4.9/5 customer rating, here's what sets Prop Care (NW) LTD apart from the rest.
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              role="listitem"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative rounded-3xl p-8 border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] hover:border-electric-500/20 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-500/20 to-electric-400/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                <reason.icon className="w-6 h-6 text-electric-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-navy-300 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <a
            href="#contact"
            id="why-us-cta"
            aria-label="Start your property project with Prop Care today"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-electric-500 to-electric-600 text-white font-semibold text-lg shadow-2xl shadow-electric-500/20 hover:shadow-electric-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
