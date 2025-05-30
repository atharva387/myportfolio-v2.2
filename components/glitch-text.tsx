"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text)
  const glitchIntervalRef = useRef<number | null>(null)
  const glitchTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"

    glitchIntervalRef.current = window.setInterval(() => {
      if (Math.random() > 0.98) {
        const glitched = text
          .split("")
          .map((char) =>
            Math.random() > 0.95 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
          )
          .join("")

        setGlitchText(glitched)

        // Clear previous timeout if any (to avoid overlapping glitches)
        if (glitchTimeoutRef.current) {
          clearTimeout(glitchTimeoutRef.current)
        }

        glitchTimeoutRef.current = window.setTimeout(() => setGlitchText(text), 50)
      }
    }, 200)

    // Cleanup intervals and timeouts on unmount or text change
    return () => {
      if (glitchIntervalRef.current) clearInterval(glitchIntervalRef.current)
      if (glitchTimeoutRef.current) clearTimeout(glitchTimeoutRef.current)
    }
  }, [text])

  return (
    <motion.h1
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      {glitchText}
    </motion.h1>
  )
}
