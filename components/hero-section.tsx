"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/atharva387",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/atharva16",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:atharvakulkarni1612@gmail.com",
      label: "Email",
    },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Atharva_CV.pdf"; // Ensure this file is in your public folder
    link.download = "Atharva_Kulkarni_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-sm font-medium text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Atharva Kulkarni
              </span>
            </motion.h1>

            <motion.h2
              className="text-xl lg:text-2xl text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Full-Stack Developer | ML Researcher | Hackathon Winner
            </motion.h2>

            <motion.p
              className="text-muted-foreground mb-8 leading-relaxed text-lg max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Architecting scalable solutions with 2+ years of experience in
              .NET, React, Java, and Firebase. Transforming ideas into reality
              through code.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                  <ArrowDown size={16} />
                </a>
              </Button>

              <Button variant="outline" size="lg" onClick={handleDownloadCV}>
                <Download size={16} className="mr-2" />
                Download CV
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="p-3 rounded-lg border border-border hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={label}
                >
                  <Icon
                    size={20}
                    className="text-muted-foreground group-hover:text-blue-500 transition-colors"
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center"
                animate={{
                  scale: [1, 1.02, 1],
                  y: [0, -6, 0],
                  opacity: [1, 0.9, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-72 h-72 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-600">
                    <Image
                      src="/placeholder.jpg?height=256&width=256"
                      alt="Atharva Kulkarni"
                      width={256}
                      height={256}
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              {/* <motion.div
  className="absolute top-10 right-10 w-4 h-4 bg-blue-500 rounded-full"
  animate={{
x: [
      50.74, 47.23, 42.28, 32.67, 14.12, -5.17, -30.13, -58.66, -78.86, -105.00,
      -131.14, -151.34, -179.87, -204.83, -224.12, -241.57, -251.18, -256.13,
      -260.74, -256.13, -251.18, -241.57, -224.12, -204.83, -179.87, -151.34,
      -131.14, -105.00, -78.86, -58.66, -30.13, -5.17, 14.12, 32.67, 42.28, 47.23,
    ],
    y: [
      115.00, 141.11, 177.30, 192.87, 215.11, 233.34, 249.91, 259.11, 263.19, 270.74,
      263.19, 259.11, 249.91, 233.34, 215.11, 192.87, 177.30, 141.11, 115.00, 88.89,
      52.70, 37.13, 14.89, -3.34, -19.91, -29.11, -33.19, -40.74, -33.19, -29.11,
      -19.91, -3.34, 14.89, 37.13, 52.70, 88.89,
    ],


  }}
  transition={{
    duration: 3.5,
    ease: "easeInOut",
    repeat: Infinity,
  }}
/> 
 */}
              <motion.div
                className="absolute top-10 right-10 w-4 h-4 bg-blue-500 rounded-full"
                animate={{ y: [0, -30, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute bottom-10 left-10 w-6 h-6 border-2 border-purple-500 rounded-full"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
