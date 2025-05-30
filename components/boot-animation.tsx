"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Terminal, CheckCircle2, Loader2, Shield, Cpu, Zap } from "lucide-react"

const TYPING_SPEED = 30
const STEP_DELAY = 300
const PROGRESS_INTERVAL = 20
const PROGRESS_INCREMENT = 2

export default function BootAnimation({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0)
  const [visible, setVisible] = useState(true)
  const [loadingText, setLoadingText] = useState("")
  const [progress, setProgress] = useState(0)

  const bootSequence = [
    { text: "> Initializing system...", duration: 800 },
    { text: "> Loading kernel modules...", duration: 600 },
    { text: "> Establishing secure connection...", duration: 700 },
    { text: "> Mounting file systems...", duration: 500 },
    { text: "> Loading portfolio assets...", duration: 900 },
    { text: "> Optimizing display parameters...", duration: 600 },
    { text: "> Initializing UI components...", duration: 700 },
    { text: "> System ready. Welcome to Atharva.dev", duration: 1000 },
  ]

  useEffect(() => {
    let isMounted = true

    if (step < bootSequence.length) {
      const text = bootSequence[step].text
      let currentIndex = 0

      const typingInterval = setInterval(() => {
        if (!isMounted) return
        if (currentIndex <= text.length) {
          setLoadingText(text.substring(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typingInterval)
          setTimeout(() => {
            if (isMounted) setStep((prev) => prev + 1)
          }, STEP_DELAY)
        }
      }, TYPING_SPEED)

      return () => {
        isMounted = false
        clearInterval(typingInterval)
      }
    } else {
      let currentProgress = 0
      const progressInterval = setInterval(() => {
        if (!isMounted) return
        if (currentProgress < 100) {
          currentProgress += PROGRESS_INCREMENT
          setProgress(currentProgress)
        } else {
          clearInterval(progressInterval)
          setTimeout(() => {
            if (!isMounted) return
            setVisible(false)
            setTimeout(() => {
              if (isMounted) onComplete()
            }, 500)
          }, 500)
        }
      }, PROGRESS_INTERVAL)

      return () => {
        isMounted = false
        clearInterval(progressInterval)
      }
    }
  }, [step, onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-full max-w-2xl px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Terminal className="text-cyan-400 h-8 w-8" />
              </motion.div>
              <h1 className="text-2xl font-bold text-cyan-400 font-mono">ATHARVA.DEV</h1>
            </div>

            <div className="bg-gray-900/80 border border-cyan-400/30 rounded-lg p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 text-gray-400">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="ml-2">system_boot.sh</span>
              </div>

              <div className="space-y-2 text-gray-300 h-64 overflow-hidden" role="status" aria-live="polite">
                {bootSequence.slice(0, step).map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle2 className="text-green-400 h-4 w-4" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}

                {step < bootSequence.length && (
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Loader2 className="text-cyan-400 h-4 w-4" />
                    </motion.div>
                    <span>{loadingText}</span>
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-cyan-400 ml-1"
                    />
                  </div>
                )}

                {step >= bootSequence.length && (
                  <div className="mt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="text-green-400 h-4 w-4" />
                      <span className="text-green-400">System security verified</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Cpu className="text-cyan-400 h-4 w-4" />
                      <span className="text-cyan-400">Resources optimized</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="text-yellow-400 h-4 w-4" />
                      <span className="text-yellow-400">Performance mode activated</span>
                    </div>

                    <div className="mt-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Loading portfolio...</span>
                        <span>{progress}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                          style={{ width: `${progress}%` }}
                          initial={{ width: "0%" }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-xs">
                {step < bootSequence.length ? "SYSTEM BOOT IN PROGRESS" : "LAUNCHING INTERFACE"}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
