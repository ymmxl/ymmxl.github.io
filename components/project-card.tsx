"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  accentColor: string;
}

export default function ProjectCard({ project, index, accentColor }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg bg-gray-900"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex space-x-4">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-accent/20 transition-colors"
              >
                <Github size={20} className="text-white" />
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-accent/20 transition-colors"
              >
                <ExternalLink size={20} className="text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 tracking-tight">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              style={{ color: accentColor }}
              className="text-xs px-3 py-1 rounded-full bg-gray-800 text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}