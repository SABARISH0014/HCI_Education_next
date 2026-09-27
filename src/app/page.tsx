"use client"

import Link from "next/link"
import { MonitorPlay, CheckSquare, Presentation, BookOpen, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="w-full min-h-screen font-sans text-slate-100">
      {/* Pristine Hero Section */}
      <section className="w-full pt-32 pb-24 px-4 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
            Human-Computer <br className="hidden md:block"/>
            Interaction in Education
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
            Understanding how human-centred design improves educational technology through interactive simulations and usability analysis.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium w-full max-w-2xl mx-auto">
            <div className="flex-1 w-full bg-slate-900/50 backdrop-blur-sm px-6 py-4 rounded-xl flex items-center justify-center gap-3 border border-slate-800 shadow-sm">
              <div className="text-left">
                <div className="text-white font-bold text-base">Muthu Sailappan A K</div>
                <div className="text-slate-400 text-xs tracking-wider uppercase">25MX332</div>
              </div>
            </div>
            <div className="flex-1 w-full bg-slate-900/50 backdrop-blur-sm px-6 py-4 rounded-xl flex items-center justify-center gap-3 border border-slate-800 shadow-sm">
              <div className="text-left">
                <div className="text-white font-bold text-base">Sabarish P</div>
                <div className="text-slate-400 text-xs tracking-wider uppercase">25MX343</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="w-full py-24 bg-slate-950/30 border-y border-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1 */}
            <Link href="/demo" className="group flex flex-col bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-teal-500/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-6 border border-teal-500/20">
                <MonitorPlay size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Live Demo</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                Experience an interactive demonstration of HCI principles using a simulated E-Campus login interface.
              </p>
              <div className="flex items-center text-teal-400 font-semibold group-hover:gap-2 transition-all mt-auto text-sm">
                <span>Start Simulation</span>
                <ArrowRight size={16} className="ml-1" />
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/quiz" className="group flex flex-col bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-blue-500/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 border border-blue-500/20">
                <CheckSquare size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">MCQ Quiz</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                Test your knowledge on human-computer interaction, usability, and educational technology design.
              </p>
              <div className="flex items-center text-blue-400 font-semibold group-hover:gap-2 transition-all mt-auto text-sm">
                <span>Test Knowledge</span>
                <ArrowRight size={16} className="ml-1" />
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/presentation" className="group flex flex-col bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-purple-500/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6 border border-purple-500/20">
                <Presentation size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Presentation</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                View the fully native interactive React presentation covering the theory and future possibilities of HCI.
              </p>
              <div className="flex items-center text-purple-400 font-semibold group-hover:gap-2 transition-all mt-auto text-sm">
                <span>View Slides</span>
                <ArrowRight size={16} className="ml-1" />
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/research" className="group flex flex-col bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-rose-500/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-6 border border-rose-500/20">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Research</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                Dive into verified 2024 academic research and scholarly references supporting our analysis.
              </p>
              <div className="flex items-center text-rose-400 font-semibold group-hover:gap-2 transition-all mt-auto text-sm">
                <span>Read Papers</span>
                <ArrowRight size={16} className="ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Project Explanation - Typography Driven */}
      <section className="w-full py-24 bg-transparent">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 tracking-tight">About This Project</h2>
          <div className="text-lg text-slate-300 leading-relaxed mb-10 text-left space-y-6">
            <p>
              This interactive platform was developed to supplement our presentation on Human-Computer Interaction in Education. 
              It demonstrates key HCI principles—such as <strong className="text-white">Visibility</strong>, <strong className="text-white">Feedback</strong>, and <strong className="text-white">Error Prevention</strong>—through a live, 
              interactive simulation of an educational student portal.
            </p>
            <p>
              By analyzing interfaces like the PSG Tech E-Campus system, we illustrate how user-centred design significantly 
              impacts student experience, accessibility, and learnability in educational technology.
            </p>
          </div>

          <Link 
            href="/demo" 
            className="inline-flex items-center justify-center bg-teal text-slate-950 px-8 py-4 rounded-xl font-bold transition-all hover:bg-teal-400 shadow-[0_0_20px_rgba(13,148,136,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <span className="flex items-center gap-2">
              Start Interactive Demo <ArrowRight size={18} />
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}
