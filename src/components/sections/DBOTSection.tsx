"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const phases = [
  {
    id: "phase-1",
    badge: "Phase 1",
    title: "Design",
    duration: "8 Weeks",
    items: [
      "Strategic Review Report (SRR)",
      "Minimum Viable Product (MVP) Definition",
      "Go-to-Market Strategy (GTM)",
      "Operating Model (OM)",
      "Integrated CX Model (ICX)",
      "Business Model & Revenue Architecture (BM)",
    ],
  },
  {
    id: "phase-2",
    badge: "Phase 2",
    title: "Build & Operate",
    duration: "6 Months",
    items: [
      "TPO (Third Party Operator) Setup",
      "Implementation Dashboards",
      "Operational Manuals",
      "Revenue Assurance & Fraud Management",
      "Customer Value Management",
      "Platform Integration (Billing, CRM, Connectivity)",
    ],
  },
  {
    id: "phase-3",
    badge: "Phase 3",
    title: "Transfer",
    duration: "1 Month",
    items: [
      "Knowledge Transfer Programme",
      "Governance Charter",
      "Go-Independent Certification",
      "Capability Assessment & Sign-off",
    ],
  },
];

export default function DBOTSection() {
  return (
    <section id="dbot" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 anim-fade-up">
          <p className="section-label mb-3">01 &mdash; DBOT</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#212529] leading-tight">
            Design, Build, Operate &amp; Transfer
          </h2>
          <p className="text-xl font-semibold text-[#032572] mt-2">MVNO Transformation Strategy</p>
          <p className="mt-4 text-lg text-[#6c757d] max-w-3xl">
            The DBOT model provides GCT with a structured partnership to transition from traditional telecoms into a fully converged, cloud-enabled digital operator. DSG designs the strategy, builds the platform, operates it alongside GCT, and transfers full ownership and capability.
          </p>
        </div>

        {/* Phase accordion */}
        <Accordion defaultValue={["phase-1"]} className="mb-16">
          {phases.map((phase, i) => (
            <AccordionItem
              key={phase.id}
              value={phase.id}
              className={`bg-white border border-[#dee2e6] rounded-sm mb-4 overflow-hidden anim-fade-up delay-${(i + 1) * 100}`}
            >
              <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-[#f8f9fa] transition-colors [&[data-state=open]>svg]:rotate-180">
                <div className="flex items-center gap-4 text-left">
                  <span className="phase-badge">{phase.badge}</span>
                  <div>
                    <h3 className="text-lg font-bold text-[#212529]">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-[#6c757d]">{phase.duration}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[#212529]">
                      <svg className="w-4 h-4 text-[#032572] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Investment card */}
        <div className="bg-[#032572] rounded-sm p-8 sm:p-12 text-white anim-fade-up delay-400">
          <h3 className="text-xl font-bold mb-6">Investment Summary</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-white/60 mb-1">Total Investment</p>
              <p className="text-2xl font-black">$250,000</p>
              <p className="text-xs text-white/50 mt-1">Fixed fee USD</p>
            </div>
            <div>
              <p className="text-sm text-white/60 mb-1">Payment Terms</p>
              <p className="text-lg font-bold">50% + 50%</p>
              <p className="text-xs text-white/50 mt-1">$125,000 deposit + milestone-based</p>
            </div>
            <div>
              <p className="text-sm text-white/60 mb-1">Duration</p>
              <p className="text-lg font-bold">~9 Months</p>
              <p className="text-xs text-white/50 mt-1">Total programme duration</p>
            </div>
            <div>
              <p className="text-sm text-white/60 mb-1">Phase Allocation</p>
              <div className="flex gap-2 mt-2">
                <div className="flex-1">
                  <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400 rounded-full" style={{ width: "22%" }} />
                  </div>
                  <p className="text-[10px] text-white/50 mt-1">Design 22%</p>
                </div>
                <div className="flex-[3]">
                  <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400 rounded-full" style={{ width: "67%" }} />
                  </div>
                  <p className="text-[10px] text-white/50 mt-1">Build &amp; Operate 67%</p>
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400 rounded-full" style={{ width: "100%" }} />
                  </div>
                  <p className="text-[10px] text-white/50 mt-1">Transfer 11%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
