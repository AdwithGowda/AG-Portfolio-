import React, { useState, useEffect } from 'react';
import Lanyard from './Lanyard';
import MeshText from './MeshText';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main id="home" className="flex-1 flex flex-col md:flex-row items-center justify-between pt-48 pb-20 min-h-[80vh] gap-12 px-6 md:px-16 lg:px-24 bg-black">
      <div className="space-y-8 max-w-2xl w-full md:w-1/2 relative z-10 mt-8">
        <div className="inline-block px-3 py-1 border border-neutral-800 rounded-full text-xs font-mono text-neutral-400 tracking-widest mb-4">
          Hello, I'm
        </div>
        
        <h1 className="text-6xl md:text-8xl font-heading font-black tracking-tighter leading-[0.9]">
          <div className="w-full h-[100px] md:h-[180px] relative z-20">
            <MeshText 
              text="Adwith" 
              color="#ffffff" 
              font={{ variant: "Black", fontSize: isMobile ? 90 : 140, fontWeight: 900, fontFamily: "Inter" }}
              customColors={["#ffffff", "#d4d4d4"]} 
              force={25}
            />
          </div>
          <div className="w-full h-[40px] md:h-[60px] -mt-2 md:-mt-4 relative z-20 block">
            <MeshText 
              text="Computer Science Engineer" 
              color="#d4d4d4" 
              font={{ variant: "Bold", fontSize: isMobile ? 20 : 36, fontWeight: 700, fontFamily: "Inter" }}
              customColors={["#ffffff", "#a3a3a3"]} 
              force={25}
            />
          </div>
        </h1>
        
        <p className="max-w-xl text-neutral-400 text-lg md:text-xl leading-relaxed font-light">
          Passionate about learning, growing, and creating impactful solutions.
        </p>

        <div className="pt-8 flex flex-wrap gap-6 items-center">
          <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black bg-white rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center">
              View My Work
              <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
            <div className="absolute inset-0 w-full h-full bg-neutral-200 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
          </a>
          
          <a href="#" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white border border-white/20 rounded-full hover:bg-white/5 transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center">
              My Resume
            </span>
          </a>
        </div>
      </div>

      <div className="hidden md:flex w-full md:w-1/2 h-[500px] justify-center items-center relative z-10 cursor-grab active:cursor-grabbing transform translate-y-4 md:translate-x-12">
        <Lanyard position={[0, 0, 12]} gravity={[0, -30, 0]} scale={0.8} />
      </div>
    </main>
  );
};

export default Home;
