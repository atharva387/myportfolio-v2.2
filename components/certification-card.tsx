"use client"

import { Award, Cloud, Code, Container, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { useMemo } from "react"

interface CertificationCardProps {
  title: string
  issuer: string
  icon: "cloud" | "code" | "container"
}

export default function CertificationCard({ title, issuer, icon }: CertificationCardProps) {
  const iconComponent = useMemo(() => {
    const baseClass = "h-5 w-5 text-cyan-400"
    switch (icon) {
      case "cloud":
        return <Cloud className={baseClass} />
      case "code":
        return <Code className={baseClass} />
      case "container":
        return <Container className={baseClass} />
      default:
        return <Award className={baseClass} />
    }
  }, [icon])

  const gradientClass = useMemo(() => {
    switch (icon) {
      case "cloud":
        return "from-blue-400 to-cyan-500"
      case "code":
        return "from-green-400 to-emerald-500"
      case "container":
        return "from-purple-400 to-pink-500"
      default:
        return "from-cyan-400 to-blue-500"
    }
  }, [icon])

  return (
    <motion.div
      className="bg-gray-900/50 border border-cyan-400/20 rounded-lg p-5 backdrop-blur-sm relative overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 30px rgba(34, 211, 238, 0.15)",
        borderColor: "rgba(34, 211, 238, 0.4)",
      }}
      viewport={{ once: true }}
    >
      {/* Top border accent */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradientClass}`} />

      {/* Hover holographic effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />

      <div className="flex items-start relative z-10">
        <motion.div
          className="flex-shrink-0 mr-4"
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
            {iconComponent}
          </div>
        </motion.div>

        <div>
          <motion.h3
            className="font-semibold mb-1 text-white font-mono"
            whileHover={{ x: 5, color: "#22d3ee" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-gray-400 text-sm font-mono"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {issuer}
          </motion.p>

          {/* Verified Badge */}
          <motion.div
            className="mt-2 inline-flex items-center gap-1 text-xs text-green-400 font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            aria-label="Verified Certification"
          >
            <Shield size={12} aria-hidden="true" />
            Verified
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
