const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

const oldBlink = `          // BLINK-IN SECTION 2 (after 180vh, as it scrolls into view naturally)
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
          }`;

const newBlink = `          // SCROLL-LINKED CINEMATIC FLICKER (Section 2 Reveal)
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

code = code.replace(oldBlink, newBlink);
fs.writeFileSync('src/App.jsx', code);
