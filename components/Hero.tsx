'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';
import RotatingText from './RotatingText';
import GradientBlinds from './GradientBlinds';

// Split Text Component (inline)
const SplitText = ({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const letters = text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.span
      className={`inline-flex overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Text untuk rotating
  const roles = [
    'Software Engineer',
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
  ];

  const stats = [
    { value: '3', suffix: '+', label: 'Years Experience' },
    { value: '25', suffix: '+', label: 'Projects Done' },
    { value: '15', suffix: '+', label: 'Technologies' },
  ];

  return (
    <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-10"
    >
      {/* GradientBlinds Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-auto">
        <GradientBlinds
          gradientColors={['#7C3AED', '#EC4899', '#8B5CF6', '#06B6D4']}
          angle={45}
          noise={0.2}
          blindCount={16}
          blindMinWidth={60}
          spotlightRadius={0.4}
          spotlightSoftness={0.8}
          spotlightOpacity={1.2}
          mouseDampening={0.1}
          distortAmount={0.5}
          shineDirection="left"
          mixBlendMode="lighten"
          mirrorGradient={false}
        />
      </div>

      {/* Dark overlay untuk readability */}
      <div className="absolute inset-0 bg-gray-900/40 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-10 pointer-events-none"
      >
        {/* Welcome Message */}
        <motion.div 
          variants={itemVariants} 
          className="mb-12"
        >
          <div className="relative inline-block">
            <h2 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="inline-flex items-center gap-3">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary-400" />
                </motion.span>
                <span className="gradient-text">
                  <SplitText text="Welcome to my Portofolio" delay={0.5} />
                </span>
                <motion.span
                  animate={{ rotate: -360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-pink-400" />
                </motion.span>
              </span>
            </h2>

            {/* Animated underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-primary-600 via-pink-600 to-purple-600 rounded-full mt-4"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1.5, duration: 1 }}
            />
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Jhesaya Giovani Andromeda
          </h1>
        </motion.div>

        {/* Rotating Text for Role with Background */}
        <motion.div
        variants={itemVariants}
        className="mb-8"
        >
        <div className="inline-flex items-center justify-center gap-3 flex-wrap">
            {/* Rotating text with button background */}
            <div className="relative inline-block min-w-[280px] sm:min-w-[350px] md:min-w-[400px]">
            <div className="glass rounded-full px-6 py-3 border border-primary-500/30 bg-gradient-to-r from-primary-600/20 to-pink-600/20 backdrop-blur-sm">
                <span className="text-primary-300 text-2xl sm:text-3xl md:text-4xl font-semibold">
                <RotatingText texts={roles} interval={2500} />
                </span>
            </div>
            
            {/* Optional: Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-pink-600 rounded-full blur-xl opacity-30 -z-10" />
            </div>
        </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 pointer-events-auto"
        >
          <MagneticButton
            href="#projects"
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-pink-600 text-white font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-primary-600/50 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium hover:border-primary-500 hover:bg-white/10 transition-all duration-300"
          >
            Get In Touch
          </MagneticButton>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;