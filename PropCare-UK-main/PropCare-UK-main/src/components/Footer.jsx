import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from 'react-icons/hi2'

const footerLinks = {
  Services: [
    { name: 'Property Maintenance', href: '#property-maintenance' },
    { name: 'Renovation', href: '#renovation' },
    { name: 'Painting & Decorating', href: '#painting-decorating' },
    { name: 'Flooring & Tiling', href: '#flooring-tiling' },
    { name: 'Partition & Plasterboard', href: '#partition-plasterboard' },
    { name: 'Skimming', href: '#skimming' },
    { name: 'Home Improvement', href: '#home-improvement' },
  ],
  Company: [
    { name: 'About Us', href: '#about' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Project Gallery', href: '#gallery' },
    { name: 'Client Reviews', href: '#testimonials' },
    { name: 'Coverage Areas', href: '#areas' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ],
  'Areas We Serve': [
    { name: 'Manchester', href: '#areas' },
    { name: 'Liverpool', href: '#areas' },
    { name: 'Burnley', href: '#areas' },
    { name: 'Blackburn', href: '#areas' },
    { name: 'Bolton', href: '#areas' },
    { name: 'Preston', href: '#areas' },
  ],
}

export default function Footer() {
  return (
    <footer
      className="relative bg-navy-950 text-white overflow-hidden"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-electric-500/3 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand & NAP Block */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <picture className="w-10 h-10 rounded-xl object-contain">
                <source srcSet="/logo.webp" type="image/webp" />
                <img
                  src="/logo.png"
                  alt="Prop Care (NW) LTD logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-xl object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div>
                <span className="font-display font-bold text-lg text-white">Prop Care</span>
                <span className="block text-[10px] font-medium tracking-[0.2em] uppercase text-navy-400">(NW) LTD</span>
              </div>
            </div>

            {/* SEO-rich business description */}
            <p className="text-navy-400 text-sm leading-relaxed mb-6 max-w-sm">
              Prop Care (NW) LTD — Expert property maintenance, renovation, painting &amp;
              decorating, flooring &amp; tiling, partition works, skimming, and home improvement
              services across Manchester, Liverpool, Burnley, Blackburn, Bolton, Preston,
              and North West England. Fully insured. Quality guaranteed.
            </p>

            {/* NAP — Name, Address, Phone (Critical for Local SEO) */}
            <address className="not-italic space-y-3">
              <a
                href="tel:+447938849865"
                className="flex items-center gap-3 text-sm text-navy-400 hover:text-electric-400 transition-colors"
                aria-label="Call Prop Care NW on +44 7938 849865"
              >
                <HiOutlinePhone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                +44 7938 849865
              </a>
              <a
                href="mailto:admin@propcarenw.co.uk"
                className="flex items-center gap-3 text-sm text-navy-400 hover:text-electric-400 transition-colors"
                aria-label="Email Prop Care NW at admin@propcarenw.co.uk"
              >
                <HiOutlineEnvelope className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                admin@propcarenw.co.uk
              </a>
              <div className="flex items-center gap-3 text-sm text-navy-400">
                <HiOutlineMapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                North West England, United Kingdom
              </div>
            </address>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <nav key={title} aria-label={`${title} links`}>
              <div className="font-display font-bold text-white mb-6">{title}</div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-navy-400 hover:text-electric-400 transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-navy-500">
            © {new Date().getFullYear()} Prop Care (NW) LTD. All rights reserved.
            Property Maintenance &amp; Renovation Services in North West England.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-sm text-navy-500 hover:text-navy-300 transition-colors" aria-label="Privacy Policy">Privacy Policy</a>
            <a href="#terms" className="text-sm text-navy-500 hover:text-navy-300 transition-colors" aria-label="Terms of Service">Terms of Service</a>
            <a
              href="/sitemap.xml"
              className="text-sm text-navy-500 hover:text-navy-300 transition-colors"
              aria-label="View XML sitemap"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
