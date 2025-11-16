'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';
import ParallaxSection from './ParallaxSection';
import ScrambleText from './ScrambleText';
import Image from 'next/image';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  skills: string[];
}

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates: Certificate[] = [
    {
      title: 'Internship in IZZAWEB',
      issuer: 'IZZAWEB',
      date: 'Dec 2024',
      image: '/certificates/izzaweb.jpg', 
      skills: ['Laravel', 'PHP', 'PHP M', 'TypeScript'],
    },
        {
      title: 'DNCC',
      issuer: 'DNCC',
      date: 'Nov 2024',
      image: '/certificates/sertifdncc.png', 
      skills: ['Pandas, Numpy, Python, Scikit-Learn'],
    },
    {
      title: 'Courses',
      issuer: 'Skillshop',
      date: 'Nov 2025',
      image: '/certificates/sertifgoogle1.png', 
      skills: ['AI-Powered'],
    },
        {
      title: 'Courses',
      issuer: 'Skillshop',
      date: 'Nov 2025',
      image: '/certificates/sertifgoogle2.png', 
      skills: ['Google Analytics'],
    },
        {
      title: 'Courses',
      issuer: 'IBM',
      date: 'Nov 2025',
      image: '/certificates/sertifibm1.png', 
      skills: ['Data Fundamental'],
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="certificates" className="py-20 relative overflow-hidden" ref={ref}>
      <ParallaxSection speed={0.1}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 border-2 border-primary-500/40 rounded-xl blur-sm" />
              <div className="absolute inset-0 border border-primary-500/60 rounded-xl" />
              <h2 className="relative text-4xl sm:text-5xl font-bold px-8 py-4">
                <ScrambleText>Certificates & </ScrambleText>
                <ScrambleText className="gradient-text">Achievements</ScrambleText>
              </h2>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Professional certifications and courses completed to enhance my skills
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {certificates[currentIndex].image ? (
                    <Image
                      src={certificates[currentIndex].image}
                      alt={certificates[currentIndex].title}
                      fill
                      className="object-contain p-4 sm:p-6 bg-gradient-to-br from-primary-600/5 to-pink-600/5"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-600/20 to-pink-600/20">
                      <Award className="w-24 h-24 text-primary-400 opacity-50" />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
              {certificates.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/10 transition-all z-10 group"
                    aria-label="Previous certificate"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:-translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/10 transition-all z-10 group"
                    aria-label="Next certificate"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                    <span className="text-white text-xs sm:text-sm font-medium">
                      {currentIndex + 1} / {certificates.length}
                    </span>
                  </div>
                </>
              )}
            </div>
            {certificates.length > 1 && (
              <div className="mt-4 sm:mt-6 flex justify-center gap-2 sm:gap-3 flex-wrap">
                {certificates.map((cert, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      currentIndex === index
                        ? 'border-primary-500 scale-110'
                        : 'border-white/10 hover:border-white/30 opacity-50 hover:opacity-100'
                    }`}
                  >
                    {cert.image ? (
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-pink-600/20 flex items-center justify-center">
                        <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400" />
                      </div>
                    )}
                    {currentIndex === index && (
                      <div className="absolute inset-0 bg-primary-500/20" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </ParallaxSection>
    </section>
  );
};

export default Certificates;