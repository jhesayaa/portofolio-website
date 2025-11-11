'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ParallaxSection from './ParallaxSection';
import GlassIcons from './GlassIcons';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiFigma,
  SiFramer,
  SiGraphql,
  SiDocker
} from 'react-icons/si';
import { TbApi, TbCode } from 'react-icons/tb'; // ← Tambah TbCode untuk VS Code
import { VscCode } from 'react-icons/vsc'; // ← VS Code official icon

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillItems = [
    // Frontend - Primary/Cyan theme
    { icon: <SiReact size={32} />, color: 'cyan', label: 'React' },
    { icon: <SiNextdotjs size={32} />, color: 'primary', label: 'Next.js' },
    { icon: <SiTypescript size={32} />, color: 'blue', label: 'TypeScript' },
    { icon: <SiTailwindcss size={32} />, color: 'cyan', label: 'Tailwind CSS' },
    { icon: <SiFramer size={32} />, color: 'purple', label: 'Framer Motion' },
    
    // Backend - Green with purple accent
    { icon: <SiNodedotjs size={32} />, color: 'green', label: 'Node.js' },
    { icon: <SiExpress size={32} />, color: 'green', label: 'Express' },
    { icon: <SiMongodb size={32} />, color: 'green', label: 'MongoDB' },
    { icon: <SiPostgresql size={32} />, color: 'blue', label: 'PostgreSQL' },
    
    // Tools - Purple/Pink theme
    { icon: <SiGit size={32} />, color: 'orange', label: 'Git' },
    { icon: <VscCode size={32} />, color: 'blue', label: 'VS Code' },
    { icon: <SiFigma size={32} />, color: 'pink', label: 'Figma' },
    { icon: <SiDocker size={32} />, color: 'primary', label: 'Docker' },
    
    // Other - Orange/Pink theme
    { icon: <TbApi size={32} />, color: 'orange', label: 'REST API' },
    { icon: <SiGraphql size={32} />, color: 'pink', label: 'GraphQL' },
    ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={ref}>
      <ParallaxSection speed={0.1}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Hover over each icon to see the 3D glass effect
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-pink-600 mx-auto mt-4"></div>
          </motion.div>

          {/* Glass Icons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassIcons items={skillItems} />
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </ParallaxSection>
    </section>
  );
};

export default Skills;