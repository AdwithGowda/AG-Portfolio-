import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 border-b border-white/10 bg-black/60 backdrop-blur-xl px-6 md:px-16 lg:px-24">
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-2xl tracking-tighter uppercase group cursor-pointer">
          <span className="inline-block transition-transform group-hover:-translate-y-1">A</span>
          <span className="inline-block transition-transform group-hover:translate-y-1">G</span>
          <span className="mx-2 text-neutral-600">|</span>
          <span className="text-neutral-400 group-hover:text-white transition-colors">PORTFOLIO</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium text-neutral-400">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <a href={link.href} className="hover:text-white transition-colors block pb-1">
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden text-neutral-400 hover:text-white transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-2xl mx-2">
          <ul className="flex flex-col text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-white hover:bg-white/5 transition-colors py-3 px-4 rounded-lg"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
