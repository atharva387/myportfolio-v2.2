"use client"

import { motion } from "framer-motion"
import { CalendarDays, MapPin, Briefcase } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    company: "QuantumSky Info Pvt. Ltd.",
    position: "Software Developer",
    duration: "Jul 2023–Present",
    location: "Pune, India",
    responsibilities: [
      "Architected and deployed full-stack e-commerce platform using .NET, React, and SQL, achieving 40% faster load times and supporting 1K+ monthly active users",
      "Engineered RESTful APIs with advanced caching strategies, reducing response latency by 35% and improving overall system performance",
      "Delivered 10+ client-facing websites with mobile-first responsive design, maintaining 100% on-time delivery record",
      "Implemented automated CI/CD pipeline using Docker and GitHub Actions, reducing deployment time from 2 hours to 20 minutes",
    ],
  },
  {
    company: "ARS Infotech",
    position: "Trainee Support Software Engineer",
    duration: "Jan 2023–Jul 2023",
    location: "Pune, India",
    responsibilities: [
      "Resolved 50+ critical support issues and system bugs, achieving 90% client satisfaction rating through efficient problem-solving",
      "Optimized application performance by identifying bottlenecks using advanced log analysis and SQL query optimization techniques",
      "Enhanced Excel-based reporting workflows with automation scripts, increasing team productivity by 30%",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-muted-foreground text-lg">My career path and professional achievements</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-20 pb-12 last:pb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-background"></div>

                <Card className="hover:shadow-lg transition-all duration-300 border-border/50 hover:border-blue-500/50 backdrop-blur-sm bg-card/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{exp.company}</CardTitle>
                        <p className="text-blue-500 font-semibold text-lg">{exp.position}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase size={16} />
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <CalendarDays size={16} />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <motion.li
                          key={respIndex}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: respIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed">{responsibility}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
