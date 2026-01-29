import React from 'react';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full border-b border-zinc-200 bg-white px-4 sm:px-6 py-4 sm:py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
  
        <div 
          className="text-zinc-900 font-bold text-base sm:text-lg tracking-tight cursor-pointer whitespace-nowrap"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Nikhil Kumar
        </div>

        <div className="flex items-center gap-3 sm:gap-8">
          {[
            { name: 'About', id: 'about-section' },
            { name: 'Projects', id: 'projects-section' },
            { name: 'Skills', id: 'skills-section' },
            { name: 'Contact', id: 'contact-section' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-[11px] sm:text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors whitespace-nowrap"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;