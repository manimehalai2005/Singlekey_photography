'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import ArtisticCollage from './ArticleCollege';
import StarfieldCursor from '../StarFieldCursor';

const AnimatedText = ({ 
  text, 
  className = "", 
  type = "letter" 
}: { 
  text: string; 
  className?: string; 
  type?: "letter" | "word" 
}) => {
  const items = type === "word" ? text.split(" ") : Array.from(text);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: type === "word" ? 0.04 : 0.02, 
        delayChildren: 0.1 
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          style={{ 
            display: 'inline-block', 
            whiteSpace: item === ' ' ? 'pre' : 'normal',
            marginRight: type === "word" ? '0.25em' : '0'
          }}
        >
          {item === ' ' ? '\u00A0' : item}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function AboutUs() {
  return (
    <>
    <StarfieldCursor/>
    <div className="w-full bg-transparent flex items-center justify-center p-6 relative overflow-hidden font-sans">

      {/* Main Container Card */}
      <div className="w-full p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* Left Side: Image with Accent Background */}
        <div className="relative">
          <div className="absolute -bottom-4 -left-4 w-full h-full"></div>
          <ArtisticCollage />
        </div>

        {/* Right Side: Content & Typography */}
        <div className="flex flex-col justify-center">
        
          {/* Tag / Title */}
          <div className="inline-block border-b-2 border-[#E58123] pb-1 mb-4 w-fit">
            <span className="text-orange-300 font-bold text-sm tracking-widest uppercase">
              <AnimatedText text="Collections" type="letter" />
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-orange-300 leading-snug mb-4">
            <AnimatedText 
              text="Capturing Every Precious Moment of Your Special Celebrations." 
              type="letter" 
            />
          </h2>

          {/* Description Paragraph */}
          <p className="text-orange-200 font-sans italic text-sm md:text-base leading-relaxed mb-6 font-medium">
            <AnimatedText 
              text="We specialize in preserving the timeless beauty and emotions of your grand celebrations. From intimate moments to vibrant festivities, we meticulously cover all 9 essential wedding ceremonies: " 
              type="word" 
            />
            
            <AnimatedText 
              text="Every frame is crafted with artistic passion to turn your priceless memories into everlasting visual stories." 
              type="word" 
            />
          </p>

        </div>

      </div>
    </div>
    </>
  );
}