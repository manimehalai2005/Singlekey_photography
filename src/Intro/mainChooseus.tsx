"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import InfiniteSpiral from "./InfiniteScroll";

const Mainchooseus = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 10 different cards with calculated fan angles and translations
  const cards = [
    {
      title: 'wedding',
      description: 'wedding anivisary',
      image: 'https://i.pinimg.com/originals/fd/4a/9d/fd4a9d8c3f53cf229edca2b80e86eaa0.jpg',
      rotation: '-rotate-[35deg] -translate-x-[140px]',
    },
    {
      title: 'pre-wedding',
      description: 'pre-wedding photoshoot',
      image: 'https://www.atlhea.in/wp-content/uploads/2020/11/blog2-730x450.jpg',
      rotation: '-rotate-[27deg] -translate-x-[110px]',
    },
    {
      title: 'Ear-peirecing',
      description: 'Ear-piercing event',
      image: 'https://th.bing.com/th/id/OIP._pJVPUrD6ug9nnkvIVT_fAHaE8?w=267&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      rotation: '-rotate-[19deg] -translate-x-[80px]',
    },
    {
      title: 'Birthday event',
      description: 'Birthdayevent function',
      image: 'https://as1.ftcdn.net/v2/jpg/06/27/74/86/1000_F_627748608_SA1FNtmzgPR0Z3eC7wdkvQnu7PIl5uFq.jpg',
      rotation: '-rotate-[10deg] -translate-x-[40px]',
    },
    {
      title: 'Baby shower',
      description: 'Babyshower event',
      image: 'https://tse2.mm.bing.net/th/id/OIP.H9bwQrsmHqaODiQVUpd07QHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      rotation: '-rotate-[3deg] -translate-x-[10px]',
    },
    {
      title: 'Naming ceremony',
      description: 'NamingFunction conduct',
      image: 'https://photographerprasanna.in/wp-content/uploads/2024/01/DSC00030.jpg',
      rotation: 'rotate-[4deg] translate-x-[20px]',
    },
    {
      title: 'HouseWarming ',
      description: ' HouseWarming Ceremony',
      image: 'https://tse3.mm.bing.net/th/id/OIP.jB8Wlisnilxpo0vL79M5MQHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      rotation: 'rotate-[12deg] translate-x-[60px]',
    },
    {
      title: 'Ritual',
      description: 'Ritual ceremony',
      image: 'https://tse4.mm.bing.net/th/id/OIP.pj7aY5k7ngMdnfa5GBJ8YwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      rotation: 'rotate-[20deg] translate-x-[100px]',
    },
    {
      title: 'Puberty',
      description: 'Puberty ceremony',
      image:'https://tse1.mm.bing.net/th/id/OIP.W79fSqW9iMFj1fzrnkb7ggHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      rotation: 'rotate-[28deg] translate-x-[130px]',
    },
    {
      title: 'postWedding',
      description: 'postwedding ceremony',
      image: 'https://phometo.com/images/gallery/post-wedding-shoot-in-bangalore.jpg',
      rotation: 'rotate-[36deg] translate-x-[160px]',
    },
  ];

  // Left side InfiniteSpiral images
  const images = [
    { src: 'https://tse3.mm.bing.net/th/id/OIP.pd8_nKd7opBpQRUzb31uAAHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3', alt: 'ritual' },
    { src: 'https://tse1.mm.bing.net/th/id/OIP.6w5iCkvz1J4zY1zyyFh3zQHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3', alt: 'puberty' },
    { src: 'https://i.pinimg.com/736x/a5/b8/40/a5b8406d4d0847866f600461e1751251.jpg', alt: 'earceremony' },
    { src: 'https://tse1.mm.bing.net/th/id/OIP.zsr3QbyND6NkevSGIBJPAAHaLH?r=0&w=666&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3', alt: 'Ocean shore' },
    { src: 'https://i.pinimg.com/originals/d7/b5/e5/d7b5e54014b5c5aa09242f32eab417e2.jpg', alt: 'Green meadow' },
    { src: 'https://i.pinimg.com/originals/fd/4a/9d/fd4a9d8c3f53cf229edca2b80e86eaa0.jpg', alt: 'Desert light' }
  ];

  // Right side gallery items
  const galleryItems = [
    {
      id: 1,
      title: "wedding celebration",
      subtitle: "The Golden Hour Vows",
      image: "https://www.focuzstudios.in/wp-content/uploads/2018/11/Jilakarra-Bellam-and-Maadhuparkam-telugu-wedding-rituals-6.jpg",
    },
    {
      id: 2,
      title: "Royal Palace Reception",
      subtitle: "Grand Evening Celebrations",
      image: "https://i.pinimg.com/originals/73/54/66/735466a7affa8148492245bbdbb12057.jpg",
    },
    {
      id: 3,
      title: "Traditional Heritage",
      subtitle: "Bridal Elegance & Details",
      image: "https://i.pinimg.com/736x/0f/16/fb/0f16fb43eba07aca282784abd59b8a82.jpg",
    },
    {
      id: 4,
      title: "Whispers of Love",
      subtitle: "Candid Moments",
      image: "https://vizagpellipoolajada.com/wp-content/uploads/2023/07/Rose-petals-with-gold-tissue.-1.jpg",
    },
    {
      id: 5,
      title: "Timeless Romance",
      subtitle: "Couple Session",
      image: "https://tse4.mm.bing.net/th/id/OIP.Xw8fQGEMg8c5xOXJkU2aHQHaE8?r=0&w=2560&h=1707&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  // Automatic slide timer (Every 3 seconds)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, galleryItems.length]);

  const getVisibleItems = () => {
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    return {
      left: galleryItems[prevIndex],
      center: galleryItems[currentIndex],
      right: galleryItems[nextIndex],
    };
  };

  const visible = getVisibleItems();

  return (
    <section className="w-full bg-transparent text-orange-300 py-20 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="w-full max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Infinite Spiral Component */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 w-full"
        >
         <div style={{ height: '600px', position: 'relative', overflow: 'hidden' }} className="w-full flex items-center justify-end">
  <InfiniteSpiral
    items={images}
    animationMode="auto"
    speed={0.55}
    radius={170}
    cardWidth={100}
    cardHeight={100}
    verticalSpacing={60}
    perspective={1000}
    cardRadius={10}
    centerScale={1.2}
    edgeBlur={0}
    cardsPerTurn={7}
    pauseOnHover
    direction="up"
    rotation={0}
    cardTilt={0}
    edgeFade={0}
    imageFit="cover"
    grayscale={0}
  />
</div>
        </motion.div>
        
        {/* Right Side: Auto Sliding Gallery Section */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-center justify-center w-full"
        >
          
          {/* Header Title Section */}
          <div className="text-center space-y-2 mb-10">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-orange-300">
              Explore Our Gallery
            </h2>
            <p className="text-sm text-orange-300/80 font-medium">
              Slides automatically. Hover to pause, or click side cards to navigate.
            </p>
          </div>

          {/* Gallery Showcase Container with Hover Pause */}
          <div 
            className="relative flex items-center justify-center gap-4 sm:gap-6 w-full cursor-pointer"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            
            {/* Left Preview Image */}
            <motion.div
              key={`left-${visible.left.id}`}
              initial={{ opacity: 0, x: -30, scale: 0.9 }}
              animate={{ opacity: 0.6, x: 0, scale: 0.82 }}
              transition={{ duration: 0.4 }}
              onClick={handlePrev}
              className="hidden sm:block relative w-[200px] lg:w-[240px] h-[280px] lg:h-[320px] rounded-3xl overflow-hidden shadow-lg hover:opacity-90 transition-opacity brightness-125 contrast-105"
            >
              <img
                src={visible.left.image}
                alt={visible.left.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Center Main Focus Image */}
            <motion.div
              key={`center-${visible.center.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative w-full sm:w-[420px] lg:w-[520px] h-[360px] sm:h-[420px] lg:h-[460px] rounded-[2.5rem] overflow-hidden shadow-2xl z-10 brightness-125 contrast-105 border border-orange-300/20"
            >
              <img
                src={visible.center.image}
                alt={visible.center.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold tracking-wider text-orange-300 uppercase block mb-1">
                  {visible.center.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-amber-200">
                  {visible.center.title}
                </h3>
              </div>

              {/* Dots Indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-full bg-black/40">
                {galleryItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx ? "w-6 bg-orange-300" : "w-1.5 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right Preview Image */}
            <motion.div
              key={`right-${visible.right.id}`}
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              animate={{ opacity: 0.6, x: 0, scale: 0.62 }}
              transition={{ duration: 0.05, ease: "easeOut" }} 
              onClick={handleNext}
              className="hidden sm:block relative w-[200px] lg:w-[240px] h-[280px] lg:h-[320px] rounded-3xl overflow-hidden shadow-lg hover:opacity-90 transition-opacity cursor-pointer brightness-125 contrast-105"
            >
              <img
                src={visible.right.image}
                alt={visible.right.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Mainchooseus;