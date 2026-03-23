export default function Hero() {
  const stats = [
    { value: "7", label: "Solutions Offered" },
    { value: "End-to-End", label: "Digital Transformation" },
    { value: "DBOT", label: "Partnership Model" },
    { value: "Africa-First", label: "Pan-African Delivery" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(160deg, #032572 0%, #021d5a 60%, #010e2e 100%)",
        }}
      />
      <div className="absolute inset-0 hero-pattern" />

      {/* Decorative SVG lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <line x1="5%" y1="0" x2="25%" y2="100%" stroke="white" strokeWidth="1" />
        <line x1="75%" y1="0" x2="95%" y2="100%" stroke="white" strokeWidth="1" />
        <line x1="0" y1="25%" x2="100%" y2="35%" stroke="white" strokeWidth="0.5" />
        <line x1="0" y1="65%" x2="100%" y2="75%" stroke="white" strokeWidth="0.5" />
        <circle cx="20%" cy="20%" r="80" stroke="white" fill="none" strokeWidth="0.5" opacity="0.5" />
        <circle cx="80%" cy="70%" r="120" stroke="white" fill="none" strokeWidth="0.5" opacity="0.3" />
      </svg>

      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, rgba(59,130,246,0.15) 0%, transparent 50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-8 flex-1 flex flex-col justify-center">
        {/* Confidential badge */}
        <div className="anim-fade-up mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 pulse-dot" />
            <span className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-white/70">
              Confidential &mdash; For GCT Review
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-4 anim-fade-up delay-100">
          Integrated Digital
          <br />
          <span className="text-blue-400">Solutions</span> for GCT
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl font-light text-white/60 mb-2 anim-fade-up delay-200">
          Combined Services Proposal
        </p>

        {/* Prepared by */}
        <p className="text-sm text-white/40 mb-8 anim-fade-up delay-200">
          Prepared by MVNE &middot; Digital Solutions Group &middot; March 2026
        </p>

        {/* Intro statement */}
        <div className="accent-border-left max-w-3xl mb-10 anim-fade-up delay-300" style={{ borderColor: "rgba(96,165,250,0.5)" }}>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            A comprehensive suite of digital solutions spanning MVNO enablement, customer experience, travel connectivity, cybersecurity, data intelligence, and marketing automation &mdash; designed to accelerate GCT&apos;s digital transformation.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 mb-16 anim-fade-up delay-400">
          <a
            href="#overview"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#032572] font-semibold text-sm hover:bg-white/90 transition-colors"
          >
            Explore Proposal
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#commercial"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
          >
            View Commercial
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/10 bg-white/[0.03] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className={`anim-fade-up delay-${(i + 5) * 100}`}>
              <p className="text-xl sm:text-2xl font-black text-white">{stat.value}</p>
              <p className="text-xs sm:text-sm text-white/50 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
