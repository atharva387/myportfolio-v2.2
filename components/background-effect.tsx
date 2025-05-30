"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function BackgroundEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
const animationFrameId = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const particlesArray: Particle[] = []

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor(width: number, height: number) {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        const colors = ["rgba(59,130,246,0.5)", "rgba(139,92,246,0.5)", "rgba(236,72,153,0.5)"]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update(width: number, height: number) {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > width) this.x = 0
        else if (this.x < 0) this.x = width
        if (this.y > height) this.y = 0
        else if (this.y < 0) this.y = height
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const initParticles = () => {
      particlesArray.length = 0
      const area = canvas.width * canvas.height
      const count = Math.min(100, Math.floor(area / 9000))
      for (let i = 0; i < count; i++) {
        particlesArray.push(new Particle(canvas.width, canvas.height))
      }
    }

    const connectParticles = () => {
      const maxDistance = 150
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = `rgba(147,197,253,${opacity * 0.2})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(canvas.width, canvas.height)
        particlesArray[i].draw(ctx)
      }
      connectParticles()

      animationFrameId.current = requestAnimationFrame(animate)
    }

    setCanvasDimensions()
    initParticles()
    animate()

    window.addEventListener("resize", () => {
      setCanvasDimensions()
      initParticles()
    })

    return () => {
      cancelAnimationFrame(animationFrameId.current!)
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <>
      {/* Layered gradient blur balls */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl"
          style={{ top: "10%", left: "5%" }}
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-3xl"
          style={{ top: "60%", right: "10%" }}
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-pink-500/10 blur-3xl"
          style={{ bottom: "10%", left: "30%" }}
          animate={{ x: [0, 50, 0], y: [0, 20, 0] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Canvas layer */}
      <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-30" />

      {/* Static gradient background (lowest cost) */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
    </>
  )
}
