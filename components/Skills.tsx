'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ParallaxSection from './ParallaxSection';
import GlassIcons from './GlassIcons';
import LogoLoop from './LogoLoop';
import ScrambleText from './ScrambleText';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiJavascript,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiPhp,
  SiPython,
  SiFastapi,
  SiAngular,
  SiSupabase,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
  SiPostman,
  SiFramer,
  SiScikitlearn,
  SiPandas,
  SiNumpy
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { TbApi, TbDatabase } from 'react-icons/tb';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillItems = [
  // Frontend - Blue/Cyan
  { icon: <SiReact size={24} />, color: 'cyan', label: 'React' },
  { icon: <SiNextdotjs size={24} />, color: 'primary', label: 'Next.js' },
  { icon: <SiTypescript size={24} />, color: 'blue', label: 'TypeScript' },
  { icon: <SiJavascript size={24} />, color: 'orange', label: 'JavaScript' },
  { icon: <SiHtml5 size={24} />, color: 'orange', label: 'HTML5' },
  { icon: <SiCss3 size={24} />, color: 'blue', label: 'CSS3' },
  { icon: <SiTailwindcss size={24} />, color: 'cyan', label: 'Tailwind CSS' },
  { icon: <SiBootstrap size={24} />, color: 'purple', label: 'Bootstrap' },
  { icon: <SiSass size={24} />, color: 'pink', label: 'SCSS' },
  { icon: <SiAngular size={24} />, color: 'primary', label: 'Angular' },
  { icon: <SiFramer size={24} />, color: 'purple', label: 'Framer Motion' },
  
  // Backend & Languages - Green/Purple
  { icon: <SiNodedotjs size={24} />, color: 'green', label: 'Node.js' },
  { icon: <SiExpress size={24} />, color: 'green', label: 'Express.js' },
  { icon: <SiLaravel size={24} />, color: 'primary', label: 'Laravel' },
  { icon: <SiPhp size={24} />, color: 'purple', label: 'PHP' },
  { icon: <SiPython size={24} />, color: 'blue', label: 'Python' },
  { icon: <SiFastapi size={24} />, color: 'green', label: 'FastAPI' },
  { icon: <SiCplusplus size={24} />, color: 'blue', label: 'C++' },
  
  // Database - Blue/Green
  { icon: <SiSupabase size={24} />, color: 'green', label: 'Supabase' },
  { icon: <SiPostgresql size={24} />, color: 'blue', label: 'PostgreSQL' },
  { icon: <SiMysql size={24} />, color: 'blue', label: 'MySQL' },
  { icon: <SiMongodb size={24} />, color: 'green', label: 'MongoDB' },
  { icon: <TbDatabase size={24} />, color: 'blue', label: 'HeidiSQL' },
  { icon: <TbDatabase size={24} />, color: 'orange', label: 'phpMyAdmin' },
  
  // Tools & DevOps - Purple/Pink/Orange
  { icon: <SiGit size={24} />, color: 'orange', label: 'Git' },
  { icon: <SiGithub size={24} />, color: 'primary', label: 'GitHub' },
  { icon: <SiDocker size={24} />, color: 'blue', label: 'Docker' },
  { icon: <VscCode size={24} />, color: 'blue', label: 'VS Code' },
  { icon: <SiFigma size={24} />, color: 'pink', label: 'Figma' },
  { icon: <SiPostman size={24} />, color: 'orange', label: 'Postman' },
  
  // Data Science - Blue/Orange
  { icon: <SiScikitlearn size={24} />, color: 'orange', label: 'Scikit-learn' },
  { icon: <SiPandas size={24} />, color: 'blue', label: 'Pandas' },
  { icon: <SiNumpy size={24} />, color: 'cyan', label: 'NumPy' },
  
  // API
  { icon: <TbApi size={24} />, color: 'orange', label: 'REST API' },
];

  // Logo Loop Items - Top (Frontend & Popular)
  const topLogoItems = [
    { node: <SiReact className="text-[#61DAFB]" size={40} />, title: "React" },
    { node: <SiNextdotjs className="text-white" size={40} />, title: "Next.js" },
    { node: <SiTypescript className="text-[#3178C6]" size={40} />, title: "TypeScript" },
    { node: <SiJavascript className="text-[#F7DF1E]" size={40} />, title: "JavaScript" },
    { node: <SiTailwindcss className="text-[#06B6D4]" size={40} />, title: "Tailwind CSS" },
    { node: <SiHtml5 className="text-[#E34F26]" size={40} />, title: "HTML5" },
    { node: <SiCss3 className="text-[#1572B6]" size={40} />, title: "CSS3" },
    { node: <SiBootstrap className="text-[#7952B3]" size={40} />, title: "Bootstrap" },
    { node: <SiSass className="text-[#CC6699]" size={40} />, title: "SCSS" },
    { node: <SiAngular className="text-[#DD0031]" size={40} />, title: "Angular" },
    { node: <SiFramer className="text-[#0055FF]" size={40} />, title: "Framer Motion" },
    { node: <SiCplusplus className="text-[#00599C]" size={40} />, title: "C++" },
  ];

  // Logo Loop Items - Bottom (Backend, DB, Tools)
  const bottomLogoItems = [
    { node: <SiNodedotjs className="text-[#339933]" size={40} />, title: "Node.js" },
    { node: <SiExpress className="text-white" size={40} />, title: "Express.js" },
    { node: <SiLaravel className="text-[#FF2D20]" size={40} />, title: "Laravel" },
    { node: <SiPhp className="text-[#777BB4]" size={40} />, title: "PHP" },
    { node: <SiPython className="text-[#3776AB]" size={40} />, title: "Python" },
    { node: <SiFastapi className="text-[#009688]" size={40} />, title: "FastAPI" },
    { node: <SiSupabase className="text-[#3ECF8E]" size={40} />, title: "Supabase" },
    { node: <SiPostgresql className="text-[#4169E1]" size={40} />, title: "PostgreSQL" },
    { node: <SiMysql className="text-[#4479A1]" size={40} />, title: "MySQL" },
    { node: <SiMongodb className="text-[#47A248]" size={40} />, title: "MongoDB" },
    { node: <SiGit className="text-[#F05032]" size={40} />, title: "Git" },
    { node: <SiGithub className="text-white" size={40} />, title: "GitHub" },
    { node: <SiDocker className="text-[#2496ED]" size={40} />, title: "Docker" },
    { node: <VscCode className="text-[#007ACC]" size={40} />, title: "VS Code" },
    { node: <SiFigma className="text-[#F24E1E]" size={40} />, title: "Figma" },
    { node: <SiPostman className="text-[#FF6C37]" size={40} />, title: "Postman" },
    { node: <SiScikitlearn className="text-[#F7931E]" size={40} />, title: "Scikit-learn" },
    { node: <SiPandas className="text-[#150458]" size={40} />, title: "Pandas" },
    { node: <SiNumpy className="text-[#013243]" size={40} />, title: "NumPy" },
  ];

   return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={ref}>
      <ParallaxSection speed={0.1}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Scramble Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="relative inline-block mb-4">
              {/* Border Background */}
              <div className="absolute inset-0 border-2 border-primary-500/40 rounded-xl blur-sm" />
              <div className="absolute inset-0 border border-primary-500/60 rounded-xl" />
              
              {/* Text with Scramble */}
              <h2 className="relative text-4xl sm:text-5xl font-bold px-8 py-4">
                <ScrambleText>Skills & </ScrambleText>
                <ScrambleText className="gradient-text">Expertise</ScrambleText>
              </h2>
            </div>
            
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              A comprehensive collection of languages, frameworks, and tools I leverage to build scalable, efficient, and innovative solutions throughout my development journey
            </p>
          </motion.div>

          {/* Top Logo Loop */}
          <div className="mb-12 opacity-30">
            <LogoLoop
              logos={topLogoItems}
              speed={100}
              direction="left"
              logoHeight={40}
              gap={48}
              pauseOnHover={false}
              fadeOut={true}
              fadeOutColor="#000000"
            />
          </div>

          {/* Glass Icons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassIcons items={skillItems} />
          </motion.div>

          {/* Bottom Logo Loop */}
          <div className="mt-12 opacity-30">
            <LogoLoop
              logos={bottomLogoItems}
              speed={100}
              direction="right"
              logoHeight={40}
              gap={48}
              pauseOnHover={false}
              fadeOut={true}
              fadeOutColor="#000000"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </ParallaxSection>
    </section>
  );
};

export default Skills;