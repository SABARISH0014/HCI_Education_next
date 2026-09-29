"use client"

import { useState } from "react"
import { LogOut, BookOpen, Calendar, Clock, Bell, User, FileText, CheckCircle2, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

interface DemoDashboardProps {
  onLogout: () => void;
  analysisMode: boolean;
  activePrinciple: string | null;
  setActivePrinciple: (id: string) => void;
  designMode: 'GOOD' | 'POOR';
}

export default function DemoDashboard({ onLogout, analysisMode, activePrinciple, setActivePrinciple, designMode }: DemoDashboardProps) {
  const [showNotification, setShowNotification] = useState(true)
  const [showConfirmLogout, setShowConfirmLogout] = useState(false)
  const [itemsDeleted, setItemsDeleted] = useState(false)

  const isGood = designMode === 'GOOD'

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

  const handleDismissNotification = () => {
    setShowNotification(false)
  }

  const handleDeleteItem = () => {
    if (isGood) {
      if (confirm("Are you sure you want to drop this course? This action cannot be undone.")) {
        setItemsDeleted(true)
      }
    } else {
      // Poor design: Deletes instantly with no warning
      setItemsDeleted(true)
    }
  }

  return (
    <div className={`w-full max-w-5xl h-full max-h-[850px] overflow-hidden flex flex-col relative transition-all duration-700 ${isGood ? 'bg-white rounded-3xl shadow-2xl border border-slate-200' : 'bg-zinc-100 border-8 border-zinc-400 rounded-none'}`}>
      
      {/* Top Navbar */}
      <div className={`${isGood ? 'bg-navy text-white p-6 border-b border-slate-800 shadow-sm' : 'bg-blue-300 text-black p-2 border-b-2 border-black'} flex items-center justify-between z-20`}>
        <div className="flex items-center gap-4">
          {isGood ? (
            <>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 shadow-inner backdrop-blur-sm">
                <span className="font-black text-teal-400 text-lg">PSG</span>
              </div>
              <div>
                <h2 className="font-bold tracking-wide text-xl">Student Dashboard</h2>
                <div className="text-[11px] text-teal-200 font-medium tracking-wider uppercase mt-1">Master of Computer Applications</div>
              </div>
            </>
          ) : (
            <div className="font-serif text-sm">System_Dashboard_v2.0.4</div>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          <button onClick={() => isGood ? setShowConfirmLogout(true) : onLogout()} className={isGood ? "flex items-center gap-2 px-5 py-2.5 bg-rose-500 hover:bg-rose-600 rounded-xl font-bold transition-all shadow-md hover:shadow-lg active:scale-95" : "text-[10px] underline text-blue-900 font-mono"}>
            {isGood && <LogOut size={18} />}
            {isGood ? "Secure Logout" : "Exit System"}
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isGood && showConfirmLogout && (
        <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm z-50 flex items-center justify-center animate-in fade-in">
          <div className={`bg-white p-8 rounded-3xl max-w-sm w-full shadow-2xl ${getHighlightClass('user-control')}`}>
            <HighlightMarker principleId="user-control" num="6" />
            <h3 className="text-2xl font-black text-navy mb-3">Sign Out?</h3>
            <p className="text-slate-600 mb-8 font-medium leading-relaxed">Are you sure you want to securely end your session? You will need to log in again to access your portal.</p>
            <div className="flex gap-4">
              <button onClick={() => setShowConfirmLogout(false)} className="flex-1 py-3 rounded-xl font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors">Cancel</button>
              <button onClick={onLogout} className="flex-1 py-3 rounded-xl font-bold text-white bg-rose-500 hover:bg-rose-600 shadow-md transition-colors">Yes, Sign Out</button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-grow flex overflow-hidden relative">
        
        {/* Navigation Sidebar */}
        <div className={`${isGood ? 'w-64 bg-slate-50 border-r border-slate-200 p-5' : 'w-16 bg-zinc-800 p-1'} flex flex-col gap-2 shrink-0 overflow-y-auto ${getHighlightClass('recognition')}`}>
          <HighlightMarker principleId="recognition" num="7" />
          
          {isGood && <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 mt-2 px-4">Main Menu</div>}
          
          {[
            { icon: <BookOpen size={isGood?20:16} />, label: "Dashboard", active: true },
            { icon: <FileText size={isGood?20:16} />, label: "My Courses", active: false },
            { icon: <Calendar size={isGood?20:16} />, label: "Timetable", active: false },
            { icon: <Clock size={isGood?20:16} />, label: "Attendance", active: false },
            { icon: <CheckCircle2 size={isGood?20:16} />, label: "Examinations", active: false },
            { icon: <User size={isGood?20:16} />, label: "Student Profile", active: false },
          ].map((item, i) => (
            <button 
              key={i}
              className={isGood 
                ? `flex items-center gap-4 p-4 rounded-xl text-sm transition-all duration-200 ${item.active ? 'bg-slate-200 text-navy font-bold shadow-sm' : 'text-slate-600 hover:bg-slate-200/50 font-medium'}`
                : `flex items-center justify-center p-2 mt-6 rounded-none ${i % 2 === 0 ? 'bg-zinc-600 text-white' : 'bg-red-900 text-yellow-300'}`
              }
              title={!isGood ? item.label : undefined}
            >
              <span className={isGood && item.active ? 'text-navy' : 'text-slate-400'}>{item.icon}</span>
              {isGood && <span>{item.label}</span>}
            </button>
          ))}
        </div>

        {/* Dashboard Content */}
        <div className={`flex-grow p-8 overflow-y-auto ${isGood ? 'bg-slate-100/50' : 'bg-white'}`}>
          
          {/* Notification Feedback */}
          <div className={`mb-8 ${getHighlightClass('feedback')}`}>
            <HighlightMarker principleId="feedback" num="8" />
            {showNotification && (
              <div className={isGood ? "bg-teal-50 border border-teal-200 p-5 rounded-2xl flex items-start gap-4 shadow-sm relative overflow-hidden" : "bg-gray-200 p-1 mb-2 flex justify-between"}>
                {isGood && (
                  <>
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-teal-500"></div>
                    <CheckCircle2 className="mt-0.5 text-teal-600 shrink-0" size={24} />
                  </>
                )}
                <div className="flex-grow">
                  {isGood ? (
                    <>
                      <h4 className="font-bold text-teal-900 text-lg mb-1">System Update</h4>
                      <p className="text-sm font-medium text-teal-800/80 leading-relaxed">Welcome back! Your next class starts in 30 minutes in Room L-304.</p>
                    </>
                  ) : (
                    <span className="text-[10px] font-mono">MSG_SYS_01_NEW</span>
                  )}
                </div>
                <button onClick={handleDismissNotification} className={isGood ? "text-teal-600 hover:text-teal-800 bg-teal-100 hover:bg-teal-200 p-2 rounded-lg transition-colors" : "text-black text-[10px]"}>
                  {isGood ? "Dismiss" : "[X]"}
                </button>
              </div>
            )}
            {isGood && !showNotification && (
              <div className="bg-slate-100 border border-slate-200 text-slate-500 p-4 rounded-xl text-sm font-medium text-center shadow-inner animate-in fade-in">
                Notification dismissed successfully.
              </div>
            )}
          </div>

          <div className={`mb-8 ${getHighlightClass('consistency')}`}>
            <HighlightMarker principleId="consistency" num="9" />
            <h1 className={isGood ? "text-2xl font-black text-navy mb-6 tracking-tight" : "text-md italic text-red-600 mb-2"}>
              {isGood ? "Current Enrollments" : "DATA_VIEW_TB_01"}
            </h1>
            
            {!itemsDeleted ? (
              <div className={isGood ? "bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 transition-shadow hover:shadow-md" : "border-t border-black p-2 flex flex-col"}>
                <div>
                  <div className={isGood ? "inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-lg mb-3 uppercase tracking-wider" : "hidden"}>Core Subject</div>
                  <h3 className={isGood ? "font-black text-navy text-xl mb-1" : "text-xs font-serif"}>Human-Computer Interaction</h3>
                  {isGood && <p className="text-slate-500 font-medium">Professor: Dr. Smith • Room L-304</p>}
                </div>
                
                <div className={`shrink-0 ${getHighlightClass('user-control')}`}>
                  <HighlightMarker principleId="user-control" num="10" />
                  <button onClick={handleDeleteItem} className={isGood ? "px-6 py-3 bg-white border-2 border-rose-200 text-rose-600 hover:bg-rose-50 hover:border-rose-300 rounded-xl font-bold transition-all shadow-sm active:scale-95 whitespace-nowrap" : "bg-red-500 text-white text-[10px]"}>
                    {isGood ? "Drop Course" : "DEL"}
                  </button>
                </div>
              </div>
            ) : (
              <div className={isGood ? "bg-slate-50 p-6 rounded-2xl border border-slate-200 text-slate-500 font-medium flex items-center justify-between animate-in fade-in" : "text-[10px]"}>
                {isGood ? (
                  <>
                    <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500" /> Course successfully dropped.</span>
                    <button onClick={() => setItemsDeleted(false)} className="text-sm font-bold text-teal-600 hover:text-teal-700 underline">Undo Action</button>
                  </>
                ) : "DELETED"}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
