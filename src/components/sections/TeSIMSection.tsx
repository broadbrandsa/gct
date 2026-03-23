'use client'

import AnimateOnScroll from '@/components/AnimateOnScroll'

const phase1 = [
  { num: '01', deliverable: 'Business Requirements Specification', responsibility: 'Both parties to sign off' },
  { num: '02', deliverable: 'Technical Specifications Definition', responsibility: 'MVNE to develop, both parties to sign off' },
  { num: '03', deliverable: 'Customer Journey Mapping', responsibility: 'GCT and MVNE to sign off' },
  { num: '04', deliverable: 'DARE Model Development', responsibility: 'GCT and MVNE to sign off' },
]

const phase2 = [
  { num: '01', deliverable: 'Build Travel eSIM Services', responsibility: 'MVNE builds services on its platforms' },
  { num: '02', deliverable: 'Configure Bundle Services', responsibility: 'MVNE configures bundled travel eSIM services for GCT' },
  { num: '03', deliverable: 'Configure First Batch of SIMs', responsibility: 'SIMs provisioned and ready for Travel eSIM services' },
  { num: '04', deliverable: 'Go Live', responsibility: 'Launch to market' },
]

const fees = [
  { type: 'One-time SIM Profile Creation Fee', amount: '$0.63', notes: 'Based on MVNE having 0–250,000 Profile Credentials ordered' },
  { type: 'One-time ICCID Provisioning Fee', amount: '$0.31', notes: 'Per ICCID, invoiced at provisioning time' },
  { type: 'Fee per Active IMSI Credential', amount: '$0.31/mo', notes: 'Monthly fee based on Data/SMS/Location activity' },
]

const steps = [
  { num: '01', title: 'Customer Purchases', desc: 'A traveller buys a Travel eSIM data bundle through GCT\'s app, website, or retail channel.' },
  { num: '02', title: 'Instant Activation', desc: 'The eSIM profile is provisioned instantly. Connectivity in the destination country without a physical SIM.' },
  { num: '03', title: 'Revenue Shared', desc: 'MVNE and GCT split the margin on every bundle sold. No inventory risk. Pure incremental revenue.' },
]

