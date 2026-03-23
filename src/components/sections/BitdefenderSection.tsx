'use client'

import AnimateOnScroll from '@/components/AnimateOnScroll'

const capabilities = [
  {
    num: '01',
    title: 'Managed Detection & Response (MDR)',
    desc: 'Round-the-clock security monitoring, proactive threat hunting, and rapid incident response delivered by Bitdefender\'s global Security Operations Centre. MDR goes beyond automated alerts — analysts actively search for threats that evade traditional defences.',
    highlight: '24/7 SOC Coverage',
  },
  {
    num: '02',
    title: 'Extended Detection & Response (XDR)',
    desc: 'Cross-platform visibility that connects signals across endpoints, network traffic, cloud workloads, and identity systems into a single, correlated threat picture. XDR eliminates blind spots that attackers exploit.',
    highlight: 'Unified Visibility',
  },
  {
    num: '03',
    title: 'Endpoint Protection Platform (EPP)',
    desc: 'A prevention-first architecture powered by AI and machine learning that stops the vast majority of threats before they execute. Behavioural analysis, exploit prevention, and content-based detection protect every device.',
    highlight: 'AI-Powered Prevention',
  },
  {
    num: '04',
    title: 'Cysurance Breach Warranty',
    desc: 'Every MDR customer receives the Cysurance Certification Warranty at no additional cost — up to $1 million in financial compensation following a security incident, covering deductibles, expenses, compliance shortfalls, and legal liability.',
    highlight: 'Up to $1M Coverage',
  },
]

export default function BitdefenderSection() {
  return (
    <section id="bitdefender" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="section-label mb-4">05 — Bitdefender</div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={80}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2">
            Enterprise Endpoint <span style={{ color: '#032572' }}>Security</span>
          </h2>
          <p className="text-lg text-[#6c757d] font-medium mb-8">Managed Detection & Response with Breach Warranty</p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <AnimateOnScroll animation="slide-left" delay={160}>
            <div className="max-w-xl">
              <p className="text-base sm:text-lg text-[#6c757d] leading-relaxed mb-4">
                Bitdefender provides the active defence layer that complements eInsurer&apos;s coverage. While cyber insurance protects GCT financially after an incident, Bitdefender works to prevent incidents from happening — with 24/7 security monitoring, AI-driven threat detection, and a dedicated SOC team.
              </p>
              <p className="text-base sm:text-lg text-[#6c757d] leading-relaxed mb-6">
                For a telecoms operator handling millions of subscriber records, processing payments, and managing network infrastructure, endpoint security is a customer trust issue. A single breach can destroy years of brand equity.
              </p>

              {/* Bitdefender + eInsurer synergy */}
              <div className="bg-[#f59e0b]/5 border border-[#f59e0b]/15 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-[#f59e0b]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h4 className="font-bold text-[#212529] text-sm">Bitdefender + eInsurer Synergy</h4>
                </div>
                <p className="text-sm text-[#6c757d] leading-relaxed">
                  These two solutions reinforce each other. Bitdefender reduces the probability of incidents through active defence. eInsurer provides financial protection for risks that remain. As security posture improves, premiums decrease — a continuously improving, cost-effective cyber resilience programme.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-right" delay={240}>
            <div className="space-y-4">
              {capabilities.map((cap, i) => (
                <div key={i} className="bg-white border border-gray-200/60 rounded-2xl p-6 card-lift group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-[#f59e0b]">{cap.num}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-[#212529]">{cap.title}</h4>
                        <span className="hidden sm:inline-flex text-[0.6rem] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#f59e0b]/10 text-[#f59e0b]">
                          {cap.highlight}
                        </span>
                      </div>
                      <p className="text-sm text-[#6c757d] leading-relaxed">{cap.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>

        {/* $1M Warranty highlight */}
        <AnimateOnScroll animation="scale-in" delay={160}>
          <div className="bg-[#032572] rounded-2xl p-8 sm:p-10 text-center">
            <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mb-3">Cysurance Breach Warranty</p>
            <p className="text-4xl sm:text-5xl font-black text-white mb-3">Up to $1,000,000</p>
            <p className="text-white/60 text-sm max-w-xl mx-auto leading-relaxed">
              Financial compensation following a security incident — covering cyber insurance deductibles, out-of-pocket expenses, compliance shortfalls, legal liability, and financial losses. Included at no additional cost for all MDR customers.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Commercial note */}
        <AnimateOnScroll animation="fade-up" delay={240}>
          <div className="mt-12 bg-white border border-gray-200/60 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#f59e0b]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#212529] mb-1">Enterprise Licensing</h4>
                <p className="text-sm text-[#6c757d] leading-relaxed">
                  Based on the number of protected endpoints, selected service tier (EPP, MDR, or XDR), and contract duration. Contact MVNE for a tailored endpoint count assessment and quotation for GCT.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
