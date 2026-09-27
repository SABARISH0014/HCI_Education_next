"use client"

import { useState } from "react"
import { LogOut, BookOpen, Calendar, Clock, Bell, User, FileText, ChevronRight, CheckCircle2 } from "lucide-react"

interface DemoDashboardProps {
  onLogout: () => void;
  analysisMode: boolean;
  activePrinciple: string | null;
}

export default function DemoDashboard({ onLogout, analysisMode, activePrinciple }: DemoDashboardProps) {
  const [showNotification, setShowNotification] = useState(true)

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
    <div className="w-full max-w-4xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50 flex flex-col h-full max-h-[800px] animate-in fade-in zoom-in-95 duration-500">
      
      {/* Top Navbar */}
      <div className={`bg-gradient-to-r from-navy to-navy-light text-white p-5 flex items-center justify-between border-b border-navy-light ${getHighlightClass('consistency')}`}>
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 shadow-inner backdrop-blur-sm">
            <span className="font-bold text-teal-300">PSG</span>
          </div>
          <div>
            <h2 className="font-bold tracking-wide hidden sm:block text-lg">E-Campus Student Portal</h2>
            <h2 className="font-bold tracking-wide sm:hidden text-lg">E-Campus</h2>
            <div className="text-[11px] text-teal-200 font-medium tracking-wider uppercase mt-0.5">MCA Department</div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-slate-300 hover:text-white transition-colors" aria-label="Notifications">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-navy"></span>
          </button>
          
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg border border-white/10">
            <User size={16} className="text-slate-300" />
            <span className="text-sm font-medium">Demo Student</span>
          </div>
          
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 px-3 py-1.5 bg-rose-500/20 text-rose-300 hover:bg-rose-500 hover:text-white rounded-lg transition-colors text-sm font-medium"
          >
            <LogOut size={16} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
        
        {/* Sidebar Navigation */}
        <div className={`w-full md:w-64 bg-slate-50/80 backdrop-blur-md border-r border-slate-200 p-5 flex flex-col gap-2 overflow-y-auto ${getHighlightClass('learnability')}`}>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 mt-2 px-3">Main Menu</div>
          
          {[
            { icon: <BookOpen size={18} />, label: "Dashboard", active: true },
            { icon: <FileText size={18} />, label: "My Courses", active: false },
            { icon: <Calendar size={18} />, label: "Timetable", active: false },
            { icon: <Clock size={18} />, label: "Attendance", active: false },
            { icon: <CheckCircle2 size={18} />, label: "Examinations", active: false },
            { icon: <User size={18} />, label: "My Profile", active: false },
          ].map((item, i) => (
            <button 
              key={i}
              className={`group flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                item.active 
                  ? 'bg-white shadow-sm border border-slate-200 text-teal-700' 
                  : 'text-slate-500 hover:bg-white hover:shadow-sm hover:text-navy border border-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`${item.active ? 'text-teal-500' : 'text-slate-400 group-hover:text-navy'}`}>{item.icon}</span>
                {item.label}
              </div>
              {item.active && <ChevronRight size={16} className="text-teal-400" />}
            </button>
          ))}
        </div>

        {/* Dashboard Content */}
        <div className="flex-grow p-6 overflow-y-auto bg-slate-50/50">
          
          {/* Welcome & Feedback */}
          <div className={`mb-6 ${getHighlightClass('feedback')}`}>
            {showNotification && (
              <div className="bg-teal-50 border border-teal-200 text-teal-800 p-4 rounded-xl flex items-start gap-3 mb-6 shadow-sm">
                <CheckCircle2 className="mt-0.5 text-teal" />
                <div className="flex-grow">
                  <h4 className="font-bold">Login Successful</h4>
                  <p className="text-sm opacity-90">Welcome back! You have 2 unread notifications and 1 upcoming assignment.</p>
                </div>
                <button 
                  onClick={() => setShowNotification(false)}
                  className="text-teal-600 hover:text-teal-800"
                >
                  &times;
                </button>
              </div>
            )}
            
            <h1 className="text-2xl font-bold text-navy">Student Dashboard</h1>
            <p className="text-slate-500">Semester 3 • Master of Computer Applications</p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${getHighlightClass('learnability')}`}>
            {/* Attendance Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm col-span-1 md:col-span-2 lg:col-span-1 transition-all hover:shadow-md">
              <h3 className="font-bold text-navy mb-5 flex items-center gap-2">
                <div className="p-2 bg-teal-50 text-teal-600 rounded-lg"><Clock size={18} /></div> Attendance
              </h3>
              <div className="flex items-end gap-4 mb-5">
                <div className="text-5xl font-extrabold text-navy tracking-tight">87<span className="text-2xl text-slate-300 font-medium">%</span></div>
                <div className="text-xs text-emerald-700 font-bold mb-1.5 bg-emerald-100 px-2.5 py-1 rounded-md uppercase tracking-wider">Good Standing</div>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 mb-3 border border-slate-200 shadow-inner">
                <div className="bg-gradient-to-r from-teal-400 to-teal-500 h-3 rounded-full shadow-sm" style={{ width: '87%' }}></div>
              </div>
              <p className="text-xs font-medium text-slate-400">Minimum requirement: 75%</p>
            </div>

            {/* Timetable Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm col-span-1 md:col-span-2 lg:col-span-2 transition-all hover:shadow-md">
              <h3 className="font-bold text-navy mb-5 flex items-center gap-2">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Calendar size={18} /></div> Today's Schedule
              </h3>
              <div className="space-y-3">
                {[
                  { time: "09:00 AM", class: "Human-Computer Interaction", room: "L-304" },
                  { time: "11:00 AM", class: "Data Science & Analytics", room: "Lab-2" },
                  { time: "02:00 PM", class: "Cloud Computing", room: "L-301" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                    <div className="w-20 text-xs font-bold text-slate-400">{item.time}</div>
                    <div className="w-1.5 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
                    <div>
                      <div className="font-bold text-navy text-sm">{item.class}</div>
                      <div className="text-xs font-medium text-slate-500 mt-0.5 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> Room {item.room}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
