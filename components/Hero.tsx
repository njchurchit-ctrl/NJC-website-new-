
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/njc_main/1920/1080?grayscale" 
          alt="Church atmosphere" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF8]/50 to-[#FAFAF8]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2C2C2C] leading-tight">
          Building God's Kingdom <br /> <span className="text-[#B19470] italic">with Love and Grace.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#6A6A6A] mb-10 max-w-2xl mx-auto leading-relaxed">
          Welcome to New Jerusalem Church, a Spirit-led community in the heart of Mumbai, 
          dedicated to discipleship, prayer, and serving the world with the Gospel of Christ.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#visit" 
            className="px-8 py-4 bg-[#B19470] text-white rounded-full font-medium hover:bg-[#967B5A] transition-all shadow-md"
          >
            Visit Us This Sunday
          </a>
          <a 
            href="#story" 
            className="px-8 py-4 border border-[#B19470] text-[#B19470] rounded-full font-medium hover:bg-[#B19470]/10 transition-all"
          >
            Our Story
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#B19470]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
