"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function TerminalHero() {
  const [currentLine, setCurrentLine] = useState(0)

  const terminalLines = [
    "$ whoami",
    "atharva-kulkarni",
    "$ cat skills.txt",
    "Full-Stack Developer",
    "$ echo 'Ready to innovate!'",
    "Ready to innovate!",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % terminalLines.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative">
      {/* Terminal Window */}
      <motion.div
        className="bg-gray-900/90 border border-cyan-400/30 rounded-lg overflow-hidden backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {/* Terminal Header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-cyan-400/20">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-400 text-sm font-mono ml-4">atharva@portfolio:~</span>
        </div>

        {/* Terminal Content */}
        <div className="p-6 h-64">
          <div className="space-y-2 font-mono text-sm">
            {terminalLines.slice(0, currentLine + 1).map((line, index) => (
              <div
                key={index}
                className={`${
                  line.startsWith("$") ? "text-cyan-400" : line.includes("Ready") ? "text-green-400" : "text-gray-300"
                }`}
              >
                {line}
                {index === currentLine && <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse" />}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        className="absolute -top-6 -right-6 w-20 h-20 rounded-full overflow-hidden border-2 border-cyan-400"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <Image src="/placeholder.jpg?height=80&width=80" alt="Atharva Kulkarni" fill className="object-cover" />
      </motion.div>
    </div>
  )
}
