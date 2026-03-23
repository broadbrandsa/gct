const dsgCompanies = [
  {
    name: "MVNE",
    description: "Mobile Virtual Network Enablement. White glove MVNO enablement from consulting to operations.",
    website: "mvne.co.za",
  },
  {
    name: "CXG",
    description: "Integrated Customer Experience. On-demand BPO and BPaaS.",
    website: "cxg.co.za",
  },
  {
    name: "Xanite",
    description: "CDP & Marketing Automation. 16 microservices for telecoms value creation.",
    website: "xanite.com",
  },
  {
    name: "PersAIc",
    description: "Data Intelligence & Advertising. Real-time insights and scalable revenue.",
    website: "persaic.com",
  },
  {
    name: "eInsurer",
    description: "Cyber Insurance. ProActive cyber insurance with risk detection.",
    website: "einsurer.co.za",
  },
  {
    name: "Digital Resilience",
    description: "Cybersecurity. Enterprise endpoint protection and MDR.",
    website: null,
  },
  {
    name: "BroadBrand",
    description: "Leading African mobile virtual services enablement.",
    website: null,
  },
];

const differentiators = [
  {
    title: "Pan-African Presence",
    description: "Operations across Africa with deep understanding of local markets",
  },
  {
    title: "End-to-End Execution",
    description: "From strategy through build, operate, and transfer",
  },
  {
    title: "25+ Years of CX Excellence",
    description: "Founded 1998, enabling branded mobile services since 2013",
  },
];

export default function WhyMVNE() {
  return (
    <section id="why-mvne" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 anim-fade-up">
          <p className="section-label mb-3">About Us</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#212529] leading-tight">
            Why MVNE &amp; <span className="text-[#032572]">Digital Solutions Group</span>
          </h2>
        </div>

        {/* DSG companies carousel/grid */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-16 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
          {dsgCompanies.map((company, i) => (
            <div
              key={i}
              className={`min-w-[280px] sm:min-w-[320px] bg-white border border-[#dee2e6] rounded-sm p-6 card-lift snap-start anim-fade-up delay-${Math.min((i + 1) * 100, 700)}`}
            >
              <h3 className="text-lg font-bold text-[#032572] mb-2">{company.name}</h3>
              <p className="text-sm text-[#6c757d] mb-3 leading-relaxed">{company.description}</p>
              {company.website && (
                <p className="text-xs font-medium text-[#032572]">{company.website}</p>
              )}
            </div>
          ))}
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {differentiators.map((diff, i) => (
            <div
              key={i}
              className={`bg-[#032572] rounded-sm p-8 text-white anim-fade-up delay-${(i + 1) * 100}`}
            >
              <h3 className="text-lg font-bold mb-2">{diff.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
