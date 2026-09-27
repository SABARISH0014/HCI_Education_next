import { ExternalLink, BookOpen, Quote } from "lucide-react"

export default function ResearchPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 md:px-8 py-24">
      <div className="mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Research & References
        </h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Scholarly literature supporting the analysis of Human-Computer Interaction in Education.
        </p>
      </div>

      <div className="space-y-20">
        {/* Research Papers Section */}
        <section>
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-4 mb-10 tracking-tight">
            Featured Research Papers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Paper 1 */}
            <article className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 shadow-sm flex flex-col h-full hover:shadow-lg hover:border-slate-700 transition-all backdrop-blur-sm">
              <div className="mb-6 flex-grow">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider rounded-md">
                    Published: 2024
                  </span>
                  <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider rounded-md border border-slate-700">
                    Peer Reviewed
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white leading-snug mb-6">
                  Designing an online course using an EXD model: A case of Human–Computer Interaction undergraduate course
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Authors</p>
                    <p className="text-slate-300 text-sm font-medium">Lintang Matahari Hasani, Ratu Syafianisa Nuzulismah, Harry Budi Santoso, Kasiyah Junus, and Dadan Hardianto</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Journal</p>
                    <p className="text-slate-300 text-sm font-medium">Heliyon, Volume 10, Issue 12, 2024</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">DOI</p>
                    <a href="https://doi.org/10.1016/j.heliyon.2024.e33254" className="text-teal-400 underline hover:text-teal-300 font-medium break-all text-sm transition-colors" target="_blank" rel="noopener noreferrer">
                      10.1016/j.heliyon.2024.e33254
                    </a>
                  </div>
                </div>

                <div className="space-y-6 border-t border-slate-800 pt-6">
                  <div>
                    <h4 className="font-bold text-slate-200 mb-2 uppercase tracking-wide text-xs">Research Objective & Methodology</h4>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      To apply an e-learning experience design (EXD) model to an undergraduate HCI course and evaluate student learning experiences using surveys.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200 mb-2 uppercase tracking-wide text-xs">Key Findings & Relevance</h4>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      Highlights the importance of user-centred educational design, demonstrating how structured HCI principles can directly improve online learning experiences and student engagement.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://doi.org/10.1016/j.heliyon.2024.e33254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  <span>Read Research Paper</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </article>

            {/* Paper 2 */}
            <article className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 shadow-sm flex flex-col h-full hover:shadow-lg hover:border-slate-700 transition-all backdrop-blur-sm">
              <div className="mb-6 flex-grow">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider rounded-md">
                    Published: 2024
                  </span>
                  <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider rounded-md border border-slate-700">
                    Peer Reviewed
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white leading-snug mb-6">
                  Assessing the Students' Usability of e-Learning Management System: Case in Hawassa University, Ethiopia
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Authors</p>
                    <p className="text-slate-300 text-sm font-medium">Bekele Tunsisa and Dereje Demissie</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Journal</p>
                    <p className="text-slate-300 text-sm font-medium">International Journal of Computer Games Technology, 2024</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">DOI</p>
                    <a href="https://doi.org/10.1155/2024/2378236" className="text-teal-400 underline hover:text-teal-300 font-medium break-all text-sm transition-colors" target="_blank" rel="noopener noreferrer">
                      10.1155/2024/2378236
                    </a>
                  </div>
                </div>

                <div className="space-y-6 border-t border-slate-800 pt-6">
                  <div>
                    <h4 className="font-bold text-slate-200 mb-2 uppercase tracking-wide text-xs">Research Objective & Methodology</h4>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      Investigated students' usability experiences with an e-learning management system, identifying key usability challenges and areas for improvement.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200 mb-2 uppercase tracking-wide text-xs">Key Findings & Relevance</h4>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      Provides a real-world perspective on usability, accessibility, and educational platform design. Underscores why evaluating interfaces is critical for student success.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://doi.org/10.1155/2024/2378236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  <span>Read Research Paper</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Presentation References Section */}
        <section>
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-4 mb-10 tracking-tight">
            Presentation References
          </h2>
          <div className="bg-slate-900/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 shadow-sm">
            <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg mb-8">
              <p className="text-sm text-slate-400 font-medium">
                Note: The following references were cited in the original presentation.
              </p>
            </div>
            
            <ul className="space-y-4 text-slate-400">
              <li className="flex gap-4 p-4 hover:bg-slate-800/50 rounded-xl transition-colors">
                <span className="font-bold text-white">1.</span>
                <div>
                  <p className="text-white font-bold mb-1">Abuhlfaia & de Quincey (2018)</p>
                  <p className="text-sm text-slate-500">Cited in original presentation.</p>
                </div>
              </li>
              <li className="flex gap-4 p-4 hover:bg-slate-800/50 rounded-xl transition-colors">
                <span className="font-bold text-white">2.</span>
                <div>
                  <p className="text-white font-bold mb-1">Lu et al. (2022)</p>
                  <p className="text-sm text-slate-500">Cited in original presentation.</p>
                </div>
              </li>
              <li className="flex gap-4 p-4 hover:bg-slate-800/50 rounded-xl transition-colors">
                <span className="font-bold text-white">3.</span>
                <div>
                  <p className="text-white font-bold mb-1">Gopal (2024)</p>
                  <p className="text-sm text-slate-500">Cited in original presentation.</p>
                </div>
              </li>
              <li className="flex gap-4 p-4 hover:bg-slate-800/50 rounded-xl transition-colors">
                <span className="font-bold text-white">4.</span>
                <div>
                  <p className="text-white font-bold mb-1">PSG Tech E-Campus</p>
                  <p className="text-sm text-slate-500 max-w-2xl">Educational portal referenced for interface analysis and HCI evaluation. The simulated interactions in this project are theoretical redesigns applied to the E-Campus context.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
