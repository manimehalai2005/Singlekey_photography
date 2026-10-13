"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import NamingCeremonyHeroSection from './NamingCeremonyHerosection';
import InfinitePhotoSlider from '../Photogallerytemplate';
import StarfieldCursor from '@/src/StarFieldCursor';
import WeddingDriftGallery from '../Prewedd';

export default function NamingCeremonyAbout() {
  // Container variant for staggering children letters
  const sentenceVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025,
        delayChildren: 0.1,
      },
    },
  };

  // Letter variant for individual letter reveal
  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.4, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      },
    },
  };

  const subTitle = "A Blessed Celebration";
  const mainTitle = "Naming Ceremony";
  const paragraph1 = "We joyfully invite you to celebrate the sacred naming ceremony of our beloved little one. Join us as we bestow our blessing, love, and a cherished name for a lifetime of happiness.";
  const paragraph2 = "The special day will be filled with traditional rituals, joyous family gatherings, sweet delicacies, and warm blessings. Your presence will make this milestone even more memorable and unforgettable for our family.";

  return (
    <>
    <StarfieldCursor/>
    <section className="relative w-full bg-transparent text-white flex flex-col justify-center items-center px-6 sm:px-12 py-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-10">
        
        {/* Left Side: Overlapping Photo Collage */}
        <div className="lg:col-span-6 relative flex justify-center items-center h-[420px] sm:h-[480px]">
          
          {/* Background Larger Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute left-0 top-0 w-72 sm:w-[380px] h-72 sm:h-88 bg-neutral-900 transform -rotate-3 z-10 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl"
          >
            <div className="w-full h-full overflow-hidden bg-neutral-950">
              <img
                src="https://tse1.explicit.bing.net/th/id/OIP.lqxdK3YhMajMoUteDQZ5ngHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Baby Celebration"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Foreground Smaller Overlapping Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute right-2 bottom-4 w-60 sm:w-72 p-2.5 pb-8 transform rotate-3 z-30 "
          >
            <div className="w-full h-44 sm:h-52 overflow-hidden rounded-xl relative">
              <img
                src="https://tse3.mm.bing.net/th/id/OIP.geYP-c6F3U2ZPoWSg5OMKgHaHW?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Naming Ceremony Details"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Play Button Overlay Effect */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
               
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Content with Letter-by-Letter Open Animation */}
        <div className="lg:col-span-6 text-left flex flex-col justify-center space-y-4">
          
          {/* Subtitle - Letter by Letter */}
          <motion.span 
            variants={sentenceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs sm:text-sm uppercase tracking-[0.4em] font-bold text-[#C89B7B] block mb-2 flex flex-wrap"
          >
            {subTitle.split(" ").map((word, wIdx) => (
              <span key={wIdx} className="inline-flex mr-2">
                {word.split("").map((c, cIdx) => (
                  <motion.span key={cIdx} variants={letterVariants} className="inline-block">
                    {c}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.span>

          {/* Main Title - Letter by Letter */}
          <motion.h2 
            variants={sentenceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-serif italic font-bold text-4xl sm:text-5xl lg:text-6xl text-orange-300 tracking-wide mb-6 flex flex-wrap gap-x-3"
          >
            {mainTitle.split(" ").map((word, wIdx) => (
              <span key={wIdx} className="inline-flex">
                {word.split("").map((c, cIdx) => (
                  <motion.span key={cIdx} variants={letterVariants} className="inline-block">
                    {c}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h2>

          {/* Paragraph 1 - Letter by Letter */}
          <motion.p 
            variants={sentenceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm sm:text-base text-orange-200 font-medium leading-relaxed mb-4 flex flex-wrap gap-x-1"
          >
            {paragraph1.split(" ").map((word, wIdx) => (
              <span key={wIdx} className="inline-flex mr-1 mb-1">
                {word.split("").map((c, cIdx) => (
                  <motion.span key={cIdx} variants={letterVariants} className="inline-block">
                    {c}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.p>

          {/* Paragraph 2 - Letter by Letter */}
          <motion.p 
            variants={sentenceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs sm:text-sm text-orange-200 leading-relaxed mb-8 flex flex-wrap gap-x-1"
          >
            {paragraph2.split(" ").map((word, wIdx) => (
              <span key={wIdx} className="inline-flex mr-1 mb-1">
                {word.split("").map((c, cIdx) => (
                  <motion.span key={cIdx} variants={letterVariants} className="inline-block">
                    {c}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.p>

        </div>

      </div>

    </section>
    <NamingCeremonyHeroSection/>
  <WeddingDriftGallery/>
    </>
  );
}