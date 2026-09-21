const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Add useRef
code = code.replace("import React, { useState, useEffect } from 'react';", "import React, { useState, useEffect, useRef } from 'react';");

// 2. Add Refs and Scroll Logic
const refCode = `
  const overlayRef = useRef(null);
  const zoomLetterRef = useRef(null);
  const section2InnerRef = useRef(null);

  // Cinematic 60fps Scroll Transition Logic
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      // Navbar theme
      setIsScrolled(window.scrollY > window.innerHeight * 0.9);
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const wh = window.innerHeight;
          
          // FADE BLACK OVERLAY (0 to 60vh)
          let fadeProgress = scrollY / (wh * 0.6);
          fadeProgress = Math.max(0, Math.min(1, fadeProgress));
          if (overlayRef.current) {
            overlayRef.current.style.opacity = fadeProgress;
          }
          
          // ZOOM "O" LETTER (30vh to 180vh)
          const zoomStart = wh * 0.3;
          const zoomEnd = wh * 1.8;
          let zoomProgress = (scrollY - zoomStart) / (zoomEnd - zoomStart);
          zoomProgress = Math.max(0, Math.min(1, zoomProgress));
          
          if (zoomLetterRef.current) {
            // Cubic easing for cinematic dramatic zoom
            const scale = 1 + Math.pow(zoomProgress * 20, 3);
            zoomLetterRef.current.style.transform = \`scale(\${scale})\`;
            zoomLetterRef.current.style.opacity = zoomProgress > 0.01 ? Math.min(1, zoomProgress * 5) : 0;
          }
          
          // BLINK-IN SECTION 2 (after 180vh, as it scrolls into view naturally)
          if (section2InnerRef.current) {
             const blinkStart = wh * 1.8;
             if (scrollY > blinkStart) {
                 section2InnerRef.current.style.opacity = 1;
                 section2InnerRef.current.style.animation = 'none'; // stops the infinite pulse once fully in
             } else if (scrollY > wh * 1.5) {
                 section2InnerRef.current.style.opacity = 0.5;
                 section2InnerRef.current.style.animation = 'pulse 0.3s ease-in-out infinite alternate';
             } else {
                 section2InnerRef.current.style.opacity = 0;
                 section2InnerRef.current.style.animation = 'none';
             }
          }

          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
`;
code = code.replace(/  \/\/ Listen to scroll to change navbar theme[\s\S]*?\}, \[\]\);/, refCode);

fs.writeFileSync('src/App.jsx', code);
console.log('Successfully injected hooks.');
