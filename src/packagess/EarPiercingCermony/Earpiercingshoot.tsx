"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

interface PortraitEvent {
  id: string;
  name: string;
  duration: string;
  price: number;
  description: string;
}

const eventsList: PortraitEvent[] = [
  {
    id: "ear-piercing-ritual",
    name: "Ear Piercing Ritual Session",
    duration: "2 Hours Session",
    price: 15000,
    description: "Gentle and sacred coverage of the traditional ear piercing ceremony moments.",
  },
  {
    id: "traditional-attire",
    name: "Traditional Attire & Family Portraits",
    duration: "3 Hours Session",
    price: 25000,
    description: "Capturing beautiful memories in traditional attire with parents and close family.",
  },
  {
    id: "blessings-customs",
    name: "Sacred Blessings & Custom Prayers",
    duration: "Half Day (4 Hours)",
    price: 35000,
    description: "Cinematic documentation of family prayers, sacred offerings, and blessings.",
  },
  {
    id: "grand-ceremony",
    name: "Grand Ear Piercing Celebration",
    duration: "Full Day Session",
    price: 50000,
    description: "Comprehensive cinematic coverage of the entire celebration from morning to evening.",
  },
  {
    id: "outdoor-portrait",
    name: "Outdoor Cinematic Portrait Shoot",
    duration: "1 Full Day / Location",
    price: 40000,
    description: "Stylized storytelling portraiture shot at a scenic outdoor heritage location.",
  },
];

