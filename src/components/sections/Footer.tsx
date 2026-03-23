'use client'

import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'

const sectionLinks = [
  { label: 'Executive Summary', href: '#overview' },
  { label: 'Solutions Overview', href: '#solutions' },
  { label: 'DBOT', href: '#dbot' },
  { label: 'CXG', href: '#cxg' },
  { label: 'TeSIM', href: '#tesim' },
  { label: 'Cyber Insurance', href: '#cyber-insurance' },
  { label: 'Bitdefender', href: '#bitdefender' },
  { label: 'Xanite', href: '#xanite' },
  { label: 'PersAIc', href: '#persaic' },
  { label: 'Commercial', href: '#commercial' },
  { label: 'Next Steps', href: '#next-steps' },
]

const solutionLinks = [
  { label: 'DBOT Transformation', href: '#dbot' },
  { label: 'Customer Experience (CXG)', href: '#cxg' },
  { label: 'Travel eSIM (TeSIM)', href: '#tesim' },
  { label: 'Cyber Insurance (eInsurer)', href: '#cyber-insurance' },
  { label: 'Endpoint Security (Bitdefender)', href: '#bitdefender' },
  { label: 'CDP & Automation (Xanite)', href: '#xanite' },
  { label: 'Data Intelligence (PersAIc)', href: '#persaic' },
]

export default function Footer() {
  return (
    <footer>
      {/* Downloads Section */}
      <section id="downloads" className="py-24 lg:py-32 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="section-label mb-4">11 — Documents</div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#212529] mb-4">Proposal Documents</h2>
            <p className="text-[#6c757d] mb-8">Access the GCT combined proposal documents for detailed review.</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'GCT Combined Proposal', desc: 'Full combined services proposal document', type: 'PDF' },
              { title: 'DBOT Detailed Proposal', desc: 'Design-Build-Operate-Transfer programme detail', type: 'PDF' },
              { title: 'Travel eSIM Proposal', desc: 'TeSIM platform services and commercial terms', type: 'PDF' },
            ].map((doc, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={80 + i * 80}>
                <div className="bg-white border border-gray-200/60 rounded-2xl p-6 card-lift group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-[#e8eef9] flex items-center justify-center mb-4 group-hover:bg-[#032572] transition-colors">
                    <svg className="w-5 h-5 text-[#032572] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-[#212529] mb-1">{doc.title}</h4>
                  <p className="text-sm text-[#6c757d] mb-2">{doc.desc}</p>
                  <span className="text-xs font-semibold text-[#032572] uppercase tracking-wider">{doc.type}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <div className="bg-[#032572]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white text-xl font-bold">Ready to transform?</p>
            <p className="text-white/50 text-sm">Download the full proposal or get in touch.</p>
          </div>
          <div className="flex gap-3">
            <a href="#downloads" className="px-6 py-3 rounded-xl bg-white text-[#032572] font-semibold text-sm hover:bg-white/90 transition-colors">
              Download Proposal
            </a>
            <a href="mailto:edwardw@mvne.co.za" className="px-6 py-3 rounded-xl border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="bg-[#0a0f1a] text-white/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand */}
            <div>
              <Image src="/logos/MVNE.png" alt="MVNE" width={100} height={36} className="h-7 w-auto brightness-0 invert opacity-80 mb-4" />
              <p className="text-sm leading-relaxed mb-4">
                Partnering with consumer-facing brands across Africa to build comprehensive digital transformation solutions.
              </p>
              <p className="text-xs text-white/30">A proud member of Digital Solutions Group</p>
            </div>

            {/* Proposal Sections */}
            <div>
              <h4 className="text-xs font-bold text-white/30 uppercase tracking-wider mb-4">Proposal Sections</h4>
              <ul className="space-y-2">
                {sectionLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-xs font-bold text-white/30 uppercase tracking-wider mb-4">Solutions</h4>
              <ul className="space-y-2">
                {solutionLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Proposal At a Glance */}
            <div>
              <h4 className="text-xs font-bold text-white/30 uppercase tracking-wider mb-4">At a Glance</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-white/30">Client</span>
                  <p className="text-white/70 font-medium">GCT</p>
                </div>
                <div>
                  <span className="text-white/30">Prepared by</span>
                  <p className="text-white/70 font-medium">MVNE · Digital Solutions Group</p>
                </div>
                <div>
                  <span className="text-white/30">Date</span>
                  <p className="text-white/70 font-medium">March 2026</p>
                </div>
                <div>
                  <span className="text-white/30">Solutions</span>
                  <p className="text-white/70 font-medium">7 integrated offerings</p>
                </div>
                <div>
                  <span className="text-white/30">Contact</span>
                  <p className="text-white/70 font-medium">
                    <a href="mailto:edwardw@mvne.co.za" className="hover:text-white transition-colors">edwardw@mvne.co.za</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
              <p>&copy; 2026 Digital Solutions Group (Pty) Ltd. All rights reserved.</p>
              <p>For GCT Review · Confidential — Not for distribution · Validity: 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
