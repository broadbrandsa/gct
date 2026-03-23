"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const LOCK_CODE = "1004";
const STORAGE_KEY = "gct_proposal_v1_unlocked";

export default function LockScreen({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [exiting, setExiting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setUnlocked(stored === "true");
  }, []);

  const handleUnlock = useCallback(() => {
    setExiting(true);
    setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
    }, 900);
  }, []);

  const handleInput = useCallback(
    (value: string) => {
      const digits = value.replace(/\D/g, "").slice(0, 4);
      setCode(digits);
      setError(false);

      if (digits.length === 4) {
        if (digits === LOCK_CODE) {
          handleUnlock();
        } else {
          setError(true);
          setTimeout(() => {
            setCode("");
            setError(false);
          }, 1500);
        }
      }
    },
    [handleUnlock]
  );

  const handleLock = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUnlocked(false);
    setExiting(false);
    setCode("");
  }, []);

  // Expose lock function globally for nav "Hide" button
  useEffect(() => {
    (window as unknown as Record<string, unknown>).__lockProposal = handleLock;
    return () => {
      delete (window as unknown as Record<string, unknown>).__lockProposal;
    };
  }, [handleLock]);

  if (unlocked === null) {
    return (
      <div className="fixed inset-0 bg-[#0a0f1a] z-[9999] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
      </div>
    );
  }

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="hidden">{children}</div>
      <div
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-between overflow-hidden ${exiting ? "lock-exiting" : "lock-overlay"}`}
        onClick={() => inputRef.current?.focus()}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[#0a0f1a]" />
        <div
          className="absolute inset-0 opacity-45"
          style={{
            background:
              "linear-gradient(160deg, #032572 0%, #021d5a 40%, #010e2e 100%)",
          }}
        />
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top center, rgba(3,37,114,0.4) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background:
              "linear-gradient(to top, #0a0f1a 0%, transparent 100%)",
          }}
        />

        {/* Decorative lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="0" x2="30%" y2="100%" stroke="white" strokeWidth="1" />
          <line x1="70%" y1="0" x2="90%" y2="100%" stroke="white" strokeWidth="1" />
          <line x1="0" y1="30%" x2="100%" y2="40%" stroke="white" strokeWidth="0.5" />
        </svg>

        {/* Top section */}
        <div className="relative z-10 flex flex-col items-center pt-12 sm:pt-16 gap-6 anim-fade-up">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 pulse-dot" />
            <span className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-white/70">
              Confidential &middot; For GCT Review
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <Image
              src="/logos/mvne.png"
              alt="MVNE"
              width={100}
              height={30}
              className="h-6 sm:h-8 w-auto brightness-0 invert opacity-80"
              unoptimized
            />
            <div className="w-px h-6 bg-white/20" />
            <Image
              src="/logos/gct-logo.svg"
              alt="GCT"
              width={60}
              height={24}
              className="h-5 sm:h-7 w-auto brightness-0 invert opacity-80"
              unoptimized
            />
          </div>
        </div>

        {/* Centre text */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 anim-fade-up delay-200">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white">
            ENTER THE 4<br />
            DIGIT CODE<br />
            <span className="text-blue-400">TO VIEW</span>
            <br />
            <span className="text-white/40">THE PROPOSAL.</span>
          </h1>
        </div>

        {/* Bottom: code input */}
        <div className="relative z-10 flex flex-col items-center pb-16 sm:pb-24 gap-6 anim-fade-up delay-400">
          <div className={`flex gap-3 sm:gap-4 ${error ? "lock-shake" : ""}`}>
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-14 h-16 sm:w-16 sm:h-20 rounded-lg flex items-center justify-center text-2xl sm:text-3xl font-bold transition-all duration-200 ${
                  error
                    ? "border-2 border-red-500 bg-red-500/10 text-red-400"
                    : code[i]
                      ? "border-2 border-blue-400 bg-blue-400/10 text-white"
                      : i === code.length
                        ? "border-2 border-white/40 bg-white/[0.06] text-white"
                        : "border-2 border-white/15 bg-white/[0.03] text-white/30"
                }`}
              >
                {code[i] ? "\u2022" : ""}
              </div>
            ))}
          </div>

          <input
            ref={inputRef}
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={4}
            value={code}
            onChange={(e) => handleInput(e.target.value)}
            className="absolute opacity-0 w-0 h-0"
            autoFocus
            aria-label="Enter 4-digit code"
          />

          {error && (
            <p className="text-red-400 text-sm font-medium anim-fade-in">
              Incorrect code &mdash; try again
            </p>
          )}

          {!error && (
            <p className="text-white/30 text-xs tracking-wide">
              Tap to enter code
            </p>
          )}
        </div>
      </div>
    </>
  );
}
