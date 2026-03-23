'use client'

import AnimateOnScroll from '@/components/AnimateOnScroll'
import Image from 'next/image'

const layers = [
  { num: 1, title: 'CDP Layer', desc: 'Profile Management, Consent Tracking, Event Ingestion, Analytics', detail: 'A unified, real-time customer data store that ingests events from every GCT touchpoint and builds a single, actionable profile for each subscriber.' },
  { num: 2, title: 'Segmentation Layer', desc: 'Real-time and batch segmentation engine', detail: 'Behavioural, transactional, and predictive segments. Identify high-value subscribers, churn risks, upsell candidates, and dormant users — automatically.' },
  { num: 3, title: 'Marketing Layer', desc: 'Campaigns, Journeys, Messages, AI Service', detail: 'Create automated multi-touch journeys for onboarding, retention, win-back, cross-sell, and lifecycle engagement. AI optimises timing and content.' },
  { num: 4, title: 'Integration Layer', desc: 'Webhooks, Connectors, Google, Meta', detail: 'First-party subscriber data flows into advertising platforms for hyper-targeted acquisition and retargeting — while keeping data governance intact.' },
]

const capabilities = [
  { title: 'Real-Time KPIs & Campaign Control', desc: 'Unified dashboard with real-time visibility into campaign performance, subscriber metrics, revenue impact, and engagement rates.' },
  { title: 'GDPR/CCPA/POPIA Consent Management', desc: 'Full regulatory compliance across all channels. Tracks consent at individual level, manages opt-in/opt-out preferences.' },
  { title: 'Automated Multi-Touch Journeys', desc: 'Drag-and-drop journey builder for welcome series, churn prevention, upgrade prompts, and win-back campaigns.' },
  { title: 'AI-Powered Optimisation', desc: 'Continuously learns from campaign performance to optimise timing, channel, and content — without manual intervention.' },
  { title: 'First-Party Data Activation', desc: 'Connect subscriber data to Google Ads and Meta for lookalike audiences, retargeting, and precision acquisition.' },
  { title: 'Telecoms-Native Design', desc: 'Built for MVNO operations — understands prepaid cycles, data consumption, SIM activation flows, and mobile-first engagement.' },
]

export default function XaniteSection() {
  return (
    <section id="xanite" className="py-24 lg:py-32 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <Image src="/logos/Xanite logo.png" alt="Xanite" width={120} height={48} className="h-8 w-auto mb-6" />
          <div className="section-label mb-4">06 — Xanite</div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={80}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2">
            CDP & Marketing <span style={{ color: '#032572' }}>Automation</span>
          </h2>
          <p className="text-lg text-[#6c757d] font-medium mb-8">The MVNO Value Engine · 16 Microservices</p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={160}>
          <div className="max-w-3xl mb-16">
            <p className="text-base sm:text-lg text-[#6c757d] leading-relaxed mb-4">
              Xanite is the engine that turns GCT&apos;s subscriber data into revenue. Built specifically for MVNO and telecoms value creation, Xanite is a comprehensive Customer Data Platform with 16 purpose-built microservices.
            </p>
            <p className="text-base sm:text-lg text-[#6c757d] leading-relaxed">
              Where most CDPs are horizontal tools designed for generic marketing, Xanite understands subscriber lifecycles, data consumption patterns, prepaid/postpaid dynamics, and the unique retention challenges of mobile operators.
            </p>
          </div>
        </AnimateOnScroll>

        {/* 4-Layer Architecture */}
        <AnimateOnScroll animation="fade-up" delay={80}>
          <h3 className="text-xl font-bold text-[#212529] mb-6">Platform Architecture</h3>
        </AnimateOnScroll>

        <div className="space-y-3 mb-16">
          {layers.map((layer, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={160 + i * 80}>
              <div className="bg-white border border-gray-200/60 rounded-2xl p-6 card-lift group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center shrink-0">
                    <span className="text-lg font-black text-[#8b5cf6]">{layer.num}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                      <h4 className="font-bold text-[#212529]">{layer.title}</h4>
                      <span className="text-xs text-[#8b5cf6] font-medium">{layer.desc}</span>
                    </div>
                    <p className="text-sm text-[#6c757d] leading-relaxed">{layer.detail}</p>
                  </div>
                </div>
                {i < 3 && (
                  <div className="flex justify-center mt-3">
                    <svg className="w-4 h-4 text-[#8b5cf6]/20" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Key Capabilities */}
        <AnimateOnScroll animation="fade-up" delay={80}>
          <h3 className="text-xl font-bold text-[#212529] mb-6">Key Capabilities</h3>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {capabilities.map((cap, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={160 + i * 80}>
              <div className="bg-white border border-gray-200/60 rounded-2xl p-6 card-lift h-full">
                <div className="w-8 h-8 rounded-lg bg-[#8b5cf6]/10 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-[#8b5cf6]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#212529] mb-2 text-sm">{cap.title}</h4>
                <p className="text-sm text-[#6c757d] leading-relaxed">{cap.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Commercial & Contact */}
        <AnimateOnScroll animation="fade-up" delay={160}>
          <div className="bg-white border border-gray-200/60 rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="font-bold text-[#212529] mb-1">Platform Licensing</h4>
                <p className="text-sm text-[#6c757d]">Based on active subscriber volume and feature requirements.</p>
              </div>
              <div className="text-sm text-[#6c757d]">
                <p className="font-medium text-[#212529]">Contact</p>
                <p>Xanite.com · vincentm@dsg.co.za</p>
                <p>+27 82 998 5412</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
