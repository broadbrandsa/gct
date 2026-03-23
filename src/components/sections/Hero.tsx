'use client'

import Image from 'next/image'
import AnimatedCounter from '@/components/AnimatedCounter'

const stats = [
  { value: 7, label: 'Integrated Solutions' },
  { text: 'DBOT', label: 'Partnership Model' },
  { value: 25, suffix: '+', label: 'Years of CX Excellence' },
  { text: 'Pan-African', label: 'Delivery Capability' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/rasheed-kemy-oqY09oVTa3k-unsplash.jpg" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(160deg, rgba(3,37,114,0.92) 0%, rgba(2,29,90,0.95) 40%, rgba(1,14,46,0.98) 100%)'
        }} />
        <div className="absolute inset-0 hero-pattern" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="0" x2="40%" y2="100%" stroke="white" strokeWidth="1" />
          <line x1="60%" y1="0" x2="90%" y2="100%" stroke="white" strokeWidth="1" />
          <line x1="30%" y1="0" x2="0%" y2="80%" stroke="white" strokeWidth="0.5" />
          <line x1="80%" y1="0" x2="100%" y2="60%" stroke="white" strokeWidth="0.5" />
          <circle cx="20%" cy="30%" r="120" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="75%" cy="70%" r="80" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(10,75,204,0.2) 0%, transparent 50%)'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 sm:pt-40 pb-8 flex-1 flex flex-col">
        <div className="anim-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] backdrop-blur-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4a8eff] pulse-dot" />
            <span className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-white/50">
              Confidential — For GCT Review
            </span>
          </div>
        </div>

        <div className="anim-fade-up delay-200 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[0.92] tracking-tight mb-6">
            Integrated Digital{' '}
            <br className="hidden sm:block" />
            <span style={{
              background: 'linear-gradient(135deg, #4a8eff 0%, #7bb5ff 50%, #4a8eff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Solutions</span>{' '}for GCT
          </h1>
        </div>

        <div className="anim-fade-up delay-300 mb-8">
          <p className="text-lg sm:text-xl text-white/50 font-light">Combined Services Proposal · March 2026</p>
          <p className="text-sm text-white/30 mt-2 font-medium tracking-wide">Prepared by MVNE · Digital Solutions Group</p>
        </div>

        <div className="anim-fade-up delay-400 max-w-3xl mb-10">
          <div className="border-l-[3px] border-[#4a8eff]/40 pl-5">
            <p className="text-base sm:text-lg text-white/60 leading-relaxed font-light">
              Seven integrated solutions — spanning MVNO enablement, customer experience, travel connectivity, cybersecurity, data intelligence, and marketing automation — brought together into a single, cohesive programme designed to accelerate GCT&apos;s digital transformation across Nigeria and beyond.
            </p>
          </div>
        </div>

        <div className="anim-fade-up delay-500 flex flex-wrap gap-3 mb-auto">
          <a href="#overview"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#032572] font-semibold text-sm hover:bg-white/90 transition-all duration-200 hover:shadow-lg hover:shadow-white/10 group"
          >
            Explore Proposal
            <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a href="#downloads"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-white/80 font-medium text-sm hover:bg-white/[0.06] hover:border-white/25 transition-all duration-200"
          >
            Download Proposal
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>

        <div className="anim-fade-in delay-800 flex justify-center mt-8 mb-4">
          <div className="scroll-indicator">
            <svg className="w-5 h-5 text-white/30" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/[0.08] bg-white/[0.03] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.08]">
            {stats.map((stat, i) => (
              <div key={i} className="px-4 sm:px-8 py-6 sm:py-8 text-center anim-fade-up" style={{ animationDelay: `${600 + i * 100}ms` }}>
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">
                  {'value' in stat && stat.value !== undefined ? (
                    <AnimatedCounter value={stat.value} suffix={'suffix' in stat ? (stat.suffix as string) : ''} />
                  ) : (
                    <span>{stat.text}</span>
                  )}
                </div>
                <div className="text-[0.7rem] sm:text-xs text-white/40 font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
