import React, { useState, useEffect } from 'react';
import { Heart, Music, Users, Gem, Cake, Sparkles, Scissors, PartyPopper, ArrowRight } from 'lucide-react';

const services = [
  { name: 'Weddings', icon: Heart, span: 'col-span-2 md:col-span-2 lg:col-span-2' },
  { name: 'Concerts', icon: Music, span: 'col-span-1 md:col-span-1 lg:col-span-1' },
  { name: 'Batch Parties', icon: Users, span: 'col-span-1 md:col-span-1 lg:col-span-1' },
  { name: 'Engagements', icon: Gem, span: 'col-span-1 md:col-span-2 lg:col-span-1' },
  { name: 'Birthdays', icon: Cake, span: 'col-span-1 md:col-span-1 lg:col-span-2' },
  { name: 'Big Girl Functions', icon: Sparkles, span: 'col-span-2 md:col-span-1 lg:col-span-1' },
  { name: 'Opening Ceremonies', icon: Scissors, span: 'col-span-1 md:col-span-1 lg:col-span-2' },
  { name: 'Get-Togethers', icon: PartyPopper, span: 'col-span-1 md:col-span-2 lg:col-span-2' },
];

function App() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Fallback timeout: ensures the loading screen doesn't get stuck indefinitely 
  // on mobile browsers with strict autoplay/loading policies.
  useEffect(() => {
    const timer = setTimeout(() => setIsVideoLoaded(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Listen to scroll to change navbar theme
  useEffect(() => {
    const handleScroll = () => {
      // Toggle theme when scrolling past 90% of the viewport height (the hero section)
      setIsScrolled(window.scrollY > window.innerHeight * 0.9);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to render cards consistently across mobile and desktop
  const renderCard = (service, isMobile = false, index = 0) => (
    <div 
      key={`${service.name}-${index}`} 
      className={`group/card relative flex flex-col items-center justify-center flex-shrink-0 bg-white hover:bg-black hover:text-white transition-all duration-500 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 ${
        isMobile ? 'w-[180px] sm:w-[200px] h-[130px] sm:h-[140px] rounded-2xl mr-3 sm:mr-4' : 'w-[280px] lg:w-[350px] h-[200px] lg:h-[260px] rounded-3xl lg:rounded-[2rem] mr-6 lg:mr-8'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-[inherit]"></div>
      <service.icon className={`stroke-[1.5] text-black group-hover/card:text-white group-hover/card:scale-110 lg:group-hover/card:-translate-y-2 transition-all duration-500 relative z-10 ${
        isMobile ? 'w-7 h-7 sm:w-8 sm:h-8 mb-2 sm:mb-3 group-hover/card:-translate-y-1' : 'w-10 h-10 lg:w-12 lg:h-12 mb-4 lg:mb-6 group-hover/card:-translate-y-2'
      }`} />
      <h3 className={`font-bold uppercase tracking-widest text-center relative z-10 transition-all duration-500 ${
        isMobile ? 'text-[9px] sm:text-[10px] group-hover/card:-translate-y-1' : 'text-xs lg:text-sm group-hover/card:-translate-y-2'
      }`}>
        {service.name}
      </h3>
      <div className={`absolute opacity-0 transform translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500 text-gray-400 ${
        isMobile ? 'bottom-3 sm:bottom-4' : 'bottom-6 lg:bottom-8'
      }`}>
        <ArrowRight className={isMobile ? 'w-3 h-3 sm:w-4 sm:h-4' : 'w-4 h-4 lg:w-5 lg:h-5'} />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden flex flex-col">
      
      {/* Smart Loading Screen */}
      <div 
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ease-in-out ${
          isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="relative flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4 animate-pulse">SHP</h1>
          <div className="w-32 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-white animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 md:py-6 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-black' 
            : 'bg-gradient-to-b from-black/80 to-transparent text-white'
        }`}
      >
        <div className="flex flex-col">
          <h1 className="text-2xl font-black tracking-tighter leading-none">SHP</h1>
          <span className={`text-[0.6rem] tracking-[0.3em] font-bold uppercase mt-1 transition-colors duration-500 ${
            isScrolled ? 'text-gray-500' : 'text-gray-400'
          }`}>
            Entertainment
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-[0.2em]">
          <a href="#home" className={`transition-colors ${isScrolled ? 'hover:text-gray-500' : 'hover:text-gray-300'}`}>HOME</a>
          <a href="#experiences" className={`transition-colors ${isScrolled ? 'hover:text-gray-500' : 'hover:text-gray-300'}`}>EXPERIENCES</a>
          <a href="#vault" className={`transition-colors ${isScrolled ? 'hover:text-gray-500' : 'hover:text-gray-300'}`}>THE VAULT</a>
        </nav>
        <button className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-500 hover:scale-105 ${
          isScrolled 
            ? 'bg-black text-white hover:bg-gray-800 shadow-md' 
            : 'bg-white text-black hover:bg-gray-200 shadow-[0_0_15px_rgba(255,255,255,0.3)]'
        }`}>
          BOOK NOW
        </button>
      </header>

      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section id="home" className="relative w-full h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-20">
          
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              onCanPlayThrough={() => setIsVideoLoaded(true)}
              onLoadedData={() => setIsVideoLoaded(true)}
              className="w-full h-full object-cover opacity-50 scale-105"
            >
              <source src="/video3.mp4" type="video/mp4" />
            </video>
            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          </div>

          {/* Core Content */}
          <div className="relative z-10 flex flex-col items-center w-full h-full justify-between pb-0">
            
            <div className="flex flex-col items-center mt-[2svh] md:mt-[4svh] w-full px-4">
              <span className="text-[1.8vw] md:text-[1vw] font-black tracking-[0.5em] text-gray-300 uppercase mb-4 opacity-80 flex items-center gap-4">
                <div className="w-12 h-px bg-gray-500"></div>
                We Make Every Moment
                <div className="w-12 h-px bg-gray-500"></div>
              </span>
              <h2 className="text-[15vw] md:text-[12vw] font-black uppercase tracking-tighter leading-none text-white drop-shadow-2xl">
                Unforgettable
              </h2>
            </div>
            
            {/* DJ Image */}
            <div className="relative w-full flex-grow flex justify-center items-end mt-[-5svh]">
              <img 
                src="/dj-hero.png" 
                alt="DJ Sheron performing live" 
                fetchPriority="high"
                className="relative z-20 w-[180%] max-w-none md:max-w-none md:w-auto md:h-[70svh] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              />
            </div>
            
          </div>
        </section>

        {/* EXPERIENCES SECTION */}
        <section id="experiences" className="w-full min-h-[100svh] bg-white text-black pt-28 pb-12 md:pt-32 md:pb-20 flex flex-col items-center overflow-hidden relative">
          
          {/* Section Header */}
          <div className="flex-none text-center mb-8 w-full flex flex-col items-center px-4 md:px-8">
            <span className="flex items-center gap-2 md:gap-3 text-[9px] md:text-xs font-black tracking-[0.4em] md:tracking-[0.5em] text-gray-400 uppercase mb-2 md:mb-4">
              <div className="w-6 md:w-10 h-px bg-gray-300"></div>
              Our Expertise
              <div className="w-6 md:w-10 h-px bg-gray-300"></div>
            </span>
            <h2 className="text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] drop-shadow-sm">
              Curated <br className="md:hidden" /> Experiences
            </h2>
          </div>
          
          {/* Infinite Marquee Rails (Responsive) */}
          {/* Removed overflow-hidden here to allow shadows and hover scales to render freely without being clipped vertically */}
          {/* Pro UI Trick: Used CSS mask-image instead of white gradient overlays so hovered (black) cards fade transparently without getting a milky white wash! */}
          <div 
            className="flex-1 w-full flex flex-col items-center justify-center relative group py-4"
            style={{ 
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >
            {/* ----------------- DESKTOP: SINGLE RAIL ----------------- */}
            <div className="hidden md:flex flex-nowrap w-full">
              {[...Array(4)].map((_, trackIndex) => (
                <div 
                  key={`desktop-${trackIndex}`} 
                  className="flex flex-nowrap animate-marquee shrink-0 group-hover:[animation-play-state:paused]"
                  aria-hidden={trackIndex > 0 ? "true" : "false"}
                >
                  {services.map((service, index) => renderCard(service, false, index))}
                </div>
              ))}
            </div>

            {/* ----------------- MOBILE: TRIPLE RAIL ----------------- */}
            <div className="flex md:hidden flex-col gap-3 sm:gap-4 w-full">
              {/* Mobile Row 1: Scrolls Left */}
              <div className="flex flex-nowrap w-full">
                {[...Array(6)].map((_, trackIndex) => (
                  <div 
                    key={`mob1-${trackIndex}`} 
                    className="flex flex-nowrap animate-marquee shrink-0 group-hover:[animation-play-state:paused]"
                    aria-hidden={trackIndex > 0 ? "true" : "false"}
                  >
                    {services.slice(0, 3).map((service, index) => renderCard(service, true, index))}
                  </div>
                ))}
              </div>

              {/* Mobile Row 2: Scrolls Right */}
              <div className="flex flex-nowrap w-full">
                {[...Array(6)].map((_, trackIndex) => (
                  <div 
                    key={`mob2-${trackIndex}`} 
                    className="flex flex-nowrap animate-marquee-reverse shrink-0 group-hover:[animation-play-state:paused]"
                    aria-hidden={trackIndex > 0 ? "true" : "false"}
                  >
                    {services.slice(3, 6).map((service, index) => renderCard(service, true, index + 3))}
                  </div>
                ))}
              </div>

              {/* Mobile Row 3: Scrolls Left */}
              <div className="flex flex-nowrap w-full">
                {[...Array(6)].map((_, trackIndex) => (
                  <div 
                    key={`mob3-${trackIndex}`} 
                    className="flex flex-nowrap animate-marquee shrink-0 group-hover:[animation-play-state:paused]"
                    aria-hidden={trackIndex > 0 ? "true" : "false"}
                  >
                    {[services[6], services[7], services[0]].map((service, index) => renderCard(service, true, index + 6))}
                  </div>
                ))}
              </div>
            </div>

          </div>
          
          {/* CTA Button */}
          <div className="flex-none mt-8 md:mt-12 px-4 md:px-8">
            <button className="group flex items-center gap-3 bg-black text-white px-6 md:px-10 py-3 md:py-4 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              Explore All
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
            
        </section>

        {/* TECH SHOWCASE SECTION (Section 4) */}
        <section id="vault" className="w-full h-[100svh] relative bg-black overflow-hidden font-sans">
          
          {/* Base Layer: Cinematic Video Background */}
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover opacity-100"
            >
              <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_135039_b04d00db-6ee2-4e2a-a7f5-b2dfd3d24fd2.mp4" type="video/mp4" />
            </video>
            {/* Subtle base gradient for contrast */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* SVG Mask Definition (Bulletproof cross-browser cutout) */}
          <svg className="absolute w-0 h-0 pointer-events-none">
            <defs>
              <style>{`
                .mask-txt { x: 1.5rem; y: 6rem; font-size: 25vw; }
                .mask-tspan { x: 1.5rem; }
                @media (min-width: 768px) {
                  .mask-txt { x: 3rem; y: 8rem; font-size: 15vw; }
                  .mask-tspan { x: 3rem; }
                }
              `}</style>
              <mask id="knockout-mask">
                {/* White rectangle keeps the frosted glass intact everywhere... */}
                <rect width="100%" height="100%" fill="white" />
                {/* ...except where this black text renders, punching a perfect transparent hole */}
                <text 
                  dominantBaseline="hanging" 
                  fill="black" 
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontWeight="900"
                  textTransform="uppercase"
                  letterSpacing="-0.05em"
                  className="mask-txt"
                >
                  <tspan dy="0" className="mask-tspan">PRO-</tspan>
                  <tspan dy="0.75em" className="mask-tspan">LEVEL</tspan>
                </text>
              </mask>
            </defs>
          </svg>

          {/* Layer 1: Frosted Glass Wall (Masked) */}
          <div 
            className="absolute inset-y-0 left-0 w-full md:w-[45%] backdrop-blur-[30px] md:backdrop-blur-[50px] bg-[#050505]/60 border-r border-white/10 z-10 pointer-events-none"
            style={{ 
              mask: 'url(#knockout-mask)',
              WebkitMask: 'url(#knockout-mask)'
            }}
          ></div>

          {/* Layer 2: Bottom Left Content (Sits cleanly on top of the wall) */}
          <div className="absolute bottom-12 md:bottom-20 left-6 md:left-12 w-[calc(100%-3rem)] max-w-sm z-30 pointer-events-auto">
            <span className="flex items-center gap-4 text-[9px] font-bold tracking-[0.4em] text-white/50 uppercase mb-6">
              The Vault
              <div className="w-12 h-px bg-white/30"></div>
            </span>
            
            <p className="text-sm md:text-base text-gray-200 leading-relaxed font-medium">
              We don't just bring the music; we bring the club to you. Experience industry-leading sound systems and intelligent stage lighting setups engineered for flawless performance.
            </p>

            {/* Minimalist Accents / Links similar to the reference */}
            <div className="mt-10 flex gap-8 text-[9px] tracking-widest text-white/40 uppercase font-bold">
              <span className="hover:text-white cursor-pointer transition-colors">+ Explore</span>
              <span className="hover:text-white cursor-pointer transition-colors">+ Tech Specs</span>
            </div>
          </div>

          {/* Layer 3: Foreground Typography (Right Side) */}
          <div className="absolute bottom-12 md:bottom-20 right-6 md:right-12 z-30 pointer-events-none">
            <h2 className="text-[14vw] md:text-[9vw] font-black uppercase tracking-tighter leading-none text-white drop-shadow-2xl text-right">
              Production
            </h2>
          </div>

          {/* UI Accents (Crosshairs & Dots) matching reference aesthetic */}
          <div className="absolute top-12 right-12 z-30 text-white/20 hidden md:block">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2v20M2 12h20"/></svg>
          </div>
          <div className="absolute top-1/3 right-1/4 z-30 hidden md:block">
            <div className="w-2 h-2 bg-red-500/80 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
          </div>
          <div className="absolute bottom-1/3 right-12 z-30 text-white/20 hidden md:block">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2v20M2 12h20"/></svg>
          </div>
          
        </section>
      </main>
    </div>
  );
}

export default App;
