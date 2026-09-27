export default function Slide05() {
  return (
    <div className="flex flex-col h-full">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-navy">PSG Tech E-Campus</h1>
        <div className="w-16 h-1 bg-teal mt-4"></div>
      </header>

      <div className="flex-grow flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-lg text-slate-700">
            To ground our HCI theories in reality, we analyzed the primary interface students use daily: the <strong>PSG Tech E-Campus</strong> portal.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">✓</div>
              <p className="text-slate-700"><strong>Mission-Critical Interface:</strong> Used for attendance, timetable, exam registration, and fee payment.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">✓</div>
              <p className="text-slate-700"><strong>Diverse User Base:</strong> Must be usable by thousands of students with varying levels of technical proficiency.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">✓</div>
              <p className="text-slate-700"><strong>High Frequency Use:</strong> Students log in multiple times a week, making learnability and efficiency paramount.</p>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 p-4 bg-slate-50 rounded-2xl border border-slate-200">
          <div className="aspect-video bg-white rounded-lg shadow-sm border border-slate-200 flex flex-col overflow-hidden relative">
            <div className="bg-slate-800 h-8 flex items-center px-3 gap-2 border-b border-slate-700">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center relative p-8">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
              
              <div className="w-64 bg-white shadow-xl border border-gray-100 rounded-lg p-6 relative z-10">
                <div className="h-10 bg-navy mb-4 rounded-md flex items-center justify-center text-white text-xs font-bold">E-Campus Login</div>
                <div className="h-8 bg-slate-100 mb-3 rounded border border-slate-200"></div>
                <div className="h-8 bg-slate-100 mb-4 rounded border border-slate-200"></div>
                <div className="h-10 bg-teal text-white flex items-center justify-center text-xs font-bold rounded shadow-sm">Submit</div>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-slate-500 mt-3 font-medium uppercase tracking-wider">Abstract Interface Representation</p>
        </div>
      </div>
    </div>
  )
}
