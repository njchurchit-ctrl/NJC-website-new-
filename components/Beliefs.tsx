
import React from 'react';
import { BELIEFS } from '../constants';

const Beliefs: React.FC = () => {
  return (
    <section id="beliefs" className="py-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#B19470] font-semibold uppercase tracking-widest text-sm mb-4 block">What We Believe</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Foundations of Our Faith</h2>
          <p className="text-[#6A6A6A] text-lg">Our theology is simple but profound, rooted in the Gospel and the transformative power of the Holy Spirit.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BELIEFS.map((belief) => (
            <div 
              key={belief.title} 
              className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {belief.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#2C2C2C]">{belief.title}</h3>
              <p className="text-[#6A6A6A] leading-relaxed">
                {belief.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beliefs;
