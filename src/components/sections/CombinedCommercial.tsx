const solutions = [
  {
    name: "DBOT",
    setup: "$250,000 (fixed)",
    ongoing: "50% deposit + 50% milestone",
    model: "\u2014",
  },
  {
    name: "CXG",
    setup: "Custom quotation",
    ongoing: "Per agent/month",
    model: "Tailored engagement",
  },
  {
    name: "TeSIM",
    setup: "$3,200 (once-off)",
    ongoing: "50/50 margin share",
    model: "Revenue share",
  },
  {
    name: "Cyber Insurance",
    setup: "Custom quotation",
    ongoing: "Risk-based premium",
    model: "Annual policy",
  },
  {
    name: "Bitdefender",
    setup: "Custom quotation",
    ongoing: "Per endpoint/month",
    model: "Enterprise license",
  },
  {
    name: "Xanite",
    setup: "Custom quotation",
    ongoing: "Per subscriber/month",
    model: "Platform license",
  },
  {
    name: "PersAIc",
    setup: "Custom quotation",
    ongoing: "Per data volume",
    model: "Platform license",
  },
];

export default function CombinedCommercial() {
  return (
    <section id="commercial" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 anim-fade-up">
          <p className="section-label mb-3">Commercial Overview</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#212529] leading-tight">
            Investment <span className="text-[#032572]">Summary</span>
          </h2>
        </div>

        {/* Summary table */}
        <div className="overflow-x-auto mb-12 anim-fade-up delay-100">
          <table className="proposal-table">
            <thead>
              <tr>
                <th>Solution</th>
                <th>Setup / Investment</th>
                <th>Ongoing</th>
                <th>Model</th>
              </tr>
            </thead>
            <tbody>
              {solutions.map((sol, i) => (
                <tr key={i}>
                  <td className="font-semibold">{sol.name}</td>
                  <td>{sol.setup}</td>
                  <td>{sol.ongoing}</td>
                  <td>{sol.model}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note callout */}
        <div className="bg-[#032572] rounded-sm p-8 sm:p-12 mb-12 anim-fade-up delay-200">
          <p className="text-white/90 text-base leading-relaxed">
            &ldquo;All pricing is indicative and subject to final scoping. Custom quotations will be prepared for each solution following detailed requirements gathering with GCT.&rdquo;
          </p>
        </div>

        {/* Payment terms */}
        <div className="bg-white border border-[#dee2e6] rounded-sm p-8 anim-fade-up delay-300">
          <h3 className="text-lg font-bold text-[#212529] mb-4">Payment Terms</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-[#6c757d] mb-1">Validity</p>
              <p className="text-sm font-semibold text-[#212529]">30 days from date of proposal</p>
            </div>
            <div>
              <p className="text-sm text-[#6c757d] mb-1">Payment Terms</p>
              <p className="text-sm font-semibold text-[#212529]">Net 30 from invoice date</p>
            </div>
            <div>
              <p className="text-sm text-[#6c757d] mb-1">Currency</p>
              <p className="text-sm font-semibold text-[#212529]">USD unless otherwise specified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
