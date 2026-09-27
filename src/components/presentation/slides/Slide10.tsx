import { Bot, LineChart, BrainCircuit } from "lucide-react"

export default function Slide10() {
  return (
    <div className="flex flex-col h-full">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-navy">Future E-Campus: AI + Human-Centred Interaction</h1>
        <div className="w-16 h-1 bg-teal mt-4"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow content-start">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 bg-blue-50 w-24 h-24 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <Bot size={32} className="text-blue-600 mb-6 relative z-10" />
          <h3 className="text-xl font-bold text-navy mb-4 relative z-10">Conversational UI</h3>
          <p className="text-slate-600 relative z-10 leading-relaxed">
            Moving beyond traditional click-navigation. Students could ask an integrated AI assistant, "What is my attendance for Cloud Computing?" and receive immediate, natural-language answers.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 bg-purple-50 w-24 h-24 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <LineChart size={32} className="text-purple-600 mb-6 relative z-10" />
          <h3 className="text-xl font-bold text-navy mb-4 relative z-10">Predictive Assistance</h3>
          <p className="text-slate-600 relative z-10 leading-relaxed">
            The interface anticipates student needs based on historical data. If it's exam season, the portal automatically surfaces hall tickets and study material links on the main dashboard.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 bg-emerald-50 w-24 h-24 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <BrainCircuit size={32} className="text-emerald-600 mb-6 relative z-10" />
          <h3 className="text-xl font-bold text-navy mb-4 relative z-10">Adaptive Interfaces</h3>
          <p className="text-slate-600 relative z-10 leading-relaxed">
            The layout dynamically changes based on the user's proficiency. New students see guided, simplified views, while seniors see dense, high-information-density layouts.
          </p>
        </div>
      </div>
    </div>
  )
}
