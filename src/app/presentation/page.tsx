import PresentationViewer from "@/components/presentation/PresentationViewer"

export default function PresentationPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <PresentationViewer />
      </div>
    </div>
  )
}
