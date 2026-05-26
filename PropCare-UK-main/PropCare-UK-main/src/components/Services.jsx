import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import {
  HiOutlineHome,
  HiOutlinePaintBrush,
  HiOutlineWrench,
  HiOutlineSquares2X2,
  HiOutlineSparkles,
} from 'react-icons/hi2'

import { HiArrowRight } from 'react-icons/hi'

import { Droplets } from 'lucide-react'

const services = [
  {
    icon: HiOutlineWrench,
    title: 'Property Maintenance',
    slug: 'property-maintenance',
    description:
      'Comprehensive property maintenance solutions to keep your property in pristine condition. From plumbing and electrical to HVAC servicing and general repairs across North West England.',
    features: [
      'Plumbing & Electrical',
      'HVAC Servicing',
      'General Repairs',
    ],
    gradient: 'from-blue-500 to-cyan-400',
  },

  {
    icon: HiOutlineHome,
    title: 'Renovation',
    slug: 'renovation',
    description:
      'Complete property renovation services from concept to completion including kitchen refurbishment, bathroom upgrades, and full property transformations.',
    features: [
      'Kitchen Renovation',
      'Bathroom Refurbishment',
      'Full Property Upgrades',
    ],
    gradient: 'from-orange-500 to-amber-400',
  },

  {
    icon: HiOutlinePaintBrush,
    title: 'Painting & Decorating',
    slug: 'painting-decorating',
    description:
      'Professional interior and exterior painting services with premium finishes, modern styling, wallpapering, and decorative improvements.',
    features: [
      'Interior Painting',
      'Exterior Coating',
      'Wallpapering',
    ],
    gradient: 'from-rose-500 to-pink-400',
  },

  {
    icon: HiOutlineSquares2X2,
    title: 'Flooring & Tiling',
    slug: 'flooring-tiling',
    description:
      'Expert flooring and tiling installation including hardwood flooring, laminate, ceramic tiling, luxury vinyl, and natural stone finishes.',
    features: [
      'Hardwood Flooring',
      'Ceramic Tiling',
      'Luxury Vinyl',
    ],
    gradient: 'from-emerald-500 to-teal-400',
  },

  {
    icon: Droplets,
    title: 'Skimming',
    slug: 'skimming',
    description:
      'Professional plaster skimming and wall finishing services delivering smooth surfaces ready for painting and decorating.',
    features: [
      'Wall Skimming',
      'Ceiling Skimming',
      'Surface Repairs',
    ],
    gradient: 'from-sky-500 to-blue-400',
  },

  {
    icon: HiOutlineSparkles,
    title: 'Professional Cleaning',
    slug: 'professional-cleaning',
    description:
      'Deep cleaning and maintenance cleaning services for residential and commercial properties using safe and eco-friendly products.',
    features: [
      'Deep Cleaning',
      'End of Tenancy',
      'Commercial Cleaning',
    ],
    gradient: 'from-violet-500 to-purple-400',
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-80px',
  })

  return (
    <motion.article
      ref={ref}
      id={service.slug}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="group relative"
    >
      <div className="relative h-full bg-white rounded-3xl p-8 border border-navy-100/50 hover:border-electric-500/20 shadow-sm hover:shadow-2xl hover:shadow-electric-500/5 transition-all duration-500 hover:-translate-y-2">

        {/* Icon */}
        <div
          className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
          aria-hidden="true"
        >
          <service.icon className="w-7 h-7 text-white" />
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold text-navy-800 mb-3">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-navy-500 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-8">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-navy-600"
            >
              <div
                className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}
              />

              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-electric-600 hover:text-electric-500 transition-colors duration-300"
          aria-label={`Get a quote for ${service.title}`}
        >
          Get a Quote

          <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.article>
  )
}

export default function Services() {
  const headingRef = useRef(null)

  const isHeadingInView = useInView(headingRef, {
    once: true,
    margin: '-80px',
  })

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-navy-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          ref={headingRef}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-500/20 bg-electric-500/5 mb-6"
          >
            <span className="text-xs font-semibold text-electric-600 tracking-wider uppercase">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="font-display text-4xl sm:text-5xl font-bold text-navy-800 mb-6"
          >
            Property Services Across{' '}
            <span className="gradient-text">
              North West England
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="text-navy-500 text-lg leading-relaxed"
          >
            From property maintenance to full renovations,
            Prop Care (NW) LTD delivers trusted, high-quality
            services across Manchester, Liverpool, Burnley,
            Blackburn, Bolton, and Preston.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}