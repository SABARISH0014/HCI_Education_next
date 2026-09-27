"use client"

import Link from "next/link"
import { MonitorPlay, CheckSquare, Presentation, BookOpen, ArrowRight, Sparkles } from "lucide-react"
import { motion, Variants } from "framer-motion"

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  }

  return (
    <div className="flex flex-col items-center overflow-hidden">
      {/* Premium Hero Section */}
      <section className="w-full relative pt-24 pb-32 px-4 lg:px-8 flex flex-col items-center justify-center min-h-[85vh]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-teal-300/20 rounded-full blur-[100px] mix-blend-multiply animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-[35vw] h-[35vw] bg-blue-300/20 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] bg-purple-300/20 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-4000"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto max-w-5xl text-center relative z-10 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-panel text-navy font-semibold text-sm tracking-wide shadow-sm border border-white/50">
            <Sparkles size={16} className="text-teal-500" />
            <span>MCA • PSG College of Technology</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-navy font-[family-name:var(--font-outfit)]">
            Human-Computer <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
              Interaction in Education
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Understanding how human-centred design improves educational technology through interactive simulations and usability analysis.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium w-full max-w-2xl">
            <div className="flex-1 w-full glass-panel px-6 py-4 rounded-2xl flex items-center justify-center gap-3 border border-white/60 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center text-teal-800 font-bold">MS</div>
              <div className="text-left">
                <div className="text-navy font-bold text-base">Muthu Sailappan A K</div>
                <div className="text-slate-500 text-xs tracking-wider uppercase">25MX332</div>
              </div>
            </div>
            <div className="flex-1 w-full glass-panel px-6 py-4 rounded-2xl flex items-center justify-center gap-3 border border-white/60 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-800 font-bold">SP</div>
              <div className="text-left">
                <div className="text-navy font-bold text-base">Sabarish P</div>
                <div className="text-slate-500 text-xs tracking-wider uppercase">25MX343</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Features Grid */}
      <section className="container mx-auto max-w-6xl px-4 py-16 relative z-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="h-full">
            <Link href="/demo" className="group flex flex-col glass rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2 h-full border border-white">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 text-white flex items-center justify-center mb-8 shadow-lg shadow-teal-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <MonitorPlay size={32} />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4 font-[family-name:var(--font-outfit)] tracking-tight">Live Demo</h3>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                Experience an interactive demonstration of HCI principles using a simulated E-Campus login interface.
              </p>
              <div className="flex items-center text-teal-600 font-bold group-hover:gap-3 transition-all">
                <span>Start Simulation</span>
                <ArrowRight size={20} className="ml-2" />
              </div>
            </Link>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="h-full">
            <Link href="/quiz" className="group flex flex-col glass rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 h-full border border-white">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <CheckSquare size={32} />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4 font-[family-name:var(--font-outfit)] tracking-tight">MCQ Quiz</h3>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                Test your knowledge on human-computer interaction, usability, and educational technology design.
              </p>
              <div className="flex items-center text-blue-600 font-bold group-hover:gap-3 transition-all">
                <span>Test Knowledge</span>
                <ArrowRight size={20} className="ml-2" />
              </div>
            </Link>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemVariants} className="h-full">
            <Link href="/presentation" className="group flex flex-col glass rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 h-full border border-white">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 text-white flex items-center justify-center mb-8 shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <Presentation size={32} />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4 font-[family-name:var(--font-outfit)] tracking-tight">Presentation</h3>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                View the fully native interactive React presentation covering the theory and future possibilities of HCI.
              </p>
              <div className="flex items-center text-purple-600 font-bold group-hover:gap-3 transition-all">
                <span>View Slides</span>
                <ArrowRight size={20} className="ml-2" />
              </div>
            </Link>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={itemVariants} className="h-full">
            <Link href="/research" className="group flex flex-col glass rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-500/20 hover:-translate-y-2 h-full border border-white">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-400 to-rose-600 text-white flex items-center justify-center mb-8 shadow-lg shadow-rose-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4 font-[family-name:var(--font-outfit)] tracking-tight">Research</h3>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                Dive into verified 2024 academic research and scholarly references supporting our analysis.
              </p>
              <div className="flex items-center text-rose-600 font-bold group-hover:gap-3 transition-all">
                <span>Read Papers</span>
                <ArrowRight size={20} className="ml-2" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Project Explanation - Glass Panel */}
      <section className="container mx-auto max-w-4xl px-4 py-20 mb-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-[2.5rem] p-10 md:p-16 text-center border border-white/60 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500"></div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-8 font-[family-name:var(--font-outfit)] tracking-tight">About This Project</h2>
          <p className="text-lg md:text-xl text-slate-600 mb-6 leading-relaxed">
            This interactive platform was developed to supplement our presentation on Human-Computer Interaction in Education. 
            It demonstrates key HCI principles—such as <strong className="text-teal-700">Visibility</strong>, <strong className="text-teal-700">Feedback</strong>, and <strong className="text-teal-700">Error Prevention</strong>—through a live, 
            interactive simulation of an educational student portal.
          </p>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12">
            By analyzing interfaces like the PSG Tech E-Campus system, we illustrate how user-centred design significantly 
            impacts student experience, accessibility, and learnability in educational technology.
          </p>
          <Link 
            href="/demo" 
            className="group inline-flex items-center justify-center bg-navy text-white px-8 py-5 rounded-2xl text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:shadow-navy/30 hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
            <span className="relative z-10 flex items-center gap-2">
              Start the Interactive Demo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
