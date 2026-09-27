import { HeartHandshake } from "lucide-react"

export default function Slide12() {
  return (
    <div className="flex flex-col h-full justify-center items-center text-center px-4">
      <div className="w-24 h-24 bg-teal/10 text-teal rounded-full flex items-center justify-center mb-8">
        <HeartHandshake size={48} />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8">
        From E-Campus to <br/> Human-Centred Education
      </h1>
      
      <div className="max-w-2xl mx-auto space-y-6 text-lg text-slate-600">
        <p>
          Our analysis of the PSG Tech E-Campus demonstrates a fundamental truth: <strong>the interface is the classroom.</strong>
        </p>
        <p>
          By applying HCI principles—Visibility, Feedback, Error Prevention, and Accessibility—we don't just make software easier to use; we remove the friction between the student and their education.
        </p>
        <p className="font-medium text-navy text-xl pt-6 border-t border-slate-200">
          Good design empowers students to focus on learning, rather than struggling with the tools of learning.
        </p>
      </div>

      <div className="mt-12 inline-block px-6 py-2 rounded-full bg-slate-100 text-slate-500 text-sm font-semibold tracking-widest uppercase">
        End of Core Presentation
      </div>
    </div>
  )
}
