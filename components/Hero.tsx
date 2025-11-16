'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';
import RotatingText from './RotatingText';
import GradientBlinds from './GradientBlinds';
import FloatingIcons from './FloatingIcons';

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

  const roles = [
    'Software Engineer',
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
  ];

  const stats = [
    { value: '3', suffix: '+', label: 'Years Experience' },
    { value: '9', label: 'Projects Done' },
    { value: '20', suffix: '+', label: 'Technologies' },
  ];

  return (
    <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20 pb-10"
    >
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
      <FloatingIcons />
      <div className="absolute inset-0 bg-gray-900/40 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full pointer-events-none"
      >
        <motion.div 
          variants={itemVariants} 
          className="mb-6 sm:mb-8 px-2"
        >
          <div className="relative inline-block max-w-full">
            <h2 className="relative text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold break-words">
              <span className="inline-flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="flex-shrink-0"
                >
                  <Sparkles className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary-400" />
                </motion.span>
                <span className="gradient-text inline-block px-1">
                  <SplitText text="Jhesaya Giovani Andromeda" delay={0.5} />
                </span>
                <motion.span
                  animate={{ rotate: -360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="flex-shrink-0"
                >
                  <Sparkles className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-pink-400" />
                </motion.span>
              </span>
            </h2>
            <motion.div
              className="h-0.5 sm:h-1 bg-gradient-to-r from-primary-600 via-pink-600 to-purple-600 rounded-full mt-2 sm:mt-4 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1.5, duration: 1 }}
            />
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6 max-w-3xl mx-auto px-4">
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed">
            A passionate <span className="text-primary-400 font-semibold">Full Stack Developer</span> and{' '}
            <span className="text-pink-400 font-semibold">IT Student</span> at Dian Nuswantoro University, 
            currently learning and building innovative web solutions with modern technologies.
          </p>
        </motion.div>
        <motion.div
        variants={itemVariants}
        className="mb-6 sm:mb-8"
        >
        <div className="inline-flex items-center justify-center gap-3 flex-wrap px-2">
            <div className="relative inline-block w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px]">
            <div className="glass rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-primary-500/30 bg-gradient-to-r from-primary-600/20 to-pink-600/20 backdrop-blur-sm">
                <span className="text-primary-300 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold whitespace-nowrap overflow-hidden text-ellipsis block">
                <RotatingText texts={roles} interval={2500} />
                </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-pink-600 rounded-full blur-xl opacity-30 -z-10" />
            </div>
        </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex flex-row flex-wrap justify-center gap-3 sm:gap-4 pointer-events-auto mb-10 sm:mb-16 px-4"
        >
          <MagneticButton
            href="#projects"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-primary-600 to-pink-600 text-white text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-primary-600/50 overflow-hidden flex-1 min-w-[140px] max-w-[200px]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Work
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white text-sm sm:text-base font-medium hover:border-primary-500 hover:bg-white/10 transition-all duration-300 flex-1 min-w-[140px] max-w-[180px]"
          >
            Get In Touch
          </MagneticButton>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto px-4"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold gradient-text mb-1 sm:mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;