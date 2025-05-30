"use client"

import React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Terminal, Cpu, Database, Code, Zap, Shield, CheckCircle2, SkipForward } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [showSkip, setShowSkip] = useState(false)

  const bootSequence = [
    { icon: Terminal, text: "Initializing neural networks...", duration: 1200 },
    { icon: Cpu, text: "Loading quantum processors...", duration: 1000 },
    { icon: Database, text: "Syncing data matrices...", duration: 800 },
    { icon: Code, text: "Compiling source algorithms...", duration: 900 },
    { icon: Shield, text: "Establishing secure protocols...", duration: 700 },
    { icon: Zap, text: "Activating holographic interface...", duration: 1100 },
  ]

  useEffect(() => {
    // Show skip button after 2 seconds
    const skipTimer = setTimeout(() => setShowSkip(true), 2000)

    const stepTimer = setTimeout(() => {
      if (currentStep < bootSequence.length - 1) {
        setCurrentStep((prev) => prev + 1)
      } else {
        // Final progress animation
        const progressInterval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(progressInterval)
              setTimeout(onComplete, 500)
              return 100
            }
            return prev + 2
          })
        }, 30)
      }
    }, bootSequence[currentStep]?.duration || 1000)

    return () => {
      clearTimeout(skipTimer)
      clearTimeout(stepTimer)
    }
  }, [currentStep, onComplete])

  const handleSkip = () => {
    onComplete()
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Matrix background */}
        <div className="absolute inset-0 matrix-bg opacity-20" />

        {/* Scan lines */}
        <div className="absolute inset-0 scan-lines" />

        {/* Circuit pattern */}
        <div className="absolute inset-0 circuit-pattern opacity-10" />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Skip button */}
        <AnimatePresence>
          {showSkip && (
            <motion.div
              className="absolute top-8 right-8 z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <Button variant="secondary" size="sm" onClick={handleSkip} className="gap-2">
                <SkipForward size={16} />
                Skip
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main loading content */}
        <div className="relative z-10 max-w-2xl mx-auto px-8">
          {/* Logo/Brand */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-4 mb-4"
              animate={{
                rotateY: [0, 360],
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotateY: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center neon-border">
                <Terminal size={32} className="text-background" />
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl font-bold neon-text mb-2"
              animate={{
                textShadow: ["0 0 5px #00ffff", "0 0 20px #00ffff, 0 0 30px #00ffff", "0 0 5px #00ffff"],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              ATHARVA.DEV
            </motion.h1>

            <motion.p
              className="text-muted-foreground font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Quantum-Enhanced Portfolio Interface
            </motion.p>
          </motion.div>

          {/* Boot sequence */}
          <div className="bg-card/50 border border-neon-cyan/30 rounded-lg p-8 backdrop-blur-sm">
            <div className="space-y-6">
              {/* Current step */}
              <motion.div
                className="flex items-center gap-4"
                key={currentStep}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="p-3 bg-neon-cyan/20 rounded-lg border border-neon-cyan/50"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                >
                  {bootSequence[currentStep] &&
                    React.createElement(bootSequence[currentStep].icon, { size: 24, className: "text-neon-cyan" })}
                </motion.div>

                <div className="flex-1">
                  <motion.p
                    className="text-foreground font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {bootSequence[currentStep]?.text}
                  </motion.p>

                  <motion.div
                    className="flex items-center gap-2 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-neon-cyan rounded-full"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Completed steps */}
              <div className="space-y-2">
                {bootSequence.slice(0, currentStep).map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 opacity-60"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-2 bg-neon-green/20 rounded border border-neon-green/50">
                      <CheckCircle2 size={16} className="text-neon-green" />
                    </div>
                    <p className="text-muted-foreground font-mono text-sm">{step.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* Progress bar (only show when all steps complete) */}
              {currentStep >= bootSequence.length - 1 && (
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-between text-sm font-mono mb-2">
                    <span className="text-neon-cyan">Loading Interface...</span>
                    <span className="text-neon-cyan">{progress}%</span>
                  </div>

                  <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden border border-neon-cyan/30">
                    <motion.div
                      className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple"
                      style={{ width: `${progress}%` }}
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Status indicator */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.p
              className="text-muted-foreground font-mono text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              {currentStep < bootSequence.length - 1
                ? "SYSTEM INITIALIZATION IN PROGRESS..."
                : "FINALIZING HOLOGRAPHIC INTERFACE..."}
            </motion.p>
          </motion.div>
        </div>

        {/* Data streams */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-neon-cyan to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: ["-100vh", "100vh"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
