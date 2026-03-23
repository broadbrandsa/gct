"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Solutions", href: "#solutions" },
  { label: "Commercial", href: "#commercial" },
  { label: "Next Steps", href: "#next-steps" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLock = () => {
    const fn = (window as unknown as Record<string, unknown>).__lockProposal;
    if (typeof fn === "function") (fn as () => void)();
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-[#dee2e6]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: logos */}
        <div className="flex items-center gap-3">
          <Image
            src={scrolled ? "/logos/mvne.png" : "/logos/mvne.png"}
            alt="MVNE"
            width={80}
            height={24}
            className={`h-5 w-auto ${scrolled ? "" : "brightness-0 invert"}`}
            unoptimized
          />
          <div className={`w-px h-5 ${scrolled ? "bg-[#dee2e6]" : "bg-white/30"}`} />
          <Image
            src={scrolled ? "/logos/gct-logo.svg" : "/logos/gct-logo-white.svg"}
            alt="GCT"
            width={50}
            height={20}
            className="h-4 w-auto"
            unoptimized
          />
        </div>

        {/* Centre: nav links (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-[#6c757d] hover:text-[#032572]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:edwardw@mvne.co.za"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#032572] text-white text-sm font-semibold hover:bg-[#021d5a] transition-colors"
          >
            Contact Us
          </a>
          <button
            onClick={handleLock}
            className={`text-xs font-medium px-3 py-1.5 rounded transition-colors ${
              scrolled
                ? "text-[#6c757d] hover:text-[#032572] hover:bg-[#e8eef9]"
                : "text-white/40 hover:text-white/70 hover:bg-white/10"
            }`}
          >
            Hide
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 rounded transition-all ${scrolled ? "bg-[#212529]" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-5 h-0.5 rounded transition-all ${scrolled ? "bg-[#212529]" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-0.5 rounded transition-all ${scrolled ? "bg-[#212529]" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#dee2e6] shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-[#212529] py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:edwardw@mvne.co.za"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#032572] text-white text-sm font-semibold mt-2"
            >
              Contact Us
            </a>
            <button
              onClick={() => { handleLock(); setMobileOpen(false); }}
              className="text-xs text-[#6c757d] py-2"
            >
              Hide Proposal
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
