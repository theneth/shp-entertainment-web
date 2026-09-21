const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Wrap Hero Section
const heroStartStr = `<section id="home" className="relative w-full h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-20">`;
const newHeroStart = `
        {/* SCROLL-LINKED TRANSITION CONTAINER */}
        <div className="relative w-full h-[300vh] bg-black">
          {/* STICKY VIEWPORT */}
          <div className="sticky top-0 w-full h-[100vh] overflow-hidden">
            
            {/* HERO SECTION */}
            <section id="home" className="absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden pt-20">`;

code = code.replace(heroStartStr, newHeroStart);

// 2. Add overlays after Hero Section ends, before Experiences Section starts
const heroEndStr = `        </section>

        {/* EXPERIENCES SECTION */}`;
const newHeroEnd = `        </section>
            
            {/* FADE TO BLACK OVERLAY */}
            <div ref={overlayRef} className="absolute inset-0 bg-black opacity-0 z-40 pointer-events-none transition-opacity duration-100 ease-linear"></div>
            
            {/* GIANT 'O' ZOOM MASK */}
            <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
                <svg ref={zoomLetterRef} viewBox="0 0 200 200" className="w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] text-white opacity-0 transform origin-center will-change-transform">
                    {/* A thick white ring. As it scales 1000x, the stroke completely covers the screen in white. */}
                    <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="40" />
                </svg>
            </div>
          </div>
        </div>

        {/* EXPERIENCES SECTION */}`;

code = code.replace(heroEndStr, newHeroEnd);

// 3. Wrap Section 2 Inner Content
const section2StartStr = `<section id="experiences" className="w-full min-h-[100svh] bg-white text-black pt-28 pb-12 md:pt-32 md:pb-20 flex flex-col items-center overflow-hidden relative">`;
const newSection2Start = `<section id="experiences" className="w-full min-h-[100svh] bg-white text-black pt-28 pb-12 md:pt-32 md:pb-20 flex flex-col items-center overflow-hidden relative">
          
          <div ref={section2InnerRef} className="w-full flex flex-col items-center opacity-0 will-change-opacity">`;

code = code.replace(section2StartStr, newSection2Start);

// 4. Close the Section 2 Inner Content (it ends right before Section 3 "THE VAULT")
const section3StartStr = `{/* THE VAULT SECTION */}`;
const newSection3Start = `</div>
        
        {/* THE VAULT SECTION */}`;
code = code.replace(section3StartStr, newSection3Start);

fs.writeFileSync('src/App.jsx', code);
console.log('Successfully wrapped structures.');
