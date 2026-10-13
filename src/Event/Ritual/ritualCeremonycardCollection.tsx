"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";

export default function RitualCeremonyCollageSection() {
  const headingText = "Ritual Ceremony";
  const subHeadingText = "Sacred Traditions & Family Moments";
  const paragraphText = "Traditional morning rituals, sacred offerings, and cherished moments shared with family have been the true highlights of this divine celebration.";

  const initialImages = [
    {
      id: 1,
      src: "https://tse2.mm.bing.net/th/id/OIP.YjFWzlEVloMZmzSOEqt0ZwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "Main Ritual Gathering",
      span: "col-span-2 row-span-2 h-72 sm:h-[420px]",
    },
    {
      id: 2,
      src: "https://i.pinimg.com/474x/02/2b/42/022b424c9b20d97874636c425e8522f1.jpg",
      alt: "Sacred Offerings",
      span: "h-34 sm:h-[200px]",
    },
    {
      id: 3,
      src: "https://tse4.mm.bing.net/th/id/OIP.LEunDPG7H0n_yd5qHHuVEwHaE8?r=0&w=1200&h=800&rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "Family Moments",
      span: "h-34 sm:h-[200px]",
    },
    {
      id: 4,
      src: "https://2.bp.blogspot.com/-nRCTljrW3RU/VoZPRq9iiuI/AAAAAAAAPe4/nrGh29qO17Q/s1600/FB_IMG_1451642522139.jpg",
      alt: "Traditional Rituals",
      span: "h-34 sm:h-[200px]",
    },
    {
      id: 5,
      src: "https://www.makemytraveling.com/Images/1/KokilambalThirukameshwara-97c55.jpeg",
      alt: "Ceremony Blessings",
      span: "h-34 sm:h-[200px]",
    },
  ];

  const [images, setImages] = useState(initialImages);

  const handleShuffleOnView = () => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      const temp = newImages[0];
      newImages[0] = newImages[1];
      newImages[1] = newImages[2];
      newImages[2] = temp;
      return newImages;
    });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen bg-transparent text-white flex flex-col justify-center items-center py-20 px-6 sm:px-12 overflow-hidden">
      
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header Section with Letter-by-Letter Animations */}
        <div className="text-left max-w-2xl">
          
          {/* Subheading Letter Animation */}
          <motion.span 
            className="text-xs uppercase tracking-[0.4em] font-bold text-[#C89B7B] block mb-3 flex flex-wrap"
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

          {/* Main Heading Letter Animation */}
          <motion.h2
            className="italic font-bold text-4xl sm:text-5xl lg:text-6xl text-orange-300 tracking-wide mb-4 leading-tight flex flex-wrap font-serif"
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

          {/* Paragraph Letter Animation */}
          <motion.p
            className="text-sm sm:text-base text-orange-300 font-light leading-relaxed flex flex-wrap"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {paragraphText.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

        </div>

        {/* Multi-Photo Grid with onViewportEnter Shuffle */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full h-auto"
          onViewportEnter={handleShuffleOnView}
          viewport={{ once: true, amount: 0.3 }}
        >
          {images.map((img) => (
            <motion.div
              key={img.id}
              layout
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 15,
                duration: 1.2,
              }}
              className={`${img.span} rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-xl relative`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}