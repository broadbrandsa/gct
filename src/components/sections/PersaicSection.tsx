const coreCapabilities = [
  {
    title: "360\u00b0 Customer View",
    description: "Gain a complete view of customers and operations, unifying insights across channels and systems",
  },
  {
    title: "Predictive Foresight",
    description: "Anticipate behaviour, market shifts, and opportunities before they happen",
  },
  {
    title: "Real-Time Decisions",
    description: "Drive faster, smarter decisions with live data streams and instant recommendations",
  },
  {
    title: "Persona-First Targeting",
    description: "Move beyond basic demographic segmentation to persona-driven campaigns",
  },
  {
    title: "Measurable ROI",
    description: "Turn every dataset into clear, measurable business outcomes",
  },
];

const adFeatures = [
  {
    title: "Scalable Creative Production",
    description: "Rapid production of scalable, dynamic ad creatives without relying on external design teams",
  },
  {
    title: "Accelerated Campaign Launch",
    description: "Faster time to market while maintaining consistency and performance best practices",
  },
  {
    title: "Dynamic Product Ads",
    description: "Automated creative updates directly from e-commerce data with clear attribution and measurable ROI",
  },
];

export default function PersaicSection() {
  return (
    <section id="persaic" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 anim-fade-up">
          <p className="section-label mb-3">07 &mdash; PersAIc</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#212529] leading-tight">
            Data Intelligence &amp; Advertising
          </h2>
          <p className="text-xl font-semibold text-[#032572] mt-2">Turning Data Into Actionable Intelligence</p>
          <p className="mt-4 text-lg text-[#6c757d] max-w-3xl">
            PersAIc transforms raw data into real-time intelligence that drives smarter decisions. Instead of overwhelming businesses with static dashboards or siloed reports, PersAIc creates a living ecosystem where data flows seamlessly across teams, systems, and channels.
          </p>
        </div>

        {/* Core capabilities */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-[#212529] mb-6 anim-fade-up">Core Capabilities</h3>
          <div className="space-y-4">
            {coreCapabilities.map((cap, i) => (
              <div
                key={i}
                className={`bg-white border border-[#dee2e6] rounded-sm p-6 flex items-start gap-4 card-lift anim-fade-up delay-${Math.min((i + 1) * 100, 500)}`}
              >
                <span className="w-10 h-10 rounded-lg bg-[#032572] text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="text-base font-bold text-[#212529]">{cap.title}</h4>
                  <p className="text-sm text-[#6c757d] mt-1">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ad Platform features */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-[#212529] mb-6 anim-fade-up delay-600">Ad Platform</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {adFeatures.map((feature, i) => (
              <div
                key={i}
                className={`bg-[#f8f9fa] border border-[#dee2e6] rounded-sm p-8 card-lift anim-fade-up delay-${(i + 6) * 100}`}
              >
                <h4 className="text-base font-bold text-[#212529] mb-2">{feature.title}</h4>
                <p className="text-sm text-[#6c757d] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <div className="bg-[#032572] rounded-sm p-8 sm:p-12 mb-12 text-center anim-fade-up delay-800">
          <p className="text-xl sm:text-2xl font-black text-white">
            &ldquo;Smarter Ads. Real-Time Insights. Scalable Revenue.&rdquo;
          </p>
        </div>

        {/* Commercial */}
        <div className="bg-white border border-[#dee2e6] rounded-sm p-8 mb-6 anim-fade-up">
          <p className="text-sm font-semibold text-[#212529] mb-1">Commercial</p>
          <p className="text-sm text-[#6c757d]">
            Platform licensing based on data volume and feature requirements. Contact for a tailored quotation.
          </p>
        </div>

        {/* Contact */}
        <div className="text-sm text-[#6c757d] anim-fade-up">
          <p>
            <span className="font-medium text-[#212529]">persaic.com</span> &middot; vincentm@dsg.co.za &middot; +27 82 998 5412
          </p>
        </div>
      </div>
    </section>
  );
}
