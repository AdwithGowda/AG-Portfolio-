import React, { useRef, useState } from 'react';
import { LuArrowUpRight, LuGithub, LuArrowRight, LuAperture } from 'react-icons/lu';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const projects = [
  {
    id: '01',
    category: 'AGRICULTURE WEB APP',
    shortTitle: 'AgriConnect',
    title: 'Agriculture Web App (AgriConnect)',
    description: 'Built a platform for farmers to detect plant diseases using image input. Integrated government schemes and crop growth insights.',
    techStack: ['React', 'Node.js', 'External APIs'],
    demoLink: '#',
    githubLink: '#',
    image: '/id1.jpg',
    color: '#FFFFFF'
  },
  {
    id: '02',
    category: 'NEIGHBOURHOOD ASSET',
    shortTitle: 'ShareHub',
    title: 'Neighborhood Asset Sharing (ShareHub)',
    description: 'Architected a full-stack P2P rental platform utilizing a state-driven engine to securely automate rental lifecycles and ledger entries.',
    techStack: ['React', 'Django REST', 'PostgreSQL'],
    demoLink: 'https://sharehub-front.onrender.com/',
    githubLink: '#',
    image: '/id2.png',
    color: '#FFFFFF'
  },
  {
    id: '03',
    category: 'DIGITAL ADMINISTRATION',
    shortTitle: 'Hostel Management',
    title: 'Hostel Management System',
    description: 'Developed a digital solution to automate hostel operations, removing the manual workload for recordkeeping and task management.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    demoLink: '#',
    githubLink: '#',
    image: '/id3.png',
    color: '#FFFFFF'
  },
  {
    id: '04',
    category: 'E-COMMERCE',
    shortTitle: 'AG Fashion',
    title: 'AG Fashion',
    description: 'AG Fashion is a modern e-commerce platform for discovering and shopping stylish clothing and accessories. It provides an intuitive interface, seamless navigation, and a responsive design to deliver a smooth and enjoyable shopping experience.',
    techStack: ['React', 'Tailwind CSS', 'Node.js'],
    demoLink: 'https://ag-e-commerce-lf97.onrender.com',
    githubLink: '#',
    image: '/id4.png',
    color: '#FFFFFF'
  },
  {
    id: '05',
    category: 'Prompt Gallery',
    shortTitle: 'Prompt Gallery',
    title: 'Prompt Gallery',
    description: 'Prompt Gallery is a smart platform for creating, organizing, and managing AI prompts in one place. It enables users to quickly save, categorize, and reuse prompts with one-click copying across multiple AI platforms. The platform improves productivity by making prompt management simple, fast, and efficient.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    demoLink: 'https://prompt-gallery-frontend-hilv.onrender.com/',
    githubLink: '#',
    image: '/id5.png',
    color: '#FFFFFF'
  }
];

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeProject, setActiveProject] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Calculates which project index should be active based on scroll progress
    // Math.round ensures it flips precisely at the halfway point between cards
    const activeIdx = Math.round(latest * (projects.length - 1));
    if (activeIdx !== activeProject) {
      setActiveProject(activeIdx);
    }
  });

  return (
    <section 
      id="projects" 
      className="bg-[#000000] text-white relative w-full pt-24"
    >
      <div className="w-full text-center pb-16 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center items-center text-[13vw] sm:text-[14vw] md:text-[15vw] font-heading font-black tracking-tighter uppercase text-white mb-6 leading-[0.8] whitespace-nowrap"
        >
          PROJECTS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-400 max-w-2xl mx-auto text-lg md:text-xl"
        >
          A curated selection of my recent work focusing on clean interfaces, robust architectures, and innovative solutions.
        </motion.p>
      </div>

      <div ref={containerRef} className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row relative">
        
        {/* Left column (Sticky Titles) */}
        <div className="hidden md:flex w-full md:w-[45%] sticky top-0 h-screen flex-col justify-center px-8 md:px-12 lg:px-20">
           <div className="flex flex-col gap-4">
             {projects.map((proj, i) => (
               <h2 
                 key={proj.id}
                 className={`text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tighter transition-all duration-500 cursor-pointer ${
                   activeProject === i 
                     ? 'opacity-100 scale-100 origin-left translate-x-4' 
                     : 'text-neutral-700 opacity-50 scale-95 origin-left hover:text-neutral-500'
                 }`}
                 style={{ color: activeProject === i ? proj.color : undefined }}
               >
                 {proj.category || proj.shortTitle}
               </h2>
             ))}
           </div>
        </div>

        {/* Right column (Stacked Cards) */}
        <div className="w-full md:w-[55%] flex flex-col relative">
           {projects.map((proj, i) => (
             <div 
               key={proj.id} 
               className="h-screen w-full flex items-center justify-center p-6 md:p-12 lg:p-16 sticky top-0"
             >
               <motion.div 
                 className="w-full max-w-2xl bg-[#111] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 flex flex-col"
               >
                 {/* Image */}
                 <div className="w-full aspect-video sm:aspect-[21/9] overflow-hidden bg-black/50 shrink-0">
                   <img 
                     src={proj.image} 
                     alt={proj.title} 
                     className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                   />
                 </div>
                 
                 {/* Content */}
                 <div className="p-6 md:p-8 flex flex-col grow">
                   {/* Mobile Title */}
                   <h2 
                     className="font-black text-lg mb-2 md:hidden uppercase tracking-wider"
                     style={{ color: proj.color }}
                   >
                     {proj.category || proj.shortTitle}
                   </h2>
                   
                   <h3 className="text-2xl md:text-3xl font-black mb-3 leading-tight tracking-tight uppercase text-white">
                     {proj.title}
                   </h3>
                   <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-4">
                     {proj.description}
                   </p>
                   
                   {/* Tags */}
                   <div className="flex flex-wrap gap-2 mb-6">
                     {proj.techStack.map(tech => (
                       <span key={tech} className="bg-white/5 text-neutral-300 px-3 py-1.5 text-xs rounded-full font-medium border border-white/10">
                         {tech}
                       </span>
                     ))}
                   </div>
                   
                   {/* Links */}
                   <div className="flex items-center gap-4 mt-auto">
                     <a 
                       href={proj.demoLink !== '#' ? proj.demoLink : proj.githubLink}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-neutral-300 transition-colors flex items-center gap-2"
                     >
                       Try now <LuArrowUpRight size={18} />
                     </a>
                     <a 
                       href={proj.githubLink}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-white hover:text-neutral-300 transition-colors p-3 bg-white/5 border border-white/10 rounded-full flex items-center justify-center"
                     >
                       <LuGithub size={22} />
                     </a>
                   </div>
                 </div>
               </motion.div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
