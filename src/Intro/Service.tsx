'use client';

import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ClientGallery from './mainChoosuspage';
import Mainchooseus from './mainChooseus';
import Chooseus from './SpreadPage';

export default function PhotographyServicesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Safe scroll handler for horizontal slider controls
  const handleScroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: "01",
      title: "Wedding Photography",
      description: "Capturing the heartbeat of your timeless union with full-day cinematic coverage and high-resolution galleries.",
      image: "https://tse4.mm.bing.net/th/id/OIP.YQwlbCWCitJPIPK9W2Ol_AHaE7?r=0&w=2048&h=1365&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: "02",
      title: "Event Photography",
      description: "Preserving the energy, scale, and candid guest interactions with crisp precision and professional lighting.",
      image: "https://i.pinimg.com/originals/00/42/c1/0042c119b39ce2cca8322c844cfb8cba.jpg",
    },
    {
      id: "03",
      title: "Portrait Photography",
      description: "Editorial elegance that defines your personal brand with professional skin retouching and custom style consultations.",
      image: "https://media.istockphoto.com/id/1566652300/photo/portrait-of-south-indian-woman-in-sari.jpg?s=1024x1024&w=is&k=20&c=k97l3WwnD80_HwTX0ha5StgJs0ixp28ApnEm0RCYm34=",
    },
    {
      id: "04",
      title: "Pre-Wedding",
      description: "Cinematic love letters before the walk down the aisle with customized location scouting and styling concepts.",
      image: "https://i.pinimg.com/originals/14/81/43/148143447ae1de3cc8cdb7d363b07abb.jpg",
    },
    {
      id: "05",
      title: "Post-Wedding Photography",
      description: "High-impact product, fashion, and architectural photography engineered to elevate your commercial presence.",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "06",
      title: "Naming Ceremony",
      description: "Cinematic love letters before the walk down the aisle with customized location scouting and styling concepts.",
      image: "https://i.pinimg.com/originals/84/f3/16/84f316ce237db8223c26d7dcefdc4595.jpg",
    },
    {
      id: "07",
      title: "Housewarming Ceremony",
      description: "High-impact product, fashion, and architectural photography engineered to elevate your commercial presence.",
      image: "https://th.bing.com/th/id/OIP.p1nfANx5JRLZ_O62MBlheQHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: "08",
      title: "Ritual Ceremony",
      description: "Cinematic love letters before the walk down the aisle with customized location scouting and styling concepts.",
      image: "https://static.vecteezy.com/system/resources/previews/040/805/968/non_2x/ai-generated-traditional-hindu-wedding-bride-groom-family-and-priest-perform-sacred-fire-rituals-in-traditional-attire-free-photo.jpg",
    },
    {
      id: "09",
      title: "Puberty Ceremony Photography",
      description: "High-impact product, fashion, and architectural photography engineered to elevate your commercial presence.",
      image: "https://c8.alamy.com/comp/2GK57J0/tamil-nadu-india-12th-september-2021-the-ritushuddhi-or-ritu-kala-samskara-is-the-ceremony-that-celebrates-a-girls-transition-to-womanhood-this-2GK57J0.jpg",
    }
  ];

  return (
    <>
      <main className="relative w-full bg-transparent text-white flex items-center justify-center sm:p-8 antialiased overflow-hidden font-sans">
        
        {/* Custom Keyframe Styles */}
        <style dangerouslySetInnerHTML={{ __html: `
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />

        {/* Background Glow Accents */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full blur-3xl pointer-events-none" />

        {/* Outer Sleek Card Container - Fully Transparent */}
        <div className="relative w-full bg-transparent rounded-[2.5rem] p-6 sm:p-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Side: Headings & Action Button */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-4 flex flex-col justify-between space-y-8"
            >
              <div>
               
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-orange-200 leading-[1.1] mb-6">
                  Our main areas <br />of work
                </h2>

                <p className="text-amber-200/80 text-sm sm:text-base leading-relaxed max-w-sm font-medium">
                  From conceptual storytelling to high-end cinematic delivery, we provide tailored photography services that capture the heartbeat of your moments.
                </p>
              </div>

              <div>
                <button 
                  type="button"
                  onClick={() => handleScroll('right')}
                  className="group inline-flex items-center space-x-3 text-orange-300  transition-all duration-300 px-7 py-3.5 rounded-full font-semibold text-sm shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>click me</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>

            {/* Right Side: Horizontal Slider Cards with Floating Water Wave */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-8 flex flex-col space-y-4"
            >
              
              {/* Slider Control Header */}
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-medium text-amber-200 uppercase tracking-wider">
                  Explore Services Showcase
                </span>
                <div className="flex items-center space-x-2">
                  <button 
                    type="button"
                    onClick={() => handleScroll('left')} 
                    className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-amber-200 transition  cursor-pointer"
                    title="Slide Left"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button 
                    type="button"
                    onClick={() => handleScroll('right')} 
                    className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-amber-200 transition border border-neutral-800 cursor-pointer"
                    title="Slide Right"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Flex Container for Horizontal Fast Scroll */}
              <div 
                ref={sliderRef}
                className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-8 pt-4 items-stretch"
              >
                {services.map((service, index) => (
                  <motion.div 
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    /* Floating Water Wave Vertical Animation for Each Card */
                    animate={{
                      y: [0, -8, 0, 8, 0],
                    }}
                    transition={{
                      y: {
                        duration: 5 + (index % 3),
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      },
                      opacity: { duration: 0.5 },
                    }}
                    className="min-w-[280px] sm:min-w-[320px] max-w-[320px] flex-shrink-0 border border-neutral-800/80 rounded-3xl p-6 flex flex-col justify-between h-[380px] transition-all duration-500 hover:shadow-2xl hover:border-amber-300/50 group relative overflow-hidden cursor-pointer"
                  >
                    {/* Floating Water Wave Background Image Overlay */}
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 1, -1, 0],
                      }}
                      transition={{
                        duration: 6 + (index % 2),
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-cover bg-center brightness-125 contrast-105 transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    />

                    {/* Gradient Overlay for Readable Text */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90 pointer-events-none" />

                    {/* Card Top: Number Index */}
                    <div className="flex items-center justify-between relative z-10">
                     
                    </div>

                    {/* Card Bottom: Title & Description */}
                    <div className="relative z-10 space-y-2">
                      <h3 className="text-xl font-bold text-amber-200 group-hover:text-amber-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm line-clamp-3 leading-relaxed text-orange-200/90 font-medium">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>

          </div>

        </div>
        
      </main>

      <div className='bg-transparent'>
        <ClientGallery />
        <Mainchooseus />
        <Chooseus />
      </div>
    </>
  );
}