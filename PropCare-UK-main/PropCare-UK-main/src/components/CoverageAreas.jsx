import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiOutlineMapPin } from 'react-icons/hi2'

const areas = [
  {
    region: 'North West England',
    locations: [
      { name: 'Manchester', services: 'Renovation, Painting, Flooring' },
      { name: 'Liverpool', services: 'Property Maintenance, Renovation' },
      { name: 'Preston', services: 'Skimming, Painting, Home Improvement' },
      { name: 'Bolton', services: 'Construction, Partition Works' },
      { name: 'Blackburn', services: 'Painting & Decorating, Flooring' },
      { name: 'Burnley', services: 'Flooring & Tiling, Renovation' },
    ],
  },
  {
    region: 'Greater Manchester',
    locations: [
      { name: 'Salford', services: 'Painting & Decorating, Renovation' },
      { name: 'Stockport', services: 'Property Maintenance, Flooring' },
      { name: 'Oldham', services: 'Skimming, Partition Works' },
      { name: 'Rochdale', services: 'Home Improvement, Construction' },
      { name: 'Wigan', services: 'Renovation, Painting' },
      { name: 'Warrington', services: 'Flooring & Tiling, Maintenance' },
    ],
  },
]

export default function CoverageAreas() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="areas"
      aria-labelledby="areas-heading"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" aria-hidden="true" />
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-electric-500/5 blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-500/20 bg-electric-500/10 mb-6"
          >
            <HiOutlineMapPin className="w-4 h-4 text-electric-400" aria-hidden="true" />
            <span className="text-xs font-semibold text-electric-400 tracking-wider uppercase">
              Coverage Areas
            </span>
          </motion.div>

          <motion.h2
            id="areas-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Property Services Across{' '}
            <span className="gradient-text-light">North West England</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-navy-300 text-lg leading-relaxed"
          >
            Prop Care (NW) LTD serves Manchester, Liverpool, Burnley, Blackburn, Bolton,
            Preston, and surrounding areas with dedicated local teams and rapid response times.
          </motion.p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {areas.map((area, index) => (
            <motion.article
              key={area.region}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="rounded-3xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] p-8 transition-all duration-500 hover:border-electric-500/20"
              aria-label={`Services in ${area.region}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-500/20 to-electric-400/10 flex items-center justify-center" aria-hidden="true">
                  <HiOutlineMapPin className="w-5 h-5 text-electric-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {area.region}
                </h3>
              </div>

              <ul className="space-y-4">
                {area.locations.map((location) => (
                  <li
                    key={location.name}
                    className="group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-electric-500/50 group-hover:bg-electric-400 transition-colors duration-300 mt-2 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <span className="text-white font-medium group-hover:text-electric-400 transition-colors duration-300">
                          {location.name}
                        </span>
                        <p className="text-navy-400 text-xs mt-0.5">
                          {location.services}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Map Embed & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          {/* Google Maps Embed */}
          <div className="rounded-2xl overflow-hidden border border-white/10 mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197506.5025927!2d-3.4433238!3d53.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b2db6d3057a5f%3A0xc1e3036e2959e28d!2sNorth%20West%20England!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Prop Care (NW) LTD service coverage area — North West England including Manchester, Liverpool, Burnley, Blackburn, Bolton, and Preston"
              className="w-full"
            />
          </div>

          <p className="text-center text-navy-400 text-sm">
            Don&apos;t see your area? <a href="#contact" className="text-electric-400 hover:text-electric-300 underline underline-offset-2 transition-colors">Contact us</a> — we may still be able to help across the wider North West region.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
