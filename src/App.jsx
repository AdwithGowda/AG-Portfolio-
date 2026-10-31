import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-white selection:text-black relative overflow-x-clip">
      {/* Background Glow Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]"></div>
      </div>

      {/* Container */}
      <div className="w-full pb-8 flex flex-col min-h-screen relative z-10">
        
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <Home />
        
        <About />
        <Skills />
        <Projects />

        <Contact />
        
        {/* Footer */}
        <footer className="py-6 border-t border-white/10 flex justify-between items-center text-xs text-neutral-500 font-mono uppercase tracking-widest px-6 md:px-16 lg:px-24">
          <p>© {new Date().getFullYear()} AG</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">X</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
