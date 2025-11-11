'use client';

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const ProfileCard = () => {
  return (
    <TiltCard className="w-full max-w-sm">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl overflow-hidden group"
      >
        {/* Glass card with gradient border */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-pink-600 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
        
        <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
          {/* Profile Image - Large centered */}
          <div className="flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative mb-6"
            >
              {/* Avatar with gradient border */}
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-primary-500 via-pink-500 to-purple-500 p-1">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                  {/* Replace with your image */}
                  <div className="text-7xl font-bold gradient-text">JGA</div>
                </div>
              </div>
              
              {/* Online indicator */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900"
              />
            </motion.div>

            {/* Name and Title */}
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-white mb-2 text-center"
            >
              Jhesaya G. Andromeda
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary-400 font-medium mb-6 text-center"
            >
              Software Engineer
            </motion.p>

            {/* Stats */}
            <div className="w-full grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-gray-400">Projects</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-xs text-gray-400">Years</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-xs text-gray-400">Clients</div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-gray-400 text-center text-sm mb-6 leading-relaxed">
              Crafting digital experiences with modern technologies. 
              Passionate about clean code and beautiful UI.
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-primary-600 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-primary-600/50 transition-all duration-300"
            >
              Download CV
            </motion.button>
          </div>
        </div>

        {/* Decorative blur elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-600/30 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-600/30 rounded-full filter blur-3xl" />
      </motion.div>
    </TiltCard>
  );
};

export default ProfileCard;