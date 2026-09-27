import { FileText, ExternalLink } from "lucide-react"

export default function Slide14() {
  return (
    <div className="flex flex-col h-full">
      <header className="mb-8">
        <div className="inline-block px-3 py-1 mb-2 bg-rose-100 text-rose-700 text-xs font-bold rounded-full uppercase tracking-wider">Supplementary Research</div>
        <h1 className="text-2xl md:text-3xl font-bold text-navy">Assessing the Students' Usability of e-Learning Management System</h1>
        <h2 className="text-lg text-slate-500">Case in Hawassa University, Ethiopia</h2>
        <div className="w-16 h-1 bg-teal mt-4"></div>
      </header>

      <div className="flex-grow bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Publication Details</h4>
              <p className="text-navy font-medium">Authors: <span className="font-normal text-slate-600">Bekele Tunsisa and Dereje Demissie</span></p>
              <p className="text-navy font-medium mt-1">Journal: <span className="font-normal text-slate-600">International Journal of Computer Games Technology, 2024</span></p>
            </div>
            
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Research Objective</h4>
              <p className="text-slate-700">To investigate and evaluate students' usability experiences with a deployed e-learning management system in a university setting.</p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Methodology</h4>
              <p className="text-slate-700">Researchers utilized usability questionnaires and observational data to identify interface bottlenecks and user satisfaction levels.</p>
            </div>
          </div>

          <div className="space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-100">
            <div>
              <h4 className="flex items-center gap-2 text-navy font-bold mb-2">
                <FileText size={18} className="text-teal" /> Key Findings
              </h4>
              <ul className="list-disc pl-5 text-slate-700 space-y-2 text-sm">
                <li>Identified severe usability issues related to navigation and inconsistent feedback.</li>
                <li>Found a direct correlation between interface learnability and student academic performance.</li>
                <li>Highlighted the urgent need for iterative, user-centred redesign of legacy academic systems.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Relevance to our Presentation</h4>
              <p className="text-slate-700 text-sm">
                This study perfectly mirrors our analysis of the E-Campus portal. It provides empirical evidence that evaluating and improving university interfaces is a widespread necessity, not an isolated issue.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
          <a href="https://doi.org/10.1155/2024/2378236" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-blue-600 hover:underline font-medium">
            DOI: 10.1155/2024/2378236 <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}
