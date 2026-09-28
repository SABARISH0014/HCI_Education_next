import { ExternalLink } from "lucide-react"

export default function Slide10() {
  return (
    <div className="flex flex-col h-full bg-white">
      <header className="mb-10">
        <div className="inline-block px-3 py-1 mb-4 bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-widest">Supplementary Research</div>
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">Academic Context</h1>
      </header>

      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Paper 1 */}
        <div className="flex flex-col border border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 leading-tight">Designing an online course using an EXD model: A case of HCI undergraduate course</h2>
          
          <div className="space-y-6 flex-grow">
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Publication Details</h3>
              <p className="text-sm text-slate-700"><span className="font-bold text-slate-900">Authors:</span> Hasani, L. M., Nuzulismah, R. S., et al.</p>
              <p className="text-sm text-slate-700"><span className="font-bold text-slate-900">Journal:</span> Heliyon, Volume 10, Issue 12, 2024</p>
            </div>
            
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Research Objective & Methodology</h3>
              <p className="text-sm text-slate-700">To apply an e-learning experience design (EXD) model to an undergraduate HCI course and evaluate its impact on student learning experiences via surveys.</p>
            </div>
            
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Key Findings</h3>
              <ul className="list-disc pl-4 text-sm text-slate-700 space-y-1">
                <li>Structured EXD significantly improved student engagement.</li>
                <li>Clear navigation and visibility reduced cognitive load during online learning.</li>
                <li>Students reported higher satisfaction when HCI principles were explicitly applied to the learning platform itself.</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-4">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Relevance</h3>
              <p className="text-sm text-slate-700">Validates our core argument: applying structured HCI principles directly improves the student's ability to focus and succeed.</p>
            </div>
          </div>
          
          <a href="https://doi.org/10.1016/j.heliyon.2024.e33254" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:underline mt-6">
            DOI: 10.1016/j.heliyon.2024.e33254 <ExternalLink size={14} />
          </a>
        </div>

        {/* Paper 2 */}
        <div className="flex flex-col border border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 leading-tight">Assessing the Students' Usability of e-Learning Management System</h2>
          
          <div className="space-y-6 flex-grow">
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Publication Details</h3>
              <p className="text-sm text-slate-700"><span className="font-bold text-slate-900">Authors:</span> Bekele Tunsisa and Dereje Demissie</p>
              <p className="text-sm text-slate-700"><span className="font-bold text-slate-900">Journal:</span> Int. Journal of Computer Games Technology, 2024</p>
            </div>
            
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Research Objective & Methodology</h3>
              <p className="text-sm text-slate-700">To investigate and evaluate students' usability experiences with a deployed e-learning management system using usability questionnaires and observational data.</p>
            </div>
            
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Key Findings</h3>
              <ul className="list-disc pl-4 text-sm text-slate-700 space-y-1">
                <li>Identified severe usability issues related to navigation and inconsistent feedback.</li>
                <li>Found a direct correlation between interface learnability and student academic performance.</li>
                <li>Highlighted the urgent need for iterative, user-centred redesign of legacy academic systems.</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-4">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Relevance</h3>
              <p className="text-sm text-slate-700">Mirrors our analysis of the E-Campus portal, providing empirical evidence that evaluating and improving university interfaces is a widespread necessity.</p>
            </div>
          </div>
          
          <a href="https://doi.org/10.1155/2024/2378236" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:underline mt-6">
            DOI: 10.1155/2024/2378236 <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}
