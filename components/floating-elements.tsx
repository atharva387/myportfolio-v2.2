"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"

// Utility to generate random numbers with seed
function randomBetween(min: number, max: number, seed: number) {
  // Simple deterministic pseudo-random using seed
  const x = Math.sin(seed) * 10000
  return min + (x - Math.floor(x)) * (max - min)
}

type Shape = {
  width: number
  height: number
  left: string
  top: string
  borderRadius: string
  duration: number
  delay: number
  xMovement: number
}

type Line = {
  width: number
  left: string
  top: string
  rotation: number
  duration: number
  delay: number
}

type Orb = {
  width: number
  height: number
  left: string
  top: string
  duration: number
  xMovement: number
  yMovement: number
}

export function FloatingElements() {
  // Use useMemo so these random values are stable across renders
  const shapes: Shape[] = useMemo(() => {
    return [...Array(8)].map((_, i) => ({
      width: randomBetween(10, 30, i * 1.1),
      height: randomBetween(10, 30, i * 2.1),
      left: `${randomBetween(0, 100, i * 3.1).toFixed(2)}%`,
      top: `${randomBetween(0, 100, i * 4.1).toFixed(2)}%`,
      borderRadius: i % 2 === 0 ? "50%" : "0",
      duration: randomBetween(5, 15, i * 5.1),
      delay: randomBetween(0, 5, i * 6.1),
      xMovement: randomBetween(-10, 10, i * 7.1),
    }))
  }, [])

  const lines: Line[] = useMemo(() => {
    return [...Array(6)].map((_, i) => ({
      width: randomBetween(100, 300, i * 1.7),
      left: `${randomBetween(0, 100, i * 2.7).toFixed(2)}%`,
      top: `${randomBetween(0, 100, i * 3.7).toFixed(2)}%`,
      rotation: randomBetween(0, 360, i * 4.7),
      duration: randomBetween(2, 6, i * 5.7),
      delay: randomBetween(0, 3, i * 6.7),
    }))
  }, [])

  const orbs: Orb[] = useMemo(() => {
    return [...Array(4)].map((_, i) => ({
      width: randomBetween(50, 150, i * 1.3),
      height: randomBetween(50, 150, i * 2.3),
      left: `${randomBetween(0, 100, i * 3.3).toFixed(2)}%`,
      top: `${randomBetween(0, 100, i * 4.3).toFixed(2)}%`,
      duration: randomBetween(10, 25, i * 5.3),
      xMovement: randomBetween(-50, 50, i * 6.3),
      yMovement: randomBetween(-50, 50, i * 7.3),
    }))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Geometric shapes */}
      {shapes.map(({ width, height, left, top, borderRadius, duration, delay, xMovement }, i) => (
        <motion.div
          key={i}
          className="absolute border border-neon-cyan/30"
          style={{
            width,
            height,
            left,
            top,
            borderRadius,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, xMovement, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        />
      ))}

      {/* Circuit lines */}
      {lines.map(({ width, left, top, rotation, duration, delay }, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent"
          style={{
            width,
            height: 1,
            left,
            top,
            transform: `rotate(${rotation}deg)`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay,
          }}
        />
      ))}

      {/* Glowing orbs */}
      {orbs.map(({ width, height, left, top, duration, xMovement, yMovement }, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 blur-xl"
          style={{
            width,
            height,
            left,
            top,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, xMovement, 0],
            y: [0, yMovement, 0],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
