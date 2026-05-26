/**
 * SchemaMarkup — Advanced JSON-LD structured data for SEO & AI search engines.
 * Renders in React's <head> via Helmet-like pattern (direct script injection).
 * This supplements the static JSON-LD in index.html with dynamic React-rendered schemas.
 */
import { useEffect } from 'react'

const BUSINESS_DATA = {
  name: 'Prop Care (NW) LTD',
  alternateName: 'PropCare NW',
  url: 'https://www.propcarenw.co.uk/',
  telephone: '+447938849865',
  email: 'admin@propcarenw.co.uk',
  logo: 'https://www.propcarenw.co.uk/logo.png',
  priceRange: '££',
  currenciesAccepted: 'GBP',
  openingHours: 'Mo-Sa 07:00-19:00',
  areaServed: [
    'Manchester', 'Liverpool', 'Burnley', 'Blackburn',
    'Bolton', 'Preston', 'Wigan', 'Warrington',
    'Stockport', 'Oldham', 'Rochdale', 'Salford',
  ],
  geo: { latitude: 53.4808, longitude: -2.2426 },
}

const services = [
  {
    name: 'Property Maintenance',
    description: 'Comprehensive property maintenance solutions including plumbing, electrical, HVAC servicing, and general repairs across North West England. Our skilled tradespeople handle everything from minor fixes to major maintenance projects.',
    serviceType: 'PropertyMaintenance',
  },
  {
    name: 'Property Renovation',
    description: 'Complete property renovation services from concept to completion. Kitchen & bathroom refurbishment, full house renovation, and extensions across Manchester, Liverpool, and surrounding areas.',
    serviceType: 'Renovation',
  },
  {
    name: 'Painting & Decorating',
    description: 'Professional interior and exterior painting and decorating with premium finishes, wallpapering, and colour consultations. Serving Manchester, Liverpool, Burnley, Blackburn, Bolton, and Preston.',
    serviceType: 'PaintingAndDecorating',
  },
  {
    name: 'Flooring & Tiling',
    description: 'Expert flooring and tiling installation including hardwood, laminate, ceramic tiles, luxury vinyl, and natural stone. Perfect finish guaranteed across NW England.',
    serviceType: 'FlooringAndTiling',
  },
  {
    name: 'Partition & Plasterboard Works',
    description: 'Professional partition wall installation and plasterboard works for commercial and residential properties. Stud walls, fire-rated partitions, and acoustic partitions available.',
    serviceType: 'PartitionWorks',
  },
  {
    name: 'Skimming Services',
    description: 'Expert plaster skimming and re-skimming for walls and ceilings. Achieve a smooth, professional finish ready for painting and decorating across North West England.',
    serviceType: 'Skimming',
  },
  {
    name: 'Home Improvement',
    description: 'Complete home improvement services including loft conversions, extensions, structural work, and property modernisation projects across Manchester, Liverpool, and the wider North West region.',
    serviceType: 'HomeImprovement',
  },
]

function generateServiceSchemas() {
  return services.map((service, index) => ({
    '@type': 'Service',
    '@id': `https://www.propcarenw.co.uk/#service-${index + 1}`,
    name: service.name,
    description: service.description,
    provider: { '@id': 'https://www.propcarenw.co.uk/#organization' },
    areaServed: BUSINESS_DATA.areaServed.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://www.propcarenw.co.uk/#contact',
      servicePhone: BUSINESS_DATA.telephone,
    },
  }))
}

function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': 'https://www.propcarenw.co.uk/#localbusiness',
    name: BUSINESS_DATA.name,
    alternateName: BUSINESS_DATA.alternateName,
    url: BUSINESS_DATA.url,
    telephone: BUSINESS_DATA.telephone,
    email: BUSINESS_DATA.email,
    logo: BUSINESS_DATA.logo,
    image: BUSINESS_DATA.logo,
    priceRange: BUSINESS_DATA.priceRange,
    currenciesAccepted: BUSINESS_DATA.currenciesAccepted,
    paymentAccepted: 'Cash, Bank Transfer, Card',
    description:
      'Prop Care (NW) LTD is a trusted property maintenance and construction company serving North West England. We specialise in renovation, painting & decorating, flooring & tiling, partition & plasterboard works, skimming, and home improvement.',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_DATA.geo.latitude,
      longitude: BUSINESS_DATA.geo.longitude,
    },
    areaServed: BUSINESS_DATA.areaServed.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '19:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Property Services',
      itemListElement: generateServiceSchemas().map((s) => ({
        '@type': 'Offer',
        itemOffered: s,
      })),
    },
    sameAs: [
      "https://www.facebook.com/PropCareNW",
      "https://www.instagram.com/PropCareNW",
      "https://www.linkedin.com/company/propcare-nw"
    ],
  }
}

function generateContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://www.propcarenw.co.uk/#contactpage',
    name: 'Contact Prop Care (NW) LTD',
    description:
      'Get a free, no-obligation quote for property maintenance, renovation, painting, flooring, and construction services in North West England.',
    url: 'https://www.propcarenw.co.uk/#contact',
    mainEntity: {
      '@type': 'Organization',
      name: BUSINESS_DATA.name,
      telephone: BUSINESS_DATA.telephone,
      email: BUSINESS_DATA.email,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: BUSINESS_DATA.telephone,
        email: BUSINESS_DATA.email,
        contactType: 'customer service',
        areaServed: 'GB',
        availableLanguage: 'English',
      },
    },
  }
}

function generateImageGallerySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': 'https://www.propcarenw.co.uk/#gallery-schema',
    name: 'Prop Care Project Portfolio',
    description:
      'Browse our portfolio of completed property maintenance, renovation, painting, and construction projects across North West England.',
    url: 'https://www.propcarenw.co.uk/#gallery',
    about: { '@id': 'https://www.propcarenw.co.uk/#organization' },
  }
}

export default function SchemaMarkup() {
  useEffect(() => {
    const schemas = [
      generateLocalBusinessSchema(),
      generateContactPageSchema(),
      generateImageGallerySchema(),
    ]

    const scripts = schemas.map((schema) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(schema)
      script.setAttribute('data-schema', 'propcare-dynamic')
      document.head.appendChild(script)
      return script
    })

    return () => {
      scripts.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      })
    }
  }, [])

  // This component renders no visible UI — it only injects schema into <head>
  return null
}
