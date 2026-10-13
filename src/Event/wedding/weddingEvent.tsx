"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import StarfieldCursor from "@/src/StarFieldCursor";

export default function ThankYouWeddingCard() {
  return (
    <>
    <StarfieldCursor/>
      <section className="relative w-full bg-transparent text-white flex flex-col justify-center items-center px-6 py-16 lg:px-20 overflow-hidden">
        
        {/* Main Split Container matching the template */}
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Dynamic Wedding Photo Collage */}
          <div className="lg:col-span-7 relative w-full h-[450px] sm:h-[520px] flex items-center justify-center">
            
            {/* Top-Left / Main Tall Photo */}
            <motion.div 
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute left-0 top-0 w-[55%] h-[75%] p-2.5 transform -rotate-2 z-10 rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://www.atlhea.in/wp-content/uploads/2020/11/ATLHEA-87.jpg"
                alt="Bride and groom portrait"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
              />
            </motion.div>

            {/* Top-Right Portrait Photo */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="absolute right-4 top-4 w-[50%] h-[60%] p-2.5 transform rotate-3 z-20 rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images-pw.pixieset.com/elementfield/36171942/044-6bd6664e.JPG"
                alt="Couple embracing"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
              />
            </motion.div>

            {/* Bottom-Center Overlapping Photo */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="absolute bottom-2 left-1/4 w-[60%] h-[55%] transform rotate-1 z-30 rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://www.weddingsutra.com/images/wedding-images/entertaining/tamil-traditional-wedding/tamil-wedding-ritual-29.webp"
                alt="Wedding romantic moment"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
              />
            </motion.div>

          </div>

          {/* Right Column: Wedding Events Text Card Layout */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left relative"
          >
            
            {/* Minimalist Top Divider Line */}
            <div className="hidden lg:block absolute -top-16 left-0 w-[1px] h-12 bg-neutral-700"></div>

            <h2 className="font-serif tracking-[0.2em] text-2xl sm:text-xl lg:text-3xl font-normal text-amber-300 mb-4">
              WEDDING EVENTS
            </h2>

            <p className="font-serif italic text-base text-[#C89B7B] mb-6">
              Timeless celebrations & sacred moments
            </p>

            <p className="text-xs sm:text-sm uppercase tracking-wider text-amber-300 leading-relaxed font-medium font-sans italic mb-8">
              Capturing the elegance, emotions, and joyous traditions of your special day. From intimate pre-wedding rituals to grand evening receptions, we preserve every unforgettable chapter of your love story.
            </p>

            <p className="font-serif italic text-base text-[#C89B7B]">
              Forever in frames
            </p>

            {/* Minimalist Bottom Divider Line */}
            <div className="hidden lg:block absolute -bottom-16 left-0 w-[1px] h-12 bg-neutral-700"></div>

          </motion.div>

        </div>

      </section>
    </>
  );
}