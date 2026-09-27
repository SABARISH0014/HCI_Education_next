import { ArrowRight } from "lucide-react"

export default function Slide07() {
  return (
    <div className="flex flex-col h-full">
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-navy">Student Interaction Journey</h1>
        <div className="w-16 h-1 bg-teal mt-4"></div>
      </header>

      <div className="flex-grow flex flex-col justify-center items-center relative">
        <div className="w-full max-w-4xl relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden md:block z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            
            <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 text-center shadow-md hover:border-navy transition-colors group">
              <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl group-hover:scale-110 transition-transform">1</div>
              <h3 className="font-bold text-navy mb-2">Authentication</h3>
              <p className="text-xs text-slate-500">User inputs Roll No & Password. System validates and provides entry.</p>
            </div>

            <div className="hidden md:flex items-center justify-center -mx-4 z-20">
              <div className="bg-white rounded-full p-1 border-2 border-slate-200 text-slate-400">
                <ArrowRight size={20} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 text-center shadow-md hover:border-teal transition-colors group">
              <div className="w-12 h-12 bg-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl group-hover:scale-110 transition-transform">2</div>
              <h3 className="font-bold text-navy mb-2">Navigation</h3>
              <p className="text-xs text-slate-500">User scans the sidebar to locate the desired module (e.g., Attendance).</p>
            </div>

            <div className="hidden md:flex items-center justify-center -mx-4 z-20">
              <div className="bg-white rounded-full p-1 border-2 border-slate-200 text-slate-400">
                <ArrowRight size={20} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 text-center shadow-md hover:border-blue-600 transition-colors group">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl group-hover:scale-110 transition-transform">3</div>
              <h3 className="font-bold text-navy mb-2">Information Retrieval</h3>
              <p className="text-xs text-slate-500">System presents data tabularly. User processes their current standing.</p>
            </div>

            <div className="hidden md:flex items-center justify-center -mx-4 z-20">
              <div className="bg-white rounded-full p-1 border-2 border-slate-200 text-slate-400">
                <ArrowRight size={20} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 text-center shadow-md hover:border-rose-500 transition-colors group">
              <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl group-hover:scale-110 transition-transform">4</div>
              <h3 className="font-bold text-navy mb-2">Task Completion</h3>
              <p className="text-xs text-slate-500">User logs out or switches modules. Feedback confirms session end.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
