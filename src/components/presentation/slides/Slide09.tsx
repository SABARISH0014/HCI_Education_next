import { Sparkles, Palette, Zap } from "lucide-react"

export default function Slide09() {
  return (
    <div className="flex flex-col h-full">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-navy">Potential HCI Improvements</h1>
        <div className="w-16 h-1 bg-teal mt-4"></div>
      </header>

      <div className="flex-grow flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
            <div className="mt-1"><Palette className="text-teal" /></div>
            <div>
              <h3 className="font-bold text-navy text-lg mb-1">Visual Hierarchy Redesign</h3>
              <p className="text-slate-600 text-sm">Use distinct typography and spacing to guide the eye toward critical information (e.g., upcoming exam dates) rather than treating all text with equal weight.</p>
            </div>
          </div>
          
          <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
            <div className="mt-1"><Sparkles className="text-purple-600" /></div>
            <div>
              <h3 className="font-bold text-navy text-lg mb-1">Contextual Help & Microcopy</h3>
              <p className="text-slate-600 text-sm">Instead of complex error codes, use friendly microcopy that tells the student exactly how to fix the issue in plain language.</p>
            </div>
          </div>
          
          <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
            <div className="mt-1"><Zap className="text-amber-500" /></div>
            <div>
              <h3 className="font-bold text-navy text-lg mb-1">Action-Oriented Dashboard</h3>
              <p className="text-slate-600 text-sm">Transform the static dashboard into a dynamic one that brings urgent tasks (fees due, assignments pending) to the surface automatically.</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-6 bg-slate-800 rounded-2xl text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal rounded-full blur-[50px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
          
          <h3 className="text-xl font-bold mb-6 text-teal-light">The "Don't Make Me Think" Philosophy</h3>
          
          <blockquote className="text-lg italic text-slate-300 border-l-4 border-teal pl-4 mb-6">
            "Every question a user has to ask themselves while looking at an interface (e.g., 'Where is the submit button?', 'Is this clickable?') adds to their cognitive load."
          </blockquote>
          
          <p className="text-slate-400 text-sm">
            Our proposed improvements aim to reduce these micro-frictions, creating a seamless flow from intention to action.
          </p>
        </div>
      </div>
    </div>
  )
}
