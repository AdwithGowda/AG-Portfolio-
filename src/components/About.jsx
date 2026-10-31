import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState('whoami');
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 10%"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [45, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative bg-black select-none flex items-center justify-center py-24 md:py-32 overflow-hidden perspective-[1200px]"
    >
        {/* Main Content Container */}
        <motion.div 
          style={{ 
            rotateX, 
            scale, 
            y, 
            opacity,
            transformStyle: "preserve-3d"
          }}
          className="relative z-10 w-full max-w-[95%] md:max-w-7xl mx-auto rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_rgba(255,255,255,0.05)] px-6 py-10 md:p-12 lg:p-16 xl:p-20 overflow-hidden"
        >
          {/* Subtle animated gradient background inside the card */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-white/[0.02] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16 items-center w-full">
            
            {/* Left Column - Title & Profile Image */}
            <div className="xl:col-span-5 flex flex-col items-center justify-center relative transition-colors duration-300">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter text-white mb-4 uppercase text-center drop-shadow-lg">
                ABOUT
              </h2>
              <div className="w-16 h-1.5 bg-white/80 rounded-full mb-8 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
              
              {/* Profile Image Frame with Subtle Glassmorphism Border */}
              <div className="rounded-[2.5rem] overflow-hidden relative group aspect-[4/5] w-56 md:w-64 xl:w-full max-w-[320px] shadow-2xl border border-white/20 bg-neutral-900/50 backdrop-blur-md">
                <img 
                  src="/profile.jpg" 
                  alt="Adwith" 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
              </div>
            </div>

            {/* Right Column - Premium Glassmorphic Tabbed Content Card */}
            <div className="xl:col-span-7 flex flex-col gap-8 w-full">
              
              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setActiveTab('whoami')}
                  className={`px-6 md:px-8 py-3.5 rounded-full font-bold tracking-wider uppercase text-xs md:text-sm transition-all duration-500 shadow-sm backdrop-blur-md border ${
                    activeTab === 'whoami' 
                      ? 'bg-white text-black border-white scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                      : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  Who am I
                </button>
                <button 
                  onClick={() => setActiveTab('internships')}
                  className={`px-6 md:px-8 py-3.5 rounded-full font-bold tracking-wider uppercase text-xs md:text-sm transition-all duration-500 shadow-sm backdrop-blur-md border ${
                    activeTab === 'internships' 
                      ? 'bg-white text-black border-white scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                      : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  Internship
                </button>
              </div>

              {/* Content Area */}
              <div className="min-h-[400px] flex flex-col justify-start relative">
                
                {activeTab === 'whoami' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col h-full"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-lg">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <span className="text-sm font-bold tracking-[0.2em] uppercase text-white/90">WHO I AM</span>
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-8 text-white leading-tight">
                      Hi, I'm Adwith M J,
                    </h3>
                    
                    <div className="flex flex-col gap-6 text-base md:text-lg lg:text-xl leading-relaxed text-neutral-300 font-medium max-w-2xl">
                      <p>
                        A Computer Science Engineering graduate from Shri Madhwa Vadiraja Institute of Technology and Management, Bantakal, with a CGPA of <span className="text-white font-bold">8.76</span>.
                      </p>
                      <p>
                        I am passionate about solving real-world problems through innovative and user-focused solutions.
                      </p>
                      <p>
                        I am a quick learner, a dedicated team player, and always eager to take on new challenges that help me grow professionally.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'internships' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col gap-6"
                  >
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-lg">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                      </div>
                      <span className="text-sm font-bold tracking-[0.2em] uppercase text-white/90">EXPERIENCE</span>
                    </div>

                    <div className="grid gap-6">
                      {/* Internship 1 */}
                      <div className="p-6 md:p-8 rounded-[1.5rem] bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-md group">
                        <h4 className="text-xl md:text-2xl font-heading font-black mb-2 text-white transition-colors">Quantum Learning's</h4>
                        <p className="text-white/80 font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Web Development Intern</p>
                        <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-medium">
                          Developed responsive web applications using Django, JavaScript, HTML, and CSS. Built backend features with PostgreSQL and integrated REST APIs for seamless functionality. Collaborated with the team to debug, optimize, and deploy scalable web solutions.
                        </p>
                      </div>

                      {/* Internship 2 */}
                      <div className="p-6 md:p-8 rounded-[1.5rem] bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-md group">
                        <h4 className="text-xl md:text-2xl font-heading font-black mb-2 text-white transition-colors">CESL Academics</h4>
                        <p className="text-white/80 font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Web Development Intern</p>
                        <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-medium">
                          Developed full-stack web applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js). Built responsive user interfaces and implemented CRUD operations with MongoDB integration. Collaborated with the team to optimize application performance and ensure cross-device compatibility.
                        </p>
                      </div>
                    </div>

                  </motion.div>
                )}
                
              </div>
            </div>

          </div>
        </motion.div>
    </section>
  );
};

export default About;


