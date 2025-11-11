'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import TiltCard from './TiltCard';

const BentoGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack platform with payment integration and admin dashboard',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      size: 'large', // Takes 2 columns
    },
    {
      title: 'Task Management',
      description: 'Real-time collaboration with drag-and-drop',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      size: 'medium',
    },
    {
      title: 'AI Chatbot',
      description: 'NLP-powered assistant',
      tags: ['Python', 'TensorFlow'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      size: 'small',
    },
    {
      title: 'Weather App',
      description: 'Real-time forecasts with maps',
      tags: ['Next.js', 'API'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      size: 'small',
    },
    {
      title: 'Social Dashboard',
      description: 'Analytics with data visualizations',
      tags: ['React', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      size: 'medium',
    },
    {
      title: 'Portfolio CMS',
      description: 'Drag-and-drop builder with templates',
      tags: ['React', 'Node.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      size: 'large',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-pink-600 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr"
        >
          {projects.map((project, index) => {
            const gridClass =
              project.size === 'large'
                ? 'md:col-span-2 md:row-span-2'
                : project.size === 'medium'
                ? 'md:col-span-2'
                : 'md:col-span-1';

            return (
              <motion.div key={index} variants={itemVariants} className={gridClass}>
                <TiltCard className="h-full">
                  <div className="h-full glass rounded-2xl p-6 flex flex-col justify-between group hover:border-primary-500 transition-all duration-300 relative overflow-hidden">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      {/* Number badge */}
                      <div className="text-8xl font-bold text-white/5 absolute -top-4 -right-4">
                        {index + 1}
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-xs bg-primary-600/20 text-primary-300 rounded-full border border-primary-600/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 relative z-10">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;