"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, CheckCircle, Loader2, Braces, Laptop, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StartupAnimationProps {
  onComplete: () => void
}

export function StartupAnimation({ onComplete }: StartupAnimationProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [showSkip, setShowSkip] = useState(false)

  const steps = [
    { text: "Initializing development environment...", icon: Laptop, color: "bg-blue-500" },
    { text: "Loading dependencies...", icon: Braces, color: "bg-purple-500" },
    { text: "Compiling components...", icon: Code, color: "bg-indigo-500" },
    { text: "Optimizing performance...", icon: Sparkles, color: "bg-pink-500" },
  ]

  useEffect(() => {
    // Show skip button after 1.5 seconds
    const skipTimer = setTimeout(() => setShowSkip(true), 1500)

    // Progress through steps
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1)
      }, 1000)
      return () => {
        clearTimeout(timer)
        clearTimeout(skipTimer)
      }
    } else {
      // Final progress animation
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            setTimeout(() => {
              onComplete()
            }, 500)
            return 100
          }
          return prev + 4
        })
      }, 30)
      return () => clearInterval(progressInterval)
    }
  }, [currentStep, onComplete, steps.length])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-background flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background gradient animation */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{ backgroundSize: "200% 200%" }}
          />
        </div>

        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 8 + 2,
              height: Math.random() * 8 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, ${
                Math.random() * 200 + 55
              }, ${Math.random() * 0.5 + 0.1})`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Skip button */}
        <AnimatePresence>
          {showSkip && (
            <motion.div
              className="absolute top-4 right-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <Button variant="outline" size="sm" onClick={onComplete}>
                Skip
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10 w-full max-w-md mx-auto px-4">
          {/* Logo */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Code className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Atharva Kulkarni
            </h1>
            <p className="text-muted-foreground mt-2">Portfolio Loading</p>
          </motion.div>

          {/* Steps */}
          <div className="space-y-4 mb-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex items-center gap-3 ${
                  index > currentStep ? "opacity-40" : index === currentStep ? "opacity-100" : "opacity-80"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: index > currentStep ? 0.4 : index === currentStep ? 1 : 0.8, x: 0 }}
                transition={{ delay: 0.1 * index + 0.5 }}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index < currentStep ? "bg-green-500" : index === currentStep ? step.color : "bg-gray-500/30"
                  }`}
                >
                  {index < currentStep ? (
                    <CheckCircle className="w-5 h-5 text-white" />
                  ) : index === currentStep ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Loader2 className="w-5 h-5 text-white" />
                    </motion.div>
                  ) : (
                    <step.icon className="w-5 h-5 text-white opacity-70" />
                  )}
                </div>
                <span className={index === currentStep ? "font-medium" : ""}>{step.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Progress bar (only show when all steps complete) */}
          {currentStep >= steps.length && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex justify-between text-sm mb-2">
                <span>Launching Portfolio</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  style={{ width: `${progress}%` }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
