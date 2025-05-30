"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Code, Trophy } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "State-Level Hackathon Winner",
    description: "1st place among 200+ teams for Easy Trials healthcare innovation (2022)",
    color: "text-yellow-500",
  },
  {
    icon: Award,
    title: "Published Research Paper",
    description: "ML research published in IJARSCT journal (May 2023)",
    color: "text-purple-500",
  },
  {
    icon: Code,
    title: "2+ Years Experience",
    description: "Full-stack development with modern technologies",
    color: "text-blue-500",
  },
  {
    icon: Users,
    title: "Leadership Role",
    description: "Founder of Explore X Escape trekking club",
    color: "text-green-500",
  },
]

const AchievementCard = memo(({ icon: Icon, title, description, color }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-blue-500/50 backdrop-blur-sm bg-card/50">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg bg-muted/50 ${color}`}>
            <Icon size={24} />
          </div>
          <div>
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
))

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg">
            Passionate developer with a drive for innovation and excellence
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="mb-12 backdrop-blur-sm bg-card/50 border-blue-500/20">
            <CardContent className="p-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate <span className="text-blue-500 font-semibold">full-stack developer</span> with a
                strong foundation in both front-end and back-end technologies. My journey in software development
                has been driven by a deep interest in creating efficient, scalable, and user-friendly applications
                that solve real-world problems.
              </p>
              <p>
                With experience in <span className="text-green-500">.NET</span>,{" "}
                <span className="text-orange-500">Java</span>, <span className="text-blue-500">React</span>, and{" "}
                <span className="text-yellow-500">Firebase</span>, I've worked on diverse projects from
                e-commerce to healthcare. I'm particularly proud of my{" "}
                <span className="text-purple-500">ML research</span> published in IJARSCT.
              </p>
              <p>
                Beyond tech, I value teamwork and timely delivery. I'm the
                <span className="text-blue-500"> Founder of Explore X Escape</span>, a trekking club,
                and a proud member of the Rotaract Club in Pune.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  )
}
