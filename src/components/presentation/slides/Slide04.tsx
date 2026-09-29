import { ArrowRight } from "lucide-react"

export default function Slide04() {
  return (
    <div className="flex flex-col h-full bg-white">
      <header className="mb-10">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">Interaction, Evaluation & Improvements</h1>
      </header>

      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-widest">1. Student Journey</h2>
          <div className="flex items-center justify-between bg-slate-50 border border-slate-200 p-6">
            <div className="text-center"><span className="block font-black text-slate-900 text-xl">Auth</span><span className="text-xs text-slate-500">Validation</span></div>
            <ArrowRight className="text-slate-300" />
            <div className="text-center"><span className="block font-black text-slate-900 text-xl">Nav</span><span className="text-xs text-slate-500">Locating</span></div>
            <ArrowRight className="text-slate-300" />
            <div className="text-center"><span className="block font-black text-slate-900 text-xl">Info</span><span className="text-xs text-slate-500">Processing</span></div>
            <ArrowRight className="text-slate-300" />
            <div className="text-center"><span className="block font-black text-slate-900 text-xl">Task</span><span className="text-xs text-slate-500">Completion</span></div>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-widest">2. Evaluation Methods</h2>
          <div className="space-y-6 flex-grow">
            <div className="border-l-2 border-slate-900 pl-4">
              <h3 className="font-bold text-slate-900">Observational</h3>
              <p className="text-slate-600 text-sm">Watch students interact to spot hesitations and misclicks.</p>
            </div>
            <div className="border-l-2 border-slate-900 pl-4">
              <h3 className="font-bold text-slate-900">Heuristic</h3>
              <p className="text-slate-600 text-sm">Experts review interface against strict usability standards.</p>
            </div>
            <div className="border-l-2 border-slate-900 pl-4">
              <h3 className="font-bold text-slate-900">Surveys & Analytics</h3>
              <p className="text-slate-600 text-sm">Collect quantitative SUS data and analyze drop-off rates.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-widest">3. Proposed Improvements</h2>
          <div className="space-y-6 flex-grow bg-slate-900 text-white p-8">
            <div>
              <h3 className="font-bold text-white mb-1">Visual Hierarchy</h3>
              <p className="text-slate-400 text-sm">Use typography/spacing to guide eyes to critical dates.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">Contextual Help</h3>
              <p className="text-slate-400 text-sm">Replace error codes with plain-language microcopy.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">Action Dashboard</h3>
              <p className="text-slate-400 text-sm">Surface urgent tasks automatically upon login.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
