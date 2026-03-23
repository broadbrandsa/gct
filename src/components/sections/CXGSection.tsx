const capabilities = [
  {
    title: "MVNO & VNO Support",
    description: "Service support, technical troubleshooting, inbound sales, and digital engagement for mobile networks",
  },
  {
    title: "Technical Support (ISP)",
    description: "Specialized support for fibre, broadband, and connectivity providers with complex diagnostics",
  },
  {
    title: "Omnichannel Engagement",
    description: "Voice, chat, WhatsApp, email, and social media support",
  },
  {
    title: "Sales Enablement",
    description: "Inbound and outbound sales campaigns with performance tracking",
  },
  {
    title: "QContact Platform",
    description: "Enterprise-grade unified communications platform with AI-driven efficiency",
  },
  {
    title: "Service Recovery",
    description: "Proactive service recovery, loyalty support, and churn reduction",
  },
];

const proofPoints = [
  { value: "27", label: "Years of CX Excellence" },
  { value: "100+", label: "Clients Served" },
  { value: "1,000+", label: "Employees" },
  { value: "Award", label: "Best CX Team (Transformation)" },
];

export default function CXGSection() {
  return (
    <section id="cxg" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 anim-fade-up">
          <p className="section-label mb-3">02 &mdash; CXG</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#212529] leading-tight">
            Integrated Customer Experience
          </h2>
          <p className="text-xl font-semibold text-[#032572] mt-2">On-Demand BPO &amp; CX Services</p>
          <p className="mt-4 text-lg text-[#6c757d] max-w-3xl">
            CXG (Customer Experience Group) is a leading African BPO and BPaaS provider with 27 years of experience and over 1,000 staff. CXG delivers omnichannel customer care, technical support, and sales enablement for telecoms, retail, and enterprise brands.
          </p>
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className={`bg-white border border-[#dee2e6] rounded-sm p-8 card-lift anim-fade-up delay-${Math.min((i + 1) * 100, 600)}`}
            >
              <div className="w-8 h-8 rounded bg-[#e8eef9] flex items-center justify-center text-[#032572] text-sm font-bold mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-base font-bold text-[#212529] mb-2">{cap.title}</h3>
              <p className="text-sm text-[#6c757d] leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>

        {/* Proof points */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {proofPoints.map((point, i) => (
            <div key={i} className={`bg-white border border-[#dee2e6] rounded-sm p-6 text-center anim-fade-up delay-${(i + 1) * 100}`}>
              <p className="text-2xl font-black text-[#032572]">{point.value}</p>
              <p className="text-sm text-[#6c757d] mt-1">{point.label}</p>
            </div>
          ))}
        </div>

        {/* Commercial note */}
        <div className="bg-white border border-[#dee2e6] rounded-sm p-8 anim-fade-up delay-500">
          <p className="text-sm font-semibold text-[#212529] mb-1">Commercial</p>
          <p className="text-sm text-[#6c757d]">
            Pricing customised per engagement model. Contact for a tailored quotation.
          </p>
        </div>
      </div>
    </section>
  );
}
