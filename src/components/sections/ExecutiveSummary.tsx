const outcomes = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Digital Transformation",
    description:
      "Complete MVNO enablement through the DBOT model, taking GCT from strategy through build, operate, and transfer.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Revenue Enablement",
    description:
      "Travel eSIM, CDP-driven marketing automation, and AI-powered advertising to create and grow new revenue streams.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Operational Resilience",
    description:
      "Enterprise-grade cybersecurity, customer experience operations, and integrated data intelligence.",
  },
];

const metrics = [
  { value: "7", label: "Integrated Solutions" },
  { value: "DBOT", label: "Partnership Model" },
  { value: "50/50", label: "eSIM Revenue Share" },
  { value: "Pan-African", label: "Delivery Capability" },
];

export default function ExecutiveSummary() {
  return (
    <section id="overview" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 anim-fade-up">
          <p className="section-label mb-3">Executive Summary</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#212529] leading-tight">
            Strategic <span className="text-[#032572]">Outcomes</span>
          </h2>
          <p className="mt-4 text-lg text-[#6c757d] max-w-3xl">
            Three pillars of value designed to position GCT as a leading digital operator in the African market.
          </p>
        </div>

        {/* Outcome cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {outcomes.map((item, i) => (
            <div
              key={i}
              className={`bg-white border border-[#dee2e6] rounded-sm p-8 card-lift anim-fade-up delay-${(i + 1) * 100}`}
            >
              <div className="w-12 h-12 rounded-lg bg-[#e8eef9] flex items-center justify-center text-[#032572] mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#212529] mb-3">{item.title}</h3>
              <p className="text-sm text-[#6c757d] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Quote callout */}
        <div className="bg-[#032572] rounded-sm p-8 sm:p-12 mb-16 anim-fade-up delay-400">
          <blockquote className="text-lg sm:text-xl text-white/90 leading-relaxed font-light italic">
            &ldquo;This proposal brings together seven complementary solutions into a single, cohesive digital transformation programme for GCT &mdash; from network enablement to customer engagement to cyber resilience.&rdquo;
          </blockquote>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className={`bg-[#f8f9fa] border border-[#dee2e6] rounded-sm p-6 text-center anim-fade-up delay-${(i + 5) * 100}`}
            >
              <p className="text-2xl sm:text-3xl font-black text-[#032572]">{metric.value}</p>
              <p className="text-sm text-[#6c757d] mt-1 font-medium">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
