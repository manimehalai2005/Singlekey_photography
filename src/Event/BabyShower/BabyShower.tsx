'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import BabyShowerScrapbookSection from './BabyShowerscropbooksection';
import BabyShowerPolaroidGrid from './BabyShowerpolaridGrid';
import PhotographyPortfolioTemplate from '@/src/About/mainsecondsection';
import InfinitePhotoSlider from '../Photogallerytemplate';
import StarfieldCursor from '@/src/StarFieldCursor';
import DriftWall from '@/src/Driffttwall';
import WeddingDriftGallery from '../Prewedd';

export default function BabyShowerMenuCard() {
  // Stagger Animation Variants for Letter Reveal
  const sentenceVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 15, rotateX: -90 },
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

  // Book Opening 3D Flip Animation Variants for Images
  const bookOpenVariants: Variants = {
    hidden: { 
      opacity: 0, 
      rotateY: -110, 
      perspective: 1200,
      scale: 0.85
    },
    visible: { 
      opacity: 1, 
      rotateY: 0, 
      perspective: 1200,
      scale: 1,
      transition: { 
        duration: 1.4, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const titleText = "Baby Shower Ceremony";

  return (
    <>
      <StarfieldCursor/>
      <section className="relative w-full bg-transparent text-white flex flex-col justify-center items-center overflow-hidden py-6 sm:py-10">
        
        {/* Main Card Container */}
        <div className="w-full max-w-7xl mx-auto rounded-3xl px-4 sm:px-12 py-4 sm:py-12 shadow-2xl relative mt-4">
          
          {/* Header Title Animated Letter by Letter */}
          <div className="text-center mb-10 sm:mb-16">
            <motion.h1 
              variants={sentenceVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-semibold italic text-3xl sm:text-6xl text-amber-300 tracking-wide flex flex-wrap justify-center gap-x-2"
            >
              {titleText.split(" ").map((word, wordIdx) => (
                <span key={wordIdx} className="inline-flex">
                  {word.split("").map((char, charIdx) => (
                    <motion.span key={charIdx} variants={letterVariants} className="inline-block text-orange-100">
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>
          </div>

          {/* Layout Grid: Mobile-ல் படங்கள் மற்றும் டெக்ஸ்ட் சரியாக வரிசைப்படுத்தப்பட்டுள்ளது */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* 1st Row: Photo 1 */}
            <div className="lg:col-span-6 w-full">
              <motion.div 
                variants={bookOpenVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                style={{ transformOrigin: "left center" }}
                className="transform sm:-rotate-2 rounded-2xl w-full"
              >
                <div className="w-full h-56 sm:h-80 mx-auto overflow-hidden bg-neutral-800 rounded-xl shadow-lg">
                  <img
                    src="https://www.joonsquare.com/usermanage/image/business/srikar-rao-photography-warangal-urban-31267/srikar-rao-photography-warangal-urban-srikar-rao-photography-no3.jpg"
                    alt="Traditional Bangle Ceremony & Blessing"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>

            {/* 1st Row: Text 1 */}
            <div className="lg:col-span-6 text-left px-1 sm:px-2 w-full">
              <motion.h3 
                variants={sentenceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-sans font-bold text-xl sm:text-2xl text-amber-300 mb-2 flex flex-wrap gap-x-1.5"
              >
                {"Bangle Ceremony and Blessings".split(" ").map((word, wIdx) => (
                  <span key={wIdx} className="inline-flex">
                    {word.split("").map((c, cIdx) => (
                      <motion.span key={cIdx} variants={letterVariants} className="inline-block">
                        {c}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.h3>

              <motion.p 
                variants={sentenceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xs sm:text-sm text-amber-300 leading-relaxed mb-3 flex flex-wrap gap-x-1"
              >
                {"Welcoming family and elders as they adorn the mother to be with traditional glass bangles, fragrant flowers, and heartfelt prayers for a safe journey ahead.".split(" ").map((word, wIdx) => (
                  <span key={wIdx} className="inline-flex">
                    {word.split("").map((c, cIdx) => (
                      <motion.span key={cIdx} variants={letterVariants} className="inline-block">
                        {c}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.p>

              <motion.p 
                variants={sentenceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-serif italic text-xs sm:text-sm text-[#C89B7B] flex flex-wrap gap-x-1"
              >
                {"Tradition | Blessings | Grace".split(" ").map((word, wIdx) => (
                  <span key={wIdx} className="inline-flex">
                    {word.split("").map((c, cIdx) => (
                      <motion.span key={cIdx} variants={letterVariants} className="inline-block">
                        {c}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.p>
            </div>

            {/* 2nd Row: Text 2 (Mobile-ல் சரியான ஒழுங்கமைப்பிற்காக order மாற்றப்பட்டுள்ளது) */}
            <div className="lg:col-span-6 text-left px-1 sm:px-2 order-4 lg:order-none w-full">
              <motion.h3 
                variants={sentenceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-sans font-bold text-xl sm:text-2xl text-amber-300 mb-2 flex flex-wrap gap-x-1.5"
              >
                {"Sacred Variety Rice Feast".split(" ").map((word, wIdx) => (
                  <span key={wIdx} className="inline-flex">
                    {word.split("").map((c, cIdx) => (
                      <motion.span key={cIdx} variants={letterVariants} className="inline-block">
                        {c}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.h3>

              <motion.p 
                variants={sentenceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xs sm:text-sm text-orange-100 leading-relaxed mb-3 flex flex-wrap gap-x-1"
              >
                {"A grand traditional meal prepared with love, featuring authentic varieties of spiced rice, fresh sweets, and traditional festive delicacies for all guests.".split(" ").map((word, wIdx) => (
                  <span key={wIdx} className="inline-flex">
                    {word.split("").map((c, cIdx) => (
                      <motion.span key={cIdx} variants={letterVariants} className="inline-block">
                        {c}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.p>

              <motion.p 
                variants={sentenceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-serif italic text-xs sm:text-sm text-[#C89B7B] flex flex-wrap gap-x-1"
              >
                {"Authentic | Delicious | Celebration".split(" ").map((word, wIdx) => (
                  <span key={wIdx} className="inline-flex">
                    {word.split("").map((c, cIdx) => (
                      <motion.span key={cIdx} variants={letterVariants} className="inline-block">
                        {c}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.p>
            </div>

            {/* 2nd Row: Photo 2 */}
            <div className="lg:col-span-6 order-3 lg:order-none w-full">
              <motion.div 
                variants={bookOpenVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                style={{ transformOrigin: "left center" }}
                className="transform sm:rotate-2 rounded-2xl w-full"
              >
                <div className="w-full h-56 sm:h-80 mx-auto overflow-hidden bg-neutral-800 rounded-xl shadow-lg">
                  <img
                    src="https://i.pinimg.com/736x/c0/13/07/c013072cdef60e34a80bf1abc83c285f.jpg"
                    alt="Festive Feast Celebration"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>

            {/* 3rd Row: Photo 3 */}
            <div className="lg:col-span-6 order-5 w-full">
              <motion.div 
                variants={bookOpenVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                style={{ transformOrigin: "left center" }}
                className="transform sm:-rotate-1 w-full"
              >
                <div className="w-full h-56 sm:h-80 mx-auto overflow-hidden bg-neutral-800 rounded-xl shadow-lg">
                  <img
                    src="https://i.pinimg.com/originals/f8/68/1f/f8681ff45012d142abb0be256bc12435.jpg"
                    alt="Moments of Joy and Gratitude"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>

            {/* 3rd Row: Text 3 */}
            <div className="lg:col-span-6 text-left px-1 sm:px-2 order-6 w-full">
              <motion.h3 
                variants={sentenceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-sans font-bold text-xl sm:text-2xl text-amber-300 mb-2 flex flex-wrap gap-x-1.5"
              >
                {"Moments of Joy and Love".split(" ").map((word, wIdx) => (
                  <span key={wIdx} className="inline-flex">
                    {word.split("").map((c, cIdx) => (
                      <motion.span key={cIdx} variants={letterVariants} className="inline-block">
                        {c}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.h3>

              <motion.p 
                variants={sentenceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xs sm:text-sm text-orange-100 leading-relaxed mb-3 flex flex-wrap gap-x-1"
              >
                {"Creating everlasting memories filled with laughter, music, gifts, and warm wishes as everyone awaits the arrival of the little newborn.".split(" ").map((word, wIdx) => (
                  <span key={wIdx} className="inline-flex">
                    {word.split("").map((c, cIdx) => (
                      <motion.span key={cIdx} variants={letterVariants} className="inline-block">
                        {c}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.p>

              <motion.p 
                variants={sentenceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-serif italic text-xs sm:text-sm text-[#C89B7B] flex flex-wrap gap-x-1"
              >
                {"Love | Memories | Happiness".split(" ").map((word, wIdx) => (
                  <span key={wIdx} className="inline-flex">
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

        </div>

      </section>
      
      <BabyShowerScrapbookSection/>
     
     {/* Mobile-friendly Wrapper for Drift Gallery */}
     <div className="w-full h-[50vh] sm:h-screen relative overflow-hidden">
       <WeddingDriftGallery/>
     </div>
    </>
  );
}