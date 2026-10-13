'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import EngagementEditorialSection from './EngagementEditorialsection';
import BabyShowerPhotographyGallery from '@/src/packagess/Babyshoot/BabyGallery';
import InfinitePhotoSlider from '../Photogallerytemplate';
import WeddingDriftGallery from '../Prewedd';
import StarfieldCursor from '@/src/StarFieldCursor';

export default function EngagementCollageCard() {
  // Letter Animation Variants
  const sentenceVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      },
    },
  };

  const titleText = "Engagement";
  const subtitleText = "& RING CEREMONY";
  const taglineText = "THE BEGINNING OF FOREVER";

  return (
    <>
    <StarfieldCursor/>
    <section className="relative w-full bg-transparent text-white flex flex-col justify-center items-center overflow-hidden py-12 px-4 sm:px-8">
      
      <div className="max-w-6xl w-full mx-auto rounded-3xl p-4 sm:p-8 relative">
        
        {/* Top Grid: 4 Images with Continuous Infinite Floating Animation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
          
          {/* Photo 1: Infinite Floating Up & Down */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, -1, 0]
            }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group shadow-2xl"
          >
            <img
              src="https://i.pinimg.com/originals/19/e6/02/19e60291fa780b500ba72db76976da76.jpg"
              alt="Ring exchange ceremony"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />
          </motion.div>

          {/* Photo 2: Infinite Breathing & Pulse Floating */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ 
              y: [0, 8, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              duration: 4.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5 
            }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group shadow-2xl"
          >
            <img
              src="https://yt3.googleusercontent.com/NPClHi9pCFowaawgGJ3563S5m0YRBpF8f3rIPKxd3_58gyN6gPKmXFzlzsNjGuGBIAFMuUWLVw=s900-c-k-c0x00ffffff-no-rj"
              alt="Engagement ring close up"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />
          </motion.div>

          {/* Photo 3: Infinite Subtle Float */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 1, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.8 
            }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group shadow-2xl"
          >
            <img
              src="https://www.shubhlaxmifilms.com/wp-content/uploads/2022/11/IMG_3486-01-scaled-1.webp"
              alt="Couple laughing together"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />
          </motion.div>

          {/* Photo 4: Infinite Float */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ 
              y: [0, 7, 0]
            }}
            transition={{ 
              duration: 4.2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.3 
            }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group shadow-2xl"
          >
            <img
              src="https://cdn.pixabay.com/photo/2021/09/03/06/10/wedding-6595092_640.jpg"
              alt="Engagement celebration details"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />
          </motion.div>

        </div>

        {/* Lower Section: 3 Vertical Cards + Animated Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Grid: 3 Tall Aspect Ratio Cards with Continuous Floating */}
          <div className="lg:col-span-8 grid grid-cols-3 gap-3 sm:gap-4">
            
            {/* Photo 5 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group shadow-2xl"
            >
              <img
                src="https://tse1.explicit.bing.net/th/id/OIP.nNDORWpB_IaV_Sp5RfoY8gAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Romantic couple moment"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
            </motion.div>

            {/* Photo 6 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group shadow-2xl"
            >
              <img
                src="https://featheredarrowstudio.com/wp-content/uploads/2024/01/JANELLEHENRY_0765.jpg"
                alt="Couple portrait"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
            </motion.div>

            {/* Photo 7 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group shadow-2xl"
            >
              <img
                src="https://www.redeyecollection.com/wp-content/uploads/2020/02/SD-534.jpg"
                alt="Celebration toast"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
            </motion.div>

          </div>

          {/* Right Side: Animated Typography Matching Reference Image */}
          <div className="lg:col-span-4 flex flex-col justify-center text-center lg:text-left py-4 px-2 sm:px-4">
            
            {/* Tagline */}
            <motion.span 
              variants={sentenceVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#C89B7B] mb-2 flex flex-wrap justify-center lg:justify-start"
            >
              {taglineText.split("").map((char, idx) => (
                <motion.span key={idx} variants={letterVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>

            {/* Main Title "Engagement" Split Title Animation */}
            <motion.h1 
              variants={sentenceVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-serif italic font-normal text-4xl sm:text-2xl lg:text-4xl text-orange-300 leading-[1.1] mb-2 flex flex-wrap justify-center lg:justify-start tracking-wide"
            >
              {titleText.split("").map((char, idx) => (
                <motion.span key={idx} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={sentenceVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-serif tracking-[0.2em] text-xs sm:text-sm text-orange-300 uppercase mb-6 flex flex-wrap justify-center lg:justify-start"
            >
              {subtitleText.split("").map((char, idx) => (
                <motion.span key={idx} variants={letterVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.p>

            {/* Line Divider */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-20 h-[1px] bg-[#C89B7B] mx-auto lg:mx-0 mb-4 origin-left"
            />

            {/* Couple Names Footer */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-[11px] sm:text-xs text-orange-300 tracking-[0.25em] uppercase font-sans"
            >
              CELEBRATING SARAH & MICHAEL
            </motion.p>
          </div>

        </div>

      </div>

    </section>
    <EngagementEditorialSection/>
    <WeddingDriftGallery/>
    </>
  );
}