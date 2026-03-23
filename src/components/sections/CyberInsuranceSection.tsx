const features = [
  {
    title: "Comprehensive Risk Visibility",
    description: "Full visibility into risk exposure across all digital touchpoints",
  },
  {
    title: "Adaptive Protection",
    description: "Dynamic protection using technology and insurance synergy that continuously evolves",
  },
  {
    title: "Tailored Coverage",
    description: "Personalized coverage fitting each client\u2019s unique risk profile",
  },
  {
    title: "Premium Incentives",
    description: "Encouraging continuous security improvement with premium rewards",
  },
  {
    title: "Upfront Risk Demystification",
    description: "Industry-leading software to understand risk before incidents occur",
  },
];

const marketStats = [
  { value: "$10.5T", label: "Projected Cybercrime Damage" },
  { value: "236.1M", label: "Ransomware Attacks (H1 2022)" },
  { value: "$4.35M", label: "Average Cost of Data Breach" },
];

export default function CyberInsuranceSection() {
  return (
    <section id="cyber-insurance" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 anim-fade-up">
          <p className="section-label mb-3">04 &mdash; Cyber Insurance</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#212529] leading-tight">
            ProActive Cyber Insurance
          </h2>
          <p className="text-xl font-semibold text-[#032572] mt-2">Dynamic Risk Detection &amp; Coverage</p>
          <p className="mt-4 text-lg text-[#6c757d] max-w-3xl">
            Powered by eInsurer (a DSG company, FSP 53069), ProActive Cyber Insurance provides dynamic insurance with proactive risk detection to mitigate potential cyber-attacks. Unlike traditional policies, coverage continuously evolves based on the organization&apos;s risk profile.
          </p>
        </div>

        {/* ProBusiness features */}
        <div className="mb-6 anim-fade-up delay-100">
          <h3 className="text-lg font-bold text-[#212529] mb-1">For Corporates</h3>
          <p className="text-sm text-[#6c757d]">ProBusiness Service</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`bg-white border border-[#dee2e6] rounded-sm p-8 card-lift anim-fade-up delay-${Math.min((i + 1) * 100, 500)}`}
            >
              <div className="w-8 h-8 rounded bg-[#e8eef9] flex items-center justify-center text-[#032572] text-sm font-bold mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-base font-bold text-[#212529] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#6c757d] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Market context */}
        <div className="bg-[#032572] rounded-sm p-8 sm:p-12 mb-12 anim-fade-up delay-600">
          <h3 className="text-lg font-bold text-white mb-6">Market Context</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {marketStats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl sm:text-3xl font-black text-white">{stat.value}</p>
                <p className="text-sm text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial */}
        <div className="bg-white border border-[#dee2e6] rounded-sm p-8 anim-fade-up delay-700">
          <p className="text-sm font-semibold text-[#212529] mb-1">Commercial</p>
          <p className="text-sm text-[#6c757d]">
            Custom quotation based on risk assessment. Contact for a tailored risk review and pricing proposal.
          </p>
        </div>
      </div>
    </section>
  );
}
