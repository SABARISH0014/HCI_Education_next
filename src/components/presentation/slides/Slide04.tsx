export default function Slide04() {
  const principles = [
    { title: "Visibility", desc: "Key actions must be immediately obvious. Users shouldn't have to search for the login button." },
    { title: "Feedback", desc: "The system must acknowledge user actions (e.g., loading spinners, success messages)." },
    { title: "Error Prevention", desc: "Design to prevent mistakes before they happen (e.g., disabling submit buttons on incomplete forms)." },
    { title: "Error Recovery", desc: "When errors occur, provide clear, simple paths to recover (e.g., Forgot Password)." },
    { title: "Consistency", desc: "Use the same visual language throughout the application to leverage the user's prior knowledge." },
    { title: "Accessibility", desc: "Ensure the interface is usable by people with disabilities (e.g., keyboard navigation, high contrast)." }
  ]

  return (
    <div className="flex flex-col h-full">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-navy">Core HCI Principles</h1>
        <div className="w-16 h-1 bg-teal mt-4"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow content-start">
        {principles.map((p, i) => (
          <div key={i} className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl hover:border-teal transition-colors">
            <div className="flex-shrink-0 w-10 h-10 bg-teal/10 text-teal font-bold rounded-lg flex items-center justify-center">
              {i + 1}
            </div>
            <div>
              <h3 className="font-bold text-navy text-lg mb-1">{p.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
