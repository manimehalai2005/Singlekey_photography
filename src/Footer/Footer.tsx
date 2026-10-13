'use client';

import React from "react";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsLinkedin, BsX } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";

export default function Footer() {
  const picture = "./public/images/genzzilogoblack.jpeg";

  return (
    <footer className="w-full bg-black text-white py-16 px-6 md:px-20 overflow-hidden">
      <div className="max-w-8xl bg-black mx-auto">
        <div className="grid grid-cols-1 bg-black md:grid-cols-2 lg:grid-cols-5 gap-6 pb-16">
          
          {/* Column 1: Brand Info & Status */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2 gap-8">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-white tracking-tight">
                  <img
                    src="https://cdn.photomall.in/photomall/d0bade31-0828-4442-a034-25a0a58c6bb90nhCITc9"
                    alt="Logo"
                    className="h-16 w-auto object-contain filter brightness-0 invert"
                  />
                </Link>
              </div>
            </div>
            
            <p className="text-sm font-sans italic text-white max-w-sm leading-relaxed">
              Best photography platform that captures genuine emotions, meaningful details, and timeless stories.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 text-zinc-400">
              {[ BsInstagram, BsLinkedin, BsFacebook ].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 rounded-full bg-black text-white border border-amber-600 flex items-center justify-center hover:bg-amber-700 hover:text-black transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Events */}
          <div className="space-y-4">
            <h4 className="text-sm font-sans italic uppercase tracking-wider text-amber-400 font-semibold">
              Events
            </h4>
            <ul className="space-y-3 text-sm">
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
                  <a href="#" className="hover:text-amber-400 transition font-sans italic tracking-wider text-white capitalize">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Packages */}
          <div className="space-y-4">
            <h4 className="text-sm font-sans italic uppercase tracking-wider text-amber-400 font-semibold">
              Packages
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Essential collection",
                "Signature collection",
                "Premium collection",
                "Luxury collection",
                "Elite collection",
                "Royal collection"
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="tracking-wider font-sans italic text-white hover:text-amber-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: About Us */}
          <div className="space-y-4">
            <h4 className="text-sm font-sans italic uppercase tracking-wider text-amber-400 font-semibold">
              About us
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Collections",
                "What capture our team",
                "Why choose us",
                "Mission & Vision"
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-xs font-sans italic uppercase tracking-wider text-white hover:text-amber-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-sans italic uppercase tracking-wider text-amber-400 font-semibold">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-xs font-sans italic tracking-wider text-white hover:text-amber-400 transition block">
                  📍 4/297, Thai Nagar, Anuppanadi, Madurai – 625009
                </a>
              </li>
              <li>
                <a href="#" className="text-xs font-sans italic tracking-wider text-white hover:text-amber-400 transition block">
                  📞 +91 9952840777
                </a>
              </li>
              <li>
                <a href="#" className="text-xs font-sans italic tracking-wider text-white hover:text-amber-400 transition block">
                  ✉️ singlekeyphotography@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-400 space-y-4 md:space-y-0 border-t border-zinc-800">
          <div className="flex items-center space-x-2">
            <Link href="#">
              <img
                src={picture}
                alt="Genzzi Logo"
                className="h-10 w-auto object-contain filter brightness-0 invert"
              />
            </Link>
            <span className="text-white font-sans italic">
              © 2026 SingleKey Photography Inc.
            </span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-xs font-sans italic uppercase tracking-wider text-white hover:text-amber-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="text-xs font-sans italic uppercase tracking-wider text-white hover:text-amber-400 transition">
              Terms
            </a>
            <a href="#" className="text-xs font-sans italic uppercase tracking-wider text-white hover:text-amber-400 transition">
              Code of Conduct
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}