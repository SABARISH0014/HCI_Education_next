import { MonitorSmartphone, Search, MousePointer2 } from "lucide-react"

export default function Slide02() {
  return (
    <div className="flex flex-col h-full">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-navy">What is Human-Computer Interaction?</h1>
        <div className="w-16 h-1 bg-teal mt-4"></div>
      </header>

      <div className="flex-grow flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-lg text-slate-700 leading-relaxed">
            Human-Computer Interaction (HCI) is a multidisciplinary field of study focusing on the design of computer technology and, in particular, the interaction between humans (the users) and computers.
          </p>
          
          <div className="bg-teal/5 border-l-4 border-teal p-6 rounded-r-xl">
            <h3 className="font-bold text-teal-900 mb-2">Core Objective</h3>
            <p className="text-slate-700">
              To create user interfaces that are highly usable, intuitive, and efficient, minimizing cognitive load and preventing user frustration.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 grid grid-cols-1 gap-4">
          <div className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-50 text-blue-600 p-3 rounded-lg h-fit"><MonitorSmartphone /></div>
            <div>
              <h4 className="font-bold text-navy mb-1">Design & Layout</h4>
              <p className="text-sm text-slate-600">How information is visually structured to guide the human eye.</p>
            </div>
          </div>
          
          <div className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-50 text-purple-600 p-3 rounded-lg h-fit"><MousePointer2 /></div>
            <div>
              <h4 className="font-bold text-navy mb-1">Interactive Elements</h4>
              <p className="text-sm text-slate-600">How buttons, forms, and navigation respond to human input.</p>
            </div>
          </div>
          
          <div className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-emerald-50 text-emerald-600 p-3 rounded-lg h-fit"><Search /></div>
            <div>
              <h4 className="font-bold text-navy mb-1">Evaluation</h4>
              <p className="text-sm text-slate-600">Testing systems with real users to measure usability and learnability.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
