import { ExternalLink, BookOpen, Quote } from "lucide-react"

export default function ResearchPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 md:px-8 py-16">
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 flex items-center justify-center gap-4 font-[family-name:var(--font-outfit)] tracking-tight">
          <BookOpen className="text-teal" size={40} />
          Research & References
        </h1>
        <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
          Scholarly literature supporting the analysis of Human-Computer Interaction in Education.
        </p>
      </div>

      <div className="space-y-16">
        {/* Research Papers Section */}
        <section>
          <h2 className="text-3xl font-bold text-navy border-b-2 border-slate-200 pb-4 mb-8 font-[family-name:var(--font-outfit)] tracking-tight">
            Featured Research Papers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Paper 1 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-200 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-teal/10 text-teal-800 text-xs font-bold uppercase tracking-wider rounded-full mb-5 border border-teal/20">
                  Published: 2024
                </span>
                <h3 className="text-2xl font-bold text-navy leading-snug mb-4">
                  Designing an online course using an EXD model: A case of Human–Computer Interaction undergraduate course
                </h3>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    <span className="font-bold text-navy block mb-0.5">Authors</span> 
                    Lintang Matahari Hasani, Ratu Syafianisa Nuzulismah, Harry Budi Santoso, Kasiyah Junus, and Dadan Hardianto
                  </p>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    <span className="font-bold text-navy block mb-0.5">Journal</span> 
                    Heliyon, Volume 10, Issue 12, 2024
                  </p>
                  <p className="text-slate-700 text-sm">
                    <span className="font-bold text-navy block mb-0.5">DOI</span> 
                    <a href="https://doi.org/10.1016/j.heliyon.2024.e33254" className="text-blue-600 hover:text-blue-800 hover:underline font-medium break-all" target="_blank" rel="noopener noreferrer">10.1016/j.heliyon.2024.e33254</a>
                  </p>
                </div>
              </div>
              
              <div className="mb-8 flex-grow space-y-5">
                <div>
                  <h4 className="font-bold text-navy mb-2 uppercase tracking-wide text-xs">Research Objective & Methodology</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    To apply an e-learning experience design (EXD) model to an undergraduate HCI course and evaluate student learning experiences using surveys.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2 uppercase tracking-wide text-xs">Key Findings & Relevance</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Highlights the importance of user-centred educational design, demonstrating how structured HCI principles can directly improve online learning experiences and student engagement.
                  </p>
                </div>
              </div>
              
              <div className="mt-auto pt-6 border-t border-slate-100">
                <a 
                  href="https://doi.org/10.1016/j.heliyon.2024.e33254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-navy hover:bg-navy-light text-white font-bold rounded-xl transition-all shadow-md focus:outline-none focus:ring-4 focus:ring-navy/30"
                >
                  <span>Read Research Paper</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            {/* Paper 2 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-200 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-teal/10 text-teal-800 text-xs font-bold uppercase tracking-wider rounded-full mb-5 border border-teal/20">
                  Published: 2024
                </span>
                <h3 className="text-2xl font-bold text-navy leading-snug mb-4">
                  Assessing the Students' Usability of e-Learning Management System: Case in Hawassa University, Ethiopia
                </h3>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    <span className="font-bold text-navy block mb-0.5">Authors</span> 
                    Bekele Tunsisa and Dereje Demissie
                  </p>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    <span className="font-bold text-navy block mb-0.5">Journal</span> 
                    International Journal of Computer Games Technology, 2024
                  </p>
                  <p className="text-slate-700 text-sm">
                    <span className="font-bold text-navy block mb-0.5">DOI</span> 
                    <a href="https://doi.org/10.1155/2024/2378236" className="text-blue-600 hover:text-blue-800 hover:underline font-medium break-all" target="_blank" rel="noopener noreferrer">10.1155/2024/2378236</a>
                  </p>
                </div>
              </div>
              
              <div className="mb-8 flex-grow space-y-5">
                <div>
                  <h4 className="font-bold text-navy mb-2 uppercase tracking-wide text-xs">Research Objective & Methodology</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Investigated students' usability experiences with an e-learning management system, identifying key usability challenges and areas for improvement.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2 uppercase tracking-wide text-xs">Key Findings & Relevance</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Provides a real-world perspective on usability, accessibility, and educational platform design. Underscores why evaluating interfaces (like our simulated E-Campus portal) is critical for student success.
                  </p>
                </div>
              </div>
              
              <div className="mt-auto pt-6 border-t border-slate-100">
                <a 
                  href="https://doi.org/10.1155/2024/2378236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-navy hover:bg-navy-light text-white font-bold rounded-xl transition-all shadow-md focus:outline-none focus:ring-4 focus:ring-navy/30"
                >
                  <span>Read Research Paper</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Presentation References Section */}
        <section>
          <h2 className="text-3xl font-bold text-navy border-b-2 border-slate-200 pb-4 mb-8 flex items-center gap-3 font-[family-name:var(--font-outfit)] tracking-tight">
            <Quote className="text-teal" size={32} />
            Presentation References
          </h2>
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
            <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl mb-8">
              <p className="text-sm text-amber-800 font-medium">
                Note: The following references were cited in the original 12-slide presentation. Where full bibliographic details were not provided in the original slides, they are listed as cited pending verification.
              </p>
            </div>
            
            <ul className="space-y-6">
              <li className="flex gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors">
                <span className="font-extrabold text-teal text-xl min-w-[24px]">1.</span>
                <div>
                  <p className="text-navy font-bold text-lg mb-1">Abuhlfaia & de Quincey (2018)</p>
                  <p className="text-sm text-slate-500 font-medium bg-slate-100 inline-block px-3 py-1 rounded-md">Cited in original presentation (Incomplete pending verification).</p>
                </div>
              </li>
              <li className="flex gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors">
                <span className="font-extrabold text-teal text-xl min-w-[24px]">2.</span>
                <div>
                  <p className="text-navy font-bold text-lg mb-1">Lu et al. (2022)</p>
                  <p className="text-sm text-slate-500 font-medium bg-slate-100 inline-block px-3 py-1 rounded-md">Cited in original presentation (Incomplete pending verification).</p>
                </div>
              </li>
              <li className="flex gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors">
                <span className="font-extrabold text-teal text-xl min-w-[24px]">3.</span>
                <div>
                  <p className="text-navy font-bold text-lg mb-1">Gopal (2024)</p>
                  <p className="text-sm text-slate-500 font-medium bg-slate-100 inline-block px-3 py-1 rounded-md">Cited in original presentation (Incomplete pending verification).</p>
                </div>
              </li>
              <li className="flex gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors">
                <span className="font-extrabold text-teal text-xl min-w-[24px]">4.</span>
                <div>
                  <p className="text-navy font-bold text-lg mb-1">PSG Tech E-Campus</p>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">Educational portal referenced for interface analysis and HCI evaluation. The simulated interactions in this project are theoretical redesigns applied to the E-Campus context.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
