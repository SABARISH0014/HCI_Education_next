import { Sparkles, Palette, Zap } from "lucide-react"

export default function Slide07() {
  return (
    <div className="flex flex-col h-full bg-white">
      <header className="mb-12">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">Potential HCI Improvements</h1>
      </header>

      <div className="flex-grow flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-10">
          <div className="flex gap-6 items-start">
            <Palette className="text-slate-900 shrink-0" size={32} />
            <div>
              <h3 className="font-bold text-slate-900 text-2xl mb-2">Visual Hierarchy Redesign</h3>
              <p className="text-slate-600">Use distinct typography and spacing to guide the eye toward critical information (e.g., upcoming exam dates) rather than treating all text with equal weight.</p>
            </div>
          </div>
          
          <div className="flex gap-6 items-start">
            <Sparkles className="text-slate-900 shrink-0" size={32} />
            <div>
              <h3 className="font-bold text-slate-900 text-2xl mb-2">Contextual Help & Microcopy</h3>
              <p className="text-slate-600">Instead of complex error codes, use friendly microcopy that tells the student exactly how to fix the issue in plain language.</p>
            </div>
          </div>
          
          <div className="flex gap-6 items-start">
            <Zap className="text-slate-900 shrink-0" size={32} />
            <div>
              <h3 className="font-bold text-slate-900 text-2xl mb-2">Action-Oriented Dashboard</h3>
              <p className="text-slate-600">Transform the static dashboard into a dynamic one that brings urgent tasks (fees due, assignments pending) to the surface automatically.</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-12 bg-slate-900 text-white min-h-[400px] flex flex-col justify-center border-l-8 border-slate-300">
          <h3 className="text-sm font-bold tracking-widest uppercase mb-8 text-slate-400">The "Don't Make Me Think" Philosophy</h3>
          
          <blockquote className="text-3xl font-bold leading-tight mb-8">
            "Every question a user has to ask themselves while looking at an interface (e.g., 'Where is the submit button?', 'Is this clickable?') adds to their cognitive load."
          </blockquote>
          
          <p className="text-slate-400 text-lg">
            Our proposed improvements aim to reduce these micro-frictions, creating a seamless flow from intention to action.
          </p>
        </div>
      </div>
    </div>
  )
}
