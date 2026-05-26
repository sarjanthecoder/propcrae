import { motion } from 'framer-motion'
import { HiArrowLeft, HiOutlineShieldCheck, HiOutlineEnvelope, HiOutlinePhone, HiOutlineDocumentText } from 'react-icons/hi2'

export default function PrivacyPolicy() {
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
            Legal Notice
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-navy-800 mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-navy-500 text-sm">
            Last Updated: May 26, 2026
          </p>
        </div>

        {/* Content sections */}
        <article className="prose prose-navy max-w-none space-y-8 text-navy-600">
          
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-navy-800">
              1. Introduction & Data Controller
            </h2>
            <p className="leading-relaxed">
              Prop Care (NW) LTD ("we", "us", "our") is committed to protecting and respecting your privacy. For the purposes of the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, we act as the <strong>Data Controller</strong>. This Privacy Policy details how we collect, process, and safeguard the personal information you supply when using our website or contracting our property maintenance services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-navy-800">
              2. Information We Collect
            </h2>
            <p className="leading-relaxed">
              When you interact with our website, fill out our quote request form, or contact us via phone or email, we may collect the following personal identifier information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information</strong>: Full name, email address, phone number, and physical property address.</li>
              <li><strong>Project Details</strong>: Specific service requirements, maintenance notes, property details, and associated communications.</li>
              <li><strong>Technical Data</strong>: IP address, browser type, device information, and interaction history via cookies (used only to optimize site speed and design performance).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-navy-800">
              3. How We Use Your Information
            </h2>
            <p className="leading-relaxed">
              We process your personal information purely to conduct business operations and fulfill service inquiries under the following legal bases:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contractual Necessity</strong>: To generate free quotes, consult on property renovations, schedule certified tradespeople, and execute maintenance contracts.</li>
              <li><strong>Consent</strong>: To respond to your direct queries through our contact forms or direct WhatsApp channels.</li>
              <li><strong>Legal Compliance</strong>: To maintain accurate financial, tax, and public liability records required by UK regulators.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-navy-800">
              4. Data Retention & Transfer
            </h2>
            <p className="leading-relaxed">
              We retain personal data only as long as necessary to complete your property maintenance projects and fulfill our legal and tax accounting requirements (typically 6 years for business invoice records). All data is stored on highly secure servers within the United Kingdom. We do <strong>not</strong> sell your data to third parties, nor do we transfer personal records outside the UK/EEA.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-navy-800">
              5. Your Legal Rights
            </h2>
            <p className="leading-relaxed">
              Under the UK GDPR, you have the following absolute rights regarding the personal information we process:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right of Access</strong>: Request a complete copy of the personal data we hold about you.</li>
              <li><strong>Right to Rectification</strong>: Demand immediate correction of incomplete or inaccurate records.</li>
              <li><strong>Right to Erasure ("Right to be Forgotten")</strong>: Request removal of your data when it is no longer required for active contracts or statutory obligations.</li>
              <li><strong>Right to Restrict or Object</strong>: Object to processing based on legitimate business interests or withdraw direct communication consent.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              To exercise any of these rights, please email us directly at <a href="mailto:admin@propcarenw.co.uk" className="text-electric-600 hover:text-electric-500 font-medium transition-colors">admin@propcarenw.co.uk</a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-navy-800">
              6. Cookies & Analytical Telemetry
            </h2>
            <p className="leading-relaxed">
              Our website uses cookies and similar caching technologies to improve browser loading speeds, preserve layout selections, and track generic visitor counts. You can disable cookies completely via your browser settings; however, this may occasionally restrict minor loading optimizations during initial rendering.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-navy-800">
              7. Contact Information
            </h2>
            <p className="leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact our data safety coordinator:
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
                <span>Company Registered in England & Wales</span>
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
