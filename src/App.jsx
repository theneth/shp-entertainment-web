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
        <section id="experiences" className="w-full min-h-[100svh] bg-white text-black py-16 px-4 md:px-8 flex flex-col justify-center items-center">
          <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
            
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-20 w-full flex flex-col items-center">
              <span className="flex items-center gap-3 text-[10px] md:text-xs font-black tracking-[0.4em] md:tracking-[0.5em] text-gray-400 uppercase mb-4 md:mb-6">
                <div className="w-6 md:w-10 h-px bg-gray-300"></div>
                Our Expertise
                <div className="w-6 md:w-10 h-px bg-gray-300"></div>
              </span>
              <h2 className="text-4xl min-[400px]:text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] drop-shadow-sm">
                Curated <br className="md:hidden" /> Experiences
              </h2>
            </div>
            
            {/* Mobile-First Bento Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-6 w-full">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`group relative overflow-hidden flex flex-col items-center justify-center p-6 md:p-8 min-h-[160px] md:min-h-[240px] bg-white hover:bg-black hover:text-white rounded-3xl md:rounded-[2rem] transition-all duration-500 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl border border-gray-100 ${service.span}`}
                >
                  {/* Subtle background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <service.icon className="w-8 h-8 md:w-12 md:h-12 mb-4 md:mb-6 stroke-[1.5] text-black group-hover:text-white group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 relative z-10" />
                  
                  <h3 className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest text-center relative z-10 group-hover:-translate-y-2 transition-all duration-500">
                    {service.name}
                  </h3>
                  
                  {/* Arrow Indicator that slides up on hover */}
                  <div className="absolute bottom-4 md:bottom-8 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-gray-400">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <button className="mt-12 md:mt-20 group flex items-center gap-4 bg-black text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              Explore All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
