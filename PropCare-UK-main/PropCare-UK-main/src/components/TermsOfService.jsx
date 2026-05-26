import { motion } from 'framer-motion'
import { HiArrowLeft, HiOutlineShieldCheck, HiOutlineEnvelope, HiOutlinePhone, HiOutlineDocumentText } from 'react-icons/hi2'

export default function TermsOfService() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="pt-32 pb-24 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation back */}
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-semibold text-electric-600 hover:text-electric-500 transition-colors mb-12"
          aria-label="Back to Homepage"
        >
          <HiArrowLeft className="w-4 h-4" />
          Back to Home
        </a>

        {/* Header */}
        <div className="border-b border-navy-100 pb-10 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric-500/20 bg-electric-500/5 mb-4 text-electric-600 text-xs font-semibold uppercase tracking-wider">
            <HiOutlineShieldCheck className="w-4 h-4" />
            Terms of Use
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-navy-800 mb-4 tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-navy-500 text-sm">
            Last Updated: May 26, 2026
          </p>
        </div>

        {/* Content sections */}
        <article className="prose prose-navy max-w-none space-y-8 text-navy-600">
          
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-navy-800">
              1. Acceptance of Terms &amp; Scope
            </h2>
            <p className="leading-relaxed">
              These Terms &amp; Conditions govern the use of the Prop Care (NW) LTD ("we", "us", "our") website and constitute a legally binding agreement for all property maintenance, construction, and renovation services contracted through us. By browsing our website, requesting a free estimate, or signing a work order, you ("the Client") agree to be bound by these terms in full.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-navy-800">
              2. Free Quotes, Estimates &amp; Contracts
            </h2>
            <p className="leading-relaxed">
              We provide free, no-obligation quotes for residential and commercial projects across North West England.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Validity</strong>: All written project estimates are valid for 30 calendar days from the date of issue.</li>
              <li><strong>Accuracy</strong>: Estimates are based on initial visual surveys and information supplied by the Client. If unseen structural issues, plumbing rot, or electrical complications are discovered upon starting work, we will supply a revised estimate before proceeding with any additional labor.</li>
              <li><strong>Variations</strong>: Any alterations or additions to the original project scope must be agreed upon in writing.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-navy-800">
              3. Payment &amp; Billing Terms
            </h2>
            <p className="leading-relaxed">
              We accept bank transfers, credit/debit card payments, and cash in British Pounds (GBP). Our payment schedules are structured relative to project size:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Minor Works</strong>: Invoices are issued upon completion and are due immediately or within 7 calendar days as specified on the invoice.</li>
              <li><strong>Major Projects / Renovations</strong>: A deposit of 20% to 50% is required before materials are ordered and work commences. The remainder is billed via agreed-upon progressive stage completions, with a final balance due upon hand-over.</li>
              <li><strong>Late Payments</strong>: We reserve the right to pause ongoing property works if payment stages are missed, and charge statutory interest under UK business guidelines for overdue balances.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-navy-800">
              4. Client Responsibilities &amp; Site Access
            </h2>
            <p className="leading-relaxed">
              To ensure smooth project execution and tradespeople safety, the Client agrees to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide clear and safe access to the property during agreed-upon working hours (typically Monday–Saturday, 7am–7pm).</li>
              <li>Ensure the workspace is cleared of delicate personal belongings, valuable furniture, and hazards prior to project start. We protect fixed elements (such as floors, counters, cabinets) using premium sheets, but are not liable for accidental damage to un-cleared loose elements.</li>
              <li>Secure any necessary municipal planning permissions, building regulation approvals, or local parking permits required for materials delivery.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-navy-800">
              5. Cancellations, Delays &amp; Force Majeure
            </h2>
            <p className="leading-relaxed">
              If the Client needs to reschedule or cancel a booked maintenance session, they must provide at least 48 hours notice. Cancellations made within 24 hours of scheduled tradesperson arrival may be subject to a nominal call-out coverage fee. We are not liable for project completion delays caused by severe weather (for exterior painting), supplier materials shortages, or other events beyond our reasonable control (Force Majeure).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-navy-800">
              6. Quality Guarantee &amp; Warranties
            </h2>
            <p className="leading-relaxed">
              We stand behind the calibre of our property work:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Workmanship Guarantee</strong>: We provide a 12-month guarantee on all structural and decorative installations (e.g. partition walls, tiling, skimming, flooring) against installation defects.</li>
              <li><strong>Materials</strong>: Manufacturer warranties for specific fitted appliances, boilers, paint coatings, or flooring tiles are transferred directly to the Client.</li>
              <li><strong>Exceptions</strong>: Our guarantee does not cover defects arising from normal wear-and-tear, structural shifts in the house foundation, or accidental damage caused by the Client post-completion.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-navy-800">
              7. Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              We hold comprehensive public liability insurance (£5,000,000) for your peace of mind. To the extent permitted by law, our total liability for any claim arising from a project is strictly limited to the total monetary amount paid to us by the Client for that specific service contract. We are not liable for indirect or consequential financial losses.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-navy-800">
              8. Governing Law &amp; Dispute Resolution
            </h2>
            <p className="leading-relaxed">
              These Terms &amp; Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from our website use or contracting of property services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-navy-800">
              9. Company Contact Information
            </h2>
            <p className="leading-relaxed">
              For any formal correspondence regarding these terms or outstanding invoices, please contact our business office:
            </p>
            <div className="bg-navy-50/50 rounded-2xl p-6 border border-navy-100/50 space-y-3 mt-4">
              <p className="font-semibold text-navy-800">Prop Care (NW) LTD</p>
              <div className="flex items-center gap-2 text-sm">
                <HiOutlineEnvelope className="w-4 h-4 text-electric-600" />
                <a href="mailto:admin@propcarenw.co.uk" className="text-electric-600 hover:underline">admin@propcarenw.co.uk</a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <HiOutlinePhone className="w-4 h-4 text-electric-600" />
                <a href="tel:+447938849865" className="text-electric-600 hover:underline">+44 7938 849865</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-500">
                <HiOutlineDocumentText className="w-4 h-4 text-electric-600" />
                <span>Registered Office: North West England, United Kingdom</span>
              </div>
            </div>
          </section>

        </article>

        {/* Back button bottom */}
        <div className="border-t border-navy-100 pt-10 mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-electric-600 hover:text-electric-500 transition-colors"
            aria-label="Back to Homepage"
          >
            <HiArrowLeft className="w-4 h-4" />
            Return to Home Page
          </a>
        </div>

      </div>
    </motion.div>
  )
}
