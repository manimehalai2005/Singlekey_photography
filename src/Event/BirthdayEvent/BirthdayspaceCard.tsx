'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import StarfieldCursor from '@/src/StarFieldCursor';

export default function LoveYourFamilyCollage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <>
   
    <section className=" w-full bg-transparent  text-neutral-900 py-12 px-4 sm:px-8 flex flex-col justify-center items-center overflow-hidden font-sans">
      
      {/* Outer Card Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className=" w-full  rounded-3xl p-6 sm:p-10 shadow-xl  flex flex-col gap-8"
      >
        
        {/* Top Header Title ("Love Your family") */}
        <div className="text-center">
        
        </div>

        {/* Main Grid Layout: Left 6-photo column & Right 2 large featured photos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* --- LEFT SIDE: 3x2 Grid of Smaller Photos (6 Photos) --- */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            
            {/* Photo 1 */}
            <motion.div variants={itemVariants} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-neutral-100 group">
              <img
                src="https://i.pinimg.com/736x/af/5d/d3/af5dd3a99a7b2bc175d52cc9b544987f.jpg"
                alt="Family 1"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Photo 2 */}
            <motion.div variants={itemVariants} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-neutral-100 group">
              <img
                src="https://i.pinimg.com/736x/af/e0/9d/afe09d61e0109948acae7b386f7599de.jpg"
                alt="Family 2"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Photo 3 */}
            <motion.div variants={itemVariants} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-neutral-100 group">
              <img
                src="https://www.fotonstudio.in/wp-content/uploads/2021/05/Aarav-9.jpg"
                alt="Family 3"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Photo 4 */}
            <motion.div variants={itemVariants} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-neutral-100 group">
              <img
                src="https://1.bp.blogspot.com/-1a1iTCFuINQ/YK3Wt9N0BnI/AAAAAAAAvDs/7oK88et7jZ4IZU4CCB4PrsGV17oeK_OKACLcBGAsYHQ/s850/71%2BDSC_8713c.jpg"
                alt="Family 4"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Photo 5 */}
            <motion.div variants={itemVerticalStyles(itemVariants)} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-neutral-100 group">
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.wm4kAqNi-FSv2rOfac4f6AHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Family 5"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Photo 6 */}
            <motion.div variants={itemVariants} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-neutral-100 group">
              <img
                src="https://i.ytimg.com/vi/L_yv_xBbGaw/maxresdefault.jpg?v=67ac9443"
                alt="Family 6"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

          </div>

          {/* --- RIGHT SIDE: 2 Large Featured Photos Stack --- */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6">
            
            {/* Top Large Feature Photo (Multi-generation family group) */}
            <motion.div variants={itemVariants} className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-neutral-100 group">
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.V_UiPQxbfVkJ445WxoIXHQHaE8?r=0&w=1000&h=667&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Happy multi-generation family"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Bottom Large Feature Photo (Family cooking / fun activity with peppers) */}
            <motion.div variants={itemVariants} className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-neutral-100 group">
              <img
                src="https://i.pinimg.com/736x/0b/8c/26/0b8c26a883abe89e0f15b9e3e58bbd04.jpg"
                alt="Family having fun in the kitchen"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

          </div>

        </div>

      </motion.div>

    </section>
    </>
  );
}

function itemVerticalStyles(variants: Variants) {
  return variants;
}