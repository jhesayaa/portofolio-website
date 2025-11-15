'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGit
} from 'react-icons/si';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const floatingIcons = [
    { Icon: SiReact, color: '#61DAFB', x: '15%', y: '15%', delay: 0 },
    { Icon: SiNextdotjs, color: '#FFFFFF', x: '85%', y: '20%', delay: 0.5 },
    { Icon: SiTypescript, color: '#3178C6', x: '10%', y: '80%', delay: 1 },
    { Icon: SiTailwindcss, color: '#06B6D4', x: '90%', y: '75%', delay: 1.5 },
    { Icon: SiNodedotjs, color: '#339933', x: '20%', y: '50%', delay: 2 },
    { Icon: SiMongodb, color: '#47A248', x: '80%', y: '50%', delay: 2.5 },
    { Icon: SiPostgresql, color: '#4169E1', x: '50%', y: '15%', delay: 3 },
    { Icon: SiGit, color: '#F05032', x: '50%', y: '85%', delay: 3.5 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);
  const text = "WELCOME TO MY PORTFOLIO";
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="absolute inset-0 pointer-events-none">
            {floatingIcons.map(({ Icon, color, x, y, delay }, index) => (
              <motion.div
                key={index}
                className="absolute"
                style={{ left: x, top: y }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.4, 0.7, 0.4],
                  scale: [0, 1, 1.2, 1],
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut"
                }}
              >
                <div 
                  className="backdrop-blur-sm bg-white/5 rounded-lg p-1.5 sm:p-2 border border-white/10"
                  style={{ 
                    boxShadow: `0 0 20px ${color}40`,
                    filter: `drop-shadow(0 0 10px ${color})`
                  }}
                >
                  <Icon size={28} style={{ color }} className="sm:w-8 sm:h-8" />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="relative z-10 flex flex-col items-center gap-8 px-4 max-w-4xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center mb-4"
            >
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {words.map((word, wordIndex) => (
                  <motion.div
                    key={wordIndex}
                    variants={wordVariants}
                    className="inline-flex"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {word.split("").map((letter, letterIndex) => (
                      <motion.span
                        key={letterIndex}
                        variants={letterVariants}
                        className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text"
                        whileHover={{
                          scale: 1.2,
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.3 },
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.5, duration: 1 }}
                className="h-1 bg-gradient-to-r from-primary-600 via-pink-600 to-purple-600 rounded-full mt-4 mx-auto max-w-md"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
              className="relative"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-primary-600 to-pink-600 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  </motion.div>
                </div>
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-pink-600 rounded-full blur-xl opacity-50" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-center"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">
                Jhesaya Giovani Andromeda
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-gray-400 text-xs sm:text-sm"
              >
                Full Stack Developer & IT Student
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 }}
              className="w-64 sm:w-80"
            >
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-600 via-pink-600 to-purple-600 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-pink-600 blur-md opacity-50" />
                </motion.div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-400">
                <span>Loading Portfolio</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </motion.div>
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-primary-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;