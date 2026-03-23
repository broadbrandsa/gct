'use client'

import { useState, useEffect, useRef, useCallback, type ReactNode } from 'react'
import Image from 'next/image'

const LOCK_CODE = '1004'
const STORAGE_KEY = 'gct_proposal_v1_unlocked'

export default function LockScreen({ children }: { children: ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)
  const [shaking, setShaking] = useState(false)
  const [mounted, setMounted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY) === 'true') {
      setIsUnlocked(true)
    }
  }, [])

  const handleUnlock = useCallback(() => {
    setIsExiting(true)
    localStorage.setItem(STORAGE_KEY, 'true')
    setTimeout(() => setIsUnlocked(true), 900)
  }, [])

  const handleCodeChange = useCallback((value: string) => {
    if (value.length > 4) return
    setError(false)
    setCode(value)

    if (value.length === 4) {
      if (value === LOCK_CODE) {
        handleUnlock()
      } else {
        setError(true)
        setShaking(true)
        setTimeout(() => {
          setShaking(false)
          setCode('')
        }, 700)
      }
    }
  }, [handleUnlock])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Backspace') {
      setCode(prev => prev.slice(0, -1))
      setError(false)
    }
  }, [])

  const focusInput = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as unknown as Record<string, unknown>).relockProposal = () => {
        localStorage.removeItem(STORAGE_KEY)
        setIsUnlocked(false)
        setIsExiting(false)
        setCode('')
        setError(false)
      }
    }
  }, [])

  if (!mounted) return null
  if (isUnlocked && !isExiting) return <>{children}</>

  return (
    <>
      {isUnlocked && children}
      <div
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-between overflow-hidden ${isExiting ? 'lock-exiting' : 'lock-entering'}`}
        onClick={focusInput}
        style={{ background: '#0a0f1a' }}
      >
        {/* Background layers */}
        <div className="absolute inset-0">
          <Image
            src="/images/rasheed-kemy-oqY09oVTa3k-unsplash.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10,15,26,0.6) 60%, rgba(10,15,26,0.95) 100%)'
          }} />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to top, rgba(10,15,26,1) 0%, transparent 40%)'
          }} />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(3,37,114,0.25) 0%, transparent 60%)'
          }} />
        </div>

        {/* Top section */}
        <div className="relative z-10 flex flex-col items-center pt-12 sm:pt-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0a4bcc] pulse-dot" />
            <span className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-white/60">
              Confidential · For GCT Review
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Image src="/logos/MVNE.png" alt="MVNE" width={100} height={36} className="h-7 w-auto brightness-0 invert opacity-80" />
            <div className="w-px h-6 bg-white/20" />
            <div className="text-white/80 text-lg font-bold tracking-wide">GCT</div>
          </div>
        </div>

        {/* Centre headline */}
        <div className="relative z-10 flex flex-col items-center px-6 -mt-8">
          <h1 className="text-center leading-[0.92]">
            <span className="block text-[clamp(2.5rem,8vw,5.5rem)] font-black text-white/90 tracking-tight">
              ENTER THE 4
            </span>
            <span className="block text-[clamp(2.5rem,8vw,5.5rem)] font-black text-white/90 tracking-tight">
              DIGIT CODE
            </span>
            <span className="block text-[clamp(2.5rem,8vw,5.5rem)] font-black text-[#4a8eff] tracking-tight mt-1">
              TO VIEW
            </span>
            <span className="block text-[clamp(2.5rem,8vw,5.5rem)] font-black text-white/30 tracking-tight">
              THE PROPOSAL.
            </span>
          </h1>
        </div>

        {/* Bottom code input */}
        <div className="relative z-10 flex flex-col items-center pb-16 sm:pb-20">
          <input
            ref={inputRef}
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            value={code}
            onChange={e => handleCodeChange(e.target.value.replace(/\D/g, ''))}
            onKeyDown={handleKeyDown}
            className="absolute opacity-0 w-0 h-0"
            autoFocus
            aria-label="Enter 4-digit access code"
          />

          <div className={`flex gap-3 sm:gap-4 mb-6 ${shaking ? 'lock-shake' : ''}`}>
            {[0, 1, 2, 3].map(i => {
              const isFilled = i < code.length
              const isCurrent = i === code.length
              const isError = error

              return (
                <div
                  key={i}
                  className="flex items-center justify-center rounded-2xl border-2 transition-all duration-200"
                  style={{
                    width: 'clamp(4rem, 14vw, 6rem)',
                    height: 'clamp(5rem, 18vw, 7.5rem)',
                    background: isError
                      ? 'rgba(239,68,68,0.1)'
                      : isFilled
                        ? 'rgba(74,138,255,0.12)'
                        : isCurrent
                          ? 'rgba(74,138,255,0.06)'
                          : 'rgba(255,255,255,0.03)',
                    borderColor: isError
                      ? 'rgba(239,68,68,0.5)'
                      : isFilled
                        ? 'rgba(74,138,255,0.4)'
                        : isCurrent
                          ? 'rgba(74,138,255,0.25)'
                          : 'rgba(255,255,255,0.08)',
                    boxShadow: isFilled && !isError
                      ? '0 0 30px rgba(74,138,255,0.12)'
                      : 'none',
                  }}
                >
                  {isFilled && (
                    <span className="text-3xl sm:text-4xl font-bold text-white/90">
                      {code[i]}
                    </span>
                  )}
                  {isCurrent && !isFilled && (
                    <span className="w-0.5 h-8 bg-[#4a8eff]/60 rounded-full animate-pulse" />
                  )}
                </div>
              )
            })}
          </div>

          {error && (
            <p className="text-red-400/80 text-sm font-medium tracking-wide">
              Incorrect code — try again
            </p>
          )}
          {!error && (
            <p className="text-white/25 text-xs tracking-widest uppercase">
              Enter access code
            </p>
          )}
        </div>
      </div>
    </>
  )
}
