'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import StarfieldCursor from '../StarFieldCursor';

const packageOptions = [
  { label: 'Weddings', href: '/packages/weddings' },
  { label: 'Engagement', href: '/packages/engagement' },
  { label: 'Birthday events', href: '/packages/birthday' },
  { label: 'Baby showers', href: '/packages/baby' },
  { label: 'Naming ceremony', href: '/packages/naming' },
  { label: 'Earpiercing ceremony', href: '/packages/earpiercing' },
  { label: 'Housewarming ceremony', href: '/packages/housewarming' },
  { label: 'Ritual ceremony', href: '/packages/ritual' },
  { label: 'Puberty ceremony', href: '/packages/puberty' },
];

const eventOptions = [
  { label: 'Weddings', href: '/event/wedding' },
  { label: 'Engagement', href: '/event/engagement' },
  { label: 'Birthday events', href: '/event/birthday' },
  { label: 'Baby showers', href: '/event/baby' },
  { label: 'Naming ceremony', href: '/event/naming' },
  { label: 'Earpiercing ceremony', href: '/event/earpiercing' },
  { label: 'Housewarming ceremony', href: '/event/housewarming' },
  { label: 'Ritual ceremony', href: '/event/ritual' },
  { label: 'Puberty ceremony', href: '/event/puberty' },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events', hasDropdown: true, options: eventOptions },
  { name: 'Packages', href: '/packages', hasDropdown: true, options: packageOptions },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

 
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
    <StarfieldCursor/>
    <nav ref={navRef} className="bg-black/90 backdrop-blur-md h-20 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight">
              <img
                src="https://cdn.photomall.in/photomall/d0bade31-0828-4442-a034-25a0a58c6bb90nhCITc9"
                alt="Logo"
                className="h-20 w-40 object-contain filter brightness-0 invert"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isDropdownActive = link.hasDropdown && link.options?.some(opt => opt.href === pathname);
              const isActive = link.href === '/' 
                ? pathname === '/' 
                : link.hasDropdown 
                  ? pathname === link.href || isDropdownActive
                  : pathname === link.href || pathname.startsWith(link.href + '/');

              if (link.hasDropdown && link.options) {
                const isThisDropdownOpen = activeDropdown === link.name;
                return (
                  <div 
                    key={link.name} 
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      onClick={() => setActiveDropdown(isThisDropdownOpen ? null : link.name)}
                      className={`relative py-2 font-medium text-sm transition-colors flex items-center gap-1.5 focus:outline-none ${
                        isActive ? 'text-amber-400 font-semibold' : 'text-white hover:text-amber-400'
                      }`}
                    >
                      <span>{link.name}</span>
                      
                      {/* SVG Animated Chevron Icon */}
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isThisDropdownOpen ? 'rotate-180 text-amber-400' : 'rotate-0 text-white/70'
                        }`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      
                      {/* Underline Indicator */}
                      <span className={`absolute bottom-0 left-0 h-[2px] bg-amber-400 rounded-full transition-all duration-300 ease-out ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                    </button>

                    {/* Dropdown Menu Box */}
                    {isThisDropdownOpen && (
                      <div className="absolute left-0 mt-1 w-64 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-2 space-y-1 z-50 animate-fadeIn">
                        <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider px-3 py-2 border-b border-white/10">
                          Explore {link.name}
                        </div>
                        <div className="max-h-80 overflow-y-auto custom-scrollbar">
                          {link.options.map((opt) => {
                            const isOptActive = pathname === opt.href;
                            return (
                              <Link
                                key={opt.label}
                                href={opt.href}
                                onClick={() => setActiveDropdown(null)}
                                className={`block px-3 py-2 rounded-xl text-xs transition-colors ${
                                  isOptActive 
                                    ? 'bg-amber-400/20 text-amber-400 font-semibold' 
                                    : 'text-white hover:text-amber-400 hover:bg-white/10'
                                }`}
                              >
                                {opt.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-2 font-medium text-sm transition-colors ${
                    isActive ? 'text-amber-400 font-semibold' : 'text-white hover:text-amber-400'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-amber-400 rounded-full transition-all duration-300 ease-out ${
                    isActive ? 'w-full' : 'w-0 hover:w-full'
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-400 focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-2xl border-t border-white/10 px-4 pt-3 pb-5 space-y-3 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => {
            const isDropdownActive = link.hasDropdown && link.options?.some(opt => opt.href === pathname);
            const isActive = link.href === '/' 
              ? pathname === '/' 
              : link.hasDropdown 
                ? pathname === link.href || isDropdownActive
                : pathname === link.href || pathname.startsWith(link.href + '/');

            if (link.hasDropdown && link.options) {
              return (
                <div key={link.name} className="px-3 py-2 space-y-1 border-t border-white/10 pt-3">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider px-2 pb-1 flex justify-between items-center">
                    <span>{link.name}</span>
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {link.options.map((opt) => {
                    const isOptActive = pathname === opt.href;
                    return (
                      <Link
                        key={opt.label}
                        href={opt.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          isOptActive 
                            ? 'bg-amber-400/20 text-amber-400 font-semibold border-l-2 border-amber-400 pl-4' 
                            : 'text-white hover:text-amber-400 hover:bg-white/10'
                        }`}
                      >
                        {opt.label}
                      </Link>
                    );
                  })}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive ? 'text-amber-400 bg-white/10 font-semibold border-l-2 border-amber-400 pl-4' : 'text-white hover:text-amber-400 hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
    </>
  );
}