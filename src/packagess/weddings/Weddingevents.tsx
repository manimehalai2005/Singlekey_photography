"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

interface WeddingEvent {
  id: string;
  name: string;
  duration: string;
  price: number;
  description: string;
}

const eventsList: WeddingEvent[] = [
  {
    id: "engagement",
    name: "Engagement",
    duration: "4 Hours Coverage",
    price: 30000,
    description: "Capture the intimate moments of your ring exchange and celebration.",
  },
  {
    id: "haldi-mehendi",
    name: "Haldi and Mehendi",
    duration: "6 Hours Coverage",
    price: 35000,
    description: "Vibrant colors, candid laughs, and traditional pre-wedding rituals.",
  },
  {
    id: "wedding",
    name: "Wedding ceremony",
    duration: "Full Day (10 Hours)",
    price: 75000,
    description: "Complete coverage of the main rituals, pheras, and emotional milestones.",
  },
  {
    id: "reception",
    name: "Reception",
    duration: "5 Hours Coverage",
    price: 45000,
    description: "Grand entrance, first dance, speeches, and evening celebrations.",
  },
  {
    id: "pre-wedding",
    name: "Pre-wedding shoot",
    duration: "1 Full Day / Location",
    price: 25000,
    description: "Cinematic romantic portrait sessions at scenic outdoor locations.",
  },
];

