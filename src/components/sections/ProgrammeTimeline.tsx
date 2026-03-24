'use client'

import { useState } from 'react'
import AnimateOnScroll from '@/components/AnimateOnScroll'

interface TimelinePhase {
  solution: string
  phase: string
  duration: string
  startMonth: number
  endMonth: number
  color: string
  detail: string
}

const phases: TimelinePhase[] = [
  {
    solution: 'DBOT',
    phase: 'Phase 1 — Design',
    duration: '8 Weeks',
    startMonth: 0,
    endMonth: 2,
    color: '#032572',
    detail: 'Strategic workshops, MVP definition, GTM strategy, business modelling, board presentation',
  },
  {
    solution: 'DBOT',
    phase: 'Phase 2 — Build & Operate',
    duration: '6 Months',
    startMonth: 2,
    endMonth: 8,
    color: '#0a4bcc',
    detail: 'TPO setup, strategy activation, implementation, optimisation, performance stabilisation',
  },
  {
    solution: 'DBOT',
    phase: 'Phase 3 — Transfer',
    duration: '1 Month',
    startMonth: 8,
    endMonth: 9,
    color: '#3b82f6',
    detail: 'Knowledge transfer, operational validation, handover certification, Go-Independent mark',
  },
  {
    solution: 'CXG',
    phase: 'Onboarding & Ramp-Up',
    duration: 'Weeks 1–4',
    startMonth: 0,
    endMonth: 1,
    color: '#0a4bcc',
    detail: 'Agent recruitment, telecoms training, systems integration, quality framework setup',
  },
  {
    solution: 'CXG',
    phase: 'Full Operations',
    duration: 'Ongoing',
    startMonth: 1,
    endMonth: 9,
    color: '#0a4bcc',
    detail: 'Inbound/outbound support, sales campaigns, real-time performance tracking, continuous improvement',
  },
  {
    solution: 'TeSIM',
    phase: 'Scoping & Integration',
    duration: '~2 Weeks',
    startMonth: 0,
    endMonth: 0.5,
    color: '#0ea5e9',
    detail: 'Platform configuration, API integration, testing, go-live — contract to live in ~2 weeks',
  },
  {
    solution: 'TeSIM',
    phase: 'Revenue Generation',
    duration: 'Ongoing',
    startMonth: 0.5,
    endMonth: 9,
    color: '#0ea5e9',
    detail: '50/50 revenue share on travel eSIM sales, monthly reporting and invoicing',
  },
  {
    solution: 'Cyber Insurance',
    phase: 'Policy Deployment',
    duration: 'Weeks 1–2',
    startMonth: 0,
    endMonth: 0.5,
    color: '#ef4444',
    detail: 'ProBusiness product configuration, coverage activation across six protection modules',
  },
  {
    solution: 'Cyber Insurance',
    phase: 'Active Coverage',
    duration: 'Ongoing',
    startMonth: 0.5,
    endMonth: 9,
    color: '#ef4444',
    detail: 'Continuous cyber protection, identity monitoring, breach response, financial safeguards',
  },
  {
    solution: 'Bitdefender',
    phase: 'Endpoint Deployment',
    duration: 'Weeks 1–4',
    startMonth: 0,
    endMonth: 1,
    color: '#f59e0b',
    detail: 'Endpoint assessment, agent deployment, policy configuration, $1M breach warranty activation',
  },
  {
    solution: 'Bitdefender',
    phase: 'Managed Protection',
    duration: 'Ongoing',
    startMonth: 1,
    endMonth: 9,
    color: '#f59e0b',
    detail: 'EPP/MDR/XDR monitoring, threat detection, automated response, continuous updates',
  },
  {
    solution: 'Xanite',
    phase: 'CDP Setup & Integration',
    duration: 'Months 1–2',
    startMonth: 0,
    endMonth: 2,
    color: '#8b5cf6',
    detail: 'Data ingestion, subscriber profiling, journey builder configuration, CVM automation setup',
  },
  {
    solution: 'Xanite',
    phase: 'Full Activation',
    duration: 'Ongoing',
    startMonth: 2,
    endMonth: 9,
    color: '#8b5cf6',
    detail: 'Automated campaigns, real-time segmentation, lifecycle management, ARPU optimisation',
  },
  {
    solution: 'PersAIc',
    phase: 'Data Integration',
    duration: 'Months 1–2',
    startMonth: 0,
    endMonth: 2,
    color: '#10b981',
    detail: 'Data pipeline setup, ML model training, dashboard configuration, ad platform integration',
  },
  {
    solution: 'PersAIc',
    phase: 'Intelligence & Monetisation',
    duration: 'Ongoing',
    startMonth: 2,
    endMonth: 9,
    color: '#10b981',
    detail: 'Predictive analytics, AI-powered advertising, real-time intelligence, first-party data monetisation',
  },
]

