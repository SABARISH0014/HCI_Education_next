"use client"

import { useState, useEffect } from "react"
import { MonitorPlay, Info, AlertTriangle, Presentation as PresentationIcon, Settings, Eye, Lock, ThumbsUp, ThumbsDown } from "lucide-react"
import DemoLogin from "./DemoLogin"
import DemoDashboard from "./DemoDashboard"
import { hciPrinciples } from "@/data/principles"

export default function DemoApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [analysisMode, setAnalysisMode] = useState(false)
  const [presentationMode, setPresentationMode] = useState(false)
  const [designMode, setDesignMode] = useState<'GOOD' | 'POOR'>('GOOD')
  const [activePrinciple, setActivePrinciple] = useState<string | null>(null)
  
  const [presentationStep, setPresentationStep] = useState(0)
  
  const presentationSteps = [
    { title: "Introduction", desc: "Welcome to the simulated E-Campus portal.", mode: "GOOD", principle: null },
    { title: "Good Design: Login", desc: "A correctly designed login interface with clear labels and contrast.", principle: "accessibility", mode: "GOOD" },
    { title: "Visibility & Feedback", desc: "The system provides clear feedback upon interaction.", principle: "visibility", mode: "GOOD" },
    { title: "Error Prevention", desc: "The form validates data before submission.", principle: "error-prevention", mode: "GOOD" },
    { title: "Switch to Poor Design", desc: "Now let's see the same interface with HCI principles ignored.", mode: "POOR", principle: null },
    { title: "Poor Design Demo", desc: "Observe the lack of feedback, poor contrast, and missing validation.", principle: null, mode: "POOR" },
    { title: "Analysis of Issues", desc: "Analysis Mode reveals the specific violations.", principle: "error-prevention", mode: "POOR" },
    { title: "Back to Good Design", desc: "Returning to Good Design highlights the improvements.", principle: "feedback", mode: "GOOD" }
  ]

  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  const applyStep = (stepIndex: number) => {
    const step = presentationSteps[stepIndex]
    if (step.mode) setDesignMode(step.mode as 'GOOD' | 'POOR')
    if (step.principle) {
      setAnalysisMode(true)
      setActivePrinciple(step.principle)
    } else {
      if (stepIndex > 0) setAnalysisMode(true) // Keep it on for demo unless specified
      else setAnalysisMode(false)
      setActivePrinciple(null)
    }
  }

  const handleNextStep = () => {
    if (presentationStep < presentationSteps.length - 1) {
      const nextStep = presentationStep + 1
      setPresentationStep(nextStep)
      applyStep(nextStep)
    }
  }

  const handlePrevStep = () => {
    if (presentationStep > 0) {
      const prevStep = presentationStep - 1
      setPresentationStep(prevStep)
      applyStep(prevStep)
    }
  }
  
  useEffect(() => {
    if (presentationMode) {
      applyStep(presentationStep)
    } else {
      setAnalysisMode(false)
      setActivePrinciple(null)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [presentationMode])

  return (
    <div className="flex flex-col xl:flex-row gap-8 w-full max-w-[1400px] mx-auto px-2">
      {/* Main Demo Area */}
      <div className={`flex-grow rounded-3xl overflow-hidden border shadow-2xl bg-slate-50 relative min-h-[750px] flex flex-col transition-all duration-500 ${analysisMode ? 'border-teal ring-4 ring-teal/20 shadow-teal-500/20' : 'border-slate-300 shadow-slate-300/30'}`}>
        
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
            <div className={`font-bold px-3 py-1 flex items-center gap-1.5 rounded-md shadow-sm border text-[10px] tracking-wider transition-colors duration-300 ${designMode === 'GOOD' ? 'bg-emerald-100 border-emerald-200 text-emerald-800' : 'bg-rose-100 border-rose-200 text-rose-800'}`}>
              <AlertTriangle size={12} /> {designMode === 'GOOD' ? 'GOOD DESIGN' : 'POOR DESIGN'}
            </div>
          </div>
        </div>

        {/* The Application Area */}
        <div className={`relative flex-grow flex items-center justify-center p-4 md:p-8 overflow-hidden ${presentationMode ? 'scale-[1.02] transform origin-top transition-transform duration-500' : 'transition-transform duration-500'} ${designMode === 'GOOD' ? 'bg-gradient-to-br from-slate-100 to-slate-200' : 'bg-zinc-200'}`}>
          {isLoggedIn ? (
            <DemoDashboard 
              onLogout={handleLogout} 
              analysisMode={analysisMode} 
              activePrinciple={activePrinciple}
              setActivePrinciple={setActivePrinciple}
              designMode={designMode}
            />
          ) : (
            <DemoLogin 
              onLoginSuccess={handleLoginSuccess}
              analysisMode={analysisMode}
              activePrinciple={activePrinciple}
              setActivePrinciple={setActivePrinciple}
              designMode={designMode}
            />
          )}
        </div>
      </div>

      {/* Control Panel */}
      <div className="w-full xl:w-[450px] flex flex-col gap-4">
        
        {/* Presentation Controls */}
        {presentationMode && (
          <div className="bg-purple-950 p-5 rounded-xl border border-purple-900/50 shadow-sm animate-in fade-in slide-in-from-top-4">
            <h3 className="font-bold text-purple-300 mb-4 flex items-center gap-2">
              <PresentationIcon size={18} /> Guided Walkthrough
            </h3>
            
            <div className="bg-slate-900/80 p-4 rounded-lg border border-purple-900/50 mb-5 shadow-sm">
              <div className="text-xs font-bold text-purple-400 mb-1 uppercase tracking-wider">
                Step {presentationStep + 1} of {presentationSteps.length}
              </div>
              <h4 className="font-bold text-slate-100 mb-1 text-lg">{presentationSteps[presentationStep].title}</h4>
              <p className="text-sm text-slate-300 leading-relaxed">{presentationSteps[presentationStep].desc}</p>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={handlePrevStep}
                disabled={presentationStep === 0}
                className="flex-1 py-3 px-4 rounded-lg font-bold text-sm border border-purple-800 text-purple-300 bg-slate-900 hover:bg-purple-900/40 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <button 
                onClick={handleNextStep}
                disabled={presentationStep === presentationSteps.length - 1}
                className="flex-1 py-3 px-4 rounded-lg font-bold text-sm bg-purple-600 text-white hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {/* Mode Toggles */}
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg">
          <h3 className="font-bold text-white mb-5 flex items-center gap-2">
            <Settings size={18} className="text-teal-400" /> Interaction Controls
          </h3>
          
          <div className="space-y-4">
            {/* Design Mode Toggle */}
            <div className="flex bg-slate-800 rounded-lg p-1.5 border border-slate-700">
              <button
                onClick={() => setDesignMode('GOOD')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-md text-sm font-bold transition-all ${designMode === 'GOOD' ? 'bg-emerald-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                <ThumbsUp size={16} /> Good Design
              </button>
              <button
                onClick={() => setDesignMode('POOR')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-md text-sm font-bold transition-all ${designMode === 'POOR' ? 'bg-rose-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                <ThumbsDown size={16} /> Poor Design
              </button>
            </div>

            <label className="flex items-center justify-between p-4 rounded-lg border border-slate-800 cursor-pointer transition-colors hover:bg-slate-800/50">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-md ${analysisMode ? 'bg-teal text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                  <Eye size={18} />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-200">HCI Analysis Mode</div>
                  <div className="text-xs text-slate-400 mt-0.5">Highlight applied principles</div>
                </div>
              </div>
              <div className={`w-12 h-6 rounded-full relative transition-colors ${analysisMode ? 'bg-teal' : 'bg-slate-600'}`}>
                <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-all ${analysisMode ? 'left-6.5 translate-x-[22px]' : 'left-0.5'}`}></div>
              </div>
              <input type="checkbox" className="hidden" checked={analysisMode} onChange={(e) => setAnalysisMode(e.target.checked)} />
            </label>

            <label className="flex items-center justify-between p-4 rounded-lg border border-slate-800 cursor-pointer transition-colors hover:bg-slate-800/50">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-md ${presentationMode ? 'bg-purple-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                  <MonitorPlay size={18} />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-200">Classroom Presentation</div>
                  <div className="text-xs text-slate-400 mt-0.5">Guided step-by-step tour</div>
                </div>
              </div>
              <div className={`w-12 h-6 rounded-full relative transition-colors ${presentationMode ? 'bg-purple-500' : 'bg-slate-600'}`}>
                <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-all ${presentationMode ? 'left-6.5 translate-x-[22px]' : 'left-0.5'}`}></div>
              </div>
              <input type="checkbox" className="hidden" checked={presentationMode} onChange={(e) => setPresentationMode(e.target.checked)} />
            </label>
          </div>
        </div>

        {/* Principles Explorer / Analysis Panel */}
        {analysisMode && (
          <div className="bg-slate-900 p-6 rounded-xl border border-teal-900/50 shadow-lg flex-grow flex flex-col min-h-[300px]">
            <h3 className="font-bold text-teal-400 mb-5 flex items-center gap-2 text-lg">
              <Info size={20} /> Analysis Panel
            </h3>
            
            {!activePrinciple ? (
              <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
                <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-lg mb-6">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <strong>Interactive Markers:</strong> Click any numbered marker on the interface to see a detailed HCI analysis of that specific element, or select a principle from the list below.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  {hciPrinciples.map(principle => (
                    <button
                      key={principle.id}
                      onClick={() => setActivePrinciple(principle.id)}
                      className="text-left p-4 rounded-lg border border-slate-700 bg-slate-800 hover:border-teal/50 transition-colors shadow-sm"
                    >
                      <div className="font-bold text-sm text-slate-200 mb-1">{principle.name}</div>
                      <div className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{principle.definition}</div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-right-4 flex flex-col h-full">
                <button 
                  onClick={() => setActivePrinciple(null)}
                  className="text-teal-400 text-xs font-bold uppercase tracking-wider hover:text-teal-300 mb-6 text-left flex items-center gap-1"
                >
                  ← Return to all principles
                </button>
                
                {(() => {
                  const p = hciPrinciples.find(x => x.id === activePrinciple)
                  if (!p) return null;
                  
                  const isGood = designMode === 'GOOD'
                  const statusText = isGood ? p.status?.good : p.status?.poor
                  const statusColor = isGood ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' : 'text-rose-400 bg-rose-400/10 border-rose-400/20'
                  
                  return (
                    <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
                      <div>
                        <h3 className="font-bold text-white text-2xl mb-3">{p.name}</h3>
                        <div className={`inline-block px-3 py-1.5 rounded border text-xs font-bold tracking-wider mb-5 shadow-sm ${statusColor}`}>
                          {statusText}
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">{p.definition}</p>
                      </div>
                      
                      <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 shadow-inner">
                        <h4 className="text-white font-bold text-sm mb-2 uppercase tracking-widest text-xs">Explanation</h4>
                        <p className="text-slate-400 text-sm mb-5 leading-relaxed">{isGood ? p.explanation?.good : p.explanation?.poor}</p>
                        
                        <h4 className="text-white font-bold text-sm mb-2 uppercase tracking-widest text-xs">{isGood ? 'User Benefit' : 'User Impact'}</h4>
                        <p className="text-slate-400 text-sm mb-5 leading-relaxed">{isGood ? p.userImpact?.good : p.userImpact?.poor}</p>
                        
                        {!isGood && p.suggestedImprovement && (
                          <div className="bg-teal-900/20 p-4 rounded-lg border border-teal-900/50 mt-2">
                            <h4 className="text-teal-400 font-bold text-sm mb-2 flex items-center gap-2">
                              <ThumbsUp size={16} /> Suggested Improvement
                            </h4>
                            <p className="text-teal-100/70 text-sm leading-relaxed">{p.suggestedImprovement}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })()}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
