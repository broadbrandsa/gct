'use client'

import AnimateOnScroll from '@/components/AnimateOnScroll'
import AnimatedCounter from '@/components/AnimatedCounter'
import Image from 'next/image'

const marketStats = [
  { value: 10.5, suffix: ' Trillion', prefix: '$', label: 'Projected annual cybercrime damage globally', decimals: 1 },
  { value: 236.1, suffix: ' Million', label: 'Ransomware attacks in H1 2022', decimals: 1 },
  { value: 4.35, suffix: ' Million', prefix: '$', label: 'Average cost of a data breach', decimals: 2 },
]

const features = [
  {
    num: '01',
    title: 'Comprehensive Risk Visibility',
    desc: 'Complete visibility into GCT\'s risk exposure across all digital touchpoints — networks, platforms, applications, and data stores. eInsurer\'s software maps every vulnerability and provides a clear, actionable risk profile.',
  },
  {
    num: '02',
    title: 'Adaptive & Proactive Protection',
    desc: 'eInsurer combines industry-leading technology with insurance underwriting to create a protection model that proactively identifies emerging risks and adapts coverage in response.',
  },
  {
    num: '03',
    title: 'Dynamic Coverage',
    desc: 'Coverage continuously adjusts based on GCT\'s changing risk profile. New systems, new data flows, new customer channels — each change is assessed and the policy responds.',
  },
  {
    num: '04',
    title: 'Tailored Policies',
    desc: 'Every policy is personalised to fit GCT\'s specific risk profile. No generic coverage. eInsurer builds a policy that reflects GCT\'s actual infrastructure and threat landscape.',
  },
  {
    num: '05',
    title: 'Premium Incentives',
    desc: 'GCT is rewarded for improving its security posture. As Bitdefender\'s endpoint protection reduces the threat surface, eInsurer adjusts premiums downward — a virtuous cycle.',
  },
]

export default function CyberInsuranceSection() {
  return (
    <section id="cyber-insurance" className="py-24 lg:py-32 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="section-label mb-4">04 — Cyber Insurance</div>
          <Image src="/logos/EInsurer.png" alt="eInsurer" width={120} height={40} className="h-8 w-auto mt-4 mb-6 object-contain" />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={80}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2">
            ProActive Cyber <span style={{ color: '#032572' }}>Insurance</span>
          </h2>
          <p className="text-lg text-[#6c757d] font-medium mb-8">Dynamic Risk Detection & Adaptive Coverage</p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={160}>
          <div className="max-w-3xl mb-12">
            <p className="text-base sm:text-lg text-[#6c757d] leading-relaxed mb-4">
              Powered by eInsurer — a Digital Solutions Group company (FSP 53069) — ProActive Cyber Insurance goes beyond traditional policies. Instead of waiting for an incident, eInsurer uses industry-leading software to map GCT&apos;s entire risk profile upfront and provide adaptive coverage that evolves continuously.
            </p>
            <p className="text-base sm:text-lg text-[#6c757d] leading-relaxed">
              For a telecommunications operator undergoing digital transformation, this is not optional — it is foundational. Every new platform, every customer data store, every API integration creates a new attack surface.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Market context stats */}
        <AnimateOnScroll animation="scale-in" delay={240}>
          <div className="bg-[#032572] rounded-2xl p-8 sm:p-10 mb-16">
            <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mb-6">The Cyber Threat Landscape</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {marketStats.map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <p className="text-3xl sm:text-4xl font-black text-white mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix || ''}
                      decimals={stat.decimals}
                    />
                  </p>
                  <p className="text-sm text-white/50 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* ProBusiness features */}
        <AnimateOnScroll animation="fade-up" delay={80}>
          <h3 className="text-xl font-bold text-[#212529] mb-2">For Corporates — ProBusiness Service</h3>
          <p className="text-[#6c757d] text-sm mb-8">Five layers of proactive cyber protection</p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {features.map((feature, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={160 + i * 80}>
              <div className="bg-white border border-gray-200/60 rounded-2xl p-6 card-lift h-full">
                <div className="w-8 h-8 rounded-lg bg-[#ef4444]/10 flex items-center justify-center mb-4">
                  <span className="text-xs font-bold text-[#ef4444]">{feature.num}</span>
                </div>
                <h4 className="font-bold text-[#212529] mb-2">{feature.title}</h4>
                <p className="text-sm text-[#6c757d] leading-relaxed">{feature.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Commercial */}
        <AnimateOnScroll animation="fade-up" delay={160}>
          <div className="bg-white border border-gray-200/60 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#ef4444]/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#ef4444]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#212529] mb-1">Custom Quotation</h4>
                <p className="text-sm text-[#6c757d] leading-relaxed">
                  ProBusiness pricing is determined through a comprehensive risk assessment. eInsurer will conduct a full digital risk review of GCT&apos;s infrastructure and operations to provide a tailored coverage proposal and premium quotation. Contact MVNE to schedule the assessment.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
