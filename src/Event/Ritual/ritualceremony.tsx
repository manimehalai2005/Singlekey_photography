"use client";

import { motion, Variants } from "framer-motion";
import RitualCeremonyCollageSection from "./ritualCeremonycardCollection";
import InfinitePhotoSlider from "../Photogallerytemplate";
import StarfieldCursor from "@/src/StarFieldCursor";
import WeddingDriftGallery from "../Prewedd";

export default function RitualCeremonyCard() {
  const subHeadingText = "Sacred Tradition";
  const paragraphText =
    "Traditional morning rituals, sacred offerings, and cherished moments shared with family have been the true highlights of this celebration.";

  // Text container variant for staggered letter animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  // Letter variants
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

  // 3D Flip Animation Variant
  const flipVariants: Variants = {
    animate: {
      rotateY: [0, 180, 360],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
    <StarfieldCursor/>
    <section className="relative w-full bg-transparent text-white flex flex-col justify-center items-center px-6 sm:px-12 py-20 overflow-hidden">
      {/* Main Container Layout */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-10">
        
        {/* Left Side: Journal-style Text Box with Letter Animations */}
        <div className="lg:col-span-5 text-left p-8 rounded-3xl">
          
          {/* Subheading Letter Animation */}
          <motion.span
            className="text-xs uppercase tracking-[0.4em] font-bold text-[#C89B7B] block mb-3 flex flex-wrap"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {subHeadingText.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                style={{
                  display: "inline-block",
                  whiteSpace: char === " " ? "pre" : "normal",
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>

          {/* Paragraph Letter Animation */}
          <motion.p
            className="text-sm text-orange-300 font-medium leading-relaxed mb-4 flex flex-wrap"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {paragraphText.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                style={{
                  display: "inline-block",
                  whiteSpace: char === " " ? "pre" : "normal",
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
        </div>

        {/* Right Side: Photo Collage with Front & Back Different Images */}
        <div className="lg:col-span-7 relative flex flex-col sm:flex-row gap-8 justify-center items-center">
          
          {/* --- Card 1: Square Photo (Different Front & Back Images) --- */}
          <div className="w-60 h-60 sm:w-64 sm:h-64 [perspective:1000px]">
            <motion.div
              className="w-full h-full relative rounded-[2.5rem] shadow-2xl"
              variants={flipVariants}
              animate="animate"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* FRONT IMAGE (Square 1) */}
              <div className="absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden bg-neutral-900 border border-neutral-800 [backface-visibility:hidden]">
                <img
                  src="https://i.pinimg.com/736x/76/0c/26/760c26555dc68782d92e738a691443f0.jpg"
                  alt="Ritual Front"
                  className="w-full h-full object-cover rounded-[2.5rem]"
                />
              </div>

              {/* BACK IMAGE (Square 2 - Different Image) */}
              <div 
                className="absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden bg-neutral-900 border border-neutral-800 [backface-visibility:hidden]"
                style={{ transform: "rotateY(180deg)" }}
              >
                <img
                  src="https://media.istockphoto.com/id/1271675715/photo/tamil-people-during-celebration-of-nallur-kandaswamy-kovil-festival-in-nallur-temple-jaffna.jpg?s=612x612&w=0&k=20&c=WqEOSCVkImMi84DFgJiyRou5qe3sO3bHfm_P6FzRbq4="
                  alt="Ritual Back"
                  className="w-full h-full object-cover rounded-[2.5rem]"
                />
              </div>
            </motion.div>
          </div>

          {/* --- Card 2: Vertical Photo (Different Front & Back Images with Delay) --- */}
          <div className="w-72 sm:w-80 h-[380px] sm:h-[440px] [perspective:1000px]">
            <motion.div
              className="w-full h-full relative rounded-[2.5rem] shadow-2xl"
              animate={{ rotateY: [0, -180, -360] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* FRONT IMAGE (Vertical 1) */}
              <div className="absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden bg-neutral-900 border border-neutral-800 [backface-visibility:hidden]">
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/cc/19/8b/shasti-mahotsava.jpg?w=1400&h=1400&s=1"
                  alt="Family Ceremony Front"
                  className="w-full h-full object-cover rounded-[2.5rem]"
                />
              </div>

              {/* BACK IMAGE (Vertical 2 - Different Image) */}
              <div 
                className="absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden bg-neutral-900 border border-neutral-800 [backface-visibility:hidden]"
                style={{ transform: "rotateY(180deg)" }}
              >
                <img
                  src="https://media.istockphoto.com/id/1462052614/photo/religious-symbols-gods-and-smoke-at-marche-sur-le-feu-2022-bambous-in-mauritius-indian-ocean.jpg?s=612x612&w=0&k=20&c=-cXpKnwxrBZqOLhLLFtLOGViatVw7QAp8E-XAeTlGGY="
                  alt="Family Ceremony Back"
                  className="w-full h-full object-cover rounded-[2.5rem]"
                />
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
    <RitualCeremonyCollageSection/>
    <WeddingDriftGallery/>
    </>
  );
}