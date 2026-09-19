import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-peoBlack text-pureWhite font-sans overflow-hidden flex flex-col">
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
        <section className="relative h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-peoBlack">
          
          {/* Background Video */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40 grayscale">
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
            <div className="absolute bottom-0 w-full h-16 md:h-24 bg-gradient-to-t from-peoBlack to-transparent z-30 pointer-events-none"></div>
          </div>
          
        </section>
      </main>
    </div>
  );
}

export default App;
