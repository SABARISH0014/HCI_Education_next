export default function Slide01() {
  return (
    <div className="flex flex-col h-full justify-center bg-white p-12">
      <div className="mb-6">
        <span className="text-xs font-bold tracking-widest text-slate-500 uppercase border border-slate-200 px-3 py-1 rounded-full">
          MCA Presentation
        </span>
      </div>
      <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-8">
        HUMAN-COMPUTER <br /> INTERACTION <br /> <span className="text-slate-400">IN EDUCATION</span>
      </h1>
      <h2 className="text-2xl text-slate-600 font-medium mb-16 max-w-2xl">
        Theory, Real-World Application & Future Possibilities
      </h2>
      
      <div className="mt-auto grid grid-cols-2 gap-8 pt-12 border-t border-slate-200">
        <div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Presented By</h3>
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900">Muthu Sailappan A K</span>
              <span className="text-slate-500 font-mono text-sm">25MX332</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900">Sabarish P</span>
              <span className="text-slate-500 font-mono text-sm">25MX343</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="text-right">
            <span className="text-slate-900 font-bold text-lg block">PSG College of Technology</span>
          </div>
        </div>
      </div>
    </div>
  )
}
