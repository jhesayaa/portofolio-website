'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Lock, CheckCircle, Clock } from 'lucide-react';
import Image from 'next/image';
import TiltCard from './TiltCard';
import ScrambleText from './ScrambleText';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'MuslimDailyLife',
      description: 'Islamic lifestyle platform with daily prayers, Quran readings, and religious guidance',
      tags: ['Laravel', 'PHP', 'Blade', 'Tailwind CSS', 'API'],
      demo: 'https://muslimdailylife.org',
      image: '/projects/muslimdailylife.jpg',
      size: 'medium',
      status: 'live',
    },
    {
      title: 'Padelfy',
      description: 'Sports booking platform for padel courts with real-time availability',
      tags: ['Vite', 'Node.js', 'TypeScript', 'Supabase', 'JWT', 'Midtrans', 'OpenAPI', 'Postgres'],
      image: '/projects/padelfy.jpg',
      size: 'small',
      status: 'progress',
      isPrivate: true,
     
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio with stunning animations and interactive elements',
      tags: ['Next.js', 'TypeScript', 'Framer Motion'],
      demo: '#',
      github: 'https://github.com/jhesayaa/portofolio-website',
      image: '/projects/portofolio.jpg',
      size: 'small',
      status: 'current',
    },
    {
      title: 'Kasir App',
      description: 'POS application with inventory management and sales reporting',
      tags: ['Laravel', 'PHP', 'Blade', 'Sqlite', 'Electron', 'Bootstrap'],
      image: '/projects/kasir.jpg',
      size: 'medium',
      status: 'progress',
      isPrivate: true,
    },
    {
      title: 'E-Commerce Viqiqa Cake',
      description: 'E-commerce platform for local bakery with product catalog and orders',
      tags: ['Laravel', 'PHP', 'HeidiSQL', 'Filament', 'Blade', 'TailwindCSS'],
      github: 'https://github.com/jhesayaa/E-Commerce-ViqiqaCake',
      image: '/projects/viqiqa.jpg',
      size: 'medium',
      status: 'completed',
    },
    {
      title: 'Aurora Photo Studio',
      description: 'Photography studio website with portfolio gallery and booking system',
      tags: ['Laravel', 'PHP', 'HeidiSQL', 'Bootstrap'],
      github: 'https://github.com/jhesayaa/AuroraStudio',
      image: '/projects/auroraphoto.jpg',
      size: 'small',
      status: 'completed',


    },
    {
      title: 'PT Adisaras Barokah',
      description: 'Corporate admin system for company operations',
      tags: ['Laravel', 'PHP', 'phpMyAdmin', 'Bootstrap'],
      image: '/projects/adisaras.jpg',
      size: 'small',
      status: 'completed',
      isPrivate: true,
    },
    {
      title: 'BMBerdaya',
      description: 'Community empowerment platform admin panel',
      tags: ['Laravel', 'PHP', 'phpMyAdmin', 'Bootstrap'],
      image: '/projects/bmberdaya.jpg',
      size: 'small',
      status: 'completed',
      isPrivate: true,
    },
    {
      title: 'Tiara Tani',
      description: 'Agricultural management dashboard for tracking crops and farmer data',
      tags: ['Laravel', 'PHP', 'phpMyAdmin', 'Bootstrap'],
      image: '/projects/tiaratani.jpg',
      size: 'small',
      status: 'completed',
      isPrivate: true,
    },
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      live: { icon: <CheckCircle className="w-3 h-3" />, text: 'Live', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
      progress: { icon: <Clock className="w-3 h-3" />, text: 'In Progress', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
      completed: { icon: <CheckCircle className="w-3 h-3" />, text: 'Completed', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
      current: { icon: <CheckCircle className="w-3 h-3" />, text: 'Current', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
    };
    return badges[status as keyof typeof badges];
  };

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
    <section id="projects" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 border-2 border-primary-500/40 rounded-xl blur-sm" />
            <div className="absolute inset-0 border border-primary-500/60 rounded-xl" />
            <h2 className="relative text-4xl sm:text-5xl font-bold px-8 py-4">
              <ScrambleText className="text-primary">Featured</ScrambleText> <ScrambleText className="gradient-text">Projects</ScrambleText>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A showcase of my work ranging from live production applications to ongoing developments
          </p>
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

            const badge = getStatusBadge(project.status);

            return (
              <motion.div key={index} variants={itemVariants} className={gridClass}>
                <TiltCard className="h-full">
                  <div className="h-full glass rounded-2xl overflow-hidden group hover:border-primary-500 transition-all duration-300 relative">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      <div className={`absolute top-4 right-4 px-2 py-1 rounded-full border ${badge.color} flex items-center gap-1 text-xs font-medium backdrop-blur-md z-10`}>
                        {badge.icon}
                        {badge.text}
                      </div>
                      <div className="absolute bottom-4 left-4 text-6xl font-bold text-white/20 z-10">
                        {index + 1}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:gradient-text transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 text-xs bg-white/5 text-gray-300 rounded-full border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-pink-600 text-white text-xs font-medium hover:shadow-lg hover:shadow-primary-600/50 transition-all duration-300"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Demo
                          </a>
                        )}
                        {project.github && !project.isPrivate && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-white text-xs font-medium hover:bg-white/10 border border-white/10 transition-all duration-300"
                          >
                            <Github className="w-3 h-3" />
                            Code
                          </a>
                        )}
                        {project.isPrivate && (
                          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-gray-400 text-xs font-medium border border-white/10">
                            <Lock className="w-3 h-3" />
                            Private
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default Projects;