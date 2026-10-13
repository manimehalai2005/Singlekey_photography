'use client';

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { BsFacebook, BsInstagram, BsLinkedin, BsX } from "react-icons/bs";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.1 },
  },
};

const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

// Helper Component for Letter by Letter Animation
const AnimatedText = ({ text, className = "" }: { text: string; className?: string }) => {
  const letters = Array.from(text);

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          style={{ display: 'inline-block', whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function Footer() {
  const picture = "./public/images/genzzilogoblack.jpeg";

  return (
    <footer className="w-full bg-black text-orange-400 py-16 px-6 md:px-20 overflow-hidden">
      <div className="max-w-8xl bg-black mx-auto">
        <div className="grid grid-cols-1 bg-black md:grid-cols-2 lg:grid-cols-5 gap-2 pb-16">
          
          {/* Column 1: Brand Info & Status */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-white tracking-tight">
                  <img
                    src="https://cdn.photomall.in/photomall/d0bade31-0828-4442-a034-25a0a58c6bb90nhCITc9"
                    alt="Logo"
                    className="h-16 w-auto object-contain filter brightness-0 invert"
                  />
                </Link>
              </div>
              <span className="text-lg font-black tracking-tight font-sans italic text-orange-300">
                <AnimatedText text="SingleKey" />
                <br />
                <AnimatedText text="photography" />
              </span>
            </div>
            
            <p className="text-sm font-sans italic text-orange-300 max-w-sm leading-relaxed">
              <AnimatedText text="Best photography platform that captures genuine emotions, meaningful details, and timeless stories." />
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 text-zinc-500">
              {[ BsInstagram, BsLinkedin, BsFacebook, BsX ].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 rounded-full bg-black text-white border border-amber-400 flex items-center justify-center hover:bg-zinc-200 hover:text-zinc-900 transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Events */}
          <div className="space-y-4">
            <h4 className="text-sm font-sans italic uppercase tracking-wider text-orange-400">
              <AnimatedText text="Events" />
            </h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              {[
                "wedding ceremony",
                "Engagement ceremony",
                "Birthday ceremony",
                "Babyshower ceremony",
                "Naming ceremony",
                "Earpiercing ceremony",
                "HouseWarming Ceremony",
                "Ritual ceremony",
                "Puberty ceremony"
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-blue-400 transition font-sans italic tracking-wider text-orange-200">
                    <AnimatedText text={item} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Packages */}
          <div className="space-y-4">
            <h4 className="text-sm font-sans italic uppercase tracking-wider text-orange-400">
              <AnimatedText text="Packages" />
            </h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              {[
                "Essential collection",
                "Signature collection",
                "Premium collection",
                "Luxury collection",
                "Elite collection",
                "Royal collection"
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="tracking-wider font-sans italic text-orange-200 hover:text-blue-400 transition">
                    <AnimatedText text={item} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: About Us */}
          <div className="space-y-4">
            <h4 className="text-sm font-sans italic uppercase tracking-wider text-orange-400">
              <AnimatedText text="About us" />
            </h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              {[
                "Collections",
                "What capture our team",
                "Why choose us",
                "Mission & Vision"
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-xs font-sans italic uppercase tracking-wider text-orange-200 hover:text-blue-400 transition">
                    <AnimatedText text={item} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-sans italic uppercase tracking-wider text-orange-400">
              <AnimatedText text="Contact" />
            </h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li>
                <a href="#" className="text-xs font-sans italic uppercase tracking-wider text-orange-200 hover:text-blue-400 transition">
                  📍 4/297, Thai Nagar, Anuppanadi, Madurai – 625009
                </a>
              </li>
              <li>
                <a href="#" className="text-xs font-sans italic uppercase tracking-wider text-orange-200 hover:text-blue-400 transition">
                  📞 +91 9952840777
                </a>
              </li>
              <li>
                <a href="#" className="text-xs font-sans italic uppercase tracking-wider text-orange-200 hover:text-blue-400 transition">
                  ✉️ singlekeyphotography@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 space-y-4 md:space-y-0 border-t border-zinc-800">
          <div className="flex items-center space-x-2">
            <Link href="#">
              <img
                src={picture}
                alt="Genzzi Logo"
                className="h-10 w-auto object-contain filter brightness-0 invert text-amber-200"
              />
            </Link>
            <span className="text-orange-200 font-sans italic">
              <AnimatedText text="© 2026 SingleKey Photography Inc." />
            </span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-xs font-sans italic uppercase tracking-wider text-orange-200 hover:text-blue-400 transition">
              <AnimatedText text="Privacy Policy" />
            </a>
            <a href="#" className="text-xs font-sans italic uppercase tracking-wider text-orange-200 hover:text-blue-400 transition">
              <AnimatedText text="Terms" />
            </a>
            <a href="#" className="text-xs font-sans italic uppercase tracking-wider text-orange-200 hover:text-blue-400 transition">
              <AnimatedText text="Code of Conduct" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}