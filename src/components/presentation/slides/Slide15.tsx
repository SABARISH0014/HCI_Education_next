import { Quote } from "lucide-react"

export default function Slide15() {
  return (
    <div className="flex flex-col h-full">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-navy">References</h1>
        <div className="w-16 h-1 bg-teal mt-4"></div>
      </header>

      <div className="flex-grow bg-white border border-slate-200 rounded-2xl p-8 shadow-sm overflow-y-auto">
        <ul className="space-y-6">
          <li className="flex gap-4">
            <span className="text-teal font-bold pt-1">1.</span>
            <div>
              <p className="text-navy font-medium mb-1">
                Hasani, L. M., Nuzulismah, R. S., Santoso, H. B., Junus, K., & Hardianto, D. (2024).
              </p>
              <p className="text-slate-700">
                Designing an online course using an EXD model: A case of Human–Computer Interaction undergraduate course. 
                <span className="italic"> Heliyon, 10</span>(12), e33254. 
                <a href="https://doi.org/10.1016/j.heliyon.2024.e33254" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.heliyon.2024.e33254</a>
              </p>
            </div>
          </li>
          
          <li className="flex gap-4">
            <span className="text-teal font-bold pt-1">2.</span>
            <div>
              <p className="text-navy font-medium mb-1">
                Tunsisa, B., & Demissie, D. (2024).
              </p>
              <p className="text-slate-700">
                Assessing the Students' Usability of e-Learning Management System: Case in Hawassa University, Ethiopia. 
                <span className="italic"> International Journal of Computer Games Technology, 2024</span>, 2378236.
                <a href="https://doi.org/10.1155/2024/2378236" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">https://doi.org/10.1155/2024/2378236</a>
              </p>
            </div>
          </li>
          
          <li className="flex gap-4">
            <span className="text-teal font-bold pt-1">3.</span>
            <div>
              <p className="text-navy font-medium mb-1">Abuhlfaia, K., & de Quincey, E. (2018).</p>
              <p className="text-slate-500 text-sm flex items-center gap-1">
                <Quote size={12} /> Cited in original presentation (Incomplete bibliographic details pending verification).
              </p>
            </div>
          </li>
          
          <li className="flex gap-4">
            <span className="text-teal font-bold pt-1">4.</span>
            <div>
              <p className="text-navy font-medium mb-1">Lu, Y., et al. (2022).</p>
              <p className="text-slate-500 text-sm flex items-center gap-1">
                <Quote size={12} /> Cited in original presentation (Incomplete bibliographic details pending verification).
              </p>
            </div>
          </li>
          
          <li className="flex gap-4">
            <span className="text-teal font-bold pt-1">5.</span>
            <div>
              <p className="text-navy font-medium mb-1">Gopal, R. (2024).</p>
              <p className="text-slate-500 text-sm flex items-center gap-1">
                <Quote size={12} /> Cited in original presentation (Incomplete bibliographic details pending verification).
              </p>
            </div>
          </li>
          
          <li className="flex gap-4">
            <span className="text-teal font-bold pt-1">6.</span>
            <div>
              <p className="text-navy font-medium mb-1">PSG College of Technology.</p>
              <p className="text-slate-700">E-Campus Student Portal Interface.</p>
              <p className="text-slate-500 text-sm flex items-center gap-1">
                <Quote size={12} /> Referenced as the primary subject for HCI theoretical evaluation.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
