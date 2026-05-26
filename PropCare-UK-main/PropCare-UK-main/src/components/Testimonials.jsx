import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { HiStar } from 'react-icons/hi2'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner, Manchester',
    content:
      'Prop Care completely transformed our kitchen. The attention to detail was exceptional — from the initial consultation to the final handover. The renovation was completed on time and within budget. I couldn\'t be happier with the result and would highly recommend their services.',
    rating: 5,
    date: '2025-11-15',
    service: 'Kitchen Renovation',
  },
  {
    name: 'James Cooper',
    role: 'Property Manager, Liverpool',
    content:
      'We\'ve been using Prop Care for our property portfolio maintenance for 3 years now. Their reliability, quality of workmanship, and communication is unmatched. From painting to flooring to general repairs — they\'re our go-to contractor for everything across Liverpool.',
    rating: 5,
    date: '2025-09-22',
    service: 'Property Maintenance',
  },
  {
    name: 'Emma Richardson',
    role: 'Business Owner, Burnley',
    content:
      'Prop Care handled the full renovation of our commercial office space in Burnley. Professional team, excellent project management, and the finished result was outstanding. They transformed our workspace completely. Highly recommend for commercial projects!',
    rating: 5,
    date: '2025-08-10',
    service: 'Commercial Renovation',
  },
  {
    name: 'David Thornton',
    role: 'Landlord, Preston',
    content:
      'From floor installation to full painting and decorating, Prop Care handled our rental property refurbishment in Preston perfectly. Completed on time and within budget with transparent pricing throughout. A+ service and quality craftsmanship!',
    rating: 5,
    date: '2025-12-03',
    service: 'Painting & Flooring',
  },
  {
    name: 'Priya Sharma',
    role: 'Homeowner, Bolton',
    content:
      'Our loft conversion exceeded all expectations. The construction team was professional, clean, and communicative throughout the entire project. The finished result is stunning — a beautiful new master bedroom with en-suite. Bolton\'s best construction company!',
    rating: 5,
    date: '2026-01-18',
    service: 'Loft Conversion',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }
  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [])

  const testimonial = testimonials[current]

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-500/20 bg-electric-500/5 mb-6"
          >
            <span className="text-xs font-semibold text-electric-600 tracking-wider uppercase">
              Testimonials
            </span>
          </motion.div>

          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-navy-800 mb-4"
          >
            What Our Clients <span className="gradient-text">Say</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-navy-500 text-lg"
          >
            Rated <strong className="text-navy-700">4.9 out of 5</strong> from over 127 verified client reviews across North West England.
          </motion.p>
        </div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div
            className="relative bg-gradient-to-br from-navy-50/50 to-white rounded-3xl p-8 sm:p-12 border border-navy-100/50 shadow-lg"
            itemScope
            itemType="https://schema.org/Review"
          >
            {/* Quote Mark */}
            <div className="absolute top-6 left-8 text-8xl font-display text-electric-500/10 leading-none select-none" aria-hidden="true">
              &ldquo;
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6 relative z-10" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
              {[...Array(testimonial.rating)].map((_, i) => (
                <HiStar key={i} className="w-5 h-5 text-amber-400" aria-hidden="true" />
              ))}
            </div>
            <meta itemProp="reviewRating" content={String(testimonial.rating)} />

            {/* Content */}
            <motion.div
              key={current}
              initial={{ opacity: 0, x: direction >= 0 ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -30 : 30 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote>
                <p
                  className="text-lg sm:text-xl text-navy-700 leading-relaxed mb-3 relative z-10"
                  itemProp="reviewBody"
                >
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </blockquote>

              <p className="text-sm text-navy-400 mb-6">
                <span className="font-medium text-electric-600">{testimonial.service}</span>
                {' · '}
                <time dateTime={testimonial.date} itemProp="datePublished">
                  {new Date(testimonial.date).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
                </time>
              </p>

              <div className="flex items-center gap-4" itemProp="author" itemScope itemType="https://schema.org/Person">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-500 to-navy-700 flex items-center justify-center text-white font-display font-bold text-sm" aria-hidden="true">
                  {testimonial.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy-800" itemProp="name">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-navy-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-navy-100">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1)
                      setCurrent(i)
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-6 bg-electric-500'
                        : 'bg-navy-200 hover:bg-navy-300'
                    }`}
                    aria-label={`Go to review by ${testimonials[i].name}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl border border-navy-200 flex items-center justify-center text-navy-500 hover:bg-navy-50 hover:border-navy-300 transition-all duration-300"
                  aria-label="Previous review"
                >
                  <HiChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl border border-navy-200 flex items-center justify-center text-navy-500 hover:bg-navy-50 hover:border-navy-300 transition-all duration-300"
                  aria-label="Next review"
                >
                  <HiChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hidden structured content for crawlers — all testimonials visible */}
        <div className="sr-only" aria-hidden="false">
          <h3>All Client Reviews — Prop Care (NW) LTD</h3>
          {testimonials.map((t) => (
            <article key={t.name} itemScope itemType="https://schema.org/Review">
              <meta itemProp="reviewRating" content={String(t.rating)} />
              <p itemProp="reviewBody">{t.content}</p>
              <span itemProp="author">{t.name}</span>
              <span>{t.role}</span>
              <time itemProp="datePublished" dateTime={t.date}>{t.date}</time>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
