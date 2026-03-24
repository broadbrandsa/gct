'use client'

import AnimateOnScroll from '@/components/AnimateOnScroll'
import AnimatedCounter from '@/components/AnimatedCounter'

const fixedCosts = [
  {
    num: '01',
    solution: 'DBOT',
    label: 'Design · Build · Operate · Transfer',
    amount: 250000,
    prefix: '$',
    suffix: '',
    detail: 'Fixed fee excl. VAT',
    payment: '50% deposit ($125,000) + 50% milestone-based ($125,000)',
    color: '#032572',
    note: '9-month transformation programme',
  },
  {
    num: '03',
    solution: 'TeSIM',
    label: 'Travel eSIM Platform',
    amount: 3200,
    prefix: '$',
    suffix: '',
    detail: 'Once-off, paid upfront',
    payment: 'Invoiced upon contract signature',
    color: '#0ea5e9',
    note: '50/50 revenue share ongoing',
  },
]

const customCosts = [
  {
    num: '02',
    solution: 'CXG',
    label: 'Customer Experience',
    model: 'Per agent / per interaction / monthly',
    basis: 'Tailored to volume, channels, and complexity',
    color: '#0a4bcc',
  },
  {
    num: '04',
    solution: 'Cyber Insurance',
    label: 'eInsurer ProBusiness',
    model: 'Annual risk-based premium',
    basis: 'Based on comprehensive risk assessment',
    color: '#ef4444',
  },
  {
    num: '05',
    solution: 'Bitdefender',
    label: 'Endpoint Security',
    model: 'Per endpoint / monthly or annual',
    basis: 'Based on endpoint count and service tier',
    color: '#f59e0b',
  },
  {
    num: '06',
    solution: 'Xanite',
    label: 'CDP & Marketing Automation',
    model: 'Per subscriber / monthly',
    basis: 'Based on active subscribers and feature set',
    color: '#8b5cf6',
  },
  {
    num: '07',
    solution: 'PersAIc',
    label: 'Data Intelligence & Advertising',
    model: 'Per data volume / monthly',
    basis: 'Based on data throughput and ad channels',
    color: '#10b981',
  },
]

