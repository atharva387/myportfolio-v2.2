"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function MatrixBackground() {
  const [columns, setColumns] = useState<number[]>([])

  useEffect(() => {
    const columnCount = Math.floor(window.innerWidth / 20)
    setColumns(Array.from({ length: Math.min(columnCount, 50) }, (_, i) => i))
  }, [])

  const matrixChars = ["0", "1", "{", "}", "[", "]", "<", ">", "/", "\\", "|", "-", "+", "="]

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
      {columns.map((column) => (
        <motion.div
          key={column}
          className="absolute top-0 text-neon-cyan font-mono text-xs leading-none"
          style={{ left: `${column * 20}px` }}
          initial={{ y: -100 }}
          animate={{ y: window.innerHeight + 100 }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="h-5 leading-5"
              animate={{
                opacity: [0, 1, 0],
                color: ["#00ffff", "#ffffff", "#00ffff"],
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}
