const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// Change 300vh to 200vh
code = code.replace(/<div className="relative w-full h-\[300vh\] bg-black">/g, '<div className="relative w-full h-[200vh] bg-black">');

// Remove negative margin from Section 2
code = code.replace(/<section id="experiences" className="w-full min-h-\[100svh\] bg-white text-black pt-28 pb-12 md:pt-32 md:pb-20 flex flex-col items-center overflow-hidden relative mt-\[-100vh\] z-20">/g, '<section id="experiences" className="w-full min-h-[100svh] bg-white text-black pt-28 pb-12 md:pt-32 md:pb-20 flex flex-col items-center overflow-hidden relative">');

// Update scroll math in JS
const oldJS = `          // FADE BLACK OVERLAY (0 to 60vh)
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
          
          // SCROLL-LINKED CINEMATIC FLICKER (Section 2 Reveal)
          if (section2InnerRef.current) {
             if (scrollY > wh * 1.9) {
                 section2InnerRef.current.style.opacity = 1;
             } else if (scrollY > wh * 1.6) {
                 // Calculate a highly erratic jitter based on exact scroll position
                 const p = (scrollY - (wh * 1.6)) / (wh * 0.3); // p is 0 to 1
                 // Use high frequency sine waves to simulate a neon light flickering on
                 let jitter = (Math.sin(p * 60) + Math.cos(p * 45) + Math.sin(p * 100)) / 3;
                 // Map jitter (-1 to 1) to (0 to 1) and scale by progress so it resolves to solid
                 jitter = (jitter + 1) / 2;
                 section2InnerRef.current.style.opacity = p > 0.9 ? 1 : jitter * p * 1.5;
             } else {
                 section2InnerRef.current.style.opacity = 0;
             }
          }`;

const newJS = `          // FADE BLACK OVERLAY (0 to 40vh)
          let fadeProgress = scrollY / (wh * 0.4);
          fadeProgress = Math.max(0, Math.min(1, fadeProgress));
          if (overlayRef.current) {
            overlayRef.current.style.opacity = fadeProgress;
          }
          
          // ZOOM "O" LETTER (20vh to 100vh)
          const zoomStart = wh * 0.2;
          const zoomEnd = wh * 1.0;
          let zoomProgress = (scrollY - zoomStart) / (zoomEnd - zoomStart);
          zoomProgress = Math.max(0, Math.min(1, zoomProgress));
          
          if (zoomLetterRef.current) {
            // Cubic easing for cinematic dramatic zoom
            const scale = 1 + Math.pow(zoomProgress * 30, 3);
            zoomLetterRef.current.style.transform = \`scale(\${scale})\`;
            zoomLetterRef.current.style.opacity = zoomProgress > 0.01 ? Math.min(1, zoomProgress * 10) : 0;
          }
          
          // SCROLL-LINKED CINEMATIC FLICKER (Section 2 Reveal - triggers as section 2 scrolls into view)
          if (section2InnerRef.current) {
             const sec2Top = wh * 1.0; // Section 2 starts coming into view after 100vh
             if (scrollY > sec2Top + wh * 0.5) {
                 section2InnerRef.current.style.opacity = 1;
             } else if (scrollY > sec2Top) {
                 // Jitter as it scrolls in
                 const p = (scrollY - sec2Top) / (wh * 0.5);
                 let jitter = (Math.sin(p * 80) + Math.cos(p * 55) + Math.sin(p * 120)) / 3;
                 jitter = (jitter + 1) / 2;
                 section2InnerRef.current.style.opacity = p > 0.8 ? 1 : jitter * (p + 0.2);
             } else {
                 section2InnerRef.current.style.opacity = 0;
             }
          }`;

code = code.replace(oldJS, newJS);
fs.writeFileSync('src/App.jsx', code);
console.log('Fixed scroll timings.');
