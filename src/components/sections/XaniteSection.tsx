const layers = [
  {
    num: 1,
    title: "CDP Layer",
    items: "Profile management, Consent tracking, Event Ingestion, Analytics",
  },
  {
    num: 2,
    title: "Segmentation Layer",
    items: "Real-time and batch segmentation engine",
  },
  {
    num: 3,
    title: "Marketing Layer",
    items: "Campaigns, Journeys, Messages, AI Service",
  },
  {
    num: 4,
    title: "Integration Layer",
    items: "Webhooks, Connectors, Google, Meta",
  },
];

const capabilities = [
  "Real-time KPIs, campaign management, and comprehensive platform control",
  "GDPR/CCPA/POPIA compliant consent tracking across all channels",
  "Automated multi-touch journeys for retention and engagement",
  "Drag-and-drop interface for creating automated customer journeys",
];

export default function XaniteSection() {
  return (
    <section id="xanite" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 anim-fade-up">
          <p className="section-label mb-3">06 &mdash; Xanite</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#212529] leading-tight">
            CDP &amp; Marketing Automation
          </h2>
          <p className="text-xl font-semibold text-[#032572] mt-2">The MVNO Value Engine</p>
          <p className="mt-4 text-lg text-[#6c757d] max-w-3xl">
            Xanite is a comprehensive Customer Data Platform with 16 microservices providing advanced segmentation, journey orchestration, and multi-channel campaign management. It is built specifically for MVNO and telecoms value creation.
          </p>
        </div>

        {/* 4-layer architecture */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-[#212529] mb-6 anim-fade-up">Platform Architecture</h3>
          <div className="space-y-4">
            {layers.map((layer, i) => (
              <div
                key={i}
                className={`bg-white border border-[#dee2e6] rounded-sm p-6 flex items-start gap-4 card-lift anim-fade-up delay-${(i + 1) * 100}`}
              >
                <span className="w-10 h-10 rounded-lg bg-[#032572] text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {layer.num}
                </span>
                <div>
                  <h4 className="text-base font-bold text-[#212529]">{layer.title}</h4>
                  <p className="text-sm text-[#6c757d] mt-1">{layer.items}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className={`bg-white border border-[#dee2e6] rounded-sm p-8 card-lift anim-fade-up delay-${(i + 1) * 100}`}
            >
              <div className="w-8 h-8 rounded bg-[#e8eef9] flex items-center justify-center text-[#032572] text-sm font-bold mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-sm text-[#212529] leading-relaxed">{cap}</p>
            </div>
          ))}
        </div>

        {/* Commercial */}
        <div className="bg-white border border-[#dee2e6] rounded-sm p-8 mb-6 anim-fade-up delay-500">
          <p className="text-sm font-semibold text-[#212529] mb-1">Commercial</p>
          <p className="text-sm text-[#6c757d]">
            Platform licensing based on subscriber volume and feature requirements. Contact for a tailored quotation.
          </p>
        </div>

        {/* Contact */}
        <div className="text-sm text-[#6c757d] anim-fade-up delay-600">
          <p>
            <span className="font-medium text-[#212529]">Xanite.com</span> &middot; vincentm@dsg.co.za &middot; +27 82 998 5412
          </p>
        </div>
      </div>
    </section>
  );
}
