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

  // Fallback timeout: ensures the loading screen doesn't get stuck indefinitely 
  // on mobile browsers with strict autoplay/loading policies.
  useEffect(() => {
    const timer = setTimeout(() => setIsVideoLoaded(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Helper to render cards consistently across mobile and desktop
  const renderCard = (service, isMobile = false, index = 0) => (
    <div 
      key={`${service.name}-${index}`} 
      className={`group/card relative overflow-hidden flex flex-col items-center justify-center flex-shrink-0 bg-white hover:bg-black hover:text-white transition-all duration-500 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl border border-gray-100 ${
        isMobile ? 'w-[180px] sm:w-[200px] h-[130px] sm:h-[140px] rounded-2xl mr-3 sm:mr-4' : 'w-[350px] lg:w-[450px] h-[280px] lg:h-[350px] rounded-[2rem] mr-8'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
      <service.icon className={`stroke-[1.5] text-black group-hover/card:text-white group-hover/card:scale-110 lg:group-hover/card:-translate-y-2 transition-all duration-500 relative z-10 ${
        isMobile ? 'w-7 h-7 sm:w-8 sm:h-8 mb-2 sm:mb-3 group-hover/card:-translate-y-1' : 'w-14 h-14 lg:w-16 lg:h-16 mb-6 group-hover/card:-translate-y-2'
      }`} />
      <h3 className={`font-bold uppercase tracking-widest text-center relative z-10 transition-all duration-500 ${
        isMobile ? 'text-[9px] sm:text-[10px] group-hover/card:-translate-y-1' : 'text-sm lg:text-base group-hover/card:-translate-y-2'
      }`}>
        {service.name}
      </h3>
      <div className={`absolute opacity-0 transform translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500 text-gray-400 ${
        isMobile ? 'bottom-3 sm:bottom-4' : 'bottom-8'
      }`}>
        <ArrowRight className={isMobile ? 'w-3 h-3 sm:w-4 sm:h-4' : 'w-5 h-5'} />
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
        <div className="text-3xl md:text-5xl font-black tracking-widest text-white animate-pulse flex flex-col items-center">
          SHP
          <span className="text-[10px] md:text-xs uppercase text-gray-400 tracking-[0.5em] mt-2 font-medium">Entertainment</span>
        </div>
        <div className="mt-8 flex gap-2">
          <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2.5 h-2.5 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
      {/* 
        Header 
        UI FIX 1: Added safe-area padding (pt-8 md:pt-10) so the logo and button 
        don't collide with the mobile device's status bar or notch.
      */}
      <header className="absolute top-0 w-full z-50 px-5 pt-8 md:px-10 md:pt-10 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-black tracking-widest text-white">
          SHP
          <span className="block text-[7px] md:text-[9px] uppercase text-gray-400 tracking-[0.4em] mt-1 font-medium">Entertainment</span>
        </div>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wider z-50">
          <a href="#home" className="text-gray-300 hover:text-white transition-colors">HOME</a>
          <a href="#experiences" className="text-gray-300 hover:text-white transition-colors">EXPERIENCES</a>
          <a href="#vault" className="text-gray-300 hover:text-white transition-colors">THE VAULT</a>
        </nav>
        
        <button className="bg-white text-black px-6 py-2.5 md:px-8 md:py-3 text-[10px] md:text-xs rounded-full font-extrabold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_4px_14px_rgba(255,255,255,0.25)] z-50">
          Book Now
        </button>
      </header>

      <main className="flex-grow">
        <section className="relative h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-black">
          
          {/* Background Video */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              onCanPlayThrough={() => setIsVideoLoaded(true)}
              onLoadedData={() => setIsVideoLoaded(true)}
              className="w-full h-full object-cover opacity-40 grayscale"
            >
              <source src="/video3.mp4" type="video/mp4" />
            </video>
            {/* Smooth Vignette/Gradient to blend the video into the pitch black */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80 pointer-events-none"></div>
          </div>

          {/* 
            Text Content 
            UI FIX: Raised the text slightly on desktop (md:top-[15svh]) so it sits perfectly behind his head, not his chest.
          */}
          <div className="z-10 text-center flex flex-col items-center absolute top-[20svh] md:top-[15svh] lg:top-[18svh] w-full px-4 md:px-8">
            <h1 className="flex flex-col items-center w-full">
              
              <span className="text-[3.5vw] md:text-[1.5vw] lg:text-[1.2rem] tracking-[0.5em] md:tracking-[0.8em] mb-2 md:mb-4 text-gray-300 whitespace-nowrap uppercase font-semibold opacity-90">
                We Make Every Moment
              </span>
              
              <span 
                className="text-[11.5vw] md:text-[9.5vw] lg:text-[8rem] text-white font-black leading-none tracking-tight whitespace-nowrap"
                style={{ textShadow: '0 0 30px rgba(255,255,255,0.3)' }}
              >
                UNFORGETTABLE
              </span>
              
            </h1>
          </div>

          {/* 
            DJ Image 
            UI FIX: Reverted to `object-contain` and used height constraints for desktop. 
            This prevents the browser from aggressively cropping his head on ultra-wide screens!
          */}
          <div className="absolute bottom-0 w-full flex justify-center items-end z-20 pointer-events-none">
            <img 
              src="/dj-hero.png" 
              alt="DJ Sheron performing" 
              className="w-[180%] sm:w-[140%] md:w-auto max-w-none md:max-w-full h-auto md:h-[70svh] lg:h-[80svh] object-contain object-bottom drop-shadow-[0_-15px_35px_rgba(0,0,0,0.8)]"
              fetchPriority="high"
            />
            {/* Bottom fade out so the DJ deck blends seamlessly into the next page section */}
            <div className="absolute bottom-0 w-full h-16 md:h-24 bg-gradient-to-t from-black to-transparent z-30 pointer-events-none"></div>
          </div>
          
        </section>

        {/* EXPERIENCES SECTION */}
        <section id="experiences" className="w-full h-[100svh] bg-white text-black pt-20 pb-8 md:pt-24 md:pb-10 flex flex-col items-center overflow-hidden relative">
          
          {/* Section Header (Fixed Height) */}
          <div className="flex-none text-center mb-6 md:mb-12 w-full flex flex-col items-center px-4 md:px-8">
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
          <div className="flex-1 w-full flex flex-col items-center justify-center relative overflow-hidden group">
            
            {/* Fade Gradients for smooth entrance/exit */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

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
          
          {/* CTA Button (Fixed Height) */}
          <div className="flex-none mt-6 md:mt-12 px-4 md:px-8">
            <button className="group flex items-center gap-3 bg-black text-white px-6 md:px-10 py-3 md:py-4 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              Explore All
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
            
        </section>
      </main>
    </div>
  );
}

export default App;
