"use client";

import { motion, Variants } from "framer-motion";

export default function HouseWarmingStorySection() {
  const headingText = "House Warming Ceremony";
  const subHeadingText = "New Beginnings";

  // Container variants for letter-by-letter animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
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
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  // Falling Rain Animation Variants - User Scroll செய்யும்போது மட்டும் இயங்கும்
  const createFallingVariants = (delayTime: number): Variants => ({
    hidden: { opacity: 0, y: -200, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.5,
        delay: delayTime,
        ease: [0.25, 0.1, 0.25, 1], // Smooth rain drop effect
      },
    },
  });

  return (
    <section className="relative w-full bg-transparent text-white flex flex-col justify-center items-center overflow-hidden py-16 px-4">
      
      {/* Background Soft Glow Effect */}
      <div className="absolute inset-0" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto overflow-hidden flex flex-col">
        
        {/* Top Banner Image - User Scroll செய்யும்போது விழும் */}
        <motion.div 
          className="w-full h-84 overflow-hidden relative"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src="https://i.pinimg.com/736x/84/69/52/846952f4b8f38fe306bb8a555e17674c.jpg"
            alt="New House Interior"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Rain / Falling Mini Photo Frames - User பார்க்கும் போது மேலிருந்து கீழே கொட்டும் */}
        <div className="px-6 -mt-10 grid grid-cols-3 gap-2 relative z-20">
          
          {/* Image 1: Slow Rain Fall */}
          <motion.div
            variants={createFallingVariants(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="h-60 bg-neutral-900 p-1 shadow-2xl rounded transform -rotate-3 overflow-hidden"
          >
            <img
              src="https://d3e1m60ptf1oym.cloudfront.net/445f7c6b-2d88-471a-bb10-39f7e89e18b8/08_SFE_110217_239_xgaplus.jpg"
              alt="House Warming Rituals"
              className="w-full h-full object-cover rounded"
            />
          </motion.div>

          {/* Image 2: Delayed Rain Fall */}
          <motion.div
            variants={createFallingVariants(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="h-60 bg-neutral-900 p-1 shadow-2xl rounded transform rotate-2 overflow-hidden -mt-2"
          >
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.LWqO_LqE9RWAtZUAhP5izwHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Family Gathering"
              className="w-full h-full object-cover rounded"
            />
          </motion.div>

          {/* Image 3: Last Rain Fall */}
          <motion.div
            variants={createFallingVariants(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="h-60 bg-neutral-900 p-1 shadow-2xl rounded transform rotate-6 overflow-hidden"
          >
            <img
              src="https://i.pinimg.com/originals/0e/25/67/0e256719e8583d15183eac0c956ae541.jpg"
              alt="Joyful Moments"
              className="w-full h-full object-cover rounded"
            />
          </motion.div>

        </div>

        {/* Content Section with Letter Animations */}
        <div className="p-6 text-center flex flex-col items-center">
          
          {/* Subheading Letter Animation */}
          <motion.span 
            className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-[#C89B7B] block mb-2 flex flex-wrap justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {subHeadingText.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants} style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}>
                {char}
              </motion.span>
            ))}
          </motion.span>

          {/* Main Title Letter Animation */}
          <motion.h2
            className="italic font-bold text-2xl sm:text-3xl text-amber-300 tracking-wide mb-4 leading-tight flex flex-wrap justify-center font-serif"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {headingText.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
        </div>

      </div>

    </section>
  );
}