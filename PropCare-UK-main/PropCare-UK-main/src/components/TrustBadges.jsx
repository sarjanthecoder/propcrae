import { motion } from 'framer-motion'
import { HiOutlineShieldCheck, HiOutlineStar, HiOutlineBriefcase, HiOutlineMapPin } from 'react-icons/hi2'

const badges = [
  {
    icon: HiOutlineShieldCheck,
    text: 'Fully Insured & Certified',
    color: 'text-green-600',
  },
  {
    icon: HiOutlineStar,
    text: '4.9/5 Rating · 127 Reviews',
    color: 'text-amber-500',
  },
  {
    icon: HiOutlineBriefcase,
    text: '500+ Projects Completed',
    color: 'text-electric-600',
  },
  {
    icon: HiOutlineMapPin,
    text: 'Serving North West England',
    color: 'text-rose-500',
  },
]

export default function TrustBadges() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      aria-label="Prop Care trust signals and credentials"
      className="relative bg-navy-900 border-y border-white/5 overflow-hidden"
    >
      {/* Animated scrolling ticker */}
      <div className="py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...badges, ...badges, ...badges].map((badge, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 mx-8 text-sm font-medium text-navy-200"
            >
              <badge.icon className={`w-4 h-4 ${badge.color} flex-shrink-0`} aria-hidden="true" />
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
