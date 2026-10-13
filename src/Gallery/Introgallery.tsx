'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const initialImages = [
  { id: 1, src: "https://tse4.mm.bing.net/th/id/OIP.8dFD88Upz8M6hdg3LXHukgAAAA?r=0&w=440&h=660&rs=1&pid=ImgDetMain&o=7&rm=3", alt: "Setup 1" },
  { id: 2, src: "https://i.pinimg.com/736x/44/6e/24/446e24fe2a2dffa23963829fcfb040e7.jpg", alt: "Setup 2" },
  { id: 3, src: "https://i.ytimg.com/vi/vlg-IQ4eoKs/maxresdefault.jpg", alt: "Top Wide Room" },
  { id: 4, src: "https://media.istockphoto.com/id/2187253642/photo/a-hindu-ritual-with-offerings-being-made-into-a-sacred-fire.jpg?s=170667a&w=0&k=20&c=xpC7pHSmTuj8ZCD2s4u_OUdJgKdiOIXVjf8GiV6bqBU=", alt: "Ritual" },
  { id: 5, src: "https://phometo.com/images/gallery/NamingCeremony/20.jpg", alt: "Naming Ceremony" },
  { id: 6, src: "https://i.pinimg.com/736x/91/fb/1e/91fb1e5f4725265012ee0fc0f8aaa520.jpg", alt: "Living Room" },
  { id: 7, src: "https://tse1.mm.bing.net/th/id/OIP.RZEAfB6_LawgXFji4acvnQHaFS?r=0&w=600&h=429&rs=1&pid=ImgDetMain&o=7&rm=3", alt: "Detail 1" },
  { id: 8, src: "https://tse2.mm.bing.net/th/id/OIP.cVy756bn4LHFVYpCQf0C4wHaLe?r=0&w=661&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3", alt: "Detail 2" },
  { id: 9, src: "https://i.pinimg.com/originals/f0/48/d1/f048d1694b9d9199bb394837745d46d2.jpg", alt: "Detail 3" },
  { id: 10, src: "https://i.pinimg.com/originals/ad/93/80/ad9380d453f911e4e5825e1f88c6dc72.png", alt: "Detail 4" },
  { id: 11, src: "https://i.pinimg.com/736x/7c/9e/17/7c9e175670b0a62cbfc258af60d6ab08.jpg", alt: "Detail 5" },
  { id: 12, src: "https://images.pexels.com/photos/7694286/pexels-photo-7694286.jpeg?cs=srgb&dl=pexels-anoop1992-7694286.jpeg&fm=jpg", alt: "Detail 6" },
];

export default function InteriorGallery() {
  const [images, setImages] = useState(initialImages);

  useEffect(() => {
    const shuffleArray = () => {
      setImages((prevImages) => {
        const shuffled = [...prevImages];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      });
    };

    const timer = setTimeout(() => {
      shuffleArray();
    }, 1000);

    const interval = setInterval(() => {
      shuffleArray();
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full bg-black flex items-center justify-center p-5">
      {/* Container */}
      <div className="w-full bg-black p-2 rounded-lg shadow-2xl flex flex-col font-sans">
        
        {/* Header Section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-orange-400 p-4 font-sans italic">
            SingleKey Collections
          </h1>
        </div>

        {/* Row 1: Top Section */}
        <div className="grid grid-cols-4 bg-black">
          {/* Swatch 1 */}
          <motion.div layout transition={{ duration: 0.8, ease: "easeInOut" }} className="bg-[#C66311] rounded-[3px] min-h-[65px] overflow-hidden">
            <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover" />
          </motion.div>

          {/* Swatch 2 */}
          <motion.div layout transition={{ duration: 0.8, ease: "easeInOut" }} className="bg-[#C8AC8B] rounded-[3px] min-h-[65px] overflow-hidden">
            <img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover" />
          </motion.div>
          
          {/* Top Wide Room Image */}
          <motion.div layout transition={{ duration: 0.8, ease: "easeInOut" }} className="col-span-2 overflow-hidden rounded-[3px]">
            <img src={images[2].src} alt={images[2].alt} className="w-full h-150 object-cover" />
          </motion.div>
        </div>

        {/* Row 2: Bottom Section */}
        <div className="grid grid-cols-2 bg-black">
          
          {/* Left Column Stack */}
          <div className="flex flex-col">
            <motion.div layout transition={{ duration: 0.8, ease: "easeInOut" }} className="overflow-hidden rounded-[3px] aspect-[4/3]">
              <img src={images[3].src} alt={images[3].alt} className="w-full h-full object-cover" />
            </motion.div>
            <motion.div layout transition={{ duration: 0.8, ease: "easeInOut" }} className="overflow-hidden rounded-[3px] aspect-[4/3]">
              <img src={images[4].src} alt={images[4].alt} className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Right Column Stack */}
          <div className="flex flex-col">
            <motion.div layout transition={{ duration: 0.8, ease: "easeInOut" }} className="overflow-hidden rounded-[3px] aspect-[16/10]">
              <img src={images[5].src} alt={images[5].alt} className="w-full h-full object-cover" />
            </motion.div>

            {/* Bottom Small Grid */}
            <div className="grid grid-cols-3 bg-black">
              {images.slice(6, 12).map((img) => (
                <motion.div key={img.id} layout transition={{ duration: 0.8, ease: "easeInOut" }} className="overflow-hidden rounded-[3px] aspect-[3/4]">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}