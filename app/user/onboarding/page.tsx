"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, X } from "lucide-react"

const slides = [
  {
    id: 1,
    question: "Siape cuy?",
    options: ["anak ayam", "sapi", "kambing"],
  },
  {
    id: 2,
    question: "kerja dimana?",
    options: ["bekasi", "thailand", "rumah aja", "kost kostan"],
  },
  {
    id: 3,
    question: "udah pernah kawin?",
    options: ["pernah tapi ga hamil", "belum tapi hamil", "kehamilan", "kelaparan"],
  },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [skipped, setSkipped] = useState(false)

  const totalSteps = slides.length

  function handleNext() {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    } else {

 
      router.push("/user/dashboard")
    }
  }

  function handlePrev() {
    if (currentStep > 0) setCurrentStep(currentStep - 1)
  }

  function handleSkip() {
    setSkipped(true)
    router.push("/user/dashboard")
  }

  function handleAnswer(option: string) {
    const newAnswers = [...answers]
    newAnswers[currentStep] = option
    setAnswers(newAnswers)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md space-y-6 rounded-2xl bg-card p-8 shadow-lg font-grotesk"
      >
        
      <Button
          variant="ghost"
          size="sm"
          onClick={handleSkip}
          className="absolute top-4 right-4 text-sm font-semibold text-muted-foreground hover:text-foreground"
        >
          Skip
        </Button>


        <div className="h-2 w-full rounded-full bg-gray-300 overflow-hidden mt-6 mb-6">
          <motion.div
            className="h-2 bg-blue-600"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

       
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentStep].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="space-y-5"
          >
            <h1 className="text-2xl font-bold text-foreground">
              {slides[currentStep].question}
            </h1>

            <div className="flex flex-col space-y-3">
              {slides[currentStep].options.map((opt) => (
                <Button
                  key={opt}
                  variant={answers[currentStep] === opt ? "default" : "outline"}
                  onClick={() => handleAnswer(opt)}
                  className="text-left"
                >
                  {opt}
                </Button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="flex items-center gap-2 disabled:opacity-40"
          >
            <ArrowLeft size={16} />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={!answers[currentStep]}
            className="flex items-center gap-2 disabled:opacity-50"
          >
            {currentStep === totalSteps - 1 ? "Finish" : "Next"}
            <ArrowRight size={16} />
          </Button>
        </div>
      </motion.div>
    </main>
  )
}
