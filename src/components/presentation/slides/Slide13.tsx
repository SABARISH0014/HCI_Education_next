import { FileText, ExternalLink } from "lucide-react"

export default function Slide13() {
  return (
    <div className="flex flex-col h-full">
      <header className="mb-8">
        <div className="inline-block px-3 py-1 mb-2 bg-rose-100 text-rose-700 text-xs font-bold rounded-full uppercase tracking-wider">Supplementary Research</div>
        <h1 className="text-2xl md:text-3xl font-bold text-navy">Designing an online course using an EXD model</h1>
        <h2 className="text-lg text-slate-500">A case of Human–Computer Interaction undergraduate course</h2>
        <div className="w-16 h-1 bg-teal mt-4"></div>
      </header>

      <div className="flex-grow bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Publication Details</h4>
              <p className="text-navy font-medium">Authors: <span className="font-normal text-slate-600">Lintang Matahari Hasani, Ratu Syafianisa Nuzulismah, Harry Budi Santoso, Kasiyah Junus, and Dadan Hardianto</span></p>
              <p className="text-navy font-medium mt-1">Journal: <span className="font-normal text-slate-600">Heliyon, Volume 10, Issue 12, 2024</span></p>
            </div>
            
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Research Objective</h4>
              <p className="text-slate-700">To apply an e-learning experience design (EXD) model to an undergraduate HCI course and evaluate its impact on student learning experiences.</p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Methodology</h4>
              <p className="text-slate-700">The researchers designed an online course using the EXD framework and evaluated student experiences through comprehensive surveys.</p>
            </div>
          </div>

          <div className="space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-100">
            <div>
              <h4 className="flex items-center gap-2 text-navy font-bold mb-2">
                <FileText size={18} className="text-teal" /> Key Findings
              </h4>
              <ul className="list-disc pl-5 text-slate-700 space-y-2 text-sm">
                <li>Structured EXD significantly improved student engagement.</li>
                <li>Clear navigation and visibility reduced cognitive load during online learning.</li>
                <li>Students reported higher satisfaction when HCI principles were explicitly applied to the learning platform itself.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Relevance to our Presentation</h4>
              <p className="text-slate-700 text-sm">
                This study validates our core argument: applying structured HCI principles to educational interfaces (like the E-Campus portal) directly improves the student's ability to focus on and succeed in their academic tasks.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
          <a href="https://doi.org/10.1016/j.heliyon.2024.e33254" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-blue-600 hover:underline font-medium">
            DOI: 10.1016/j.heliyon.2024.e33254 <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}
