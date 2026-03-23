import Image from "next/image";

const sectionLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Solutions", href: "#solutions" },
  { label: "Commercial", href: "#commercial" },
  { label: "Next Steps", href: "#next-steps" },
  { label: "Why MVNE", href: "#why-mvne" },
];

const solutionLinks = [
  { label: "DBOT", href: "#dbot" },
  { label: "CXG", href: "#cxg" },
  { label: "TeSIM", href: "#tesim" },
  { label: "Cyber Insurance", href: "#cyber-insurance" },
  { label: "Bitdefender", href: "#bitdefender" },
  { label: "Xanite", href: "#xanite" },
  { label: "PersAIc", href: "#persaic" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] text-white">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Ready to move forward?</h3>
            <p className="text-sm text-white/50 mt-1">Download the complete proposal or get in touch.</p>
          </div>
          <div className="flex gap-4">
            <a
              href="mailto:edwardw@mvne.co.za"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#032572] font-semibold text-sm hover:bg-white/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div>
            <Image
              src="/logos/mvne.png"
              alt="MVNE"
              width={100}
              height={30}
              className="h-7 w-auto mb-4 brightness-0 invert"
              unoptimized
            />
            <p className="text-sm text-white/50 mb-3 leading-relaxed">
              White Glove MVNO Enablement for African Brands
            </p>
            <p className="text-xs text-white/30">
              A proud member of Digital Solutions Group
            </p>
          </div>

          {/* Column 2: Proposal Sections */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/70 uppercase tracking-wide">
              Proposal Sections
            </h4>
            <ul className="space-y-2.5">
              {sectionLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/40 hover:text-white/80 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/70 uppercase tracking-wide">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/40 hover:text-white/80 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Metadata */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/70 uppercase tracking-wide">
              Proposal Details
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-white/30 text-xs">Client</p>
                <p className="text-white/60">GCT</p>
              </div>
              <div>
                <p className="text-white/30 text-xs">Prepared by</p>
                <p className="text-white/60">MVNE / Digital Solutions Group</p>
              </div>
              <div>
                <p className="text-white/30 text-xs">Date</p>
                <p className="text-white/60">March 2026</p>
              </div>
              <div>
                <p className="text-white/30 text-xs">Contact</p>
                <a href="mailto:edwardw@mvne.co.za" className="text-white/60 hover:text-white/80 transition-colors">
                  edwardw@mvne.co.za
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            &copy; 2026 Digital Solutions Group. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Confidential &mdash; For GCT Review Only
          </p>
        </div>
      </div>
    </footer>
  );
}
