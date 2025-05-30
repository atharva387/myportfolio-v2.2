"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Server, Settings, Cloud } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Java", "C++", "JavaScript", "C", "Python", "TypeScript"],
    color: "from-orange-400 to-red-500",
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "React Native", "Bootstrap", "Tailwind CSS", "HTML5"],
    color: "from-blue-400 to-cyan-500",
  },
  {
    title: "Backend",
    icon: Server,
    skills: [".NET Core", "Node.js", "Express", "REST APIs", "GraphQL", "Microservices"],
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "DevOps",
    icon: Settings,
    skills: ["Docker", "CI/CD", "Git", "GitHub Actions", "Jenkins", "Kubernetes"],
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["Firebase", "SQL Server", "MongoDB", "PostgreSQL", "Redis", "MySQL"],
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Cloud & AI",
    icon: Cloud,
    skills: ["AWS", "Firebase Hosting", "Machine Learning", "TensorFlow", "Azure", "GCP"],
    color: "from-cyan-400 to-blue-500",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground text-lg">Technologies and tools I use to bring ideas to life</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-blue-500/50 backdrop-blur-sm bg-card/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                      <category.icon size={24} className="text-white" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="bg-muted/50 rounded-lg p-2 text-sm text-center hover:bg-blue-500/10 hover:text-blue-500 transition-colors"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
