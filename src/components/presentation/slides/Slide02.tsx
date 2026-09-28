import { MonitorSmartphone, Search, MousePointer2, GraduationCap, Brain, Laptop } from "lucide-react"

export default function Slide02() {
  return (
    <div className="flex flex-col h-full bg-white">
      <header className="mb-12">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">Foundations & Educational Context</h1>
      </header>

      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column: What is HCI? */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What is HCI?</h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Human-Computer Interaction (HCI) is a multidisciplinary field of study focusing on the design of computer technology and, in particular, the interaction between humans (the users) and computers.
          </p>
          <div className="bg-slate-100 p-6 mb-8 rounded-lg">
            <h3 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-sm">Core Objective</h3>
            <p className="text-slate-700">
              To create user interfaces that are highly usable, intuitive, and efficient, minimizing cognitive load and preventing user frustration.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <MonitorSmartphone className="text-slate-900 mt-1 shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-slate-900">Design & Layout</h4>
                <p className="text-slate-600 text-sm">How information is visually structured to guide the human eye.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <MousePointer2 className="text-slate-900 mt-1 shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-slate-900">Interactive Elements</h4>
                <p className="text-slate-600 text-sm">How buttons, forms, and navigation respond to human input.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Search className="text-slate-900 mt-1 shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-slate-900">Evaluation</h4>
                <p className="text-slate-600 text-sm">Testing systems with real users to measure usability and learnability.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: HCI in Education */}
        <div className="flex flex-col border-l border-slate-200 pl-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">HCI in Education</h2>
          
          <div className="space-y-10 flex-grow">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="text-slate-900" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Student Portals</h3>
              </div>
              <p className="text-slate-600">
                Interfaces where students manage their academic life. Poor HCI here leads to missed deadlines, confusion regarding attendance, and administrative friction.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <Laptop className="text-slate-900" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Learning Management</h3>
              </div>
              <p className="text-slate-600">
                Systems like Canvas or Moodle. Good HCI ensures that the technology fades into the background, allowing the focus to remain purely on the educational content.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <Brain className="text-slate-900" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Cognitive Load</h3>
              </div>
              <p className="text-slate-600">
                Students are already cognitively burdened by learning new subjects. An educational interface must have high learnability to avoid adding unnecessary cognitive strain.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <p className="text-slate-500 font-serif italic text-lg leading-relaxed">
              "Educational technology fails when the barrier to using the tool is higher than the motivation to learn the subject."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
