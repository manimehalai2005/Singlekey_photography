'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

// Word-by-Word & Letter-by-Letter Animation Helper Component
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
        staggerChildren: type === "word" ? 0.05 : 0.03, 
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
      viewport={{ once: true, amount: 0.2 }}
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

export default function MissionVisionSection() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-8xl mx-auto space-y-20">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-orange-300">
           
            <span className="italic font-normal text-amber-200">
              <AnimatedText text="Mission & Vision" />
            </span>
          </h2>
          <p className="text-orange-300 text-sm font-sans italic leading-relaxed">
            <AnimatedText 
              type="word"
              text="Crafting visualice artistic excellence, genuine emotion, and timeless storytelling." 
            />
          </p>
        </motion.div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-8 lg:p-10 rounded-[32px] overflow-hidden group hover:border-amber-500/50 transition-colors shadow-2xl"
          >
           
            
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
                <AnimatedText text="Our Mission" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
                <AnimatedText text="Preserving Genuine " />
                <span className="italic text-amber-200">
                  <AnimatedText text="Emotions" />
                </span>
              </h3>
              
              {/* Paragraph Animated Word-by-Word */}
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                <AnimatedText 
                  type="word"
                  text="At SingleKey Photography, our mission is to freeze fleeting moments in time with authenticity and artistic excellence. We strive to craft visual narratives that capture the true soul and unscripted joy of every celebration—whether it is a wedding, birthday, or milestone event—ensuring your cherished memories remain vibrant and alive for a lifetime." 
                />
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative p-8 lg:p-10 rounded-[32px] overflow-hidden group hover:border-amber-500/50 transition-colors shadow-2xl"
          >
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
                <AnimatedText text="Our Vision" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
                <AnimatedText text="Redefining " />
                <span className="italic text-amber-200">
                  <AnimatedText text="Visual Storytelling" />
                </span>
              </h3>
              
              {/* Paragraph Animated Word-by-Word */}
              <p className="text-slate-300 text-sm font-sans italic leading-relaxed">
                <AnimatedText 
                  type="word"
                  text="To stand as a premier photography platform known for innovation, elegance, and deep emotional resonance. We aim to continually elevate the standards of event and lifestyle documentation through cutting-edge framing, creative depth, and personalized client experiences that set new benchmarks in the industry." 
                />
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}