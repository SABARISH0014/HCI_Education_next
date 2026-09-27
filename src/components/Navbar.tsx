"use client"

import { useState } from "react"
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

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-sm transition-all">
      <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group relative z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-teal flex items-center justify-center text-white font-bold text-lg shadow-sm">
            HCI
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 hidden sm:inline-block leading-none tracking-tight text-lg">Education</span>
            <span className="text-[10px] text-teal-400 hidden sm:inline-block font-medium uppercase tracking-widest mt-0.5">Interactive Demo</span>
          </div>
        </Link>

        {/* Desktop Nav - Clean, Typographic Approach */}
        <nav className="hidden md:flex items-center gap-6 relative z-10">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-md",
                  isActive ? "text-white font-bold" : "text-slate-400 hover:text-slate-200"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-400"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center z-10">
          <Link
            href="/demo"
            className="flex items-center gap-2 bg-teal hover:bg-teal-400 text-slate-950 px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <MonitorPlay size={16} />
            <span>Start Live Demo</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 shadow-xl"
          >
            <nav className="flex flex-col px-4 py-6 gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-5 py-3.5 rounded-xl text-base font-semibold transition-colors",
                      isActive 
                        ? "bg-slate-800 text-white" 
                        : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link
                href="/demo"
                onClick={() => setIsOpen(false)}
                className="mt-6 flex items-center justify-center gap-2 bg-teal text-slate-950 px-4 py-4 rounded-xl text-base font-bold shadow-sm"
              >
                <MonitorPlay size={20} />
                <span>Start Live Demo</span>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
