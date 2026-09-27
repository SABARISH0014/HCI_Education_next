import { GraduationCap, Brain, Laptop } from "lucide-react"

export default function Slide03() {
  return (
    <div className="flex flex-col h-full">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-navy">HCI in Education</h1>
        <div className="w-16 h-1 bg-teal mt-4"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
            <GraduationCap size={32} />
          </div>
          <h3 className="text-xl font-bold text-navy mb-3">Student Portals</h3>
          <p className="text-slate-600 text-sm">
            Interfaces where students manage their academic life. Poor HCI here leads to missed deadlines, confusion regarding attendance, and administrative friction.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6">
            <Laptop size={32} />
          </div>
          <h3 className="text-xl font-bold text-navy mb-3">Learning Management</h3>
          <p className="text-slate-600 text-sm">
            Systems like Canvas or Moodle. Good HCI ensures that the technology fades into the background, allowing the focus to remain purely on the educational content.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
            <Brain size={32} />
          </div>
          <h3 className="text-xl font-bold text-navy mb-3">Cognitive Load</h3>
          <p className="text-slate-600 text-sm">
            Students are already cognitively burdened by learning new subjects. An educational interface must have high learnability to avoid adding unnecessary cognitive strain.
          </p>
        </div>
      </div>
      
      <div className="mt-8 bg-navy p-6 rounded-xl text-white text-center">
        <p className="text-lg font-light italic">
          "Educational technology fails when the barrier to using the tool is higher than the motivation to learn the subject."
        </p>
      </div>
    </div>
  )
}
