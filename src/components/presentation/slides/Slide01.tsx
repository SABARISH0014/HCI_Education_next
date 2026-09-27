export default function Slide01() {
  return (
    <div className="flex flex-col h-full justify-center items-center text-center">
      <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-teal/10 text-teal-800 text-sm font-bold tracking-wider uppercase border border-teal/20">
        MCA Presentation
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-tight mb-8">
        HUMAN-COMPUTER INTERACTION <br className="hidden md:block"/> IN EDUCATION
      </h1>
      <div className="w-24 h-1 bg-teal mb-8 rounded-full"></div>
      <h2 className="text-xl md:text-2xl text-slate-600 font-light mb-12">
        Theory, Real-World Application & Future Possibilities
      </h2>
      
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 max-w-lg w-full text-left">
        <h3 className="font-bold text-navy mb-4 border-b pb-2">Presented By</h3>
        <ul className="space-y-3">
          <li className="flex justify-between items-center text-slate-700">
            <span className="font-medium">Muthu Sailappan A K</span>
            <span className="text-sm font-mono bg-slate-200 px-2 py-1 rounded">25MX332</span>
          </li>
          <li className="flex justify-between items-center text-slate-700">
            <span className="font-medium">Sabarish P</span>
            <span className="text-sm font-mono bg-slate-200 px-2 py-1 rounded">25MX343</span>
          </li>
        </ul>
        <div className="mt-4 pt-4 border-t text-sm text-slate-500 text-center font-medium">
          PSG College of Technology
        </div>
      </div>
    </div>
  )
}
