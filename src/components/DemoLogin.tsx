"use client"

import { useState } from "react"
import { Eye, EyeOff, Lock, User, AlertCircle, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

interface DemoLoginProps {
  onLoginSuccess: () => void;
  analysisMode: boolean;
  activePrinciple: string | null;
  setActivePrinciple: (id: string) => void;
  designMode: 'GOOD' | 'POOR';
}

export default function DemoLogin({ onLoginSuccess, analysisMode, activePrinciple, setActivePrinciple, designMode }: DemoLoginProps) {
  const [rollNo, setRollNo] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isGood = designMode === 'GOOD'

  const rollNoValid = rollNo === "DEMO001"
  const passwordValid = password === "Demo@123"
  const isFormValid = isGood ? (rollNoValid && passwordValid && termsAccepted) : true;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isGood && !isFormValid) return;
    
    if (isGood) {
      setIsSubmitting(true)
      setError("")
      
      setTimeout(() => {
        setIsSubmitting(false)
        if (rollNo === "DEMO001" && password === "Demo@123") {
          onLoginSuccess()
        } else {
          setError("Invalid Roll Number or Password. Please check your credentials and try again.")
        }
      }, 1000)
    } else {
      if (rollNo === "DEMO001" && password === "Demo@123") {
        setTimeout(() => {
          onLoginSuccess()
        }, 1200) // Silent delay, no UI update
      } else {
        // Silently fail to demonstrate bad design
      }
    }
  }

  const HighlightMarker = ({ principleId, num }: { principleId: string, num: string }) => {
    if (!analysisMode) return null;
    const isActive = activePrinciple === principleId;
    const isInactive = activePrinciple !== null && !isActive;
    const colorClass = isGood ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
    
    return (
      <button 
        type="button"
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActivePrinciple(isActive ? "" : principleId) }}
        className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-xl z-[60] transition-transform ${isActive ? 'scale-125 ring-4 ring-white' : 'hover:scale-110'} ${isInactive ? 'opacity-30' : 'opacity-100'} ${colorClass}`}
      >
        {num}
      </button>
    )
  }

  const getHighlightClass = (principleId: string) => {
    if (!analysisMode) return "relative"
    if (activePrinciple === principleId) {
      return `relative z-10 ring-4 ${isGood ? 'ring-emerald-400 bg-emerald-50/30' : 'ring-rose-400 bg-rose-50/30'} ring-offset-4 transition-all duration-300 rounded-xl`
    }
    if (activePrinciple === null) {
      return `relative transition-all duration-300 rounded-xl border-2 border-dashed ${isGood ? 'border-emerald-300 hover:border-emerald-500 hover:bg-emerald-50/50' : 'border-rose-400 hover:border-rose-500 hover:bg-rose-50/50'}`
    }
    return `relative transition-all duration-300 rounded-xl opacity-50`
  }

  return (
    <div className={`w-full max-w-md backdrop-blur-xl rounded-3xl overflow-visible border flex flex-col transition-all duration-700 ${isGood ? 'bg-white shadow-2xl border-slate-200' : 'bg-zinc-100 shadow-none border-zinc-300'}`}>
      
      {/* Header */}
      <div className={`relative p-8 text-center rounded-t-3xl ${isGood ? 'bg-gradient-to-br from-navy to-navy-light text-white' : 'bg-zinc-300 text-zinc-600'} ${getHighlightClass('real-world')}`}>
        <HighlightMarker principleId="real-world" num="1" />
        {isGood ? (
          <>
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-white/20 shadow-inner backdrop-blur-sm relative z-10">
              <span className="text-teal-300 font-bold text-2xl">PSG</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight relative z-10">Student Profile</h2>
            <p className="text-teal-200/80 text-xs font-bold tracking-widest uppercase mt-2 relative z-10">Access your attendance & grades</p>
          </>
        ) : (
          <>
            <h2 className="text-xl font-mono mb-2">Auth_System_V2</h2>
            <p className="text-[10px] uppercase font-sans">Node_Access_Gateway</p>
          </>
        )}
      </div>

      {/* Form Area */}
      <div className={`p-8 flex-grow ${!isGood && 'pb-12'}`}>
        <div className={`bg-amber-50 border border-amber-200 text-amber-800 p-3 rounded-lg text-xs font-mono text-center shadow-inner ${isGood ? 'mb-8' : 'mb-4'}`}>
          Demo Login: DEMO001 / Demo@123
        </div>

        {/* Feedback Area */}
        <div className={`mb-4 min-h-[10px] ${getHighlightClass('feedback')}`}>
          <HighlightMarker principleId="feedback" num="2" />
          {isGood && error ? (
            <div role="alert" className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-start gap-3 shadow-sm animate-in slide-in-from-top-2 mt-2">
              <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
              <p className="font-medium leading-relaxed">{error}</p>
            </div>
          ) : (
            <div className="h-2 w-full"></div>
          )}
        </div>

        <form onSubmit={handleSubmit} className={isGood ? "space-y-6" : "space-y-3"}>
          {/* Roll Number */}
          <div className={getHighlightClass('accessibility')}>
            <HighlightMarker principleId="accessibility" num="3" />
            {isGood ? (
              <label htmlFor="rollNo" className="text-sm font-bold text-navy flex justify-between ml-1 mb-2">
                <span>Roll Number</span>
                <span className="text-rose-500">*</span>
              </label>
            ) : (
              <label htmlFor="rollNo" className="text-[9px] text-zinc-400 block mb-1 font-mono">IDENTIFIER_KEY_INPUT</label>
            )}
            <div className="relative group">
              {isGood && (
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <User size={18} />
                </div>
              )}
              <input
                id="rollNo"
                type="text"
                value={rollNo}
                onChange={(e) => { setRollNo(e.target.value.toUpperCase()); setError(""); }}
                className={isGood 
                  ? `w-full pl-11 pr-11 py-3.5 bg-slate-50 border rounded-xl transition-all text-slate-900 focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/20 font-medium ${error ? 'border-rose-500' : 'border-slate-300'}`
                  : `w-full px-2 py-1.5 text-[10px] bg-zinc-200 border-b border-zinc-400 text-zinc-500 outline-none`}
                placeholder={isGood ? "Enter Roll Number" : ""}
                tabIndex={isGood ? 0 : -1}
              />
              {isGood && rollNoValid && (
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <CheckCircle2 size={20} className="text-emerald-500" />
                </div>
              )}
            </div>
          </div>

          {/* Password */}
          <div className={getHighlightClass('error-prevention')}>
            <HighlightMarker principleId="error-prevention" num="4" />
            {isGood ? (
              <label htmlFor="password" className="text-sm font-bold text-navy flex justify-between ml-1 mb-2 mt-2">
                <span>Secure Password</span>
                <span className="text-rose-500">*</span>
              </label>
            ) : (
              <label htmlFor="password" className="text-[9px] text-zinc-400 block mb-1 mt-4 font-mono">AUTH_TOKEN_HASH</label>
            )}
            <div className="relative group">
              {isGood && (
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Lock size={18} />
                </div>
              )}
              <input
                id="password"
                type={isGood && showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                className={isGood 
                  ? `w-full pl-11 pr-12 py-3.5 bg-slate-50 border rounded-xl transition-all text-slate-900 focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/20 font-medium ${error ? 'border-rose-500' : 'border-slate-300'}`
                  : `w-full px-2 py-1.5 text-[10px] bg-zinc-200 border-b border-zinc-400 text-zinc-500 outline-none`}
                placeholder={isGood ? "Enter Password" : ""}
                tabIndex={isGood ? 0 : -1}
              />
              {isGood && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="p-1.5 text-slate-400 hover:text-navy transition-colors rounded-md hover:bg-slate-200"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              )}
            </div>
          </div>

          {isGood && (
            <div className="pt-2 flex items-center justify-between flex-wrap gap-2">
              <label className="flex items-center gap-3 cursor-pointer p-2 hover:bg-slate-50 rounded-xl border border-transparent hover:border-slate-200 transition-colors">
                <input 
                  type="checkbox" 
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="rounded border-slate-300 text-navy w-5 h-5 focus:ring-navy" 
                />
                <span className="text-sm font-medium text-slate-600">I agree to the Portal Terms</span>
              </label>
              
              <div className={getHighlightClass('error-recovery')}>
                <HighlightMarker principleId="error-recovery" num="6" />
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); setError("Password recovery flow initiated (Simulation).") }}
                  className="text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors px-2 py-1 inline-block"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
          )}

          {/* Submit */}
          <div className={`pt-4 ${getHighlightClass('visibility')}`}>
            <HighlightMarker principleId="visibility" num="5" />
            <motion.button
              whileTap={isGood && isFormValid && !isSubmitting ? { scale: 0.98 } : {}}
              type="submit"
              disabled={isGood && (!isFormValid || isSubmitting)}
              className={isGood 
                ? `w-full py-4 rounded-xl font-bold text-white transition-all flex justify-center items-center gap-3 shadow-lg ${isFormValid ? 'bg-navy hover:bg-navy-light hover:shadow-xl hover:-translate-y-0.5' : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'}`
                : `w-full py-2 bg-zinc-400 text-zinc-100 text-[10px] mt-6 tracking-widest font-mono rounded-sm`}
            >
              {isGood && isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Authenticating...
                </>
              ) : (
                isGood ? "Secure Login" : "EXECUTE_AUTH"
              )}
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  )
}
