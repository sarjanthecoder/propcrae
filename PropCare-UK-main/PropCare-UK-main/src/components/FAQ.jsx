import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'

const faqs = [
  {
    question: 'What property maintenance services does Prop Care (NW) LTD offer?',
    answer:
      'Prop Care (NW) LTD offers a comprehensive range of property services including property maintenance, renovation, painting & decorating, flooring & tiling, partition & plasterboard works, skimming, and home improvement. We handle everything from minor repairs to complete property transformations for both residential and commercial clients across North West England.',
  },
  {
    question: 'What areas does Prop Care cover in the UK?',
    answer:
      'We cover the entire North West England region, with dedicated local teams in Manchester, Liverpool, Burnley, Blackburn, Bolton, and Preston. We also serve Wigan, Warrington, Stockport, Oldham, Rochdale, Salford, and surrounding areas. Contact us if you\'re unsure — we may still be able to help.',
  },
  {
    question: 'How much does property renovation cost in Manchester?',
    answer:
      'Property renovation costs in Manchester vary depending on the scope, size, and complexity of the project. At Prop Care (NW) LTD, we provide free, no-obligation quotes with fully transparent pricing and no hidden fees. Call us on +44 7938 849865 or fill in our online contact form for a detailed estimate tailored to your specific project.',
  },
  {
    question: 'Is Prop Care (NW) LTD fully insured?',
    answer:
      'Yes, absolutely. Prop Care (NW) LTD is fully insured and certified. We carry comprehensive public liability insurance and all our tradespeople are qualified, experienced professionals. This gives you complete peace of mind on every project we undertake.',
  },
  {
    question: 'How do I get a free quote from Prop Care?',
    answer:
      'Getting a free quote is easy. You can call us directly on +44 7938 849865, email us at admin@propcarenw.co.uk, send us a WhatsApp message, or simply fill in our online contact form. We typically respond within 24 hours with a detailed, no-obligation quote for your project.',
  },
  {
    question: 'What is the typical timeline for a kitchen renovation?',
    answer:
      'A typical kitchen renovation project takes between 4 to 8 weeks depending on the scope of work. This includes design consultation, demolition, structural changes, plumbing and electrical work, fitting, tiling, and final finishing touches. We provide a detailed project timeline during the quoting process so you know exactly what to expect.',
  },
  {
    question: 'Does Prop Care offer emergency property repair services?',
    answer:
      'Yes, Prop Care (NW) LTD offers 24/7 emergency property repair services across North West England. Whether it\'s an urgent plumbing issue, structural damage, or any emergency maintenance need, our rapid-response team is available around the clock. Call +44 7938 849865 for immediate assistance.',
  },
  {
    question: 'Do you provide painting and decorating services in Burnley and Blackburn?',
    answer:
      'Yes, we provide professional painting and decorating services throughout Burnley, Blackburn, and the wider Lancashire area. Our services include interior painting, exterior coating, wallpapering, and colour consultations. All work is carried out by experienced decorators using premium paints and materials.',
  },
  {
    question: 'What flooring options do you install?',
    answer:
      'We install a wide range of flooring options including solid and engineered hardwood, laminate, luxury vinyl tiles (LVT), ceramic and porcelain tiles, natural stone, and carpet. Our flooring specialists serve Manchester, Liverpool, Bolton, Preston, and the wider North West region. We can also advise on the best flooring choice for your property.',
  },
  {
    question: 'Can you do partition and plasterboard work for commercial properties?',
    answer:
      'Yes, we specialise in partition and plasterboard works for both commercial and residential properties. Our services include stud wall partitions, fire-rated partitions, acoustic partitions, drylining, and plasterboard installation. We work with offices, retail spaces, warehouses, and residential properties across North West England.',
  },
  {
    question: 'What is plaster skimming and when is it needed?',
    answer:
      'Plaster skimming is the process of applying a thin coat of finishing plaster over existing walls or plasterboard to create a smooth, flat surface ready for painting or wallpapering. It\'s needed when walls are uneven, damaged, have old textured finishes, or after plasterboard installation. Prop Care (NW) LTD provides expert skimming services across North West England.',
  },
  {
    question: 'How can I prepare my property before renovation work begins?',
    answer:
      'Before renovation work begins, we recommend clearing the work area of personal belongings and valuables, ensuring clear access to the property, and informing neighbours about the planned work. Our project manager will provide a detailed preparation guide specific to your project during the pre-start consultation. We also protect floors, furnishings, and fixtures during work.',
  },
  {
    question: 'Why should I choose Prop Care (NW) LTD over other contractors?',
    answer:
      'Prop Care (NW) LTD stands out with over 15 years of combined experience, 500+ completed projects, a 98% client satisfaction rate, and a 4.9/5 customer rating. We offer transparent pricing with no hidden fees, use only qualified tradespeople, provide full insurance coverage, and guarantee our workmanship. Our local teams across North West England ensure rapid response times and personalised service.',
  },
  {
    question: 'Do you offer payment plans or financing options?',
    answer:
      'We understand that property renovation and improvement can be a significant investment. We accept various payment methods including cash, bank transfer, and card payments. For larger projects, we can discuss flexible payment arrangements. Contact us to discuss the options available for your project.',
  },
]

function FAQItem({ faq, index, isOpen, toggle }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border border-navy-100/60 rounded-2xl overflow-hidden hover:border-electric-500/20 transition-colors duration-300"
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-navy-50/50 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <h3 className="font-display text-base sm:text-lg font-semibold text-navy-800 pr-4 leading-snug">
          {faq.question}
        </h3>
        <HiChevronDown
          className={`w-5 h-5 text-navy-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-electric-600' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      <motion.div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-navy-500 text-sm sm:text-base leading-relaxed">
          {faq.answer}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-navy-50/30"
    >
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-500/20 bg-electric-500/5 mb-6"
          >
            <span className="text-xs font-semibold text-electric-600 tracking-wider uppercase">
              FAQ
            </span>
          </motion.div>

          <motion.h2
            id="faq-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-navy-800 mb-6"
          >
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-navy-500 text-lg leading-relaxed"
          >
            Everything you need to know about our property maintenance, renovation,
            and construction services across North West England.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <p className="text-navy-500 mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="#contact"
            aria-label="Contact Prop Care NW — still have questions about our property services?"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-navy-800 to-navy-700 text-white font-semibold text-sm shadow-xl shadow-navy-900/10 hover:shadow-navy-900/15 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Contact Us
            <HiChevronDown className="w-4 h-4 rotate-[-90deg]" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
