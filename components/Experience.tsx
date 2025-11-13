'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useMemo } from 'react'; // ← Tambah useMemo
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import ParallaxSection from './ParallaxSection';
import ScrambleText from './ScrambleText';
import ElectricBorder from './ElectricBorder';

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'freelance' | 'business';
}

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Memoize experiences data
  const experiences: ExperienceItem[] = useMemo(() => [
    {
      company: 'JNE COUNTER MDA',
      position: 'Self-Checkout Operator (SCO)',
      location: 'Semarang, Indonesia',
      period: 'Aug 2023 - Present',
      description: [
        'Managing self-checkout operations and customer service',
        'Handling package processing and logistics coordination',
        'Ensuring smooth daily operations and customer satisfaction',
      ],
      technologies: ['Customer Service', 'Logistics', 'Operations'],
      type: 'work',
    },
    {
      company: 'Noxa Tech',
      position: 'CEO & Founder',
      location: 'Semarang, Indonesia',
      period: 'Nov 2025 - Present',
      description: [
        'Founded and leading a growing tech company specializing in custom web and mobile solutions',
        'Providing comprehensive services including website development, applications, and UI/UX design',
        'Successfully delivered Kasir App as the first client project, establishing company credibility',
        'Building strategic partnerships and expanding client portfolio',
      ],
      technologies: ['Next.js', 'React', 'Node.js', 'UI/UX Design', 'Business Development'],
      type: 'business',
    },
    {
      company: 'Izza Web',
      position: 'Full Stack Developer',
      location: 'Semarang, Indonesia',
      period: 'Jul 2024 - Dec 2024',
      description: [
        'Developed end-to-end web applications using modern tech stack',
        'Worked with diverse technologies across frontend, backend, and databases',
        'Collaborated with team to deliver client projects on time',
        'Implemented responsive designs and optimized application performance',
      ],
      technologies: ['React', 'Next.js', 'Laravel', 'PHP', 'Node.js', 'MySQL', 'PostgreSQL', 'MongoDB', 'Tailwind CSS'],
      type: 'work',
    },
    {
      company: 'End User Development',
      position: 'Data Entry Specialist',
      location: 'Semarang, Indonesia',
      period: 'Oct 2023 - Dec 2023',
      description: [
        'Managed and input end-user data including MOA, MOU, and IA documents',
        'Ensured data accuracy and compliance with documentation standards',
        'Maintained organized records and database systems',
        'Collaborated with legal and administrative teams',
      ],
      technologies: ['Data Entry', 'Documentation', 'Microsoft Office', 'Database Management'],
      type: 'work',
    },
  ], []); // ← Empty deps = hanya calculate sekali

  // Memoize helper functions
  const getTypeColor = useMemo(() => (type: ExperienceItem['type']) => {
    const colors = {
      work: 'bg-green-500/20 text-green-400 border-green-500/30',
      freelance: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      business: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    };
    return colors[type];
  }, []);

  const getTypeLabel = useMemo(() => (type: ExperienceItem['type']) => {
    const labels = {
      work: 'Full Time',
      freelance: 'Freelance',
      business: 'Entrepreneur',
    };
    return labels[type];
  }, []);

  const getElectricBorderColor = useMemo(() => (type: ExperienceItem['type']) => {
    const colors = {
      work: '#10b981',
      freelance: '#3b82f6',
      business: '#a855f7',
    };
    return colors[type];
  }, []);

  // Memoize variants
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }), []);

  const itemVariantsLeft = useMemo(() => ({
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }), []);

  const itemVariantsRight = useMemo(() => ({
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }), []);

  return (
    <section id="experience" className="py-20 relative overflow-hidden" ref={ref}>
      <ParallaxSection speed={0.1}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              My professional journey from operations to entrepreneurship and development
            </p>
          </motion.div>

          {/* Timeline Alternating */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-pink-600 to-transparent hidden lg:block" />

            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={isLeft ? itemVariantsLeft : itemVariantsRight}
                  className={`relative mb-12 lg:mb-24 ${
                    isLeft ? 'lg:pr-[50%] lg:pl-0' : 'lg:pl-[50%] lg:pr-0'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-primary-600 to-pink-600 border-4 border-black hidden lg:block z-10" />

                  {/* Content Card with Electric Border */}
                  <div className={isLeft ? 'lg:mr-8' : 'lg:ml-8'}>
                    <ElectricBorder
                      color={getElectricBorderColor(exp.type)}
                      speed={1}
                      chaos={0.5}
                      thickness={2}
                      style={{ borderRadius: 16 }}
                    >
                      <div className="glass rounded-2xl p-6 group bg-black/50">
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
                    </ElectricBorder>
                  </div>
                </motion.div>
              );
            })}
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