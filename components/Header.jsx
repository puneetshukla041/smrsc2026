'use client'
import React, { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About SMRSC", href: "#about" },
  { name: "Explore", href: "#explore" },
  { name: "Past Events", href: "#past-events" },
  { name: "Visit", href: "#visit" },
  { name: "Media", href: "#media" },
  { name: "Contact Us", href: "#contact" },
];

/**
 * Professional Header Component
 * Fixed: Removed TypeScript 'as' assertion for .jsx compatibility.
 */
export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll logic for visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (isMenuOpen) return;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  // Navigation style updated per requirements
  const navTextStyle = "text-[#E6E6E6] font-medium text-[14px] leading-[32px] font-['Manrope',_sans-serif] hover:text-white transition-colors cursor-pointer";

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
              lastScrollY > 50 || isMenuOpen 
                ? "bg-[#02091A]/95 backdrop-blur-md border-b border-white/10 py-3" 
                : "bg-transparent py-5"
            }`}
          >
            <div className="max-w-[1536px] mx-auto px-8 flex items-center justify-between">
              
              {/* Logo Section */}
              <div className="flex-shrink-0">
                <a href="/" className="cursor-pointer block">
                  <img
                    src="/logos/header.png" 
                    alt="SMRSC Logo"
                    className="w-[110px] h-auto brightness-200"
                    onError={(e) => {
                      // FIXED: Removed 'as HTMLImageElement' for JS compatibility
                      const target = e.target;
                      target.src = "https://via.placeholder.com/110x30/02091A/FFFFFF?text=SMRSC+2026";
                    }}
                  />
                </a>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-x-8">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className={navTextStyle}>
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Action Buttons */}
              <div className="flex items-center gap-x-6">
                <button className="hidden sm:block text-[#E6E6E6] hover:text-white transition-colors cursor-pointer outline-none">
                  <Search size={18} strokeWidth={2.5} />
                </button>

                <a
                  href="#register"
                  className="
                    hidden md:inline-flex items-center justify-center
                    px-6 py-2 rounded-full
                    border border-white/30
                    bg-transparent text-white
                    text-[13px] font-semibold tracking-wider uppercase
                    transition-all duration-300 ease-in-out
                    hover:bg-[#CE921B] hover:border-[#CE921B]
                    active:bg-[#b37e17]
                    cursor-pointer
                  "
                >
                  Register Now
                </a>

                {/* Mobile Menu Icon */}
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden text-white cursor-pointer p-1"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Overlay Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-[#02091A] flex flex-col justify-center px-10"
          >
            <nav className="flex flex-col gap-y-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-light text-white hover:text-[#CE921B] font-sans tracking-tight"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <div className="pt-10 mt-4 border-t border-white/10">
                <a
                  href="#register"
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    flex items-center justify-center w-full py-4 rounded-full
                    border border-white/20 bg-transparent text-white
                    text-sm font-bold uppercase tracking-widest
                    hover:bg-[#CE921B] hover:border-[#CE921B]
                    transition-all duration-300
                  "
                >
                  Register Now
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}