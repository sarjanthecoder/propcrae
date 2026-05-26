import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'

const categories = ['All', 'Renovation', 'Painting', 'Flooring', 'Construction']

const galleryItems = [
  {
    title: 'Modern Kitchen Renovation in Manchester',
    category: 'Renovation',
    description: 'Complete kitchen overhaul with premium marble countertops, navy cabinetry, and designer pendant lighting for a Manchester homeowner.',
    image: '/projects/kitchen-renovation.png',
    stats: { duration: '6 Weeks', area: 'Manchester' },
    alt: 'Modern kitchen renovation project by Prop Care NW in Manchester featuring marble countertops and navy cabinetry',
  },
  {
    title: 'Exterior House Painting in North West England',
    category: 'Painting',
    description: 'Full exterior repaint with weather-resistant coating and precision masking for a flawless, long-lasting finish on a residential property.',
    image: '/projects/exterior-painting.png',
    stats: { duration: '2 Weeks', area: 'North West' },
    alt: 'Professional exterior house painting by Prop Care NW with weather-resistant coating in North West England',
  },
  {
    title: 'Hardwood Floor Installation in Liverpool',
    category: 'Flooring',
    description: 'Premium oak hardwood flooring in herringbone pattern across the entire ground floor living space of a Liverpool residential property.',
    image: '/projects/hardwood-flooring.png',
    stats: { duration: '3 Weeks', area: 'Liverpool' },
    alt: 'Herringbone pattern oak hardwood flooring installed by Prop Care NW in Liverpool',
  },
  {
    title: 'Luxury Bathroom Transformation in Preston',
    category: 'Renovation',
    description: 'Luxury bathroom renovation with walk-in rainfall shower, marble tiling, and matte black fixtures for a Preston homeowner.',
    image: '/projects/bathroom-renovation.png',
    stats: { duration: '4 Weeks', area: 'Preston' },
    alt: 'Luxury bathroom renovation with walk-in shower and marble tiling by Prop Care NW in Preston',
  },
  {
    title: 'Living Room Repaint in Salford',
    category: 'Painting',
    description: 'Feature wall in deep navy blue with crisp white surrounds — a complete living room colour refresh creating a modern, inviting atmosphere.',
    image: '/projects/living-room-paint.png',
    stats: { duration: '4 Days', area: 'Salford' },
    alt: 'Living room feature wall painting in navy blue by Prop Care NW in Salford',
  },
  {
    title: 'Loft Conversion in Bolton',
    category: 'Construction',
    description: 'Full loft conversion transforming unused attic space into a spacious, light-filled master bedroom with en-suite bathroom.',
    image: '/projects/loft-conversion.png',
    stats: { duration: '8 Weeks', area: 'Bolton' },
    alt: 'Professional loft conversion by Prop Care NW creating a master bedroom with en-suite in Bolton',
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
      aria-label={project.title}
    >
      <div className="relative h-full bg-white rounded-3xl border border-navy-100/60 shadow-sm hover:shadow-2xl hover:shadow-navy-900/8 hover:-translate-y-1 hover:scale-[1.01] hover:border-electric-500/15 transition-all duration-500 ease-out overflow-hidden">
        {/* Image Container */}
        <figure className="relative aspect-[16/10] overflow-hidden">
          <picture className="w-full h-full object-cover">
            <source srcSet={project.image.replace('.png', '.webp')} type="image/webp" />
            <img
              src={project.image}
              alt={project.alt}
              width={640}
              height={400}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </picture>
          {/* Subtle dark overlay on hover */}
          <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/5 transition-colors duration-500" aria-hidden="true" />

          {/* Category Pill — always visible, top-left */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-white/90 backdrop-blur-md text-navy-700 border border-navy-100/40 shadow-sm">
              {project.category}
            </span>
          </div>

          {/* Arrow — top-right, always visible, enhanced on hover */}
          <div className="absolute top-4 right-4">
            <div className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md border border-navy-100/40 shadow-sm flex items-center justify-center group-hover:bg-electric-500 group-hover:border-electric-500 group-hover:shadow-lg group-hover:shadow-electric-500/20 transition-all duration-400" aria-hidden="true">
              <HiArrowUpRight className="w-4 h-4 text-navy-600 group-hover:text-white group-hover:rotate-12 transition-all duration-300" />
            </div>
          </div>
        </figure>

        {/* Content */}
        <div className="p-6 pb-7">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] font-medium text-navy-400 uppercase tracking-wider">
              {project.stats.area}
            </span>
            <span className="w-1 h-1 rounded-full bg-navy-200" aria-hidden="true" />
            <span className="text-[11px] font-medium text-navy-400 uppercase tracking-wider">
              {project.stats.duration}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-lg font-bold text-navy-800 mb-2 group-hover:text-electric-600 transition-colors duration-300 leading-snug">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-navy-500 leading-relaxed mb-5 line-clamp-2">
            {project.description}
          </p>

          {/* CTA Link */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 group-hover:text-electric-500 transition-colors duration-300"
            aria-label={`Discuss a similar ${project.category.toLowerCase()} project`}
          >
            Discuss Your Project
            <HiArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" aria-hidden="true" />
          </a>
        </div>

        {/* Bottom glow on hover */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-electric-500/0 to-transparent group-hover:via-electric-500/40 transition-all duration-500" aria-hidden="true" />
      </div>
    </motion.article>
  )
}

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === active)

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="relative py-24 lg:py-32 bg-white"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(26,39,68,1) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-500/20 bg-electric-500/5 mb-6"
          >
            <span className="text-xs font-semibold text-electric-600 tracking-wider uppercase">
              Our Work
            </span>
          </motion.div>

          <motion.h2
            id="gallery-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-navy-800 mb-6"
          >
            Project <span className="gradient-text">Showcase</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-navy-500 text-lg leading-relaxed"
          >
            Explore our portfolio of completed renovation, painting, flooring, and
            construction projects across Manchester, Liverpool, Preston, Bolton, and
            North West England. Every detail reflects our commitment to quality.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              role="tab"
              aria-selected={active === cat}
              aria-controls="gallery-grid"
              className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-navy-800 text-white shadow-lg shadow-navy-800/15'
                  : 'bg-navy-50/80 text-navy-500 hover:bg-navy-100 hover:text-navy-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          id="gallery-grid"
          role="tabpanel"
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {filtered.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-navy-400 text-sm mb-5">
            These are just a few of our recent projects across North West England
          </p>
          <a
            href="#contact"
            id="gallery-cta"
            aria-label="Discuss your property project with Prop Care"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-navy-800 text-white font-semibold text-sm shadow-xl shadow-navy-900/10 hover:bg-navy-700 hover:shadow-navy-900/15 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Discuss Your Project
            <HiArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
