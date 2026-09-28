import { Eye, AlertCircle, CheckCircle2 } from "lucide-react"

export default function Slide05() {
  return (
    <div className="flex flex-col h-full bg-white">
      <header className="mb-12">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">Applying HCI Principles</h1>
        <p className="text-xl text-slate-500 mt-4">Evaluating the E-Campus portal</p>
      </header>

      <div className="flex-grow flex flex-col justify-center gap-10">
        <div className="flex gap-8 items-start border-b border-slate-100 pb-10">
          <div className="bg-slate-900 text-white p-4 shrink-0">
            <Eye size={32} />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Visibility</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              The login fields (Roll Number and Password) are placed centrally, ensuring they are the first interactive elements the user notices. There is no ambiguity about where to start.
            </p>
          </div>
        </div>

        <div className="flex gap-8 items-start border-b border-slate-100 pb-10">
          <div className="bg-slate-900 text-white p-4 shrink-0">
            <AlertCircle size={32} />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Error Recovery & Prevention</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              When incorrect credentials are provided, the system provides clear feedback rather than a generic "System Error." Error prevention is implemented by validating input fields before allowing form submission.
            </p>
          </div>
        </div>

        <div className="flex gap-8 items-start">
          <div className="bg-slate-900 text-white p-4 shrink-0">
            <CheckCircle2 size={32} />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Feedback & Consistency</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Navigation items within the dashboard change visual state (color, underline) when active, providing immediate locational feedback. Button styles remain consistent across different modules (attendance, marks).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
