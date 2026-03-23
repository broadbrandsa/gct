const phase1 = [
  "Business Requirements Specification (BRS)",
  "Technical Specifications",
  "Customer Journey Mapping",
  "DARE Model",
];

const phase2 = [
  "Build Travel eSIM Services",
  "Configure Bundles",
  "Configure SIMs",
  "Go Live",
];

const fees = [
  {
    type: "One-time SIM Profile Creation Fee",
    price: "$0.63",
    notes: "MVNE has 0\u2013250,000 Profile Credentials Ordered",
  },
  {
    type: "One-time ICCID Provisioning Fee",
    price: "$0.31",
    notes: "Per ICCID, invoiced at provisioning time",
  },
  {
    type: "Fee per Active IMSI Credential",
    price: "$0.31/month",
    notes: "Monthly active fee based on Data/SMS/Location activity",
  },
];

export default function TeSIMSection() {
  return (
    <section id="tesim" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 anim-fade-up">
          <p className="section-label mb-3">03 &mdash; TeSIM</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#212529] leading-tight">
            Travel eSIM
          </h2>
          <p className="text-xl font-semibold text-[#032572] mt-2">Platform Services</p>
          <p className="mt-4 text-lg text-[#6c757d] max-w-3xl">
            Configuration of the Digital Mobile Travel eSIM technology platform for a revenue share arrangement with GCT. End-to-end travel eSIM services with rapid deployment and flexible commercial terms.
          </p>
        </div>

        {/* 2-phase implementation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-[#dee2e6] rounded-sm p-8 card-lift anim-fade-up delay-100">
            <span className="phase-badge mb-4">Phase 1</span>
            <h3 className="text-lg font-bold text-[#212529] mt-3 mb-4">Implementation Scoping</h3>
            <ul className="space-y-3">
              {phase1.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#212529]">
                  <svg className="w-4 h-4 text-[#032572] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-[#dee2e6] rounded-sm p-8 card-lift anim-fade-up delay-200">
            <span className="phase-badge mb-4">Phase 2</span>
            <h3 className="text-lg font-bold text-[#212529] mt-3 mb-4">Integration &amp; Go-Live</h3>
            <ul className="space-y-3">
              {phase2.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#212529]">
                  <svg className="w-4 h-4 text-[#032572] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-[#e8eef9] rounded-sm px-6 py-4 mb-12 anim-fade-up delay-300">
          <p className="text-sm font-semibold text-[#032572]">Timeline: ~2 weeks total</p>
        </div>

        {/* Commercial - two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#032572] rounded-sm p-8 text-white anim-fade-up delay-300">
            <p className="text-sm text-white/60 mb-2">Setup Fee</p>
            <p className="text-3xl font-black">$3,200</p>
            <p className="text-sm text-white/50 mt-2">Once-off, paid upfront</p>
          </div>
          <div className="bg-white border border-[#dee2e6] rounded-sm p-8 anim-fade-up delay-400">
            <p className="text-sm text-[#6c757d] mb-2">Revenue Model</p>
            <p className="text-3xl font-black text-[#032572]">50/50</p>
            <p className="text-sm text-[#6c757d] mt-2">Margin share per bundle sold</p>
          </div>
        </div>

        {/* Per-Subscriber Fees table */}
        <div className="overflow-x-auto anim-fade-up delay-500">
          <h3 className="text-lg font-bold text-[#212529] mb-4">Per-Subscriber Fees</h3>
          <table className="proposal-table">
            <thead>
              <tr>
                <th>Fee Type</th>
                <th>Retail Price</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((fee, i) => (
                <tr key={i}>
                  <td className="font-medium">{fee.type}</td>
                  <td className="font-semibold text-[#032572]">{fee.price}</td>
                  <td>{fee.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
