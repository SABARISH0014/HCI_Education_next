import { Eye, AlertCircle, CheckCircle2 } from "lucide-react"

export default function Slide06() {
  return (
    <div className="flex flex-col h-full">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-navy">Applying HCI Principles to E-Campus</h1>
        <div className="w-16 h-1 bg-teal mt-4"></div>
      </header>

      <div className="flex-grow flex flex-col gap-6">
        <div className="bg-white p-6 rounded-xl border-l-4 border-l-teal border-y border-r border-slate-200 shadow-sm flex items-start gap-4 hover:-translate-y-1 transition-transform">
          <div className="bg-teal/10 p-3 rounded-full text-teal shrink-0">
            <Eye size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy mb-2">Visibility</h3>
            <p className="text-slate-600">
              The login fields (Roll Number and Password) are placed centrally, ensuring they are the first interactive elements the user notices. There is no ambiguity about where to start.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border-l-4 border-l-rose-500 border-y border-r border-slate-200 shadow-sm flex items-start gap-4 hover:-translate-y-1 transition-transform">
          <div className="bg-rose-100 p-3 rounded-full text-rose-600 shrink-0">
            <AlertCircle size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy mb-2">Error Recovery & Prevention</h3>
            <p className="text-slate-600">
              When incorrect credentials are provided, the system provides clear feedback rather than a generic "System Error." Error prevention is implemented by validating input fields before allowing form submission.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border-l-4 border-l-blue-500 border-y border-r border-slate-200 shadow-sm flex items-start gap-4 hover:-translate-y-1 transition-transform">
          <div className="bg-blue-100 p-3 rounded-full text-blue-600 shrink-0">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy mb-2">Feedback & Consistency</h3>
            <p className="text-slate-600">
              Navigation items within the dashboard change visual state (color, underline) when active, providing immediate locational feedback. Button styles remain consistent across different modules (attendance, marks).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
