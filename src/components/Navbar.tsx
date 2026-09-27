"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, MonitorPlay } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/demo", label: "Live Demo" },
  { href: "/quiz", label: "MCQ Quiz" },
  { href: "/presentation", label: "Presentation" },
  { href: "/research", label: "Research & References" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  // HCI: Feedback & Visibility - Navbar state changes on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled ? "glass border-b border-white/20 py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group relative z-10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-teal-500/30 group-hover:shadow-teal-500/50 group-hover:scale-105 transition-all duration-300">
            HCI
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-navy hidden sm:inline-block leading-none tracking-tight font-[family-name:var(--font-outfit)] text-lg group-hover:text-teal-600 transition-colors">Education</span>
            <span className="text-[10px] text-slate-500 hidden sm:inline-block font-medium uppercase tracking-widest mt-0.5">Interactive Demo</span>
          </div>
        </Link>

        {/* Desktop Nav - HCI: Consistency & Clear Feedback (Active State) */}
        <nav className="hidden md:flex items-center gap-1 relative z-10 bg-white/40 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/60 shadow-sm">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  isActive ? "text-navy" : "text-slate-600 hover:text-navy hover:bg-white/50"
                )}
              >
                {isActive && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white rounded-full shadow-sm border border-slate-100 -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center z-10">
          <Link
            href="/demo"
            className="group flex items-center gap-2 bg-navy text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-navy-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-400/20 to-teal-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
            <MonitorPlay size={16} className="group-hover:animate-pulse" />
            <span>Start Live Demo</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-navy hover:bg-slate-100/50 rounded-lg transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-teal"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav - HCI: Visibility & Learnability */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden absolute top-full left-0 right-0 glass border-b border-white/20 shadow-xl"
          >
            <nav className="flex flex-col px-4 py-6 gap-2">
              {NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    key={link.href}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-5 py-3.5 rounded-xl text-base font-semibold transition-all",
                        isActive 
                          ? "bg-gradient-to-r from-teal-500/10 to-transparent text-teal-700 border-l-4 border-teal-500" 
                          : "text-slate-600 hover:bg-slate-50 hover:text-navy border-l-4 border-transparent"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/demo"
                  onClick={() => setIsOpen(false)}
                  className="mt-6 flex items-center justify-center gap-2 bg-navy text-white px-4 py-4 rounded-xl text-base font-bold shadow-lg shadow-navy/20"
                >
                  <MonitorPlay size={20} />
                  <span>Start Live Demo</span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
