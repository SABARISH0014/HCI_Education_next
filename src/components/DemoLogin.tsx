"use client"

import { useState } from "react"
import { Eye, EyeOff, Lock, User, AlertCircle, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

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

  // Real-time inline validation
  const rollNoValid = rollNo === "DEMO001"
  const passwordValid = password === "Demo@123"
  const isFormValid = rollNoValid && passwordValid && termsAccepted

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
    return "transition-all duration-300"
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
        <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-lg text-sm mb-6">
          <p className="font-semibold mb-2 flex items-center gap-1.5">
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
              <span>Roll Number <span className="text-slate-500 font-normal text-xs ml-1">(Format: DEMO001)</span></span>
              <span className="text-rose-500" title="Required">*</span>
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-navy transition-colors">
                <User size={18} />
              </div>
              <input
                id="rollNo"
                type="text"
                required
                aria-required="true"
                aria-invalid={!!error || (rollNo.length > 0 && !rollNoValid)}
                aria-describedby={error ? "login-error" : undefined}
                value={rollNo}
                onChange={(e) => {
                  setRollNo(e.target.value.toUpperCase());
                  if (error) setError("");
                }}
                className={`w-full pl-10 pr-10 py-3 bg-white border rounded-xl transition-all text-slate-900 focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy ${
                  error ? 'border-rose-500 bg-rose-50 animate-shake' : 
                  rollNoValid ? 'border-success bg-success/5' : 
                  'border-slate-300'
                }`}
                placeholder="Enter Roll Number"
                aria-label="Roll Number"
              />
              {rollNoValid && (
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <CheckCircle2 size={20} className="text-success animate-in zoom-in" />
                </div>
              )}
            </div>
          </div>

          {/* Password Field */}
          <div className={`space-y-2 ${getHighlightClass('visibility')}`}>
            <label htmlFor="password" className={`text-sm font-bold text-navy flex justify-between ml-1 ${getHighlightClass('accessibility')}`}>
              <span>Password <span className="text-slate-500 font-normal text-xs ml-1">(Min 8 chars, 1 special)</span></span>
              <span className="text-rose-500" title="Required">*</span>
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-navy transition-colors">
                <Lock size={18} />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                aria-required="true"
                aria-invalid={!!error || (password.length > 0 && !passwordValid)}
                aria-describedby={error ? "login-error" : undefined}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError("");
                }}
                className={`w-full pl-10 pr-12 py-3 bg-white border rounded-xl transition-all text-slate-900 focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy ${
                  error ? 'border-rose-500 bg-rose-50 animate-shake' : 
                  passwordValid ? 'border-success bg-success/5' : 
                  'border-slate-300'
                }`}
                placeholder="Enter Password"
                aria-label="Password"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-2">
                {passwordValid && (
                  <CheckCircle2 size={20} className="text-success animate-in zoom-in pointer-events-none" />
                )}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1 text-slate-400 hover:text-navy transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-navy rounded-md"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer min-h-[44px] py-2">
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-slate-300 text-navy focus:ring-navy w-5 h-5 cursor-pointer" 
              />
              <span className="text-slate-600 select-none">Remember me</span>
            </label>
            
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setError("Password recovery flow initiated (Simulation).") }}
              className={`text-teal hover:text-teal-light font-medium transition-colors flex items-center min-h-[44px] py-2 px-1 ${getHighlightClass('error-recovery')}`}
            >
              Forgot Password?
            </a>
          </div>

          {/* Terms & Conditions (For Error Prevention demo) */}
          <div className={`pt-2 ${getHighlightClass('error-prevention')}`}>
            <label className={`flex items-start gap-2 cursor-pointer p-2 min-h-[44px] -mx-2 rounded hover:bg-slate-50 transition-colors ${!termsAccepted && rollNo && password ? 'bg-rose-50 text-rose-700' : ''}`}>
              <input 
                type="checkbox" 
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="rounded border-slate-300 text-navy focus:ring-navy w-5 h-5 mt-0.5 cursor-pointer shrink-0" 
              />
              <span className="text-xs text-slate-600 select-none">
                I agree to the <a href="#" className="text-teal hover:underline" onClick={e=>e.preventDefault()}>Terms and Conditions</a> and authorize this demo login.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className={`pt-2 ${getHighlightClass('error-prevention')}`}>
            <motion.button
              whileTap={isFormValid && !isSubmitting ? { scale: 0.98 } : {}}
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`w-full py-4 min-h-[56px] rounded-xl font-bold text-white transition-all flex justify-center items-center gap-3
                ${isFormValid 
                  ? 'bg-navy hover:bg-navy-light shadow-md hover:shadow-lg hover:-translate-y-0.5' 
                  : 'bg-slate-300 text-slate-500 cursor-not-allowed'}
                ${isSubmitting ? 'opacity-90 cursor-wait' : ''}
              `}
            >
              {isSubmitting ? (
                <>
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2.5 h-2.5 bg-white rounded-full"
                        animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                  <span>Authenticating...</span>
                </>
              ) : (
                "Secure Login"
              )}
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  )
}
