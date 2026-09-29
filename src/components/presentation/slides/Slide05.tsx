export default function Slide05() {
  return (
    <div className="flex flex-col h-full bg-white">
      <header className="mb-12">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">Future & Conclusion</h1>
      </header>

      <div className="flex-grow flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-widest">Future Technology</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="font-black text-slate-900">—</span>
              <div>
                <strong className="text-slate-900 block">Conversational & Predictive AI</strong>
                <span className="text-slate-600 text-sm">Natural language queries and automated resource surfacing.</span>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="font-black text-slate-900">—</span>
              <div>
                <strong className="text-slate-900 block">Adaptive Interfaces</strong>
                <span className="text-slate-600 text-sm">Layouts that scale complexity based on student proficiency.</span>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="font-black text-slate-900">—</span>
              <div>
                <strong className="text-slate-900 block">VR/AR & Spatial Learning</strong>
                <span className="text-slate-600 text-sm">Immersive environments for engineering and medicine.</span>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="font-black text-slate-900">—</span>
              <div>
                <strong className="text-slate-900 block">Voice & Mobile-First</strong>
                <span className="text-slate-600 text-sm">Hands-free lab interaction and bite-sized ubiquitous access.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 border-l-8 border-slate-900 pl-12 py-8 flex flex-col justify-center bg-slate-50">
          <h2 className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-widest">Conclusion</h2>
          <blockquote className="text-3xl font-bold leading-tight text-slate-900 mb-6">
            "The interface is the classroom. Good design empowers students to focus on learning, not struggling with tools."
          </blockquote>
          <p className="text-slate-600 font-medium uppercase tracking-widest text-xs">End of Core Presentation</p>
        </div>
      </div>
    </div>
  )
}
