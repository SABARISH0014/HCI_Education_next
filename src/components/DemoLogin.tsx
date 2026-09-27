"use client"

import { useState } from "react"
import { Eye, EyeOff, Lock, User, AlertCircle, CheckCircle2 } from "lucide-react"

interface DemoLoginProps {
  onLoginSuccess: () => void;
  analysisMode: boolean;
  activePrinciple: string | null;
}

export default function DemoLogin({ onLoginSuccess, analysisMode, activePrinciple }: DemoLoginProps) {
  const [rollNo, setRollNo] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [error, setError] = useState("")
  const [attempts, setAttempts] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isFormValid = rollNo.trim() !== "" && password.trim() !== "" && termsAccepted

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isFormValid) return;
    
    setIsSubmitting(true)
    setError("")
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false)
      
      if (rollNo === "DEMO001" && password === "Demo@123") {
        onLoginSuccess()
      } else {
        setAttempts(prev => prev + 1)
        if (attempts >= 2) {
          setError("Multiple failed attempts detected. Please use the 'Forgot Password' option to recover your account.")
        } else {
          setError("Invalid Roll Number or Password. Please check your credentials and try again.")
        }
      }
    }, 800)
  }

  // HCI Highlight helpers
  const getHighlightClass = (principleId: string) => {
    if (!analysisMode) return ""
    if (activePrinciple === principleId) {
      return "ring-4 ring-teal ring-offset-2 relative z-10 transition-all duration-300"
    }
    if (activePrinciple === null) {
      return "hover:ring-2 hover:ring-teal/50 hover:ring-offset-1 transition-all"
    }
    return "opacity-50 transition-all duration-300"
  }

  return (
    <div className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50 flex flex-col relative animate-in fade-in zoom-in duration-500">
      
      {/* Principle Badges (visible in analysis mode) */}
      {analysisMode && activePrinciple === 'visibility' && (
        <div className="absolute top-3 right-3 bg-teal text-white text-xs font-bold px-3 py-1.5 rounded-lg z-20 shadow-lg flex items-center gap-1.5 animate-pulse">
          <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">1</span>
          Visibility Active
        </div>
      )}

      {/* Header */}
      <div className={`bg-gradient-to-br from-navy to-navy-light p-8 text-center text-white relative ${getHighlightClass('consistency')}`}>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20 shadow-inner backdrop-blur-sm relative z-10">
          <span className="text-teal-300 font-bold text-2xl">PSG</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight relative z-10">E-Campus Portal</h2>
        <p className="text-teal-200/80 text-xs font-medium tracking-widest uppercase mt-1.5 relative z-10">Student Login Demonstration</p>
      </div>

      {/* Form Area */}
      <div className="p-6 md:p-8 flex-grow">
        {/* Demo Credentials Box */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6 text-sm">
          <p className="font-semibold text-amber-800 mb-1 flex items-center gap-1">
            <AlertCircle size={16} /> Demo Credentials:
          </p>
          <div className="grid grid-cols-2 gap-2 font-mono text-amber-900 bg-amber-100/50 p-2 rounded border border-amber-200/50">
            <div>Roll No: <strong>DEMO001</strong></div>
            <div>Password: <strong>Demo@123</strong></div>
          </div>
        </div>

        {/* Feedback Area */}
        <div className={getHighlightClass('feedback')}>
          {error && (
            <div id="login-error" role="alert" className="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-start gap-2 animate-in slide-in-from-top-2">
              <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
              <p>{error}</p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Roll Number Field */}
          <div className={`space-y-2 ${getHighlightClass('visibility')}`}>
            <label htmlFor="rollNo" className={`text-sm font-bold text-navy flex justify-between ml-1 ${getHighlightClass('accessibility')}`}>
              Roll Number
              <span className="text-rose-500" title="Required">*</span>
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-teal-500 transition-colors">
                <User size={18} />
              </div>
              <input
                id="rollNo"
                type="text"
                required
                aria-required="true"
                aria-invalid={!!error}
                aria-describedby={error ? "login-error" : undefined}
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value.toUpperCase())}
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all text-slate-900 font-bold tracking-wide"
                placeholder="Enter Roll Number"
                aria-label="Roll Number"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className={`space-y-2 ${getHighlightClass('visibility')}`}>
            <label htmlFor="password" className={`text-sm font-bold text-navy flex justify-between ml-1 ${getHighlightClass('accessibility')}`}>
              Password
              <span className="text-rose-500" title="Required">*</span>
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-teal-500 transition-colors">
                <Lock size={18} />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                aria-required="true"
                aria-invalid={!!error}
                aria-describedby={error ? "login-error" : undefined}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all text-slate-900 font-bold tracking-wide"
                placeholder="Enter Password"
                aria-label="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-navy transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-slate-300 text-navy focus:ring-navy w-4 h-4 cursor-pointer" 
              />
              <span className="text-slate-600 select-none">Remember me</span>
            </label>
            
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setError("Password recovery flow initiated (Simulation).") }}
              className={`text-teal hover:text-teal-light font-medium transition-colors ${getHighlightClass('error-recovery')}`}
            >
              Forgot Password?
            </a>
          </div>

          {/* Terms & Conditions (For Error Prevention demo) */}
          <div className={`pt-2 ${getHighlightClass('error-prevention')}`}>
            <label className={`flex items-start gap-2 cursor-pointer p-2 -mx-2 rounded hover:bg-slate-50 transition-colors ${!termsAccepted && rollNo && password ? 'bg-rose-50 text-rose-700' : ''}`}>
              <input 
                type="checkbox" 
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="rounded border-slate-300 text-navy focus:ring-navy w-4 h-4 mt-0.5 cursor-pointer" 
              />
              <span className="text-xs text-slate-600 select-none">
                I agree to the <a href="#" className="text-teal hover:underline" onClick={e=>e.preventDefault()}>Terms and Conditions</a> and authorize this demo login.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className={`pt-2 ${getHighlightClass('error-prevention')}`}>
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`w-full py-3 rounded-lg font-bold text-white transition-all flex justify-center items-center gap-2
                ${isFormValid 
                  ? 'bg-navy hover:bg-navy-light shadow-md hover:shadow-lg hover:-translate-y-0.5' 
                  : 'bg-slate-300 text-slate-500 cursor-not-allowed'}
                ${isSubmitting ? 'opacity-80 cursor-wait' : ''}
              `}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Authenticating...
                </>
              ) : (
                "Secure Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
