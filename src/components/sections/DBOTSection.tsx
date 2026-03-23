'use client'

import { useState } from 'react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import AnimatedCounter from '@/components/AnimatedCounter'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const whyDBOTCards = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    title: 'Fixed-Mobile Convergence',
    description:
      'Combine GCT\'s fixed-line infrastructure with mobile connectivity to deliver unified voice, data, and digital services across a single converged network.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: 'Enterprise & SME Expansion',
    description:
      'Unlock B2B revenue streams by equipping GCT with cloud-based communications, managed connectivity, and IoT-ready infrastructure for enterprise clients.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: 'Asset-Light Growth',
    description:
      'Leverage the MVNO model to scale without heavy CAPEX. DSG provides the platform, processes, and partnerships so GCT can grow revenue before investing in owned infrastructure.',
  },
]

const phase1Milestones = [
  { week: 'Week 1-2', label: 'Discovery & Audit' },
  { week: 'Week 3-4', label: 'Strategy & Architecture' },
  { week: 'Week 5-6', label: 'Model Design' },
  { week: 'Week 7-8', label: 'Blueprint Delivery' },
]

const phase1Deliverables = [
  {
    id: 'srr',
    code: 'SRR',
    title: 'Strategic Review Report',
    description:
      'Comprehensive assessment of GCT\'s current infrastructure, market position, competitive landscape, and regulatory environment. Includes gap analysis, SWOT, and strategic recommendations for MVNO launch.',
  },
  {
    id: 'mvp',
    code: 'MVP',
    title: 'Minimum Viable Product Definition',
    description:
      'Detailed specification of the initial product set including mobile voice, data bundles, and converged offerings. Defines feature priority, pricing tiers, target segments, and launch-ready service catalogue.',
  },
  {
    id: 'gtm',
    code: 'GTM',
    title: 'Go-to-Market Strategy',
    description:
      'End-to-end commercialisation plan covering brand positioning, channel strategy, digital acquisition funnels, launch campaigns, and first-90-day activation targets.',
  },
  {
    id: 'om',
    code: 'OM',
    title: 'Operating Model',
    description:
      'Organisational design for the MVNO operation including team structure, roles & responsibilities, vendor management framework, SLA definitions, and escalation procedures.',
  },
  {
    id: 'icx',
    code: 'ICX',
    title: 'Integrated CX Model',
    description:
      'Omnichannel customer experience blueprint spanning onboarding, self-service, support tiers, and retention programmes. Includes journey mapping, NPS framework, and CX technology stack.',
  },
  {
    id: 'bm',
    code: 'BM',
    title: 'Business Model & Revenue Architecture',
    description:
      'Financial modelling covering revenue projections, cost structures, unit economics, margin analysis, and 3-year P&L scenarios. Includes pricing strategy and wholesale rate optimisation.',
  },
]

const phase2Levers = [
  'Network onboarding & MNO integration management',
  'Billing, CRM & connectivity platform deployment',
  'Revenue assurance & fraud management implementation',
  'Customer value management & lifecycle optimisation',
  'Operational KPI tracking & continuous improvement',
]

const phase2Deliverables = [
  {
    id: 'tpo',
    code: 'TPO',
    title: 'Third Party Operator Setup',
    description:
      'Complete operational setup of the MVNO as a third-party operator, including MNO contract negotiations, interconnect agreements, number range provisioning, regulatory submissions, and technical integration with the host network.',
  },
  {
    id: 'dashboards',
    code: 'DASH',
    title: 'Performance Dashboards',
    description:
      'Real-time analytics dashboards covering subscriber growth, ARPU, churn, network quality, revenue, and customer satisfaction metrics. Integrated with billing and CRM platforms for unified reporting.',
  },
  {
    id: 'manuals',
    code: 'OPS',
    title: 'Operational Manuals',
    description:
      'Comprehensive standard operating procedures (SOPs) for every operational function including provisioning, support, billing, fault management, and vendor coordination. Designed for seamless knowledge transfer.',
  },
]

const phase3Indicators = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Fully autonomous operations',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    label: 'Certified internal team capability',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    label: 'Complete digital sovereignty',
  },
]