const months = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9']

const solutionColors: Record<string, string> = {
  'DBOT': '#032572',
  'CXG': '#0a4bcc',
  'TeSIM': '#0ea5e9',
  'Cyber Insurance': '#ef4444',
  'Bitdefender': '#f59e0b',
  'Xanite': '#8b5cf6',
  'PersAIc': '#10b981',
}

export default function ProgrammeTimeline() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  const solutions = [...new Set(phases.map(p => p.solution))]

  return (
    <section id="timeline" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="section-label mb-4">Programme Overview</div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#212529] mb-3">
            Integrated Implementation{' '}
            <span style={{ color: '#032572' }}>Timeline</span>
          </h2>
          <p className="text-[#6c757d] max-w-2xl mb-4">
            A unified view of all seven solutions across the 9-month transformation programme —
            from contract signature through to full operational independence.
          </p>
        </AnimateOnScroll>

        {/* Key milestones */}
        <AnimateOnScroll animation="fade-up" delay={100}>
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { label: 'Contract Signature', month: 'Day 0' },
              { label: 'Design Complete', month: 'Month 2' },
              { label: 'Build & Operate', month: 'Months 3–8' },
              { label: 'Transfer & Independence', month: 'Month 9' },
            ].map((milestone, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f0f3f8] border border-[#e0e5ee]">
                <span className="w-2 h-2 rounded-full" style={{ background: i === 3 ? '#10b981' : '#032572', opacity: 0.3 + (i * 0.23) }} />
                <span className="text-xs font-semibold text-[#032572]">{milestone.month}</span>
                <span className="text-xs text-[#6c757d]">{milestone.label}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Desktop Gantt-style table */}
        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="hidden lg:block overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Month headers */}
              <div className="grid" style={{ gridTemplateColumns: '180px repeat(9, 1fr)' }}>
                <div className="py-3 px-4 text-xs font-bold text-[#6c757d] uppercase tracking-wider border-b-2 border-[#e5e7eb]">
                  Solution
                </div>
                {months.map((m, i) => (
                  <div key={i} className="py-3 px-2 text-center text-xs font-bold text-[#6c757d] uppercase tracking-wider border-b-2 border-[#e5e7eb]">
                    {m}
                  </div>
                ))}
              </div>

              {/* Solution rows */}
              {solutions.map((solution, sIdx) => {
                const solutionPhases = phases.filter(p => p.solution === solution)
                const color = solutionColors[solution]

                return (
                  <div key={solution} className={`grid ${sIdx % 2 === 0 ? 'bg-white' : 'bg-[#fafbfc]'}`}
                    style={{ gridTemplateColumns: '180px repeat(9, 1fr)' }}
                  >
                    {/* Solution name */}
                    <div className="py-4 px-4 flex items-center gap-2 border-b border-[#f0f0f0]">
                      <span className="w-3 h-3 rounded-sm shrink-0" style={{ background: color }} />
                      <span className="text-sm font-bold text-[#212529]">{solution}</span>
                    </div>

                    {/* Timeline cells */}
                    <div className="col-span-9 relative py-4 px-1 border-b border-[#f0f0f0]"
                      style={{ display: 'grid', gridTemplateColumns: 'repeat(9, 1fr)' }}
                    >
                      {/* Grid lines */}
                      {months.map((_, i) => (
                        <div key={i} className="absolute top-0 bottom-0 border-l border-dashed border-[#e5e7eb]/60"
                          style={{ left: `${(i / 9) * 100}%` }}
                        />
                      ))}

                      {/* Phase bars */}
                      {solutionPhases.map((phase, pIdx) => {
                        const globalIdx = phases.indexOf(phase)
                        const left = (phase.startMonth / 9) * 100
                        const width = ((phase.endMonth - phase.startMonth) / 9) * 100
                        const isHovered = hoveredIdx === globalIdx

                        return (
                          <div
                            key={pIdx}
                            className="absolute flex items-center cursor-pointer transition-all duration-200"
                            style={{
                              left: `${left}%`,
                              width: `${width}%`,
                              top: `${8 + pIdx * 28}px`,
                              height: '22px',
                              zIndex: isHovered ? 20 : 10,
                            }}
                            onMouseEnter={() => setHoveredIdx(globalIdx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                          >
                            <div
                              className="h-full w-full rounded-md flex items-center px-2 overflow-hidden transition-all duration-200"
                              style={{
                                background: phase.color,
                                opacity: isHovered ? 1 : 0.85,
                                transform: isHovered ? 'scaleY(1.15)' : 'scaleY(1)',
                                boxShadow: isHovered ? `0 4px 16px ${phase.color}40` : 'none',
                              }}
                            >
                              <span className="text-[0.6rem] font-semibold text-white truncate whitespace-nowrap">
                                {phase.phase}
                              </span>
                            </div>

                            {/* Tooltip */}
                            {isHovered && (
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 rounded-xl bg-[#0a0f1a] text-white shadow-xl z-30"
                                style={{ pointerEvents: 'none' }}
                              >
                                <div className="text-xs font-bold mb-1">{phase.solution} — {phase.phase}</div>
                                <div className="text-[0.65rem] text-white/60 mb-1.5">{phase.duration}</div>
                                <div className="text-[0.65rem] text-white/80 leading-relaxed">{phase.detail}</div>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0a0f1a] rotate-45 -mt-1" />
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Mobile card view */}
        <div className="lg:hidden space-y-6">
          {solutions.map((solution, sIdx) => {
            const solutionPhases = phases.filter(p => p.solution === solution)
            const color = solutionColors[solution]

            return (
              <AnimateOnScroll key={solution} animation="fade-up" delay={80 + sIdx * 60}>
                <div className="bg-white border border-gray-200/60 rounded-2xl overflow-hidden card-lift">
                  {/* Solution header */}
                  <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
                    <span className="w-3 h-3 rounded-sm shrink-0" style={{ background: color }} />
                    <span className="text-sm font-bold text-[#212529]">{solution}</span>
                  </div>

                  {/* Phases */}
                  <div className="px-5 py-4 space-y-3">
                    {solutionPhases.map((phase, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <div className="mt-1.5 shrink-0">
                          <div className="w-2.5 h-2.5 rounded-full" style={{ background: phase.color }} />
                          {pIdx < solutionPhases.length - 1 && (
                            <div className="w-px h-8 mx-auto mt-1" style={{ background: `${phase.color}30` }} />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline justify-between gap-2">
                            <span className="text-sm font-semibold text-[#212529]">{phase.phase}</span>
                            <span className="text-xs font-medium text-[#6c757d] shrink-0">{phase.duration}</span>
                          </div>
                          <p className="text-xs text-[#6c757d] leading-relaxed mt-0.5">{phase.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>

        {/* Summary bar */}
        <AnimateOnScroll animation="fade-up" delay={300}>
          <div className="mt-12 bg-[#032572] rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
              {[
                { value: '9', label: 'Month Programme', suffix: '' },
                { value: '7', label: 'Integrated Solutions', suffix: '' },
                { value: '~2', label: 'Weeks to First Revenue (TeSIM)', suffix: '' },
                { value: '3–6', label: 'Months Post-Transfer Support', suffix: '' },
              ].map((stat, i) => (
                <div key={i} className={`${i > 0 ? 'sm:border-l sm:border-white/10' : ''}`}>
                  <div className="text-2xl sm:text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-xs text-white/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
