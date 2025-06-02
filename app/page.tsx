"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { ScrollProgress } from "@/components/scroll-progress"
import { StartupAnimation } from "@/components/startup-animation"
import { BackgroundEffect } from "@/components/background-effect"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (!mounted) return null

  return (
    <>
      {isLoading ? (
        <StartupAnimation onComplete={handleLoadingComplete} />
      ) : (
        <main className="min-h-screen bg-background relative">
          
          <ScrollProgress />
          <Header />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
      )}
    </>
  )
}
