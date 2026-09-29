export default function Slide02() {
  const principles = [
    { title: "Visibility", desc: "Make actions immediately obvious." },
    { title: "Feedback", desc: "Acknowledge all user actions." },
    { title: "Error Prevention", desc: "Stop mistakes before happening." },
    { title: "Error Recovery", desc: "Provide clear paths back." },
    { title: "Consistency", desc: "Use uniform visual language." },
    { title: "Accessibility", desc: "Ensure usability for everyone." }
  ]

  return (
    <div className="flex flex-col h-full bg-white">
      <header className="mb-12">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">Foundations & Core Principles</h1>
      </header>

      <div className="flex-grow flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">What is HCI?</h2>
          <ul className="space-y-6 text-xl text-slate-600 font-medium">
            <li className="flex gap-4">
              <span className="text-slate-900 font-black">—</span>
              <span><strong className="text-slate-900">Multidisciplinary field</strong> designing intuitive human-computer interaction.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-900 font-black">—</span>
              <span><strong className="text-slate-900">Core Goal:</strong> Minimize cognitive load and prevent frustration.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-900 font-black">—</span>
              <span><strong className="text-slate-900">Educational Impact:</strong> Poor HCI causes missed deadlines; good HCI makes tech invisible.</span>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 border-l border-slate-200 pl-16 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">The 6 Principles</h2>
          <div className="grid grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <div key={i} className="p-4 border border-slate-200">
                <div className="text-slate-300 font-black text-xl mb-2">0{i + 1}</div>
                <h3 className="font-bold text-slate-900 text-lg">{p.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
