'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import ZigzagImages from './Nextslide';

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

// Letter Animation Parent Variants
const headingContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
};

// Letter Animation Single Letter Variants
const headingLetterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
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

export default function PhotographyAboutPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: 'Wedding Photography',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('All');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
    }
  };

  const portfolioItems = [
    { id: 1, title: 'Ethereal Wedding', category: 'Weddings', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Portraiture & Light', category: 'Portraits', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Commercial Brand', category: 'Commercial', img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Golden Hour Story', category: 'Weddings', img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80' },
  ];

  const filteredItems = activeTab === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  
  const headingText = "Capturing , Creating Timeless Stories .";
  const letters = Array.from(headingText);

  return (
    <div className="w-full bg-transparent text-slate-800 font-sans overflow-x-hidden">
      {/* Hero Section - Full Width */}
      <section className="relative overflow-hidden">
        <div className="w-full pt-10 px-4 sm:px-6 lg:px-8 text-center">
          <div 
            className="inline-block text-amber-200 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-6"
          >
            Professional Photography & Visual Storytelling
          </div>

          {/* Letter by Letter Animated Heading */}
          <motion.div
            className="text-xl md:text-4xl font-extrabold text-orange-400 tracking-tight max-w-4xl mx-auto leading-tight flex flex-wrap justify-center"
            variants={headingContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={headingLetterVariants}
                style={{ display: 'inline-block', whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Banner Image with Floating Badge - Full Width Container */}
          <div className="mt-12 relative w-full rounded-none md:rounded-3xl overflow-hidden h-[420px] md:h-[500px]">
            <ZigzagImages />
          </div>
        </div>
      </section>
    </div>
  );
}