const steps = [
  {
    num: 1,
    title: "Approve Engagement",
    description: "Review and approve the combined proposal to initiate engagement.",
    urgent: true,
  },
  {
    num: 2,
    title: "Schedule Discovery Workshop",
    description: "Deep-dive into requirements for each solution area",
    urgent: false,
  },
  {
    num: 3,
    title: "Provide Baseline Data",
    description: "Subscriber data, infrastructure specs, operational KPIs",
    urgent: false,
  },
  {
    num: 4,
    title: "Kick-off Session",
    description: "Joint kick-off with all stakeholders to align on timelines and deliverables",
    urgent: false,
  },
];

export default function NextSteps() {
  return (
    <section id="next-steps" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 anim-fade-up">
          <p className="section-label mb-3">Moving Forward</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#212529] leading-tight">
            Next <span className="text-[#032572]">Steps</span>
          </h2>
        </div>

        {/* Sequential steps */}
        <div className="space-y-6 mb-16">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`bg-white border border-[#dee2e6] rounded-sm p-8 flex items-start gap-6 card-lift anim-fade-up delay-${(i + 1) * 100}`}
            >
              <span className={`w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold shrink-0 ${
                step.urgent ? "bg-[#032572] text-white" : "bg-[#e8eef9] text-[#032572]"
              }`}>
                {step.num}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-[#212529]">{step.title}</h3>
                  {step.urgent && (
                    <span className="text-[10px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200">
                      Urgent
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#6c757d]">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute left-[3.25rem] bottom-0 translate-y-full w-px h-6 bg-[#dee2e6]" />
              )}
            </div>
          ))}
        </div>

        {/* Decision deadline */}
        <div className="bg-[#032572] rounded-sm p-8 sm:p-12 text-center anim-fade-up delay-500">
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
            &ldquo;We look forward to discussing this proposal at Q&amp;A on Tuesday. Please direct any questions to{" "}
            <a href="mailto:edwardw@mvne.co.za" className="text-blue-300 underline underline-offset-2">
              edwardw@mvne.co.za
            </a>
            &rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
