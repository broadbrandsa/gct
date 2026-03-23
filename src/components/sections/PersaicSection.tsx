'use client'

import AnimateOnScroll from '@/components/AnimateOnScroll'
import Image from 'next/image'

const coreCapabilities = [
  { num: '01', title: '360° Customer & Operations View', desc: 'Unify insights from every channel and system into a single intelligence layer. CRM, billing, network usage, campaign data, and customer service data merge into one coherent picture.' },
  { num: '02', title: 'Predictive Foresight', desc: 'Move from reactive reporting to proactive intelligence. ML models anticipate customer behaviour, market shifts, and emerging opportunities before they become obvious.' },
  { num: '03', title: 'Real-Time Decision Engine', desc: 'Drive faster, smarter decisions with live data streams and instant recommendations. Right-now intelligence that GCT\'s teams can act on immediately.' },
  { num: '04', title: 'Persona-First Targeting', desc: 'Move beyond basic demographic segmentation to true persona modelling. Rich, behavioural personas from actual customer data — not assumed demographics.' },
  { num: '05', title: 'Measurable ROI', desc: 'Every dataset becomes a clear, measurable business outcome. The attribution engine tracks the entire journey from data insight to campaign execution to revenue.' },
]

const adFeatures = [
  { title: 'Scalable Creative Production', desc: 'Rapid production of dynamic ad creatives without external design teams. PersAIc generates and adapts creative assets at scale — maintaining brand consistency while reducing cost.' },
  { title: 'Accelerated Campaign Launch', desc: 'Automated workflows handle creative generation, audience targeting, channel allocation, and performance tracking — accelerating time to market.' },
  { title: 'Dynamic Product Ads & Attribution', desc: 'Automated creative updates directly from product catalogue data. Every ad is hyper-relevant with clear attribution and measurable ROI.' },
]

export default function PersaicSection() {
  return (
    <section id="persaic" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <Image src="/logos/Persaic.png" alt="PersAIc" width={120} height={48} className="h-8 w-auto mb-6" />
          <div className="section-label mb-4">07 — PersAIc</div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={80}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2">
            Data Intelligence <span style={{ color: '#032572' }}>& Advertising</span>
          </h2>
          <p className="text-lg text-[#6c757d] font-medium mb-8">Turning Data Into Actionable Intelligence</p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={160}>
          <div className="max-w-3xl mb-12">
            <p className="text-base sm:text-lg text-[#6c757d] leading-relaxed mb-4">
              PersAIc transforms raw data into real-time intelligence that drives smarter decisions and scalable revenue. Instead of overwhelming GCT&apos;s teams with static dashboards, PersAIc creates a living ecosystem where data flows seamlessly across teams, systems, and channels.
            </p>
            <p className="text-base sm:text-lg text-[#6c757d] leading-relaxed">
              Where Xanite manages the subscriber lifecycle, PersAIc sits above it as the intelligence and monetisation engine — enriching data with predictive analytics and activating it through dynamic advertising.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Tagline */}
        <AnimateOnScroll animation="scale-in" delay={240}>
          <div className="bg-[#032572] rounded-2xl p-8 sm:p-10 text-center mb-16">
            <p className="text-2xl sm:text-3xl font-black text-white">
              Smarter Ads. Real-Time Insights. Scalable Revenue.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Core capabilities */}
        <AnimateOnScroll animation="fade-up" delay={80}>
          <h3 className="text-xl font-bold text-[#212529] mb-6">Intelligence Capabilities</h3>
        </AnimateOnScroll>

        <div className="space-y-3 mb-16">
          {coreCapabilities.map((cap, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={160 + i * 80}>
              <div className="bg-white border border-gray-200/60 rounded-2xl p-6 card-lift">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-[#10b981]">{cap.num}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#212529] mb-1">{cap.title}</h4>
                    <p className="text-sm text-[#6c757d] leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Ad Platform */}
        <div className="section-divider mb-12" />
        <AnimateOnScroll animation="fade-up" delay={80}>
          <h3 className="text-2xl sm:text-3xl font-black text-[#212529] mb-2">The Advertising Engine</h3>
          <p className="text-[#6c757d] mb-8 max-w-2xl">PersAIc&apos;s advertising capabilities turn GCT&apos;s first-party data into a scalable revenue channel.</p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {adFeatures.map((feature, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={160 + i * 80}>
              <div className="bg-[#f8f9fa] border border-gray-200/60 rounded-2xl p-6 card-lift h-full">
                <div className="w-8 h-8 rounded-lg bg-[#10b981]/10 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-[#10b981]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#212529] mb-2 text-sm">{feature.title}</h4>
                <p className="text-sm text-[#6c757d] leading-relaxed">{feature.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Synergy callout */}
        <AnimateOnScroll animation="fade-up" delay={160}>
          <div className="bg-[#10b981]/5 border border-[#10b981]/15 rounded-2xl p-6 mb-12">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-[#10b981]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h4 className="font-bold text-[#212529] text-sm">PersAIc + Xanite Synergy</h4>
            </div>
            <p className="text-sm text-[#6c757d] leading-relaxed">
              Xanite manages subscriber data, consent, and lifecycle journeys. PersAIc enriches that data with predictive intelligence and activates it through advertising. Together, they create a closed-loop system where subscriber data drives campaigns, campaigns drive revenue, and revenue data feeds back into smarter future campaigns.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Commercial & Contact */}
        <AnimateOnScroll animation="fade-up" delay={240}>
          <div className="bg-white border border-gray-200/60 rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="font-bold text-[#212529] mb-1">Platform Licensing</h4>
                <p className="text-sm text-[#6c757d]">Based on data volume, active advertising channels, and feature requirements.</p>
              </div>
              <div className="text-sm text-[#6c757d]">
                <p className="font-medium text-[#212529]">Contact</p>
                <p>persaic.com · vincentm@dsg.co.za</p>
                <p>+27 82 998 5412</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
