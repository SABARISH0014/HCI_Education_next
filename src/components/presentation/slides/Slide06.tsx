export default function Slide06() {
  return (
    <div className="flex flex-col h-full bg-white">
      <header className="mb-12">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">Featured Research</h1>
      </header>

      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Paper 1 */}
        <div className="flex flex-col border border-slate-200 p-8 shadow-[4px_4px_0px_0px_rgba(15,23,42,0.1)]">
          <h2 className="text-xl font-bold text-slate-900 mb-8">Designing an online course using an EXD model</h2>
          
          <div className="space-y-6 flex-grow">
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Authors</h3>
              <p className="text-sm font-medium text-slate-900">Hasani, L. M., Nuzulismah, R. S., et al.</p>
            </div>
            
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Journal</h3>
              <p className="text-sm font-medium text-slate-900">Heliyon, 2024</p>
            </div>
            
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Key Findings</h3>
              <ul className="list-disc pl-4 text-sm text-slate-600 space-y-2">
                <li>Structured EXD significantly improved engagement.</li>
                <li>Clear navigation reduced cognitive load.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Paper 2 */}
        <div className="flex flex-col border border-slate-200 p-8 shadow-[4px_4px_0px_0px_rgba(15,23,42,0.1)]">
          <h2 className="text-xl font-bold text-slate-900 mb-8">Assessing Students' Usability of e-Learning Systems</h2>
          
          <div className="space-y-6 flex-grow">
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Authors</h3>
              <p className="text-sm font-medium text-slate-900">Bekele Tunsisa & Dereje Demissie</p>
            </div>
            
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Journal</h3>
              <p className="text-sm font-medium text-slate-900">Int. Journal of Computer Games Tech, 2024</p>
            </div>
            
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Key Findings</h3>
              <ul className="list-disc pl-4 text-sm text-slate-600 space-y-2">
                <li>Severe issues found in legacy navigation.</li>
                <li>Direct correlation between interface learnability and academic performance.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
