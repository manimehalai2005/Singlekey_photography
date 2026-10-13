'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function PreWeddingCard() {

  const sentenceVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      },
    },
  };

  const titleText = "Pre-wedding";
  const quoteText = "Promise to dance through life with you";

  return (
    <section className="w-full bg-black text-white flex items-center justify-center p-4 sm:p-8 overflow-hidden">
      <div className="w-full p-6 sm:p-12 relative shadow-2xl">
        
        {/* Top Header: Title Animation */}
        <div className="mb-8">
          <motion.h1 
            variants={sentenceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl font-serif text-[#D4AF37] tracking-wide flex flex-wrap"
          >
            {titleText.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Collage Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            
            {/* Image 1: Glides very slowly from bottom-right */}
            <motion.div 
              initial={{ opacity: 0, x: 120, y: 150, scale: 0.7 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl overflow-hidden group border border-neutral-800 bg-neutral-900 shadow-2xl"
            >
              <img 
                src="https://image.wedmegood.com/resized/1000X/uploads/member/661638/1565173084_57313638_2403209236377478_5708667755847221248_o.jpg" 
                alt="Pre-wedding moment 1" 
                className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Bottom-Left Grid (Image 2 & Quote) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              
              {/* Image 2: Glides slowly from top-left */}
              <motion.div 
                initial={{ opacity: 0, x: -90, y: -120, scale: 0.75 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 2.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl"
              >
                <img 
                  src="https://5.imimg.com/data5/ANDROID/Default/2022/8/FF/LX/IC/158524229/prod-20220815-131158136609912306463596-jpg-500x500.jpg" 
                  alt="Pre-wedding moment 2" 
                  className="w-full h-90 object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* Animated Quote */}
              <motion.div 
                variants={sentenceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-orange-300 font-sans text-sm sm:text-base leading-relaxed p-2 flex flex-wrap"
              >
                {quoteText.split(" ").map((word, wordIdx) => (
                  <span key={wordIdx} className="inline-block mr-1.5 mb-1">
                    {word.split("").map((char, charIdx) => (
                      <motion.span key={charIdx} variants={letterVariants} className="inline-block">
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.div>
            </div>

          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            
            {/* Image 3: Glides slowly from center-left */}
            <motion.div 
              initial={{ opacity: 0, x: -140, y: 60, scale: 0.7 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 2.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group shadow-2xl"
            >
              <img 
                src="https://i.pinimg.com/originals/81/57/b3/8157b39c1e592d34df1e94f97a0173fc.png" 
                alt="Pre-wedding moment 3" 
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Image 4: Glides slowly from top-right diagonal */}
            <motion.div 
              initial={{ opacity: 0, x: 100, y: -100, scale: 0.75 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 2.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group shadow-2xl"
            >
              <img 
                src="https://i.pinimg.com/736x/02/44/7c/02447c13cd07fcdb42150a8337ed525d.jpg" 
                alt="Pre-wedding moment 4" 
                className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}