export default function CostsSummary() {
  return (
    <section id="costs" className="py-24 lg:py-32 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="section-label mb-4">Investment Breakdown</div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#212529] mb-3">
            Programme{' '}
            <span style={{ color: '#032572' }}>Costs at a Glance</span>
          </h2>
          <p className="text-[#6c757d] max-w-2xl mb-12">
            A clear view of all confirmed investments and custom-quoted solutions across the integrated programme.
          </p>
        </AnimateOnScroll>

        {/* Total confirmed investment */}
        <AnimateOnScroll animation="scale-in" delay={100}>
          <div className="bg-[#032572] rounded-2xl p-8 sm:p-10 mb-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-2">Total Confirmed Investment</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-white">$</span>
                  <AnimatedCounter value={253200} className="text-4xl sm:text-5xl font-black text-white" />
                </div>
                <p className="text-white/40 text-sm mt-2">DBOT $250,000 + TeSIM $3,200 · Excl. VAT · Fixed pricing</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-white/10 rounded-xl px-6 py-4 text-center">
                  <p className="text-2xl font-black text-white">$125,000</p>
                  <p className="text-xs text-white/50 mt-1">Due on Signing</p>
                  <p className="text-[0.65rem] text-white/30 mt-0.5">DBOT 50% deposit</p>
                </div>
                <div className="bg-white/10 rounded-xl px-6 py-4 text-center">
                  <p className="text-2xl font-black text-white">$128,200</p>
                  <p className="text-xs text-white/50 mt-1">Milestone-Based</p>
                  <p className="text-[0.65rem] text-white/30 mt-0.5">DBOT $125K + TeSIM $3.2K</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Two columns: Fixed + Custom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Fixed pricing */}
          <AnimateOnScroll animation="slide-left" delay={150}>
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-[#032572] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#212529]">Fixed Pricing</h3>
                <span className="text-xs font-semibold text-[#032572] bg-[#e8eef9] px-2 py-0.5 rounded-full">Confirmed</span>
              </div>

              <div className="space-y-4">
                {fixedCosts.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-200/60 rounded-2xl overflow-hidden card-lift">
                    <div className="h-1" style={{ background: item.color }} />
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg flex items-center justify-center text-[0.6rem] font-bold text-white" style={{ background: item.color }}>
                            {item.num}
                          </span>
                          <div>
                            <p className="text-sm font-bold text-[#212529]">{item.solution}</p>
                            <p className="text-xs text-[#6c757d]">{item.label}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-black text-[#212529]">
                            {item.prefix}{item.amount.toLocaleString()}
                          </p>
                          <p className="text-[0.65rem] text-[#6c757d]">{item.detail}</p>
                        </div>
                      </div>
                      <div className="bg-[#f8f9fa] rounded-lg p-3 space-y-1.5">
                        <div className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-[#032572] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span className="text-xs text-[#495057]">{item.payment}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-[#6c757d] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-xs text-[#6c757d]">{item.note}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Custom quotations */}
          <AnimateOnScroll animation="slide-right" delay={150}>
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-[#6c757d] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#212529]">Custom Quotations</h3>
                <span className="text-xs font-semibold text-[#6c757d] bg-gray-100 px-2 py-0.5 rounded-full">Scoping Required</span>
              </div>

              <div className="space-y-3">
                {customCosts.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-200/60 rounded-xl p-4 card-lift flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg flex items-center justify-center text-[0.6rem] font-bold text-white shrink-0 mt-0.5" style={{ background: item.color }}>
                      {item.num}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="text-sm font-bold text-[#212529]">{item.solution}</p>
                        <span className="text-[0.65rem] font-medium text-[#6c757d] bg-gray-50 px-2 py-0.5 rounded-full shrink-0">Custom</span>
                      </div>
                      <p className="text-xs text-[#6c757d] mb-1.5">{item.label}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs">
                        <span className="text-[#495057] font-medium">{item.model}</span>
                        <span className="hidden sm:block text-[#d0d5dd]">·</span>
                        <span className="text-[#6c757d]">{item.basis}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional costs note */}
              <div className="mt-4 bg-white border border-gray-200/60 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="text-xs font-semibold text-[#212529] mb-0.5">Additional DBOT Costs</p>
                    <p className="text-xs text-[#6c757d] leading-relaxed">Travel expenses as incurred · Additional consulting at $300/hr beyond agreed scope</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Payment timeline */}
        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="bg-white border border-gray-200/60 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#212529] mb-6">Payment Schedule</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-5 left-0 right-0 h-px bg-gray-200 hidden sm:block" />

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                {[
                  {
                    step: '01',
                    label: 'Contract Signature',
                    amount: '$125,000',
                    desc: 'DBOT 50% deposit',
                    color: '#032572',
                  },
                  {
                    step: '02',
                    label: 'Project Commencement',
                    amount: '$3,200',
                    desc: 'TeSIM setup fee',
                    color: '#0ea5e9',
                  },
                  {
                    step: '03',
                    label: 'Design Milestones',
                    amount: '$55,000',
                    desc: 'DBOT Phase 1 (22%)',
                    color: '#0a4bcc',
                  },
                  {
                    step: '04',
                    label: 'Build & Transfer',
                    amount: '$70,000',
                    desc: 'DBOT Phase 2–3 (28%)',
                    color: '#3b82f6',
                  },
                ].map((item, i) => (
                  <div key={i} className="relative text-center sm:text-left">
                    <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-0">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 relative z-10"
                        style={{ background: item.color }}
                      >
                        {item.step}
                      </div>
                      <div className="sm:mt-3">
                        <p className="text-xs font-semibold text-[#6c757d] uppercase tracking-wider mb-1">{item.label}</p>
                        <p className="text-lg font-black text-[#212529]">{item.amount}</p>
                        <p className="text-xs text-[#6c757d]">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <p className="text-xs text-[#6c757d]">
                All services payable within 30 days of invoice · Late payments subject to 2% penalty per month
              </p>
              <p className="text-xs font-semibold text-[#032572]">
                Proposal valid for 30 days
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
