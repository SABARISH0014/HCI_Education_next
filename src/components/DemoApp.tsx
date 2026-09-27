"use client"

import { useState } from "react"
import { MonitorPlay, Info, AlertTriangle, Presentation as PresentationIcon, Settings, Eye, CheckCircle2, Lock } from "lucide-react"
import DemoLogin from "./DemoLogin"
import DemoDashboard from "./DemoDashboard"
import { hciPrinciples } from "@/data/principles"

export default function DemoApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [analysisMode, setAnalysisMode] = useState(false)
  const [presentationMode, setPresentationMode] = useState(false)
  const [activePrinciple, setActivePrinciple] = useState<string | null>(null)
  
  // For presentation guided steps
  const [presentationStep, setPresentationStep] = useState(0)
  
  const presentationSteps = [
    { title: "Introduction", desc: "Welcome to the E-Campus simulated login screen." },
    { title: "Visibility", desc: "Notice how the input fields and primary actions are clearly identifiable.", principle: "visibility" },
    { title: "Error Prevention", desc: "The login button is disabled until required fields are filled.", principle: "error-prevention" },
    { title: "Error Recovery", desc: "A 'Forgot Password' link provides an escape route.", principle: "error-recovery" },
    { title: "Feedback", desc: "We'll demonstrate feedback via error/success messages upon interaction.", principle: "feedback" },
    { title: "Dashboard Learnability", desc: "Let's log in and see how a consistent dashboard helps learnability.", principle: "learnability" },
    { title: "Accessibility", desc: "Semantic labels and focus states make this usable for everyone.", principle: "accessibility" }
  ]

  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
    if (presentationMode && presentationStep === 5) {
      setPresentationStep(6)
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  const handleNextStep = () => {
    if (presentationStep < presentationSteps.length - 1) {
      const nextStep = presentationStep + 1;
      setPresentationStep(nextStep)
      
      if (presentationSteps[nextStep].principle) {
        setAnalysisMode(true)
        setActivePrinciple(presentationSteps[nextStep].principle || null)
      } else {
        setAnalysisMode(false)
        setActivePrinciple(null)
      }
    }
  }

  const handlePrevStep = () => {
    if (presentationStep > 0) {
      const prevStep = presentationStep - 1;
      setPresentationStep(prevStep)
      
      if (presentationSteps[prevStep].principle) {
        setAnalysisMode(true)
        setActivePrinciple(presentationSteps[prevStep].principle || null)
      } else {
        setAnalysisMode(false)
        setActivePrinciple(null)
      }
    }
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto px-2">
      {/* Main Demo Area */}
      <div className={`flex-grow rounded-3xl overflow-hidden border shadow-2xl bg-slate-50 relative min-h-[650px] flex flex-col transition-all duration-500 ${analysisMode ? 'border-teal ring-4 ring-teal/20 shadow-teal-500/20' : 'border-slate-300 shadow-slate-300/30'}`}>
        
        {/* Modern Browser Mockup Header */}
        <div className="bg-slate-100 px-4 py-3 flex items-center justify-between text-xs border-b border-slate-300 select-none">
          <div className="flex gap-2 w-1/4">
            <div className="w-3.5 h-3.5 rounded-full bg-rose-400 border border-rose-500 shadow-inner"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-amber-400 border border-amber-500 shadow-inner"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 border border-emerald-500 shadow-inner"></div>
          </div>
          
          <div className="bg-white rounded-xl px-4 py-1.5 w-1/2 max-w-md flex items-center justify-center gap-2 border border-slate-200 shadow-inner text-slate-600 font-medium font-sans">
            <Lock size={12} className="text-slate-400" />
            ecampus.psgtech.edu
          </div>
          
          <div className="w-1/4 flex justify-end">
            <div className="text-amber-600 font-bold px-2 py-0.5 flex items-center gap-1 bg-amber-100 rounded-md shadow-sm border border-amber-200 text-[10px] tracking-wider">
              <AlertTriangle size={12} /> SIMULATION
            </div>
          </div>
        </div>

        {/* The Application Area */}
        <div className={`relative flex-grow flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden ${presentationMode ? 'scale-[1.02] transform origin-top transition-transform duration-500' : 'transition-transform duration-500'}`}>
          {/* Spotlight Overlay */}
          <div 
            className={`absolute inset-0 z-[5] pointer-events-none transition-all duration-500 ${analysisMode && activePrinciple ? 'opacity-100' : 'opacity-0'}`} 
            aria-hidden="true"
          />
          
          {isLoggedIn ? (
            <DemoDashboard 
              onLogout={handleLogout} 
              analysisMode={analysisMode} 
              activePrinciple={activePrinciple} 
            />
          ) : (
            <DemoLogin 
              onLoginSuccess={handleLoginSuccess}
              analysisMode={analysisMode}
              activePrinciple={activePrinciple}
            />
          )}
        </div>
      </div>

      {/* Control Panel */}
      <div className="w-full lg:w-96 flex flex-col gap-4">
        {/* Mode Toggles */}
        <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 shadow-sm backdrop-blur-sm">
          <h3 className="font-bold text-white mb-4 flex items-center gap-2">
            <Settings size={18} className="text-teal-400" /> Demo Controls
          </h3>
          
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-lg border border-slate-800 cursor-pointer transition-colors hover:bg-slate-800/50">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-md ${analysisMode ? 'bg-teal text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                  <Eye size={18} />
                </div>
                <div>
                  <div className="font-semibold text-sm text-slate-200">HCI Analysis Mode</div>
                  <div className="text-xs text-slate-400">Highlight UI principles</div>
                </div>
              </div>
              <div className={`w-10 h-5 rounded-full relative transition-colors ${analysisMode ? 'bg-teal' : 'bg-slate-300'}`}>
                <div className={`w-4 h-4 rounded-full bg-white absolute top-0.5 transition-all ${analysisMode ? 'left-5.5' : 'left-0.5'}`}></div>
              </div>
              <input 
                type="checkbox" 
                className="hidden" 
                checked={analysisMode} 
                onChange={(e) => setAnalysisMode(e.target.checked)} 
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg border border-slate-800 cursor-pointer transition-colors hover:bg-slate-800/50">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-md ${presentationMode ? 'bg-purple-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                  <PresentationIcon size={18} />
                </div>
                <div>
                  <div className="font-semibold text-sm text-slate-200">Presentation Mode</div>
                  <div className="text-xs text-slate-400">Guided step-by-step</div>
                </div>
              </div>
              <div className={`w-10 h-5 rounded-full relative transition-colors ${presentationMode ? 'bg-purple-600' : 'bg-slate-300'}`}>
                <div className={`w-4 h-4 rounded-full bg-white absolute top-0.5 transition-all ${presentationMode ? 'left-5.5' : 'left-0.5'}`}></div>
              </div>
              <input 
                type="checkbox" 
                className="hidden" 
                checked={presentationMode} 
                onChange={(e) => setPresentationMode(e.target.checked)} 
              />
            </label>
          </div>
        </div>

        {/* Presentation Controls */}
        {presentationMode && (
          <div className="bg-purple-950/30 p-5 rounded-xl border border-purple-900/50 shadow-sm animate-in fade-in slide-in-from-top-4">
            <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
              <MonitorPlay size={18} /> Live Presentation
            </h3>
            
            <div className="bg-slate-900/80 p-4 rounded-lg border border-purple-900/50 mb-4 shadow-sm">
              <div className="text-xs font-bold text-purple-400 mb-1 uppercase tracking-wider">
                Step {presentationStep + 1} of {presentationSteps.length}
              </div>
              <h4 className="font-bold text-slate-100 mb-1">{presentationSteps[presentationStep].title}</h4>
              <p className="text-sm text-slate-300">{presentationSteps[presentationStep].desc}</p>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={handlePrevStep}
                disabled={presentationStep === 0}
                className="flex-1 py-2 px-4 rounded-lg font-medium text-sm border border-purple-800 text-purple-300 bg-slate-900 hover:bg-purple-900/40 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <button 
                onClick={handleNextStep}
                disabled={presentationStep === presentationSteps.length - 1}
                className="flex-1 py-2 px-4 rounded-lg font-medium text-sm bg-purple-600 text-white hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {/* Principles Explorer */}
        {analysisMode && !presentationMode && (
          <div className="bg-slate-900/50 p-5 rounded-xl border border-teal-900/30 shadow-sm flex-grow flex flex-col backdrop-blur-sm">
            <h3 className="font-bold text-teal-400 mb-4 flex items-center gap-2">
              <Info size={18} /> Explore HCI Principles
            </h3>
            
            <div className="flex flex-col gap-2 flex-grow overflow-y-auto max-h-[400px] pr-1">
              {hciPrinciples.map(principle => (
                <button
                  key={principle.id}
                  onClick={() => setActivePrinciple(principle.id === activePrinciple ? null : principle.id)}
                  className={`text-left p-3 rounded-lg border transition-all ${
                    activePrinciple === principle.id 
                      ? 'bg-teal text-slate-950 border-teal shadow-md' 
                      : 'bg-slate-800 text-slate-200 hover:border-teal/50 hover:bg-slate-800/80 border-slate-700'
                  }`}
                >
                  <div className="font-bold text-sm mb-1">{principle.name}</div>
                  <div className={`text-xs ${activePrinciple === principle.id ? 'text-teal-950' : 'text-slate-400'}`}>
                    {principle.definition}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Active Principle Details */}
        {analysisMode && activePrinciple && (
          <div className="bg-navy p-5 rounded-xl border border-navy-light text-white shadow-lg animate-in fade-in">
            {(() => {
              const p = hciPrinciples.find(x => x.id === activePrinciple)
              if (!p) return null;
              
              return (
                <>
                  <h3 className="font-bold text-teal-light mb-2 text-lg">{p.name}</h3>
                  <div className="space-y-3 text-sm text-slate-300">
                    <div>
                      <span className="font-semibold text-white block mb-1">What it is:</span>
                      {p.definition}
                    </div>
                    <div>
                      <span className="font-semibold text-white block mb-1">Where to look:</span>
                      {p.location}
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                      <span className="font-semibold text-white block mb-1">Why it matters:</span>
                      {p.importance}
                    </div>
                  </div>
                </>
              )
            })()}
          </div>
        )}
      </div>
    </div>
  )
}
