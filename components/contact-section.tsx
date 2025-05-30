"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"

// Move static data outside component to avoid re-creation on every render
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "atharvakulkarni1612@gmail.com",
    href: "mailto:atharvakulkarni1612@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9518943376",
    href: "tel:+919518943376",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, India",
    href: "#",
  },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/atharva387" },
  { icon: Linkedin, href: "https://linkedin.com/in/atharva16" },
]

// Small reusable contact item component for clarity
function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>
  label: string
  value: string
  href: string
}) {
  return (
    <motion.div
      className="flex items-center gap-4 p-3 rounded-lg border hover:border-blue-500/50 transition-colors"
      whileHover={{ x: 5 }}
    >
      <div className="p-2 bg-blue-500/10 rounded-lg">
        <Icon size={20} className="text-blue-500" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <a href={href} className="text-foreground hover:text-blue-500 transition-colors">
          {value}
        </a>
      </div>
    </motion.div>
  )
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
    },
    []
  )

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      // Handle form submission - add real logic here
      console.log("Form submitted:", formData)
      // You could add reset or feedback here
    },
    [formData]
  )

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to collaborate on cutting-edge projects? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-0 gap-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-sm bg-card/50 border-blue-500/20">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  I'm always excited to discuss new opportunities, innovative ideas, or just talk tech!
                </p>

                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <ContactItem key={index} {...contact} />
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${
                        social.href.includes("github") ? "GitHub" : "LinkedIn"
                      } profile`}
                      className="p-3 border rounded-lg hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                      whileHover={{ scale: 1.1 }}
                    >
                      <social.icon size={20} className="text-blue-500" />
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-sm bg-card/50 border-blue-500/20">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@domain.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry / Collaboration"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, collaboration idea, or just say hello..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600">
                    <Send size={16} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}
