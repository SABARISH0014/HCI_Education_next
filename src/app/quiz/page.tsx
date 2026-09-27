import Quiz from "@/components/Quiz"
import { CheckSquare } from "lucide-react"

export default function QuizPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4 flex items-center justify-center gap-3">
          <CheckSquare className="text-blue-600" size={36} />
          HCI in Education — Knowledge Check
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Test your understanding of human-computer interaction, usability, and educational technology design.
        </p>
      </div>
      
      <Quiz />
    </div>
  )
}
