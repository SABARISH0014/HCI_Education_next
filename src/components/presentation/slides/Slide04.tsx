export default function Slide04() {
  return (
    <div className="flex flex-col h-full bg-white">
      <header className="mb-12">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">PSG Tech E-Campus Context</h1>
      </header>

      <div className="flex-grow flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 space-y-8">
          <p className="text-2xl text-slate-900 font-medium leading-tight">
            To ground our HCI theories in reality, we analyzed the primary interface students use daily: the <span className="font-black">PSG Tech E-Campus</span> portal.
          </p>
          
          <div className="space-y-8 pt-8 border-t border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Mission-Critical Interface</h3>
              <p className="text-slate-600">Used for attendance, timetable, exam registration, and fee payment.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Diverse User Base</h3>
              <p className="text-slate-600">Must be usable by thousands of students with varying levels of technical proficiency.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">High Frequency Use</h3>
              <p className="text-slate-600">Students log in multiple times a week, making learnability and efficiency paramount.</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-slate-50 p-12 flex flex-col items-center justify-center border border-slate-200 min-h-[500px]">
          <div className="w-full max-w-sm bg-white border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] p-8">
            <div className="h-8 bg-slate-900 mb-8 flex items-center justify-center text-white text-xs font-bold uppercase tracking-widest">
              E-Campus Login
            </div>
            <div className="space-y-6">
              <div>
                <div className="w-1/3 h-3 bg-slate-300 mb-2"></div>
                <div className="h-10 border-2 border-slate-200 w-full"></div>
              </div>
              <div>
                <div className="w-1/3 h-3 bg-slate-300 mb-2"></div>
                <div className="h-10 border-2 border-slate-200 w-full"></div>
              </div>
              <div className="h-12 bg-slate-900 w-full flex items-center justify-center text-white font-bold uppercase tracking-widest mt-8">
                Submit
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-slate-500 mt-12 font-bold uppercase tracking-widest">Abstract Interface Representation</p>
        </div>
      </div>
    </div>
  )
}
