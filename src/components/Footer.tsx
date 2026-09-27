export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-10 mt-auto relative z-10 w-full">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="text-navy font-extrabold text-lg mb-1 tracking-tight font-[family-name:var(--font-outfit)]">
              Human-Computer Interaction in Education
            </h3>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-md text-xs font-semibold text-slate-600 tracking-wide uppercase border border-slate-200">
              PSG College of Technology
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 text-sm font-medium text-slate-600">
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
              <span className="text-teal-700 font-bold bg-teal-50 px-1.5 rounded">25MX332</span> 
              <span>Muthu Sailappan A K</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
              <span className="text-blue-700 font-bold bg-blue-50 px-1.5 rounded">25MX343</span> 
              <span>Sabarish P</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} HCI Educational Project. Open source demonstration.</p>
          <p>Designed for Accessibility & Usability</p>
        </div>
      </div>
    </footer>
  )
}
