"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, Star } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "One-Umbrella",
    description:
      "Enterprise-grade B2B/B2C platform with advanced security, real-time inventory management, and order tracking. Achieved 98% uptime across 500+ SKUs with optimized performance.",
    technologies: ["C#", ".NET", "JavaScript", "SQL", "Bootstrap"],
    image: "/oneumbrella.png?height=300&width=500",
    featured: true,
    github: "https://github.com/atharva387",
    live: "https://www.oneumbrella.co.in",
  },
  {
    title: "Easy Trials",
    description:
      "Revolutionary real-time patient monitoring system using smartwatches and AI. Winner of state-level hackathon among 200+ teams with innovative health analytics.",
    technologies: ["Java", "Firebase", "IoT", "Machine Learning"],
    image: "/easytrials.png?height=300&width=500",
    featured: true,
    github: "https://github.com/atharva387",
  },
  {
    title: "Book-My-Table",
    description:
      "Intelligent restaurant reservation platform with real-time availability, smart recommendations, and seamless payment integration.",
    technologies: ["Java", "Firebase", "Android Studio", "Real-time DB"],
    image: "/bookmytable.png?height=300&width=500",
    github: "https://github.com/atharva387/BookMyTableWeb",
  },
  {
    title: "Credit Card Approval Prediction",
    description:
      "Advanced predictive model using ensemble methods and logistic regression. Achieved 86% accuracy and published in IJARSCT journal (May 2023).",
    technologies: ["Python", "Machine Learning", "AWS S3", "Data Science"],
    image: "/credit.png?height=300&width=500",
    github: "https://github.com/atharva387",
  },
  {
    title: "TelcosIQ",
    description: "A short-code service provider compony",
    technologies: ["HTML", "CSS","Javascript","API","Chatbot"],
    image: "/telcos.png",
    github: "https://github.com/atharva387",
    live: "https://telcosiq.netlify.app/",
  },
  {
    title: "HH Photography",
    description: "pune's leading Photographer portfolio",
    technologies: ["HTML", "SCSS","javascript"],
    image: "/hh.png",
    github: "https://github.com/atharva387",
    live: "https://hh-photography.netlify.app/",
  },
  {
    title: "HH Photography",
    description: "A clean and responsive product catalog website for Priya Sales, showcasing industrial tools and equipment with easy browsing and contact options.",
    technologies: ["ReactJS", "CSS"],
    image: "/leo.png",
    github: "https://github.com/atharva387",
    live: "https://cafeleos.netlify.app/",
  },
  {
    title: "HH Photography",
    description: "A modern and inviting website for Cafe Leos, highlighting its menu, ambiance, and contact details to attract food lovers and cafe-goers.",
    technologies: ["HTML", "SCSS","javascript","API"],
    image: "/ps.png",
    github: "https://github.com/atharva387",
    live: "https://priyasales.netlify.app/",
  },
]

export function ProjectsSection() {
  const [showMore, setShowMore] = useState(false)

  const visibleProjects = showMore ? projects : projects.slice(0, 4)

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">A showcase of my recent work and contributions</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 hover:border-blue-500/50 relative backdrop-blur-sm bg-card/50">
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star size={12} />
                    FEATURED
                  </div>
                )}

                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs hover:bg-blue-500/10 hover:text-blue-500 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <Github size={12} />
                        Code
                      </a>
                    </Button>

                    {project.live && (
                      <Button variant="outline" size="sm">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <ExternalLink size={12} />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {projects.length > 4 && (
          <div className="text-center mt-10">
            <Button variant="secondary" onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show Less" : "Show More"}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