const phase3Streams = [
  {
    id: 'ktp',
    title: 'Knowledge Transfer Programme',
    description:
      'Structured training modules covering every operational, technical, and commercial function. Includes workshops, documentation handover, and competency assessments for all key roles.',
  },
  {
    id: 'governance',
    title: 'Governance Charter',
    description:
      'Formal governance framework defining decision-making authority, escalation paths, vendor management protocols, and ongoing performance review cadences for independent operation.',
  },
  {
    id: 'certification',
    title: 'Go-Independent Certification',
    description:
      'Formal sign-off process validating GCT\'s readiness to operate independently, covering technical competency, operational maturity, and commercial capability benchmarks.',
  },
  {
    id: 'capability',
    title: 'Capability Assessment & Sign-off',
    description:
      'Final evaluation of team skills, platform proficiency, and process adherence. Includes gap remediation plan and post-transfer support recommendations.',
  },
  {
    id: 'documentation',
    title: 'Complete Documentation Pack',
    description:
      'Full archive of all project deliverables, SOPs, technical specifications, vendor contracts, and strategic documents compiled into a structured handover pack.',
  },
]

/* ------------------------------------------------------------------ */
/*  Expandable card component                                          */
/* ------------------------------------------------------------------ */

function ExpandableCard({
  code,
  title,
  description,
}: {
  code?: string
  title: string
  description: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white border border-gray-200/60 rounded-2xl overflow-hidden card-lift">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50/60 transition duration-100 ease-linear"
      >
        <div className="flex items-center gap-3">
          {code && (
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#e8eef9] text-[#032572] text-xs font-bold shrink-0">
              {code}
            </span>
          )}
          <span className="text-sm font-semibold text-[#212529]">{title}</span>
        </div>
        <svg
          className={`w-5 h-5 text-[#6c757d] shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-5 pt-0">
          <p className="text-sm text-[#6c757d] leading-relaxed">{description}</p>
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */

export default function DBOTSection() {
  return (
    <section id="dbot" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* ─── Header ─── */}
        <AnimateOnScroll animation="fade-up">
          <p className="section-label mb-3">01 &mdash; DBOT</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#212529]">
            Design, Build, Operate{' '}
            <span className="text-[#032572]">&amp; Transfer</span>
          </h2>
          <p className="text-xl font-semibold text-[#032572] mt-2">
            MVNO Transformation Strategy
          </p>
        </AnimateOnScroll>

        {/* ─── Opening description ─── */}
        <AnimateOnScroll animation="fade-up" delay={80} className="mt-6 max-w-4xl space-y-4">
          <p className="text-lg text-[#6c757d] leading-relaxed">
            The DBOT model provides GCT with a structured partnership to transition from traditional telecoms into a fully converged, cloud-enabled digital operator. DSG designs the strategy, builds the platform, operates it alongside GCT, and transfers full ownership and capability.
          </p>
          <p className="text-lg text-[#6c757d] leading-relaxed">
            This approach de-risks the transformation by combining DSG&apos;s deep MVNO expertise with a phased delivery that builds organisational capability at every stage &mdash; ensuring GCT achieves complete digital sovereignty by programme end.
          </p>
        </AnimateOnScroll>

        {/* ─── Why DBOT for GCT? ─── */}
        <div className="mt-20">
          <AnimateOnScroll animation="fade-up">
            <h3 className="text-2xl sm:text-3xl font-black text-[#212529] mb-8">
              Why <span className="gradient-text">DBOT</span> for GCT?
            </h3>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyDBOTCards.map((card, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 80}>
                <div className="bg-white border border-gray-200/60 rounded-2xl p-6 sm:p-8 card-lift h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#e8eef9] flex items-center justify-center text-[#032572] mb-5">
                    {card.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[#212529] mb-3">{card.title}</h4>
                  <p className="text-sm text-[#6c757d] leading-relaxed">{card.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/*  PHASE 1 — DESIGN                                         */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="section-divider my-20" />

        <AnimateOnScroll animation="fade-up">
          <span className="phase-badge">Phase 1</span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#212529] mt-4 mb-2">
            Laying the Foundation for Execution
          </h3>
          <p className="text-sm font-semibold text-[#032572] mb-4">Design &mdash; 8 Weeks</p>
          <p className="text-base text-[#6c757d] leading-relaxed max-w-3xl">
            The Design phase is a deep-dive strategic engagement that produces the complete blueprint for GCT&apos;s MVNO launch. Every deliverable is crafted to be actionable and implementation-ready, removing ambiguity before a single line of code is written or contract signed.
          </p>
        </AnimateOnScroll>

        {/* Timeline milestones */}
        <AnimateOnScroll animation="fade-up" delay={80} className="mt-10">
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden sm:block absolute top-6 left-0 right-0 h-0.5 bg-gray-200" />
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-0">
              {phase1Milestones.map((m, i) => (
                <div key={i} className="relative flex flex-col items-center text-center px-2">
                  <div className="w-12 h-12 rounded-full bg-[#032572] text-white flex items-center justify-center text-sm font-bold z-10">
                    {i + 1}
                  </div>
                  <p className="text-xs font-bold text-[#032572] mt-3">{m.week}</p>
                  <p className="text-xs text-[#6c757d] mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Deliverables */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {phase1Deliverables.map((d, i) => (
            <AnimateOnScroll key={d.id} animation="fade-up" delay={i * 80}>
              <ExpandableCard code={d.code} title={d.title} description={d.description} />
            </AnimateOnScroll>
          ))}
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/*  PHASE 2 — BUILD & OPERATE                                 */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="section-divider my-20" />

        <AnimateOnScroll animation="fade-up">
          <span className="phase-badge">Phase 2</span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#212529] mt-4 mb-2">
            Activating the Blueprint
          </h3>
          <p className="text-sm font-semibold text-[#032572] mb-4">Build &amp; Operate &mdash; 6 Months</p>
          <p className="text-base text-[#6c757d] leading-relaxed max-w-3xl">
            DSG transitions from advisory to operational partner, working shoulder-to-shoulder with GCT to build the platform, onboard the network, launch commercially, and drive early subscriber growth. This phase is where strategy becomes revenue.
          </p>
        </AnimateOnScroll>

        {/* Performance Levers */}
        <AnimateOnScroll animation="fade-up" delay={80} className="mt-10">
          <div className="bg-[#f8f9fa] border border-gray-200/60 rounded-2xl p-6 sm:p-8">
            <h4 className="text-base font-bold text-[#212529] mb-5">Performance Levers</h4>
            <ul className="space-y-3">
              {phase2Levers.map((lever, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#212529]">
                  <svg className="w-5 h-5 text-[#032572] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {lever}
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>

        {/* Phase 2 Deliverables */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {phase2Deliverables.map((d, i) => (
            <AnimateOnScroll key={d.id} animation="fade-up" delay={i * 80}>
              <ExpandableCard code={d.code} title={d.title} description={d.description} />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Phase 2 Timeline */}
        <AnimateOnScroll animation="fade-up" delay={160} className="mt-8">
          <div className="bg-white border border-gray-200/60 rounded-2xl p-6">
            <p className="text-xs font-bold text-[#6c757d] uppercase tracking-wider mb-3">Timeline</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-3 rounded-full bg-[#032572]/10 overflow-hidden">
                <div className="h-full rounded-full bg-[#032572]" style={{ width: '100%' }} />
              </div>
              <span className="text-xs font-semibold text-[#032572] shrink-0">6 Months</span>
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-[#6c757d]">
              <span>Month 1 &mdash; Onboarding</span>
              <span>Month 3 &mdash; Soft Launch</span>
              <span>Month 6 &mdash; Stable Ops</span>
            </div>
          </div>
        </AnimateOnScroll>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/*  PHASE 3 — TRANSFER                                        */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="section-divider my-20" />

        <AnimateOnScroll animation="fade-up">
          <span className="phase-badge">Phase 3</span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#212529] mt-4 mb-2">
            Achieving Digital Sovereignty
          </h3>
          <p className="text-sm font-semibold text-[#032572] mb-4">Transfer &mdash; 1 Month</p>
        </AnimateOnScroll>

        {/* Success indicators */}
        <AnimateOnScroll animation="fade-up" delay={80} className="mt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {phase3Indicators.map((ind, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-[#e8eef9] rounded-xl px-5 py-3 flex-1"
              >
                <span className="text-[#032572]">{ind.icon}</span>
                <span className="text-sm font-semibold text-[#032572]">{ind.label}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Transfer streams */}
        <div className="mt-8 space-y-3">
          {phase3Streams.map((s, i) => (
            <AnimateOnScroll key={s.id} animation="fade-up" delay={i * 80}>
              <ExpandableCard title={s.title} description={s.description} />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Phase 3 Timeline */}
        <AnimateOnScroll animation="fade-up" delay={240} className="mt-8">
          <div className="bg-white border border-gray-200/60 rounded-2xl p-6">
            <p className="text-xs font-bold text-[#6c757d] uppercase tracking-wider mb-3">Timeline</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-3 rounded-full bg-[#032572]/10 overflow-hidden">
                <div className="h-full rounded-full bg-[#032572]" style={{ width: '100%' }} />
              </div>
              <span className="text-xs font-semibold text-[#032572] shrink-0">4 Weeks</span>
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-[#6c757d]">
              <span>Week 1 &mdash; Knowledge Transfer</span>
              <span>Week 2-3 &mdash; Shadowed Ops</span>
              <span>Week 4 &mdash; Certification</span>
            </div>
          </div>
        </AnimateOnScroll>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/*  INVESTMENT                                                */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="section-divider my-20" />

        <AnimateOnScroll animation="fade-up">
          <div className="bg-[#032572] rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl font-black mb-8">Investment Summary</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <p className="text-sm text-white/60 mb-1">Total Investment</p>
                <p className="text-3xl font-black">
                  $<AnimatedCounter value={250000} className="text-3xl font-black" />
                </p>
                <p className="text-xs text-white/50 mt-1">USD</p>
              </div>
              <div>
                <p className="text-sm text-white/60 mb-1">Structure</p>
                <p className="text-lg font-bold">Fixed fee excl. VAT</p>
                <p className="text-xs text-white/50 mt-1">Travel as incurred</p>
              </div>
              <div>
                <p className="text-sm text-white/60 mb-1">Additional Hours</p>
                <p className="text-lg font-bold">$300 / hr</p>
                <p className="text-xs text-white/50 mt-1">Beyond scope work</p>
              </div>
              <div>
                <p className="text-sm text-white/60 mb-1">Duration</p>
                <p className="text-lg font-bold">~9 Months</p>
                <p className="text-xs text-white/50 mt-1">Total programme</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* ─── Payment structure ─── */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <AnimateOnScroll animation="fade-up" delay={80}>
            <div className="bg-white border border-gray-200/60 rounded-2xl p-6 sm:p-8 card-lift card-accent-top h-full">
              <p className="text-xs font-bold text-[#6c757d] uppercase tracking-wider mb-2">50% Deposit</p>
              <p className="text-3xl font-black text-[#032572]">
                $<AnimatedCounter value={125000} className="text-3xl font-black text-[#032572]" />
              </p>
              <p className="text-sm text-[#6c757d] mt-3 leading-relaxed">
                Due upon contract signature to initiate the Design phase and secure the programme schedule.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={160}>
            <div className="bg-white border border-gray-200/60 rounded-2xl p-6 sm:p-8 card-lift card-accent-top h-full">
              <p className="text-xs font-bold text-[#6c757d] uppercase tracking-wider mb-2">50% Milestone-Based</p>
              <p className="text-3xl font-black text-[#032572]">
                $<AnimatedCounter value={125000} className="text-3xl font-black text-[#032572]" />
              </p>
              <p className="text-sm text-[#6c757d] mt-3 leading-relaxed">
                Released against agreed milestones across Build &amp; Operate and Transfer phases, ensuring delivery accountability.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* ─── Phase allocation bar chart ─── */}
        <AnimateOnScroll animation="fade-up" delay={240} className="mt-8">
          <div className="bg-white border border-gray-200/60 rounded-2xl p-6 sm:p-8">
            <h4 className="text-base font-bold text-[#212529] mb-6">Phase Allocation</h4>

            {/* Horizontal stacked bar */}
            <div className="flex h-10 rounded-xl overflow-hidden">
              <div
                className="bg-[#032572] flex items-center justify-center text-white text-xs font-bold"
                style={{ width: '22%' }}
              >
                22%
              </div>
              <div
                className="bg-[#0a4bcc] flex items-center justify-center text-white text-xs font-bold"
                style={{ width: '67%' }}
              >
                67%
              </div>
              <div
                className="bg-[#3b7ddd] flex items-center justify-center text-white text-xs font-bold"
                style={{ width: '11%' }}
              >
                11%
              </div>
            </div>

            {/* Labels */}
            <div className="flex mt-4 gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#032572]" />
                <span className="text-xs text-[#6c757d]">
                  <span className="font-semibold text-[#212529]">Design</span> &mdash; 8 weeks (~22%)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#0a4bcc]" />
                <span className="text-xs text-[#6c757d]">
                  <span className="font-semibold text-[#212529]">Build &amp; Operate</span> &mdash; 6 months (~67%)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#3b7ddd]" />
                <span className="text-xs text-[#6c757d]">
                  <span className="font-semibold text-[#212529]">Transfer</span> &mdash; 4 weeks (~11%)
                </span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
