export default function Slide03() {
  return (
    <div className="flex flex-col h-full bg-white">
      <header className="mb-12">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">PSG Tech E-Campus Analysis</h1>
      </header>

      <div className="flex-grow flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Context</h2>
            <ul className="space-y-4 text-slate-600">
              <li><strong className="text-slate-900">Mission-Critical:</strong> Attendance, exams, fees.</li>
              <li><strong className="text-slate-900">Diverse Users:</strong> Thousands of varying technical levels.</li>
              <li><strong className="text-slate-900">High Frequency:</strong> Requires ultimate efficiency.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Applied Principles</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-slate-900">Visibility</h3>
                <p className="text-slate-600 text-sm">Centralized login fields eliminate ambiguity.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Error Prevention</h3>
                <p className="text-slate-600 text-sm">Input validation before submission avoids system errors.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Feedback</h3>
                <p className="text-slate-600 text-sm">Active states indicate precise module location.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-slate-50 border border-slate-200 p-12 flex flex-col items-center justify-center relative">
          <div className="w-full max-w-sm bg-white border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] p-8 relative z-10">
            <div className="h-8 bg-slate-900 mb-8 flex items-center justify-center text-white text-xs font-bold uppercase tracking-widest">
              Portal Interface
            </div>
            <div className="space-y-6">
              <div>
                <div className="w-1/3 h-3 bg-slate-300 mb-2"></div>
                <div className="h-10 border-2 border-slate-200 w-full flex items-center px-3 text-xs text-slate-400 font-mono">User ID</div>
              </div>
              <div>
                <div className="w-1/3 h-3 bg-slate-300 mb-2"></div>
                <div className="h-10 border-2 border-slate-200 w-full flex items-center px-3 text-xs text-slate-400 font-mono">Password</div>
              </div>
              <div className="h-12 bg-slate-900 w-full flex items-center justify-center text-white font-bold uppercase tracking-widest mt-8">
                Login
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/4 right-8 bg-white border border-slate-200 px-3 py-1 shadow-sm text-xs font-bold text-slate-900 z-20">← Visibility</div>
          <div className="absolute bottom-1/4 left-8 bg-white border border-slate-200 px-3 py-1 shadow-sm text-xs font-bold text-slate-900 z-20">Validation →</div>
          
          <p className="text-center text-xs text-slate-500 mt-12 font-bold uppercase tracking-widest">Abstract UI Map</p>
        </div>
      </div>
    </div>
  )
}
