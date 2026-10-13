'use client';

import React, { useState } from 'react';
import { LuPhone } from 'react-icons/lu';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailID: '',
    contactNumber: '',
    universityOrInstituteName: '',
    designation: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Request Sent Successfully!');
  };

  return (
    <>
    <div className='bg-black'>
    <div   className="w-full  bg-transparent relative flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden font-sans">
      
      {/* Abstract Colorful Geometric Background Shapes matching Dribbble reference */}
      <div className="absolute inset-0 opacity-80 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-amber-500 blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-indigo-600 blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-rose-500 blur-3xl opacity-30" />
      </div>

      {/* Main Container Card */}
      <div className="relative z-10 w-full max-w-4xl  backdrop-blur-2xl   overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Dark Contact Information Panel */}
        <div className="lg:col-span-5  text-orange-500 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
              Contact Information
            </h2>
            <p className="text-amber-200 text-xs sm:text-sm font-light leading-relaxed">
             
4/297,Thai Nagar,Anuppanadi,Madurai-625009.,Anuppanadi,Madurai – 625009Tamil Nadu
            </p>

            <div className="space-y-5 pt-4">
              <div className="flex items-center gap-4 text-xs sm:text-sm text-orange-300">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-amber-400 shrink-0">📞</span>
                <span>
+91 9952840777</span>
              </div>
              <div className="flex items-center gap-4 text-xs sm:text-sm text-orange-300">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-amber-400 shrink-0">✉️</span>
                <span>singlekeyphotography@gmail.com</span>
              </div>
            
            </div>
          </div>

          {/* Card footer decoration dots */}
          <div className="flex items-center gap-2 pt-10">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
        </div>

        {/* Right Form Input Panel */}
        <div className="lg:col-span-7 p-8 sm:p-10 bg-transparent flex flex-col justify-between">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="space-y-1">
                <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  className="w-full border-b border-slate-300 focus:border-amber-500 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors bg-transparent"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="space-y-1">
                <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  className="w-full border-b border-slate-300 focus:border-amber-500 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors bg-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email ID */}
              <div className="space-y-1">
                <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Email ID
                </label>
                <input
                  type="email"
                  name="emailID"
                  value={formData.emailID}
                  onChange={handleChange}
                  placeholder="abcd12345@gmail.com"
                  className="w-full border-b border-slate-300 focus:border-amber-500 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors bg-transparent"
                  required
                />
              </div>

              {/* Contact Number */}
              <div className="space-y-1">
                <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="123456780"
                  className="w-full border-b border-slate-300 focus:border-amber-500 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors bg-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* University or Institute Name */}
              <div className="space-y-1">
                <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  function name
                </label>
                <input
                  type="text"
                  name="universityOrInstituteName"
                  value={formData.universityOrInstituteName}
                  onChange={handleChange}
                  placeholder="your package  name"
                  className="w-full border-b border-slate-300 focus:border-amber-500 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors bg-transparent"
                />
              </div>

              {/* Designation */}
              <div className="space-y-1">
                <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                 hours session
                </label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="2 hours_session"
                  className="w-full border-b border-slate-300 focus:border-amber-500 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors bg-transparent"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold px-8 py-3.5 rounded-full text-xs shadow-lg shadow-amber-500/20 transition-all active:scale-95"
              >
                Send Request
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
    </div>
    </>
  );
}