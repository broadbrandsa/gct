const products = [
  {
    num: "01",
    name: "DBOT",
    description: "Design, Build, Operate & Transfer — full MVNO transformation strategy",
    href: "#dbot",
    color: "bg-[#032572]",
  },
  {
    num: "02",
    name: "CXG",
    description: "Integrated customer experience and BPO services",
    href: "#cxg",
    color: "bg-[#0d6efd]",
  },
  {
    num: "03",
    name: "TeSIM",
    description: "Travel eSIM platform with revenue share model",
    href: "#tesim",
    color: "bg-[#0dcaf0]",
  },
  {
    num: "04",
    name: "Cyber Insurance",
    description: "ProActive cyber insurance with dynamic risk detection",
    href: "#cyber-insurance",
    color: "bg-[#198754]",
  },
  {
    num: "05",
    name: "Bitdefender",
    description: "Enterprise endpoint security and managed detection & response",
    href: "#bitdefender",
    color: "bg-[#dc3545]",
  },
  {
    num: "06",
    name: "Xanite",
    description: "CDP & marketing automation with 16 microservices",
    href: "#xanite",
    color: "bg-[#6610f2]",
  },
  {
    num: "07",
    name: "PersAIc",
    description: "AI-powered data intelligence and advertising platform",
    href: "#persaic",
    color: "bg-[#fd7e14]",
  },
];

export default function ProductOverview() {
  return (
    <section id="solutions" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 anim-fade-up">
          <p className="section-label mb-3">Solutions Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#212529] leading-tight">
            Seven <span className="text-[#032572]">Integrated</span> Solutions
          </h2>
          <p className="mt-4 text-lg text-[#6c757d] max-w-3xl">
            A comprehensive ecosystem of digital solutions designed to work together, accelerating GCT&apos;s transformation across every dimension.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <a
              key={i}
              href={product.href}
              className={`bg-white border border-[#dee2e6] rounded-sm p-8 card-lift anim-fade-up delay-${Math.min((i + 1) * 100, 800)} group`}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className={`${product.color} text-white text-xs font-bold px-2.5 py-1 rounded`}>
                  {product.num}
                </span>
                <h3 className="text-lg font-bold text-[#212529] group-hover:text-[#032572] transition-colors">
                  {product.name}
                </h3>
              </div>
              <p className="text-sm text-[#6c757d] leading-relaxed mb-4">{product.description}</p>
              <span className="text-sm font-semibold text-[#032572] group-hover:underline">
                Learn more &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
