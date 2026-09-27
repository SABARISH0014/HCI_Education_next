import { Smartphone, Headset, Mic } from "lucide-react"

export default function Slide11() {
  return (
    <div className="flex flex-col h-full">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-navy">Future HCI: Beyond the Screen</h1>
        <div className="w-16 h-1 bg-teal mt-4"></div>
      </header>

      <div className="flex-grow flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2 p-8 bg-slate-50 border border-slate-200 rounded-2xl relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal/10 rounded-full blur-[40px] translate-x-1/2 -translate-y-1/2"></div>
          
          <h3 className="text-2xl font-bold text-navy mb-6 border-b pb-4">The Next Frontier</h3>
          <p className="text-slate-700 leading-relaxed mb-6 text-lg">
            As educational technology evolves, the "Computer" in HCI is becoming less visible. The future of student interaction moves beyond flat screens and keyboards.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-slate-700">
              <div className="w-2 h-2 bg-teal rounded-full"></div> Seamless multi-device ecosystems
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <div className="w-2 h-2 bg-teal rounded-full"></div> Spatially-aware learning environments
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <div className="w-2 h-2 bg-teal rounded-full"></div> Ubiquitous computing in classrooms
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl shadow-sm items-center">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><Headset size={28} /></div>
            <div>
              <h4 className="font-bold text-navy">Virtual & Augmented Reality</h4>
              <p className="text-sm text-slate-600">Immersive interfaces for complex engineering or medical visualizations.</p>
            </div>
          </div>
          
          <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl shadow-sm items-center">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-lg"><Mic size={28} /></div>
            <div>
              <h4 className="font-bold text-navy">Voice User Interfaces (VUI)</h4>
              <p className="text-sm text-slate-600">Hands-free interaction for queries in labs or workshops.</p>
            </div>
          </div>
          
          <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl shadow-sm items-center">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg"><Smartphone size={28} /></div>
            <div>
              <h4 className="font-bold text-navy">Mobile-First Microlearning</h4>
              <p className="text-sm text-slate-600">Bite-sized, highly accessible interfaces designed for learning on the go.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
