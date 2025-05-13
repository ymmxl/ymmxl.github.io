"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Mail } from 'lucide-react';
import ProjectCard from "@/components/project-card";
import MovingBackground from "@/components/moving-background";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAccentColor } from "@/components/color-provider";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const { accentColor } = useAccentColor();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "Lucky Strikes",
      description: "Multi-platform raffle automation suite with multithreading and advanced detection avoidance for sneaker drops; proven success.",
      tags: ["Automation", "multithreading", "Sneaker Drops"],
      image: "/images/MONKEY-selector.png?height=600&width=800",
      github: "https://github.com/ymmxl/lucky-strikes"
    },
    {
      title: "mChefs NDC Monitor",
      description: "Real-time Nike.com product tracker with instant restock alerts and detailed inventory visibility. Hosted on Heroku.",
      tags: ["Python", "Heroku", "Web Scraping", "Monitoring"],
      image: "/images/ndc-monitor.png?height=600&width=800",
      github: "https://github.com/ymmxl/mchefs-ndc-monitor",
    },
    {
      title: "mChefs AIO",
      description: "Discord bot tracking sneaker orders with real-time market data across multiple platforms.",
      tags: ["Discord bot", "Python", "Web Scraping"],
      image: "/images/stockx-checker.png?height=600&width=800",
      github: "https://github.com/ymmxl/mchefs-aio",
    },
    {
      title: "sc-retails",
      description: "Script to scrapes photos, item names and price from the reknowned https://www.supremecommunity.com/, with the option to upload to google sheets, fully automated.",
      tags: ["Web Scraping", "spreadsheet Automation", "Pattern Recognition"],
      image: "/images/sc-retails.png?height=600&width=800",
      github: "https://github.com/ymmxl/sc-retails",
    },
    {
      title: "Gatekeepr",
      description: "Advanced two-factor authentication management system. Streamlined solution for securely generating, storing, and managing OTP codes from multiple providers.",
      tags: ["2FA", "Flask", "Dashboard"],
      image: "/images/gatekeepr-dash-interface.png?height=600&width=800",
      github: "https://github.com/ymmxl/Gatekeepr",
      demo: "https://youtu.be/yf14eM25VIU"
    },
    {
      title: "LXChiah & Associates",
      description: "Pure HTML CSS website for a law firm with a modern and responsive design. Unique landing page with animated CTA button",
      tags: ["Website", "Responsive", "HTML", "CSS"],
      image: "/images/lxchiah.png?height=600&width=800",
      demo: "https://lxchiah.com"
    }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white font-mono">
      {/* Test element for Tailwind classes */}
      <MovingBackground accentColor={accentColor} />
      
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4" : "py-6"}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tighter">YMMXL.IO</h2>
          <nav>
            <ul className="flex space-x-8">
              <li><a href="#about" className="hover:text-accent transition-colors duration-300">about</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors duration-300">projects</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors duration-300">contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter">
              CREATIVE <span className="text-accent">DESIGNER</span> & DEVELOPER
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Hi, I&apos;m Henry, full-stack developer crafting intelligent solutions from UI to API.
            </p>
            <button 
              onClick={scrollToAbout}
              className="animate-bounce bg-transparent border px-6 py-3 rounded-full 
              flex items-center mx-auto transition-colors duration-1000 hover:text-black"
              style={{ borderColor: accentColor, color: accentColor }}
            >
              <span className="mr-2">Explore</span>
              <ArrowDown size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      <section id="about" ref={aboutRef} className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tighter">ABOUT ME</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-xl mb-6 leading-relaxed">
                From mechanical engineering to full-stack development, I&apos;ve transformed my passion for problem-solving into a journey of digital innovation. Specializing in building AI-powered applications and intelligent automation systems, I bridge the gap between complex technical challenges and elegant user experiences.
                </p>
                <p className="text-xl mb-6 leading-relaxed">
                With expertise in Python, web development, and API integration, I craft solutions that combine technical precision with creative problem-solving. My self-taught journey has equipped me with a unique perspective, allowing me to approach challenges with both engineering rigor and innovative thinking.              
                </p>
              </div>    
              <div>
                <h3 className="text-2xl font-bold mb-4 text-accent">SKILLS</h3>
                <ul className="grid grid-cols-2 gap-2 text-lg">
                  <li className="mb-2">Web Development</li>
                  <li className="mb-2">API Integration</li>
                  <li className="mb-2">Back-end Development</li>
                  <li className="mb-2">Full-stack Development</li>
                  <li className="mb-2">Creative Coding</li>
                  <li className="mb-2">Automation</li>
                  <li className="mb-2">AI/ML</li>
                  <li className="mb-2">Database and SQL</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tighter">SELECTED PROJECTS</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} accentColor={accentColor} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tighter">GET IN TOUCH</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-xl mb-6 leading-relaxed">
                  Interested in working together? I&apos;m always open to discussing new projects, 
                  creative ideas or opportunities to be part of your vision.
                </p>
                <div className="flex items-center mb-4">
                  <Mail className="mr-4 text-accent" />
                  <a href="mailto:hello@moonflares.com" className="text-lg hover:text-accent transition-colors">
                    hello@moonflares.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="mr-4 text-accent" />
                  <a href="https://github.com/ymmxl" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-accent transition-colors">
                    github.com/ymmxl
                  </a>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <Input 
                      type="text" 
                      placeholder="Name" 
                      className="bg-gray-900 border-gray-800 focus:border-accent text-white"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      className="bg-gray-900 border-gray-800 focus:border-accent text-white"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Message" 
                      rows={5}
                      className="bg-gray-900 border-gray-800 focus:border-accent text-white"
                    />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent-focus text-black transition-colors duration-300"
                  style={{ backgroundColor: accentColor }}>
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 border-t border-gray-800 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2025 ymmxl.Design. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="https://x.com/ymmxl" className="text-gray-400 hover:text-accent transition-colors duration-300">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">Instagram</a>
              <a href="https://www.linkedin.com/in/henrylim2113/" className="text-gray-400 hover:text-accent transition-colors duration-300">LinkedIn</a>
             </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

