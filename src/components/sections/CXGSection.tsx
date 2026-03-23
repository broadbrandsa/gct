'use client'

import AnimateOnScroll from '@/components/AnimateOnScroll'
import AnimatedCounter from '@/components/AnimatedCounter'
import Image from 'next/image'

const capabilities = [
  {
    num: '01',
    title: 'MVNO & VNO Customer Support',
    description:
      'End-to-end service support, technical troubleshooting, inbound sales, and digital engagement tailored specifically for mobile virtual network operators and virtual network operators.',
  },
  {
    num: '02',
    title: 'Technical Support for ISP & Connectivity',
    description:
      'Specialised Tier 1-3 support for fibre, broadband, and fixed-wireless connectivity providers — including complex diagnostics, field-tech coordination, and SLA management.',
  },
  {
    num: '03',
    title: 'Omnichannel Engagement',
    description:
      'Unified voice, live chat, WhatsApp, email, and social media support delivered through a single pane of glass, ensuring consistent customer journeys across every touchpoint.',
  },
  {
    num: '04',
    title: 'Sales Enablement & Revenue Generation',
    description:
      'Inbound and outbound sales campaigns with performance tracking, upsell/cross-sell programmes, and conversion optimisation designed to drive measurable top-line growth.',
  },
  {
    num: '05',
    title: 'QContact Unified Communications Platform',
    description:
      'CXG\'s proprietary enterprise-grade platform integrating all channels, CRM, workforce management, and AI-driven efficiency tools into a single unified communications stack.',
  },
  {
    num: '06',
    title: 'Service Recovery & Churn Reduction',
    description:
      'Proactive service recovery workflows, loyalty support programmes, and data-driven churn prediction models that retain subscribers and protect recurring revenue.',
  },
]

const proofPoints = [
  { value: 27, suffix: '', label: 'Years', sublabel: 'CX delivery' },
  { value: 100, suffix: '+', label: 'Clients', sublabel: 'Served' },
  { value: 1000, suffix: '+', label: 'Employees', sublabel: '' },
  { value: 1.8, suffix: 'M', label: 'Annual', sublabel: 'Interactions', decimals: 1 },
  { value: 93, suffix: '%', label: 'C-SAT', sublabel: 'Satisfaction' },
  { value: 3500, suffix: '+', label: 'Monthly', sublabel: 'Sales' },
]

export default function CXGSection() {
  return (
    <section id="cxg" className="py-24 lg:py-32 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Logo & Header */}
        <AnimateOnScroll animation="fade-up">
          <Image
            src="/logos/CXG.png"
            alt="CXG"
            width={120}
            height={48}
            className="h-10 w-auto mb-6"
          />
          <p className="section-label mb-3">02 — CXG</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#212529] leading-tight">
            Integrated Customer{' '}
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl font-semibold text-[#032572] mt-2">
            On-Demand BPO &amp; Business Process as a Service
          </p>
        </AnimateOnScroll>

        {/* Opening paragraphs */}
        <AnimateOnScroll animation="fade-up" delay={100} className="mt-8 max-w-3xl">
          <p className="text-lg text-[#6c757d] leading-relaxed">
            CXG (Customer Experience Group) is a leading African BPO and BPaaS provider with
            27 years of unbroken service delivery. Operating as a true extension of its clients&apos;
            brands, CXG combines deep domain expertise with a flexible partnership model — scaling
            teams up or down to match demand while maintaining quality and compliance.
          </p>
          <p className="mt-4 text-lg text-[#6c757d] leading-relaxed">
            With over 1,000 employees, a proprietary technology platform, and an award-winning
            approach to customer experience, CXG has served more than 100 enterprise clients across
            telecoms, financial services, retail, and the public sector.
          </p>
        </AnimateOnScroll>

        {/* Why CXG for GCT */}
        <AnimateOnScroll animation="fade-up" delay={200} className="mt-12 mb-12">
          <h3 className="text-2xl font-bold text-[#212529] mb-4">Why CXG for GCT?</h3>
          <p className="text-lg text-[#6c757d] leading-relaxed max-w-3xl">
            Launching an MVNO demands rapid subscriber acquisition and flawless day-one support.
            CXG provides GCT with a turnkey customer operations capability — from first-contact
            resolution and technical troubleshooting through to sales conversion and churn
            management — without the lead time and capital cost of building an in-house contact
            centre.
          </p>
        </AnimateOnScroll>

        <div className="section-divider mb-12" />

        {/* 6 Service Capability Cards */}
        <AnimateOnScroll animation="fade-up" delay={100} className="mb-4">
          <h3 className="text-2xl font-bold text-[#212529]">Service Capabilities</h3>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((cap, i) => (
            <AnimateOnScroll key={cap.num} animation="fade-up" delay={100 + i * 80}>
              <div className="bg-white border border-gray-200/60 rounded-2xl p-6 sm:p-8 card-lift h-full">
                <div className="number-bg w-10 h-10 rounded-xl flex items-center justify-center text-[#032572] text-sm font-bold mb-5">
                  {cap.num}
                </div>
                <h3 className="text-base font-bold text-[#212529] mb-2">{cap.title}</h3>
                <p className="text-sm text-[#6c757d] leading-relaxed">{cap.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Proof Points */}
        <AnimateOnScroll animation="fade-up" delay={100} className="mb-16">
          <div className="bg-white border border-gray-200/60 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 lg:grid-cols-6 divide-x divide-gray-200/60">
              {proofPoints.map((point, i) => (
                <div key={i} className="p-6 text-center">
                  <p className="text-2xl sm:text-3xl font-black text-[#032572]">
                    <AnimatedCounter
                      value={point.value}
                      suffix={point.suffix}
                      decimals={point.decimals ?? 0}
                    />
                  </p>
                  <p className="text-sm font-semibold text-[#212529] mt-1">{point.label}</p>
                  {point.sublabel && (
                    <p className="text-xs text-[#6c757d]">{point.sublabel}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Client Reference Callout */}
        <AnimateOnScroll animation="fade-up" delay={200} className="mb-12">
          <div className="bg-[#032572] rounded-2xl p-8 sm:p-10 text-white">
            <p className="text-sm font-medium text-white/60 uppercase tracking-wider mb-3">
              Industry Recognition
            </p>
            <p className="text-lg sm:text-xl font-semibold leading-relaxed">
              CXG was named Best CX Team of the Year in the Transformation category at the
              South African National Contact Centre Awards — recognised for delivering
              measurable improvements in customer satisfaction, operational efficiency, and
              digital channel adoption across its client portfolio.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Commercial Note */}
        <AnimateOnScroll animation="fade-up" delay={300}>
          <div className="bg-white border border-gray-200/60 rounded-2xl p-6 sm:p-8">
            <p className="text-sm font-semibold text-[#212529] mb-1">Commercial</p>
            <p className="text-sm text-[#6c757d] leading-relaxed">
              CXG pricing is tailored to each engagement — based on channel mix, volume
              commitments, service-level requirements, and campaign complexity. A detailed
              commercial proposal will be provided following a scoping workshop with the GCT team.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
