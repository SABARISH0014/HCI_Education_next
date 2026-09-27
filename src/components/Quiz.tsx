"use client"

import { useState } from "react"
import { quizQuestions } from "@/data/questions"
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Home } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function Quiz() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [userAnswers, setUserAnswers] = useState<{questionId: number, isCorrect: boolean}[]>([])

  const currentQuestion = quizQuestions[currentQuestionIdx]
  const totalQuestions = quizQuestions.length

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return
    setSelectedOption(index)
  }

  const handleSubmit = () => {
    if (selectedOption === null || isAnswered) return

    const isCorrect = selectedOption === currentQuestion.correctAnswer
    if (isCorrect) setScore(score + 1)
    
    setUserAnswers([...userAnswers, { questionId: currentQuestion.id, isCorrect }])
    setIsAnswered(true)
  }

  const handleNext = () => {
    if (currentQuestionIdx < totalQuestions - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1)
      setSelectedOption(null)
      setIsAnswered(false)
    } else {
      setShowResults(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestionIdx(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setScore(0)
    setShowResults(false)
    setUserAnswers([])
  }

  if (showResults) {
    const percentage = Math.round((score / totalQuestions) * 100)
    return (
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-md border border-slate-200 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold text-navy mb-3">Quiz Completed!</h2>
        <p className="text-lg text-slate-600 mb-10 font-medium">Let's see how well you understand HCI in Education.</p>
        
        <div className="flex justify-center mb-10">
          <div className={`relative w-48 h-48 rounded-full border-[12px] flex items-center justify-center flex-col
            ${percentage >= 80 ? 'border-success' : percentage >= 50 ? 'border-blue-600' : 'border-error'}`}>
            <span className="text-5xl font-black text-navy">{percentage}%</span>
            <span className="text-sm font-bold text-slate-500 mt-2 tracking-wide uppercase">{score} of {totalQuestions} correct</span>
          </div>
        </div>

        <div className="mb-10 text-left bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-navy mb-6 pb-2 border-b border-slate-200">Performance Summary</h3>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
            {userAnswers.map((ans, idx) => (
              <div 
                key={idx}
                className={`flex items-center justify-center h-10 w-full rounded-md font-bold text-sm shadow-sm
                  ${ans.isCorrect ? 'bg-success/10 text-success border border-success/20' : 'bg-error/10 text-error border border-error/20'}`}
                title={`Question ${idx + 1}: ${ans.isCorrect ? 'Correct' : 'Incorrect'}`}
              >
                {idx + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleRestart}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-navy hover:bg-navy-light text-white rounded-xl font-bold transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-navy/30"
          >
            <RotateCcw size={20} />
            Restart Quiz
          </button>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition-all border border-slate-300 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            <Home size={20} />
            Return Home
          </Link>
        </div>
      </div>
    )
  }

  const progressPercentage = ((currentQuestionIdx) / totalQuestions) * 100

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 max-w-3xl mx-auto overflow-hidden flex flex-col">
      {/* Progress bar */}
      <div className="w-full h-3 bg-slate-100" aria-hidden="true">
        <div 
          className="h-full bg-teal transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <div className="p-6 md:p-10 flex-grow">
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
          <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-bold tracking-wide uppercase shadow-sm border border-slate-200">
            Question {currentQuestionIdx + 1} of {totalQuestions}
          </span>
          <span className="text-sm font-bold text-slate-500 uppercase tracking-wide">
            Score: <span className="text-navy text-base">{score}</span>
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-12 leading-relaxed">
          {currentQuestion.text}
        </h2>

        <div className="space-y-6 mb-12" role="radiogroup" aria-label="Quiz options">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedOption === index
            const isCorrectAnswer = index === currentQuestion.correctAnswer
            
            let optionStyles = "cursor-pointer border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700"
            
            if (isAnswered) {
              if (isCorrectAnswer) {
                optionStyles = "border-success bg-success/5 text-success font-bold shadow-sm border-2"
              } else if (isSelected && !isCorrectAnswer) {
                optionStyles = "border-error bg-error/5 text-error font-bold border-2"
              } else {
                optionStyles = "border-slate-200 bg-slate-50 opacity-60 text-slate-500"
              }
            } else if (isSelected) {
              optionStyles = "border-teal-500 bg-teal-50 text-teal-800 font-bold shadow-md ring-1 ring-teal-500"
            }

            return (
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileTap={!isAnswered ? { scale: 0.98 } : {}}
                key={index}
                onClick={() => handleOptionSelect(index)}
                disabled={isAnswered}
                role="radio"
                aria-checked={isSelected}
                className={`w-full text-left p-4 rounded-lg transition-all flex justify-between items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 shadow-sm ${optionStyles}`}
              >
                <div className="flex gap-4 items-center">
                  <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center font-extrabold text-base border-2 transition-colors
                    ${isAnswered && isCorrectAnswer ? 'bg-success border-success text-white' : 
                      isAnswered && isSelected && !isCorrectAnswer ? 'bg-error border-error text-white' : 
                      isSelected ? 'bg-navy border-navy text-white' : 'bg-slate-100 border-slate-300 text-slate-500 group-hover:bg-slate-200 group-hover:border-slate-400'}`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className={`text-lg leading-relaxed ${isSelected && !isAnswered ? 'font-bold' : 'font-medium'}`}>{option}</span>
                </div>
                
                {isAnswered && isCorrectAnswer && <CheckCircle2 className="text-success shrink-0" size={28} aria-label="Correct Answer" />}
                {isAnswered && isSelected && !isCorrectAnswer && <XCircle className="text-error shrink-0" size={28} aria-label="Incorrect Answer" />}
              </motion.button>
            )
          })}
        </div>

        {isAnswered && (
          <div className={`p-6 rounded-xl mb-10 border-l-4 shadow-sm ${
            selectedOption === currentQuestion.correctAnswer 
              ? 'bg-success/5 border-success text-success-800' 
              : 'bg-error/5 border-error text-error-800'
          }`}>
            <h4 className="font-extrabold mb-2 flex items-center gap-2 text-lg">
              {selectedOption === currentQuestion.correctAnswer 
                ? <><CheckCircle2 size={24} className="text-success" /> Correct!</>
                : <><XCircle size={24} className="text-error" /> Incorrect</>
              }
            </h4>
            <p className="text-base font-medium leading-relaxed opacity-90">{currentQuestion.explanation}</p>
          </div>
        )}

        <div className="flex justify-end pt-8 mt-12 border-t border-slate-200">
          {!isAnswered ? (
            <motion.button
              whileTap={selectedOption !== null ? { scale: 0.98 } : {}}
              onClick={handleSubmit}
              disabled={selectedOption === null}
              className={`px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-md focus:outline-none focus:ring-4 focus:ring-navy/30
                ${selectedOption !== null 
                  ? 'bg-navy hover:bg-navy-light text-white hover:-translate-y-0.5' 
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'}`}
            >
              Submit Answer
            </motion.button>
          ) : (
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleNext}
              className="px-10 py-4 bg-teal hover:bg-teal-dark text-white rounded-xl font-bold text-lg transition-all flex items-center gap-3 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-teal/30"
            >
              {currentQuestionIdx < totalQuestions - 1 ? 'Next Question' : 'View Results'}
              <ChevronRight size={24} />
            </motion.button>
          )}
        </div>
      </div>
    </div>
  )
}
