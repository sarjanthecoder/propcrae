import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineClock,
} from 'react-icons/hi2'

const contactInfo = [
  {
    icon: HiOutlinePhone,
    label: 'Phone',
    value: '+44 7938 849865',
    href: 'tel:+447938849865',
  },
  {
    icon: HiOutlineEnvelope,
    label: 'Email',
    value: 'admin@propcarenw.co.uk',
    href: 'mailto:admin@propcarenw.co.uk',
  },
  {
    icon: HiOutlineMapPin,
    label: 'Service Area',
    value: 'Manchester, Liverpool & North West England',
    href: null,
  },
  {
    icon: HiOutlineClock,
    label: 'Business Hours',
    value: 'Mon–Sat: 7am – 7pm',
    href: null,
  },
]

export default function Contact() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-80px',
  })

  const inputCls =
    'w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-800 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-electric-500/20 focus:border-electric-500 transition-all duration-300 text-sm'

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-navy-50/30"
    >
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-500/20 bg-electric-500/5 mb-6"
          >
            <span className="text-xs font-semibold text-electric-600 tracking-wider uppercase">
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-navy-800 mb-6"
          >
            Get Your Free{' '}
            <span className="gradient-text">
              Quote Today
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-navy-500 text-lg leading-relaxed"
          >
            Request a free, no-obligation quote for property maintenance, renovation,
            or any of our services across North West England.
            We respond within 24 hours.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left Side — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="font-display text-2xl font-bold text-navy-800 mb-8">
              Contact Information
            </h3>

            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="group flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-500/10 to-electric-400/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  <item.icon className="w-5 h-5 text-electric-600" />
                </div>

                <div>
                  <span className="text-xs font-medium text-navy-400 uppercase tracking-wider">
                    {item.label}
                  </span>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="block text-navy-800 font-medium hover:text-electric-600 transition-colors"
                      aria-label={`${item.label}: ${item.value}`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-navy-800 font-medium">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 border border-[#25D366]/20">
              <h4 className="font-display font-bold text-navy-800 mb-2">
                Quick Response via WhatsApp
              </h4>

              <p className="text-navy-500 text-sm mb-4">
                Message us on WhatsApp for a faster response and instant quotes.
              </p>

              <a
                href="https://wa.me/447938849865?text=Hi%20Prop%20Care%2C%20I%27d%20like%20to%20enquire%20about%20your%20property%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-sm font-semibold shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/30 hover:scale-[1.02] transition-all duration-300"
                aria-label="Send a WhatsApp message to Prop Care NW for a free quote"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
            </div>

            {/* Emergency Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/5">
              <h4 className="font-display font-bold text-white mb-2">
                Emergency Repairs? Available 24/7
              </h4>

              <p className="text-navy-300 text-sm mb-4">
                We offer around-the-clock emergency property repair services across North West England.
              </p>

              <a
                href="tel:+447938849865"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-electric-500 to-electric-600 text-white text-sm font-semibold shadow-lg shadow-electric-500/20 hover:scale-[1.02] transition-all duration-300"
                aria-label="Call Prop Care NW for emergency property repairs"
              >
                <HiOutlinePhone className="w-4 h-4" aria-hidden="true" />
                Call +44 7938 849865
              </a>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              id="contact-form"
              className="bg-white rounded-3xl p-8 sm:p-10 border border-navy-100/50 shadow-xl shadow-navy-900/5"
              aria-label="Request a free property services quote"
            >

              {/* Web3Forms Hidden Fields */}
              <input
                type="hidden"
                name="access_key"
                value="987dc439-d943-47e6-a254-8ea3198e2b43"
              />

              <input
                type="hidden"
                name="subject"
                value="New Quote Request - PropCare NW Website"
              />

              <input
                type="hidden"
                name="from_name"
                value="PropCare NW Website"
              />

              {/* Honeypot anti-spam */}
              <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-navy-700 mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>

                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    className={inputCls}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-navy-700 mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>

                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    autoComplete="email"
                    className={inputCls}
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-navy-700 mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    autoComplete="tel"
                    className={inputCls}
                    placeholder="+44 XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-sm font-medium text-navy-700 mb-2">
                    Service Required <span className="text-red-400">*</span>
                  </label>

                  <select
                    id="contact-service"
                    name="service"
                    required
                    className={`${inputCls} bg-white`}
                  >
                    <option value="">
                      Select a service
                    </option>
                    <option value="property-maintenance">
                      Property Maintenance
                    </option>
                    <option value="renovation">
                      Renovation
                    </option>
                    <option value="painting-decorating">
                      Painting &amp; Decorating
                    </option>
                    <option value="flooring-tiling">
                      Flooring &amp; Tiling
                    </option>
                    <option value="partition-plasterboard">
                      Partition &amp; Plasterboard
                    </option>
                    <option value="skimming">
                      Skimming
                    </option>
                    <option value="home-improvement">
                      Home Improvement
                    </option>
                    <option value="emergency">
                      Emergency Repair
                    </option>
                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="contact-location" className="block text-sm font-medium text-navy-700 mb-2">
                    Your Location
                  </label>

                  <input
                    type="text"
                    id="contact-location"
                    name="location"
                    autoComplete="address-level2"
                    className={inputCls}
                    placeholder="e.g. Manchester, Liverpool, Bolton..."
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mt-5">
                <label htmlFor="contact-message" className="block text-sm font-medium text-navy-700 mb-2">
                  Project Details <span className="text-red-400">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  className={`${inputCls} resize-none`}
                  placeholder="Tell us about your property project — type of work, budget range, preferred timeline..."
                />
              </div>

              {/* Submit */}
              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="submit"
                  id="contact-submit"
                  aria-label="Submit your free quote request"
                  className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-navy-800 to-navy-700 text-white font-semibold shadow-2xl shadow-navy-900/20 hover:shadow-navy-900/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Send Message &amp; Get Quote
                </button>
                <p className="text-xs text-navy-400">
                  Free, no-obligation quote. We respond within 24 hours.
                </p>
              </div>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
