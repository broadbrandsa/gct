'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Commercial', href: '#commercial' },
  { label: 'Next Steps', href: '#next-steps' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0)

      const sections = ['next-steps', 'commercial', 'solutions', 'overview']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleRelock = useCallback(() => {
    if (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).relockProposal) {
      (window as unknown as { relockProposal: () => void }).relockProposal()
    }
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)]' : 'bg-transparent'
    }`}>
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#032572] to-[#0a4bcc] transition-[width] duration-100 ease-linear"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 shrink-0">
            <Image src="/logos/MVNE.png" alt="MVNE" width={90} height={32}
              className={`h-6 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
            />
            <div className={`w-px h-5 ${scrolled ? 'bg-gray-300' : 'bg-white/30'}`} />
            <span className={`text-sm font-bold tracking-wide ${scrolled ? 'text-gray-800' : 'text-white/90'}`}>GCT</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                className={`px-3 py-1.5 rounded-lg text-[0.8rem] font-medium transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? scrolled ? 'text-[#032572] bg-[#e8eef9]' : 'text-white bg-white/10'
                    : scrolled ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
                }`}
              >{link.label}</a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a href="#downloads" className={`px-3 py-1.5 rounded-lg text-[0.8rem] font-medium transition-all duration-200 ${
              scrolled ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
            }`}>Documents</a>
            <a href="mailto:edwardw@mvne.co.za"
              className="px-4 py-1.5 rounded-lg text-[0.8rem] font-semibold bg-[#032572] text-white hover:bg-[#021d5a] transition-colors duration-200"
            >Contact Us</a>
            <button onClick={handleRelock}
              className={`px-3 py-1.5 rounded-lg text-[0.75rem] font-medium transition-all duration-200 ${
                scrolled ? 'text-gray-400 hover:text-gray-600 hover:bg-gray-50' : 'text-white/30 hover:text-white/60 hover:bg-white/[0.06]'
              }`}
            >Hide</button>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <div className="space-y-1.5">
              <span className={`block w-5 h-0.5 rounded transition-all duration-300 ${
                mobileOpen ? `rotate-45 translate-y-[4px] ${scrolled ? 'bg-gray-800' : 'bg-white'}` : scrolled ? 'bg-gray-800' : 'bg-white'
              }`} />
              <span className={`block h-0.5 rounded transition-all duration-300 ${
                mobileOpen ? 'w-0 opacity-0' : `w-5 ${scrolled ? 'bg-gray-800' : 'bg-white'}`
              }`} />
              <span className={`block w-5 h-0.5 rounded transition-all duration-300 ${
                mobileOpen ? `-rotate-45 -translate-y-[4px] ${scrolled ? 'bg-gray-800' : 'bg-white'}` : scrolled ? 'bg-gray-800' : 'bg-white'
              }`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className={`px-4 pb-4 space-y-1 ${scrolled ? 'bg-white' : 'bg-[#0a0f1a]/95 backdrop-blur-md'}`}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                scrolled ? 'text-gray-700 hover:bg-gray-50' : 'text-white/80 hover:bg-white/[0.06]'
              }`}
            >{link.label}</a>
          ))}
          <a href="mailto:edwardw@mvne.co.za"
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#032572] text-center mt-2"
          >Contact Us</a>
        </div>
      </div>
    </nav>
  )
}
