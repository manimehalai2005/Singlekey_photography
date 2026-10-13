"use client";

import { motion, Variants } from "framer-motion";
import HouseWarmingStorySection from "./HouseWarmingStorySection";
import InfinitePhotoSlider from "../Photogallerytemplate";
import StarfieldCursor from "@/src/StarFieldCursor";
import WeddingDriftGallery from "../Prewedd";

export default function HouseWarmingCeremonySection() {
  const titleText = "House Warming Ceremony";
  const subtitleText = "New Beginnings";

  // Container variant for staggering letter animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  // Letter animation variants
  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  // Zigzag Image Animation: Top-Right frame moves smoothly up and down
  const topRightImageVariants: Variants = {
    hidden: { opacity: 0, x: 50, y: -30 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Zigzag Image Animation: Bottom-Left frame moves in opposite direction
  const bottomLeftImageVariants: Variants = {
    hidden: { opacity: 0, x: -50, y: 30 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      },
    },
    animate: {
      y: [8, -8, 8],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
    <StarfieldCursor/>
    <section className="relative w-full min-h-screen bg-transparent text-white flex flex-col justify-center items-center px-6 sm:px-12 py-20 overflow-hidden">
      
      {/* Main Container Layout */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-10">
        
        {/* Left Side: Overlapping Photo Frames with Zigzag Floating Animation */}
        <div className="lg:col-span-6 relative flex justify-center items-center h-[420px] sm:h-[480px]">
          
          {/* Top-Right Larger Photo Frame */}
          <motion.div
            className="absolute right-0 top-0 w-72 sm:w-[380px] h-72 sm:h-88 text-neutral-900 p-3 pb-10 z-10"
            variants={topRightImageVariants}
            initial="hidden"
            whileInView="visible"
            animate="animate"
            viewport={{ once: true }}
          >
            <div className="w-full h-full overflow-hidden bg-neutral-200 rounded-lg shadow-xl">
              <img
                src="https://i.pinimg.com/736x/84/69/52/846952f4b8f38fe306bb8a555e17674c.jpg"
                alt="New House Interior"
                className="w-full h-full object-cover"
                data-aos='fade-left' data-aos-delay='400' data-aos-duration='1500'
              />
            </div>
          </motion.div>

          {/* Bottom-Left Overlapping Photo Frame */}
          <motion.div
            className="absolute left-0 bottom-4 w-60 sm:w-72 text-neutral-900 p-3 pb-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-30"
            variants={bottomLeftImageVariants}
            initial="hidden"
            whileInView="visible"
            animate="animate"
            viewport={{ once: true }}
          >
            <div className="w-full h-44 sm:h-52 overflow-hidden bg-neutral-200 rounded-lg shadow-2xl">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.2XrbW410mVJX6h1y3oUdngHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="House Warming Decor"
                className="w-full h-full object-cover"
                 data-aos='fade-right' data-aos-delay='400' data-aos-duration='1500'
              />
            </div>
          </motion.div>

        </div>

        {/* Right Side: Content for House Warming Ceremony */}
        <div className="lg:col-span-6 text-left flex flex-col justify-center">
          
          {/* Animated Subtitle */}
          <motion.span
            className="text-xs sm:text-sm uppercase tracking-[0.4em] font-bold text-[#C89B7B] block mb-2 flex flex-wrap"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {subtitleText.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>

          {/* Animated Heading (Letter-by-Letter) */}
          <motion.h2
            className="italic font-bold text-2xl sm:text-3xl lg:text-6xl text-orange-500 tracking-wide mb-6 leading-tight flex flex-wrap"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {titleText.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>

          <p className="text-sm sm:text-base text-amber-300 font-medium leading-relaxed mb-4">
            With hearts full of joy and gratitude, we warmly invite you to grace the Griha Pravesh and housewarming celebrations of our new home. Join us as we invoke divine blessings for prosperity, peace, and happiness.
          </p>

          <p className="text-xs sm:text-sm text-orange-300 leading-relaxed mb-8">
            Let us celebrate this milestone together with traditional rituals, festive feasts, and your invaluable presence as we step into this beautiful new chapter.
          </p>

        </div>

      </div>

    </section>
    <HouseWarmingStorySection/>
   <WeddingDriftGallery/>
    </>
  );
}