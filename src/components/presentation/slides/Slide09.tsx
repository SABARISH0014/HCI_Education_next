export default function Slide09() {
  return (
    <div className="flex flex-col h-full bg-white justify-center">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          From E-Campus to <br/> Human-Centred Education
        </h1>
        
        <div className="w-24 h-2 bg-slate-900 mx-auto"></div>
        
        <div className="space-y-8 text-2xl text-slate-600 font-medium leading-relaxed">
          <p>
            Our analysis of the PSG Tech E-Campus demonstrates a fundamental truth: <span className="text-slate-900 font-black">the interface is the classroom.</span>
          </p>
          <p>
            By applying HCI principles—Visibility, Feedback, Error Prevention, and Accessibility—we don't just make software easier to use; we remove the friction between the student and their education.
          </p>
          <p className="text-3xl font-bold text-slate-900 pt-8 mt-8 border-t border-slate-200">
            Good design empowers students to focus on learning, rather than struggling with the tools of learning.
          </p>
        </div>
        
        <div className="mt-16">
          <span className="inline-block px-6 py-2 border-2 border-slate-900 text-slate-900 text-sm font-bold tracking-widest uppercase">
            End of Core Presentation
          </span>
        </div>
      </div>
    </div>
  )
}
