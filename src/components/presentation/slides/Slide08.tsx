import { Bot, LineChart, BrainCircuit, Headset, Mic, Smartphone } from "lucide-react"

export default function Slide08() {
  return (
    <div className="flex flex-col h-full bg-white">
      <header className="mb-10">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">Future E-Campus & HCI</h1>
        <p className="text-xl text-slate-500 mt-4">AI Integration & Beyond the Screen</p>
      </header>

      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 overflow-y-auto pr-4">
        {/* AI Column */}
        <div className="space-y-8">
          <h2 className="text-xl font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-4">AI-Driven Interaction</h2>
          
          <div className="flex gap-4">
            <Bot className="text-slate-900 shrink-0" size={28} />
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Conversational UI</h3>
              <p className="text-slate-600 text-sm">Moving beyond traditional click-navigation. Students could ask an integrated AI assistant, "What is my attendance for Cloud Computing?" and receive immediate, natural-language answers.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <LineChart className="text-slate-900 shrink-0" size={28} />
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Predictive Assistance</h3>
              <p className="text-slate-600 text-sm">The interface anticipates student needs based on historical data. If it's exam season, the portal automatically surfaces hall tickets and study material links on the main dashboard.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <BrainCircuit className="text-slate-900 shrink-0" size={28} />
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Adaptive Interfaces</h3>
              <p className="text-slate-600 text-sm">The layout dynamically changes based on the user's proficiency. New students see guided, simplified views, while seniors see dense, high-information-density layouts.</p>
            </div>
          </div>
        </div>

        {/* Hardware Column */}
        <div className="space-y-8">
          <h2 className="text-xl font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-4">The Next Frontier</h2>
          <p className="text-slate-600 text-sm italic -mt-4 mb-6">As educational technology evolves, the "Computer" in HCI is becoming less visible. The future of student interaction moves beyond flat screens and keyboards.</p>
          
          <div className="flex gap-4">
            <Headset className="text-slate-900 shrink-0" size={28} />
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Virtual & Augmented Reality</h3>
              <p className="text-slate-600 text-sm">Immersive interfaces for complex engineering or medical visualizations, enabling spatially-aware learning environments.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Mic className="text-slate-900 shrink-0" size={28} />
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Voice User Interfaces (VUI)</h3>
              <p className="text-slate-600 text-sm">Hands-free interaction for queries in labs or workshops, bringing ubiquitous computing into classrooms.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Smartphone className="text-slate-900 shrink-0" size={28} />
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Mobile-First Microlearning</h3>
              <p className="text-slate-600 text-sm">Bite-sized, highly accessible interfaces designed for learning on the go through seamless multi-device ecosystems.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
