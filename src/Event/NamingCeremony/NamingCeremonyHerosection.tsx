'use client';

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

// All images array including Main Hero Banner and Bottom Grid Cards
const initialCards = [
  {
    id: 'hero',
    front: 'https://i.pinimg.com/originals/2b/5f/62/2b5f6222ae70c8395b6f6d2c5bd88375.jpg',
    back: 'https://i.pinimg.com/736x/e2/74/27/e27427739c56d70200fad938ac8181f1.jpg',
    category: 'Grand Celebration',
    title: 'Naming Day Blessing',
    isHero: true,
  },
  {
    id: 'img1',
    front: 'https://tse4.mm.bing.net/th/id/OIP.lHdStzM68KpFvxBhiS0lHgHaLH?r=0&w=736&h=1104&rs=1&pid=ImgDetMain&o=7&rm=3',
    back: 'https://i.pinimg.com/736x/e7/a2/9a/e7a29a7f4e142b48198c179d1db4f5ca.jpg',
    category: 'Ritual',
    title: 'Cradle Ceremony',
    isHero: false,
  },
  {
    id: 'img2',
    front: 'https://i.pinimg.com/736x/84/f3/16/84f316ce237db8223c26d7dcefdc4595.jpg',
    back: 'https://tse4.mm.bing.net/th/id/OIP.Q2z5euk8JJGO_0-HslCnnAHaFT?r=0&pid=ImgDet&w=474&h=339&rs=1&o=7&rm=3',
    category: 'Feast',
    title: 'Traditional Lunch',
    isHero: false,
  },
  {
    id: 'img3',
    front: 'https://www.tinytoddlersphotography.com/wp-content/uploads/2023/07/Avyaan-Cradle-Ceremony-019.jpg',
    back: 'https://www.sengalleries.com/images/photos_image/11729853389.jpg',
    category: 'Family',
    title: 'Blessings & Joy',
    isHero: false,
  },
  {
    id: 'img4',
    front: 'https://www.tinytoddlersphotography.com/wp-content/uploads/2023/07/Avyaan-Cradle-Ceremony-012.jpg',
    back: 'https://images.unsplash.com/photo-1730130596425-197566414dc4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhbWlseSUyMHRyYWRpdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    category: 'Decor',
    title: 'Floral Setup',
    isHero: false,
  },
];

export default function NamingCeremonyHeroSection() {
  const [items, setItems] = useState(initialCards);
  const [flipped, setFlipped] = useState(false);

  // Automatic Shuffle & Front/Back Flip interval
  useEffect(() => {
    const interval = setInterval(() => {
      // Toggle card flip (Front <-> Back view)
      setFlipped((prev) => !prev);

      // Randomly shuffle card positions (Interchange places)
      setItems((prevItems) => {
        const shuffled = [...prevItems];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      });
    }, 4500); // Every 4.5 seconds

    return () => clearInterval(interval);
  }, []);

  // Find current hero item and grid items based on shuffled array
  const heroCard = items.find((item) => item.isHero) || items[0];
  const gridCards = items.filter((item) => item.id !== heroCard.id);

  // Stagger animation variants for smooth entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const titlePart1 = "A Special";
  const titlePart2 = "Naming Day";

  return (
    <section className="w-full bg-transparent text-white py-12 px-4 sm:px-8 flex justify-center items-center overflow-hidden font-sans">
      
      {/* Outer Card Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl w-full bg-transparent p-6 sm:p-10 relative flex flex-col gap-8"
      >
        
        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Top-Left: Large Featured Banner Photo with 3D Flip & Interchange */}
          <motion.div 
            layout
            variants={itemVariants}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl group perspective-1000"
          >
            {/* 3D Flipping Inner Container */}
            <motion.div
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ transformStyle: 'preserve-3d' }}
              className="w-full h-full relative"
            >
              {/* FRONT SIDE */}
              <div 
                style={{ backfaceVisibility: 'hidden' }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={heroCard.front}
                  alt={heroCard.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4">
                  <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">{heroCard.category}</p>
                  <h4 className="text-sm font-medium text-orange-300">{heroCard.title}</h4>
                </div>
              </div>

              {/* BACK SIDE */}
              <div 
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={heroCard.back}
                  alt={heroCard.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4">
                  <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">{heroCard.category} (Back)</p>
                  <h4 className="text-sm font-medium text-orange-300">{heroCard.title} Moment</h4>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Top-Right: Editorial Handwriting Style Title & Badge */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end text-left lg:text-right relative p-4">
            
            {/* Rotating Stamp / Badge element */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="hidden sm:flex absolute -top-4 right-10 w-24 h-24 rounded-full border border-neutral-700 items-center justify-center pointer-events-none opacity-60"
            >
              <svg className="w-full h-full p-1" viewBox="0 0 100 100">
                <path id="curve" fill="transparent" d="M 15, 50 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                <text className="text-[10px] uppercase tracking-[0.25em] fill-[#D4AF37]">
                  <textPath href="#curve" startOffset="0%">BLESSED • BABY •</textPath>
                </text>
              </svg>
              <div className="absolute text-[#D4AF37] text-sm">✦</div>
            </motion.div>

            {/* Title with Letter-by-Letter Animation */}
            <motion.div variants={containerVariants} className="space-y-1">
              <h1 className="font-serif italic font-normal text-5xl sm:text-5xl text-amber-300 tracking-wide leading-tight flex flex-wrap lg:justify-end gap-x-3">
                {titlePart1.split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block">
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h1>
              <h2 className="font-serif italic font-normal text-5xl sm:text-5xl text-amber-300 tracking-wide leading-tight flex flex-wrap lg:justify-end gap-x-3">
                {titlePart2.split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block">
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h2>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-amber-300 text-xs sm:text-sm mt-4 max-w-sm font-light tracking-wide"
            >
              Welcoming our little prince into the family with divine chants, traditional cradles, and endless love.
            </motion.p>

          </div>

        </div>

        {/* ================= BOTTOM 4-GRID SECTION WITH FLIP & INTERCHANGE ================= */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
          {gridCards.map((card) => (
            <motion.div 
              key={card.id}
              layout
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-xl group perspective-1000"
            >
              {/* 3D Flipping Inner Container */}
              <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ transformStyle: 'preserve-3d' }}
                className="w-full h-full relative"
              >
                {/* FRONT SIDE */}
                <div 
                  style={{ backfaceVisibility: 'hidden' }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={card.front}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4">
                    <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">{card.category}</p>
                    <h4 className="text-sm font-medium text-orange-300">{card.title}</h4>
                  </div>
                </div>

                {/* BACK SIDE */}
                <div 
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={card.back}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4">
                    <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">{card.category} (Back)</p>
                    <h4 className="text-sm font-medium text-amber-300">{card.title} Moment</h4>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          ))}
        </motion.div>

      </motion.div>

    </section>
  );
}