export default function TeSIMSection() {
  return (
    <section id="tesim" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="section-label mb-4">03 — TeSIM</div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={80}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2">
            Travel eSIM <span style={{ color: '#032572' }}>Platform Services</span>
          </h2>
          <p className="text-lg text-[#6c757d] font-medium mb-6">Global Connectivity Revenue, Deployed in Two Weeks</p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={160}>
          <div className="max-w-3xl mb-12">
            <p className="text-base sm:text-lg text-[#6c757d] leading-relaxed mb-4">
              TeSIM provides GCT with a fully managed Travel eSIM platform — enabling GCT&apos;s customers to purchase and activate international data connectivity bundles directly through GCT&apos;s branded channels. The platform is already built, tested, and operational.
            </p>
            <p className="text-base sm:text-lg text-[#6c757d] leading-relaxed">
              This is one of the fastest revenue-generating solutions in this proposal. From contract signature to live service takes approximately <strong className="text-[#212529] font-semibold">two weeks</strong>.
            </p>
          </div>
        </AnimateOnScroll>

        {/* How it works - 3 steps */}
        <AnimateOnScroll animation="fade-up" delay={240}>
          <h3 className="text-xl font-bold text-[#212529] mb-6">How It Works</h3>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {steps.map((step, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={280 + i * 80}>
              <div className="relative bg-white border border-gray-200/60 rounded-2xl p-6 card-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0ea5e9]/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-[#0ea5e9]">{step.num}</span>
                  </div>
                  <h4 className="font-bold text-[#212529]">{step.title}</h4>
                </div>
                <p className="text-sm text-[#6c757d] leading-relaxed">{step.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <svg className="w-5 h-5 text-[#0ea5e9]/40" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Why Travel eSIM */}
        <AnimateOnScroll animation="fade-up" delay={160}>
          <div className="accent-border-left max-w-3xl mb-16">
            <p className="text-base text-[#6c757d] leading-relaxed">
              Nigeria has over 200 million mobile subscriptions and a rapidly growing middle class with increasing international travel. Every traveller is a potential TeSIM customer. GCT can offer a branded travel connectivity experience that keeps customers within the GCT ecosystem.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Implementation Phases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          <AnimateOnScroll animation="slide-left" delay={160}>
            <div className="bg-white border border-gray-200/60 rounded-2xl p-6 sm:p-8 h-full">
              <div className="phase-badge mb-4">Phase 1 · Implementation Scoping</div>
              <div className="space-y-3">
                {phase1.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#f8f9fa] hover:bg-[#e8eef9]/50 transition-colors">
                    <span className="text-xs font-bold text-[#032572] bg-[#e8eef9] w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5">{item.num}</span>
                    <div>
                      <p className="text-sm font-semibold text-[#212529]">{item.deliverable}</p>
                      <p className="text-xs text-[#6c757d] mt-0.5">{item.responsibility}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-right" delay={240}>
            <div className="bg-white border border-gray-200/60 rounded-2xl p-6 sm:p-8 h-full">
              <div className="phase-badge mb-4">Phase 2 · Integration & Go-Live</div>
              <div className="space-y-3">
                {phase2.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#f8f9fa] hover:bg-[#e8eef9]/50 transition-colors">
                    <span className="text-xs font-bold text-[#032572] bg-[#e8eef9] w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5">{item.num}</span>
                    <div>
                      <p className="text-sm font-semibold text-[#212529]">{item.deliverable}</p>
                      <p className="text-xs text-[#6c757d] mt-0.5">{item.responsibility}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Timeline callout */}
        <AnimateOnScroll animation="scale-in" delay={160}>
          <div className="bg-[#e8eef9]/50 border border-[#032572]/10 rounded-2xl p-6 text-center mb-16">
            <p className="text-sm font-semibold text-[#032572]">
              Full integration estimated at approximately <strong>two weeks</strong> from contract signature to live service
            </p>
          </div>
        </AnimateOnScroll>

        {/* Commercial */}
        <AnimateOnScroll animation="fade-up" delay={80}>
          <div className="section-divider mb-12" />
          <h3 className="text-2xl sm:text-3xl font-black text-[#212529] mb-2">Investment & Revenue Share</h3>
          <p className="text-[#6c757d] mb-8 max-w-2xl">
            A single upfront setup fee covers all platform configuration. After that, GCT and MVNE share margin equally on every bundle sold.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <AnimateOnScroll animation="slide-left" delay={160}>
            <div className="bg-[#032572] rounded-2xl p-8 text-white h-full flex flex-col justify-center">
              <p className="text-sm text-white/50 uppercase tracking-wider font-semibold mb-2">Setup Fee</p>
              <p className="text-4xl sm:text-5xl font-black mb-2">$3,200</p>
              <p className="text-white/60 text-sm">Once-off · Paid upfront</p>
              <p className="text-white/40 text-xs mt-4 leading-relaxed">
                Covers project setup and app configuration. Invoiced upon contract signature, with payment due before project commencement.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-right" delay={240}>
            <div className="bg-white border border-gray-200/60 rounded-2xl p-8 h-full flex flex-col justify-center">
              <p className="text-sm text-[#032572] uppercase tracking-wider font-semibold mb-2">Revenue Share</p>
              <p className="text-4xl sm:text-5xl font-black text-[#032572] mb-2">50/50</p>
              <p className="text-[#6c757d] text-sm">Margin share per bundle sold</p>
              <p className="text-[#6c757d] text-xs mt-4 leading-relaxed">
                GCT and MVNE split margin equally on every bundle sold. Created bundles include applicable per-subscriber fees.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Per-Subscriber Fees */}
        <AnimateOnScroll animation="fade-up" delay={160}>
          <h4 className="text-lg font-bold text-[#212529] mb-4">Per-Subscriber Fees</h4>
          <div className="overflow-x-auto rounded-2xl border border-gray-200/60">
            <table className="proposal-table">
              <thead>
                <tr>
                  <th>Fee Type</th>
                  <th>Amount</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((fee, i) => (
                  <tr key={i}>
                    <td className="font-medium">{fee.type}</td>
                    <td className="font-semibold text-[#032572]">{fee.amount}</td>
                    <td>{fee.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={240}>
          <p className="text-xs text-[#6c757d] mt-6 leading-relaxed max-w-2xl">
            The revenue share report will be shared with GCT at the end of each month. GCT shall invoice MVNE for the outstanding balance due, with payment from MVNE 30 days from billing month end.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
