"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Maximize, Minimize, ChevronLeft, ChevronRight, Play, RotateCcw, MonitorPlay, CheckSquare } from "lucide-react"
import Link from "next/link"

import Slide01 from "./slides/Slide01"
import Slide02 from "./slides/Slide02"
import Slide03 from "./slides/Slide03"
import Slide04 from "./slides/Slide04"
import Slide05 from "./slides/Slide05"
import Slide06 from "./slides/Slide06"
import Slide07 from "./slides/Slide07"
import Slide08 from "./slides/Slide08"
import Slide09 from "./slides/Slide09"
import Slide10 from "./slides/Slide10"
import Slide11 from "./slides/Slide11"

const SLIDES = [
  Slide01, Slide02, Slide03, Slide04, Slide05, 
  Slide06, Slide07, Slide08, Slide09, Slide10, 
  Slide11
]

export default function PresentationViewer() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isStarted, setIsStarted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const totalSlides = SLIDES.length
  const CurrentSlideComponent = SLIDES[currentSlide]

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1)
    }
  }, [currentSlide, totalSlides])

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1)
    }
  }, [currentSlide])

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      if (containerRef.current) {
        try {
          await containerRef.current.requestFullscreen()
          setIsFullscreen(true)
        } catch (err) {
          console.error("Error attempting to enable fullscreen:", err)
        }
      }
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isStarted) return
      
      // Ignore key events from input fields
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      switch(e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault()
          nextSlide()
          break
        case "ArrowLeft":
          e.preventDefault()
          prevSlide()
          break
        case "Home":
          e.preventDefault()
          setCurrentSlide(0)
          break
        case "End":
          e.preventDefault()
          setCurrentSlide(totalSlides - 1)
          break
        case "Escape":
          setIsFullscreen(false)
          break
      }
    }

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    window.addEventListener("keydown", handleKeyDown)
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [isStarted, nextSlide, prevSlide, totalSlides])

  if (!isStarted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center shadow-sm">
        <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mb-6">
          <Play className="text-teal ml-1" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-navy mb-4">Native React Presentation</h2>
        <p className="text-slate-600 mb-8 max-w-md">
          Experience the 11-slide interactive presentation natively built with React. Includes full keyboard support, animations, and fullscreen mode.
        </p>
        <button 
          onClick={() => setIsStarted(true)}
          className="flex items-center gap-2 px-8 py-4 bg-navy hover:bg-navy-light text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          Start Presentation
        </button>
      </div>
    )
  }

  const isFinished = currentSlide === totalSlides - 1

  return (
    <div 
      ref={containerRef}
      className={`relative flex flex-col bg-slate-100 mx-auto ${isFullscreen ? 'w-screen h-screen' : 'w-full max-w-5xl aspect-[16/9] min-h-[500px] rounded-3xl shadow-2xl overflow-hidden border border-slate-200'}`}
    >
      {/* The Slide Content */}
      <div className="flex-grow relative overflow-hidden bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full h-full flex flex-col p-8 md:p-12 lg:p-16 overflow-y-auto overflow-x-hidden"
          >
            <CurrentSlideComponent />
            
            {/* End of Presentation Actions */}
            {isFinished && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-auto pt-8 border-t border-slate-200 flex flex-wrap justify-center gap-4"
              >
                <button 
                  onClick={() => setCurrentSlide(0)}
                  className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors"
                >
                  <RotateCcw size={18} /> Restart Presentation
                </button>
                <Link 
                  href="/demo"
                  className="flex items-center gap-2 px-6 py-3 bg-teal hover:bg-teal-light text-white font-semibold rounded-lg transition-colors"
                  onClick={() => { if(isFullscreen) document.exitFullscreen() }}
                >
                  <MonitorPlay size={18} /> Explore Live Demo
                </Link>
                <Link 
                  href="/quiz"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                  onClick={() => { if(isFullscreen) document.exitFullscreen() }}
                >
                  <CheckSquare size={18} /> Take MCQ Quiz
                </Link>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Presentation Controls */}
      <div className="h-16 bg-navy text-white px-4 md:px-8 flex items-center justify-between shrink-0 select-none z-50 rounded-b-3xl">
        
        {/* Progress indicator */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-slate-700">
          <div 
            className="h-full bg-teal transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-slate-300 hidden sm:inline-block">
            Slide {currentSlide + 1} of {totalSlides}
          </span>
          <span className="text-sm font-medium text-slate-300 sm:hidden">
            {currentSlide + 1}/{totalSlides}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-lg hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="p-2 rounded-lg hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="w-px h-6 bg-slate-600 mx-2 hidden sm:block"></div>
          
          <button 
            onClick={toggleFullscreen}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
          </button>
        </div>
      </div>
    </div>
  )
}