export default function EarPiercingShoot() {
  const [selectedEvents, setSelectedEvents] = useState<string[]>([
    "ear-piercing-ritual",
    "traditional-attire",
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", date: "" });

  const toggleEvent = (id: string) => {
    if (selectedEvents.includes(id)) {
      setSelectedEvents(selectedEvents.filter((item) => item !== id));
    } else {
      setSelectedEvents([...selectedEvents, id]);
    }
  };

  const totalPrice = selectedEvents.reduce((sum, id) => {
    const event = eventsList.find((e) => e.id === id);
    return sum + (event ? event.price : 0);
  }, 0);

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Ear Piercing Ceremony Booking submitted successfully for ₹${totalPrice.toLocaleString("en-IN")}`);
    setIsModalOpen(false);
  };

  return (
    <section className="relative w-full min-h-screen bg-transparent text-white flex flex-col items-center justify-center py-16 px-6 lg:px-16 overflow-hidden">
      {/* Container matching split layout */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading, Description & Interactive Options */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs uppercase tracking-widest text-[#C89B7B] font-bold mb-2"
          >
            Ear Piercing Packages
          </motion.span>
         

          {/* Interactive Checklist / Selectors */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-3 mb-8"
          >
            {eventsList.map((event) => {
              const isSelected = selectedEvents.includes(event.id);
              return (
                <div
                  key={event.id}
                  onClick={() => toggleEvent(event.id)}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#C89B7B]/20 border-[#C89B7B] shadow-sm"
                      : "bg-neutral-900/60 border-neutral-800 hover:border-neutral-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                        isSelected ? "bg-[#C89B7B] text-black" : "border border-neutral-600 bg-neutral-900"
                      }`}
                    >
                      {isSelected && <Check size={14} strokeWidth={3} className="text-black" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{event.name}</h4>
                      <p className="text-xs font-bold text-neutral-300">{event.description}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#C89B7B] whitespace-nowrap ml-4 bg-neutral-900 px-2.5 py-1 rounded-full border border-[#C89B7B]/40">
                    {event.duration}
                  </span>
                </div>
              );
            })}
          </motion.div>

          {/* Action Button */}
          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#C89B7B] hover:bg-[#b58867] text-black font-bold text-sm px-8 py-3.5 rounded-full shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              Book Ear Piercing Package ({selectedEvents.length} Coverages)
            </button>
          </div>
        </motion.div>

        {/* Right Column: Balanced Photo Collage Grid with Flip Cards */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4"
        >

          {/* Card 1: Ear Piercing Ritual Session */}
          <div className="relative w-full h-72 md:h-80 [perspective:1000px] group">
            <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl shadow-md">
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden">
                <img
                  src="https://vedictribe.com/wp-content/uploads/2020/12/ear-piercing-550x289.jpg"
                  alt="Ear piercing ritual session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[#C89B7B] text-xs font-bold uppercase tracking-wider mb-1">2 Hours Session</span>
                  <h4 className="text-white font-serif text-lg font-bold">Ear Piercing Ritual Session</h4>
                </div>
              </div>
              <div className="absolute inset-0 w-full h-full bg-[#111111] text-white [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-[#C89B7B]/40">
                <span className="text-[#C89B7B] text-xs font-bold uppercase tracking-wider mb-2">Ritual Package</span>
                <h3 className="text-3xl font-serif font-bold mb-2 text-[#C89B7B]">₹15,000</h3>
                <p className="text-white font-bold text-xs mb-4">Gentle and sacred coverage of the traditional ear piercing ceremony moments.</p>
                <span className="bg-[#C89B7B] text-black text-xs font-bold px-4 py-2 rounded-full">2 Hours Session</span>
              </div>
            </div>
          </div>

          {/* Card 2: Traditional Attire & Family Portraits */}
          <div className="relative w-full h-72 md:h-80 [perspective:1000px] group">
            <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl shadow-md">
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/507030354/photo/baby-girl-crying-in-hindus-ear-piercing-ceremony.jpg?s=612x612&w=0&k=20&c=f4DKhn_eop9C82G1Yq67UFr20M_B_KFVReURFGgPLl4="
                  alt="Traditional attire and family portraits"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[#C89B7B] text-xs font-bold uppercase tracking-wider mb-1">3 Hours Session</span>
                  <h4 className="text-white font-serif text-lg font-bold">Traditional Attire & Family Portraits</h4>
                </div>
              </div>
              <div className="absolute inset-0 w-full h-full bg-[#111111] text-white [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-[#C89B7B]/40">
                <span className="text-[#C89B7B] text-xs font-bold uppercase tracking-wider mb-2">Portrait Package</span>
                <h3 className="text-3xl font-serif font-bold mb-2 text-[#C89B7B]">₹25,000</h3>
                <p className="text-white font-bold text-xs mb-4">Capturing beautiful memories in traditional attire with parents and close family.</p>
                <span className="bg-[#C89B7B] text-black text-xs font-bold px-4 py-2 rounded-full">3 Hours Session</span>
              </div>
            </div>
          </div>

          {/* Card 3: Sacred Blessings & Custom Prayers */}
          <div className="relative w-full h-56 [perspective:1000px] group">
            <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl shadow-md">
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden">
                <img
                  src="https://www.pilgrimagetour.in/blog/wp-content/uploads/2024/09/Mundan-Samskara.jpg"
                  alt="Sacred blessings and custom prayers"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[#C89B7B] text-xs font-bold uppercase tracking-wider mb-1">Half Day (4 Hours)</span>
                  <h4 className="text-white font-serif text-lg font-bold">Sacred Blessings & Custom Prayers</h4>
                </div>
              </div>
              <div className="absolute inset-0 w-full h-full bg-[#111111] text-white [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-[#C89B7B]/40">
                <span className="text-[#C89B7B] text-xs font-bold uppercase tracking-wider mb-2">Blessings Package</span>
                <h3 className="text-3xl font-serif font-bold mb-2 text-[#C89B7B]">₹35,000</h3>
                <p className="text-white font-bold text-xs mb-4">Cinematic documentation of family prayers, sacred offerings, and blessings.</p>
                <span className="bg-[#C89B7B] text-black text-xs font-bold px-4 py-2 rounded-full">Half Day (4 Hours)</span>
              </div>
            </div>
          </div>

          {/* Card 4: Grand Ear Piercing Celebration */}
          <div className="relative w-full h-56 [perspective:1000px] group">
            <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl shadow-md">
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden">
                <img
                  src="https://tse4.mm.bing.net/th/id/OIP.6gjnJi9jiGH6i7IP_rnSwwHaE7?r=0&w=1600&h=1064&rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="Grand ear piercing celebration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[#C89B7B] text-xs font-bold uppercase tracking-wider mb-1">Full Day Session</span>
                  <h4 className="text-white font-serif text-lg font-bold">Grand Ear Piercing Celebration</h4>
                </div>
              </div>
              <div className="absolute inset-0 w-full h-full bg-[#111111] text-white [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-[#C89B7B]/40">
                <span className="text-[#C89B7B] text-xs font-bold uppercase tracking-wider mb-2">Grand Package</span>
                <h3 className="text-3xl font-serif font-bold mb-2 text-[#C89B7B]">₹50,000</h3>
                <p className="text-white font-bold text-xs mb-4">Comprehensive cinematic coverage of the entire celebration from morning to evening.</p>
                <span className="bg-[#C89B7B] text-black text-xs font-bold px-4 py-2 rounded-full">Full Day Session</span>
              </div>
            </div>
          </div>

        </motion.div>

      </div>

      {/* Booking Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-[#111111] text-white border border-neutral-800 w-full max-w-lg rounded-3xl shadow-2xl p-8 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-neutral-400 hover:text-white bg-neutral-900 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <span className="text-xs uppercase tracking-widest text-[#C89B7B] font-bold">Secure Your Ceremony</span>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Complete Your Booking</h3>
            <p className="text-neutral-300 font-bold text-xs mb-6">
              You selected {selectedEvents.length} ear piercing service(s). Review your total price below and fill in your details.
            </p>

            <div className="bg-neutral-900 border border-[#C89B7B]/40 rounded-2xl p-4 mb-6 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-neutral-400 block">Total Package Price</span>
                <span className="text-xs font-bold text-white">
                  {selectedEvents.map((id) => eventsList.find((e) => e.id === id)?.name).join(", ")}
                </span>
              </div>
              <span className="text-2xl font-serif font-bold text-[#C89B7B]">
                ₹{totalPrice.toLocaleString("en-IN")}
              </span>
            </div>

            <form onSubmit={handleSubmitBooking} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-white mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 font-bold text-sm text-white focus:outline-none focus:border-[#C89B7B]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-white mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 font-bold text-sm text-white focus:outline-none focus:border-[#C89B7B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-white mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 font-bold text-sm text-white focus:outline-none focus:border-[#C89B7B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-white mb-1">Ceremony Date</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 font-bold text-sm text-white focus:outline-none focus:border-[#C89B7B]"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-[#C89B7B] hover:bg-[#b58867] text-black font-bold text-sm py-3.5 rounded-full shadow-lg transition-transform active:scale-95 cursor-pointer"
              >
                Confirm & Pay ₹{totalPrice.toLocaleString("en-IN")}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}