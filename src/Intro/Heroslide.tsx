'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingBag, Calendar, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import PhotoAboutSection from './Aboutslide';

// Array of slides with unique images, headings, and descriptions
const slideData = [
  {
    image: 'https://cdn0.weddingwire.in/real-wedding-photo/482/3_2/1280/jpg/10274.jpeg',
    heading: 'Every Moment Has a Story..',
    description: 'We turn real moments into timeless photographs. From portraits and weddings to events and creative shoots, we capture every emotion and detail.',
  },
  {
    image: 'https://images.squarespace-cdn.com/content/v1/5727974359827e5304ee8ddf/382a6fc9-9662-4301-b3c2-dedcd52c9a37/Earpiercing%2Bchennai.jpg',
    heading: 'Timeless Earpiercing Tales.',
    description: 'Preserving the sacred traditions, family joys, and innocent smiles of your child’s earpiercing ceremony with warmth and elegance.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKO-e-POPzp5akKxGFAZyMn1O8eWwtsYOVQPiKt5SEN_O6YoCxiVeaiSY&s=10',
    heading: 'Romantic Pre-Wedding Vibe.',
    description: 'Scenic locations, intimate chemistry, and dreamy aesthetics designed to celebrate your unique love story before the big day.',
  },
  {
    image: 'https://i.ytimg.com/vi/R7Allq3_Drg/maxresdefault.jpg',
    heading: 'Grand Events & Celebrations.',
    description: 'Capturing the vibrant energy, cultural richness, and lively spirits of grand family celebrations and special milestone events.',
  },
  {
    image: 'https://i.ytimg.com/vi/8dvLJ4bJRDA/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgTihWMA8=&rs=AOn4CLBe3o1J_-OkD9LGPil8Sxz7N9xtsQ',
    heading: 'Baby Shower Joy.',
    description: 'Cherishing the glow of motherhood and the loving blessings of family as you prepare to welcome your precious little one.',
  },
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically slide background images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slideData[currentImageIndex];

  return (
    <>
    <div className=" w-full bg-black text-orange-200 flex flex-col font-sans">
      
      {/* Main Hero Container - Full Width */}
      <div className="relative w-full min-h-[700px] flex flex-col justify-between p-6 md:p-12 overflow-hidden">
        
        {/* Background Images with Custom Slide Animations & Brightness */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {slideData.map((slide, index) => {
            const isActive = index === currentImageIndex;

            return (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                {/* Background Image with Brightness & Contrast */}
                <div
                  className="absolute inset-0 bg-cover bg-center scale-105 brightness-150 contrast-110"
                  style={{
                    backgroundImage: `url("${slide.image}")`,
                  }}
                />

                {/* Light Dark Gradient Overlay for Bright Look */}
                <div className="absolute inset-0 bg-black/10 z-20" />

                {/* ANIMATION 1: Index 0 -> Curtain Wipe from Left */}
                {isActive && index === 0 && (
                  <div key={`slide-0-${currentImageIndex}`} className="absolute inset-0 z-30 flex pointer-events-none">
                    {[...Array(30)].map((_, barIndex) => (
                      <motion.div
                        key={barIndex}
                        initial={{ scaleX: 1 }}
                        animate={{ scaleX: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: barIndex * 0.04,
                          ease: [0.76, 0, 0.24, 1],
                        }}
                        style={{ transformOrigin: "left center" }}
                        className="h-full flex-1 bg-black"
                      />
                    ))}
                  </div>
                )}

                {/* ANIMATION 2: Index 1 -> Curtain Wipe from Right */}
                {isActive && index === 1 && (
                  <div key={`slide-1-${currentImageIndex}`} className="absolute inset-0 z-30 flex pointer-events-none">
                    {[...Array(30)].map((_, barIndex) => {
                      const reverseIndex = 29 - barIndex;
                      return (
                        <motion.div
                          key={barIndex}
                          initial={{ scaleX: 1 }}
                          animate={{ scaleX: 0 }}
                          transition={{
                            duration: 0.8,
                            delay: reverseIndex * 0.04,
                            ease: [0.76, 0, 0.24, 1],
                          }}
                          style={{ transformOrigin: "right center" }}
                          className="h-full flex-1 bg-black"
                        />
                      );
                    })}
                  </div>
                )}

                {/* ANIMATION 3: Index 2+ -> Fade Up Animation */}
                {isActive && index >= 2 && (
                  <motion.div
                    key={`slide-fade-${currentImageIndex}`}
                    initial={{ opacity: 0, y: 30, scale: 1.02 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 z-30 bg-black"
                    style={{
                      backgroundImage: `url("${slide.image}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-black/10 brightness-150 contrast-110" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Hero Content with Blur-to-Clear Animation & Dynamic Slide Content */}
        <div className="relative z-40 my-auto max-w-3xl py-12 px-2 md:px-6">
          <motion.h1 
            key={`heading-${currentImageIndex}`}
            initial={{ filter: "blur(12px)", opacity: 0, y: 15 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-4xl md:text-6xl font-serif font-medium leading-tight mb-6 whitespace-pre-line text-amber-200 drop-shadow-md"
          >
            {currentSlide.heading}
          </motion.h1>

          <motion.p 
            key={`desc-${currentImageIndex}`}
            initial={{ filter: "blur(8px)", opacity: 0, y: 10 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-white text-sm md:text-base leading-relaxed mb-8 max-w-lg font-medium drop-shadow-sm"
          >
            {currentSlide.description}
          </motion.p>
        </div>

      <div className="hidden md:grid relative z-40 grid-cols-1 md:grid-cols-3 gap-4 w-full">
  
  {/* Card 1 */}
  <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-2xl p-4 flex items-center space-x-4 hover:bg-neutral-900 transition cursor-pointer shadow-lg">
    <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Mmj7YCBKMV-gxcOYETq0uCqAskjY4gWeMEl288ZWQtaBRHigsn_DGBI&s=10" 
      alt="Wedding Package" 
      className="w-16 h-16 rounded-xl object-cover"
    />
    <div className="flex-1">
      <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-semibold">New</span>
      <h3 className="font-medium text-sm mt-1 text-orange-200">Wedding Package</h3>
      <p className="text-xs text-orange-200">Capture Every Moment. Tell Your Story.</p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-2xl p-4 flex items-center space-x-4 hover:bg-neutral-900 transition cursor-pointer shadow-lg">
    <img 
      src="https://static.vecteezy.com/system/resources/thumbnails/070/868/532/small/crowd-silhouette-under-stage-lights-celebrating-event-free-photo.jpg" 
      alt="Event Package" 
      className="w-16 h-16 rounded-xl object-cover"
    />
    <div className="flex-1">
      <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-semibold">New</span>
      <h3 className="font-medium text-sm mt-1 text-orange-200">Event Package</h3>
      <p className="text-xs text-orange-200">Professional photography for birthday</p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-2xl p-4 flex items-center space-x-4 hover:bg-neutral-900 transition cursor-pointer shadow-lg">
    <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU4DhxH30Ih_YO0F5tRF84NIH3lUPRNfWgPXpYT6gJMoAPyAe94yapK9M&s=10" 
      alt="Couple Package" 
      className="w-16 h-16 rounded-xl object-cover"
    />
    <div className="flex-1">
      <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-semibold">New</span>
      <h3 className="font-medium text-sm mt-1 text-orange-200">Couple Package</h3>
      <p className="text-xs text-orange-200">Romantic couple & pre-wedding sessions</p>
    </div>
  </div>

</div>

      </div>
    </div>
     <PhotoAboutSection />
    </>
  );
}