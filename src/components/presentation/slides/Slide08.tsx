import { Users, FileLineChart, ClipboardList } from "lucide-react"

export default function Slide08() {
  return (
    <div className="flex flex-col h-full">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-navy">How Can We Evaluate the Interface?</h1>
        <div className="w-16 h-1 bg-teal mt-4"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow content-start">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-teal/10 text-teal rounded-xl flex items-center justify-center mb-6">
            <Users size={28} />
          </div>
          <h3 className="text-xl font-bold text-navy mb-4">1. Observational Studies</h3>
          <p className="text-slate-600 flex-grow leading-relaxed">
            Watch students interact with the portal in a controlled environment. Note where they hesitate, misclick, or express frustration while trying to complete common tasks.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
            <ClipboardList size={28} />
          </div>
          <h3 className="text-xl font-bold text-navy mb-4">2. Heuristic Evaluation</h3>
          <p className="text-slate-600 flex-grow leading-relaxed">
            HCI experts review the E-Campus interface against established design principles (like Nielsen's 10 Usability Heuristics) to identify violations of UI standards.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
            <FileLineChart size={28} />
          </div>
          <h3 className="text-xl font-bold text-navy mb-4">3. Surveys & Analytics</h3>
          <p className="text-slate-600 flex-grow leading-relaxed">
            Collect quantitative data via System Usability Scale (SUS) questionnaires. Analyze server logs to see which pages have the highest drop-off or longest dwell times.
          </p>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-sm font-medium text-center">
        Note: The evaluations discussed here represent standard HCI methodologies applied theoretically to the interface.
      </div>
    </div>
  )
}
