'use client'

import AnimateOnScroll from '@/components/AnimateOnScroll'

const products = [
  {
    num: '01',
    name: 'DBOT',
    description:
      'Design, Build, Operate & Transfer — a structured partnership to transform GCT into a fully converged digital operator',
    href: '#dbot',
    color: '#032572',
  },
  {
    num: '02',
    name: 'CXG',
    description:
      'Award-winning customer experience and BPO services with 27 years of delivery across Africa',
    href: '#cxg',
    color: '#0a4bcc',
  },
  {
    num: '03',
    name: 'TeSIM',
    description:
      'Travel eSIM platform with rapid deployment and a 50/50 revenue share model',
    href: '#tesim',
    color: '#0ea5e9',
  },
  {
    num: '04',
    name: 'Cyber Insurance',
    description:
      'ProActive cyber insurance with dynamic risk detection and adaptive coverage',
    href: '#cyber-insurance',
    color: '#ef4444',
  },
  {
    num: '05',
    name: 'Bitdefender',
    description:
      'Enterprise endpoint security, managed detection & response, and a $1M breach warranty',
    href: '#bitdefender',
    color: '#f59e0b',
  },
  {
    num: '06',
    name: 'Xanite',
    description:
      'Customer Data Platform with 16 microservices for segmentation, journeys, and campaign management',
    href: '#xanite',
    color: '#8b5cf6',
  },
  {
    num: '07',
    name: 'PersAIc',
    description:
      'AI-powered data intelligence platform turning raw data into revenue through smarter advertising',
    href: '#persaic',
    color: '#10b981',
  },
]

export default function ProductOverview() {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll animation="fade-up" className="mb-16">
          <p className="section-label mb-3">02 — Solutions Overview</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#212529] leading-tight">
            Seven Solutions.{' '}
            <span style={{ color: '#032572' }}>One Integrated Programme.</span>
          </h2>
          <p className="mt-6 text-lg text-[#6c757d] max-w-3xl leading-relaxed">
            Each solution addresses a specific layer of GCT&apos;s digital transformation — from core network enablement and customer experience to cybersecurity and data intelligence. Together, they form a unified programme designed for speed, scale, and lasting impact.
          </p>
        </AnimateOnScroll>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={i * 80}>
              <a
                href={product.href}
                className="block bg-white border border-gray-200/60 rounded-2xl p-6 card-lift group relative overflow-hidden h-full"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ backgroundColor: product.color }}
                />

                <div className="flex items-start gap-3 mb-4">
                  <span
                    className="text-white text-xs font-bold px-2.5 py-1 rounded-full shrink-0"
                    style={{ backgroundColor: product.color }}
                  >
                    {product.num}
                  </span>
                  <h3 className="text-lg font-bold text-[#212529] group-hover:text-[#032572] transition duration-100 ease-linear">
                    {product.name}
                  </h3>
                </div>

                <p className="text-sm text-[#6c757d] leading-relaxed mb-4">
                  {product.description}
                </p>

                <span className="text-sm font-semibold text-[#032572] group-hover:underline">
                  Learn more &rarr;
                </span>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
