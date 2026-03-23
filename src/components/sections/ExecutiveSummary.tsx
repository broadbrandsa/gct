'use client'

import AnimateOnScroll from '@/components/AnimateOnScroll'
import AnimatedCounter from '@/components/AnimatedCounter'

const outcomes = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#032572]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v2.25M18 3v2.25M6 21v-2.25M18 21v-2.25M3 6h2.25M3 18h2.25M21 6h-2.25M21 18h-2.25M6 6h12v12H6z" />
      </svg>
    ),
    title: 'End-to-End MVNO Enablement',
    description:
      'A structured DBOT partnership takes GCT from strategic vision through platform build, day-to-day operations, and full capability transfer — delivering a self-sustaining digital telecoms business within nine months.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#032572]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: 'New Revenue Streams at Every Layer',
    description:
      'Travel eSIM services create immediate connectivity revenue. CDP-driven marketing automation deepens subscriber engagement. AI-powered advertising turns first-party data into a monetisation engine.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#032572]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Cybersecurity & Customer Excellence',
    description:
      'Enterprise-grade endpoint protection, proactive cyber insurance, and an award-winning customer experience operation — ensuring GCT\u2019s digital infrastructure is secure.',
  },
]

const metrics = [
  { value: 7, suffix: '', label: 'Integrated Solutions' },
  { display: 'DBOT', label: 'Design\u00B7Build\u00B7Operate\u00B7Transfer' },
  { display: '50/50', label: 'eSIM Revenue Share' },
  { value: 9, suffix: '', label: 'Months', sublabel: 'Transformation Timeline' },
]

export default function ExecutiveSummary() {
  return (
    <section id="overview" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll animation="fade-up" className="mb-16">
          <p className="section-label mb-3">01 — Executive Summary</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#212529] leading-tight">
            A Programme That Delivers{' '}
            <span style={{ color: '#032572' }}>Measurable Outcomes</span>
          </h2>
          <p className="mt-6 text-lg text-[#6c757d] max-w-3xl leading-relaxed">
            GCT stands at a defining moment — the opportunity to evolve from a traditional telecommunications provider into a fully converged, digitally enabled operator. This proposal outlines a clear, actionable path to achieving that vision.
          </p>
          <p className="mt-4 text-lg text-[#6c757d] max-w-3xl leading-relaxed">
            This proposal brings together seven complementary solutions from MVNE and the Digital Solutions Group ecosystem — each addressing a specific layer of digital transformation, yet designed to function as a single, integrated programme.
          </p>
        </AnimateOnScroll>

        {/* Outcome cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {outcomes.map((item, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={i * 80}>
              <div className="bg-white border border-gray-200/60 rounded-2xl p-6 sm:p-8 card-lift h-full">
                <div className="w-12 h-12 rounded-xl bg-[#e8eef9] flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#212529] mb-3">{item.title}</h3>
                <p className="text-sm text-[#6c757d] leading-relaxed">{item.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Quote callout */}
        <AnimateOnScroll animation="fade-up" delay={240}>
          <div className="bg-[#032572] rounded-2xl p-8 sm:p-10 mb-16">
            <blockquote className="text-lg sm:text-xl text-white/90 leading-relaxed font-light italic">
              &ldquo;This proposal brings together seven complementary solutions into a single, cohesive digital transformation programme for GCT — from network enablement to customer engagement to cyber resilience. Each component stands on its own merit, yet the true power lies in their integration.&rdquo;
            </blockquote>
          </div>
        </AnimateOnScroll>

        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={i * 80}>
              <div className="bg-[#f8f9fa] border border-gray-200/60 rounded-2xl p-6 text-center">
                <p className="text-2xl sm:text-3xl font-black text-[#032572]">
                  {'value' in metric && metric.value !== undefined ? (
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  ) : (
                    metric.display
                  )}
                </p>
                <p className="text-sm text-[#6c757d] mt-1 font-medium">
                  {metric.sublabel || metric.label}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
