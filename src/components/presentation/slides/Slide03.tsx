export default function Slide03() {
  const principles = [
    { title: "Visibility", desc: "Key actions must be immediately obvious. Users shouldn't have to search for the login button." },
    { title: "Feedback", desc: "The system must acknowledge user actions (e.g., loading spinners, success messages)." },
    { title: "Error Prevention", desc: "Design to prevent mistakes before they happen (e.g., disabling submit buttons on incomplete forms)." },
    { title: "Error Recovery", desc: "When errors occur, provide clear, simple paths to recover (e.g., Forgot Password)." },
    { title: "Consistency", desc: "Use the same visual language throughout the application to leverage the user's prior knowledge." },
    { title: "Accessibility", desc: "Ensure the interface is usable by people with disabilities (e.g., keyboard navigation, high contrast)." }
  ]

  return (
    <div className="flex flex-col h-full bg-white">
      <header className="mb-12">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">Core HCI Principles</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-grow content-center">
        {principles.map((p, i) => (
          <div key={i} className="flex flex-col p-8 bg-white border border-slate-200 hover:border-slate-900 transition-colors">
            <div className="text-3xl font-black text-slate-200 mb-6">
              0{i + 1}
            </div>
            <h3 className="font-bold text-slate-900 text-2xl mb-4">{p.title}</h3>
            <p className="text-slate-600 leading-relaxed flex-grow">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
