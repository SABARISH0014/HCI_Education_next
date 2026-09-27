import DemoApp from "@/components/DemoApp"
import { MonitorPlay } from "lucide-react"

export default function DemoPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <div className="mb-8 text-center max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4 flex items-center justify-center gap-3">
          <MonitorPlay className="text-teal" size={36} />
          Live HCI Demonstration
        </h1>
        <p className="text-slate-600 text-lg">
          Explore Human-Computer Interaction principles through an interactive simulation of an educational student portal. Enable Analysis Mode to discover design decisions, or use Presentation Mode for a guided walkthrough.
        </p>
      </div>
      
      <DemoApp />
    </div>
  )
}
