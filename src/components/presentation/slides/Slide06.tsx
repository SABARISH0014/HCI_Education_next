import { Users, ClipboardList, FileLineChart } from "lucide-react"

export default function Slide06() {
  return (
    <div className="flex flex-col h-full bg-white">
      <header className="mb-8">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">Interaction Journey & Evaluation</h1>
      </header>

      <div className="flex-grow flex flex-col gap-12">
        {/* Top Half: Journey */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 uppercase tracking-widest mb-6">Student Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="absolute top-6 left-0 w-full h-0.5 bg-slate-200 hidden md:block"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center font-bold text-xl mb-4">1</div>
              <h3 className="font-bold text-slate-900 mb-2">Authentication</h3>
              <p className="text-sm text-slate-600">User inputs Roll No & Password. System validates and provides entry.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center font-bold text-xl mb-4">2</div>
              <h3 className="font-bold text-slate-900 mb-2">Navigation</h3>
              <p className="text-sm text-slate-600">User scans the sidebar to locate the desired module (e.g., Attendance).</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center font-bold text-xl mb-4">3</div>
              <h3 className="font-bold text-slate-900 mb-2">Information Retrieval</h3>
              <p className="text-sm text-slate-600">System presents data tabularly. User processes their current standing.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center font-bold text-xl mb-4">4</div>
              <h3 className="font-bold text-slate-900 mb-2">Task Completion</h3>
              <p className="text-sm text-slate-600">User logs out or switches modules. Feedback confirms session end.</p>
            </div>
          </div>
        </div>

        {/* Bottom Half: Evaluation */}
        <div className="border-t border-slate-200 pt-8 flex-grow flex flex-col">
          <h2 className="text-xl font-bold text-slate-900 uppercase tracking-widest mb-6">Evaluation Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-grow">
            <div className="bg-slate-50 p-6 border border-slate-200 flex flex-col">
              <Users className="text-slate-900 mb-4" size={32} />
              <h3 className="text-lg font-bold text-slate-900 mb-2">1. Observational Studies</h3>
              <p className="text-slate-600 text-sm">Watch students interact with the portal in a controlled environment. Note where they hesitate, misclick, or express frustration while trying to complete common tasks.</p>
            </div>
            
            <div className="bg-slate-50 p-6 border border-slate-200 flex flex-col">
              <ClipboardList className="text-slate-900 mb-4" size={32} />
              <h3 className="text-lg font-bold text-slate-900 mb-2">2. Heuristic Evaluation</h3>
              <p className="text-slate-600 text-sm">HCI experts review the E-Campus interface against established design principles (like Nielsen's 10 Usability Heuristics) to identify violations of UI standards.</p>
            </div>
            
            <div className="bg-slate-50 p-6 border border-slate-200 flex flex-col">
              <FileLineChart className="text-slate-900 mb-4" size={32} />
              <h3 className="text-lg font-bold text-slate-900 mb-2">3. Surveys & Analytics</h3>
              <p className="text-slate-600 text-sm">Collect quantitative data via System Usability Scale (SUS) questionnaires. Analyze server logs to see which pages have the highest drop-off or longest dwell times.</p>
            </div>
          </div>
          <div className="mt-6 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">
            Note: The evaluations discussed here represent standard HCI methodologies applied theoretically to the interface.
          </div>
        </div>
      </div>
    </div>
  )
}
