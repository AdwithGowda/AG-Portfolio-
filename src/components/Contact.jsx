import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-24 px-6 md:px-16 lg:px-24 flex items-center justify-center">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl">
        
        {/* Left Side - Brutalist Header */}
        <div className="lg:w-1/2 py-8 pl-4 pr-8 md:py-16 md:pl-8 md:pr-16 lg:py-24 lg:pl-12 lg:pr-24 flex flex-col justify-center bg-[#6E60EE] text-black relative">
          <h2 className="text-[24vw] sm:text-[22vw] lg:text-[13vw] xl:text-[14vw] font-heading font-black uppercase leading-[0.8] tracking-tighter flex flex-col -ml-1 lg:-ml-2">
            <span className="block">LET'S</span>
            <span className="block">TALK</span>
          </h2>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 p-8 md:p-16 lg:p-24 bg-[#050505] text-white flex flex-col justify-center border-l lg:border-l-0 lg:border-t border-white/5">
          <div className="max-w-xl">
            <p className="text-neutral-400 text-2xl md:text-3xl font-medium leading-relaxed mb-12">
              Interested in working together or just want to say hi? Feel free to reach out. I'm currently open to new opportunities.
            </p>
            
            <a 
              href="mailto:gowdaadwith@gmail.com" 
              className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-black bg-[#03E65B] rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 text-xl lg:text-2xl w-full sm:w-auto shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get in touch
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </span>
              <div className="absolute inset-0 w-full h-full bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
