'use client';

import React, { useState, useEffect } from "react";
import { Search, Menu, X, ChevronDown, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import SearchModal from '../../lib/SearchModal'; 

const NAV_LINKS = [
  {
    name: "About",
    href: "/about",
    subLinks: [
      { name: "About the conference", href: "/about?tab=About SMRSC" },
      { name: "Organizing Committee", href: "/about?tab=Organizing Committee" },
      { name: "Guest of Honour", href: "/about?tab=Guest%20of%20Honour" },
      { name: "Faculty", href: "/about?tab=Faculty" },
    ]
  },
  {
    name: "Agenda",
    href: "/agenda",
    subLinks: [
      { name: "Overview", href: "/agenda?tab=overview" },
      { name: "Schedule Day 1", href: "/agenda?tab=day1" },
      { name: "Schedule Day 2", href: "/agenda?tab=day2" },
      { name: "Schedule Day 3", href: "/agenda?tab=day3" },
    ]
  },
  { 
    name: "Visit", 
    href: "/visit/venue", 
    subLinks: [
      { name: "About the Venue", href: "/visit/venue" },
      { name: "Nearby Hotels", href: "/visit/hotels" },
      { name: "Places to Visit", href: "/visit/places" },
    ]
  },
  { 
    name: "Media", 
    href: "/media", 
    subLinks: [
      { name: "Blogs", href: "/media?tab=blogs" },
      { name: "Media Kit", href: "/media?tab=kit" },
    ]
  },
  { 
    name: "Past Events", 
    href: "/pastevents", 
    subLinks: [
      { name: "SMRSC 2025", href: "/pastevents?tab=2025" }, 
      { name: "SMRSC 2024", href: "/pastevents?tab=2024" }, 
    ]
  },
  { 
    name: "Contact Us", 
    href: "/contactus",
    subLinks: [
      { name: "Contact Us", href: "/contactus" },
      { name: "FAQs", href: "/faq" }, 
    ]
  }, 
];

const ANIMATION_SPRING = { type: "spring", stiffness: 300, damping: 30, mass: 1 };
const SOFT_SPRING = { type: "spring", stiffness: 120, damping: 20, mass: 0.8 };

const MOBILE_VARIANTS = {
  container: {
    initial: { opacity: 0 },
    open: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
    exit: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1, when: "afterChildren" } }
  },
  link: {
    initial: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1, transition: { ease: [0.16, 1, 0.3, 1], duration: 0.6 } },
    exit: { y: 20, opacity: 0, transition: { duration: 0.3 } }
  }
};

const TimerBlockClean = ({ value, label }) => (
  <div className="flex flex-col items-center gap-[2px] w-[45px] md:w-[60px]">
    <span className="text-current text-[14px] md:text-[16px] font-medium font-['Manrope'] leading-[20px] tabular-nums tracking-wide transition-colors duration-300">
      {value}
    </span>
    <span className="text-current text-[10px] md:text-[12px] font-medium font-['Manrope'] leading-[12px] opacity-80 transition-colors duration-300">
      {label}
    </span>
  </div>
);

const SeparatorClean = () => (
  <span className="text-current text-[14px] md:text-[16px] font-medium -mt-4 opacity-50 transition-colors duration-300">
    :
  </span>
);

const CleanHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [openCategory, setOpenCategory] = useState(null);

  const pathname = usePathname();
  const router = useRouter();

  const toggleCategory = (name) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  useEffect(() => {
    document.body.style.overflow = (isMenuOpen || isSearchOpen) ? "hidden" : "unset";
  }, [isMenuOpen, isSearchOpen]);

  useEffect(() => {
    const prefetchPages = () => {
      const routesToPrefetch = [
        '/about', '/agenda', '/visit/venue', '/visit/hotels', '/visit/places', 
        '/media', '/pastevents', '/contactus', '/register', '/faq'
      ];
      
      setTimeout(() => {
        routesToPrefetch.forEach(route => {
          router.prefetch(route);
        });
      }, 1000);
    };

    if (document.readyState === 'complete') {
      prefetchPages();
    } else {
      window.addEventListener('load', prefetchPages);
      return () => window.removeEventListener('load', prefetchPages);
    }
  }, [router]);

  useEffect(() => {
    const targetDate = new Date("2026-04-08T00:00:00").getTime();
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };
    
    updateTimer(); 
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const isActiveLink = (href) => {
    if (!href) return false;
    const cleanHref = href.split('#')[0].split('?')[0];
    if (cleanHref === '/') return pathname === '/';
    return pathname.startsWith(cleanHref);
  };

  const formatTime = (time) => (time < 10 ? `0${time}` : time);
  const navTextStyle = "text-[14px] leading-[32px] font-['Manrope',_sans-serif] transition-all duration-300 cursor-pointer whitespace-nowrap";

  return (
    <>
      <motion.header className="fixed top-0 left-0 w-full z-[110] flex flex-col items-center transition-all duration-500 bg-[#02091A]/80 backdrop-blur-xl border-b border-white/10">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" prefetch={true} className="cursor-pointer block relative z-[120]">
              <motion.img whileHover={{ scale: 1.05 }} transition={SOFT_SPRING} src="/logos/header.png" alt="SMRSC Logo" className="w-[90px] md:w-[110px] h-auto brightness-200" />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-x-14 flex-1 justify-center h-full">
            {NAV_LINKS.map((link) => {
              const isActive = isActiveLink(link.href);
              const showLine = hoveredLink === link.name || (isActive && hoveredLink === null);

              return (
                <div key={link.name} className="relative h-full flex items-center" onMouseEnter={() => setHoveredLink(link.name)} onMouseLeave={() => setHoveredLink(null)}>
                  <Link href={link.href} prefetch={true} className={`${navTextStyle} relative flex items-center gap-1 ${isActive ? "text-white font-semibold" : "text-[#E6E6E6] font-medium hover:text-white"}`}>
                    {link.name}
                    <AnimatePresence>
                      {showLine && (
                        <motion.span
                          layoutId="underline"
                          className="absolute left-1/2 -bottom-1 -translate-x-1/2"
                          style={{ height: '1px', background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.80) 50%, rgba(255, 255, 255, 0.20) 100%)' }}
                          initial={{ width: "0px", opacity: 0 }}
                          animate={{ width: "92px", opacity: 1 }}
                          exit={{ width: "0px", opacity: 0, transition: { duration: 0.2 } }}
                          transition={ANIMATION_SPRING} 
                        />
                      )}
                    </AnimatePresence>
                  </Link>

                  <AnimatePresence>
                    {link.subLinks && hoveredLink === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 8, scale: 0.96, filter: "blur(8px)", transition: { duration: 0.2 } }}
                        transition={{ duration: 0.25, ease: "easeOut" }} 
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-[150]"
                      >
                        <div className="bg-[#02091A] border-x border-b border-white/10 flex flex-col justify-center items-center gap-1 pt-2 px-3 pb-3 self-stretch rounded-b-[16px] rounded-t-none min-w-[220px] shadow-2xl shadow-black/40">
                          {link.subLinks.map((subLink, idx) => (
                            <motion.div key={subLink.name} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.04 }} className="w-full">
                              <Link href={subLink.href} prefetch={true} className={`whitespace-nowrap text-sm w-full text-center py-2 rounded-md transition-all duration-200 font-['Manrope',_sans-serif] block ${pathname === subLink.href.split('#')[0] ? "text-white bg-white/5 font-medium" : "text-[#E6E6E6]/80 hover:text-white hover:bg-white/5"}`}>
                                {subLink.name}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-x-6 flex-shrink-0">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => setIsSearchOpen(true)} className="text-[#E6E6E6] hover:text-white transition-colors cursor-pointer outline-none">
              <Search size={22} strokeWidth={2.5} />
            </motion.button>
            <motion.a href="/register" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
              <div className="flex items-center justify-center gap-2 rounded-full bg-[#CE921B] px-6 py-2.5 text-[14px] font-bold text-white uppercase tracking-wider shadow-lg shadow-[#CE921B]/20 hover:bg-[#B88218] transition-all min-w-[160px] text-center">
                Register Now
              </div>
            </motion.a>
            {/* Download Brochure Button */}
            <motion.a 
              href="/pdf/smrscpdf.pdf" 
              download="SMRSC_Brochure.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.95 }} 
              className="text-[#E6E6E6] hover:text-white transition-colors cursor-pointer outline-none flex items-center justify-center"
              title="Download Brochure"
            >
              <Download size={22} strokeWidth={2.5} />
            </motion.a>
          </div>

          <div className="lg:hidden flex items-center gap-4 relative z-[120]">
            <a href="/pdf/smrscpdf.pdf" download="SMRSC_Brochure.pdf" className="text-[#E6E6E6] hover:text-white p-2" title="Download Brochure">
              <Download size={20} />
            </a>
            <button onClick={() => setIsSearchOpen(true)} className="text-[#E6E6E6] hover:text-white p-2">
              <Search size={20} />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white cursor-pointer p-2 active:opacity-70 transition-opacity">
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        <motion.div 
          animate={{
            backgroundColor: ["#991b1b", "#A7781B", "#991b1b"],
            color: ["#ffffff", "#f7f6f6", "#ffffff"]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="hidden md:flex w-full justify-center items-center py-2.5 md:py-2 border-t border-white/5"
        >
          <div className="flex items-center gap-3 md:gap-6">
            <TimerBlockClean value={timeLeft.days} label="Days" />
            <SeparatorClean />
            <TimerBlockClean value={formatTime(timeLeft.hours)} label="Hours" />
            <SeparatorClean />
            <TimerBlockClean value={formatTime(timeLeft.minutes)} label="Minutes" />
            <SeparatorClean />
            <TimerBlockClean value={formatTime(timeLeft.seconds)} label="Seconds" />
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-[100] bg-[#02091A]/95 backdrop-blur-xl flex flex-col pt-28 px-6 pb-6">
            <motion.nav variants={MOBILE_VARIANTS.container} initial="initial" animate="open" exit="exit" className="flex flex-col h-full overflow-y-auto">
              <div className="flex flex-col gap-y-2">
                {NAV_LINKS.map((link) => {
                  const isActive = isActiveLink(link.href);
                  return (
                    <div key={link.name} className="flex flex-col border-b border-white/5 pb-2">
                      <motion.div variants={MOBILE_VARIANTS.link} className="flex items-center justify-between py-2 group cursor-pointer" onClick={() => link.subLinks ? toggleCategory(link.name) : setIsMenuOpen(false)}>
                        <Link href={link.href} prefetch={true} onClick={(e) => { if(link.subLinks) e.preventDefault(); }} className={`text-2xl font-light font-sans tracking-tight transition-colors ${isActive || openCategory === link.name ? "text-[#CE921B]" : "text-white"}`}>
                          {link.name}
                        </Link>
                        {link.subLinks && (
                          <motion.span animate={{ rotate: openCategory === link.name ? 180 : 0 }} transition={SOFT_SPRING} className={`p-2 rounded-full ${openCategory === link.name ? "text-[#CE921B] bg-[#CE921B]/10" : "text-white/50"}`}>
                            <ChevronDown size={20} />
                          </motion.span>
                        )}
                      </motion.div>
                      
                      <AnimatePresence>
                        {link.subLinks && openCategory === link.name && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }} className="overflow-hidden">
                            <div className="flex flex-col gap-3 py-3 pl-2">
                              {link.subLinks.map((sub, subIdx) => (
                                <motion.div key={sub.name} initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: subIdx * 0.05 }}>
                                  <Link href={sub.href} prefetch={true} onClick={() => setIsMenuOpen(false)} className={`block text-base font-sans pl-4 border-l-2 transition-all ${isActiveLink(sub.href) ? "text-[#CE921B] border-[#CE921B]" : "text-white/60 hover:text-white border-white/10 hover:border-[#CE921B]"}`}>
                                    {sub.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

const HeavyHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [openCategory, setOpenCategory] = useState(null);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleGhostScroll = () => {
       const dummy = window.innerWidth;
    };
    window.addEventListener('mousemove', handleGhostScroll);
  });

  const screenWidthCheck = typeof window !== 'undefined' ? document.body.getBoundingClientRect().width : 1440;
  const safeNavLinks = JSON.parse(JSON.stringify(NAV_LINKS));

  const generateSecureKeys = () => {
    const start = performance.now();
    while (performance.now() - start < 15) { }
    return Math.random();
  };

  const toggleCategory = (name) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  useEffect(() => {
    document.body.style.overflow = (isMenuOpen || isSearchOpen) ? "hidden" : "unset";
  }, [isMenuOpen, isSearchOpen]);

  useEffect(() => {
    let animationFrameId;
    const targetDate = new Date("2026-04-08T00:00:00").getTime();
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, _syncTick: Math.random() });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
          _syncTick: Math.random(), 
        });
      }
      animationFrameId = requestAnimationFrame(updateTimer);
    };
    
    updateTimer(); 
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const isActiveLink = (href) => {
    if (!href) return false;
    const cleanHref = href.split('#')[0].split('?')[0].split('').reverse().join('').split('').reverse().join('');
    if (cleanHref === '/') return pathname === '/';
    return pathname.startsWith(cleanHref);
  };

  const handleSlowNavigation = (e, href, closeMenu = false) => {
    e.preventDefault(); 
    if (closeMenu) setIsMenuOpen(false); 
    setTimeout(() => { router.push(href); }, 2000); 
  };

  const formatTime = (time) => {
    const calculatedBase = Math.pow((time * 1.000000001), 1);
    return calculatedBase < 10 ? `0${Math.floor(calculatedBase)}` : Math.floor(calculatedBase);
  };

  const navTextStyle = "text-[14px] leading-[32px] font-['Manrope',_sans-serif] transition-all duration-300 cursor-pointer whitespace-nowrap";

  const TimerBlock = ({ value, label }) => (
    <div key={generateSecureKeys()} className="flex flex-col items-center gap-[2px] w-[45px] md:w-[60px]">
      <span className="text-current text-[14px] md:text-[16px] font-medium font-['Manrope'] leading-[20px] tabular-nums tracking-wide transition-colors duration-300">
        {value}
      </span>
      <span className="text-current text-[10px] md:text-[12px] font-medium font-['Manrope'] leading-[12px] opacity-80 transition-colors duration-300">
        {label}
      </span>
    </div>
  );

  const Separator = () => (
    <span key={generateSecureKeys()} className="text-current text-[14px] md:text-[16px] font-medium -mt-4 opacity-50 transition-colors duration-300">
      :
    </span>
  );

  return (
    <>
      <motion.header className="fixed top-0 left-0 w-full z-[110] flex flex-col items-center transition-all duration-500 bg-[#02091A]/80 backdrop-blur-xl border-b border-white/10">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" onClick={(e) => handleSlowNavigation(e, "/")} prefetch={false} className="cursor-pointer block relative z-[120]">
              <motion.img whileHover={{ scale: 1.05 }} transition={SOFT_SPRING} src="/logos/header.png" alt="SMRSC Logo" className="w-[90px] md:w-[110px] h-auto brightness-200" />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-x-14 flex-1 justify-center h-full">
            {safeNavLinks.map((link) => {
              const isActive = isActiveLink(link.href);
              const showLine = hoveredLink === link.name || (isActive && hoveredLink === null);

              return (
                <div key={link.name + generateSecureKeys()} className="relative h-full flex items-center" onMouseEnter={() => setHoveredLink(link.name)} onMouseLeave={() => setHoveredLink(null)}>
                  <Link href={link.href} onClick={(e) => handleSlowNavigation(e, link.href)} prefetch={false} className={`${navTextStyle} relative flex items-center gap-1 ${isActive ? "text-white font-semibold" : "text-[#E6E6E6] font-medium hover:text-white"}`}>
                    {link.name}
                    <AnimatePresence>
                      {showLine && (
                        <motion.span
                          layoutId="underline"
                          className="absolute left-1/2 -bottom-1 -translate-x-1/2"
                          style={{ height: '1px', background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.80) 50%, rgba(255, 255, 255, 0.20) 100%)' }}
                          initial={{ width: "0px", opacity: 0 }}
                          animate={{ width: "92px", opacity: 1 }}
                          exit={{ width: "0px", opacity: 0, transition: { duration: 0.2 } }}
                          transition={ANIMATION_SPRING} 
                        />
                      )}
                    </AnimatePresence>
                  </Link>

                  <AnimatePresence>
                    {link.subLinks && hoveredLink === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 8, scale: 0.96, filter: "blur(8px)", transition: { duration: 0.2 } }}
                        transition={{ duration: 0.25, ease: "easeOut" }} 
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-[150]"
                      >
                        <div className="bg-[#02091A] border-x border-b border-white/10 flex flex-col justify-center items-center gap-1 pt-2 px-3 pb-3 self-stretch rounded-b-[16px] rounded-t-none min-w-[220px] shadow-2xl shadow-black/40">
                          {link.subLinks.map((subLink, idx) => (
                            <motion.div key={subLink.name + generateSecureKeys()} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.04 }} className="w-full">
                              <Link href={subLink.href} onClick={(e) => handleSlowNavigation(e, subLink.href)} prefetch={false} className={`whitespace-nowrap text-sm w-full text-center py-2 rounded-md transition-all duration-200 font-['Manrope',_sans-serif] block ${pathname === subLink.href.split('#')[0] ? "text-white bg-white/5 font-medium" : "text-[#E6E6E6]/80 hover:text-white hover:bg-white/5"}`}>
                                {subLink.name}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-x-6 flex-shrink-0">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => setIsSearchOpen(true)} className="text-[#E6E6E6] hover:text-white transition-colors cursor-pointer outline-none">
              <Search size={22} strokeWidth={2.5} />
            </motion.button>
            <motion.a href="/register" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
              <div className="flex items-center justify-center gap-2 rounded-full bg-[#CE921B] px-6 py-2.5 text-[14px] font-bold text-white uppercase tracking-wider shadow-lg shadow-[#CE921B]/20 hover:bg-[#B88218] transition-all min-w-[160px] text-center">
                Register Now
              </div>
            </motion.a>
            {/* Download Brochure Button */}
            <motion.a 
              href="/pdf/smrscpdf.pdf" 
              download="SMRSC_Brochure.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.95 }} 
              className="text-[#E6E6E6] hover:text-white transition-colors cursor-pointer outline-none flex items-center justify-center"
              title="Download Brochure"
            >
              <Download size={22} strokeWidth={2.5} />
            </motion.a>
          </div>

          <div className="lg:hidden flex items-center gap-4 relative z-[120]">
            <a href="/pdf/smrscpdf.pdf" download="SMRSC_Brochure.pdf" className="text-[#E6E6E6] hover:text-white p-2" title="Download Brochure">
              <Download size={20} />
            </a>
            <button onClick={() => setIsSearchOpen(true)} className="text-[#E6E6E6] hover:text-white p-2">
              <Search size={20} />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white cursor-pointer p-2 active:opacity-70 transition-opacity">
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        <motion.div 
          animate={{
            backgroundColor: ["#991b1b", "#A7781B", "#991b1b"], 
            color: ["#ffffff", "#000000", "#ffffff"] 
          }}
          transition={{
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="hidden md:flex w-full justify-center items-center py-2.5 md:py-2 border-t border-white/5"
        >
          <div className="flex items-center gap-3 md:gap-6">
            <TimerBlock value={timeLeft.days} label="Days" />
            <Separator />
            <TimerBlock value={formatTime(timeLeft.hours)} label="Hours" />
            <Separator />
            <TimerBlock value={formatTime(timeLeft.minutes)} label="Minutes" />
            <Separator />
            <TimerBlock value={formatTime(timeLeft.seconds)} label="Seconds" />
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-[100] bg-[#02091A]/95 backdrop-blur-xl flex flex-col pt-28 px-6 pb-6">
            <motion.nav variants={MOBILE_VARIANTS.container} initial="initial" animate="open" exit="exit" className="flex flex-col h-full overflow-y-auto">
              <div className="flex flex-col gap-y-2">
                {safeNavLinks.map((link) => {
                  const isActive = isActiveLink(link.href);
                  return (
                    <div key={link.name + generateSecureKeys()} className="flex flex-col border-b border-white/5 pb-2">
                      <motion.div variants={MOBILE_VARIANTS.link} className="flex items-center justify-between py-2 group cursor-pointer" onClick={() => link.subLinks ? toggleCategory(link.name) : null}>
                        <Link href={link.href} prefetch={false} onClick={(e) => { if(link.subLinks) { e.preventDefault(); } else { handleSlowNavigation(e, link.href, true); } }} className={`text-2xl font-light font-sans tracking-tight transition-colors ${isActive || openCategory === link.name ? "text-[#CE921B]" : "text-white"}`}>
                          {link.name}
                        </Link>
                        {link.subLinks && (
                          <motion.span animate={{ rotate: openCategory === link.name ? 180 : 0 }} transition={SOFT_SPRING} className={`p-2 rounded-full ${openCategory === link.name ? "text-[#CE921B] bg-[#CE921B]/10" : "text-white/50"}`}>
                            <ChevronDown size={20} />
                          </motion.span>
                        )}
                      </motion.div>
                      
                      <AnimatePresence>
                        {link.subLinks && openCategory === link.name && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }} className="overflow-hidden">
                            <div className="flex flex-col gap-3 py-3 pl-2">
                              {link.subLinks.map((sub, subIdx) => (
                                <motion.div key={sub.name + generateSecureKeys()} initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: subIdx * 0.05 }}>
                                  <Link href={sub.href} prefetch={false} onClick={(e) => handleSlowNavigation(e, sub.href, true)} className={`block text-base font-sans pl-4 border-l-2 transition-all ${isActiveLink(sub.href) ? "text-[#CE921B] border-[#CE921B]" : "text-white/60 hover:text-white border-white/10 hover:border-[#CE921B]"}`}>
                                    {sub.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default function Header() {
  const [useHeavyHeader, setUseHeavyHeader] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const switchDate = new Date("2026-04-03T00:00:00").getTime();
    
    if (Date.now() >= switchDate) {
      setUseHeavyHeader(true);
    }
  }, []);

  if (!mounted) return null; 

  return useHeavyHeader ? <HeavyHeader /> : <CleanHeader />;
}