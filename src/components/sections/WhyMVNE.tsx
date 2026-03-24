'use client'

import AnimateOnScroll from '@/components/AnimateOnScroll'
import AnimatedCounter from '@/components/AnimatedCounter'
import Image from 'next/image'

const ecosystem = [
  { name: 'MVNE', desc: 'White glove MVNO enablement from consulting and CVP design through managing daily operations, CVM, and value-added services.', site: 'mvne.co.za', logo: '/logos/MVNE.png' },
  { name: 'CXG', desc: 'Integrated customer experience solutions. 27 years of delivery. 100+ clients. 1,000+ employees across Africa.', site: 'cxg.co.za', logo: '/logos/CXG.png' },
  { name: 'Xanite', desc: 'The MVNO value engine. 16 microservices for advanced segmentation, journey orchestration, and campaigns.', site: 'xanite.com', logo: '/logos/Xanite logo.png' },
  { name: 'PersAIc', desc: 'Turning data into actionable intelligence and scalable revenue through AI-powered insights and dynamic advertising.', site: 'persaic.com', logo: '/logos/Persaic.png' },
  { name: 'eInsurer', desc: 'ProActive cyber insurance with dynamic risk detection, adaptive coverage, and premium incentives.', site: 'einsurer.co.za', logo: '/logos/EInsurer.png' },
  { name: 'Digital Resilience', desc: 'Enterprise-grade endpoint protection, managed detection and response through Bitdefender and McAfee.', site: null, logo: '/logos/Digitalresilience.png' },
  { name: 'BroadBrand', desc: 'AI-driven marketing strategy, content creation, digital advertising, and social media management.', site: null, logo: '/logos/Broadbrand.png' },
]

const differentiators = [
  {
    title: 'Pan-African Execution',
    desc: 'Partnering with consumer-facing brands across Africa for over 25 years. We understand the regulatory landscapes, infrastructure realities, and business cultures of African markets.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'End-to-End Ownership',
    desc: 'From strategy design through platform build, operational delivery, and capability transfer. The same people who write the plan, build the platform, and operate the business.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
  },
  {
    title: 'Commercial Accountability',
    desc: 'Every milestone tied to a measurable business outcome. Phased payments linked to demonstrated progress, not calendar dates. Joint Steering Committee for board-level visibility.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]

export default function WhyMVNE() {
  return (
    <section id="why-mvne" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="section-label mb-4">09 — Why MVNE</div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={80}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            A Partner Built <span style={{ color: '#032572' }}>for Execution</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6c757d] leading-relaxed max-w-3xl mb-12">
            MVNE is not a consulting firm that delivers a strategy document and moves on. MVNE is a White Glove MVNO enablement partner — part of Digital Solutions Group, founded in 1998 — that designs, builds, operates, and transfers complete digital businesses.
          </p>
        </AnimateOnScroll>

        {/* DSG Ecosystem grid */}
        <AnimateOnScroll animation="fade-up" delay={160}>
          <h3 className="text-xl font-bold text-[#212529] mb-6">The DSG Ecosystem</h3>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          {ecosystem.map((company, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={200 + i * 60}>
              <div className="bg-white border border-gray-200/60 rounded-2xl p-5 card-lift h-full flex flex-col">
                {company.logo ? (
                  <Image src={company.logo} alt={company.name} width={80} height={32} className="h-6 w-auto mb-3 object-contain object-left" />
                ) : (
                  <p className="text-sm font-bold text-[#032572] mb-3">{company.name}</p>
                )}
                <p className="text-xs text-[#6c757d] leading-relaxed flex-1">{company.desc}</p>
                {company.site && (
                  <p className="text-xs text-[#032572] font-medium mt-3">{company.site}</p>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* 3 Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {differentiators.map((diff, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={160 + i * 80}>
              <div className="bg-[#f8f9fa] border border-gray-200/60 rounded-2xl p-8 card-lift h-full">
                <div className="w-12 h-12 rounded-xl bg-[#032572]/10 flex items-center justify-center text-[#032572] mb-5">
                  {diff.icon}
                </div>
                <h4 className="text-lg font-bold text-[#212529] mb-3">{diff.title}</h4>
                <p className="text-sm text-[#6c757d] leading-relaxed">{diff.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Proof bar */}
        <AnimateOnScroll animation="scale-in" delay={240}>
          <div className="bg-[#032572] rounded-2xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-black text-white mb-1"><AnimatedCounter value={25} suffix="+" /></p>
              <p className="text-xs text-white/40 uppercase tracking-wider font-medium">Years CX Excellence</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-white mb-1">2013</p>
              <p className="text-xs text-white/40 uppercase tracking-wider font-medium">MVNE Established</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-white mb-1">Pan-African</p>
              <p className="text-xs text-white/40 uppercase tracking-wider font-medium">Market Presence</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-white mb-1">DBOT</p>
              <p className="text-xs text-white/40 uppercase tracking-wider font-medium">Structured Delivery</p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
