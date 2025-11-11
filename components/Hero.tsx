'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import ParallaxSection from './ParallaxSection';
import MagneticButton from './MagneticButton';
import TextPressure from './TextPressure';
import RotatingText from './RotatingText';

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

  return (
    <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background blobs */}
      <ParallaxSection speed={-0.3}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </ParallaxSection>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        {/* Welcome Message with Split Text */}
        <motion.div 
          variants={itemVariants} 
          className="mb-12"
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
            }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative inline-block cursor-pointer group"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-pink-600 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            
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
          </motion.div>
        </motion.div>

        {/* Main heading with Text Pressure */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <div className="text-white">
              <TextPressure text="Jhesaya Giovani" className="block" />
            </div>
            <div className="text-white">
              <TextPressure text="Andromeda" className="block" />
            </div>
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

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Student at{' '}
          <span className="text-primary-400 font-semibold">Dian Nuswantoro University</span>.
          <br />
          Building the future, one line of code at a time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
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
      </motion.div>
    </section>
  );
};

export default Hero;