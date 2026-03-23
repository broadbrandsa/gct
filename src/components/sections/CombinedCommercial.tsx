'use client'

import AnimateOnScroll from '@/components/AnimateOnScroll'

const solutions = [
  { num: '01', name: 'DBOT', setup: '$250,000 (fixed fee, excl. VAT)', ongoing: '50% deposit + 50% milestone-based', model: '9-month transformation programme' },
  { num: '02', name: 'CXG', setup: 'Custom quotation', ongoing: 'Per agent / per interaction / monthly', model: 'Tailored to volume and complexity' },
  { num: '03', name: 'TeSIM', setup: '$3,200 (once-off, paid upfront)', ongoing: '50/50 margin share per bundle', model: 'Revenue share with per-subscriber fees' },
  { num: '04', name: 'Cyber Insurance', setup: 'Custom quotation', ongoing: 'Annual risk-based premium', model: 'Based on risk assessment' },
  { num: '05', name: 'Bitdefender', setup: 'Custom quotation', ongoing: 'Per endpoint / monthly or annual', model: 'Based on endpoint count and tier' },
  { num: '06', name: 'Xanite', setup: 'Custom quotation', ongoing: 'Per subscriber / monthly', model: 'Based on subscribers and features' },
  { num: '07', name: 'PersAIc', setup: 'Custom quotation', ongoing: 'Per data volume / monthly', model: 'Based on data and ad channels' },
]

const terms = [
  { title: 'Proposal Validity', desc: 'All proposals from MVNE are valid for thirty (30) days unless otherwise stated.' },
  { title: 'Additional Agreements', desc: 'Subject to the signature of a comprehensive contract for each solution engaged.' },
  { title: 'Payment Terms', desc: 'All services payable within thirty (30) days of invoice date. Late payments subject to 2% penalty per month.' },
  { title: 'Pricing Adjustments', desc: 'Pricing indicative and subject to foreign currency exchange rate fluctuations. DSG reserves the right to recalibrate.' },
  { title: 'Invoicing', desc: 'DBOT and TeSIM upfront fees invoiced upon contract signature, with payment due before project commencement.' },
]

export default function CombinedCommercial() {
  return (
    <section id="commercial" className="py-24 lg:py-32 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="section-label mb-4">08 — Commercial Overview</div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={80}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Investment <span style={{ color: '#032572' }}>Summary</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6c757d] leading-relaxed max-w-3xl mb-12">
            This section summarises the commercial terms across all seven solutions. Where fixed pricing applies, it is stated. Where pricing is tailored, a scoping process is indicated.
          </p>
        </AnimateOnScroll>

        {/* Summary Table */}
        <AnimateOnScroll animation="fade-up" delay={160}>
          <div className="overflow-x-auto rounded-2xl border border-gray-200/60 bg-white mb-12">
            <table className="proposal-table">
              <thead>
                <tr>
                  <th className="w-12">#</th>
                  <th>Solution</th>
                  <th>Setup / Investment</th>
                  <th>Ongoing Model</th>
                  <th className="hidden lg:table-cell">Commercial Basis</th>
                </tr>
              </thead>
              <tbody>
                {solutions.map((sol, i) => (
                  <tr key={i}>
                    <td><span className="text-xs font-bold text-[#032572]">{sol.num}</span></td>
                    <td className="font-semibold">{sol.name}</td>
                    <td>{sol.setup}</td>
                    <td>{sol.ongoing}</td>
                    <td className="hidden lg:table-cell text-[#6c757d]">{sol.model}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateOnScroll>

        {/* Important note */}
        <AnimateOnScroll animation="scale-in" delay={240}>
          <div className="bg-[#032572] rounded-2xl p-8 sm:p-10 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Important Note</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  All pricing is indicative and subject to final scoping. Custom quotations will be prepared for each solution following detailed requirements gathering with GCT. Solutions can be engaged individually or as a combined programme — though the greatest value is achieved when they operate together as an integrated ecosystem.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Terms & Conditions */}
        <AnimateOnScroll animation="fade-up" delay={160}>
          <h3 className="text-xl font-bold text-[#212529] mb-6">Terms & Conditions</h3>
          <div className="space-y-3">
            {terms.map((term, i) => (
              <div key={i} className="bg-white border border-gray-200/60 rounded-xl p-5 flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-[#e8eef9] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[0.6rem] font-bold text-[#032572]">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#212529] mb-0.5">{term.title}</p>
                  <p className="text-sm text-[#6c757d]">{term.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
