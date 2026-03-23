'use client'

import AnimateOnScroll from '@/components/AnimateOnScroll'

const steps = [
  {
    num: '01',
    title: 'Review & Approve Engagement',
    badge: 'Action Required',
    badgeColor: '#ef4444',
    desc: 'Review the combined proposal and confirm which solutions GCT wishes to proceed with. Nominate Steering Committee members from GCT\'s leadership team to co-chair the Joint Steering Committee with DSG\'s CEO.',
  },
  {
    num: '02',
    title: 'Schedule Discovery Workshop',
    badge: 'Within 14 days',
    badgeColor: '#032572',
    desc: 'Arrange a deep-dive discovery workshop with GCT\'s executive and operational teams to define detailed requirements for each solution area — technical infrastructure, subscriber volumes, channel requirements, and integration points.',
  },
  {
    num: '03',
    title: 'Provide Baseline Data',
    badge: 'Prior to kick-off',
    badgeColor: '#032572',
    desc: 'Share relevant baseline data with DSG including current subscriber metrics, infrastructure specifications, operational KPIs, customer service volumes, and any existing vendor contracts or platform documentation.',
  },
  {
    num: '04',
    title: 'Joint Kick-Off Session',
    badge: 'Programme launch',
    badgeColor: '#10b981',
    desc: 'Conduct a formal kick-off session with all stakeholders to align on priorities, success metrics, governance structure, timelines, and the integrated programme roadmap across all engaged solutions.',
  },
]

export default function NextSteps() {
  return (
    <section id="next-steps" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="section-label mb-4">10 — Next Steps</div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={80}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            The Path to <span style={{ color: '#032572' }}>Getting Started</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6c757d] leading-relaxed max-w-3xl mb-12">
            Four clear actions stand between today and the launch of GCT&apos;s digital transformation programme.
          </p>
        </AnimateOnScroll>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={160 + i * 100}>
                <div className="relative flex items-start gap-5 bg-white border border-gray-200/60 rounded-2xl p-6 sm:p-8 card-lift">
                  {/* Number */}
                  <div className="w-14 h-14 rounded-2xl bg-[#032572] flex items-center justify-center shrink-0 relative z-10">
                    <span className="text-lg font-black text-white">{step.num}</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="text-lg font-bold text-[#212529]">{step.title}</h4>
                      <span
                        className="text-[0.6rem] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full text-white"
                        style={{ backgroundColor: step.badgeColor }}
                      >
                        {step.badge}
                      </span>
                    </div>
                    <p className="text-sm text-[#6c757d] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Decision callout */}
        <AnimateOnScroll animation="scale-in" delay={600}>
          <div className="mt-12 bg-[#032572] rounded-2xl p-8 sm:p-10 text-center">
            <p className="text-lg sm:text-xl font-bold text-white mb-2">
              We look forward to discussing this proposal at Q&A on Tuesday.
            </p>
            <p className="text-white/60 text-sm">
              Please direct any questions to{' '}
              <a href="mailto:edwardw@mvne.co.za" className="text-white/90 underline underline-offset-2 hover:text-white transition-colors">
                edwardw@mvne.co.za
              </a>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