export default function WeddingEvents() {
  const [selectedEvents, setSelectedEvents] = useState<string[]>([
    "engagement",
    "wedding",
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
    alert(`Booking submitted successfully for ₹${totalPrice.toLocaleString("en-IN")}`);
    setIsModalOpen(false);
  };

  return (
    <section className="relative w-full min-h-screen bg-transparent text-white flex flex-col items-center justify-center py-16 px-6 lg:px-16 overflow-hidden">
      {/* Container matching template split layout */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading, Description & Interactive Options */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <span className="text-xs uppercase tracking-widest text-[#C89B7B] font-bold mb-2">
            Customizable Packages
          </span>
         

          {/* Interactive Checklist / Selectors */}
          <div className="flex flex-col gap-3 mb-8">
            {eventsList.map((event, index) => {
              const isSelected = selectedEvents.includes(event.id);
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
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
                </motion.div>
              );
            })}
          </div>

          {/* Action Button */}
          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#C89B7B] hover:bg-[#b58867] text-black font-bold text-sm px-8 py-3.5 rounded-full shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              Book Selected Package ({selectedEvents.length} Events)
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

          {/* Card 1: Wedding Ceremony */}
          <div className="relative w-full h-72 md:h-80 [perspective:1000px] group">
            <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl shadow-md">
              
              {/* Front Side */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden">
                <img
                  src="https://thetalesoftradition.com/wp-content/uploads/2024/01/vivekkrishnanphotography-618-1024x683.jpg"
                  alt="Bride and groom couple portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[#C89B7B] text-xs font-bold uppercase tracking-wider mb-1">Full Day (10 Hours)</span>
                  <h4 className="text-amber-300 font-serif text-lg font-bold">Wedding Ceremony</h4>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 w-full h-full bg-[#111111] text-amber-300 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-[#C89B7B]/40">
                <span className="text-[#C89B7B] text-xs font-bold uppercase tracking-wider mb-2">Wedding Package</span>
                <h3 className="text-3xl font-serif font-bold mb-2 text-[#C89B7B]">₹75,000</h3>
                <p className="text-amber-300 font-bold text-xs mb-4">Complete coverage of main rituals, traditional ceremonies, and emotional highlights.</p>
                <span className="bg-[#C89B7B] text-black text-xs font-bold px-4 py-2 rounded-full">10 Hours Coverage</span>
              </div>

            </div>
          </div>

          {/* Card 2: Haldi and Mehendi */}
          <div className="relative w-full h-72 md:h-80 [perspective:1000px] group">
            <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl shadow-md">
              
              {/* Front Side */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden">
                <img
                  src="https://weddingsutra.com/images/wedding-images/entertaining/tamil-traditional-wedding/tamil-wedding-ritual-intro.webp"
                  alt="Traditional wedding ceremony details"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[#C89B7B] text-xs font-bold uppercase tracking-wider mb-1">6 Hours Coverage</span>
                  <h4 className="text-amber-300 font-serif text-lg font-bold">Haldi and Mehendi</h4>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 w-full h-full bg-[#111111] text-amber-300 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-[#C89B7B]/40">
                <span className="text-[#C89B7B] text-xs font-bold uppercase tracking-wider mb-2">Haldi & Mehendi Package</span>
                <h3 className="text-3xl font-serif font-bold mb-2 text-[#C89B7B]">₹35,000</h3>
                <p className="text-amber-300 font-bold text-xs mb-4">Vibrant candid moments, family laughter, and intricate ritual details.</p>
                <span className="bg-[#C89B7B] text-black text-xs font-bold px-4 py-2 rounded-full">6 Hours Coverage</span>
              </div>

            </div>
          </div>

          {/* Card 3: Reception */}
          <div className="relative w-full h-56 [perspective:1000px] group">
            <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl shadow-md">
              
              {/* Front Side */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Wedding-Moment-Tamil-culture-TamilNadu-India.jpg/1280px-Wedding-Moment-Tamil-culture-TamilNadu-India.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
                  alt="Reception couple celebration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[#C89B7B] text-xs font-bold uppercase tracking-wider mb-1">5 Hours Coverage</span>
                  <h4 className="text-amber-300 font-serif text-lg font-bold">Reception</h4>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 w-full h-full bg-[#111111] text-amber-300 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-[#C89B7B]/40">
                <span className="text-[#C89B7B] text-xs font-bold uppercase tracking-wider mb-2">Reception Package</span>
                <h3 className="text-3xl font-serif font-bold mb-2 text-[#C89B7B]">₹45,000</h3>
                <p className="text-amber-300 font-bold text-xs mb-4">Grand stage entries, first dances, speeches, and evening celebrations.</p>
                <span className="bg-[#C89B7B] text-black text-xs font-bold px-4 py-2 rounded-full">5 Hours Coverage</span>
              </div>

            </div>
          </div>

          {/* Card 4: Engagement */}
          <div className="relative w-full h-56 [perspective:1000px] group">
            <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl shadow-md">
              
              {/* Front Side */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeswgUaObpB2qP6LTj3Rq5G26izKz4h70LttPzY6WZg0UzkrGc9neKHUi2&s=10"
                  alt="Ring exchange engagement moment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[#C89B7B] text-xs font-bold uppercase tracking-wider mb-1">4 Hours Coverage</span>
                  <h4 className="text-amber-300 font-serif text-lg font-bold">Engagement</h4>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 w-full h-full bg-[#111111] text-amber-300 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-[#C89B7B]/40">
                <span className="text-[#C89B7B] text-xs font-bold uppercase tracking-wider mb-2">Engagement Package</span>
                <h3 className="text-3xl font-serif font-bold mb-2 text-[#C89B7B]">₹30,000</h3>
                <p className="text-amber-300 font-bold text-xs mb-4">Ring exchange moments, close-ups, and intimate family portraits.</p>
                <span className="bg-[#C89B7B] text-black text-xs font-bold px-4 py-2 rounded-full">4 Hours Coverage</span>
              </div>

            </div>
          </div>

        </motion.div>

      </div>

      {/* Booking Popup Modal (Dark Theme) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-[#111111] text-white border border-neutral-800 w-full max-w-lg rounded-3xl shadow-2xl p-8 relative animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-neutral-400 hover:text-white bg-neutral-900 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <span className="text-xs uppercase tracking-widest text-[#C89B7B] font-bold">Secure Your Date</span>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Complete Your Booking</h3>
            <p className="text-amber-300 font-bold text-xs mb-6">
              You selected {selectedEvents.length} event(s). Review your total price below and fill in your details.
            </p>

            {/* Total Price Box */}
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

            {/* Booking Form */}
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
                <label className="block text-xs font-bold text-white mb-1">Wedding / Main Event Date</label>
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