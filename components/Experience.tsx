'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import ParallaxSection from './ParallaxSection';
import ScrambleText from './ScrambleText';

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'freelance' | 'volunteer';
}

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences: ExperienceItem[] = [
    {
      company: 'Your Company Name',
      position: 'Full Stack Developer',
      location: 'Remote',
      period: 'Jan 2024 - Present',
      description: [
        'Developed and maintained web applications using Next.js and TypeScript',
        'Collaborated with cross-functional teams to deliver high-quality products',
        'Implemented responsive designs and optimized performance',
      ],
      technologies: ['Next.js', 'TypeScript', 'React', 'Node.js', 'PostgreSQL'],
      type: 'work',
    },
    {
      company: 'Freelance',
      position: 'Web Developer',
      location: 'Remote',
      period: 'Mar 2023 - Dec 2023',
      description: [
        'Built custom websites for clients across various industries',
        'Managed multiple projects simultaneously with tight deadlines',
        'Provided technical consulting and maintenance support',
      ],
      technologies: ['React', 'Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
      type: 'freelance',
    },
    {
      company: 'Student Organization',
      position: 'Web Developer Volunteer',
      location: 'Semarang, Indonesia',
      period: 'Aug 2025 - Present',
      description: [
        'Developing web applications for university projects',
        'Learning modern web development technologies',
        'Contributing to open-source projects',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Git'],
      type: 'volunteer',
    },
  ];

  const getTypeColor = (type: ExperienceItem['type']) => {
    const colors = {
      work: 'bg-green-500/20 text-green-400 border-green-500/30',
      freelance: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      volunteer: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    };
    return colors[type];
  };

  const getTypeLabel = (type: ExperienceItem['type']) => {
    const labels = {
      work: 'Full Time',
      freelance: 'Freelance',
      volunteer: 'Volunteer',
    };
    return labels[type];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden" ref={ref}>
      <ParallaxSection speed={0.1}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 border-2 border-primary-500/40 rounded-xl blur-sm" />
              <div className="absolute inset-0 border border-primary-500/60 rounded-xl" />
              <h2 className="relative text-4xl sm:text-5xl font-bold px-8 py-4">
                Work <ScrambleText className="gradient-text">Experience</ScrambleText>
              </h2>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              My professional journey and contributions to various projects
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-pink-600 to-transparent hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative mb-12 md:ml-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-16 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-primary-600 to-pink-600 border-4 border-black hidden md:block" />

                {/* Content Card */}
                <div className="glass rounded-2xl p-6 hover:border-primary-500 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="w-5 h-5 text-primary-400" />
                        <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                          {exp.position}
                        </h3>
                      </div>
                      <p className="text-lg text-primary-400 font-semibold mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(exp.type)} backdrop-blur-sm whitespace-nowrap`}>
                      {getTypeLabel(exp.type)}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-primary-400 mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </ParallaxSection>
    </section>
  );
};

export default Experience;