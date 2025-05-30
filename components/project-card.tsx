"use client"

import { Button } from "@/components/ui/button"
import { Github, Star, Zap } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  subtitle: string
  technologies: string[]
  description: string
  imageUrl: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export default function ProjectCard({
  title,
  subtitle,
  technologies,
  description,
  imageUrl,
  liveUrl,
  githubUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      className={`bg-gray-900/50 border rounded-lg overflow-hidden backdrop-blur-sm group relative ${
        featured ? "border-cyan-400/40" : "border-cyan-400/20"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{
        scale: 1.01,
        borderColor: "rgba(34, 211, 238, 0.6)",
      }}
      viewport={{ once: true }}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <Star size={12} />
          FEATURED
        </div>
      )}

      <div className="relative z-10 bg-gray-900/50 rounded-lg">
        <div className="relative h-48 w-full overflow-hidden">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-white font-mono group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>

          <p className="text-cyan-400 mb-4 text-sm font-mono">{subtitle}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 text-gray-300 rounded-full text-xs font-mono hover:border-cyan-400/30 hover:text-cyan-300 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

          <div className="flex gap-3">
            {liveUrl && (
              <Button
                size="sm"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border border-cyan-400/30"
              >
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-mono text-xs"
                >
                  <Zap size={12} /> Live Demo
                </a>
              </Button>
            )}

            {githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400"
              >
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-mono text-xs"
                >
                  <Github size={12} /> Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
