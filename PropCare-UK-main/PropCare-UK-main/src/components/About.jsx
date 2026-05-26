import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineUserGroup,
} from 'react-icons/hi2'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy-50/40 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left Side — Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden bg-gradient-to-br from-[#132b57] via-[#0f2347] to-black shadow-2xl">

              {/* Grid Overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
                aria-hidden="true"
              />

              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

                {/* Logo */}
                <picture className="w-28 sm:w-40 md:w-52 h-auto object-contain mb-4 mx-auto drop-shadow-2xl">
                  <source srcSet="/logo.webp" type="image/webp" />
                  <img
                    src="/logo.png"
                    alt="Prop Care (NW) LTD — Property Maintenance and Renovation Company in North West England"
                    width={208}
                    height={208}
                    className="w-28 sm:w-40 md:w-52 h-auto object-contain mb-4 mx-auto drop-shadow-2xl"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>

                {/* Company Name */}
                <div className="text-white font-display text-2xl sm:text-4xl font-bold leading-tight mb-3">
                  Prop Care (NW) LTD
                </div>

                {/* Subtitle */}
                <p className="text-blue-300 text-sm sm:text-lg">
                  Excellence in Property Maintenance &amp; Renovation
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side — Content */}
          <motion.article
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 mb-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-blue-600">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2
              id="about-heading"
              className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6 leading-tight"
            >
              Trusted Property Experts in{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                North West England
              </span>
            </h2>

            {/* EEAT-Optimised Content — Experience, Expertise, Authority, Trust */}
            <p className="text-navy-500 text-lg leading-relaxed mb-6">
              Prop Care (NW) LTD is a trusted property maintenance and construction
              company proudly serving Manchester, Liverpool, Burnley, Blackburn,
              Bolton, Preston, and the wider North West England region.
              With over 15 years of combined experience and more than 500 successfully
              completed projects, our team of certified tradespeople specialises in
              delivering premium-quality property services.
            </p>

            <p className="text-navy-500 text-lg leading-relaxed mb-10">
              We specialise in property maintenance, renovation, painting &amp;
              decorating, flooring &amp; tiling, partition &amp; plasterboard works,
              skimming, and home improvement. Every project is delivered with
              transparent pricing, clear communication, full insurance coverage,
              and a commitment to on-time completion. Whether it's a single room
              refresh or a complete property transformation, we bring the same
              level of care, precision, and professionalism to every job.
            </p>

            {/* Key Differentiators */}
            <div className="space-y-6">
              {[
                {
                  icon: HiOutlineShieldCheck,
                  title: 'Fully Insured & Certified',
                  desc: 'Complete peace of mind with comprehensive public liability insurance and qualified professional tradespeople on every project.',
                },
                {
                  icon: HiOutlineClock,
                  title: 'On-Time Project Delivery',
                  desc: 'Efficient project management and clear timelines ensure your property work is completed on schedule, every single time.',
                },
                {
                  icon: HiOutlineUserGroup,
                  title: '500+ Projects Completed',
                  desc: 'A proven track record of premium-quality workmanship across North West England with a 98% client satisfaction rate.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex gap-4 group"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    <item.icon className="w-7 h-7 text-blue-600" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-semibold text-navy-900 text-lg mb-1">
                      {item.title}
                    </h3>

                    <p className="text-navy-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
