import React from 'react';
import { 
  SiPython, SiC, 
  SiJavascript, SiReact, SiNodedotjs, SiExpress, SiDjango, SiHtml5, SiCss, 
  SiPostgresql, SiMongodb, 
  SiGit 
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { TbBrandVscode } from 'react-icons/tb';

const skillsData = [
  { name: 'Python', icon: <SiPython />, color: '#3776AB' },
  { name: 'C', icon: <SiC />, color: '#A8B9CC' },
  { name: 'Java', icon: <FaJava />, color: '#007396' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'React', icon: <SiReact />, color: '#61DAFB' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
  { name: 'Express', icon: <SiExpress />, color: '#000000' },
  { name: 'Django', icon: <SiDjango />, color: '#092E20' },
  { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <SiCss />, color: '#1572B6' },
  { name: 'SQL', icon: <FaDatabase />, color: '#f29111' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'Git', icon: <SiGit />, color: '#F05032' },
  { name: 'VS Code', icon: <TbBrandVscode />, color: '#007ACC' },
];

const SectionHeader = () => (
  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-16">
    <div>
      <p className="text-xs font-bold tracking-widest uppercase text-neutral-500 mb-2">MY SKILLS</p>
      <h2 className="text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] font-heading font-black tracking-tighter text-white leading-[0.85] whitespace-nowrap uppercase">SKILLS</h2>
    </div>
    <div className="hidden md:block w-px h-16 bg-white/20 mx-4"></div>
    <p className="text-neutral-400 max-w-sm text-sm font-medium leading-relaxed">
      A diverse skill set that helps me build efficient, scalable and user-friendly web applications.
    </p>
  </div>
);

const SkillsShelfLayout = ({ skills }) => {
  const rows = [];
  const midpoint = Math.ceil(skills.length / 2);
  rows.push(skills.slice(0, midpoint));
  rows.push(skills.slice(midpoint));

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-24 sm:gap-32 pt-10 pb-20">
      {rows.map((row, rowIdx) => (
        <div key={rowIdx} className="relative w-full flex justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 z-10">
          
          {row.map((skill, i) => (
            <div key={i} className="relative group cursor-pointer w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
              
              {/* Floating Icon Box */}
              <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:-translate-y-4 sm:group-hover:-translate-y-6 z-20">
                <div 
                  className="w-full h-full bg-[#0a0a0a] border border-white/20 rounded-[25%] flex flex-col items-center justify-center text-white transition-all duration-300 shadow-lg group-hover:border-[var(--hover-color)] group-hover:bg-[#111111]"
                  style={{ '--hover-color': skill.color }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-colors duration-300 group-hover:text-[var(--hover-color)]">
                    {skill.icon}
                  </div>
                </div>
              </div>

              {/* Reflection */}
              <div 
                className="absolute inset-0 z-0 opacity-40 transition-all duration-500 group-hover:opacity-10 group-hover:blur-[2px]"
                style={{
                  transform: 'translateY(calc(100% + 16px)) scaleY(-1)',
                  WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
                  maskImage: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
                }}
              >
                <div className="w-full h-full bg-[#0a0a0a] border border-white/20 rounded-[25%] flex flex-col items-center justify-center text-white/50">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    {skill.icon}
                  </div>
                </div>
              </div>
              
              {/* Tooltip */}
              <div className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] sm:text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30">
                {skill.name}
              </div>
            </div>
          ))}

          {/* Shelf Line */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[110%] max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[1px]"></div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[110%] max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>
          
        </div>
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-black min-h-screen flex flex-col justify-center transition-colors duration-300 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <SkillsShelfLayout skills={skillsData} />
      </div>
    </section>
  );
};

export default Skills;
