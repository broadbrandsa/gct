const features = [
  {
    title: "Managed Detection & Response (MDR)",
    description: "24/7 security monitoring, threat hunting, and incident response by Bitdefender\u2019s SOC team",
  },
  {
    title: "Extended Detection & Response (XDR)",
    description: "Cross-platform visibility across endpoints, networks, cloud, and identities",
  },
  {
    title: "Endpoint Protection Platform",
    description: "Prevention-first architecture with AI/ML-driven threat detection",
  },
  {
    title: "Cysurance Breach Warranty",
    description: "Up to $1M coverage for cyber insurance deductibles, out-of-pocket expenses, compliance shortfalls, legal liability, and financial loss",
  },
];

export default function BitdefenderSection() {
  return (
    <section id="bitdefender" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 anim-fade-up">
          <p className="section-label mb-3">05 &mdash; Bitdefender</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#212529] leading-tight">
            Enterprise Endpoint Security
          </h2>
          <p className="text-xl font-semibold text-[#032572] mt-2">Managed Detection &amp; Response</p>
          <p className="mt-4 text-lg text-[#6c757d] max-w-3xl">
            Bitdefender provides enterprise-grade endpoint protection, managed detection and response (MDR), and extended detection and response (XDR). Bundled with the Cysurance warranty programme, MDR customers receive up to $1 million in financial compensation following security incidents at no additional cost.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`bg-white border border-[#dee2e6] rounded-sm p-8 card-lift anim-fade-up delay-${(i + 1) * 100}`}
            >
              <div className="w-8 h-8 rounded bg-[#e8eef9] flex items-center justify-center text-[#032572] text-sm font-bold mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-base font-bold text-[#212529] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#6c757d] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Warranty highlight */}
        <div className="bg-[#032572] rounded-sm p-8 sm:p-12 mb-12 anim-fade-up delay-500">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-black text-white">Up to $1M Breach Warranty</p>
              <p className="text-sm text-white/60 mt-1">
                Included at no additional cost for MDR customers through the Cysurance programme
              </p>
            </div>
          </div>
        </div>

        {/* Commercial */}
        <div className="bg-white border border-[#dee2e6] rounded-sm p-8 anim-fade-up delay-600">
          <p className="text-sm font-semibold text-[#212529] mb-1">Commercial</p>
          <p className="text-sm text-[#6c757d]">
            Enterprise licensing based on number of endpoints. Contact for a tailored quotation.
          </p>
        </div>
      </div>
    </section>
  );
}
