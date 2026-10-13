"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import StarfieldCursor from "@/src/StarFieldCursor";

const initialCards = [
  {
    id: "card-1",
    src: "https://tse4.mm.bing.net/th/id/OIP.SzqVBxGS4vV0MLtRsTbmGgHaNK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    tag: "BLESSINGS",
    rotation: "-rotate-2",
  },
  {
    id: "card-2",
    src: "https://live.staticflickr.com/1177/1397474014_c59638a94f_b.jpg",
    tag: "TRADITION",
    rotation: "rotate-1",
  },
  {
    id: "card-3",
    src: "https://camouflageclicks.com/assets/uploads/blog/7197561.jpg",
    tag: "JOY",
    rotation: "-rotate-1",
  },
  {
    id: "card-4",
    src: "https://i.ytimg.com/vi/8nmUL2QdgRw/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLCWYtRtxuxlI0DvC90L9blAhTQ4qA&usqp=CCk",
    tag: "MILESTONE",
    rotation: "rotate-2",
  },
  {
    id: "card-5",
    src: "https://i.pinimg.com/originals/c2/76/cf/c276cf80afd5fdee948cde21b18d8a23.jpg",
    tag: "GRACE",
    rotation: "rotate-1",
  },
  {
    id: "card-6",
    src: "https://tse3.mm.bing.net/th/id/OIP.Fwpj05vs2Fj7kh4EIdl2_AHaEK?r=0&pid=ImgDet&w=474&h=266&rs=1&o=7&rm=3",
    tag: "FAMILY",
    rotation: "-rotate-2",
  },
  {
    id: "card-7",
    src: "https://media.istockphoto.com/id/2168209620/photo/fun-moments-between-bride-and-her-aunty-at-the-haldi-ceremony.jpg?s=612x612&w=0&k=20&c=JBRtxT8d8FOffhNL5By4-3OdYezvO8GhTjrednKYfeE=",
    tag: "CELEBRATION",
    rotation: "rotate-2",
  },
  {
    id: "card-8",
    src: "https://tse2.mm.bing.net/th/id/OIP.1EqL1ZfOqae8_QC5byuyigHaFM?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    tag: "LOVE",
    rotation: "-rotate-1",
  },
];

export default function PubertyCeremonyVisionBoard() {
  const [cardOrder, setCardOrder] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7]);
  const [isSwapping, setIsSwapping] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger reveal animation when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Interchange column images smoothly on loop
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setIsSwapping(true);
      setTimeout(() => {
        setCardOrder((prev) => [
          prev[4],
          prev[5],
          prev[6],
          prev[7],
          prev[0],
          prev[1],
          prev[2],
          prev[3],
        ]);
        setIsSwapping(false);
      }, 700);
    }, 4500);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <>
      
      <section
        ref={sectionRef}
        className="relative w-full bg-transparent text-white flex flex-col justify-center items-center px-4 sm:px-8 py-20 overflow-hidden"
      >
        {/* Main Vision Board Grid Layout */}
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Framer Motion Banner Header Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="my-6 text-center z-20"
          >
            <h2 className="text-orange-300 font-bold font-sans italic text-2xl text-center">
              Puberty ceremony
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="text-xs uppercase tracking-[0.3em] text-orange-400 mt-2"
            >
              Celebrating Sacred Milestones & Blessings
            </motion.p>
          </motion.div>

          {/* Collage Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mt-4">
            {cardOrder.map((index, slot) => {
              const card = initialCards[index];
              return (
                <div
                  key={slot}
                  className={`text-neutral-900 p-2 pb-6 shadow-xl transform ${card.rotation} hover:rotate-0 transition-all duration-700 ease-in-out ${
                    isSwapping ? "scale-90 opacity-20 rotate-3 translate-x-4" : "scale-100 opacity-100 translate-x-0"
                  }`}
                  style={{
                    transitionDelay: `${slot * 0.05}s`,
                  }}
                >
                  {/* Part-by-Part Reveal Container */}
                  <div
                    className={`w-full h-36 sm:h-44 overflow-hidden bg-neutral-200 rounded-sm ${
                      isVisible ? "animate-partReveal" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: `${slot * 0.15}s`,
                    }}
                  >
                    <img
                      src={card.src}
                      alt={card.tag}
                      className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                    />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-orange-300 mt-2 block text-center">
                    {card.tag}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <style jsx>{`
          /* Slow Part-by-Part Opening Reveal */
          @keyframes partReveal {
            0% {
              clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
              opacity: 0;
              transform: scale(0.9);
            }
            50% {
              clip-path: polygon(0% 20%, 100% 0%, 80% 100%, 0% 80%);
              opacity: 0.7;
            }
            100% {
              clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-partReveal {
            animation: partReveal 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }
        `}</style>
      </section>
    </>
  );
}