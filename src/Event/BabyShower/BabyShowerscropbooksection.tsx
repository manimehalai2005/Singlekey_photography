'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function BabyShowerScrapbookSection() {
  // Stagger animation variants for letter-by-letter reveal
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      },
    },
  };

  // Image Drop-in & Continuous Jump Animation Variants
  const jumpImageVariants: Variants = {
    hidden: { opacity: 0, y: -60, scale: 0.9 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: customDelay,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const mainTitle = "Baby Shower";
  const quoteText = "Welcoming our little miracle with endless love, traditional blessings, and heartfelt joy.";

  return (
    <section className=" w-full bg-black text-white py-16 px-4 sm:px-8 flex justify-center items-center overflow-hidden font-sans">
      
      {/* Main Container Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-8xl w-full  p-6 sm:p-12 shadow-2xl relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* --- LEFT SIDE: Letter-by-Letter Animated Typography --- */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 z-20">
            
            {/* Subtitle */}
            <motion.p 
              variants={letterVariants}
              className="text-xs sm:text-sm uppercase tracking-[0.4em] font-semibold text-[#D4AF37]"
            >
              Traditional Seemantham
            </motion.p>

            {/* Main Cursive/Serif Style Title - Letter by Letter */}
            <motion.h1 
              variants={containerVariants}
              className="text-5xl sm:text-7xl font-serif italic font-bold tracking-wide text-white leading-tight flex flex-wrap gap-x-3"
            >
              {mainTitle.split(" ").map((word, wordIdx) => (
                <span key={wordIdx} className="inline-flex overflow-hidden pb-1">
                  {word.split("").map((char, charIdx) => (
                    <motion.span 
                      key={charIdx} 
                      variants={letterVariants} 
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>

            {/* Quote / Subtext - Letter by Letter */}
            <motion.p 
              variants={containerVariants}
              className="text-neutral-400 text-sm sm:text-base italic max-w-sm leading-relaxed flex flex-wrap gap-x-1"
            >
              &quot;{quoteText.split(" ").map((word, wordIdx) => (
                <span key={wordIdx} className="inline-flex mr-1 mb-1">
                  {word.split("").map((char, charIdx) => (
                    <motion.span key={charIdx} variants={letterVariants} className="inline-block">
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}&quot;
            </motion.p>

          </div>

          {/* --- RIGHT SIDE: Template Photo Collage with Jumping Animations --- */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center relative">
            
            {/* 1. Center/Left Large Feature Photo (Bangle Ceremony / Mom-to-be) */}
            <motion.div
              custom={0.2}
              variants={jumpImageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="sm:col-span-7 relative aspect-[4/5] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl group"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <img
                  src="https://i.pinimg.com/736x/c0/13/07/c013072cdef60e34a80bf1abc83c285f.jpg"
                  alt="Mom to be blessing ceremony"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </motion.div>

            {/* Right Stack (Photo 2 & Photo 3) */}
            <div className="sm:col-span-5 flex flex-col gap-4">
              
              {/* 2. Top Right Photo (Traditional Feast / Cake) */}
              <motion.div
                custom={0.4}
                variants={jumpImageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl group"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="w-full h-full"
                >
                  <img
                    src="https://i0.wp.com/cenduparam.com/wp-content/uploads/2019/03/IMG_0157.jpg?resize=768%2C1024&ssl=1"
                    alt="Traditional baby shower feast"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              </motion.div>

              {/* 3. Bottom Right Photo (Balloons & Gifts) */}
              <motion.div
                custom={0.6}
                variants={jumpImageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl group"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="w-full h-full"
                >
                  <img
                    src="https://www.chocovira.in/wp-content/uploads/2020/08/Baby-Shower-Ceremony-Outfit-In-India.jpg"
                    alt="Baby shower decorations"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              </motion.div>

            </div>

          </div>

        </div>
      </motion.div>

    </section>
  );
}